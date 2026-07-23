# Data Insight Post Creation Guide

This guide documents the process for creating chart-based "Data Insight" posts for the Riso Group website. These are short (1 min read), chart-first posts that present a single compelling data finding with minimal text.

## Reference Posts

- **ClickHouse Adoption** (Jan 16, 2025) - "ClickHouse adoption skews B2B"
- **Which Data Roles Are in Demand?** (Jan 14, 2025)

---

## Working From a Jupyter Notebook (two-repo flow)

Some posts start not from a single finished chart but from a full **exploratory notebook** in the analysis repo (`~/code/virgil`). In that case, work spans two repos and Claude acts as **editor** first, then follows the normal workflow below.

### Division of labor

**Repo A — analysis (`~/code/virgil`)**: source notebook lives here, and the slimmed artifact is archived here.
**Repo B — website (this repo)**: only the final PNG crosses over into `insights/images/[slug]/`.

### Step 0 — Distill (happens before Step 1 below)

1. **Read the whole notebook.** It's exploratory: many candidate charts, dead ends, and the "story" is usually not the notebook's own cell order. Ignore cell order as a signal of importance.
2. **Propose a ranked shortlist** of postable findings + a recommendation; James picks the one (or ones). Wait for approval before drafting anything. A rich notebook is often 2-3 posts, not one.
3. **Write a slimmed-down "bite" notebook** that reproduces *only* the chosen chart(s) — no scratch cells or abandoned branches. This becomes the reproducible artifact **and** the methodology source of truth (write the post's Methodology by reading this, not the messy original).

### The `published/` archive convention

Follow the existing pattern in virgil (`jobs/analysis/published/`, `secdata/published/`, `hackernews/published/`):

- **Location:** a `published/` folder **in the same directory as the working analysis** (e.g. `jobs/analysis/published/`).
- **Artifact:** a self-contained notebook named **`bite_<slug>.ipynb`** — small (typically 3-10 cells), runnable, regenerates exactly the figure.
- **Image:** the PNG alongside it, named off the slug (`bite_<slug>.png`, or `bite_<slug>_<variant>.png`). When the shared graphic differs from the raw chart, keep both: `_posted.png` (final graphic as shared) and `_chart.png` (reproduced source chart).
- **README:** optional one-row-per-share index table (see `secdata/published/README.md`). Skip unless useful.
- **Data snapshots:** usually **not** frozen. The `jobs/analysis` bites re-run against live data. Only freeze a CSV/JSON snapshot for genuinely one-off pulls (as `secdata` did). Default: no snapshot.

### Handoff rules

- **PNG copy is manual.** James copies the final PNG from `published/` into the website repo himself. Claude does not need the data or Python env in the website repo.
- **`published/` is private** (for-us only). Never link to it from the post; describe the method in Methodology instead.
- Once the PNG is in `insights/images/[slug]/`, the normal 8-step workflow below applies unchanged.

---

## Workflow: From Chart to Published Post

### Step 1: Receive Chart from User

When the user shares a chart, ask clarifying questions:

1. **What's the data source?** (Job postings, survey, internal data, public datasets)
2. **What's the timeframe?** (Specific date range for data collection)
3. **What's the sample size?** (Number of records, companies, respondents)
4. **How were categories defined?** (Any non-obvious classification logic)
5. **Any caveats or limitations?** (Missing data, directional only, quick analysis)
6. **What surprised you about this data?** (Helps identify the hook)

### Step 2: Propose Headline Options

Based on the chart and user's answers, **propose 3-5 headline options** for the user to choose from.

**Headline formula options:**
1. **Direct finding**: "[Tool/Role] [verb] [unexpected pattern]"
   - Example: "ClickHouse adoption skews B2B"

2. **Question format**: "Which/What/How [topic]?"
   - Example: "Which Data Roles Are in Demand?"

3. **Quantified statement**: "[Number/Percentage] of [audience] [surprising fact]"
   - Example: "59% of ClickHouse users are B2B SaaS companies"

4. **Comparison**: "[Thing A] has [X%] more/fewer [thing] than [Thing B]"
   - Example: "AI companies hire 34% fewer PMs than other tech"

5. **Contrast**: "[Common belief] vs [what data shows]"
   - Example: "Analytics Engineers trail Data Analysts in hiring demand"

**Present options like this:**
```
Based on your chart, here are 5 headline options:

1. "ClickHouse adoption skews B2B" (direct, declarative)
2. "Why are 59% of ClickHouse users B2B SaaS companies?" (question)
3. "ClickHouse attracts more B2B companies than Snowflake or Databricks" (comparison)
4. "ClickHouse's B2B focus shows in adoption data" (interpretation)
5. "B2B SaaS companies dominate ClickHouse adoption" (quantified)

Which resonates best? Or would you like me to try different angles?
```

**Wait for user to select** before proceeding to draft the full post.

### Step 3: Draft Key Takeaways

Once headline is approved, draft 3-5 key takeaways as bullet points:

**Formula for each takeaway:**
- Start with the most important/headline number
- Add context or comparison (vs benchmark, vs expectations)
- Include secondary insights that support main finding
- End with implication or "why this matters"

**Example structure:**
```
Key Takeaways:
• 59% of companies mentioning ClickHouse in job descriptions are B2B SaaS (vs 44-45% for Snowflake and Databricks)
• B2B SaaS + AI companies combined account for 74% of ClickHouse adopters by JD mentions
• Snowflake and Databricks have more balanced industry distribution across Healthcare, Consumer Tech, and e-Commerce
• ClickHouse's focus on embedded, customer-facing analytics aligns with B2B product use cases
```

**Present draft to user for approval** before proceeding.

### Step 4: Write Methodology

Based on user's answers in Step 1, draft a transparent methodology statement:

**Template:**
```
Analysis of ~[NUMBER] [DATA TYPE] from [NUMBER] [ENTITIES],
[METHOD] from [START DATE] – [END DATE].
[EXPLAIN CATEGORIES].
Shows [WHAT METRIC REPRESENTS].
[CAVEATS IF ANY].
```

**Example:**
```
Analysis of ~52,000 job descriptions from 1,032 tech startups and public companies,
scraped weekly from Dec 2025 – Jan 2026.
Companies categorized by industry based on business model.
Shows % of companies mentioning each tool in at least one job description,
broken down by industry.
```

**If analysis is directional/limited, acknowledge it:**
```
This was a quick afternoon project limited to job platforms that were
easy to scrape - notably missing big tech like Google and Meta.
Take it as directional.
```

### Step 5: Prepare Chart Image

**User provides** the chart image. Verify:

**Image specifications:**
- Format: PNG (preferred for charts)
- Resolution: 2x for retina displays
- Background: White
- Max width: 1200px
- File size: < 500KB ideally

**Naming and location:**
```
insights/images/[article-slug]/[descriptive-name].png
```

Examples:
- `insights/images/clickhouse-adoption/clickhouse-adoption.png`
- `insights/images/data-role-hiring/chart.png`

**Alt text:** Write descriptive alt text that explains the chart even without seeing it:
```html
alt="Bar chart showing percentage of companies hiring for each data role:
Any Data Role 31%, Data Scientist 15%, Data Engineer 12%, ML Engineer 12%,
Data Analyst 8%, Analytics Engineer 6%, Other 2%"
```

### Step 6: Create HTML File

**File naming:**
- Lowercase, hyphens for spaces
- Match canonical URL slug
- Example: `clickhouse-adoption.html` → `risogroup.co/insights/clickhouse-adoption`

**Data Insight post structure:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[One-sentence summary with key number/finding]">
    <meta name="author" content="James Riso">
    <link rel="canonical" href="https://risogroup.co/insights/[ARTICLE-SLUG]" />

    <!-- Favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="../static/assets/favicons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../static/assets/favicons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../static/assets/favicons/favicon-16x16.png">
    <link rel="manifest" href="../static/assets/favicons/site.webmanifest">
    <link rel="shortcut icon" href="../static/assets/favicons/favicon.ico">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="article">
    <meta property="og:url" content="https://risogroup.co/insights/[ARTICLE-SLUG]">
    <meta property="og:title" content="[TITLE] | Riso Group">
    <meta property="og:description" content="[Same as description above]">
    <meta property="og:image" content="https://risogroup.co/insights/images/[FOLDER]/[IMAGE].png">
    <meta property="article:author" content="James Riso">
    <meta property="article:published_time" content="[YYYY-MM-DD]">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://risogroup.co/insights/[ARTICLE-SLUG]">
    <meta property="twitter:title" content="[TITLE] | Riso Group">
    <meta property="twitter:description" content="[Same as description]">
    <meta property="twitter:image" content="https://risogroup.co/insights/images/[FOLDER]/[IMAGE].png">

    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-Z8SP11SCGP"></script>
    <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Z8SP11SCGP');
    </script>

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
        window.rudderAnalyticsMount()
        ;var loadOptions={};rudderanalytics.load("2qdCnXl6U1fKfCaGAWNs9QMnbAI","https://risogroupomyxs.dataplane.rudderstack.com",loadOptions)}}}();
    </script>

    <!-- Structured Data (JSON-LD) -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "[TITLE]",
        "description": "[Same as meta description]",
        "image": "https://risogroup.co/insights/images/[FOLDER]/[IMAGE].png",
        "author": {
            "@type": "Person",
            "name": "James Riso",
            "url": "https://risogroup.co/#james"
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
            "@id": "https://risogroup.co/insights/[ARTICLE-SLUG]"
        }
    }
    </script>

    <title>[TITLE] | Riso Group</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="../static/css/style.css" rel="stylesheet">
    <link href="css/insights.css" rel="stylesheet">
</head>
<body>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div class="container">
            <a class="navbar-brand" href="../">
                <img src="../static/assets/rg-logo.png" alt="Riso Group" class="navbar-logo" height="40">
                <span class="navbar-title ms-2">Riso Group</span>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="../#capabilities">Capabilities</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./">Insights</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../#case-studies">Case Studies</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../projects/">Projects</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../#james">James</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="../#contact">Get in Touch</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Article Content -->
    <article class="insight-article" style="margin-top: 70px;">
        <!-- Breadcrumb - IMPORTANT: Use "Data Insight" not "Insights" -->
        <nav class="data-insight-breadcrumb">
            <a href="./">Data Insight</a>
            <span class="breadcrumb-separator">&rsaquo;</span>
            <span class="breadcrumb-current">[SHORT TOPIC NAME]</span>
        </nav>

        <!-- Title - No subtitle for Data Insight posts -->
        <header class="insight-header data-insight-header" style="margin-bottom: 0; padding-bottom: 0;">
            <h1 class="insight-title">[HEADLINE FROM STEP 2]</h1>
        </header>

        <!-- Article Body -->
        <div class="insight-body" style="margin-top: 0; padding-top: 0;">
            <!-- Chart IMMEDIATELY after title with zero margin -->
            <div class="insight-image-container" style="margin-top: 0; margin-bottom: 0;">
                <img src="images/[FOLDER]/[IMAGE].png"
                     alt="[DESCRIPTIVE ALT TEXT FROM STEP 5]"
                     class="insight-image insight-image-chart">
            </div>

            <!-- Key Takeaways -->
            <h4 style="margin-top: -10px;"><strong>Key Takeaways</strong></h4>
            <ul>
                <li>[TAKEAWAY 1 FROM STEP 3]</li>
                <li>[TAKEAWAY 2 FROM STEP 3]</li>
                <li>[TAKEAWAY 3 FROM STEP 3]</li>
                <li>[TAKEAWAY 4 FROM STEP 3 - OPTIONAL]</li>
            </ul>
        </div>

        <!-- Methodology - Use data-insight-methodology class -->
        <div class="data-insight-methodology">
            <h4 class="methodology-title">Methodology</h4>
            <p class="methodology-text">[METHODOLOGY FROM STEP 4]</p>
        </div>

        <!-- Author Bio -->
        <div class="insight-author-bio">
            <img src="../static/images/jr_icon.png" alt="James Riso" class="insight-author-bio-image">
            <div class="insight-author-bio-content">
                <h3 class="insight-author-bio-name"><a href="../#james" style="color: inherit; text-decoration: none;">James Riso</a></h3>
                <p class="insight-author-bio-title">Founder, <a href="../" style="color: inherit; text-decoration: none; border-bottom: 1px solid #ccc;">Riso Group</a></p>
                <p class="insight-author-bio-text">James is a data and AI strategy consultant who helps companies build scalable analytics infrastructure and data-driven growth strategies. <a href="https://www.linkedin.com/in/jamesriso/" target="_blank" style="color: #1a1a1a; text-decoration: none; border-bottom: 1px solid #1a1a1a;">Connect on LinkedIn</a>.</p>
            </div>
        </div>

    </article>

    <div id="site-footer"></div>
    <script src="../static/js/footer.js"></script>

    <!-- Bootstrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- Navbar scroll effect -->
    <script>
        window.addEventListener('scroll', function() {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 50) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
        });
    </script>

    <!-- RudderStack Page Tracking -->
    <script>
        window.addEventListener("load", () => {
            rudderanalytics.page();
        });
    </script>
</body>
</html>
```

**Critical styling notes:**
- Breadcrumb says "Data Insight" (singular) not "Insights"
- Header has `data-insight-header` class
- All margins set to 0 between title and chart
- **Never add `box-shadow` to images** — the CSS has no shadows by default; do not add inline shadow styles
- Methodology uses `data-insight-methodology` class (not `insight-methodology`)

### Step 7: Update Insights Index

Add new post to `insights/index.html` at the **TOP** of the grid:

```html
<div class="col-md-6 col-lg-4 mb-4">
    <a href="[ARTICLE-SLUG]" class="insight-card">
        <div class="insight-card-image">
            <img src="images/[FOLDER]/[IMAGE].png"
                 alt="[ALT TEXT]">
        </div>
        <div class="insight-card-content">
            <span class="insight-card-tag">Data Insight</span>
            <h3 class="insight-card-title">[TITLE]</h3>
            <p class="insight-card-description">[One-sentence description from meta description]</p>
            <p class="insight-card-meta">[Month Day, Year] · 1 min read</p>
        </div>
    </a>
</div>
```

**Note:** Data Insight posts are always "1 min read"

### Step 8: Pre-Publication Checklist

Before finalizing, verify:

**Content:**
- [ ] Chart image exported at 2x resolution, PNG format
- [ ] Image saved in `insights/images/[slug]/` folder
- [ ] HTML file created with correct slug filename
- [ ] Title matches user-approved option from Step 2
- [ ] Alt text is complete and descriptive
- [ ] Key Takeaways section has 3-5 bullets
- [ ] Methodology explains source, timeframe, method, caveats

**Metadata & Analytics:**
- [ ] All metadata fields populated:
  - [ ] `<meta name="description">`
  - [ ] `<meta property="og:image">` (absolute URL)
  - [ ] `<meta property="twitter:image">` (absolute URL)
  - [ ] `<meta property="article:published_time">`
- [ ] Published date makes sense relative to today's date (not stale from when drafting started)
- [ ] Google Analytics gtag.js loaded and configured in `<head>`
- [ ] RudderStack loaded and configured in `<head>`
- [ ] RudderStack page tracking call included before `</body>` tag:
  ```javascript
  <script>
      window.addEventListener("load", () => {
          rudderanalytics.page();
      });
  </script>
  ```

**Styling:**
- [ ] Breadcrumb shows "Data Insight" (singular)
- [ ] No inline `box-shadow` or `border` styles on images (CSS handles this)
- [ ] Author bio included at bottom

**Links & Updates:**
- [ ] Article added to top of `insights/index.html`
- [ ] Homepage `index.html` "Latest Insight" section updated with new post
- [ ] No typos or formatting issues
- [ ] Preview in browser before committing

---

## Content Best Practices

### Title Writing

**Good Data Insight titles:**
- Clear and declarative ✓
- Include key number when possible ✓
- Under 60 characters for SEO ✓
- Avoid clickbait or questions (unless that's the format)

**Examples:**
- ✅ "ClickHouse adoption skews B2B"
- ✅ "Which Data Roles Are in Demand?"
- ✅ "AI companies hire 34% fewer PMs"
- ❌ "You Won't Believe What We Found About ClickHouse"
- ❌ "The Shocking Truth About Data Hiring"

### Key Takeaways Writing

**Formula for each bullet:**
1. Lead with specific number/percentage
2. Add comparison or context
3. Include "why this matters" implication

**Examples:**
- ✅ "59% of companies mentioning ClickHouse in job descriptions are B2B SaaS (vs 44-45% for Snowflake and Databricks)"
- ✅ "Nearly a third of tech companies have at least one open data role"
- ❌ "ClickHouse is popular" (too vague)
- ❌ "Many companies are hiring data scientists" (no specific number)

### Methodology Writing

**Must include:**
- Sample size (number of records/companies)
- Exact timeframe (not "recently")
- How data was collected
- How categories were defined
- Caveats or limitations

**Be transparent about weaknesses:**
- "This was a quick afternoon project limited to job platforms that were easy to scrape"
- "Missing data from big tech companies like Google and Meta"
- "Take it as directional"

**Good example:**
```
Analysis of ~25,000 US job postings from 858 tech startups and public
companies, scraped weekly from Dec 2025 – Jan 2026. Roles identified
by job title pattern matching. Shows % of companies with at least one
active posting. Other includes BI, Applied Scientist, Decision Scientist.
```

---

## Common Patterns from Existing Posts

### Industry/Company Analysis
- Shows % breakdown across categories
- Compares tool/company to peer benchmarks
- Example: ClickHouse (59% B2B) vs Snowflake (45% B2B) vs Databricks (44% B2B)

### Job Market/Hiring Data
- Based on job posting scrapes
- Shows % of companies hiring for each role
- Example: Data Scientist (15%), Data Engineer (12%), ML Engineer (12%)

### Data Presentation
- Stacked bar charts for category breakdowns
- Simple bar charts for rankings
- Clean, minimal design with white background
- Large, readable fonts for small screens

---

## Critical Gotchas

1. **Breadcrumb:** Must say "Data Insight" (singular), not "Insights"
2. **Methodology class:** Use `data-insight-methodology`, not `insight-methodology`
3. **No image shadows:** Never add `box-shadow` to images — the CSS has no shadows by default. Do not add inline shadow or border styles.
4. **Zero margins:** Title to chart transition needs all margins set to 0
5. **Image URLs:** OG/Twitter images must be absolute URLs (https://...)
6. **Index order:** Add new posts to TOP of grid, not bottom
7. **Read time:** Data Insights are always "1 min read"
8. **No subtitle:** Data Insight header has title only

---

## Implementation Summary

When user provides a chart, this is the exact sequence:

1. **Ask clarifying questions** (data source, timeframe, sample size, caveats)
2. **Propose 5 headline options** → Wait for user approval
3. **Draft key takeaways** (3-5 bullets) → Show to user
4. **Draft methodology** → Show to user
5. **User provides chart image** → Verify specs and save location
6. **Create HTML file** using exact structure above
7. **Update insights/index.html AND homepage index.html**
   - Add to top of insights grid
   - Replace "Latest Insight" section on homepage
8. **Run pre-publication checklist**

**User feedback loop:** Get approval at Steps 2, 3, and 4 before proceeding to implementation.

**Analytics:** The template includes:
- Google Analytics (gtag.js) configuration in `<head>`
- RudderStack configuration in `<head>`
- RudderStack page tracking call (`rudderanalytics.page()`) before `</body>` - this actually fires the page view event
