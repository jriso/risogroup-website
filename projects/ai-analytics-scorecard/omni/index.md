# Omni: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/omni/

AI Feature Score **85**, #3 of 15 (BI and analytics tool). Built-in AI 81, external AI 85, other 88. Analysis 72, Building and maintaining assets 99, Context and connections 89, Reliability and controls 80. By model: Claude Opus 5.5 83, GPT-6.1 Sol 85, Gemini 3.8 Flash 85.

## Score breakdown

Four areas, 25 points each. Shown for GPT-6.1 Sol, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 18.1 of 25
- Building and maintaining assets: 24.7 of 25
- Context and connections: 22.3 of 25
- Reliability and controls: 20.1 of 25

**Strengths**

- It hands back when unsure
- Choose where model inference runs
- You can pin the model version

**Not found in the docs**

- One agent can hand a task to another

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Answer natural-language questions** about your data"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent answers plain-language questions and generates queries against the semantic model without SQL or an existing dashboard.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Ask questions, generate queries, and visualize results without needing to work directly in a workbook."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent accepts natural-language data questions and generates working queries without a prebuilt dashboard or user-written SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Omni Agent provides a standalone, conversational interface for exploring your data."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: Users can ask questions in plain English via the Omni Agent, which generates working queries and answers without requiring pre-existing SQL or dashboards.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Iterate on the questions you ask to provide a more refined result**. For example:"
  - Source: https://docs.omni.co/ai/queries (checked 2026-10-26)
  - Reasoning: The Workbook Agent keeps the thread. The documented example follows 'orders in California' with 'How about in just the last 30 days?' and gets a refined answer.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Ask follow-up questions, drill into subsets, re-aggregate results, or request summaries, all without leaving the page."
  - Source: https://docs.omni.co/ai/dashboard-assistant (checked 2026-10-26)
  - Reasoning: Chat with Content supports contextual follow-ups. The Workbook Agent guide also demonstrates following an orders question with a last-30-days refinement.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Iterate on the questions you ask to provide a more refined result."
  - Source: https://docs.omni.co/ai/queries (checked 2026-10-26)
  - Reasoning: The assistant retains conversational context across turns, enabling users to refine answers iteratively by asking follow-up questions.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When the Omni Agent answers a question, it generates a live query you can inspect, refresh, or roll up into a dashboard alongside other charts from the session."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: Each answer comes with the live query that produced it, and the user can inspect it.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When the Omni Agent answers a question, it generates a live query you can inspect, refresh, or roll up into a dashboard alongside other charts from the session."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The answer includes an inspectable live query, exposing the analytical logic used to produce the result.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "All steps, tool use, and results still appear in the chat; the only difference is the narration describing the AI's internal thinking is more concise."
  - Source: https://docs.omni.co/modeling/models/parameters/ai-settings/show-progress-narration (checked 2026-10-26)
  - Reasoning: The assistant exposes all queries, steps, and tool executions in chat so users can inspect how the answer was derived.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Yes** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When the Omni Agent generates a query, you can view details about the fields used in the results."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: A field-details panel attached to the answer lists each field used, with its name, identifier, definition and description. That is named fields cited with the answer.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **Field name** - The field's label and identifier in the model"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The query-results field-details panel lists each selected field by label and model identifier, alongside its definition and description. This is a field list attached to the answer, separate from generated SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When the Omni Agent generates a query, you can view details about the fields used in the results."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: When the Omni Agent generates a query in chat, users can open the query field details panel attached to the result, which lists the specific fields used in the query along with their names, labels, identifiers in the model, SQL definitions, and descriptions.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Omni Agent can then read and reference the contents of the uploaded files when generating responses, allowing you to ask questions that combine your data with external context or documentation."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: CSV is a supported upload type (up to 50 MB) and the Omni Agent reads the file contents. The same page notes that for an oversized CSV only the header is sent.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "For example, a skill can ask you to upload a CSV of target accounts, then compare that list against data in Omni:"
  - Source: https://docs.omni.co/ai/skills (checked 2026-10-26)
  - Reasoning: The built-in agent reads an uploaded CSV and analyzes individual accounts against customer data. The chat guide documents CSV uploads and the limits for reading their data.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When a spreadsheet tab is open and active in the workbook, the Workbook Agent can read and edit cells in the spreadsheet."
  - Source: https://docs.omni.co/ai/queries (checked 2026-10-26)
  - Reasoning: Users can upload CSV or spreadsheet files into workbook tabs and use the Workbook Agent to analyze, query, and edit spreadsheet contents.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Partly** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "**Create new SQL tabs, or update the SQL on a [SQL tab](https://docs.omni.co/analyze-explore/sql.md#sql-tabs)** you're currently viewing. Not available through the API, MCP, or the Slack agent, or to topic-restricted users."
  - Source: https://docs.omni.co/ai/queries (checked 2026-10-26)
  - Reasoning: The Workbook Agent can reshape data by writing SQL tabs and new measure fields, and both are inspectable. No page documents AI data cleaning as a capability, so only part of the row is covered.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Using IFS, create a formula that uses the standard two letter abbreviations for US states."
  - Source: https://docs.omni.co/analyze-explore/calculations (checked 2026-10-26)
  - Reasoning: This is an explicitly AI-generated example that standardizes full state names into abbreviations and prints the generated IFS formula and results. The transformation logic remains inspectable in the workbook.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- **Create new SQL tabs, or update the SQL on a [SQL tab](https://docs.omni.co/analyze-explore/sql.md#sql-tabs)** you're currently viewing. Not available through the API, MCP, or the Slack agent, or to topic-restricted users."
  - Source: https://docs.omni.co/ai/queries (checked 2026-10-26)
  - Reasoning: The Workbook Agent can reshape data by creating new SQL tabs or updating SQL on an existing SQL tab, as well as creating new measure fields, leaving behind inspectable transformation code in the workbook. However, data cleaning is not documented as an AI capability, covering only the reshaping half of the row, so this is partly.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Yes** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For example, a skill can ask you to upload a CSV of target accounts, then compare that list against data in Omni:"
  - Source: https://docs.omni.co/ai/skills (checked 2026-10-26)
  - Reasoning: The Omni Agent combines an uploaded CSV with warehouse data from the Omni model in one analysis. The chat page also says uploads let users 'combine your data with external context'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "For example, a skill can ask you to upload a CSV of target accounts, then compare that list against data in Omni:"
  - Source: https://docs.omni.co/ai/skills (checked 2026-10-26)
  - Reasoning: The documented built-in skill workflow combines uploaded account rows with the existing customer database, returning match status and customer metrics. This is a file plus database analysis, rather than two tables within one database.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Omni Agent can then read and reference the contents of the uploaded files when generating responses, allowing you to ask questions that combine your data with external context or documentation."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The Omni Agent allows users to upload files (such as CSVs) in chat and references their contents alongside queries against the modeled database, combining the uploaded data source with the warehouse data source in a single analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Omni Agent can automatically suggest and configure visualizations based on your query results, including charts, KPIs, and tables."
  - Source: https://docs.omni.co/ai/visualizations (checked 2026-10-26)
  - Reasoning: The agent itself suggests and creates the visualization type from the results, beyond restyling a chart the user picked.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Omni Agent can automatically suggest and configure visualizations based on your query results, including charts, KPIs, and tables."
  - Source: https://docs.omni.co/ai/visualizations (checked 2026-10-26)
  - Reasoning: The agent selects and configures visualizations from the query results, rather than only restyling a user-selected chart.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Omni Agent can automatically suggest and configure visualizations based on your query results, including charts, KPIs, and tables."
  - Source: https://docs.omni.co/ai/visualizations (checked 2026-10-26)
  - Reasoning: The Omni Agent automatically selects, suggests, and configures appropriate visualizations (charts, KPIs, tables) based on query results.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "**Pipeline and revenue narratives** — "Write a short update on how we're tracking against this month's revenue target and which segments are driving the change""
  - Source: https://docs.omni.co/ai/routines (checked 2026-10-26)
  - Reasoning: The agent can describe anomalies and name segments driving a change. No documented feature breaks a change into per-segment contributions with a calculation a person can check, and no key-driver function is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Shipped/GA feature — a new Explain button lets users draw a shape on the canvas and send an annotated screenshot directly to Blobby, which uses a root cause analysis skill to respond."
  - Source: https://docs.omni.co/demos/2026/20260626 (checked 2026-10-26)
  - Reasoning: The documentation explicitly identifies a shipped built-in root-cause response, but does not show numerical segment contributions or a contribution calculation a person can verify.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The Omni Agent can call out anomalies, direction of trends, and notable comparisons — the kind of commentary that would otherwise require a data analyst"
  - Source: https://docs.omni.co/guides/dashboards/dashboarding-best-practices (checked 2026-10-26)
  - Reasoning: Omni Agent highlights anomalies, trends, and comparisons, but does not provide checkable mathematical breakdowns showing each segment's exact percentage contribution to the change.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Partly** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The Omni Agent will generate a new query if needed, analyze the query results, and generate a statistical forecast based on historical patterns in the data."
  - Source: https://docs.omni.co/ai/forecasting (checked 2026-10-26)
  - Reasoning: The agent produces the forecast for a requested horizon. No page says the forecast exposes its model, inputs or assumptions so a person can challenge it.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The Omni Agent will generate a new query if needed, analyze the query results, and generate a statistical forecast based on historical patterns in the data."
  - Source: https://docs.omni.co/ai/forecasting (checked 2026-10-26)
  - Reasoning: The built-in agent generates forecasts from query results for a requested horizon. The page describes historical inputs and statistical processing, but does not establish that the answer exposes its chosen model and assumptions for challenge.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The Omni Agent can generate statistical forecasts for time-series data using natural language prompts."
  - Source: https://docs.omni.co/ai/forecasting (checked 2026-10-26)
  - Reasoning: Omni Agent generates statistical time-series projections, but the documentation does not describe exposing the mathematical assumptions or confidence intervals behind the forecast.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: No** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Omni page documents the Omni Agent (or any built-in agent) defining multiple what-if scenarios with stated changed assumptions and calculating them side by side. The only scenario/what-if hits are demo pages (explicitly 'not a guarantee of release') describing customer-built scenario-planner apps or spreadsheet cell simulation without AI, a permissions-scenarios page, and a level-of-detail guide whose 'scenarios' are modeling examples. None is first-party AI scenario analysis.
- **GPT-6.1 Sol**: no
  - Quote: "Demo of an Anaplan-style scenario planning app built in Omni using Blobby."
  - Source: https://docs.omni.co/demos/2026/20260807 (checked 2026-10-26)
  - Reasoning: The located scenario planner is a bespoke app built with the general-purpose app generator; it is not a documented first-party assistant scenario-comparison feature. The demo page also warns that demos are not a guarantee of release.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Omni documentation discusses manual what-if analysis where dashboard viewers edit cells in an unlocked spreadsheet tab, and an unreleased scenario planning app demo, but documents no built-in AI capability to calculate and compare what-if scenarios with explicitly stated changed assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page shows an Omni Agent answer exposing the age or last-refresh time of the data it used. The Omni Agent page only says results in a revisited chat 'may be stale' and offers a re-run button. That is documentation guidance, not a freshness indicator shown with the answer. The freshness timestamps in cache_metadata are on the general Wait for query results API (api/queries/wait-for-query-results), which is about running any query, not the AI answer. The dbt data-health tile and dbt sync status show source or metadata freshness on dashboards or settings pages, not with AI answers.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Query APIs return cache metadata containing freshness timestamps, and dashboard inspection exposes cache status. Neither documents the built-in AI showing data age or last-refresh time with its answer, or a freshness indicator on the dataset used by that answer. The Omni Agent page explains manually refreshing potentially stale chat results but does not document a visible timestamp or staleness indicator. General caching and dbt health tiles do not settle this AI-answer requirement.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Cache metadata for the result, including row count, byte size, freshness timestamps, requery plan key."
  - Source: https://docs.omni.co/api/queries/run-query (checked 2026-10-26)
  - Reasoning: Omni returns freshness timestamps in query cache metadata and provides cache status in query results, but does not provide an explicit freshness badge directly on AI conversational responses.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Executes the underlying query and displays the actual chart or table visualization inline in the chat"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The Omni Agent opens dashboard tiles and works from their underlying queries. Chat with Content can also focus on a specific chart.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Executes the underlying query and displays the actual chart or table visualization inline in the chat"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: When the built-in agent searches existing dashboards, it evaluates individual tiles and works from the underlying saved query to display a live preview. This reaches the query feeding a specific BI chart, beyond an isolated SQL editor.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Omni Agent will focus on the selected chart until you remove the focus or close the chat panel."
  - Source: https://docs.omni.co/ai/dashboard-assistant (checked 2026-10-26)
  - Reasoning: With Chat with Content, the Omni Agent can focus on an individual chart or table in a dashboard, reading its underlying query and data to answer questions.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "After the dashboard is created, you can ask the agent to iterate on it in the same session — rearranging tiles, editing charts, or adding new ones."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The built-in agent edits the charts in a published dashboard. It can also edit existing dashboards through drafts.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can add the calculation manually or by using the Workbook Agent."
  - Source: https://docs.omni.co/guides/dashboards/calculated-field-filter (checked 2026-10-26)
  - Reasoning: This official tutorial adds a RANK calculation to the query powering an existing dashboard chart using the built-in Workbook Agent, then publishes it. The analytical object is a dashboard chart, not merely an unrelated editor cell.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Workbook Agent can help you create and refine workbook queries using natural language."
  - Source: https://docs.omni.co/ai/queries (checked 2026-10-26)
  - Reasoning: The Workbook Agent writes and refines queries, calculations, and filters for individual charts and tables in workbooks using natural language.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Lists the saved queries in a document, such as a workbook or app."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: The listDocumentQueries MCP tool and the List document queries API return each tile's query (fields, filters, topic) on its own.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Lists the saved queries in a document, such as a workbook or app."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: The first-party listDocumentQueries MCP tool retrieves the saved query definitions associated with a known BI document, with fields and filters. The REST guide maps each returned query to its specific dashboard tile, so whole-workbook file parsing is unnecessary.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Lists the saved queries in a document, such as a workbook or app."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: Outside agents can inspect individual tile queries and calculate expressions via the MCP listDocumentQueries tool and REST API.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Existing key, changed content** → the tile is updated (the server regenerates its internal identifier)."
  - Source: https://docs.omni.co/api/documents-v2/create-draft-and-patch-document (checked 2026-10-26)
  - Reasoning: The Documents v2 API patches an individual tile's query presentation by key inside a draft, so the whole document does not have to be replaced.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **Existing key, changed content** → the tile is updated (the server regenerates its internal identifier)."
  - Source: https://docs.omni.co/api/documents-v2/create-draft-and-patch-document (checked 2026-10-26)
  - Reasoning: An outside agent can PATCH an individual dashboard tile by record key, supplying its query fields, filters, calculations or SQL in queryPresentations.data, then publish. Omitted tile keys remain untouched, so this is not wholesale workbook replacement.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The semantic query for this tab (fields, filters, sorts, limits, etc.), minus the server-owned workbook model anchors."
  - Source: https://docs.omni.co/api/documents-v2/patch-draft (checked 2026-10-26)
  - Reasoning: Outside agents can update the semantic query, fields, filters, and calculations of an individual chart or tab using PATCH /v2/documents/{documentId}/draft/{draftId}.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Chat with Content allows you to interact with your content using natural language."
  - Source: https://docs.omni.co/ai/dashboard-assistant (checked 2026-10-26)
  - Reasoning: The assistant opens on published dashboards and works from the charts shown, including follow-ups and summaries.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Chat with Content allows you to interact with your content using natural language."
  - Source: https://docs.omni.co/ai/dashboard-assistant (checked 2026-10-26)
  - Reasoning: The built-in assistant opens alongside published content, can focus a selected chart, and works with its results through follow-ups, drilling and re-aggregation. The standalone agent can also find existing dashboards and execute their tiles.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Search existing dashboards for tiles and visualizations that already answer your question before generating a new query"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The Omni Agent inspects existing dashboards and searches existing tiles and visualizations before generating new queries.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Ask the agent directly to build a dashboard** — describe the dashboard you want in the chat and the agent plans the layout, generates queries, and publishes a complete dashboard:"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The agent publishes a persistent dashboard on governed model queries. It saves to My documents or the Hub with the user as owner, under content permissions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **Ask the agent directly to build a dashboard** — describe the dashboard you want in the chat and the agent plans the layout, generates queries, and publishes a complete dashboard:"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The built-in agent saves and publishes a persistent Omni dashboard backed by live model queries. Document governance requires owners and sharing permissions, and the save respects destination permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create dashboards based on the queries and visualizations in the session"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The Omni Agent can create persistent dashboards directly from the queries and visualizations generated during an AI chat session.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Each query's response also includes the field names it selects (`fields`) and already filters on (`filterFields`), so you can copy the exact field names a `runSavedQuery` filter override needs to target."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: An outside agent reads the queries and filters of existing dashboards and workbooks through MCP content tools.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Retrieve the document's published state."
  - Source: https://docs.omni.co/api/documents-v2/get-document-state (checked 2026-10-26)
  - Reasoning: The REST response exposes published BI content with its query presentations, filters/controls, settings and layout. An outside agent can call this directly or use the documented CLI; this is reading content, not only listing its name.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Lists the saved queries in a document, such as a workbook or app."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: Outside agents can read dashboards and their underlying queries using the listDocumentQueries tool on the Omni MCP server.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Build and update dashboards programmatically"
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Vendor skills (omni-content-builder) and the Documents v2 create/draft/publish API let an outside agent create dashboards.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* Build and update dashboards programmatically"
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: The vendor's official outside-agent skills create persistent Omni dashboards through the CLI and document v2 APIs, including tiles, filters, layouts and draft/publish workflow.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Build and update dashboards programmatically"
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Outside coding agents use Omni agent skills and the Documents API to programmatically build, update, and manage dashboards.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Every app inherits the access rules already in place — connection permissions, the semantic model and data permissions, and content sharing all carry over."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The Omni Agent builds apps and dashboards that are shared like other content. App data and API calls are evaluated under the viewer's permissions, and access warnings show tiles restricted for lower roles.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Every app inherits the access rules already in place — connection permissions, the semantic model and data permissions, and content sharing all carry over."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent creates saved apps from live model queries. Apps inherit semantic data access and content sharing; the page states viewer-identity enforcement, and the sharing guide supports named users/groups. This credit is for AI-created apps, not cached shared chat results.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Every AI query respects row-level security and user-level access controls."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: AI-generated content and dashboards are shared under standard document permissions and respect row-level security policies for each viewer.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Content search provides powerful filtering capabilities to help you quickly find specific content in your Omni instance."
  - Source: https://docs.omni.co/content/search (checked 2026-10-26)
  - Reasoning: Users search the whole instance for permitted dashboards and workbooks, including AI-created ones saved as content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When you search, only content that you have access to will be returned with a maximum of 25 items."
  - Source: https://docs.omni.co/content/search (checked 2026-10-26)
  - Reasoning: Workspace content search finds colleagues' saved dashboards and workbooks with creator, hub and folder facets, subject to access permissions. Agent-created dashboards/apps are saved as ordinary governed documents rather than a separate hidden artifact class.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Free-text search over the organization's dashboards and apps."
  - Source: https://docs.omni.co/api/content/search-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Omni provides organization-wide content search over dashboards and apps, enabling users to discover existing analytics assets across the organization.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Yes** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The person who writes a skill decides which data to use, which numbers matter, and how to present the result."
  - Source: https://docs.omni.co/ai/skills (checked 2026-10-26)
  - Reasoning: A skill is saved once with its own instructions and data scope (topic). It is shared with users or groups through Viewer/Editor/Manager/Owner access roles, and colleagues run it by /identifier.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "A skill is a set of instructions you save once and reuse with the [Omni Agent](https://docs.omni.co/ai/chat.md)."
  - Source: https://docs.omni.co/ai/skills (checked 2026-10-26)
  - Reasoning: Skills save reusable instructions and data-selection guidance, can be shared with colleagues using access roles, and model-defined skills support visibility grants. They are reusable processes run by the common Omni Agent under the runner's permissions, rather than separately saved assistants with independent execution permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A skill is a set of instructions you save once and reuse with the Omni Agent."
  - Source: https://docs.omni.co/ai/skills (checked 2026-10-26)
  - Reasoning: Omni Skills allow users to define and save prompt instructions, scope, and parameters to be reused and shared across the team.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Yes** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "A routine can run on a fixed schedule, or only when a condition you define is met."
  - Source: https://docs.omni.co/ai/routines (checked 2026-10-26)
  - Reasoning: Routines run a prompt through the Omni Agent on a schedule or condition each time and deliver a fresh written result by email or Slack with no person present.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Set up a routine once, and Omni runs your prompt through the [Omni Agent](https://docs.omni.co/ai/chat.md) and delivers the result to the people you choose."
  - Source: https://docs.omni.co/ai/routines (checked 2026-10-26)
  - Reasoning: Routines rerun the built-in agent prompt on a schedule or scheduled condition check and deliver newly generated text by email or Slack.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Routines let you schedule AI-powered tasks to run automatically on a recurring basis."
  - Source: https://docs.omni.co/ai/routines (checked 2026-10-26)
  - Reasoning: AI Routines can be scheduled to run automatically on recurring schedules without requiring a user to be present, analyzing data and delivering results to destinations like Slack.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Yes** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Exception alerts** — "When daily active users drop below 1000, notify the product team with a summary of the drop" — a conditional routine that only delivers when the condition is met, instead of every day"
  - Source: https://docs.omni.co/ai/routines (checked 2026-10-26)
  - Reasoning: An agent-run routine sends a notification to people or a Slack channel by itself. That side effect sits outside Omni's own dashboards.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The result is delivered as text to the destination you choose — by email, or to a [Slack](https://docs.omni.co/share/deliveries/slack.md) channel or users."
  - Source: https://docs.omni.co/ai/routines (checked 2026-10-26)
  - Reasoning: The built-in routine executes the Omni Agent and sends its fresh analytical result outside Omni by email or Slack without a person present.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Routines let you schedule AI-powered tasks to run automatically on a recurring basis."
  - Source: https://docs.omni.co/ai/routines (checked 2026-10-26)
  - Reasoning: Omni AI Routines allow scheduling AI tasks that run automatically on data on a recurring schedule and deliver findings to destinations like Slack or email without user intervention.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Yes** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If none of these destinations is available, the agent reports that it can't save the dashboard and names who can grant you access."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: When the agent cannot finish, it stops and refers the user to a person in the conversation. It also asks follow-up questions when a request is ambiguous. No hand-off mechanism such as a notification, review queue or pending task is documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If none of these destinations is available, the agent reports that it can't save the dashboard and names who can grant you access."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: When permissions prevent completing a dashboard save, the built-in agent stops the save, notifies the person, and identifies who must grant access. This is a documented failure hand-back, rather than routine clarification.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Writes changes, then pauses for your approval before continuing."
  - Source: https://docs.omni.co/ai/model-assistant (checked 2026-10-26)
  - Reasoning: Omni's Modeling Agent features a Review execution mode that explicitly pauses and asks for human approval before proceeding with proposed changes.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: No** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents a customer configuring one Omni agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. The sub-agent material is either hidden implementation (the 'modeling subagent' and model-building agent in the changelog and build-configuration pages) or demo prototypes ('Sub-Agent Prototype', 'Sub-Agent Orchestration'), and demo pages state they are not a guarantee of release. Skills are saved instructions for the same agent, not separate agents. Databricks Genie appears only as a BYOK LLM serving-endpoint provider, not as a delegated agent. The @omni-analyst/@omni-modeler agents in the agent-skills package run inside an outside coding agent, so they are not product-run agents under this row.
- **GPT-6.1 Sol**: no
  - Quote: "Proof-of-concept showing the main agent invoking a sub-agent via tool call to offload complex work (e.g. dashboard creation), keeping the main context clean and enabling iterative replanning when queries fail mid-flow."
  - Source: https://docs.omni.co/demos/2026/20260605 (checked 2026-10-26)
  - Reasoning: Omni explicitly describes built-in sub-agent orchestration as a proof of concept; the later October 9 page still calls it a Sub-Agent Prototype and early exploration. This experimental capability earns no under the exclusion of roadmap capabilities. Neither page establishes customer configuration of named analytical delegates with explicit tools and permissions. The separately documented named omni-analyst and omni-modeler agents are a plugin for outside coding agents, which are excluded from this built-in-agent row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Omni documents internal subagents (such as the modeling subagent used by the system) and an unreleased experimental 'Sub-Agent Prototype' demo (October 9, 2026), but does not document any shipped or public preview capability for customers to configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Yes** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Omni Agent can use AI integrations to access context from tools like Google Drive, Google Calendar, Slack, GitHub, and Notion."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: Admins enable outside tool integrations, plus custom connections, for the built-in Omni Agent, and users toggle them per session. That attaches outside capabilities to Omni's own AI. Not supported in embedded instances.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "AI integrations extend the Omni Agent with context from the tools your team already uses, allowing it to reference files, messages, calendar events, and code alongside your Omni data."
  - Source: https://docs.omni.co/integrations/ai (checked 2026-10-26)
  - Reasoning: Organization Admins configure first-party external integrations such as Google Drive, GitHub, Notion and Slack, whose tools the built-in agent can use. This is outbound capability attached to Omni's AI.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "AI integrations extend the Omni Agent with context from the tools your team already uses, allowing it to reference files, messages, calendar events, and code alongside your Omni data."
  - Source: https://docs.omni.co/integrations/ai (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent connects to external tools including Google Drive, Google Calendar, GitHub, Notion, and Slack to incorporate external context into analyses.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The agent can also automatically detect and fix runtime errors in the app while you're working on a draft."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: Omni apps are persistent, governed BI content, and the built-in Omni Agent is documented detecting and fixing errors in the app the user is editing. That is the AI repairing one asset the user is already working on, which the row scores as partly. Finding downstream content affected by a data or definition change is done by the Content Validator, which a person runs. The only page showing the agent using the Content Validator is a demo ('Blobby Learns to Content Validate', demos/2026/20261002), and that page says demos are not a guarantee of release. The changelog lists no shipped AI content-validator feature. The Apps page carries no beta or preview label, so the feature counts as generally available.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The agent can also automatically detect and fix runtime errors in the app while you're working on a draft."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent detects and repairs errors in the particular app being edited. Omni apps are persistent, governed BI content, so this supports the limited case of fixing an asset the user is already working on. It does not establish the AI finding downstream BI assets affected by a warehouse or shared-definition change and repairing them or flagging their owners. The general Content Validator documents impact discovery and bulk repair for people; its AI integration appears in a demo that does not guarantee release.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The agent can also automatically detect and fix runtime errors in the app while you're working on a draft."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: Omni apps are persistent, governed BI content backed by live queries. The built-in Omni Agent can automatically detect and fix runtime errors in an app while the user is working on a draft. This covers the AI repairing one asset that the user is currently editing, which the row scores as partly. Omni does not document the AI automatically identifying and repairing all downstream BI content across the workspace affected by a data or definition change.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Yes** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When you ask the agent to change an app, it will make targeted edits by locating the exact snippet in the code and only modifying the relevant portions."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The built-in agent reads the app's code and also sees rendered elements through the App inspector.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When you ask the agent to change an app, it will make targeted edits by locating the exact snippet in the code and only modifying the relevant portions."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The built-in agent reads existing app code to locate specific snippets and edit them. App inspection also sends selected rendered elements to the agent, so the existing app is available as context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When it's done, the app opens in the editor, where you can keep iterating in chat or by hand."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent can open and inspect generated application code, layout, and queries, allowing users to iterate on them through conversational chat.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Yes** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent generates each query the app needs against your model, writes the HTML, and wires it to the data."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The Omni Agent creates a persistent, shareable app document paired with a workbook of live governed queries.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **In a chat** — Describe the interface and the data it should show in the Omni Agent. The agent generates each query the app needs against your model, writes the HTML, and wires it to the data. When it's done, the app opens in the editor, where you can keep iterating in chat or by hand."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent creates a persistent app paired with a saved workbook and live governed queries. Apps inherit document ownership, content permissions and semantic data access; they are first-class shared content rather than disposable HTML.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent generates each query the app needs against your model, writes the HTML, and wires it to the data."
  - Source: https://docs.omni.co/visualize-present/apps (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent writes custom, persistent web applications by generating the queries against the model and authoring the HTML and JavaScript.

### A_OR: Can an outside coding agent read a generated app?

**Result: Yes** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Reads a published app document's complete HTML source and sandbox settings, given a document identifier."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: The getApp and getAppDraft MCP tools return the app definition to an outside agent.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Reads a published app document's complete HTML source and sandbox settings, given a document identifier."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve an existing generated app's definition directly with the vendor-supported getApp MCP tool, including HTML and sandbox settings.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Read the published app content, including its HTML and settings."
  - Source: https://docs.omni.co/api/apps/read-app-content (checked 2026-10-26)
  - Reasoning: Outside coding agents can read published app definitions, HTML, and settings via the GET /v2/documents/{documentId}/app REST endpoint or MCP showApp tool.

### A_OW: Can an outside coding agent build a generated app?

**Result: Yes** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Replaces the app's HTML on the document's shared main draft."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: An outside agent writes app code with putApp/patchApp and publishes it with publishDraft. Claude dashboards can also be imported as apps.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Fetches the dashboard file Claude sends and starts a job that rebuilds it as an Omni app over the connected model."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: The documented first-party import route lets an outside agent send its authored dashboard through MCP; Omni converts the sources to governed queries, builds and publishes a persistent app. MCP app tools also edit and publish app HTML from outside the product.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create or reuse an existing document's main draft and apply targeted edits to the app's HTML without resending the whole document."
  - Source: https://docs.omni.co/api/apps/createreuse-draft-and-edit-app-content (checked 2026-10-26)
  - Reasoning: Outside coding agents can author or edit app HTML and layouts programmatically via the PATCH /v2/documents/{documentId}/draft/app endpoint or MCP patchApp/putApp tools.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Yes** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You define a **prompt set** (a reusable collection of questions scoped to a single Omni model), then execute an **eval run** that scores each AI response with a built-in accuracy judge."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: Saved prompt sets with optional expected behavior are scored by a model judge in repeatable runs that can be compared.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You define a **prompt set** (a reusable collection of questions scoped to a single Omni model), then execute an **eval run** that scores each AI response with a built-in accuracy judge."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: Saved prompt sets and repeatable judged runs evaluate the built-in Omni AI, with optional expected behavior and branch comparisons.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Evals measure how accurately Omni's AI answers natural-language questions about your data."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: AI Hub Evals allow users to curate prompt sets and run evaluations scored by a built-in accuracy judge against defined expected behaviors.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Disable the setting to approve and replace each model manually."
  - Source: https://docs.omni.co/ai/settings/llm-settings (checked 2026-10-26)
  - Reasoning: Admins approve specific named LLMs and set the default (the eval example names claude-sonnet-5). With 'Omni manages LLM upgrades' turned off, the model stays until an admin replaces it.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "In the **Custom models** field, enter your model identifiers as a comma-separated list (e.g., `llama3.1:70b`, `gpt-4-turbo-2024-04-09`, or your Azure deployment name)."
  - Source: https://docs.omni.co/ai/settings/model-providers/openai (checked 2026-10-26)
  - Reasoning: Admins can enter a dated model identifier and select it as the organization default. LLM settings permit disabling automatic upgrades, and chat selections persist until changed, so a specific version can be retained.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "In the Custom models field, enter your model identifiers as a comma-separated list (e.g., llama3.1:70b, gpt-4-turbo-2024-04-09, or your Azure deployment name)."
  - Source: https://docs.omni.co/ai/settings/model-providers/openai (checked 2026-10-26)
  - Reasoning: Admins can pin exact model versions and deployment names (e.g. gpt-4-turbo-2024-04-09) and select organization-wide default models.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Each run records the LLM and thinking level it ran on."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: Chat sessions keep the generated queries and cached results, and eval runs record the LLM and thinking level. No page says a data snapshot and full configuration are preserved to reproduce any answer.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "* Every tool call the AI made and its result — including the generated queries, the query results, and any data the AI sampled or retrieved"
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: Eval runs retain the underlying conversation, record the LLM and thinking level, and expose the generated query, results, and judge rationale. This supports auditing, but does not establish preservation of the complete data snapshot and every configuration needed to reproduce a production answer.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Each conversation with the Omni Agent is saved as a chat session you can revisit and share with other users in your organization."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: Omni saves chat sessions including generated queries and visualizations so they can be revisited, but does not freeze or snapshot underlying warehouse data for deterministic reproducibility.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Yes** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Changes are written to the model as YAML, making them available to all users querying through that model."
  - Source: https://docs.omni.co/ai/learn-from-conversation (checked 2026-10-26)
  - Reasoning: Learn from conversation turns a user's correction into model updates that change later answers. The reach is stated: all users querying through that model.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Changes are written to the model as YAML, making them available to all users querying through that model."
  - Source: https://docs.omni.co/ai/learn-from-conversation (checked 2026-10-26)
  - Reasoning: The learn-from-conversation flow turns user corrections into reviewed model context or field definitions that affect future queries. The documented reach is all users querying that model.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Changes are written to the model as YAML, making them available to all users querying through that model."
  - Source: https://docs.omni.co/ai/learn-from-conversation (checked 2026-10-26)
  - Reasoning: Learn from Conversation captures conversational corrections and writes them back into the shared model YAML, making the corrected logic available to all users across the organization.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Partly** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This helps you discover existing content before creating new queries, promoting reuse of trusted dashboards and reducing duplicate analysis work."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The agent searches existing dashboards first and builds on governed semantic-model definitions. No rule binds answers to certified content or flags a mismatch.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This means AI-generated queries use the same governed definitions as the rest of Omni, so results are consistent and trustworthy."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: Omni AI uses shared governed semantic definitions. No rule binds it to certified BI assets or prevents/flags a departure from a certified answer, so semantic-layer use earns partial scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "This means AI-generated queries use the same governed definitions as the rest of Omni, so results are consistent and trustworthy."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: The built-in assistant queries against governed shared model definitions and verified topics, but the documentation does not describe an automated mechanism that flags discrepancies against certified dashboards.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Yes** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Disables AI features when the specified credit threshold is reached."
  - Source: https://docs.omni.co/ai/settings/usage (checked 2026-10-26)
  - Reasoning: A hard cap blocks further AI requests once the credit threshold is reached. Per-user limits also exist. The page says it does not apply to custom model providers.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Requests that are processing when the cap is met will complete, but subsequent requests will be blocked."
  - Source: https://docs.omni.co/ai/settings/usage (checked 2026-10-26)
  - Reasoning: The organization hard credit cap disables built-in AI and blocks subsequent requests, with documented allowance for already processing work. This is enforcement, not merely reporting.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Disables AI features when the specified credit threshold is reached."
  - Source: https://docs.omni.co/ai/settings/usage (checked 2026-10-26)
  - Reasoning: Omni allows administrators to set a hard cap on AI credit usage, which disables AI features when the threshold is reached to prevent overages.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Yes** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Aggregate metrics for the run include total credits, total duration, and overall accuracy, so you can summarize a run at a glance."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: Eval runs on the customer's own prompts report duration per prompt and per run. Runs can target a specific LLM and be compared side by side for latency differences.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Aggregate metrics for the run include total credits, total duration, and overall accuracy, so you can summarize a run at a glance."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: Customers can run their own prompt sets on selected LLMs and branches and compare per-prompt latency and total duration across eval runs.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Run-to-run latency differences"
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: AI Hub Evals track duration for each prompt and explicitly report run-to-run latency differences when comparing models or model revisions.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Yes** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The dashboard displays credit consumption over time and can break down usage in various ways, such as by feature and user."
  - Source: https://docs.omni.co/ai/settings/usage (checked 2026-10-26)
  - Reasoning: The Credit Tracking dashboard and per-user credit usage views and API attribute AI consumption to individual users, and to embed entities.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The dashboard displays credit consumption over time and can break down usage in various ways, such as by feature and user."
  - Source: https://docs.omni.co/ai/settings/usage (checked 2026-10-26)
  - Reasoning: The Credit Tracking dashboard attributes built-in AI consumption to individual users and features; the AI Hub also exposes user usage against limits.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "How AI credits are being consumed across your organization, broken down by feature and user."
  - Source: https://docs.omni.co/administration/ai-hub (checked 2026-10-26)
  - Reasoning: The Credit Tracking dashboard in AI Hub tracks AI credit consumption across the organization, broken down by individual feature and user.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Yes** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Logs of AI interactions, including prompts, responses, and linked sessions"
  - Source: https://docs.omni.co/administration/analytics (checked 2026-10-26)
  - Reasoning: The Analytics AI dashboard logs assistant prompts, responses and sessions, and the AI Hub Usage dashboard breaks activity down by user. Neither documents recording the analytical objects the assistant touched. The audit log event types do not distinguish AI activity.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Retrieve the full result of a completed AI job, including all actions taken by the AI (queries generated, data retrieved) and the final summarized answer."
  - Source: https://docs.omni.co/api/ai/stream-ai-job-results (checked 2026-10-26)
  - Reasoning: Assistant-specific job results retain action records and the executed semantic query for 14 days. The associated job records the prompt, userId, modelId, branch and topic, linking what the built-in assistant did and the analytical objects it used to the asking user.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Each of these steps is logged individually in the tracking data, which is why a single user prompt can appear as several rows."
  - Source: https://docs.omni.co/ai/settings/usage (checked 2026-10-26)
  - Reasoning: Omni logs AI activity in tracking data, including user prompts, intermediate tool calls, credit usage, and models accessed.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Added granular model role permissions for AI access. Administrators can now control AI feature access and workbook access at the model role level, providing more fine-grained permission management."
  - Source: https://docs.omni.co/changelog/2025 (checked 2026-10-26)
  - Reasoning: Admins can switch off the 'Use Omni Agent' and 'Use routines' granular permissions in custom roles assigned to particular users and groups, as listed in the custom roles reference.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If your organization uses [custom roles](https://docs.omni.co/administration/users/custom-roles.md), you'll need the **Use Omni Agent**, **Use workbooks**, and **Create apps** permissions."
  - Source: https://docs.omni.co/visualize-present/apps/claude-dashboards (checked 2026-10-26)
  - Reasoning: Custom roles have a granular Use Omni Agent permission that can be disabled, and admins can assign those roles to individual users or user groups. This enables selective AI rollout beyond the organization-wide feature toggle.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Enable and disable individual AI features in your Omni organization."
  - Source: https://docs.omni.co/ai/settings/features (checked 2026-10-26)
  - Reasoning: Admins can toggle individual AI features on or off organization-wide in AI Hub > Features, but there is no granular rollout targeting specific user groups or roles.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When the AI is about to take certain actions — like writing to your model or deleting a routine — it pauses and asks you to confirm first."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: Assistant writes to the model or a published draft pause for confirmation by the requester only. Separately, the Git 'Pull request required' setting forces all model changes through a PR, but that workflow is not documented for AI changes. No other person or role approves.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When the AI is about to take certain actions — like writing to your model or deleting a routine — it pauses and asks you to confirm first."
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: Model edits can pause for the requester's confirmation. The docs do not name a different human approver for that AI write; the general branch/PR workflow is also only partial under the approval rule.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Writes changes, then pauses for your approval before continuing."
  - Source: https://docs.omni.co/ai/model-assistant (checked 2026-10-26)
  - Reasoning: Review mode pauses for approval before continuing, and changes land in drafts that the requester reviews and publishes. However, this is requester confirmation rather than approval by a separate named person or role.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Yes**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Snowflake Cortex provides access to industry-leading large language models (LLMs) hosted directly within your Snowflake infrastructure."
  - Source: https://docs.omni.co/ai/settings/model-providers/snowflake-cortex (checked 2026-10-26)
  - Reasoning: With the BYOK Snowflake Cortex provider set as the default, and its simple-task model handling light tasks, inference runs inside the customer's Snowflake account. BYOK requires the Enterprise plan.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Snowflake Cortex provides access to industry-leading large language models (LLMs) hosted directly within your Snowflake infrastructure."
  - Source: https://docs.omni.co/ai/settings/model-providers/snowflake-cortex (checked 2026-10-26)
  - Reasoning: Customers can configure Cortex to power Omni AI in their Snowflake infrastructure and choose its region/cross-region policy. The documented OpenAI-compatible route also supports customer-hosted Ollama endpoints.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Snowflake Cortex provides access to industry-leading large language models (LLMs) hosted directly within your Snowflake infrastructure."
  - Source: https://docs.omni.co/ai/settings/model-providers/snowflake-cortex (checked 2026-10-26)
  - Reasoning: Omni supports Bring Your Own Key (BYOK) connecting to customer-hosted LLMs in Snowflake Cortex as well as self-hosted endpoints via Ollama or custom providers.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Permissions** — Every AI query respects row-level security and user-level access controls. Users only see data they're authorized to access."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: The built-in AI generates abstract Omni queries that run with the asking user's permissions, so row-level security and field-level access controls apply. The security page and Modeling Agent page say the same.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **Permissions** — Every AI query respects row-level security and user-level access controls. Users only see data they're authorized to access."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: The built-in AI respects the asking user's data access. The security guide describes generated queries honoring Omni permissions, and the Modeling Agent is grounded in field-level controls. Omni's model permissions cover both rows and fields.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Every AI query respects row-level security and user-level access controls."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: Omni enforces user permissions, access filters, and row-level security policies on every query generated by the AI.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "By default, Omni's AI features use LLMs hosted on Amazon Bedrock for AWS deployments, or Microsoft Foundry for Azure deployments."
  - Source: https://docs.omni.co/ai/security (checked 2026-10-26)
  - Reasoning: The page names the receiving services (Bedrock/Foundry, AWS web search) and what each receives (prompt, metadata, ai_context, CSV of results). It does not state how long the LLM provider keeps that data.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Only metadata about the current query, user prompt, and selected topic fields is sent to the LLM, thus maintaining the privacy and security of your data."
  - Source: https://docs.omni.co/ai/security (checked 2026-10-26)
  - Reasoning: The page names Amazon Bedrock, Microsoft Foundry and optional custom providers, details prompt/metadata sharing, and says summarization also sends a CSV of results. It does not establish a retention duration for all prompts and provider-received data.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "By default, Omni's AI features use LLMs hosted on Amazon Bedrock for AWS deployments, or Microsoft Foundry for Azure deployments."
  - Source: https://docs.omni.co/ai/security (checked 2026-10-26)
  - Reasoning: Omni documents the LLM providers used and the types of data sent (user prompts, schema metadata, query results), but does not state provider data retention durations.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The inference provider and region depend on where your Omni application is hosted."
  - Source: https://docs.omni.co/administration/security/cloud-regions (checked 2026-10-26)
  - Reasoning: Default inference regions are tabulated per hosting region. Storage is only covered by the general statement that customer content stays in the selected region, and no AI-specific storage location is stated.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The inference provider and region depend on where your Omni application is hosted."
  - Source: https://docs.omni.co/administration/security/cloud-regions (checked 2026-10-26)
  - Reasoning: The page lists default AI inference regions by AWS/Azure hosting region and says customer content is stored and processed in the selected hosting region. This does not comprehensively locate storage/processing for every optional provider and all AI request data.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Omni's AI features send requests to an inference provider. The inference provider and region depend on where your Omni application is hosted."
  - Source: https://docs.omni.co/administration/security/cloud-regions (checked 2026-10-26)
  - Reasoning: Omni documents inference regions mapped to application hosting regions, but does not provide complete data residency guarantees for all AI data storage across providers.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Any data, including metadata, provided to the LLMs used by Omni will not be used for training."
  - Source: https://docs.omni.co/ai/security (checked 2026-10-26)
  - Reasoning: Unconditional statement that customer data is not used for training. No opt-out is needed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Any data, including metadata, provided to the LLMs used by Omni will not be used for training."
  - Source: https://docs.omni.co/ai/security (checked 2026-10-26)
  - Reasoning: The vendor makes an unconditional no-training statement for data and metadata sent to its AI LLMs; no opt-out is required.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Any data, including metadata, provided to the LLMs used by Omni will not be used for training."
  - Source: https://docs.omni.co/ai/security (checked 2026-10-26)
  - Reasoning: Omni explicitly states that customer data and metadata provided to LLMs used by Omni are not used for model training.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Partly** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Controls the topics that are available to the Omni Agent, Chat with Content, MCP, and embedded chat instances."
  - Source: https://docs.omni.co/modeling/models/ai-chat-topics (checked 2026-10-26)
  - Reasoning: ai_chat_topics and ai_fields limit what the AI sees across a model. The same pages warn the parameter 'changes what the AI is aware of, not what it has access to', so it is not a security boundary.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This parameter changes what the AI is aware of, not what it has access to."
  - Source: https://docs.omni.co/modeling/topics/parameters/ai-fields (checked 2026-10-26)
  - Reasoning: Modelers can curate AI-visible fields and topics separately from user permissions, but the docs explicitly say these context restrictions are not access boundaries. ai_chat_topics also excludes the Workbook Agent.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "This parameter changes what the AI is aware of, not what it has access to."
  - Source: https://docs.omni.co/modeling/topics/parameters/ai-fields (checked 2026-10-26)
  - Reasoning: The ai_fields parameter restricts which fields are supplied to the AI context window, but the documentation explicitly notes that this changes awareness rather than serving as an enforced security boundary.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Scoped, secure data access** – Interactions are scoped only to the model (and topic, if provided) supplied to the MCP, preventing unauthorized data access when querying"
  - Source: https://docs.omni.co/ai/mcp (checked 2026-10-26)
  - Reasoning: An outside agent's MCP connection can be limited to one model and topic, narrower than the human's access. Organization keys can also run as a narrower user via X-MCP-User-ID, and admins can switch individual MCP tools off.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "MCP OAuth PATs inherit the creating user's in-app permissions."
  - Source: https://docs.omni.co/ai/mcp/authentication (checked 2026-10-26)
  - Reasoning: MCP OAuth acts with the full human user's permissions. Service-account/API-key and impersonation routes are documented, but the docs do not establish a separately restricted agent token or delegated grant narrower than that user's access.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "A PAT is scoped to the user who creates it and will inherit their in-app permissions."
  - Source: https://docs.omni.co/api/authentication (checked 2026-10-26)
  - Reasoning: External agent connections use Personal Access Tokens or OAuth which inherit the full permissions of the human user, rather than operating under an agent-specific restricted role.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "`dimensions` and `measures` - These blocks contain a `sql` property that defines which database columns are used for that field"
  - Source: https://docs.omni.co/guides/api/data-lineage-integration (checked 2026-10-26)
  - Reasoning: An outside agent can trace a tile to its topic, view and table by reading the model YAML SQL through the API and inferring the sources. No dedicated lineage interface exists.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "By parsing the `query.fields` array and comparing it to the `dimensions` and `measures` in your YAML, you can identify exactly which database columns drive each dashboard tile."
  - Source: https://docs.omni.co/guides/api/data-lineage-integration (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve a dashboard's queries and model SQL mappings through documented APIs. The guide requires the caller to parse those definitions and assemble the lineage graph; it does not expose a ready-made upstream lineage traversal service.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "By parsing the query.fields array and comparing it to the dimensions and measures in your YAML, you can identify exactly which database columns drive each dashboard tile."
  - Source: https://docs.omni.co/guides/api/data-lineage-integration (checked 2026-10-26)
  - Reasoning: Omni exposes query fields and YAML models which can be parsed to identify underlying columns, but does not provide an interactive visual column-to-dashboard lineage graph in the UI.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Partly** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Retrieve the full result of a completed AI job, including all actions taken by the AI (queries generated, data retrieved) and the final summarized answer."
  - Source: https://docs.omni.co/api/ai/stream-ai-job-results (checked 2026-10-26)
  - Reasoning: When an outside agent uses Omni's first-party askOmni MCP tool or the AI jobs API, Omni stores a job record. Per the Get AI job status page, that record holds the prompt, userId, modelId, branchId and topicName. The stored result lists each action with the semantic query executed, and it is kept for 14 days. The MCP tools page says the job runs as the effective user, either impersonated with X-MCP-User-ID or the key's owner. So for this route the requests are recorded against the delegated identity and the model and topic touched. The scope is limited, so the verdict is partly. The record covers only askOmni/AI jobs, and the logged actions are those of Omni's own AI acting for the agent. Nothing marks the request as coming from an outside agent. Other MCP and API tool calls, such as document or model edits, appear only in the general API_REQUEST audit event, which logs the key owner and endpoint with no affected objects. The row calls that kind of general log insufficient. No beta or preview label appears, so the feature counts as generally available.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Retrieve the full result of a completed AI job, including all actions taken by the AI (queries generated, data retrieved) and the final summarized answer."
  - Source: https://docs.omni.co/api/ai/stream-ai-job-results (checked 2026-10-26)
  - Reasoning: For an outside agent using the first-party askOmni MCP/AI-job route, stored job actions include the executed semantic query and retrieved data. The job status record identifies its effective user, prompt, model, branch and topic; MCP documents impersonation of that effective user. Records are retained for 14 days. This credit is for that documented agent interface, not generic activity logs.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Retrieve the full result of a completed AI job, including all actions taken by the AI (queries generated, data retrieved) and the final summarized answer."
  - Source: https://docs.omni.co/api/ai/stream-ai-job-results (checked 2026-10-26)
  - Reasoning: When an outside agent runs analysis via the AI jobs API or the first-party askOmni MCP tool, Omni records an AI job. The job record stores the prompt, userId, modelId, branchId, and topicName, and Stream AI job results stores all actions taken by the AI with executed semantic query definitions. However, it records the user ID rather than a separate agent identity, and records an AI job rather than a dedicated agent audit log, earning partly.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The changes won't be live until you review and manually publish the changes."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: Dashboard edits an outside agent makes through askOmni wait in a draft until the same user publishes them. MCP skips the AI approval prompts, and the Git PR requirement is not documented for agent changes. No separate approver is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "* [**Create and edit dashboards**](https://docs.omni.co/ai/chat.md#creating-dashboards): When you ask the agent to edit an existing dashboard, the changes land in a [draft](https://docs.omni.co/content/develop/drafts.md). The changes won't be live until you review and manually publish the changes. Brand-new dashboards created by the agent are published immediately."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: The first-party MCP route stages edits to existing dashboards for the requester to review and publish. It does not name a different required approver; new dashboards publish immediately. General Git review and Cursor confirmation also do not meet the separate-approver rule.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Each time Cursor uses an MCP tool, you'll be prompted to approve its usage."
  - Source: https://docs.omni.co/ai/mcp/cursor (checked 2026-10-26)
  - Reasoning: External MCP clients prompt the requester to approve tool calls before execution, but this is requester confirmation rather than approval by an independent human reviewer.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The detailed view to the right of the list of changes, compares the previous change to the currently selected version."
  - Source: https://docs.omni.co/modeling/develop/history (checked 2026-10-26)
  - Reasoning: Model history shows a before/after diff of each model change, and an outside agent's branch edits would appear there. No page says the diff covers changes made by an outside agent.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "To quickly understand what changed without opening the IDE, click the **Code** tab to view the "diff" of the underlying model YAML:"
  - Source: https://docs.omni.co/modeling/develop/promotion (checked 2026-10-26)
  - Reasoning: Omni exposes before/after YAML diffs for model changes and has a universal version-history comparison. The docs do not specifically demonstrate that reviewer diff for changes authored by an outside agent, so this is the generic-diff partial scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The content/metadata diff applied to a draft."
  - Source: https://docs.omni.co/api/documents-v2/patch-draft (checked 2026-10-26)
  - Reasoning: Omni provides draft diffs via API and Git PR diffs for review before changes take effect, but this is a general document diffing and version control mechanism rather than an agent-specific reviewer diff interface.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can restore a previously published version of a document using the **File > Version history** option."
  - Source: https://docs.omni.co/content/develop/drafts (checked 2026-10-26)
  - Reasoning: Agent edits to dashboards land as drafts or published versions, and model edits land in model history. Earlier document versions and model versions can both be restored, which reverts the agent's change.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Model history in the developer IDE allows users to see the changes made to the model and restore to an older version."
  - Source: https://docs.omni.co/modeling/develop/history (checked 2026-10-26)
  - Reasoning: Outside agents can edit the semantic model through the official skills and YAML API. Model history restores earlier saved model versions without limiting the author of the changes, so an agent-authored shared-definition change can be rolled back.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Click Restore this version."
  - Source: https://docs.omni.co/modeling/develop/history (checked 2026-10-26)
  - Reasoning: The model IDE version history and document version history allow reverting or restoring prior versions if an agent introduces unwanted changes.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Omni MCP Server enables natural language querying across your datasets, similar to how you’d interact with Omni, while taking advantage of the enhanced context, reasoning, or memory capabilities of external AI tools."
  - Source: https://docs.omni.co/ai/mcp (checked 2026-10-26)
  - Reasoning: Omni hosts and supports the MCP server, which gives access to models, data, content and apps. Authentication is documented as OAuth 2.1 or API key, and no preview label appears.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **OAuth 2.1** - **Recommended**. Streamlined setup through your browser. Omni creates API keys on your behalf automatically. Requires [**Personal Access Tokens (PATs)**](https://docs.omni.co/api/authentication.md#token-types) to be enabled for your organization."
  - Source: https://docs.omni.co/ai/mcp (checked 2026-10-26)
  - Reasoning: Omni provides its hosted MCP server for customer data, queries, dashboards and apps with documented OAuth and API-key authentication. It needs no customer-built middleware and is not labeled preview on this page or its AI section parent.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Omni MCP Server supports two authentication methods. Choose the one that best fits your needs:"
  - Source: https://docs.omni.co/ai/mcp/authentication (checked 2026-10-26)
  - Reasoning: Omni provides a first-party Model Context Protocol (MCP) server supporting OAuth 2.1 and API key authentication for external AI clients.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Returns a list of available models and their IDs, which the MCP client uses to select which model to query."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: pickModel and pickTopic enumerate models and topics, and searchContent finds dashboards and apps. The documents and folders APIs list content without an id.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Returns a list of available models and their IDs, which the MCP client uses to select which model to query."
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: The first-party CLI enumerates saved documents, while the models CLI enumerates models, topics and views. Outside agents using the published skills can discover objects without receiving their IDs first.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Returns a list of models available to the calling user"
  - Source: https://docs.omni.co/ai/mcp/tools (checked 2026-10-26)
  - Reasoning: The Omni MCP server provides discovery tools such as pickModel to list available models, pickTopic to list available topics, and searchContent to find existing dashboards and workbooks.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "OAuth lets MCP clients connect to Omni without requiring you to manually create and manage API keys."
  - Source: https://docs.omni.co/ai/mcp/authentication (checked 2026-10-26)
  - Reasoning: Named credential types are documented: MCP OAuth PATs, personal access tokens and Organization API keys, the latter for service-account style automation.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **API key** - Manual key creation for centralized management or automated workflows."
  - Source: https://docs.omni.co/ai/mcp (checked 2026-10-26)
  - Reasoning: The vendor names API keys and OAuth 2.1 as authentication methods for outside-agent MCP clients; API authentication also documents PATs and bearer headers.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "After authorization, all MCP queries use your Omni permissions and access controls."
  - Source: https://docs.omni.co/ai/mcp/authentication (checked 2026-10-26)
  - Reasoning: The Omni MCP server supports OAuth 2.1 and API key authentication, allowing outside agents to connect and authenticate on behalf of a user while respecting their Omni permissions.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "They are open-source skills that let you explore models, run queries, build dashboards, and manage your Omni instance — all without leaving your IDE."
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Omni publishes SKILL.md-based agent skills and plugins for Claude Code, Cursor, Codex and others.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "They work with AI coding assistants including Claude Code, Cursor, Codex, Cortex Code, CoCo, and more."
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Omni publishes an official open-source agent-skill/plugin package with model exploration, query, modeling, content-building and administrative skills. The install guide documents SKILL.md folders and supported coding-agent installation flows.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Omni's agent skills bring analytics capabilities directly into your development environment."
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Omni publishes open-source agent skills and instruction files (such as SKILL.md) for coding agents including Claude Code, Cursor, and Codex to explore models and build dashboards.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Using a coding agent?** Paste this prompt into Claude Code, Cursor, Codex, or any coding agent and it will install the Omni CLI for you:"
  - Source: https://docs.omni.co/developers/cli (checked 2026-10-26)
  - Reasoning: The vendor CLI docs address coding agents directly. Non-interactive authentication is documented through the OMNI_API_TOKEN environment variable (developers/cli/authentication).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "**Using a coding agent?** Paste this prompt into Claude Code, Cursor, Codex, or any coding agent and it will install the Omni CLI for you:"
  - Source: https://docs.omni.co/developers/cli (checked 2026-10-26)
  - Reasoning: The official CLI explicitly addresses coding-agent use and the linked authentication guide provides API-key authentication via OMNI_API_TOKEN for automated workflows, avoiding an interactive OAuth requirement.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Once the CLI is installed, you can use Omni's agent skills to bring analytics capabilities directly into AI coding assistants like Claude Code, Cursor, and Codex."
  - Source: https://docs.omni.co/developers/cli (checked 2026-10-26)
  - Reasoning: Omni provides a dedicated CLI that outside AI coding assistants and developers use alongside agent skills, supporting headless authentication via API keys.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Partly** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Controls whether users can authorize external AI tools (like Claude Desktop, ChatGPT, or Cursor) to connect to Omni via the [MCP Server](https://docs.omni.co/ai/mcp)."
  - Source: https://docs.omni.co/ai/settings/mcp (checked 2026-10-26)
  - Reasoning: The MCP server toggle and per-tool settings apply to the whole organization. No per-user, group or workspace control over agent access is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Disabling it returns a `403` for new authorization requests and blocks existing grants from making tool calls."
  - Source: https://docs.omni.co/ai/mcp/authentication (checked 2026-10-26)
  - Reasoning: Organization Admins can enforce the organization-wide MCP server switch, including blocking existing grants. No separately documented per-user/group/workspace MCP rollout control was found beyond ordinary user permissions and token revocation.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Controls whether users can authorize external AI tools (like Claude Desktop, ChatGPT, or Cursor) to connect to Omni via the MCP Server."
  - Source: https://docs.omni.co/ai/settings/mcp (checked 2026-10-26)
  - Reasoning: Organization Admins can enable or disable external MCP server access across the organization, but there is no granular per-user or per-group rollout control for external agents.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Every interaction with an AI feature in Omni — such as asking a question, generating a summary, asking AI to make data model changes, or using the [MCP Server](https://docs.omni.co/ai/mcp) — consumes tokens from an LLM provider."
  - Source: https://docs.omni.co/ai/settings/usage (checked 2026-10-26)
  - Reasoning: MCP usage counts against the general org and per-user AI credit caps. No limit specific to the agent interface is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The Omni API allows **60 requests per minute per API key**."
  - Source: https://docs.omni.co/api/rate-limits (checked 2026-10-26)
  - Reasoning: Outside agents using the vendor API or CLI encounter the ordinary per-key API rate limit. AI credits also cover MCP usage, but neither is documented as a distinct agent-only quota, so the general API-limit partial scope applies.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Too Many Requests - Rate limit exceeded (60 requests/minute)"
  - Source: https://docs.omni.co/api/ai/stream-ai-job-results (checked 2026-10-26)
  - Reasoning: Omni enforces rate limits (60 requests/minute) on API endpoints used by agents, but these are general tenant-wide API rate limits rather than agent-specific call budgets.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For example, if you tell the AI that "revenue should only include orders with status Complete, Shipped, or Processing," the AI can learn that rule and encode it into the model as field descriptions, `ai_context`, synonyms, or new field definitions."
  - Source: https://docs.omni.co/ai/learn-from-conversation (checked 2026-10-26)
  - Reasoning: Business rules are written into ai_context, descriptions and synonyms on the model, topics, views and fields. The Omni Agent, and MCP agents through the same pipeline, read them before answering.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Free text that provides context to the [Omni Agent](https://docs.omni.co/ai/chat.md) for all topics in the model."
  - Source: https://docs.omni.co/modeling/models/ai-context (checked 2026-10-26)
  - Reasoning: Model-, topic-, view- and field-level ai_context can encode business meanings and behavioral guidance that the built-in Omni Agent receives when answering. This is business knowledge beyond schema names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Free text that provides context to the Omni Agent. Can include behavioral prompting, instructions for tone, or other guidance to improve AI query results."
  - Source: https://docs.omni.co/modeling/topics/parameters/ai-context (checked 2026-10-26)
  - Reasoning: Omni provides the ai_context parameter at the model, topic, view, dimension, and measure levels to supply persistent business context and instructions to the AI.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Using a git integration provides added development benefits of storing backups of model files and using pull requests to create collaborative and peer reviewed changes."
  - Source: https://docs.omni.co/integrations/git (checked 2026-10-26)
  - Reasoning: AI context lives in model YAML files, which sync to Git for diffs, review and rollback.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Using a git integration provides added development benefits of storing backups of model files and using pull requests to create collaborative and peer reviewed changes."
  - Source: https://docs.omni.co/integrations/git (checked 2026-10-26)
  - Reasoning: Business context for the built-in agent is stored in model YAML, including ai_context, descriptions and synonyms. Omni's Git integration versions those model files, supporting diffs, reviews and rollback.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Omni's git integration allows you to version control your model files by connecting an Omni model to a git repository."
  - Source: https://docs.omni.co/integrations/git/setup (checked 2026-10-26)
  - Reasoning: Omni's Git integration connects data models to Git repositories, version controlling all YAML files containing business context and ai_context definitions.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "At query time, Omni substitutes each placeholder with the current user's attribute value, allowing you to tailor AI behavior per user or group."
  - Source: https://docs.omni.co/modeling/develop/ai-optimization (checked 2026-10-26)
  - Reasoning: ai_context is set per model, topic and view, and can be personalized per user or group through user attributes, so teams get different context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "At query time, Omni substitutes each placeholder with the current user's attribute value, allowing you to tailor AI behavior per user or group."
  - Source: https://docs.omni.co/modeling/develop/ai-optimization (checked 2026-10-26)
  - Reasoning: The built-in Omni Agent can receive distinct business context per user/group through user attributes, and model/topic/view context also scopes it by dataset rather than tenant-wide only.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This allows you to personalize the context for each user."
  - Source: https://docs.omni.co/modeling/topics/parameters/ai-context (checked 2026-10-26)
  - Reasoning: The ai_context parameter supports templating with user attributes ({{omni_attributes.<attribute_name>}}), allowing context to be scoped dynamically based on user identity or group.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Because a run targets a specific model branch, evals let you measure the impact of data modeling and curation changes - such as new fields and joins, or `ai_context` and other context adjustments - before promoting them to your shared model."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: Eval runs on a branch test context changes before they reach the shared model.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Because a run targets a specific model branch, evals let you measure the impact of data modeling and curation changes - such as new fields and joins, or `ai_context` and other context adjustments - before promoting them to your shared model."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: Named eval runs test context changes against saved questions on an isolated model branch before the context reaches built-in-agent users of the shared model.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Because a run targets a specific model branch, evals let you measure the impact of data modeling and curation changes - such as new fields and joins, or ai_context and other context adjustments - before promoting them to your shared model."
  - Source: https://docs.omni.co/ai/evals (checked 2026-10-26)
  - Reasoning: AI Hub Evals allow testing ai_context adjustments on a model branch against prompt sets before promoting the changes to the shared production model.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Partly**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "**Description** - Additional context about the field, if defined in the model"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The field-details panel shows the model description of each field the answer used. No page says the ai_context instruction or rule that shaped the answer is shown.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **Description** - Additional context about the field, if defined in the model"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The answer's field-details panel surfaces the model description for each field the built-in agent selected. These are specific pieces of business context attached to the result, rather than only a dataset name; the panel does not claim to show every applied instruction.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "* **Description** - Additional context about the field, if defined in the model"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: When the Omni Agent generates a query, users can open the query field details panel attached to the answer, which displays the field's description defined in the model as additional context. However, general business context instructions or rules (such as ai_context text) that shaped the answer are not surfaced with the answer, so this is partly.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Omni pulls dbt metadata into your model in ways that directly improve AI accuracy."
  - Source: https://docs.omni.co/integrations/dbt/syncing-dbt (checked 2026-10-26)
  - Reasoning: dbt descriptions and accepted_values tests sync into the model and are used as AI context. Snowflake semantic view AI instructions are imported as topic ai_context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "For example, integrated descriptions are used for [AI context](https://docs.omni.co/modeling/develop/ai-optimization.md), which can help the Omni Agent generate more accurate queries."
  - Source: https://docs.omni.co/integrations/dbt/syncing-dbt (checked 2026-10-26)
  - Reasoning: The built-in agent consumes dbt descriptions imported by the integration rather than requiring retyping. Databricks and Snowflake semantic-view integrations likewise map warehouse comments into descriptions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A dbt sync reads model and column descriptions from your dbt project into Omni."
  - Source: https://docs.omni.co/integrations/dbt/push-descriptions (checked 2026-10-26)
  - Reasoning: Omni synchronizes model and column descriptions directly from dbt and database schemas into Omni models, making existing data dictionary context available to the AI.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Yes**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If defined, only the specified fields will be added to the context window."
  - Source: https://docs.omni.co/modeling/topics/parameters/ai-fields (checked 2026-10-26)
  - Reasoning: ai_fields, which supports exclusions, and ai_chat_topics are AI-specific product settings that take fields, views or topics out of the AI's context so it avoids them. Data access is governed separately.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This parameter changes what the AI is aware of, not what it has access to."
  - Source: https://docs.omni.co/modeling/topics/parameters/ai-fields (checked 2026-10-26)
  - Reasoning: ai_fields can exclude fields/views from the built-in agent's context, including tag-based exclusions. Because the documentation warns this does not remove access and the AI may infer schemas, it is curation/guidance rather than enforced off-limits data.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "An array of field selectors that determine which fields are provided to the Omni Agent's context window."
  - Source: https://docs.omni.co/modeling/topics/parameters/ai-fields (checked 2026-10-26)
  - Reasoning: The ai_fields parameter supports negative selectors (such as -tag: or -fieldname) to explicitly exclude fields from the AI's context window.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Enabling this setting will require all changes to the model to be made through a pull request."
  - Source: https://docs.omni.co/integrations/git/settings (checked 2026-10-26)
  - Reasoning: Context lives in the model. A PR-required review workflow exists, and PR approval rules are delegated to the Git provider, but no owner role for business context is named. Modeler/admin edit permissions alone do not count.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "An array of email addresses for the topic owners."
  - Source: https://docs.omni.co/modeling/topics/parameters/owners (checked 2026-10-26)
  - Reasoning: A topic can name owners for the topic and its business context, used by the AI to identify subject-matter experts. Separate context suggestion and learning review flows exist, but this ownership parameter does not require the named owners to approve context changes.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "A review modal displays the proposed changes as model YAML"
  - Source: https://docs.omni.co/ai/learn-from-conversation (checked 2026-10-26)
  - Reasoning: Proposed model corrections are reviewed before being saved, but the review is performed by the user in session rather than routed to a dedicated context owner or data steward.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Yes** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Omni imports each Snowflake semantic view as a topic, with the semantic view's field definitions, relationships, and AI instructions."
  - Source: https://docs.omni.co/connect-data/snowflake-semantic-views (checked 2026-10-26)
  - Reasoning: Warehouse semantic views become topics, and the Omni Agent generates queries through topics, so the assistant uses definitions kept in the warehouse. dbt semantic-layer metrics map into the model the same way.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **AI features understand the context.** Because the synced metadata includes field definitions and descriptions, Omni's [AI features](https://docs.omni.co/ai.md) can answer natural language questions about your Databricks metrics without users needing to write SQL."
  - Source: https://docs.omni.co/connect-data/databricks-unity-catalog-integration (checked 2026-10-26)
  - Reasoning: The built-in AI uses metric definitions maintained in Databricks Unity Catalog through imported semantic metadata. Snowflake semantic views and dbt semantic definitions are also imported as Omni topics/fields.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A [schema refresh](https://docs.omni.co/modeling/develop/schema-refreshes.md) imports the semantic views on your Snowflake connection."
  - Source: https://docs.omni.co/connect-data/snowflake-semantic-views/sync/trigger-sync (checked 2026-10-26)
  - Reasoning: Omni imports semantic views from Snowflake connections during schema refreshes, bringing warehouse-defined semantic views into Omni as queryable topics.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents the built-in Omni Agent or Modeling Agent writing a transform, dbt model or warehouse view. The Modeling Agent page says it is grounded in the Omni model, 'not arbitrary SQL against your warehouse'. The query views it suggests are Omni semantic-model objects. Omni's dbt pushdown (promote a query to a dbt model, Export to dbt) is a user workflow, and the dbt integration pages never mention the AI or agent. Snowflake semantic views are created by the omni-to-snowflake-semantic-view agent skill run in an outside coding agent, which is the outside-agent row, not the built-in assistant.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The built-in Modeling Agent edits Omni semantic-model YAML, and the Workbook Agent writes query SQL; neither is documented authoring a warehouse transformation, model, or view. AI-created input columns configure annotation storage in a scratch schema and require people to supply values; they do not document warehouse transformation logic. Export to dbt is a user workflow without a documented assistant-driven warehouse deployment. The Snowflake semantic-view push skill explicitly runs in outside agents such as Claude Code or Cursor, so it cannot establish this built-in-assistant row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Omni documentation describes manual user workflows to author dbt models from workbook queries and push them to a dbt repository, but the built-in assistant (Omni Agent / Modeling Agent) is not documented authoring transforms, models, views, or DDL that land below the BI tool in the warehouse.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "| **Model SQL** | `code` in the view's `dbt` block |"
  - Source: https://docs.omni.co/integrations/dbt/metadata-reference (checked 2026-10-26)
  - Reasoning: A dbt sync copies each dbt model's SQL into the `code` field of the matching Omni view's dbt block. Imported Snowflake semantic views are likewise written into generated topics (connect-data/snowflake-semantic-views/sync/metadata-reference). An outside agent can read those view and topic files through Omni's first-party interfaces: the Get model YAML API (api/models/get-model-yaml returns 'Map of file paths to YAML content'), the CLI `yaml-get` command, and the agent skills, which 'Explore and inspect semantic models, topics, views, and fields'. So an outside agent can read dbt model logic and translated semantic-view logic through the product. The verdict is partly, not yes. The agent reads Omni's synced or translated copy, and only for dbt-synced views or imported semantic views. Native warehouse view definitions are not exposed. No page documents an outside agent retrieving warehouse logic directly; the route has to be assembled from the dbt metadata, model-YAML API and agent-skills pages. None of these pages carries a beta or preview label.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Each metric view's dimensions and measures are imported as fields in Omni."
  - Source: https://docs.omni.co/connect-data/databricks-unity-catalog-integration (checked 2026-10-26)
  - Reasoning: Warehouse metric-view logic, including SQL expressions shown on this page, is imported into Omni model fields. An outside agent can read those definitions through the documented model YAML API/CLI and model-explorer skill; this goes beyond table/column names and types.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Explore and inspect semantic models, topics, views, and fields"
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Outside coding agents inspect warehouse-backed models, topics, and views via Omni agent skills and API.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The [`omni-to-snowflake-semantic-view` agent skill](https://github.com/exploreomni/omni-agent-skills/tree/main/skills/omni-integrations/skills/omni-to-snowflake-semantic-view) converts an Omni topic into a Snowflake semantic view."
  - Source: https://docs.omni.co/connect-data/snowflake-semantic-views/push-to-snowflake (checked 2026-10-26)
  - Reasoning: A vendor skill lets an outside agent author a Snowflake semantic view from an Omni topic. The write goes through the customer's Snowflake connection or CLI rather than Omni itself.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "3. Creates the semantic view in Snowflake with [`SYSTEM$CREATE_SEMANTIC_VIEW_FROM_YAML`](https://docs.snowflake.com/en/sql-reference/stored-procedures/system_create_semantic_view_from_yaml), using your Snowflake connection or CLI."
  - Source: https://docs.omni.co/connect-data/snowflake-semantic-views/push-to-snowflake (checked 2026-10-26)
  - Reasoning: The vendor-published integration skill runs in an outside coding agent, translates an Omni topic, and actually creates a Snowflake semantic view. This is documented first-party agent tooling, not a customer-written wrapper.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the omni-to-snowflake-semantic-view agent skill to convert an Omni topic into a Snowflake semantic view definition."
  - Source: https://docs.omni.co/connect-data/snowflake-semantic-views/push-to-snowflake (checked 2026-10-26)
  - Reasoning: Outside coding agents use the omni-to-snowflake-semantic-view skill to author Snowflake semantic views directly from Omni topic models.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Yes**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You keep your semantic definitions in one place — Snowflake — and explore and visualize them in Omni."
  - Source: https://docs.omni.co/connect-data/snowflake-semantic-views (checked 2026-10-26)
  - Reasoning: Snowflake semantic views and dbt semantic-layer metrics are consumed directly and do not have to be rebuilt in Omni.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This includes dimensions, entities, measures, and metrics, so you can use your dbt semantic definitions directly in Omni without recreating them."
  - Source: https://docs.omni.co/integrations/dbt/semantic-layer (checked 2026-10-26)
  - Reasoning: The product imports externally maintained dbt metric definitions. It also documents importing Snowflake semantic views and Databricks metric views.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Omni's integration with dbt's semantic layer reads metadata from your dbt semantic layer project and maps it into your Omni model."
  - Source: https://docs.omni.co/integrations/dbt/semantic-layer (checked 2026-10-26)
  - Reasoning: Omni imports metric and semantic definitions directly from dbt Semantic Layer and Snowflake semantic views.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This means AI-generated queries use the same governed definitions as the rest of Omni, so results are consistent and trustworthy."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: The assistant builds queries from the semantic model's metrics, dimensions and joins.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Omni's AI uses your defined metrics, relationships, and business logic — not guesswork on raw tables."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: The built-in assistant generates answers against the same semantic model containing shared metrics, dimensions and relationships.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Omni's AI is built on your organization's semantic model — the layer that defines your metrics, relationships, and business logic."
  - Source: https://docs.omni.co/ai (checked 2026-10-26)
  - Reasoning: The built-in assistant reads and queries against the shared semantic model layer, including views, metrics, joins, and topics.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**New dimensions and measures** — define calculated fields that came up in the conversation"
  - Source: https://docs.omni.co/ai/learn-from-conversation (checked 2026-10-26)
  - Reasoning: The built-in AI writes new dimensions and measures into the shared model. The Modeling Agent also drafts measures, topics and relationships.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "| **Apply model edits** | Apply the agent's edits to view, topic, and relationship files in the model |"
  - Source: https://docs.omni.co/ai/chat (checked 2026-10-26)
  - Reasoning: The built-in agent edits semantic view, topic and relationship definitions. The Modeling Agent guide documents drafting and applying YAML, including new dimensions, measures and topics, rather than descriptions alone.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent uses these insights to suggest views, measures (with appropriate aggregate_type and symmetric aggregation settings), relationships (with reversible semantics), and query views that align with how your team actually queries the data."
  - Source: https://docs.omni.co/ai/model-assistant (checked 2026-10-26)
  - Reasoning: The Modeling Agent modifies semantic model YAML in the model IDE, creating and updating views, measures, dimensions, and relationships.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Explore and inspect semantic models, topics, views, and fields"
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Vendor agent skills (omni-model-explorer) and the model YAML/view APIs let an outside agent read field definitions and descriptions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "| **omni-model-explorer** | Discover and inspect models, topics, views, fields, dimensions, measures, and relationships |"
  - Source: https://docs.omni.co/developers/agent-skills/skills (checked 2026-10-26)
  - Reasoning: The first-party outside-agent model-explorer skill reads semantic definitions. Its CLI/model YAML API returns authored or fully resolved field definitions, including descriptions, SQL and joins, so the agent can read business meaning rather than infer it from column names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Explore and inspect semantic models, topics, views, and fields"
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Outside coding agents inspect models, topics, views, and fields programmatically using Omni agent skills and REST API.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create and edit model definitions in YAML"
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Vendor skills (omni-model-builder) let an outside agent create and edit views, dimensions, measures and relationships. askOmni model edits also save to a branch.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "| **omni-model-builder** | Create and edit views, topics, dimensions, measures, and relationships in YAML |"
  - Source: https://docs.omni.co/developers/agent-skills/skills (checked 2026-10-26)
  - Reasoning: Omni's official outside-agent skill authors the shared semantic layer through its CLI and model YAML APIs, including definitions and relationships.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create and edit model definitions in YAML"
  - Source: https://docs.omni.co/developers/agent-skills (checked 2026-10-26)
  - Reasoning: Outside coding agents create and edit semantic model definitions in YAML files using agent skills and Git integration.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Yes**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "While not every query needs to be pushed down to dbt, when you do create a query where you want to promote the logic into dbt, you can do so within Omni."
  - Source: https://docs.omni.co/integrations/dbt/models (checked 2026-10-26)
  - Reasoning: Work modeled in Omni can be pushed to the dbt repo as a model and materialized in the warehouse.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "3. Creates the semantic view in Snowflake with [`SYSTEM$CREATE_SEMANTIC_VIEW_FROM_YAML`](https://docs.snowflake.com/en/sql-reference/stored-procedures/system_create_semantic_view_from_yaml), using your Snowflake connection or CLI."
  - Source: https://docs.omni.co/connect-data/snowflake-semantic-views/push-to-snowflake (checked 2026-10-26)
  - Reasoning: The first-party integration skill reads Omni topic definitions, translates their measures/dimensions/relationships to semantic YAML, and creates the resulting definition in Snowflake.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the omni-to-snowflake-semantic-view agent skill to convert an Omni topic into a Snowflake semantic view definition."
  - Source: https://docs.omni.co/connect-data/snowflake-semantic-views/push-to-snowflake (checked 2026-10-26)
  - Reasoning: Omni provides the omni-to-snowflake-semantic-view agent skill to push Omni topic definitions down into Snowflake semantic views.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**In-Workbook Calculations**: Create Excel-like calculations directly in the workbook by combining columns. These calculations can be promoted for repeated use, making them accessible across multiple areas in Omni for non-technical users."
  - Source: https://docs.omni.co/modeling/develop/guides/workbook-modeling (checked 2026-10-26)
  - Reasoning: Workbook fields and calculations are promoted to the shared model with 'Promote to shared', and no developer has to rewrite them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Once added to the workbook model, you can then promote the calculation to the [shared model](https://docs.omni.co/modeling/develop/model-management#shared-model-promotion)."
  - Source: https://docs.omni.co/analyze-explore/calculations (checked 2026-10-26)
  - Reasoning: A calculation can be added directly from its result-column header to the workbook model and promoted to the maintained shared model. Supported calculations do not require developer re-expression in YAML; result-shape-dependent calculations have documented limitations.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Shared model promotion pushes changes made in the workbook layer into the model layer so the changes are reusable and available in all workbooks."
  - Source: https://docs.omni.co/modeling/develop/promotion (checked 2026-10-26)
  - Reasoning: Omni provides a one-click shared model promotion workflow that elevates ad-hoc calculations created in workbooks into governed shared model definitions.

