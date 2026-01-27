# Riso Group Website - Development Guidelines

## RudderStack Analytics Setup

All HTML pages on the website must include RudderStack analytics tracking. This consists of two parts:

### 1. RudderStack SDK Initialization (in `<head>`)

All pages should include the RudderStack SDK snippet in the `<head>` section:

```html
<!-- RudderStack -->
<script type="text/javascript">
    !function(){"use strict";window.RudderSnippetVersion="3.0.32";var e="rudderanalytics";window[e]||(window[e]=[])
    ;var rudderanalytics=window[e];if(Array.isArray(rudderanalytics)){
    if(true===rudderanalytics.snippetExecuted&&window.console&&console.error){
    console.error("RudderStack JavaScript SDK snippet included more than once.")}else{rudderanalytics.snippetExecuted=true,
    window.rudderAnalyticsBuildType="legacy";var sdkBaseUrl="https://cdn.rudderlabs.com/v3";var sdkName="rsa.min.js"
    ;var scriptLoadingMode="async"
    ;var r=["setDefaultInstanceKey","load","ready","page","track","identify","alias","group","reset","setAnonymousId","startSession","endSession","consent"]
    ;for(var n=0;n<r.length;n++){var t=r[n];rudderanalytics[t]=function(r){return function(){var n
    ;Array.isArray(window[e])?rudderanalytics.push([r].concat(Array.prototype.slice.call(arguments))):null===(n=window[e][r])||void 0===n||n.apply(window[e],arguments)
    }}(t)}try{
    new Function('class Test{field=()=>{};test({prop=[]}={}){return prop?(prop?.property??[...prop]):import("");}}'),
    window.rudderAnalyticsBuildType="modern"}catch(o){}var d=document.head||document.getElementsByTagName("head")[0]
    ;var i=document.body||document.getElementsByTagName("body")[0];window.rudderAnalyticsAddScript=function(e,r,n){
    var t=document.createElement("script");t.src=e,t.setAttribute("data-loader","RS_JS_SDK"),r&&n&&t.setAttribute(r,n),
    "async"===scriptLoadingMode?t.async=true:"defer"===scriptLoadingMode&&(t.defer=true),
    d?d.insertBefore(t,d.firstChild):i.insertBefore(t,i.firstChild)},window.rudderAnalyticsMount=function(){!function(){
    if("undefined"==typeof globalThis){var e;var r=function getGlobal(){
    return"undefined"!=typeof self?self:"undefined"!=typeof window?window:null}();r&&Object.defineProperty(r,"globalThis",{
    value:r,configurable:true})}
    }(),window.rudderAnalyticsAddScript("".concat(sdkBaseUrl,"/").concat(window.rudderAnalyticsBuildType,"/").concat(sdkName),"data-rsa-write-key","2qdCnXl6U1fKfCaGAWNs9QMnbAI")
    },
    "undefined"==typeof Promise||"undefined"==typeof globalThis?window.rudderAnalyticsAddScript("https://polyfill-fastly.io/v3/polyfill.min.js?version=3.111.0&features=Symbol%2CPromise&callback=rudderAnalyticsMount"):window.rudderAnalyticsMount()
    ;var loadOptions={};rudderanalytics.load("2qdCnXl6U1fKfCaGAWNs9QMnbAI","https://risogroupomyxs.dataplane.rudderstack.com",loadOptions)}}}();
</script>
```

### 2. Page View Tracking (before `</body>`)

**CRITICAL**: After including the SDK, you MUST also add the page view tracking call before the closing `</body>` tag:

```html
<!-- Add RudderStack Page Tracking -->
<script>
    window.addEventListener("load", () => {
        rudderanalytics.page();
    });
</script>
```

### Checklist for New Pages

When creating a new HTML page:

- [ ] Add RudderStack SDK initialization in `<head>` section
- [ ] Add `rudderanalytics.page()` tracking call before `</body>` tag
- [ ] Test that analytics events are being tracked in RudderStack dashboard

### Common Mistakes to Avoid

1. **Missing page tracking call**: The SDK initialization (`rudderanalytics.load()`) alone is NOT enough. You must also call `rudderanalytics.page()` to track page views.
2. **Calling page tracking before SDK loads**: Always wrap the `rudderanalytics.page()` call in a `window.addEventListener("load", ...)` handler to ensure the SDK is loaded first.

### Example Pages

See these pages for reference implementations:
- `index.html` - Homepage with RudderStack tracking
- `insights/clickhouse-adoption.html` - Insight page with RudderStack tracking
- `engagements/predictive-ltv.html` - Engagement page with RudderStack tracking

## Structured Data (JSON-LD) for SEO

All insight articles should include Article schema structured data in JSON-LD format for better SEO and rich search results. Add this in the `<head>` section after RudderStack and before the `<title>` tag:

```html
<!-- Structured Data (JSON-LD) -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "[Article Title]",
    "description": "[Meta description]",
    "image": "https://risogroup.co/insights/images/[folder]/[image].png",
    "author": {
        "@type": "Person",
        "name": "James Riso",
        "url": "https://risogroup.co/index.html#james"
    },
    "publisher": {
        "@type": "Organization",
        "name": "Riso Group",
        "logo": {
            "@type": "ImageObject",
            "url": "https://risogroup.co/static/assets/rg-logo.png"
        }
    },
    "datePublished": "[YYYY-MM-DD]",
    "dateModified": "[YYYY-MM-DD]",
    "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": "https://risogroup.co/insights/[article-slug]"
    }
}
</script>
```

This helps Google show rich results with author info, images, and dates in search.
