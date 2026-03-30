// Hiring Pulse Dashboard

const COLORS = {
    data_ai:    { primary: '#2E86AB', secondary: '#4ECDC4', tertiary: '#1A5276' },
    data:       { primary: '#2E86AB', secondary: '#4ECDC4', tertiary: '#1A5276' },
    ai:         { primary: '#FF6B35', secondary: '#F18F01', tertiary: '#7B2CBF' },
    swe:        { primary: '#4ECDC4', secondary: '#2E86AB', tertiary: '#1A5276' },
    pm:         { primary: '#7B2CBF', secondary: '#AA96DA', tertiary: '#1D3557' },
    cs:         { primary: '#E94F37', secondary: '#FF6B35', tertiary: '#F18F01' },
    design:     { primary: '#1A5276', secondary: '#2E86AB', tertiary: '#4ECDC4' },
    sales:      { primary: '#00A86B', secondary: '#4ECDC4', tertiary: '#1D3557' },
    marketing:  { primary: '#F18F01', secondary: '#FF6B35', tertiary: '#E94F37' },
    ga:         { primary: '#6A737D', secondary: '#AA96DA', tertiary: '#7B2CBF' },
    operations: { primary: '#1D3557', secondary: '#2E86AB', tertiary: '#1A5276' },
    other:      { primary: '#8B5CF6', secondary: '#AA96DA', tertiary: '#586069' },
};

const FLOW_COLORS = {
    data_ai:    { primary: '#FF6B35', tertiary: '#7B2CBF' },
    data:       { primary: '#FF6B35', tertiary: '#7B2CBF' },
    ai:         { primary: '#00A86B', tertiary: '#2E86AB' },
    swe:        { primary: '#00A86B', tertiary: '#2E86AB' },
    pm:         { primary: '#E94F37', tertiary: '#7B2CBF' },
    cs:         { primary: '#F18F01', tertiary: '#FF6B35' },
    design:     { primary: '#1D3557', tertiary: '#2E86AB' },
    sales:      { primary: '#4ECDC4', tertiary: '#1D3557' },
    marketing:  { primary: '#E94F37', tertiary: '#FF6B35' },
    ga:         { primary: '#AA96DA', tertiary: '#7B2CBF' },
    operations: { primary: '#2E86AB', tertiary: '#1A5276' },
    other:      { primary: '#586069', tertiary: '#AA96DA' },
};

const ROLE_LABELS = {
    data_ai: 'Data & AI', data: 'Data', ai: 'AI',
    swe: 'Engineering', pm: 'Product Management',
    cs: 'Customer Support', design: 'Design',
    sales: 'Sales', marketing: 'Marketing', ga: 'G&A',
    operations: 'Operations', other: 'Other',
};

const HERO_ROLES = ['swe', 'ai', 'data', 'cs', 'pm', 'sales', 'marketing', 'design', 'ga', 'operations', 'other'];
const SUMMARY_ROLES = ['swe', 'sales', 'ga', 'marketing', 'operations', 'pm', 'cs', 'data', 'ai', 'design', 'other'];
const MUTED = '#d1d5da';

const ROLE_DEFS = {
    swe: {
        desc: 'All IC and leadership software engineering roles. Includes backend, frontend, full-stack, mobile, platform, infrastructure, SRE, DevOps, embedded, firmware, QA/SDET, plus titles like Product Engineer, Founding Engineer, Member of Technical Staff, and Tech Lead.',
        titles: 'Senior Software Engineer, Software Engineer, Forward Deployed Engineer, Staff Software Engineer, Engineering Manager, Senior Backend Engineer, Product Engineer',
        excludes: 'Solutions Engineer, Field Engineer, Customer Engineer, Support Engineer, Sales Engineer, Hardware/Mechanical/Electrical Engineer, and any Data or AI engineer (tracked separately).',
    },
    ai: {
        desc: 'AI and machine learning engineering and research roles: AI Engineers, ML Engineers, AI/ML Research Scientists, Research Engineers, ML Scientists, and AI Deployment Engineers.',
        titles: 'Senior Machine Learning Engineer, Machine Learning Engineer, AI Engineer, Staff ML Engineer, Applied AI Engineer, AI Research Engineer',
    },
    data: {
        desc: 'Traditional data and analytics roles: Data Scientists, Data Engineers, Analytics Engineers, Data Analysts, BI roles, Applied Scientists, and Decision Scientists.',
        titles: 'Senior Data Engineer, Data Engineer, Senior Data Scientist, Analytics Engineer, Data Scientist, Senior Data Analyst, Data Analyst',
        excludes: 'AI/ML roles (tracked separately). A title mentioning both data and AI/ML is classified as AI.',
    },
    cs: {
        desc: 'Customer Success, Customer Support/Service, Support Engineering, CX roles, Technical Account Managers, and Implementation/Onboarding specialists.',
        titles: 'Customer Success Manager, Enterprise Customer Success Manager, Technical Account Manager, Technical Support Engineer, Implementation Manager, Support Engineer',
    },
    pm: {
        desc: 'Product management and program management roles. Includes Product Managers, Group PMs, Technical PMs, Technical Program Managers, and PM leadership.',
        titles: 'Senior Product Manager, Product Manager, Technical Program Manager, Staff Product Manager, Director of Product',
    },
    sales: {
        desc: 'Sales, solutions engineering, partnerships, and business development. Includes Account Executives, SDR/BDRs, Account Managers, Solutions Engineers, Partner Managers, Sales leadership, Sales Ops/RevOps, and Business Development.',
        titles: 'Account Executive, Sales Development Representative, Enterprise Account Executive, Business Development Representative, Solutions Engineer',
    },
    marketing: {
        desc: 'Product marketing, growth, content, brand, demand gen, social media, and marketing leadership. PMMs are classified as Marketing, not Product Management.',
        titles: 'Senior Product Marketing Manager, Product Marketing Manager, Growth Marketing Manager, Social Media Manager, Field Marketing Manager, Head of Marketing',
    },
    design: {
        desc: 'Digital and product design: Product Designers, UX, Visual, Content, Brand, Motion, Graphic, Interaction, and Service Designers, plus Design Technologists and design leadership.',
        titles: 'Senior Product Designer, Product Designer, Staff Product Designer, Brand Designer, Lead Product Designer, Senior UX Designer',
        excludes: 'Hardware design (mechanical, electrical, PCB, ASIC), non-digital design (industrial, instructional, game, sound), and engineering roles with "design" in the title.',
    },
    ga: {
        desc: 'General & Administrative: Finance/Accounting, Legal/Compliance, HR/Recruiting/People. Back-office functions that scale with headcount.',
        titles: 'Technical Recruiter, Senior Accountant, Commercial Counsel, Accounting Manager, Legal Counsel, Recruiting Coordinator, Senior Financial Analyst',
    },
    operations: {
        desc: 'Operations management, supply chain, logistics, procurement, warehousing, project management, and facilities/workplace. Distinct from G&A.',
        titles: 'Operations Associate, Project Manager, Workplace Manager, Business Operations, Operations Manager',
        excludes: 'DevOps/SRE, Sales Ops, Marketing Ops, Customer Ops, Data Ops, People Ops, Finance Ops (each goes to its parent category).',
    },
    other: {
        desc: 'Jobs that don\'t match any of the 10 categories above. Common examples include healthcare/clinical roles, non-software engineering (security, mechanical, electrical), executive assistants, and specialized roles unique to individual companies. Represents about 35% of all postings.',
        titles: null,
    },
};

let DATA = null;
let activeRole = 'swe';
let summarySort = { col: 'share', asc: false };
let charts = {};
let heroYRange = null;
let heroChartMode = 'rel';

// Chart.js defaults
Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
Chart.defaults.font.size = 12;
Chart.defaults.color = '#586069';
Chart.defaults.plugins.legend.display = false;
Chart.defaults.elements.point.radius = 3;
Chart.defaults.elements.point.hoverRadius = 5;
Chart.defaults.elements.line.tension = 0;
Chart.defaults.elements.line.borderWidth = 2.5;
Chart.defaults.animation = false;
Chart.defaults.plugins.tooltip.callbacks.title = function(items) {
    const d = new Date(items[0].parsed.x);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const zeroLinePlugin = {
    id: 'zeroLine',
    afterDraw(chart) {
        const yScale = chart.scales.y;
        if (!yScale) return;
        const yPixel = yScale.getPixelForValue(0);
        if (yPixel < yScale.top || yPixel > yScale.bottom) return;
        const ctx = chart.ctx;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(chart.chartArea.left, yPixel);
        ctx.lineTo(chart.chartArea.right, yPixel);
        ctx.strokeStyle = '#6A737D88';
        ctx.lineWidth = 1;
        ctx.stroke();
        ctx.restore();
    }
};
Chart.register(zeroLinePlugin);


// =============================================================================
// Init
// =============================================================================

async function init() {
    const resp = await fetch('data/pulse_data.json');
    DATA = await resp.json();

    const latestDate = DATA.share_timeseries[DATA.share_timeseries.length - 1].date;
    const d = new Date(latestDate + 'T00:00:00');
    document.getElementById('header-date').textContent =
        `Updated ${d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}`;

    // Precompute stable y-axis ranges across all roles (data lines only, not CI)
    let absMin = Infinity, absMax = -Infinity, relMin = Infinity, relMax = -Infinity;
    HERO_ROLES.forEach(role => {
        const stock = DATA.stock[role];
        const baselineShare = stock[0].intensity.value;
        stock.forEach(d => {
            absMin = Math.min(absMin, d.intensity.delta);
            absMax = Math.max(absMax, d.intensity.delta);
            if (baselineShare > 0) {
                const relVal = (d.intensity.delta / baselineShare) * 100;
                relMin = Math.min(relMin, relVal);
                relMax = Math.max(relMax, relVal);
            }
        });
    });
    // Round to clean step sizes with small padding
    function niceRange(lo, hi, step) {
        return { min: Math.floor(lo / step) * step, max: Math.ceil(hi / step) * step };
    }
    const absRange = absMax - absMin;
    const absStep = absRange > 4 ? 1 : absRange > 2 ? 0.5 : 0.25;
    const relRange = relMax - relMin;
    const relStep = relRange > 20 ? 5 : relRange > 8 ? 2.5 : relRange > 3 ? 1 : 0.5;
    heroYRange = {
        abs: niceRange(absMin, absMax, absStep),
        rel: niceRange(relMin, relMax, relStep),
    };

    buildHeroPills();
    setupChartModeToggle();
    setupSummarySort();
    renderVolumeSparkline();

    // Check URL hash for initial role
    const hashRole = window.location.hash.slice(1);
    const initialRole = HERO_ROLES.includes(hashRole) ? hashRole : 'swe';
    setActiveRole(initialRole, false);
}

function setActiveRole(role, updateHash = true) {
    activeRole = role;
    if (updateHash) {
        history.replaceState(null, '', '#' + role);
    }

    // Update pill styles
    document.querySelectorAll('.hero-pill').forEach(btn => {
        const r = btn.dataset.role;
        if (r === role) {
            btn.classList.add('active');
            const color = COLORS[r].primary;
            btn.style.background = color;
            btn.style.borderColor = color;
        } else {
            btn.classList.remove('active');
            btn.style.background = '';
            btn.style.borderColor = '';
        }
    });

    renderHeroStat();
    updateChartLabel();
    renderHeroCharts();
    renderSummaryTable();
    renderDeepDive(role);
    renderRoleDefinition(role);
}


// =============================================================================
// Hero pills
// =============================================================================

function updateChartLabel() {
    const label = ROLE_LABELS[activeRole];
    const suffix = heroChartMode === 'rel' ? '%' : 'pp';
    document.getElementById('hero-chart-label').textContent =
        `${label}: Change in Share (${suffix})`;
}

function setupChartModeToggle() {
    document.querySelectorAll('#chart-mode-toggle .pill-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('#chart-mode-toggle .pill-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            heroChartMode = btn.dataset.mode;
            updateChartLabel();
            renderHeroStat();
            renderHeroCharts();
        });
    });
}

// =============================================================================
// Volume sparkline (static, rendered once)
// =============================================================================

function renderVolumeSparkline() {
    const stock = DATA.stock[HERO_ROLES[0]];
    const latest = stock[stock.length - 1].total_jobs;
    const baseline = stock[0].total_jobs;

    const bDate = new Date(DATA.baseline_date + 'T00:00:00');
    const bLabel = bDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const relDelta = baseline.value > 0 ? (latest.delta / baseline.value) * 100 : 0;
    const sign = relDelta >= 0 ? '+' : '';
    const sig = (latest.ci_lower > 0 || latest.ci_upper < 0) ? ' *' : '';

    const baselineJobs = Math.round(baseline.value / 100) * 100;
    const latestJobs = Math.round(latest.value / 100) * 100;
    const overallTip = `Job postings are ${relDelta >= 0 ? 'up' : 'down'} ${Math.abs(relDelta).toFixed(1)}% since ${bLabel} (from ~${baselineJobs.toLocaleString()} to ~${latestJobs.toLocaleString()} postings). This is the net effect of new roles added and existing roles filled. Estimated using statistical resampling across 1,000 iterations, which controls for changes in which companies we track over time.`;

    document.getElementById('market-stat').innerHTML =
        `<div class="market-stat-label">Overall Hiring <span class="th-info" data-tip="${overallTip}">?</span></div>` +
        `<div class="market-stat-value">${sign}${relDelta.toFixed(1)}%</div>` +
        `<div class="market-stat-sub">vs ${bLabel}${sig}</div>`;
}


function buildHeroPills() {
    const nav = document.getElementById('hero-pills');

    HERO_ROLES.forEach(role => {
        const btn = document.createElement('button');
        btn.className = 'hero-pill';
        btn.textContent = ROLE_LABELS[role];
        btn.dataset.role = role;
        btn.addEventListener('click', () => setActiveRole(role));
        nav.appendChild(btn);
    });
}


// =============================================================================
// Hero stat line
// =============================================================================

function renderHeroStat() {
    const role = activeRole;
    const share = DATA.share_timeseries;
    const latest = share[share.length - 1];
    const stock = DATA.stock[role];
    const stockLatest = stock[stock.length - 1];

    const label = ROLE_LABELS[role];
    const pct = latest[role].share;
    const breadth = stockLatest.breadth.value;
    const intensityDelta = stockLatest.intensity.delta;

    const bDate = new Date(DATA.baseline_date + 'T00:00:00');
    const bLabel = bDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const sign = intensityDelta >= 0 ? '+' : '';
    const ciLow = stockLatest.intensity.ci_lower;
    const ciHigh = stockLatest.intensity.ci_upper;
    const isSig = ciLow > 0 || ciHigh < 0;
    const cls = isSig ? (intensityDelta > 0 ? 'positive' : 'negative') : 'neutral';

    const baselineShare = stock[0].intensity.value;
    const relDelta = baselineShare > 0 ? (intensityDelta / baselineShare) * 100 : 0;
    const relSign = relDelta >= 0 ? '+' : '';

    const metricsExplainer = `${pct.toFixed(1)}% of all US job postings in our dataset are ${label} roles. ` +
        `On ${bLabel}, that share was ${baselineShare.toFixed(1)}%. ` +
        `Since then it has ${Math.abs(intensityDelta) < 0.005 ? 'remained unchanged' : (intensityDelta > 0 ? 'increased' : 'decreased') + ' by ' + Math.abs(intensityDelta).toFixed(2) + ' percentage points'} ` +
        `(a ${Math.abs(relDelta).toFixed(1)}% ${relDelta >= 0 ? 'increase' : 'decrease'} relative to where it started).`;

    const heroVal = heroChartMode === 'rel'
        ? `${relSign}${relDelta.toFixed(1)}%`
        : `${sign}${intensityDelta.toFixed(2)}pp`;

    document.getElementById('hero-stat').innerHTML =
        `<div class="market-stat-label">${label} Share <span class="th-info" data-tip="${metricsExplainer}">?</span></div>` +
        `<div class="market-stat-value">${heroVal}</div>` +
        `<div class="market-stat-sub">vs ${bLabel}${isSig ? ' *' : ''} &middot; ${pct.toFixed(1)}% of roles</div>`;
}


// =============================================================================
// Hero charts (abs + rel, one role highlighted)
// =============================================================================

function renderHeroCharts() {
    const canvasId = 'chart-delta';
    const isRel = heroChartMode === 'rel';
    const dates = DATA.stock[HERO_ROLES[0]].map(d => d.date);

    destroyChart(canvasId);
    const ctx = document.getElementById(canvasId).getContext('2d');

    const datasets = [];

    // Background lines (muted)
    HERO_ROLES.forEach(role => {
        if (role === activeRole) return;
        const stock = DATA.stock[role];
        const baselineShare = stock[0].intensity.value;
        datasets.push({
            label: ROLE_LABELS[role],
            data: stock.map(d => isRel
                ? (baselineShare > 0 ? (d.intensity.delta / baselineShare) * 100 : 0)
                : d.intensity.delta
            ),
            borderColor: MUTED,
            backgroundColor: MUTED,
            pointBackgroundColor: MUTED,
            pointBorderColor: MUTED,
            pointBorderWidth: 0,
            pointRadius: 0,
            pointHoverRadius: 3,
            borderWidth: 1.5,
            fill: false,
            tension: 0,
        });
    });

    // Active role
    const stock = DATA.stock[activeRole];
    const baselineShare = stock[0].intensity.value;
    const color = COLORS[activeRole].primary;

    datasets.push({
        label: ROLE_LABELS[activeRole],
        data: stock.map(d => isRel
            ? (baselineShare > 0 ? (d.intensity.delta / baselineShare) * 100 : 0)
            : d.intensity.delta
        ),
        borderColor: color,
        backgroundColor: color,
        pointBackgroundColor: color,
        pointBorderColor: '#fff',
        pointBorderWidth: 1,
        pointRadius: 3,
        borderWidth: 3,
        fill: false,
        tension: 0,
    });

    // CI band
    datasets.push({
        label: '_ci_upper',
        data: stock.map(d => isRel
            ? (baselineShare > 0 ? (d.intensity.ci_upper / baselineShare) * 100 : 0)
            : d.intensity.ci_upper),
        borderColor: 'transparent', pointRadius: 0, fill: false,
    });
    datasets.push({
        label: '_ci_lower',
        data: stock.map(d => isRel
            ? (baselineShare > 0 ? (d.intensity.ci_lower / baselineShare) * 100 : 0)
            : d.intensity.ci_lower),
        borderColor: 'transparent', pointRadius: 0, fill: '-1', backgroundColor: color + '18',
    });

    const yTickSuffix = isRel ? '%' : 'pp';

    charts[canvasId] = new Chart(ctx, {
        type: 'line',
        data: { labels: dates, datasets },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: {
                    type: 'time',
                    time: { unit: 'week', displayFormats: { week: 'MMM d' } },
                    grid: { display: false },
                    ticks: { maxTicksLimit: 8, font: { size: 11 } },
                },
                y: {
                    min: isRel ? heroYRange.rel.min : heroYRange.abs.min,
                    max: isRel ? heroYRange.rel.max : heroYRange.abs.max,
                    grid: { color: '#e1e4e822', lineWidth: 0.5 },
                    ticks: {
                        font: { size: 11 },
                        callback: v => (v >= 0 ? '+' : '') + (Math.abs(v) >= 10 ? v.toFixed(0) : v.toFixed(1)) + yTickSuffix,
                    },
                }
            },
            plugins: {
                tooltip: {
                    itemSort: (a, b) => {
                        const aActive = a.dataset.label === ROLE_LABELS[activeRole] ? 1 : 0;
                        const bActive = b.dataset.label === ROLE_LABELS[activeRole] ? 1 : 0;
                        if (aActive !== bActive) return bActive - aActive;
                        return b.parsed.y - a.parsed.y;
                    },
                    callbacks: {
                        label: ctx => {
                            if (ctx.dataset.label.startsWith('_')) return null;
                            const v = ctx.parsed.y;
                            const prefix = ctx.dataset.label === ROLE_LABELS[activeRole] ? '\u25CF ' : '  ';
                            return isRel
                                ? `${prefix}${ctx.dataset.label}: ${v >= 0 ? '+' : ''}${v.toFixed(1)}%`
                                : `${prefix}${ctx.dataset.label}: ${v >= 0 ? '+' : ''}${v.toFixed(2)}pp`;
                        },
                    }
                }
            }
        }
    });
}


// =============================================================================
// Summary table
// =============================================================================

function setupSummarySort() {
    const headerRow = document.querySelector('#summary-table thead tr:last-child');
    const topRow = document.querySelector('#summary-table thead tr:first-child');
    const sortKeys = ['abs', 'rel', 'sig'];

    [topRow.children[0], topRow.children[1], topRow.children[2]].forEach((th, i) => {
        const key = ['role', 'jobs', 'share'][i];
        th.addEventListener('click', () => {
            if (summarySort.col === key) summarySort.asc = !summarySort.asc;
            else { summarySort.col = key; summarySort.asc = key === 'role'; }
            renderSummaryTable();
        });
    });

    headerRow.querySelectorAll('th').forEach((th, i) => {
        th.addEventListener('click', () => {
            const key = sortKeys[i];
            if (summarySort.col === key) summarySort.asc = !summarySort.asc;
            else { summarySort.col = key; summarySort.asc = false; }
            renderSummaryTable();
        });
    });
}

function renderSummaryTable() {
    const share = DATA.share_timeseries;
    const latest = share[share.length - 1];
    const baselineDate = DATA.baseline_date;

    const bDate = new Date(baselineDate + 'T00:00:00');
    const bLabel = bDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const arrow = col => summarySort.col === col ? (summarySort.asc ? ' \u25B2' : ' \u25BC') : '';

    // Update headers
    const topRow = document.querySelector('#summary-table thead tr:first-child');
    const latestDate = new Date(share[share.length - 1].date + 'T00:00:00');
    const shareLabel = latestDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    topRow.children[0].textContent = 'Role' + arrow('role');
    topRow.children[1].textContent = 'Jobs (' + shareLabel + ')' + arrow('jobs');
    topRow.children[2].textContent = 'Share (' + shareLabel + ')' + arrow('share');
    document.getElementById('table-title').textContent = 'Role Breakdown';
    document.getElementById('th-change-group').textContent = 'Change vs ' + bLabel;

    const sortKeys = ['abs', 'rel', 'sig'];
    const baseLabels = ['Abs (pp)', 'Rel (%)', 'Sig?'];
    const headerRow = document.querySelector('#summary-table thead tr:last-child');
    headerRow.querySelectorAll('th').forEach((th, i) => {
        // Preserve info icon if present
        const info = th.querySelector('.th-info');
        th.textContent = baseLabels[i] + arrow(sortKeys[i]);
        if (info) th.appendChild(document.createTextNode(' ')), th.appendChild(info);
    });

    const rowData = SUMMARY_ROLES.map(role => {
        const color = COLORS[role]?.primary || '#6A737D';
        const label = ROLE_LABELS[role] || role;
        const count = latest[role].count;
        const sharePct = latest[role].share;

        const stock = DATA.stock[role];
        const stockLatest = stock ? stock[stock.length - 1] : null;
        const absDelta = stockLatest ? stockLatest.intensity.delta : 0;
        const baselineShare = stock ? stock[0].intensity.value : 1;
        const relDelta = baselineShare > 0 ? (absDelta / baselineShare) * 100 : 0;

        // Significance: does the latest CI exclude 0?
        const ciLow = stockLatest ? stockLatest.intensity.ci_lower : 0;
        const ciHigh = stockLatest ? stockLatest.intensity.ci_upper : 0;
        const sig = (ciLow > 0) ? 1 : (ciHigh < 0) ? -1 : 0;

        return { role, color, label, count, sharePct, absDelta, relDelta, sig };
    });

    if (summarySort.col) {
        const keyMap = {
            role: r => r.label.toLowerCase(),
            jobs: r => r.count,
            share: r => r.sharePct,
            abs: r => r.absDelta,
            rel: r => r.relDelta,
            sig: r => r.sig,
        };
        const fn = keyMap[summarySort.col];
        if (fn) {
            rowData.sort((a, b) => {
                // Pin "Other" to bottom always
                if (a.role === 'other') return 1;
                if (b.role === 'other') return -1;
                const va = fn(a), vb = fn(b);
                if (typeof va === 'string') return summarySort.asc ? va.localeCompare(vb) : vb.localeCompare(va);
                return summarySort.asc ? va - vb : vb - va;
            });
        }
    }

    // Compute max abs values for gradient scaling
    const maxAbsDelta = Math.max(...rowData.map(r => Math.abs(r.absDelta)));
    const maxRelDelta = Math.max(...rowData.map(r => Math.abs(r.relDelta)));

    let html = '';
    rowData.forEach(({ role, color, label, count, sharePct, absDelta, relDelta, sig }) => {
        const isActive = role === activeRole;
        const activeClass = isActive ? ' class="row-active"' : '';
        const sigLabel = sig !== 0 ? '*' : '';
        const sigColor = sig > 0 ? 'positive' : sig < 0 ? 'negative' : '';
        html += `<tr${activeClass}>
            <td><span class="cell-role" data-role="${role}"><span class="role-dot" style="background:${color}"></span>${label}</span></td>
            <td class="cell-num">${count.toLocaleString()}</td>
            <td class="cell-num cell-group-border">${sharePct.toFixed(1)}%</td>
            <td class="cell-delta cell-group-border"${deltaStyle(absDelta, maxAbsDelta)}>${formatDelta(absDelta, '')}</td>
            <td class="cell-delta"${deltaStyle(relDelta, maxRelDelta)}>${formatDelta(relDelta, '')}</td>
            <td class="cell-sig ${sigColor}" style="text-align:center">${sigLabel}</td>
        </tr>`;
    });

    const totalJobs = latest.total_jobs;
    const totalShare = rowData.reduce((sum, r) => sum + r.sharePct, 0);
    html += `<tr class="row-total">
        <td><span class="cell-role">Total</span></td>
        <td class="cell-num">${totalJobs.toLocaleString()}</td>
        <td class="cell-num cell-group-border">${totalShare.toFixed(1)}%</td>
        <td colspan="3"></td>
    </tr>`;

    document.getElementById('summary-tbody').innerHTML = html;

    // Make role names clickable
    document.querySelectorAll('.cell-role[data-role]').forEach(el => {
        el.addEventListener('click', () => {
            const role = el.dataset.role;
            if (role) setActiveRole(role);
        });
    });
}


function renderRoleDefinition(role) {
    const def = ROLE_DEFS[role];
    const label = ROLE_LABELS[role];
    if (!def) return;

    let html = `<h3 class="role-def-heading">What's in "${label}"?</h3>`;
    html += `<p class="role-def-body">${def.desc}</p>`;
    if (def.titles) {
        html += `<p class="role-def-titles"><strong>Common titles:</strong> ${def.titles}</p>`;
    }
    if (def.excludes) {
        html += `<p class="role-def-excludes"><strong>Excludes:</strong> ${def.excludes}</p>`;
    }
    document.getElementById('role-definition').innerHTML = html;
}

function deltaClass(delta) {
    if (Math.abs(delta) < 0.005) return 'cell-delta neutral';
    return `cell-delta ${delta > 0 ? 'positive' : 'negative'}`;
}

function deltaStyle(delta, maxAbs) {
    if (Math.abs(delta) < 0.005 || maxAbs === 0) return '';
    const intensity = Math.min(Math.abs(delta) / maxAbs, 1);
    const alpha = (intensity * 0.15).toFixed(3);
    const rgb = delta > 0 ? '0,168,107' : '233,79,55';
    const color = delta > 0 ? '#00845a' : '#c43a2a';
    return ` style="background:rgba(${rgb},${alpha});color:${color}"`;
}

function formatDelta(delta, suffix) {
    if (Math.abs(delta) < 0.005) return '\u2014';
    const sign = delta > 0 ? '+' : '';
    return `${sign}${delta.toFixed(1)}${suffix}`;
}


// =============================================================================
// Deep dive
// =============================================================================

function renderDeepDive(role) {
    const content = document.getElementById('deep-dive-content');
    content.classList.remove('hidden');

    const stock = DATA.stock[role];
    const latest = stock[stock.length - 1];
    const share = DATA.share_timeseries;
    const latestShare = share[share.length - 1][role];

    const bDate = new Date(DATA.baseline_date + 'T00:00:00');
    const bLabel = bDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });

    const label = ROLE_LABELS[role];
    const breadthDelta = latest.breadth.delta;
    const intensityDelta = latest.intensity.delta;
    const breadthDir = breadthDelta > 0.05 ? 'up' : breadthDelta < -0.05 ? 'down' : 'flat';

    const breadthStr = `${latest.breadth.value.toFixed(1)}% of companies`;
    const deltaStr = breadthDir === 'flat' ? 'unchanged' : `${breadthDir} ${Math.abs(breadthDelta).toFixed(2)}pp`;

    document.getElementById('role-narrative').innerHTML =
        `<strong>${label}</strong> roles are posted by ${breadthStr} (${deltaStr} since ${bLabel}), ` +
        `representing ${latestShare.share.toFixed(1)}% of all open roles. ` +
        `Share is ${Math.abs(intensityDelta) < 0.05 ? 'unchanged' : (intensityDelta > 0 ? 'up' : 'down') + ' ' + Math.abs(intensityDelta).toFixed(2) + 'pp'} from baseline.`;

    const colors = COLORS[role];

    // Share level over time
    renderShareChart(role);

    // Breadth level over time
    makeSimpleLine('chart-breadth-level',
        stock.map(d => ({ date: d.date, value: d.breadth.value })),
        { color: colors.primary, yFormat: 'pct' }
    );

    const vol = latest.volume;
    const volSign = vol.delta > 0 ? '+' : '';
    document.getElementById('volume-stat').innerHTML =
        `<strong>${vol.value.toLocaleString()}</strong> open roles (${volSign}${Math.round(vol.delta).toLocaleString()} from baseline)`;

    const flow = DATA.flow[role];
    if (flow && flow.length > 0) {
        makeSimpleLine('chart-flow-intensity',
            flow.map(d => ({ date: d.date, value: d.intensity })),
            { color: colors.primary, yFormat: 'pct' }
        );
        makeSimpleLine('chart-flow-breadth',
            flow.map(d => ({ date: d.date, value: d.breadth })),
            { color: colors.primary, yFormat: 'pct' }
        );
    }
}

function renderShareChart(role) {
    destroyChart('chart-share');
    const ctx = document.getElementById('chart-share').getContext('2d');
    const share = DATA.share_timeseries.filter(d => d.date >= DATA.baseline_date);
    const dates = share.map(d => d.date);
    const values = share.map(d => d[role].share);
    const color = COLORS[role].primary;

    charts['chart-share'] = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates,
            datasets: [{
                label: `${ROLE_LABELS[role]} Share`,
                data: values,
                borderColor: color,
                backgroundColor: color + '15',
                pointBackgroundColor: color,
                pointBorderColor: '#fff',
                pointBorderWidth: 1,
                pointRadius: 4,
                fill: true,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: {
                    type: 'time',
                    time: { unit: 'week', displayFormats: { week: 'MMM d' } },
                    grid: { display: false },
                    ticks: { maxTicksLimit: 8 },
                },
                y: {
                    grid: { color: '#e1e4e833', lineWidth: 0.5 },
                    ticks: { callback: v => v.toFixed(1) + '%' },
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: ctx => ctx.parsed.y.toFixed(2) + '% of all jobs',
                    }
                }
            }
        }
    });
}


// =============================================================================
// Chart utilities
// =============================================================================

function destroyChart(id) {
    if (charts[id]) { charts[id].destroy(); delete charts[id]; }
}

function makeLineWithCI(canvasId, data, { color, yLabel, yFormat }) {
    destroyChart(canvasId);
    const ctx = document.getElementById(canvasId).getContext('2d');
    const dates = data.map(d => d.date);
    const values = data.map(d => d.delta !== undefined ? d.delta : d.value);
    const ciLower = data.map(d => d.ci_lower ?? null);
    const ciUpper = data.map(d => d.ci_upper ?? null);
    const hasCI = ciLower.some(v => v !== null);

    const datasets = [{
        label: yLabel, data: values,
        borderColor: color, backgroundColor: color,
        pointBackgroundColor: color, pointBorderColor: '#fff', pointBorderWidth: 1, fill: false,
    }];

    if (hasCI) {
        datasets.push({ label: '_ci_upper', data: ciUpper, borderColor: 'transparent', pointRadius: 0, fill: false });
        datasets.push({ label: '_ci_lower', data: ciLower, borderColor: 'transparent', pointRadius: 0, fill: '-1', backgroundColor: color + '20' });
    }

    charts[canvasId] = new Chart(ctx, {
        type: 'line',
        data: { labels: dates, datasets },
        options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { type: 'time', time: { unit: 'week', displayFormats: { week: 'MMM d' } }, grid: { display: false }, ticks: { maxTicksLimit: 8 } },
                y: { grid: { color: '#e1e4e833', lineWidth: 0.5 }, ticks: {
                    callback: v => {
                        if (yFormat === 'pp') return v.toFixed(1) + 'pp';
                        if (yFormat === 'pct') return v.toFixed(1) + '%';
                        if (yFormat === 'int') return Math.round(v).toLocaleString();
                        return v.toFixed(2);
                    }
                }}
            },
            plugins: { tooltip: { callbacks: { label: ctx => {
                if (ctx.dataset.label.startsWith('_')) return null;
                const v = ctx.parsed.y;
                if (yFormat === 'pp') return `${v >= 0 ? '+' : ''}${v.toFixed(2)}pp`;
                if (yFormat === 'pct') return `${v >= 0 ? '+' : ''}${v.toFixed(1)}%`;
                return v.toFixed(2);
            }}}}
        }
    });
}

function makeSimpleLine(canvasId, seriesData, { color, yFormat }) {
    destroyChart(canvasId);
    const ctx = document.getElementById(canvasId).getContext('2d');
    const dates = seriesData.map(d => d.date);
    const values = seriesData.map(d => d.value);

    charts[canvasId] = new Chart(ctx, {
        type: 'line',
        data: { labels: dates, datasets: [{ data: values, borderColor: color, backgroundColor: color + '15', pointBackgroundColor: color, pointBorderColor: '#fff', pointBorderWidth: 1, fill: true }] },
        options: {
            responsive: true, maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            scales: {
                x: { type: 'time', time: { unit: 'week', displayFormats: { week: 'MMM d' } }, grid: { display: false }, ticks: { maxTicksLimit: 8 } },
                y: { grid: { color: '#e1e4e833', lineWidth: 0.5 }, ticks: { callback: v => {
                    if (yFormat === 'pct') return v.toFixed(1) + '%';
                    if (yFormat === 'int') return Math.round(v).toLocaleString();
                    return v.toFixed(2);
                }}}
            },
            plugins: { tooltip: { callbacks: { label: ctx => {
                const v = ctx.parsed.y;
                if (yFormat === 'pct') return v.toFixed(2) + '%';
                return Math.round(v).toLocaleString();
            }}}}
        }
    });
}

document.addEventListener('DOMContentLoaded', init);
