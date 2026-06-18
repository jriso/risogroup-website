#!/usr/bin/env node
// Regression tests for the claude-cost calculator's pricing + unrecognized-model
// warning. Loads the REAL <script> from projects/claude-cost.html into a Node VM
// with a minimal DOM stub, drives render(), and asserts on the #model-warn banner
// and on calc() output. No dependencies — run with: node tests/claude-cost.ui.test.mjs
import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const here = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(here, '..', 'projects', 'claude-cost.html'), 'utf8');
const src = html.match(/<script>\s*(const P=[\s\S]*?)<\/script>/)[1];

// --- minimal DOM + browser-global stub so the page script can load and run ---
const els = {};
const makeEl = () => ({
  textContent: '', innerHTML: '', value: '0.5',
  style: {}, dataset: {},
  classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
  appendChild() {}, addEventListener() {}, querySelector() { return null; },
});
const document = {
  getElementById: (id) => (els[id] ||= makeEl()),
  querySelector: () => null,
  querySelectorAll: () => [],
  createElement: () => makeEl(),
  addEventListener: () => {},
};
els['cr-slider'] = Object.assign(makeEl(), { value: '0.5' });

const ctx = {
  document, window: {}, location: { search: '' }, URLSearchParams,
  history: { replaceState() {} }, navigator: {}, performance: { now: () => 0 },
  requestAnimationFrame: () => 0, cancelAnimationFrame: () => {}, console,
};
vm.createContext(ctx);
// Append a bootstrap in the SAME lexical scope so we can set the `let D` and call render().
vm.runInContext(src + '\n;globalThis.__t={setD:x=>{D=x},render,coverage,rate,calc};', ctx);
const T = ctx.__t;

const tok = (o = {}) => ({ i: 0, o: 0, cr: 0, c5: 0, c1: 0, ...o });
const base = { month: '2026-06', days: 10, month_days: 30, requests: 5000, sessions: 40 };
function warnFor(models) {
  T.setD({ ...base, models });
  T.render(false);
  const w = els['model-warn'];
  return { shown: w.style.display !== 'none', text: w.innerHTML };
}

let passed = 0;
const test = (name, fn) => { fn(); passed++; console.log(`  ok  ${name}`); };

// --- coverage() classification ---
test('exact entry is covered', () => assert.equal(T.coverage('claude-opus-4-8'), 'exact'));
test('dated pin of a known alias is covered', () => assert.equal(T.coverage('claude-opus-4-8-20260101'), 'exact'));
test('future fable falls back to fable tier', () => assert.equal(T.coverage('claude-fable-6'), 'family:fable'));
test('future mythos falls back to mythos tier', () => assert.equal(T.coverage('claude-mythos-preview'), 'family:mythos'));
test('no-tier model is default', () => assert.equal(T.coverage('claude-zzz-9'), 'default'));

// --- pricing ---
test('fable 5 priced at $10/$50 (2M output => $100)', () => {
  const c = T.calc({ ...base, models: { 'claude-fable-5': tok({ o: 2e6 }) } }, 0.5);
  assert.equal(Math.round(c.total), 100);
});
test('mythos 5 priced at $10/$50', () => {
  const c = T.calc({ ...base, models: { 'claude-mythos-5': tok({ o: 2e6 }) } }, 0.5);
  assert.equal(Math.round(c.total), 100);
});
test('future fable-6 reaches fable tier rates (not opus)', () => {
  const c = T.calc({ ...base, models: { 'claude-fable-6': tok({ o: 1e6 }) } }, 0.5);
  assert.equal(Math.round(c.total), 50); // $50/MTok, not opus $25
});

// --- warning banner ---
test('no warning when all models are known', () => {
  const r = warnFor({ 'claude-opus-4-8': tok({ o: 1e6 }), 'claude-fable-5': tok({ o: 1e6 }) });
  assert.equal(r.shown, false);
});
test('no warning for a dated pin of a known alias', () => {
  assert.equal(warnFor({ 'claude-opus-4-8-20260101': tok({ o: 1e6 }) }).shown, false);
});
test('warns + names a tier-estimated model', () => {
  const r = warnFor({ 'claude-fable-6': tok({ o: 1e6 }) });
  assert.equal(r.shown, true);
  assert.match(r.text, /claude-fable-6/);
  assert.match(r.text, /fable rates/);
});
test('warns + flags no-tier-match as Opus fallback', () => {
  const r = warnFor({ 'claude-zzz-9': tok({ o: 1e6 }) });
  assert.equal(r.shown, true);
  assert.match(r.text, /No tier match/);
});
test('escapes HTML in model ids (no XSS)', () => {
  const r = warnFor({ 'claude-<script>x</script>': tok({ o: 1e6 }) });
  assert.match(r.text, /&lt;script&gt;/);
  assert.doesNotMatch(r.text, /<script>x<\/script>/);
});

console.log(`\n${passed} passed`);
