# Databricks: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/databricks/

AI Feature Score **89**, #1 of 15 (Data platform). Built-in AI 85, external AI 91, other 97. Analysis 83, Building and maintaining assets 99, Context and connections 100, Reliability and controls 74. By model: Claude Opus 5.5 89, GPT-6.1 Sol 89, Gemini 3.8 Flash 89.

## Score breakdown

Four areas, 25 points each. Shown for Gemini 3.8 Flash, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 20.8 of 25
- Building and maintaining assets: 24.7 of 25
- Context and connections: 24.9 of 25
- Reliability and controls: 18.4 of 25

**Strengths**

- The assistant's changes can require approval
- AI processing residency is documented
- You can cap what agents consume

**Not found in the docs**

- You can pin the model version

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Genie selects relevant names and descriptions from annotated tables and columns to convert natural language questions to an equivalent SQL query."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: The built-in Genie assistant turns a plain-English question into a SQL query and results table. No SQL or pre-built dashboard is needed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Enables users to ask natural language questions to query enterprise data directly."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The built-in Genie Agent translates an ordinary-language data question into SQL-backed results without a prebuilt dashboard.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Ask natural-language questions of your company data in a Genie Agent, a no-code, self-service chat interface for business users."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Users can ask plain English questions about their company data in Genie Agents and receive working SQL queries, tables, and visualizations.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Each conversation thread maintains its context, letting you build on previous questions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie holds the thread. The same page's example refines "sales by product line" with "Only for July 2024" in the same conversation.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Each conversation thread maintains its context, letting you build on previous questions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The documented sales example refines an earlier question with a follow-up date restriction in the same thread.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Your conversations are saved in threaded chat history. Each chat thread maintains context about previous questions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie maintains threaded chat history preserving conversational context, allowing users to ask follow-up questions that refine earlier answers.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If a SQL query was generated to answer the question, it is included in the response."
  - Source: https://docs.databricks.com/aws/en/genie-agents/monitor (checked 2026-10-26)
  - Reasoning: Genie responses include the generated SQL (Show code). The talk-to-genie page also documents 'Thinking steps' that explain the SQL logic, so the analytical steps are exposed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Result table: Displays the results from the generated query in table format. Click Show code to inspect the query Genie generated."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The answer includes an inspectable generated SQL query; the Analysis section also explains its logical steps.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Displays the results from the generated query in table format. Click Show code to inspect the query Genie generated."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie displays results alongside a 'Show code' option that reveals the exact SQL query and analytical logic generated to answer the question.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Yes** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Found relevant data: When applicable, shows the specific tables or data sources Genie identified as relevant to your question."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The Analysis section attached to a Genie answer names the specific tables it used, separately from the generated query text.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Found relevant data: When applicable, shows the specific tables or data sources Genie identified as relevant to your question."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The response Analysis section separately names specific relevant tables, beyond merely exposing SQL or naming the overall agent dataset.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When you ask a question, Agent mode creates and refines a research plan, runs multiple SQL queries, learns from each result, and iterates until it has enough evidence to deliver a comprehensive report with citations, visualizations, and supporting tables."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: In Agent mode, Genie answers questions by returning a comprehensive report that includes citations, visualizations, and supporting tables.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Upload CSV, Excel, and PDF files directly into a Genie Agent so users can query them in natural language alongside Unity Catalog tables."
  - Source: https://docs.databricks.com/aws/en/genie-agents/file-upload (checked 2026-10-26)
  - Reasoning: Users upload CSV or Excel files into a Genie conversation and analyze them with the built-in AI. Genie One chat also supports CSV/Excel uploads.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Upload CSV, Excel, and PDF files directly into a Genie Agent so users can query them in natural language alongside Unity Catalog tables."
  - Source: https://docs.databricks.com/aws/en/genie-agents/file-upload (checked 2026-10-26)
  - Reasoning: Users upload CSV or Excel files directly to the built-in agent and ask it to analyze their contents.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Upload CSV, Excel, and PDF files directly into a Genie Agent so users can query them in natural language alongside Unity Catalog tables."
  - Source: https://docs.databricks.com/aws/en/genie-agents/file-upload (checked 2026-10-26)
  - Reasoning: Users can upload CSV and Excel spreadsheet files directly into a Genie Agent and analyze their contents using natural-language chat.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Yes** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Describe what you want in natural language, and Genie Code adds, configures, and connects operators, writes expressions, and helps you fix errors."
  - Source: https://docs.databricks.com/aws/en/designer/genie-code (checked 2026-10-26)
  - Reasoning: In Lakeflow Designer, Genie Code reshapes data (filters, aggregates, joins) by building operators on a visual pipeline canvas. The operators and expressions remain as inspectable transformation logic.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Authoring a new pipeline: Genie Code can help with all steps of creating a new medallion architecture pipeline, from ingesting data, to standardizing and cleaning the data, to transforming and analyzing the data."
  - Source: https://docs.databricks.com/aws/en/ldp/de-agent (checked 2026-10-26)
  - Reasoning: Built-in Genie Code authors and runs pipeline source files for cleaning and transforming data; the page documents inspectable code diffs and pipeline outputs.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Every visual data prep is backed by generated code, so you can version it in Git and schedule it as a job."
  - Source: https://docs.databricks.com/aws/en/designer/what-is-lakeflow-designer (checked 2026-10-26)
  - Reasoning: Lakeflow Designer provides visual data preparation where every visual data prep is backed by generated code that can be versioned in Git and scheduled as a job.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Yes** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can add files to agents that also include Unity Catalog tables, making it possible to analyze uploaded data alongside existing sources."
  - Source: https://docs.databricks.com/aws/en/genie-agents/file-upload (checked 2026-10-26)
  - Reasoning: Genie blends an uploaded file with Unity Catalog tables in one analysis, which joins two distinct sources.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can add files to agents that also include Unity Catalog tables, making it possible to analyze uploaded data alongside existing sources."
  - Source: https://docs.databricks.com/aws/en/genie-agents/file-upload (checked 2026-10-26)
  - Reasoning: This explicitly combines an uploaded external dataset with existing Unity Catalog data in an agent analysis, rather than just joining tables within one database.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can add files to agents that also include Unity Catalog tables, making it possible to analyze uploaded data alongside existing sources."
  - Source: https://docs.databricks.com/aws/en/genie-agents/file-upload (checked 2026-10-26)
  - Reasoning: Genie Agents allow users to query uploaded CSV/Excel files alongside existing Unity Catalog database tables in a single unified analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When Genie detects that a visualization could improve response clarity, it also returns a visualization."
  - Source: https://docs.databricks.com/aws/en/genie-agents/monitor (checked 2026-10-26)
  - Reasoning: Genie decides on its own when a chart fits the answer and creates it. The user does not have to pick the visualization first.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When Genie detects that a visualization could improve response clarity, it also returns a visualization."
  - Source: https://docs.databricks.com/aws/en/genie-agents/monitor (checked 2026-10-26)
  - Reasoning: The built-in agent decides when a visualization suits the answer and creates it automatically.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For many questions, Genie automatically generates a visualization and a result table."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie automatically selects and generates an appropriate visualization (such as a bar or line chart) and result table suited to the analytical question.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Partly (preview)** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Genie analyzes the selected change and returns an explanation with the top contributing factors."
  - Source: https://docs.databricks.com/aws/en/dashboards/genie-spaces (checked 2026-10-26)
  - Reasoning: Genie (Agent mode) explains a chart change by naming its top contributing factors. The docs do not say it shows each factor's contribution with a checkable calculation, so this is partly. Companion Genie Agents on dashboards are labeled Public Preview in the partner-powered AI features table.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Genie analyzes the selected change and returns an explanation with the top contributing factors."
  - Source: https://docs.databricks.com/aws/en/dashboards/genie-spaces (checked 2026-10-26)
  - Reasoning: Ask Genie identifies drivers of a selected chart change, but this documentation does not establish calculated segment contributions or shares of the change that a reader can verify. The companion-agent feature is labeled Public Preview in the hosting-provider inventory.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "For complex questions that need multi-step analysis, such as explaining why a metric changed, use standard Agent mode."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Genie Agent mode performs multi-step analysis to answer complex questions such as explaining why a metric changed, but documentation does not state that it breaks down changes into contributing segments with mathematical share-of-change calculations.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Partly** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Run advanced analyses, such as statistical analysis, forecasting, and what-if scenarios."
  - Source: https://docs.databricks.com/aws/en/genie-one/code-execution (checked 2026-10-26)
  - Reasoning: Genie One code execution (Public Preview) produces forecasts (for example, revenue for the next four quarters). The docs do not say it exposes the forecast's inputs and assumptions.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: ""Generate a forecast of product demand for the next 6 months from the `@inventory` dataset, including confidence intervals.""
  - Source: https://docs.databricks.com/aws/en/notebooks/ds-agent (checked 2026-10-26)
  - Reasoning: The built-in Genie Code produces a forecast from a named input dataset and horizon in an inspectable notebook. The docs do not require the answer to state forecasting assumptions; horizon and confidence intervals alone are insufficient for full credit.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Run advanced analyses, such as statistical analysis, forecasting, and what-if scenarios."
  - Source: https://docs.databricks.com/aws/en/genie-one/code-execution (checked 2026-10-26)
  - Reasoning: Genie One supports generating forecasts in its Python code execution sandbox, but does not explicitly expose a structured breakdown of horizon inputs and underlying assumptions.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Partly (preview)** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This tutorial shows how to use Genie Code to build an AI/BI dashboard that enables interactive What If analysis."
  - Source: https://docs.databricks.com/aws/en/dashboards/tutorials/genie-code-tutorial (checked 2026-10-26)
  - Reasoning: An official tutorial shows Genie Code building a parameterized what-if model (price elasticity). Users enter one price change at a time. The docs show no multiple named scenarios with stated assumptions compared side by side.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You'll prompt Genie Code to compute elasticities from the dataset and build a dashboard where users can input a price change percentage, select a region and avocado type, and instantly see the estimated impact on weekly sales and volume."
  - Source: https://docs.databricks.com/aws/en/dashboards/tutorials/genie-code-tutorial (checked 2026-10-26)
  - Reasoning: The official tutorial demonstrates shipped AI dashboard authoring that computes a what-if result with an explicit price-change input. It does not demonstrate several named scenarios with their assumptions and calculated results compared side by side.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Run advanced analyses, such as statistical analysis, forecasting, and what-if scenarios."
  - Source: https://docs.databricks.com/aws/en/genie-one/code-execution (checked 2026-10-26)
  - Reasoning: Genie One supports what-if scenarios in code execution mode, but does not provide a native side-by-side scenario comparison table with explicitly declared changed assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Partly (preview)** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Databricks page documents Genie Agents, Genie One or Genie Code showing the age, last-refresh time or staleness of the data an answer used. The Genie pages mention only rerunning a previously generated query (the 'Refresh data' action, and 'Update queries with fresh data' by rerunning SQL from chat history). Those are user actions to re-execute a query, not a freshness or staleness indicator shown with the answer. Freshness and caching material exists only for AI/BI dashboards (dashboards/caching, dashboards/materialization), legacy dashboards and Lakeflow gateway CDC freshness. None of those pages ties freshness to an AI answer, so they do not count.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Each set of insights shows when it was generated, such as Generated 5 minutes ago."
  - Source: https://docs.databricks.com/aws/en/dashboards/genie-spaces (checked 2026-10-26)
  - Reasoning: Dashboard Insights uses Databricks' built-in Genie to analyze published dashboard charts. Its cached insight sets display their generation age beside the findings, and the same section documents currentness and changed-filter indicators. This exposes the recency of the cached AI analysis, but does not establish the age or last refresh of the underlying source data for all Genie answers. Dashboard Insights is labeled Beta.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Each set of insights shows when it was generated, such as Generated 5 minutes ago."
  - Source: https://docs.databricks.com/aws/en/dashboards/genie-spaces (checked 2026-10-26)
  - Reasoning: Genie powers Dashboard Insights (Key Insights) on published AI/BI dashboards, where it analyzes charts on the dashboard page and surfaces notable findings as insight cards. Under 'How insights are cached', Databricks documents that Genie caches insights for each page and labels each set so viewers can tell whether it is current: 'Each set of insights shows when it was generated, such as Generated 5 minutes ago.' It also displays 'Insights are already up to date' if insights remain current when refreshed, and indicates if dashboard filters differ from those the insights used. This exposes the age, freshness, and staleness of the AI-generated insights at the point of use in the Genie panel, but it reflects when the AI findings were generated rather than the age or last-refresh timestamp of the underlying warehouse data across all assistant answers. The feature is in Beta ('This feature is in Beta'), earning a verdict of partly with release_stage preview.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Ask the agent to create and transform the datasets behind a dashboard."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: In an existing AI/BI dashboard, Genie Code works with the dataset queries and custom calculations behind its charts.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Genie Code helps developers generate, optimize, explain, and fix code in Databricks notebooks, the SQL editor, jobs, AI/BI dashboards, and the file editor."
  - Source: https://docs.databricks.com/aws/en/genie-code/features-capabilities (checked 2026-10-26)
  - Reasoning: The assistant explains and fixes code in the dashboard authoring surface, and the What If tutorial documents inspecting current dashboard context and working with its SQL datasets and calculations. This includes the logic feeding dashboard charts, beyond standalone editor SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Genie Code plans solutions, retrieves relevant assets, creates visualizations, configures multi-page layouts, applies filters, and fixes errors automatically."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code for dashboard authoring reads the underlying datasets, SQL queries, and custom calculations behind charts and tables in AI/BI dashboards to understand and refine them.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent can create new datasets, generate visualizations, configure filters, add pages, and organize dashboard layouts to interpret the results."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code writes the datasets and calculations behind dashboard charts (for example, 'Add a custom calculation to compute the year-over-year growth rate').
- **GPT-6.1 Sol**: yes, generally available
  - Quote: ""Add a custom calculation to compute the year-over-year growth rate.""
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: The dashboard authoring assistant explicitly creates calculations behind BI charts and tables, along with SQL datasets that feed visualizations.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent can create new datasets, generate visualizations, configure filters, add pages, and organize dashboard layouts to interpret the results."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code for dashboard authoring writes and modifies the dataset queries, custom calculations, and measures behind specific charts and widgets in an AI/BI dashboard.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Get a draft dashboard."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: Outside agents can fetch a dashboard through the CLI/API, but only as the whole serialized dashboard, which they must parse to find one chart's calculation.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The serialized `lvdash.json` file that you have after exporting a dashboard includes complete query syntax and widget settings."
  - Source: https://docs.databricks.com/aws/en/dashboards/automate/import-export (checked 2026-10-26)
  - Reasoning: The documented dashboard export API returns the serialized whole-dashboard definition, including complete chart query syntax and widget settings. An outside agent must parse that whole definition to identify a particular chart’s calculation; a chart-specific formula retrieval interface is not established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The serialized_dashboard key from the previous example contains all the necessary details to create a duplicate draft dashboard."
  - Source: https://docs.databricks.com/aws/en/dashboards/tutorials/dashboard-crud-api (checked 2026-10-26)
  - Reasoning: An outside agent can fetch the full serialized_dashboard JSON document containing queries and dataset definitions via the Lakeview REST API, but must parse the whole document rather than addressing a single chart's calculation directly.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Update a draft dashboard."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: Outside agents can change dashboard calculations only by replacing the whole serialized dashboard (--serialized-dashboard), not one chart at a time.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "That means that when you edit a dashboard file directly, you can upload that file to the original workspace and overwrite the existing file while maintaining the existing sharing settings."
  - Source: https://docs.databricks.com/aws/en/dashboards/automate/import-export (checked 2026-10-26)
  - Reasoning: The documented API and lakeview update command accept a whole serialized dashboard definition containing chart SQL and calculations. This is whole-dashboard replacement, rather than a documented targeted chart-calculation edit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Edit serialized dashboard files directly to make bulk updates without using the UI."
  - Source: https://docs.databricks.com/aws/en/dashboards/automate (checked 2026-10-26)
  - Reasoning: An outside agent can update calculations by replacing or editing the entire serialized_dashboard payload via the REST API or Git files, rather than targeting an individual chart calculation endpoint.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For existing dashboards, open the Genie Code side panel."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code opens on an existing AI/BI dashboard and works from its datasets and pages (refining, cloning pages, adding filters).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Chat searches across existing dashboards, queries, and Genie Agents to answer your questions."
  - Source: https://docs.databricks.com/aws/en/genie-one (checked 2026-10-26)
  - Reasoning: Built-in Genie One reads and uses existing BI dashboards to answer. Genie Code also opens the side panel in an existing dashboard to refine it.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Genie Code plans solutions, retrieves relevant assets, creates visualizations, configures multi-page layouts, applies filters, and fixes errors automatically."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code for dashboard authoring opens existing AI/BI dashboards, reads the datasets and layout, and works directly on the dashboard content.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Describe a dashboard in natural language, and the agent plans the work, builds it, and refines it with you, from finding data to laying out finished pages."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code builds persistent AI/BI dashboards. These are workspace objects with owners, ACLs, publishing and live Unity Catalog data.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Describe a dashboard in natural language, and the agent plans the work, builds it, and refines it with you, from finding data to laying out finished pages."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code creates first-class AI/BI dashboards backed by live Unity Catalog data. These persistent assets have owners, folder/object permissions, and an explicit publish/share workflow.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Ask the agent to build a complete dashboard from a table or dataset."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code for dashboard authoring builds complete, persistent AI/BI dashboards with datasets, visualizations, layouts, and filters from natural language instructions.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Get the current published dashboard."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: Through the CLI/API, outside agents retrieve a dashboard's serialized contents (datasets, queries, widgets, filters).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Workspace Export API GET /api/2.0/workspace/export allows you to export the contents of a dashboard as a file."
  - Source: https://docs.databricks.com/aws/en/dashboards/tutorials/workspace-dashboard-api (checked 2026-10-26)
  - Reasoning: The documented dashboard export and Lakeview GET APIs retrieve actual serialized dashboard contents, including chart/widget settings, datasets, queries, and filters. Retrieval of contents is distinct from listing dashboards.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The serialized_dashboard key from the previous example contains all the necessary details to create a duplicate draft dashboard."
  - Source: https://docs.databricks.com/aws/en/dashboards/tutorials/dashboard-crud-api (checked 2026-10-26)
  - Reasoning: The Lakeview REST API (GET /api/2.0/lakeview/dashboards/{id}) and CLI allow outside agents to retrieve the complete serialized definition of an existing AI/BI dashboard including pages, widgets, and datasets.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create a draft dashboard."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: Outside agents create AI/BI dashboards via the CLI/API (with a serialized dashboard) and can publish them. Vendor agent skills also cover AI/BI Dashboards.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This tool can copy dashboard content or create new, blank dashboards."
  - Source: https://docs.databricks.com/aws/en/dashboards/tutorials/dashboard-crud-api (checked 2026-10-26)
  - Reasoning: The first-party Lakeview Create dashboard API accepts a complete serialized_dashboard definition and warehouse ID; the same tutorial documents publication and credentials. An outside agent can create persistent BI content through that interface.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The only required property in the request body is a display_name."
  - Source: https://docs.databricks.com/aws/en/dashboards/tutorials/dashboard-crud-api (checked 2026-10-26)
  - Reasoning: Outside agents can create and publish new AI/BI dashboards programmatically via the Lakeview REST API (POST /api/2.0/lakeview/dashboards) or Declarative Automation Bundles.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When a dashboard is published with Individual data permissions, each viewer's Unity Catalog permissions determine which rows they can see."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage (checked 2026-10-26)
  - Reasoning: Dashboards built by Genie Code are ordinary AI/BI dashboards. They can be shared with named users or groups and published with individual data permissions so each viewer sees only their own data.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Viewers run queries using their own credentials. Their data permissions determine what results they can see, and they must have access to the underlying data."
  - Source: https://docs.databricks.com/aws/en/dashboards/share/share (checked 2026-10-26)
  - Reasoning: AI-created AI/BI dashboards use the same sharing and publishing controls as other dashboards. The Genie Code tutorial explicitly shares its generated dashboard with named users/groups; choosing Individual data permissions evaluates results as each viewer.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Individual data permissions: Viewers run queries using their own credentials. Use this option when viewers should see data based on their own permissions."
  - Source: https://docs.databricks.com/aws/en/dashboards/share/share (checked 2026-10-26)
  - Reasoning: AI-created dashboards can be published with Individual Data Permissions and shared with named users or groups, ensuring each viewer only sees data their personal permissions allow.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Listing pages show the assets that have been shared with you and provide options to filter and browse them."
  - Source: https://docs.databricks.com/aws/en/genie-one (checked 2026-10-26)
  - Reasoning: Genie One search and listing pages let permitted users browse and search colleagues' dashboards and Genie Agents (with owner and certification filters).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Listing pages show the assets that have been shared with you and provide options to filter and browse them."
  - Source: https://docs.databricks.com/aws/en/genie-one (checked 2026-10-26)
  - Reasoning: Genie One provides workspace/account discovery of colleagues’ permitted dashboards and agents, with name search and filters including owner and certification. AI-created dashboards are first-class assets in the same inventory.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "After you type your search criteria and press Enter, the system searches the names of all queries, dashboards, alerts, files, folders, notebooks, libraries, repos, partners, and Marketplace listings in the workspace that you have access to."
  - Source: https://docs.databricks.com/aws/en/search (checked 2026-10-26)
  - Reasoning: The Databricks workspace search bar and Search results page allow users to search and discover saved dashboards, queries, and analytical assets across the entire workspace.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Yes** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Data analysts configure each agent with Unity Catalog, example SQL queries, instructions, and trusted assets; business users query it through the chat UI."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: A Genie Agent is set up once with its own data, instructions and ACLs (CAN MANAGE/EDIT/RUN/VIEW) and shared with users or groups, who then reuse it.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Data analysts configure each agent with Unity Catalog, example SQL queries, instructions, and trusted assets; business users query it through the chat UI."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: A persistent Genie Agent has its own attached data and instructions, object ACLs, and named-user/group sharing. Colleagues reuse it under their data permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create, share, and manage a Genie Agent, the natural-language chat interface where business users ask questions of their data in Databricks. Data analysts configure each agent with Unity Catalog, example SQL queries, instructions, and trusted assets; business users query it through the chat UI."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: Analysts can configure a Genie Agent with custom instructions, datasets, and example queries, and then share it with permissions for colleagues across the organization to reuse.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Yes** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When a task runs, chat sends you an email with the results, including any visualizations, and a PDF attachment of the task's output."
  - Source: https://docs.databricks.com/aws/en/genie-one/chat (checked 2026-10-26)
  - Reasoning: Genie One scheduled tasks rerun a defined analysis on a schedule and deliver fresh results by email with no one present. Genie Code scheduled tasks do the same.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Scheduled tasks run automatically at a specified time and post the results in a chat thread."
  - Source: https://docs.databricks.com/aws/en/genie-one/chat (checked 2026-10-26)
  - Reasoning: Genie One reruns a task with saved instructions and a schedule; the same section documents email delivery of fresh results, visualizations, and a PDF, rather than merely scheduling an ordinary dashboard.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create scheduled tasks to run Genie Code prompts on a schedule, so you can turn recurring analysis into a background task."
  - Source: https://docs.databricks.com/aws/en/genie-code/scheduled-tasks (checked 2026-10-26)
  - Reasoning: Genie Code supports scheduled tasks that rerun defined prompts on a recurring schedule in the background without requiring user interaction.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Yes** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Slack: Search Slack messages and channels, and send messages."
  - Source: https://docs.databricks.com/aws/en/genie-code/mcp (checked 2026-10-26)
  - Reasoning: Genie Code, an autonomous built-in agent, can send Slack messages and update Jira, GitHub and other systems through its native connectors. These are side effects outside the analytics content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Slack: Search Slack messages and channels, and send messages."
  - Source: https://docs.databricks.com/aws/en/genie-code/mcp (checked 2026-10-26)
  - Reasoning: The built-in Genie Code can invoke a first-party connector to send Slack messages, an external side effect beyond creating notebooks or dashboards.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "A Genie Agent can use Databricks-provided MCP (Model Context Protocol) connectors to pull context from and take actions in external tools and sources during an Agent mode conversation."
  - Source: https://docs.databricks.com/aws/en/genie-agents/external-tools (checked 2026-10-26)
  - Reasoning: Genie Agents in Agent mode can connect out to external tools using Databricks-provided MCP connectors to pull context and take actions in external systems.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If Genie can't generate an answer, it can ask follow-up questions to clarify before providing a response."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: When Genie cannot proceed, the documented behavior is a clarifying question in the conversation (Genie One also 'stops and explains why' on permission gaps). No hand-off to a person via notification or review queue is documented, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "If Genie can't answer the question, it might respond by asking a follow-up clarification question."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: This documents a conversational request for missing information when Genie cannot answer. It does not establish an automatic escalation notification, review queue, or handoff to a designated person.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "If Genie can't generate an answer, it can ask follow-up questions to clarify before providing a response."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: When Genie cannot produce an answer, it asks clarifying questions in the chat, but there is no documented formal escalation queue handing the task off to a human reviewer or team.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Yes** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: yes, preview
  - Quote: "The Genie MCP invokes Genie as a tool, allowing you to query the Genie Agent to analyze data using natural language."
  - Source: https://docs.databricks.com/aws/en/genie-code/mcp (checked 2026-10-26)
  - Reasoning: A customer can add a specific, named Genie Agent (with its own tables, instructions and permissions) as a tool in Genie Code settings, so Genie Code hands it bounded analytical questions. The Genie Agent MCP endpoint is labeled Public Preview on the Databricks-provided MCPs page.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Genie Agent: Select the Genie Agent. The Genie MCP invokes Genie as a tool, allowing you to query the Genie Agent to analyze data using natural language."
  - Source: https://docs.databricks.com/aws/en/genie-code/mcp (checked 2026-10-26)
  - Reasoning: A customer selects a specific Genie Agent as a tool for built-in Genie Code. The delegated analysis is bounded by that agent’s attached sources and instructions, while Unity Catalog and agent ACLs govern access. This is an exposed, configurable delegation, not a hidden subagent.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Supervisor Agent uses advanced AI orchestration patterns to manage agent interactions, task delegation, and result synthesis to deliver comprehensive solutions."
  - Source: https://docs.databricks.com/aws/en/agents/agent-bricks/multi-agent-supervisor (checked 2026-10-26)
  - Reasoning: Databricks Supervisor Agent allows customers to configure multi-agent systems where a coordinator agent delegates bounded tasks to specialized worker agents with defined tools and permissions.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Yes** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Genie Code connects to external tools, documents, and data through Model Context Protocol (MCP) servers and native connectors for Google Drive, Gmail, Google Calendar, Microsoft 365, Atlassian, Glean, Slack, and GitHub."
  - Source: https://docs.databricks.com/aws/en/genie-code/mcp (checked 2026-10-26)
  - Reasoning: Users can attach external and custom MCP servers to the built-in Genie Code assistant.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use the native connectors for common SaaS sources, or add your own external or custom MCP servers from the workspace."
  - Source: https://docs.databricks.com/aws/en/genie-code/mcp (checked 2026-10-26)
  - Reasoning: Databricks explicitly lets users attach outside MCP tools to its own Genie Code assistant, with administrators controlling available servers.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Genie Code connects to external tools, documents, and data through Model Context Protocol (MCP) servers and native connectors for Google Drive, Gmail, Google Calendar, Microsoft 365, Atlassian, Glean, Slack, and GitHub."
  - Source: https://docs.databricks.com/aws/en/genie-code/mcp (checked 2026-10-26)
  - Reasoning: Genie Code can connect out to external tools and services using Model Context Protocol (MCP) servers and native connectors configured by the user.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Genie Code plans solutions, retrieves relevant assets, creates visualizations, configures multi-page layouts, applies filters, and fixes errors automatically."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code is Databricks' built-in AI. On this page it works inside an AI/BI dashboard (BI content) the user has open, and it fixes errors in that dashboard automatically. That is the AI repairing BI content a user points it at, which the row scores as partly. The finding half is not documented for BI content. Genie Code can answer lineage questions ('/getTableLineages', 'show me downstream lineages') on the data-lineage page, but no page says it identifies the dashboards or other BI content affected by a renamed column, changed table or edited definition and then repairs them or flags them for an owner. The page has no Beta or Preview label, so the stage is generally available.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Genie Code plans solutions, retrieves relevant assets, creates visualizations, configures multi-page layouts, applies filters, and fixes errors automatically."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: The AI can fix errors while working in the dashboard the user opens. The docs do not establish that it discovers all BI assets affected by an upstream schema or shared-definition change and repairs or flags those assets.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Genie Code plans solutions, retrieves relevant assets, creates visualizations, configures multi-page layouts, applies filters, and fixes errors automatically."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: Genie Code can diagnose and repair errors in dashboards and pipelines when pointed at them, but does not perform workspace-wide impact analysis to automatically find and fix all downstream assets affected by a schema change.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Yes (preview)** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: yes, preview
  - Quote: "To keep improving a deployed app, click Genie App Builder on the app details page."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/genie-app-builder (checked 2026-10-26)
  - Reasoning: Genie App Builder reopens an existing deployed app and refines it, which means it reads the app's code and rendered preview. The feature is Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "To keep improving a deployed app, click Genie App Builder on the app details page."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/genie-app-builder (checked 2026-10-26)
  - Reasoning: The built-in App Builder reopens a persistent deployed app and refines its generated implementation through follow-up prompts and a working preview. This covers working from an existing generated app.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "To keep improving a deployed app, click Genie App Builder on the app details page."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/genie-app-builder (checked 2026-10-26)
  - Reasoning: Genie App Builder inspects existing generated applications, displays a live preview, and allows iterative conversational refinement of the app's layout and code.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Yes (preview)** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Genie App Builder lets you build Databricks apps in the Databricks UI by describing them in natural language."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/genie-app-builder (checked 2026-10-26)
  - Reasoning: The built-in AI creates persistent, deployed Databricks Apps inside governed App Spaces. Apps have owners and CAN USE/CAN MANAGE permissions and query live Unity Catalog data. Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Genie App Builder lets you build Databricks apps in the Databricks UI by describing them in natural language."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/genie-app-builder (checked 2026-10-26)
  - Reasoning: The built-in builder generates and deploys persistent first-class apps in an App Space with admin-defined create/use permissions, app identity or per-user live data access, and named-user/group sharing. It is shipped Beta, not a customer-written app-building agent.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Genie App Builder lets you build Databricks apps in the Databricks UI by describing them in natural language."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/genie-app-builder (checked 2026-10-26)
  - Reasoning: Genie App Builder enables users to author and deploy persistent, governed data and AI applications running on serverless compute backed by Databricks AppKit from natural language prompts.

### A_OR: Can an outside coding agent read a generated app?

**Result: Yes** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "After you create the app, you can download the source code to your local machine to customize it."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/get-started (checked 2026-10-26)
  - Reasoning: An app's source can be exported from the workspace with the Databricks CLI (workspace export-dir), so a script or coding agent can pull the app's definition out.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "After you create the app, you can download the source code to your local machine to customize it."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/get-started (checked 2026-10-26)
  - Reasoning: The Databricks Apps tutorial documents workspace export-dir for an app’s definition, including app.py UI/functionality and app.yaml configuration and permissions. An outside coding agent can pull these app-specific source files through the CLI.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The apps command group within the Databricks CLI allows you to manage apps."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/apps-commands (checked 2026-10-26)
  - Reasoning: The Databricks CLI (databricks apps get, databricks apps manifest) and REST APIs allow external coding agents and scripts to retrieve the definitions, manifests, and source configuration of Databricks apps.

### A_OW: Can an outside coding agent build a generated app?

**Result: Yes** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Deploy the app by running the following command."
  - Source: https://docs.databricks.com/aws/en/dev-tools/databricks-apps/deploy (checked 2026-10-26)
  - Reasoning: Outside tools sync app files and deploy Databricks Apps with the CLI (databricks sync, databricks apps deploy). Vendor agent skills for Databricks Apps support coding agents doing this.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When run from a Databricks Apps project directory (containing `databricks.yml`) without an `APP_NAME` argument, this command runs an enhanced deployment pipeline that validates the project, deploys it to the workspace, and runs the app."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/apps-commands (checked 2026-10-26)
  - Reasoning: The first-party Apps CLI creates apps and deploys source from workspace paths or Git. An outside coding agent can author the app source, sync it, and deploy a persistent governed app through the documented interface; the actor here is explicitly outside the product.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create a new app."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/apps-commands (checked 2026-10-26)
  - Reasoning: The Databricks CLI (databricks apps create, databricks apps deploy) and Declarative Automation Bundles enable external coding agents and CI/CD pipelines to build and deploy apps programmatically.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Yes** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Benchmarks allow you to create a set of test questions that you can run to assess Genie's overall response accuracy."
  - Source: https://docs.databricks.com/aws/en/genie-agents/monitor (checked 2026-10-26)
  - Reasoning: Saved benchmark questions with gold SQL answers (Chat mode) or an LLM judge with evaluation notes (Agent mode) can be rerun after changes.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Benchmarks allow you to create a set of test questions that you can run to assess Genie's overall response accuracy."
  - Source: https://docs.databricks.com/aws/en/genie-agents/monitor (checked 2026-10-26)
  - Reasoning: Saved benchmark cases evaluate the built-in Genie Agent repeatedly. Chat mode compares query results to expected SQL answers; Agent mode supports an LLM judge and evaluation notes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "An LLM judge grades Agent mode responses rather than using SQL comparison."
  - Source: https://docs.databricks.com/aws/en/genie-agents/monitor (checked 2026-10-26)
  - Reasoning: Databricks includes built-in evaluation using benchmarks and an LLM judge to evaluate and score the accuracy of Genie Agent responses.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: No** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Admins can choose to disable the partner-powered AI features setting."
  - Source: https://docs.databricks.com/aws/en/databricks-ai (checked 2026-10-26)
  - Reasoning: Admins can only choose between partner-hosted providers and Databricks-hosted models. The trust page says Databricks-hosted models are 'entirely Databricks-selected and Databricks-managed', and no named model version can be pinned. Genie Code offers only a level-of-effort selector.
- **GPT-6.1 Sol**: no
  - Quote: "When partner-powered AI features are disabled, AI assistive features use Databricks-hosted models, which are entirely Databricks-selected and Databricks-managed."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/databricks-ai-trust (checked 2026-10-26)
  - Reasoning: The documented assistant model path is vendor-selected and managed. The closed Genie Code settings inventory exposes no model-version control, and the provider setting chooses a hosting path rather than pinning a version. No customer version pin is documented.
- **Gemini 3.8 Flash**: no
  - Quote: "When partner-powered AI features are disabled, AI assistive features use Databricks-hosted models, which are entirely Databricks-selected and Databricks-managed."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/databricks-ai-trust (checked 2026-10-26)
  - Reasoning: The documentation explicitly states that built-in AI assistive features use foundation models that are entirely Databricks-selected and Databricks-managed, with no customer model pinning.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "A record of your threaded conversations are stored and accessible until the agent is deleted."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Chat history with the generated SQL is kept, but query results persist only seven days. The docs do not record the model, data snapshot or agent configuration used for an answer.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "A record of your threaded conversations are stored and accessible until the agent is deleted."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie retains conversation inputs, responses, and generated SQL for later inspection, but the page only retains query results for seven days and does not preserve an immutable data snapshot, model version, and full configuration for every answer.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Your conversations are saved in threaded chat history. Each chat thread maintains context about previous questions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie maintains chat history with the prompts, generated SQL queries, and answers, and caches query results for 7 days; however, underlying data snapshots and fixed model versions are not pinned for exact reproducibility.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Yes** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can then provide more context in the same conversation, which Genie uses to improve its understanding for future interactions in that thread."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: A user's correction changes Genie's later answers, and the stated reach is that thread. Genie One memories likewise apply to later conversations and are private to that user.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Then, you can save it as an instruction to teach Genie how to answer in the future."
  - Source: https://docs.databricks.com/aws/en/genie-agents/monitor (checked 2026-10-26)
  - Reasoning: An agent editor corrects the generated SQL and saves it as an instruction. The correction becomes context for future answers in that Genie Agent, reaching users of that agent rather than merely rating a response.
- **Gemini 3.8 Flash**: no
  - Quote: "Genie does not automatically learn or change its behavior in response to feedback."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The documentation explicitly states that Genie does not learn or adapt its subsequent behavior based on user feedback or corrections.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Partly** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When Genie uses a trusted asset to answer a question, it provides a verified answer, giving agent users an extra layer of confidence in the result's accuracy."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: Trusted assets mark some answers as verified, and Genie uses metric views and the ontology. Nothing says answers are bound to certified content or that mismatches are flagged.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This helps Genie One improve its answers by prioritizing the assets your organization vouches for."
  - Source: https://docs.databricks.com/aws/en/data-governance/unity-catalog/certify-deprecate-data (checked 2026-10-26)
  - Reasoning: Certification influences which governed assets Genie One prioritizes. This is weaker than binding every answer to certified definitions or preventing or flagging mismatches.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "In Chat mode, when Genie answers using a trusted asset, it found a query or function that an agent editor included in the agent's instructions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: When Genie uses an editor-provided trusted asset, it indicates this in Chat mode; however, it does not strictly prevent or flag departures from certified content outside those curated queries.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Yes** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Checking Block usage blocks Genie usage for the user when the budget threshold is met."
  - Source: https://docs.databricks.com/aws/en/genie/budgets (checked 2026-10-26)
  - Reasoning: Account admins can set Genie budgets (shared and per-user) that block built-in AI usage when reached. The docs note enforcement is near real-time.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Checking Block usage blocks Genie usage for all users when the budget threshold is met."
  - Source: https://docs.databricks.com/aws/en/genie/budgets (checked 2026-10-26)
  - Reasoning: A budget can enforce usage blocking at shared or per-user thresholds. Enforcement is approximate and does not interrupt active requests; warehouse compute and free monthly usage are outside the paid-LLM budget cap.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Checking Block usage blocks Genie usage for the user when the budget threshold is met."
  - Source: https://docs.databricks.com/aws/en/genie/budgets (checked 2026-10-26)
  - Reasoning: Databricks allows administrators to set budgets on Genie usage and configure 'Block usage' to enforce a hard cap that stops further AI spend when reached.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Partly (preview)** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Query `system.ai_gateway.usage` to analyze model requests by user, model, or workspace, including token usage, latency, and errors."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/coding-agent-observability (checked 2026-10-26)
  - Reasoning: Unity Gateway is a general gateway for AI traffic, so on its own it does not measure the built-in AI. It counts here through Genie Code CLI, Databricks' own agent. The Genie Code CLI page (https://docs.databricks.com/aws/en/genie-code/genie-code-cli) says 'Genie Code CLI usage is billed the same as using the model directly through Unity Gateway, and appears in your Unity Gateway usage.' It also says 'Admins govern Genie Code CLI through Unity Gateway, the same way as other coding agents.' The quoted page states that customers can query system.ai_gateway.usage for latency by user and model. The usage-tracking schema lists latency_ms ('The total latency in milliseconds.'), destination_model and session_metadata, so customers can measure response time on their own Genie Code CLI workload, broken down by model. The verdict is partly because only Genie Code CLI is documented as routed through this measurement. No page documents response-time measurement for Genie Agents, Genie One, workspace Genie Code or Genie benchmark runs. Benchmark evaluation runs are timestamped but show no latency. The stage is preview because the Genie Code CLI page labels the feature Beta.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "The Unity Gateway usage dashboard (AI Gateway > Govern > Usage Dashboard) tracks request volume, token consumption, and latency for all endpoints governed through the gateway."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/observability (checked 2026-10-26)
  - Reasoning: The Genie Code CLI page identifies it as Databricks' own coding agent, states that its model access is provided through Unity Gateway, and explicitly says its usage appears in Unity Gateway usage. The cited dashboard therefore measures latency for model requests made by that first-party agent on customer workloads. The usage-tracking page also documents model identifiers and latency_ms. Credit is partial because this measures gateway/model-request latency rather than the complete analytical answer's end-to-end response time, and the documented route covers Genie Code CLI rather than every built-in AI surface. Genie Code CLI is labeled Beta.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "`databricks.latency_ms`End-to-end request latency in milliseconds."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/unified-trace-table-reference (checked 2026-10-26)
  - Reasoning: Unity AI Gateway logs the databricks.latency_ms attribute in the unified trace table, recording end-to-end request latency in milliseconds for monitoring AI requests.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Yes** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The following query returns all billed Genie usage, per user and per day."
  - Source: https://docs.databricks.com/aws/en/genie/monitor-cost (checked 2026-10-26)
  - Reasoning: Billing system tables attribute Genie usage by user, workspace and Genie surface.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The following query returns all billed Genie usage, per user and per day."
  - Source: https://docs.databricks.com/aws/en/genie/monitor-cost (checked 2026-10-26)
  - Reasoning: The documented billing queries attribute Genie consumption and cost by user, workspace, and Genie surface, and separately expose free and paid usage.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Account admins can set budgets, which let you track and control Genie spend for your entire account, for specific workspaces, for user groups, or for individual users, and alert you before limits are reached."
  - Source: https://docs.databricks.com/aws/en/genie/budgets (checked 2026-10-26)
  - Reasoning: Administrators can monitor and break down Genie AI consumption by workspace, user group, or individual user using budgets and system usage tables.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Yes** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Each user sees only the data they are authorized to access, and each query is attributed to the end user in query history and the agent's monitoring page."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Each Genie query is attributed to the asking user in query history (which records the SQL and objects touched) and in the agent's monitoring page. Audit logs also have assistant-specific services (aibiGenie, genieChat including mcpToolInvocation).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Each user sees only the data they are authorized to access, and each query is attributed to the end user in query history and the agent's monitoring page."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Genie-specific monitoring and query history associate generated analytical SQL with the asking user and agent. The query-history schema preserves statement text and genie_space_id; lineage records supply accessed tables and columns and can join by statement_id.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Each user sees only the data they are authorized to access, and each query is attributed to the end user in query history and the agent's monitoring page."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Queries generated by the built-in assistant are logged in query history and the agent's monitoring page attributed directly to the asking user along with the accessed tables.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can manage this setting at the account or workspace level, subject to the removal timeline described above."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/partner-powered (checked 2026-10-26)
  - Reasoning: The partner-powered AI toggle can be set per workspace, but it is not a full AI on/off: Genie Code stays available on Databricks-hosted models. The UI toggle is also being removed on November 1, 2026. No per-user or per-group AI enablement control is documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can manage this setting at the account or workspace level, subject to the removal timeline described above."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/partner-powered (checked 2026-10-26)
  - Reasoning: As of the corpus date and current date, the Settings API can disable partner-powered AI for selected workspaces, removing features such as Genie Agent chat and agentic Genie Code. The page says API configurability ends November 1, 2026; toggles are already restricted, and hosted non-agentic assistance can remain.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Click the toggle On for Partner-powered AI features."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/partner-powered (checked 2026-10-26)
  - Reasoning: Administrators can enable or disable partner-powered AI features per workspace or across the account under Workspace admin settings.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Positive feedback on responses that join tables or use SQL expressions can prompt Genie to suggest new SQL snippets (such as measures, joins, or filters) to agent managers for review and approval."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie's proposed changes to a Genie Agent's shared definitions (measures, joins, filters) wait for approval by agent managers (CAN MANAGE), a role other than the end user who triggered them. Genie Code's own tool-approval prompts go to the requester and would be only partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Positive feedback on responses that join tables or use SQL expressions can prompt Genie to suggest new SQL snippets (such as measures, joins, or filters) to agent managers for review and approval."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie proposes shared agent knowledge-store definitions after response feedback, and the documented agent-manager role reviews and approves them before incorporation. This is a manager review of proposed shared definitions, beyond the requester accepting a dashboard edit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When the agent needs to create or modify dashboard elements, it asks for your approval before proceeding."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/dashboard-agent (checked 2026-10-26)
  - Reasoning: The dashboard authoring agent asks the requesting user to approve or continue before modifying dashboard elements, which is user confirmation rather than routing to a separate designated approver role.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "However, workspaces admins can set up their workspaces to use Genie Code fully powered by models hosted and served directly on Databricks infrastructure, at no additional cost."
  - Source: https://docs.databricks.com/aws/en/databricks-ai (checked 2026-10-26)
  - Reasoning: Customers can choose partner-hosted or Databricks-hosted inference and enforce in-Geo processing. Fully Databricks-hosted inference is documented only for Genie Code, and nothing runs in the customer's own cloud account.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Account admins can enable cross-Geo processing that allows data for Designated Services to be processed outside of their workspace Geo."
  - Source: https://docs.databricks.com/aws/en/resources/databricks-geos (checked 2026-10-26)
  - Reasoning: Admins control whether built-in AI processing stays in the workspace Geo or may cross Geos. This is a geographic inference-boundary choice, not customer-hosted inference or selection of an exact model endpoint for every feature.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Admins can choose to disable the partner-powered AI features setting. When the setting is disabled, Databricks AI assistive features use Databricks-hosted models where available, or are disabled entirely."
  - Source: https://docs.databricks.com/aws/en/databricks-ai (checked 2026-10-26)
  - Reasoning: Customers can disable partner-powered endpoints to fall back to Databricks-hosted models where available, but cannot freely choose an arbitrary customer-controlled inference endpoint or region for all built-in AI features.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Row filters and column masks defined in Unity Catalog are automatically enforced per user."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Genie Agents evaluate data access under the end user's identity, with per-user row filters and column masks. But dashboard companion Genie Agents on dashboards with embedded credentials use the publisher's credentials (dashboards/genie-spaces). That is a documented surface that bypasses viewer rules, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Row filters and column masks defined in Unity Catalog are automatically enforced per user."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Standalone Genie Agents enforce the asking user’s Unity Catalog row filters and column masks, but an autogenerated dashboard companion can instead return data under publisher credentials. Therefore the asking user’s row and column rules do not govern every built-in surface.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Row filters and column masks defined in Unity Catalog are automatically enforced per user."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Genie executes queries under the end user's identity, meaning existing Unity Catalog row filters and column masks are automatically enforced on assistant answers.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Yes**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If the partner-powered AI features setting is enabled, Databricks AI assistive features use models hosted by Azure OpenAI service, OpenAI on Databricks, or Anthropic on Databricks."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/databricks-ai-trust (checked 2026-10-26)
  - Reasoning: The same page names the receiving services and lists what each feature sends (prompts, metadata, sample values, code). It states retention: partners use zero-data-retention endpoints, and responses are stored in the control plane or with notebook content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Our model partners do not retain data you submit through these features, even for abuse monitoring."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/databricks-ai-trust (checked 2026-10-26)
  - Reasoning: The page names Azure OpenAI service, OpenAI on Databricks, and Anthropic on Databricks; details prompt, code, metadata, sample values, and connected-source content by feature; and specifies zero partner retention. It also describes Databricks storage of chat responses.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Our partner-powered AI assistive features use zero data retention endpoints from our model partners."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/databricks-ai-trust (checked 2026-10-26)
  - Reasoning: Databricks documentation details data flow for partner-powered AI assistive features, identifying the external model partners (such as Anthropic, OpenAI) and confirming they use zero data retention endpoints.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Yes**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Importantly, your data is not stored outside of your workspace's Geo regardless of this setting."
  - Source: https://docs.databricks.com/aws/en/resources/designated-services (checked 2026-10-26)
  - Reasoning: AI assistive features are Designated Services. The page says content is processed in the workspace's Geo (or across Geos if cross-Geo processing is enabled) and never stored outside it, with per-country processing tables.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Customer content can be processed across Geos if cross-Geo processing is enabled."
  - Source: https://docs.databricks.com/aws/en/resources/databricks-geos (checked 2026-10-26)
  - Reasoning: The Geo documentation defines processing geography and cross-Geo behavior for AI Designated Services. Trust documentation identifies control-plane storage for Genie Agent/One conversations and notebook storage for Genie Code, but the evidence does not enumerate processing and storage regions for every AI feature.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Customer content is only processed in the same Geo as your workspace, except for certain Designated Services."
  - Source: https://docs.databricks.com/aws/en/resources/databricks-geos (checked 2026-10-26)
  - Reasoning: Databricks documents geographical residency rules, ensuring customer data is processed and stored in the same geographic region as the workspace unless cross-Geo processing is explicitly enabled.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Databricks does not use data, prompts, or responses submitted to or output from these features to train generative foundation models that Databricks makes available for use by third parties."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/databricks-ai-trust (checked 2026-10-26)
  - Reasoning: The no-training statement covers only foundation models Databricks offers to third parties, plus no partner retention. It is not a blanket statement that customer data is never used to train AI models.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Databricks does not use data, prompts, or responses submitted to or output from these features to train generative foundation models that Databricks makes available for use by third parties."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/databricks-ai-trust (checked 2026-10-26)
  - Reasoning: This is an affirmative default no-training statement for customer content in AI assistive features; the same page specifies partner zero-retention endpoints.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Databricks does not use data, prompts, or responses submitted to or output from these features to train generative foundation models that Databricks makes available for use by third parties."
  - Source: https://docs.databricks.com/aws/en/databricks-ai/databricks-ai-trust (checked 2026-10-26)
  - Reasoning: Databricks explicitly documents that customer data, prompts, and completions submitted to AI features are not used to train foundation models.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Partly** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "A Genie Agent uses only the data sources explicitly attached under its Sources."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: Each agent's author sets its data scope (and can hide columns). No workspace-wide admin control limiting assistant data separately from user permissions was found.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "A Genie Agent uses only the data sources explicitly attached under its Sources."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: Authors can enforce an individual agent’s source scope independently of the user’s broader permissions. This does not establish an administrator-enforced data restriction across every assistant in a workspace or tenant.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can add up to 50 tables, views, or metric views to a Genie Agent."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: Curators restrict which tables, views, and metric views an agent can access when configuring each individual Genie Agent, but there is no tenant-wide administrative data boundary distinct from user permissions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes (preview)** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, preview
  - Quote: "To make it read-only, set `disallow_writes` to `true` in the built-in `system.ai.dbsql_policy` policy."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: An outside agent using the Databricks SQL MCP can be held to read-only even when the human can write. Policies can also deny tools for a specific agent's OAuth client ID. The Unity Gateway MCP and policies are Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "To make it read-only, set `disallow_writes` to `true` in the built-in `system.ai.dbsql_policy` policy."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: An outside agent can be restricted to read-only SQL through a product-enforced MCP policy even when the human can write. Service-principal OAuth also supports a separately permissioned identity.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "To make it read-only, set disallow_writes to true in the built-in system.ai.dbsql_policy policy."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: An outside agent accessing Databricks through the Databricks SQL MCP server can have its permissions scoped narrower than the human user's access, such as enforcing read-only access via service policies.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For lineage history beyond one year, use Catalog Explorer or the lineage API, which indefinitely retain lineage captured after September 1, 2024."
  - Source: https://docs.databricks.com/aws/en/admin/system-tables/lineage (checked 2026-10-26)
  - Reasoning: Unity Catalog exposes table and column lineage through a lineage API and the system.access.table_lineage / column_lineage tables. Outside agents can follow a table to its upstream sources and transformations through these.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "These system tables build on Unity Catalog's data lineage feature, allowing you to programmatically query lineage data to fuel decision making and reports."
  - Source: https://docs.databricks.com/aws/en/admin/system-tables/lineage (checked 2026-10-26)
  - Reasoning: An outside agent can query documented table/column lineage system tables or the lineage API, following upstream source/target links and the responsible transformations’ notebook, job, pipeline, and statement IDs. This is a lineage interface rather than source inference from SQL text.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Lineage can be visualized in Catalog Explorer in near real-time and retrieved with the Databricks REST API."
  - Source: https://docs.databricks.com/aws/en/lakehouse-architecture/interoperability-and-usability/best-practices (checked 2026-10-26)
  - Reasoning: Databricks captures end-to-end data lineage across tables, views, and columns, and exposes it via the Lineage REST API for programmatic traversal by outside agents.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Yes (preview)** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "A user or agent sends a request to an MCP through Unity Gateway, such as listing or calling its tools."
  - Source: https://docs.databricks.com/aws/en/admin/account-settings/audit-logs (checked 2026-10-26)
  - Reasoning: The mcpService audit event logs agent MCP calls with caller identity, auth type, MCP name and tool name. Affected objects are recorded only as tool_arguments for some Databricks-provided MCPs, so analytical objects are only partly captured.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Security and compliance: Every span records the requester identity, endpoint name, and full request payload, so you can feed it into your security tooling for threat detection and investigation."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/unified-trace-table (checked 2026-10-26)
  - Reasoning: Unified tracing records outside-agent MCP tool calls with the requesting user/service principal, tool name, full arguments, and results. For the first-party SQL MCP, the arguments contain the actual SQL and named analytical tables/views; audit identity_metadata additionally distinguishes run_by from run_as for delegation. This is agent-interface tracing, rather than a generic human-activity log. Trace delivery is best-effort and payloads over 3 MiB can be truncated.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A user or agent sends a request to an MCP through Unity Gateway, such as listing or calling its tools."
  - Source: https://docs.databricks.com/aws/en/admin/account-settings/audit-logs (checked 2026-10-26)
  - Reasoning: The Databricks audit log records the mcpCall event whenever an agent or user sends a request to an MCP server through Unity Gateway, capturing the actor identity, request parameters, and affected objects.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly (preview)** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "The `ASK` outcome pauses the call until a person approves it."
  - Source: https://docs.databricks.com/aws/en/data-governance/unity-catalog/service-policies/policy-examples (checked 2026-10-26)
  - Reasoning: A Beta service policy can hold an agent's MCP write call. The documented prompt ('Please confirm') goes back to the requester through the agent rather than to a separate approver, and it is shown for MCP tools in general, not governed analytical assets.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Clone the repository into your own Databricks Git folder, use feature branches, and submit pull requests."
  - Source: https://docs.databricks.com/aws/en/dashboards/automate/git-support (checked 2026-10-26)
  - Reasoning: Dashboards have a documented general pull-request development workflow. The docs do not explicitly route outside-agent changes to a separate approver. MCP ASK policies ask the requesting user to confirm, which also falls short of the distinct-approver rule.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "ASK approval is available only for MCP Services during the input phase."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/govern-model-provider-services (checked 2026-10-26)
  - Reasoning: Unity Gateway Service Policies support an ASK outcome on MCP services that pauses the outside agent's execution to prompt the calling user for approval, but does not route to a separate designated approver role.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Clone the repository into your own Databricks Git folder, use feature branches, and submit pull requests."
  - Source: https://docs.databricks.com/aws/en/dashboards/automate/git-support (checked 2026-10-26)
  - Reasoning: Dashboards can be version-controlled in Git folders and reviewed through pull-request diffs. This is a generic change diff and is not documented specifically for outside-agent changes.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When committing dashboard changes to Git, queries and text box content now appear across multiple lines in the diff, making changes easier to review."
  - Source: https://docs.databricks.com/aws/en/ai-bi/release-notes/2025 (checked 2026-10-26)
  - Reasoning: A before/after dashboard diff covers queries and text in source-controlled dashboard files. This is a generic dashboard change diff; the docs do not explicitly demonstrate reviewer diffs for outside-agent changes.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Databricks Git folders track dashboard changes and history, support team collaboration, and allow you to deploy dashboards to production and recover previous versions."
  - Source: https://docs.databricks.com/aws/en/dashboards/automate/git-support (checked 2026-10-26)
  - Reasoning: Databricks Git folders provide version control and commit history tracking changes to dashboard definitions, but it is a generic Git diff/history mechanism rather than a specialized diff view for outside agent changes.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Revert a dashboard's definition in draft mode to the last published version."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: The CLI that outside agents use can revert a dashboard draft to its last published version. Dashboards in Git folders can also be rolled back.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Revert a dashboard's definition in draft mode to the last published version."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: The first-party CLI can restore a dashboard definition after a programmatic outside-agent draft edit. The rollback target is the last published version; it does not promise per-agent transactional undo.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "You can now discard changes to a draft dashboard and restore it to the most recently published state."
  - Source: https://docs.databricks.com/aws/en/ai-bi/release-notes/2025 (checked 2026-10-26)
  - Reasoning: Changes made to draft dashboards by external agents or APIs can be rolled back by discarding changes to restore the most recently published state.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Genie One MCP is generally available."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services (checked 2026-10-26)
  - Reasoning: Databricks hosts the Genie One MCP server (system.ai.genie_one_mcp), which gives outside agents governed access to workspace data with documented OAuth U2M/M2M/PAT authentication. Customers build no middleware.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The new Genie One MCP, `system.ai.genie_one_mcp`, is generally available."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/genie-mcp (checked 2026-10-26)
  - Reasoning: Databricks hosts and supports this analytics MCP and documents its URL, OAuth scope, and user/service-principal authentication. The older agent-specific preview endpoint does not limit the GA Genie One MCP.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "The Databricks SQL MCP server lets agents run AI-generated SQL against your Unity Catalog tables to read and write data, with access governed by Unity Catalog permissions."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: Databricks provides vendor-supported MCP servers (Databricks SQL MCP and Genie One MCP) with documented OAuth and service principal authentication, but they are currently in Public Beta / Preview.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "List all dashboards."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: The Databricks CLI that outside agents use enumerates dashboards (lakeview list) and Genie Agents (genie commands: 'List Genie Agents in the workspace.') without knowing their IDs.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "List all dashboards."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: The databricks lakeview list command enumerates available dashboards without an ID or search term, allowing an outside agent to discover existing BI objects.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "List all dashboards."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/lakeview-commands (checked 2026-10-26)
  - Reasoning: The Databricks CLI (databricks lakeview list) and REST APIs provide documented ways for outside agents and automation tools to enumerate and discover existing dashboards and workspace objects without knowing IDs beforehand.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "OAuth machine-to-machine (M2M) calls the MCP as a service principal."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/authentication-networking (checked 2026-10-26)
  - Reasoning: Named credential types for agents are documented: OAuth U2M as the user, OAuth M2M as a service principal for unattended agents, token federation, and PATs.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The client sends a Databricks token when it calls an MCP through Unity Gateway or on Databricks Apps."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/authentication-networking (checked 2026-10-26)
  - Reasoning: The page documents OAuth U2M, OAuth M2M service principals, token federation, and PAT authentication for outside MCP clients, identifying the credential used to enter Databricks.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This token identifies the Databricks user or Databricks service principal making the request."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/authentication-networking (checked 2026-10-26)
  - Reasoning: Databricks documents programmatic authentication for outside agents via OAuth user-to-machine (U2M) tokens, OAuth machine-to-machine (M2M) service principal tokens, and personal access tokens (PAT).

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Agent skills are task-specific instruction files that AI coding assistants like Claude and GitHub Copilot can load to perform Databricks development tasks."
  - Source: https://docs.databricks.com/aws/en/agent-skills (checked 2026-10-26)
  - Reasoning: Databricks publishes officially maintained agent skills and plugins (Claude Code and Cursor marketplaces, installed with databricks aitools install).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Databricks AI tools are also published as plugins in the Claude Code and Cursor marketplaces."
  - Source: https://docs.databricks.com/aws/en/agent-skills (checked 2026-10-26)
  - Reasoning: Databricks publishes official skills and plugins that outside coding agents load; the page explains skill files, installation, and first-party maintained repositories.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Agent skills are task-specific instruction files that AI coding assistants like Claude and GitHub Copilot can load to perform Databricks development tasks."
  - Source: https://docs.databricks.com/aws/en/agent-skills (checked 2026-10-26)
  - Reasoning: Databricks publishes official agent skills (following the Agent Skills open standard) and marketplace plugins for Claude Code, Cursor, and Copilot that teach outside coding agents how to work with Databricks.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The `aitools` command group within the Databricks CLI installs skills and plugins so your coding agent can work effectively with Databricks resources such as bundles, jobs, and SQL."
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/reference/aitools-commands (checked 2026-10-26)
  - Reasoning: The Databricks CLI docs address coding agents directly, including non-interactive behavior. Non-interactive auth (OAuth M2M with a service principal) is documented on the MCP authentication page.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The CLI detects supported coding agents and installs Databricks skills and plugins so your agent can work effectively with Databricks resources such as bundles, jobs, and SQL."
  - Source: https://docs.databricks.com/aws/en/agent-skills (checked 2026-10-26)
  - Reasoning: The supported Databricks CLI explicitly serves coding agents through aitools and packaged CLI guidance. The CLI authentication documentation separately provides noninteractive OAuth M2M service-principal setup.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The CLI detects supported coding agents and installs Databricks skills and plugins so your agent can work effectively with Databricks resources such as bundles, jobs, and SQL."
  - Source: https://docs.databricks.com/aws/en/agent-skills (checked 2026-10-26)
  - Reasoning: The Databricks CLI specifically documents integration with AI coding assistants (like Claude Code, Cursor, and Copilot) via the databricks aitools command group, providing non-interactive authentication and tooling.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Yes** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can govern who invokes them with grants and govern individual calls with policies."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/built-in-mcp-services (checked 2026-10-26)
  - Reasoning: Each system.ai MCP is a Unity Catalog securable. Admins grant or withhold EXECUTE on the MCP for specific users or groups, separately from data permissions, and admins can enable or disable OAuth client apps.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Callers need `EXECUTE` on the MCP, `USE CATALOG` and `USE SCHEMA` on its parents, and assignment to the workspace."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/govern-mcp-service (checked 2026-10-26)
  - Reasoning: An administrator grants a named group permission to invoke the MCP independently of its underlying data privileges. This permits per-group rollout of the outside-agent interface; dedicated OAuth clients can also be disabled account-wide.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Click Grant, select data-team and EXECUTE, then click Grant."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/govern-mcp-service (checked 2026-10-26)
  - Reasoning: Administrators control outside agent and MCP access at granular user and group levels by granting or revoking EXECUTE privileges on individual MCP services in Unity Gateway.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Yes** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "MCP rate limits apply to `tools/call` requests and use queries per minute (QPM)."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/govern-mcp-service (checked 2026-10-26)
  - Reasoning: Unity Gateway sets MCP-specific rate limits (service-wide QPM plus per-user and per-group limits) on the agent interface. Calls over the limit return HTTP 429.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "MCP rate limits apply to `tools/call` requests and use queries per minute (QPM)."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/govern-mcp-service (checked 2026-10-26)
  - Reasoning: The first-party MCP interface has separately configured, enforced tool-call rate limits, with per-user, service-principal, and group scopes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "MCP rate limits apply to tools/call requests and use queries per minute (QPM)."
  - Source: https://docs.databricks.com/aws/en/ai-gateway/govern-mcp-service (checked 2026-10-26)
  - Reasoning: Unity Gateway lets administrators configure rate limits specifically on MCP servers (in queries per minute, QPM) to cap what outside agents can call, returning HTTP 429 when limits are exceeded.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Instructions help guide Genie's responses so that it can process the unique jargon, logic, and concepts in a given domain."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: Built-in Genie reads agent instructions, SQL expressions and knowledge store descriptions (for example, fiscal-year rules) before answering. Genie Code and Genie One have workspace instruction files.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Click the Text tab to write plain text instructions that help Genie understand how to respond to specific questions about your business."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: Agent authors give built-in Genie business rules and terminology as instructions applied when it answers, including fiscal-calendar and KPI definitions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Instructions can describe business rules, preferred terminology, date formats, and other domain-specific context."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Genie Agents accept plain-text instructions where users can explicitly teach the assistant about business rules, domain metrics, terminology, and calculations.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Use Declarative Automation Bundles to define, deploy, and version-control your Genie Agents as code."
  - Source: https://docs.databricks.com/aws/en/genie-agents/best-practices (checked 2026-10-26)
  - Reasoning: Genie Agent configuration, including its instructions and context, can be stored as code (.geniespace.json) in a bundle repository with change history. Genie Code also reads AGENTS.md files.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The corresponding `nyc_taxi_genie.geniespace.json` file holds the serialized definition of the space, including its data sources, instructions, and sample questions."
  - Source: https://docs.databricks.com/aws/en/dev-tools/bundles/resources (checked 2026-10-26)
  - Reasoning: The agent’s business instructions and data context are deployable local JSON files in a bundle, so they can live in Git for diffs, review, and rollback. The bundle CLI exports an existing agent into that representation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Declarative Automation Bundles let you express projects as code and programmatically validate, deploy, and run Databricks workflows"
  - Source: https://docs.databricks.com/aws/en/dev-tools/cli/bundle-commands (checked 2026-10-26)
  - Reasoning: Declarative Automation Bundles (DABs) store Genie Agent definitions, space configurations, instructions, and queries as serialized JSON/YAML in source control repositories.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "All knowledge store configurations are scoped to your Genie Agent and do not affect Unity Catalog metadata or other Databricks assets."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: Context attaches per Genie Agent, so each team's agent gets its own context. Genie Code also has user and workspace instruction levels.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "All knowledge store configurations are scoped to your Genie Agent and do not affect Unity Catalog metadata or other Databricks assets."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: Teams can have separate reusable Genie Agents, each with its own business descriptions, relationships, expressions, and instructions, rather than sharing one tenant-global context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A Genie Agent is a domain-specific natural-language chat interface in Databricks where users ask questions of their data and get back SQL queries, results tables, and visualizations. Data analysts curate each agent with datasets registered to Unity Catalog, example SQL queries, SQL expressions for business semantics, and text instructions tailored to the organization's terminology."
  - Source: https://docs.databricks.com/aws/en/genie-agents (checked 2026-10-26)
  - Reasoning: Business context can be scoped to distinct Genie Agents tailored for specific business domains, teams, and datasets rather than applying one monolithic global context.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Cloning is useful when you want to test changes in a separate agent or reuse the original context in a new one."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: Context changes can be staged in a cloned agent and checked with benchmark runs before they reach the production agent's users.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Cloning is useful when you want to test changes in a separate agent or reuse the original context in a new one."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: Cloning copies instructions, sources, SQL examples, and functions into an independent agent. Authors can change context and run benchmark tests there before changing the agent used by colleagues.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use benchmarks to score response accuracy at scale."
  - Source: https://docs.databricks.com/aws/en/genie-agents/monitor (checked 2026-10-26)
  - Reasoning: Genie provides benchmarks—a saved set of test questions with ground-truth evaluations—allowing curators to test and validate business context and instructions before releasing them to users.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Yes**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Referenced SQL example: When applicable, displays a relevant SQL example that Genie used as a reference."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The answer's Analysis section shows which curated example shaped it, and trusted-asset answers show the function or query used. Genie One cites the memory it applied.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Referenced SQL example: When applicable, displays a relevant SQL example that Genie used as a reference."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The answer Analysis section identifies the specific saved SQL example that shaped the answer, rather than merely listing source tables. Genie One also cites applied personal memories.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "In Chat mode, when Genie answers using a trusted asset, it found a query or function that an agent editor included in the agent's instructions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Genie surfaces citations identifying when an answer was derived from a trusted asset specified in instructions, and Genie One displays Genie Ontology citations linking answers to Pages and semantic sources.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Genie uses the metadata attached to Unity Catalog objects, as well as an author-curated agent-level knowledge store, to generate responses."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Genie reads Unity Catalog table and column comments and PK/FK metadata from the warehouse. Genie Ontology also infers context from queries that dbt runs.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Details provided by authors, combined with relevant Unity Catalog comments, metadata, and sample values from selected columns, allow Genie to infer both business and technical logic."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Built-in Genie directly consumes warehouse Unity Catalog comments and column metadata as context without requiring those descriptions to be retyped into the agent.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Genie uses Unity Catalog column names and descriptions to generate responses."
  - Source: https://docs.databricks.com/aws/en/genie-agents/best-practices (checked 2026-10-26)
  - Reasoning: Genie automatically ingests table comments and column descriptions defined in Unity Catalog and uses them as business context when interpreting questions.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Yes**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Hiding a column removes it from the Genie Agents's context, so Genie won't reference it when generating SQL or answering questions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: Hiding a column is an AI-specific product setting that takes it out of Genie's reach without changing data permissions. Agents can also be tagged Deprecated.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Hiding a column removes it from the Genie Agents's context, so Genie won't reference it when generating SQL or answering questions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: The agent-specific hide-column setting removes a field from AI context while leaving underlying data and ordinary user permissions unchanged. It is a product setting rather than just an instruction to avoid a column.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Hiding a column removes it from the Genie Agents's context, so Genie won't reference it when generating SQL or answering questions."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: Databricks provides a product setting to hide specific columns within a Genie Agent so the AI will not reference them when generating SQL or answering questions.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Yes**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Positive feedback on responses that join tables or use SQL expressions can prompt Genie to suggest new SQL snippets (such as measures, joins, or filters) to agent managers for review and approval."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: Agent managers (CAN MANAGE) are the named owner role for a Genie Agent's context and review and approve proposed context changes. Workspace instructions are editable only by workspace admins.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Positive feedback on responses that join tables or use SQL expressions can prompt Genie to suggest new SQL snippets (such as measures, joins, or filters) to agent managers for review and approval."
  - Source: https://docs.databricks.com/aws/en/genie-agents/talk-to-genie (checked 2026-10-26)
  - Reasoning: The docs identify agent managers as the role that reviews and approves proposed business measures, joins, and filters before those become shared agent context.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The owner or curator accepts or rejects the entire batch at once."
  - Source: https://docs.databricks.com/aws/en/uc-semantics/pages (checked 2026-10-26)
  - Reasoning: Unity Catalog Pages document an explicit ownership role (Page owner and curator) and a collaborative review workflow where suggested changes must be reviewed and accepted by the owner or curator.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Yes** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "A Genie Agent is based on data registered to Unity Catalog, including managed tables, external tables, foreign tables, views, metric views, and materialized views."
  - Source: https://docs.databricks.com/aws/en/genie-agents/concepts (checked 2026-10-26)
  - Reasoning: Genie answers directly from warehouse-level logic: views, materialized views and Unity Catalog metric views.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Genie Code is context-aware: on the UI tab it updates the editor for you, and in the YAML editor it inserts YAML."
  - Source: https://docs.databricks.com/aws/en/uc-semantics/metric-views/create (checked 2026-10-26)
  - Reasoning: Genie Code works with an existing Unity Catalog metric view’s warehouse-level YAML definition and can add a measure to it. This is direct use of warehouse semantic logic, not merely reading table names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can add up to 50 tables, views, or metric views to a Genie Agent."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: Genie Agents read and query standard warehouse views, materialized views, and metric views defined in Unity Catalog.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Yes** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "It generates and runs code, builds pipelines and AI/BI dashboards, debugs errors, and works directly with Unity Catalog tables, columns, and lineage to accelerate multi-step data work."
  - Source: https://docs.databricks.com/aws/en/genie-code (checked 2026-10-26)
  - Reasoning: Genie Code writes logic that lands in the warehouse: Lakeflow pipelines and tables, plus Unity Catalog metric views during BI import.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Genie Code can plan and generate entire pipelines end-to-end from scratch, or accelerate working on an existing pipeline."
  - Source: https://docs.databricks.com/aws/en/ldp/de-agent (checked 2026-10-26)
  - Reasoning: Built-in Genie Code writes and runs SQL/Python transformation pipelines that create warehouse datasets below dashboards; it also creates persistent Unity Catalog metric views.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Genie Code can plan and generate entire pipelines end-to-end from scratch, or accelerate working on an existing pipeline."
  - Source: https://docs.databricks.com/aws/en/ldp/de-agent (checked 2026-10-26)
  - Reasoning: Genie Code in the Lakeflow Pipelines Editor authors transformations, models, views, and data pipelines directly in the warehouse.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Among others, includes skills for Agent Bricks, AI Functions, AI/BI Dashboards, Databricks Apps, Bundles, Databricks CLI, Databricks Lakehouse, Genie, Iceberg, Lakebase, Lakeflow Jobs, metric views, MLflow evaluation, Model Serving, Python SDK, Lakeflow pipelines, serverless migration, Structured Streaming, synthetic data, Unity Catalog, AI Search, and Zerobus ingest"
  - Source: https://docs.databricks.com/aws/en/agent-skills (checked 2026-10-26)
  - Reasoning: Vendor skills teach outside agents to work with metric views and Lakeflow pipelines, but no page shows an outside agent retrieving view or metric-view definitions. The SQL MCP documents only 'inspecting schemas' and says it gives no semantic context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The following query returns the full YAML definition for a metric view, including measures, fields, joins, and agent metadata."
  - Source: https://docs.databricks.com/aws/en/uc-semantics/metric-views/query (checked 2026-10-26)
  - Reasoning: An outside agent can use the documented DESCRIBE TABLE EXTENDED SQL interface through Databricks connectivity to retrieve warehouse semantic-view logic, not just schema names or types.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The Databricks SQL MCP server lets agents run AI-generated SQL against your Unity Catalog tables to read and write data, with access governed by Unity Catalog permissions."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: Outside coding agents connecting via the Databricks SQL MCP server can execute SQL queries to inspect schemas, read view definitions, and query warehouse-level logic.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes (preview)** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Use this server for development and data engineering: running a specific query you or your coding agent wrote, inspecting schemas, validating SQL syntax, and authoring data pipelines from AI coding tools."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: Through the Databricks SQL MCP (read/write by default), outside coding agents author warehouse logic such as pipelines. system.ai.dbsql requires the Unity Gateway Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Use this server for development and data engineering: running a specific query you or your coding agent wrote, inspecting schemas, validating SQL syntax, and authoring data pipelines from AI coding tools."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: The first-party SQL MCP explicitly supports outside coding agents authoring data-engineering pipelines. The metric-view documentation supplies SQL CREATE/ALTER definitions for warehouse semantic logic.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Use this server for development and data engineering: running a specific query you or your coding agent wrote, inspecting schemas, validating SQL syntax, and authoring data pipelines from AI coding tools."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: Outside coding agents use the Databricks SQL MCP server to author data pipelines, create views, and write transformation logic directly into the warehouse.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Yes**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Query metric views from SQL editors, notebooks, dashboards, Genie Agents, and alerts."
  - Source: https://docs.databricks.com/aws/en/uc-semantics/metric-views (checked 2026-10-26)
  - Reasoning: Metric definitions kept as warehouse-level Unity Catalog metric views are used directly by dashboards and Genie, with no rebuild in the BI layer. Native dbt or Cube semantic-model import is not documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can use metric views in dashboards by creating a local metric view, selecting a Unity Catalog metric view as a data source, or referencing a metric view in a SQL query."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/data-modeling/datasets (checked 2026-10-26)
  - Reasoning: AI/BI dashboards can directly select an existing warehouse-level Unity Catalog metric view or query it. The same section states that selecting one includes its defined dimensions and measures, so existing metric definitions are consumed without rebuilding them in the dashboard. The Unity Catalog metric-views overview also documents querying these definitions from Genie Agents. This establishes reuse of warehouse semantic definitions; it does not establish importing dbt or Cube semantic models. Direct use of Unity Catalog metric views is not labeled preview; the separate export-as-metric-view subsection is.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "These SQL queries include queries that external tools, such as dbt, run on Databricks."
  - Source: https://docs.databricks.com/aws/en/genie/genie-ontology (checked 2026-10-26)
  - Reasoning: Genie Ontology continuously extracts metric definitions, aggregations, and business logic from queries that external tools such as dbt run on Databricks.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "It prioritizes metric views, then falls back to regular tables."
  - Source: https://docs.databricks.com/aws/en/dashboards/tutorials/genie-code-tutorial (checked 2026-10-26)
  - Reasoning: The built-in assistant looks for and uses governed metric views (shared measures, dimensions and joins) first. Genie Agents also use metric views and knowledge-store SQL expressions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Genie then uses these definitions when a user asks about these business terms."
  - Source: https://docs.databricks.com/aws/en/genie-agents/tune-quality (checked 2026-10-26)
  - Reasoning: The agent knowledge store defines shared KPI measures, dimensions/fields, filters, and joins as SQL expressions that built-in Genie applies to questions. It also supports governed metric views.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Genie resolves business terms through Genie Ontology, your governed semantic layer."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: Genie uses Genie Ontology and Unity Catalog metric views as its governed semantic layer, answering questions using the shared metric definitions and dimensions.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Genie Code creates Unity Catalog metric views, and reuses existing Unity Catalog metric views that already match your data model."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/import-bi (checked 2026-10-26)
  - Reasoning: Genie Code creates metric views with measures and dimensions in the shared Unity Catalog layer. It can also refine an exported metric view definition.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Describe what you want in natural language, and Genie Code updates the metric view definition for you."
  - Source: https://docs.databricks.com/aws/en/uc-semantics/metric-views/create (checked 2026-10-26)
  - Reasoning: The built-in assistant edits the actual shared Unity Catalog metric-view definition, including adding measures and creating fields and joins, beyond writing descriptions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Genie Code creates Unity Catalog metric views, and reuses existing Unity Catalog metric views that already match your data model."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/import-bi (checked 2026-10-26)
  - Reasoning: Genie Code creates, modifies, and reuses Unity Catalog metric views when authoring data models or migrating reports from external BI tools.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Among others, includes skills for Agent Bricks, AI Functions, AI/BI Dashboards, Databricks Apps, Bundles, Databricks CLI, Databricks Lakehouse, Genie, Iceberg, Lakebase, Lakeflow Jobs, metric views, MLflow evaluation, Model Serving, Python SDK, Lakeflow pipelines, serverless migration, Structured Streaming, synthetic data, Unity Catalog, AI Search, and Zerobus ingest"
  - Source: https://docs.databricks.com/aws/en/agent-skills (checked 2026-10-26)
  - Reasoning: Vendor skills cover metric views, and the Genie One MCP grounds outside agents' answers in Genie Ontology. No page shows an outside agent retrieving a field's description and business definition. The SQL MCP explicitly gives no semantic context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The following query returns the full YAML definition for a metric view, including measures, fields, joins, and agent metadata."
  - Source: https://docs.databricks.com/aws/en/uc-semantics/metric-views/query (checked 2026-10-26)
  - Reasoning: The documented SQL metadata interface exposes shared business logic and agent metadata to outside programmatic clients; the page specifically describes View Text and per-column agent metadata.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Agent metadata (also known as semantic metadata) enhances data visualization and improves large language model (LLM) accuracy by providing display names, format specifications, and synonyms that give business context to your metrics."
  - Source: https://docs.databricks.com/aws/en/uc-semantics/agent-metadata (checked 2026-10-26)
  - Reasoning: Outside agents can read shared definitions, display names, business comments, and synonyms from metric view YAML definitions and Catalog Explorer.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Among others, includes skills for Agent Bricks, AI Functions, AI/BI Dashboards, Databricks Apps, Bundles, Databricks CLI, Databricks Lakehouse, Genie, Iceberg, Lakebase, Lakeflow Jobs, metric views, MLflow evaluation, Model Serving, Python SDK, Lakeflow pipelines, serverless migration, Structured Streaming, synthetic data, Unity Catalog, AI Search, and Zerobus ingest"
  - Source: https://docs.databricks.com/aws/en/agent-skills (checked 2026-10-26)
  - Reasoning: A vendor metric-views skill for outside agents is published, and metric views are SQL DDL objects. But no page explicitly documents an outside agent creating or editing metric-view definitions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To edit a metric view with SQL, use `ALTER VIEW` with an updated YAML definition."
  - Source: https://docs.databricks.com/aws/en/uc-semantics/metric-views/manage (checked 2026-10-26)
  - Reasoning: The shared Unity Catalog semantic definition is writable through its documented SQL interface, usable by outside agents through Databricks programmatic SQL access, subject to ownership permissions.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The Databricks SQL MCP server lets agents run AI-generated SQL against your Unity Catalog tables to read and write data, with access governed by Unity Catalog permissions."
  - Source: https://docs.databricks.com/aws/en/agents/mcp-tools/databricks-sql (checked 2026-10-26)
  - Reasoning: Outside coding agents can create and alter Unity Catalog metric views (which use CREATE VIEW ... WITH METRICS LANGUAGE YAML) by executing SQL statements via the Databricks SQL MCP server.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Yes**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can export the context from a Genie Agent as a metric view."
  - Source: https://docs.databricks.com/aws/en/genie-agents/set-up (checked 2026-10-26)
  - Reasoning: Semantics modeled in a Genie Agent, and local dashboard metric views, can be exported to a Unity Catalog metric view that lives in the warehouse.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When a local metric view is ready for broader use, you can export it to Unity Catalog to make it a global metric view, accessible by all downstream tools."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/data-modeling/local-metric-views (checked 2026-10-26)
  - Reasoning: Dashboard-local semantic definitions can be exported into persistent warehouse-level Unity Catalog metric views so the definitions are reusable outside the originating BI dashboard.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When your metrics are ready for broader use, you can promote them to Unity Catalog to make them global metric views, accessible by all downstream tools."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/data-modeling/local-metric-views (checked 2026-10-26)
  - Reasoning: Local metric views defined within dashboards can be promoted directly to Unity Catalog global metric views, pushing the BI modeled logic down to the lakehouse warehouse.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When a local metric view is ready for broader use, you can promote it to Unity Catalog for global use."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/data-modeling (checked 2026-10-26)
  - Reasoning: A metric view defined locally for one dashboard can be exported to a shared Unity Catalog metric view for the team, with no developer rewrite. Genie Agents also turn a response's query into a reusable example with 'Add as instruction'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When your metrics are ready for broader use, you can promote them to Unity Catalog to make them global metric views, accessible by all downstream tools."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/data-modeling/local-metric-views (checked 2026-10-26)
  - Reasoning: A dashboard-local calculation/measure has a direct Export to Metric View path into a maintained shared definition. The release notes also document Genie Code converting SQL datasets to local metric views, without a developer rewriting the calculation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When your metrics are ready for broader use, you can promote them to Unity Catalog to make them global metric views, accessible by all downstream tools."
  - Source: https://docs.databricks.com/aws/en/dashboards/manage/data-modeling/local-metric-views (checked 2026-10-26)
  - Reasoning: Databricks documents a direct export and promotion workflow in dashboards to promote local metric views into maintained, global Unity Catalog metric views for reuse across the team.

