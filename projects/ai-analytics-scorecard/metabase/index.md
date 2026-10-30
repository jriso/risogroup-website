# Metabase: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/metabase/

AI Feature Score **62**, #10 of 15 (BI and analytics tool). Built-in AI 54, external AI 80, other 62. Analysis 44, Building and maintaining assets 76, Context and connections 57, Reliability and controls 72. By model: Claude Opus 5.5 62, GPT-6.1 Sol 63, Gemini 3.8 Flash 62.

## Score breakdown

Four areas, 25 points each. Shown for Claude Opus 5.5, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 11.1 of 25
- Building and maintaining assets: 19.0 of 25
- Context and connections: 14.3 of 25
- Reliability and controls: 18.0 of 25

**Strengths**

- Answers agree with certified content
- Choose where model inference runs
- You can see what it changed

**Not found in the docs**

- You can cap what agents consume
- It hands back when unsure
- Clean and reshape data

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Metabot helps you analyze your data by creating charts from natural language, generating SQL queries, fixing query errors, and analyzing existing visualizations."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: The built-in assistant, Metabot, takes a plain-English question and builds a chart or SQL query from it. It does not just complete SQL the user is typing.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- [Create a chart using the query builder](#how-metabot-uses-the-query-builder) from a natural language query."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: The built-in Metabot creates a working analytical query and chart from natural language without requiring an existing query or dashboard.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Metabot helps you analyze your data by creating charts from natural language, generating SQL queries, fixing query errors, and analyzing existing visualizations."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot is a built-in assistant that answers plain-English questions by creating charts and queries in the query builder and native editor.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Metabot will keep the context of the current question with each new prompt."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot keeps the conversation's context across prompts, so follow-up refinements work. Slack threads also keep context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Metabot remembers the context of a thread."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: The built-in Slack assistant preserves thread context for follow-up questions; the in-product Metabot page also documents retaining the current question context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Metabot will keep the context of the current question with each new prompt."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot preserves conversation context across turns, allowing the user to follow up with additional prompts to refine the answer.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can drill through the chart or step into the editor to tweak the query (both in the query builder and the SQL editor)."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot's answer is a question whose query the user can open in the query builder or SQL editor. Generated SQL is shown before it runs.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Once Metabot creates a question for you, you can follow up with more questions or take over yourself. You can drill through the chart or step into the editor to tweak the query (both in the query builder and the SQL editor)."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: A Metabot-created answer exposes its query in the query builder or SQL editor, making the analytical logic inspectable.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Metabot will generate the SQL for you, but it won't run the query. This gives you a chance to inspect the code before running it."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot creates questions in the graphical query builder or native editor, exposing the query and analytical steps for inspection and editing.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Partly** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "**Queries generated**: every SQL or [query builder](../questions/query-builder/editor.md) (MBQL) query Metabot wrote during the conversation, with the referenced tables listed underneath."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: The built-in assistant is Metabot. For each query Metabot generated, the product records the referenced tables and lists them separately from the query text, so the specific tables an answer was built from are attached to it. This is partial scope. The list appears only in the admin conversation-detail audit (Monitor > Conversations), not with the answer the user sees. It names tables only, with no column- or metric-level citation. The page states no beta or preview label, so the release stage is generally available.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- **Queries generated**: every SQL or [query builder](../questions/query-builder/editor.md) (MBQL) query Metabot wrote during the conversation, with the referenced tables listed underneath. Hit **Visit** on a query to open the item in a new tab and run it yourself."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: The admin conversation audit lists the specific tables underneath each generated query, separately from the query text. This is partial scope: table attribution is available in the audit, but the docs do not establish field citations displayed with each end-user answer.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Queries generated: every SQL or [query builder](../questions/query-builder/editor.md) (MBQL) query Metabot wrote during the conversation, with the referenced tables listed underneath."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: For each generated query in a conversation, Metabase records and displays the referenced tables underneath the query in usage auditing conversation details, but does not cite specific columns or metrics attached to answers in the user conversation, earning partly.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Work with CSVs**: [Upload a CSV](../databases/uploads.md) to Metabase, then ask follow-up questions about the data."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: In Slack, a user can upload a CSV and ask Metabot (the built-in assistant) questions about its contents.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Work with CSVs**: [Upload a CSV](../databases/uploads.md) to Metabase, then ask follow-up questions about the data."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: The built-in Metabot in Slack explicitly supports analyzing the contents of a CSV uploaded to Metabase.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- **Work with CSVs**: [Upload a CSV](../databases/uploads.md) to Metabase, then ask follow-up questions about the data."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: Metabot in Slack explicitly allows users to upload a CSV and ask follow-up questions about the data.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Not found** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page shows Metabot cleaning or reshaping data and leaving transformation logic behind. Transforms (query-based and Python) exist, but no transforms page mentions Metabot or AI. Metabot writing SQL in general is not evidence of data cleaning.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Transforms document cleaning and preprocessing with inspectable SQL or Python, but the corpus does not say built-in Metabot creates or drives those transforms. General SQL generation alone does not establish AI cleaning or reshaping.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase supports query-based and Python transforms created and run by analysts, but the built-in AI is not documented to clean or reshape data or generate inspectable transformation logic.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: No** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page shows Metabot joining or blending two distinct sources. Slack Metabot can analyze an uploaded CSV, but uploads land in one database and that is the file-upload row. Layering questions from different databases on one dashboard card is a manual dashboard feature, not the AI. Replace-data-sources says cross-database replacement is not supported.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documentation found for built-in Metabot joining or blending distinct data sources in one analysis. Layering charts from different databases and uploading a CSV are documented separately; neither establishes Metabot combining those sources.
- **Gemini 3.8 Flash**: no
  - Quote: "You can only pick tables and saved questions that are from the same database as your starting data."
  - Source: https://www.metabase.com/docs/latest/questions/query-builder/join (checked 2026-10-26)
  - Reasoning: Metabase's query engine and query builder explicitly restrict queries and joins to tables and saved questions within the same database, preventing queries across multiple disparate data sources.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "[Generate and rank many charts from a prompt](./research.md)."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot builds charts from a natural-language prompt and can generate and rank many candidate charts. The AI chooses and creates the visualization rather than only editing one the user picked.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Otherwise, Metabot will use the [query builder](../questions/query-builder/editor.md) to create a new chart for you."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: In the natural-language chart-creation workflow, Metabot creates the query and its chart when existing content does not answer the request; a user does not need to choose a visualization first.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Metabase picks a chart type based on the shape of the result."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: Metabase automatically selects and renders a visualization (bar, line, table) appropriate to the shape of the query results.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Metabot can 'Analyze a chart' and produce an X-ray of a results table. No page says it breaks a change down into contributing segments with checkable contributions, or even names likely causes of a change.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Metabot can analyze charts and produce X-rays, but the documentation does not establish a breakdown explaining a change through contributing factors or segments, with or without checkable contribution calculations.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabot does not identify contributing factors to changes with checkable calculations; automated X-rays produce exploratory breakdown charts but not root-cause or key-driver contribution analysis.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Not found** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The corpus never mentions a forecast. Trend lines are a manual chart-display toggle that Metabot is not documented to drive, and Metabot's limitations say it cannot change visualization settings.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented built-in Metabot forecasting capability was found, including a forecast with stated inputs, horizon, or assumptions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase documentation does not document AI forecasting capabilities or exposing forecast horizons, inputs, and assumptions.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents what-if scenarios with Metabot. 'Scenario' hits are unrelated (SDK types, e2e tests, billing example).
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented Metabot what-if modeling, changed scenario assumptions, or calculated scenario comparison was found.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not document creating, comparing, or calculating side-by-side what-if scenarios with explicitly stated assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page says a Metabot answer, or the question it produces, shows the data's age or last-refresh time. The caching and sync pages describe cache policies but no freshness indicator shown with an answer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Model persistence shows its last refresh in a model's settings sidebar, and caching policies control stored results. Neither page documents a freshness indicator with a Metabot answer or its source at the point of use.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabot answers do not display data freshness indicators, cache age, or staleness warnings at the point of use.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Place your cursor in the query, press **Cmd/Ctrl+Shift+I**, and describe the change you want to make (like "add a filter for orders from this year")."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot reads existing SQL in the native editor (inline edits, fixing errors). No page says it reads the formula behind a chart in a saved dashboard; it only 'analyzes' the chart.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can also ask Metabot to fix your SQL in the chat."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot can inspect existing SQL in its editor/chat workflow. The available text does not explicitly establish reading the underlying calculation of a particular saved chart, so credit is limited to the row's SQL-editor exception.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When viewing a question, open the [chat sidebar](#the-metabot-chat-sidebar) and ask Metabot to analyze the chart."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: When viewing a question or chart, Metabot opens in context, reads the chart and underlying query, and maintains the context for analysis.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Otherwise, Metabot will use the [query builder](../questions/query-builder/editor.md) to create a new chart for you."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot writes the query-builder query behind a chart, and that chart can be saved to a dashboard, collection or document.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- [Create a chart using the query builder](#how-metabot-uses-the-query-builder) from a natural language query."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot authors the query that feeds a chart, and the same page explicitly lets users save that AI-created chart to a dashboard or collection.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Place your cursor in the query, press **Cmd/Ctrl+Shift+I**, and describe the change you want to make (like "add a filter for orders from this year")."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot can edit SQL queries directly in the native editor. Under the guidance, writing SQL in an editor or worksheet is partly.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside agent can read a specific question, including its query, through the vendor CLI or API.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- MBQL queries (in Cards and elsewhere) are now serialized as MBQL 5 as opposed to MBQL 4 (aka legacy MBQL) in the application database and in REST API responses. While we do not officially support editing or introspection of MBQL via the REST API (please treat it as an opaque object), to support existing usages the `GET /api/card/:id` endpoint can return the Card `dataset_query` as MBQL 4 if you include the query parameter `?legacy-mbql=true`."
  - Source: https://www.metabase.com/docs/latest/developers-guide/api-changelog (checked 2026-10-26)
  - Reasoning: A documented per-card GET retrieves the query behind a specific saved question/chart, without downloading a whole workbook. The MBQL representation has an explicit introspection-support caveat; the supported agent CLI also documents reading question content.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: Outside agents can read the query and calculation behind specific questions and dashboard cards via the CLI and API.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside agent can write individual questions, and so the calculation behind a chart, through the CLI.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: The supported outside-agent CLI writes individual saved questions and their queries directly through the Metabase API; agent-driven development documents iterating those questions and charts in place, rather than replacing an entire workbook.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent writes the CLI commands and creates the questions and dashboard for you—just describe what you want."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: Outside coding agents use the Metabase CLI to create and update questions and dashboard cards with custom calculations.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Metabot can also see the person's current context (for example, Metabot will know about the dashboard they're currently viewing, even if the dashboard is outside the selected collection)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabot sees the dashboard or question the user has open and can analyze charts from it.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When viewing a question, open the [chat sidebar](#the-metabot-chat-sidebar) and ask Metabot to analyze the chart."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: The built-in assistant works from a currently viewed Metabase question/chart, an existing BI analytical asset.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When you ask Metabot to create a chart from natural language, it first looks for existing questions that might answer your request."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot searches existing saved questions and opens them or builds upon them to answer user requests.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Questions that are created directly in the document (either through [Metabot](../ai/metabot.md) or by creating a new question via the Chart command) are saved to the document itself and don't appear in your collections."
  - Source: https://www.metabase.com/docs/latest/documents/introduction (checked 2026-10-26)
  - Reasoning: Metabot creates charts that are saved into documents, which are governed by collection and data permissions. Metabot charts can also be saved to dashboards or collections.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Questions that are created directly in the document (either through [Metabot](../ai/metabot.md) or by creating a new question via the Chart command) are saved to the document itself and don't appear in your collections."
  - Source: https://www.metabase.com/docs/latest/documents/introduction (checked 2026-10-26)
  - Reasoning: Metabot-created charts persist inside saved Documents, which are governed by the viewer's collection and data permissions. These are first-class BI documents backed by queries, not disposable editor output.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can also save any chart that Metabot creates to a dashboard or collection."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Charts generated by Metabot in the query builder or native editor can be saved directly as persistent governed questions and dashboard cards in collections.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside agent can read existing dashboards and questions through the vendor CLI.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: The supported CLI explicitly lets an outside agent read the contents of questions and dashboards through the API, beyond simply listing their existence.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: Outside agents can read questions, dashboards, and collections over the API and CLI.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent writes the CLI commands and creates the questions and dashboard for you—just describe what you want."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: An outside coding agent builds questions and dashboards through the CLI, with a PR workflow.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent writes the CLI commands and creates the questions and dashboard for you—just describe what you want."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: The vendor documents an outside coding agent creating actual saved questions and dashboards directly in Metabase through the supported CLI.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Run the `/metabase-cli` skill and prompt the agent to build your questions and dashboards."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: An outside coding agent with the `/metabase-cli` skill creates questions and dashboards directly in Metabase.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Whether someone can view or edit a document and its data depends on that person's collection and data permissions."
  - Source: https://www.metabase.com/docs/latest/documents/introduction (checked 2026-10-26)
  - Reasoning: Documents with Metabot-generated charts are shared through group collection permissions. Each viewer's own data permissions decide what data they see.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Whether someone can view or edit a document and its data depends on that person's collection and data permissions."
  - Source: https://www.metabase.com/docs/latest/documents/introduction (checked 2026-10-26)
  - Reasoning: The same page explicitly persists charts created by Metabot in documents. Users can share those documents through collection access granted to named groups, and the viewer's own data permissions govern access; this supports governed in-product sharing, not public links or Slack snapshots.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can also save any chart that Metabot creates to a dashboard or collection."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: AI-created charts saved to collections inherit group permissions, and queries evaluate dynamically under each viewer's data permissions.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Searches consider items' titles, descriptions, and other metadata — you can even search the contents of your SQL queries."
  - Source: https://www.metabase.com/docs/latest/exploration-and-organization/exploration (checked 2026-10-26)
  - Reasoning: Search across the whole instance finds colleagues' saved items in any collection the user can view. That includes saved Metabot-created questions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "As long as you're not the first user in your team's Metabase, the easiest way to start exploring your data is by looking at dashboards, charts, and lists that your teammates have already created."
  - Source: https://www.metabase.com/docs/latest/exploration-and-organization/exploration (checked 2026-10-26)
  - Reasoning: The page documents shared collections, workspace-wide content search, creator filters, and restriction of results to collections the user may view. Metabot-created charts saved to those collections use the same asset mechanism.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The command palette lets you create new things, search your content, or jump to anywhere in your Metabase."
  - Source: https://www.metabase.com/docs/latest/exploration-and-organization/exploration (checked 2026-10-26)
  - Reasoning: Permitted users can search and browse saved questions, dashboards, and models created across the workspace using the command palette and collections.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Partly** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "System prompts let you customize instructions for Metabot."
  - Source: https://www.metabase.com/docs/latest/ai/system-prompts (checked 2026-10-26)
  - Reasoning: Admins can set Metabot's instructions (system prompts), its data scope (collection, verified content) and which groups may use it, and everyone then shares it. But this is one instance-wide assistant (plus an embedded variant). Users cannot save separate assistants for colleagues to reuse.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Each tab has its own enable toggle, verified or curated content setting, allowed collection, and prompt suggestions."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Admins configure shared Internal and Embedded Metabot variants with content scopes and prompts. The system-prompts page additionally documents standing instructions, and usage-controls documents group access. This is a reusable shared assistant configuration; separately saved assistants with their own instructions, data, and permissions are not established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Each tab has its own enable toggle, verified or curated content setting, allowed collection, and prompt suggestions."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Admins can configure Metabot's standing instructions (system prompts), data scope (collection and verified content), and group access, but this configures a single instance-wide assistant (alongside an embedded variant) rather than letting users configure and save multiple distinct assistants for colleagues to reuse, earning partly.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Partly** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "From Slack, Metabot can create [alerts](../questions/alerts.md) and [dashboard subscriptions](../dashboards/subscriptions.md) that deliver to the current Slack channel."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: Metabot can set up alerts and subscriptions, but ordinary alert/subscription scheduling then runs them. The AI does not rerun an analysis itself. This is the 'AI only sets up such a schedule' case.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- **Create dashboard subscriptions**: Set up recurring [subscriptions](../dashboards/subscriptions.md) that deliver a dashboard's contents to the current Slack channel."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: Metabot can set up a conventional recurring dashboard delivery. The documentation does not say that the AI reruns an analytical task at each scheduled execution.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Metabot can find an answer and set up an alert for it in one go (though the question must already be saved)."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: Metabot in Slack can set up recurring alerts and dashboard subscriptions, but the AI only sets up the schedule rather than running the analytical task itself, which earns partly the grading standard/guidance.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Yes** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Create alerts**: Set up [alerts](../questions/alerts.md) on saved questions that get delivered to the current Slack channel. Metabot can find an answer and set up an alert for it in one go (though the question must already be saved)."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: Metabot, the built-in agent, can itself create alerts that send Slack notifications. That is a side effect beyond writing to dashboards.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Create alerts**: Set up [alerts](../questions/alerts.md) on saved questions that get delivered to the current Slack channel. Metabot can find an answer and set up an alert for it in one go (though the question must already be saved)."
  - Source: https://www.metabase.com/docs/latest/ai/metabot-slack (checked 2026-10-26)
  - Reasoning: The built-in Metabot can create an alert that causes notifications in an external Slack channel, a named side effect beyond creating analytics content.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Metabot will generate the SQL for you, but it won't run the query. This gives you a chance to inspect the code before running it."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: In the native editor, Metabot generates SQL code from prompts that a person must inspect and run. Generating code a person must then run is explicitly defined by the guidance as partly.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Not found** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page describes Metabot stopping and handing a task to a person, or asking a clarifying question. The quota-reached message is an admin-written usage-limit error, not a task hand-off.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented Metabot hand-off on failure, pause awaiting a human decision, notification, review queue, or conversational clarification behavior was found.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not document an escalation procedure or hand-off mechanism where an agent that cannot proceed routes the task to a person via a notification, review queue, or pause awaiting decision.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Not found** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Usage auditing lists Metabot profiles (Internal, NLQ, SQL, Slackbot, Embedding, Documents) that Metabase routes between internally. No page lets a customer configure one agent to delegate a bounded task to another named agent. These are implementation personas, which do not count.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The auditing page describes built-in Metabot personas, but no customer-configured delegation from one named built-in agent to another with bounded tools and permissions is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not document any capability for a customer to configure one agent to delegate bounded analytical tasks to another named agent with explicit tools and permissions.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Metabase ships an MCP server for outside clients (the opposite direction). No page documents attaching external tools or MCP servers to Metabot. Admin > AI settings cover providers, models, prompts and collections only.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The MCP pages describe outside clients connecting to Metabase, while Slack is a documented interface for chatting with Metabot. No documentation was found for attaching customer-configured external tools or MCP servers to built-in Metabot.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase provides an MCP server for external agents to access Metabase, but Metabot cannot connect outward to external MCP servers or customer-configured external tools.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When you get an error in a SQL query, you can click the **Have Metabot fix it** button, and Metabot will try to correct the query."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot fixes a broken query the user points it at. Finding affected content (dependency diagnostics) is a tool people run, with no AI involvement.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When you get an error in a SQL query, you can click the **Have Metabot fix it** button, and Metabot will try to correct the query."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Built-in Metabot repairs an erroneous query the user points it at, which is the row's partial case. Dependency diagnostics finds downstream broken content for a person to inspect, but is not documented as an AI-driven detection-and-repair workflow.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When you get an error in a SQL query, you can click the **Have Metabot fix it** button, and Metabot will try to correct the query."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: Metabot can fix a broken query when a user clicks the "Have Metabot fix it" button. Under the rule, the AI fixing one broken chart a user points it at is partly.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Not found** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Metabase does not document generated apps. Custom visualizations are React plugins built by developers with an SDK. Metabot is not documented to read them.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No generated-app object readable by built-in Metabot is documented. Metabot works with charts, questions, dashboards, and documents; app references concern embedding or customer-built Agent API applications.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not feature AI-generated applications, and the built-in assistant is not documented to read the code, layout, or rendered output of a generated app.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Not found** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents Metabot building a persistent app. Custom visualizations are developer-built plugins that admins upload.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documentation establishes built-in Metabot creating a persistent first-class generated app with an owner, permissions, and live governed data. Embedding Metabot or building an application on the Agent API requires customer application development.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not support the built-in assistant building persistent, governed standalone applications backed by live data.

### A_OR: Can an outside coding agent read a generated app?

**Result: Not found** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Metabase does not document generated apps, so there is no app definition for an outside agent to read through the MCP server, CLI or API.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented interface retrieves a generated app's definition from Metabase. The CLI reads analytical content and transforms; embedding skills work on the customer's application and do not expose a vendor-generated app object.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not document an interface or API for an outside coding agent to retrieve or inspect the definition of an AI-generated application.

### A_OW: Can an outside coding agent build a generated app?

**Result: Not found** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The CLI and MCP server let outside agents create questions, dashboards, collections and transforms. They do not create generated apps, and Metabase does not document generated apps.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented outside-agent interface creates a first-class generated app in Metabase. The CLI builds analytical content, while the embedding skills and Agent API support customer-built applications, which do not count as the vendor's generated-app feature.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not document an interface for an outside coding agent to build, author, or deploy AI-generated applications.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Partly** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can also run individual prompts to test Metabot's answers, or delete prompts that aren't useful."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Admins can rerun saved suggested prompts to check Metabot's answers. There are no expected answers, rubric or judge.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can also run individual prompts to test Metabot's answers, or delete prompts that aren't useful."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Admins can rerun saved suggested prompts to test Metabot's answers. This provides a limited repeatable check, without documented expected answers, correctness rubric, or judge.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can also run individual prompts to test Metabot's answers, or delete prompts that aren't useful."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Admins can rerun saved suggested prompts to test Metabot's answers, but Metabase does not provide expected answers, rubrics, or an LLM judge, earning partly.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "It lists the models from each working connection, grouped by connection and labeled with both the connection and the model, like "Anthropic · Claude Sonnet 4.6"."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Admins choose a specific named model version (for example Claude Sonnet 4.6) as the Default model that Metabot runs on. MB_LLM_METABOT_PROVIDER also takes a model id such as anthropic/claude-haiku-4-5.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "It lists the models from each working connection, grouped by connection and labeled with both the connection and the model, like "Anthropic · Claude Sonnet 4.6"."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Customers can select the model used by Metabot, including named model releases. The available pages do not establish an immutable model snapshot/version pin that remains fixed against provider updates.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "It lists the models from each working connection, grouped by connection and labeled with both the connection and the model, like "Anthropic · Claude Sonnet 4.6"."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Administrators can select the specific named model version from configured provider connections to power the Default model and Mini model for Metabot.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "**Conversation transcript**: the full message-by-message exchange."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: Conversation detail keeps the transcript, tool calls, generated queries and the profile. No page says it keeps the model version, configuration or a data snapshot.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- **Conversation transcript**: the full message-by-message exchange. Tool calls (search calls, query construction, etc.) are inlined. You can click "View" to open a modal with the info."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: Administrator auditing preserves the conversation, tool calls, and generated queries, but no complete record of input data snapshot, exact model, and configuration needed for full reproduction is established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The detail view is a full audit of a single conversation."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: Metabase preserves the full conversation transcript, inlined tool calls, persona profile, and generated SQL/MBQL queries with referenced tables in AI usage auditing, but does not capture a frozen data snapshot. Under the rule, kept chat history with the generated query but without data snapshot is partly.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Not found** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Metabot feedback is a thumbs up/down with an optional bug report, which does not count. Context is kept only within the current conversation or Slack thread. No page says a correction changes Metabot's later answers.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documentation describes conversation context and feedback that can submit a bug report, but does not state that a person's correction changes later Metabot answers or define the reach of such learning.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase documents thumbs up/down feedback on Metabot responses to file bug reports, but provides no mechanism where user corrections update the assistant's future answers across a defined reach.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Yes** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When turned on, Metabot only uses content that's [verified](../exploration-and-organization/content-verification.md), in an [official collection](../exploration-and-organization/collections.md#official-collections), or published to the [Library](../data-modeling/semantic-layer/library.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: An enforced setting limits Metabot to verified, official or Library content, which keeps it on certified definitions. Metabot also points users to an existing question instead of building a new one.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When turned on, Metabot only uses content that's [verified](../exploration-and-organization/content-verification.md), in an [official collection](../exploration-and-organization/collections.md#official-collections), or published to the [Library](../data-modeling/semantic-layer/library.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: The built-in assistant can be restricted to trusted content, but no documented rule checks a generated answer against the certified metric definition and prevents or flags a mismatch.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When turned on, Metabot only uses content that's [verified](../exploration-and-organization/content-verification.md), in an [official collection](../exploration-and-organization/collections.md#official-collections), or published to the [Library](../data-modeling/semantic-layer/library.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Under the "Verified or curated content" setting, Metabot is bound to use only verified questions, content in official collections, or published Library assets, ensuring answers align strictly with governed definitions.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Yes** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Once this limit is hit, Metabot stops responding to requests until the next reset."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: Token or message limits for the instance, a group or a tenant block Metabot once they are reached.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Total instance limit**: the total pool of tokens or messages across every person and group. Once this limit is hit, Metabot stops responding to requests until the next reset."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: An enforced token/message budget blocks further built-in-AI requests when exhausted, rather than merely reporting consumption.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Once this limit is hit, Metabot stops responding to requests until the next reset."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: Metabase provides instance, group, and tenant limits on token usage or message counts that block Metabot from responding once the cap is reached.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Not found** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: MCP analytics show a duration for each tool call, but MCP traffic comes from outside clients and is not the built-in AI. Metabot usage auditing reports conversations, tokens, messages, queries and searches, with no response time. Server-log response times are general HTTP timings.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI auditing reports usage, conversations, profiles, queries, and tokens; no built-in AI response-time measurement by agent, model, or evaluation run is established. MCP call duration measures outside-agent tool calls, and a maximum Metabot turn timeout is not measured answer latency.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While Metabase AI usage auditing reports message counts, token consumption, query counts, and search calls for Metabot, it does not record or report response latency or duration for built-in assistant turns on customer workloads.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Yes** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "On Metabase Pro/Enterprise, you also get access to detailed [AI usage auditing](usage-auditing.md) with detailed breakdown of AI usage by user, tool, feature etc."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: AI usage auditing breaks consumption down by user, group and tenant.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **User**: limit to a single person (or **All users**)."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: The Usage stats page applies these user/group rankings to selectable token, message, and conversation metrics, and supports filtering by user and group.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Usage stats page shows aggregate Metabot activity over a date range you choose, defaulting to the previous 30 days."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: AI usage auditing allows admins to view and filter Metabot token consumption and message counts broken down by user, group, and tenant.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Yes** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Queries generated**: every SQL or [query builder](../questions/query-builder/editor.md) (MBQL) query Metabot wrote during the conversation, with the referenced tables listed underneath."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: The conversation audit records the user, the full transcript with tool calls, and every query Metabot wrote with the tables it touched. This is specific to assistant activity.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Queries generated**: every SQL or [query builder](../questions/query-builder/editor.md) (MBQL) query Metabot wrote during the conversation, with the referenced tables listed underneath. Hit **Visit** on a query to open the item in a new tab and run it yourself."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: Metabot-specific conversation auditing records generated queries and referenced analytical tables; the same detail view identifies the person who chatted and includes tool-call transcripts.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- **Queries generated**: every SQL or [query builder](../questions/query-builder/editor.md) (MBQL) query Metabot wrote during the conversation, with the referenced tables listed underneath."
  - Source: https://www.metabase.com/docs/latest/ai/usage-auditing (checked 2026-10-26)
  - Reasoning: The conversation detail view in AI usage auditing records the user who chatted with Metabot, the prompt transcript, tool calls, and all queries generated along with the referenced tables affected.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The AI feature access table lets you toggle Metabot on or off per group, and pick what Metabot can do for each group."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: Admins can switch AI features on or off for each user group or tenant group.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The AI feature access table lets you toggle Metabot on or off per group, and pick what Metabot can do for each group."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: Administrators can enable or disable Metabot and individual AI capabilities per internal or tenant group.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The AI feature access table lets you toggle Metabot on or off per group, and pick what Metabot can do for each group."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: Admins can toggle Metabot and specific AI capabilities on or off for internal user groups and tenant groups.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can [sync Library content to version control](../../installation-and-operation/remote-sync.md), giving you change history and the ability to publish content across environments."
  - Source: https://www.metabase.com/docs/latest/data-modeling/semantic-layer/library (checked 2026-10-26)
  - Reasoning: A general Git publishing workflow (Remote Sync) exists for governed Library content. No page says Metabot's changes go through it or are held for an approver. Accepting or rejecting inline SQL suggestions is not approval.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Open a pull request so your team can review the YAML diff."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: Remote Sync supports development-to-production publishing through a team-reviewed Git PR. This is a general governed-content workflow documented for CLI agent development; the docs do not connect built-in Metabot changes to an enforced approval by another named person or role. The grading standard gives partial credit to the general publishing workflow.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Metabase will suggest edits that you can accept or reject."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: In inline SQL editing, Metabot suggests edits that the user accepts or rejects, and any chart created remains a draft until saved. A prompt shown only to the requester or a draft the user publishes is partly.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Yes**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Set this when a self-hosted vLLM server is on your private network (allow-private) or on this machine (allow-all)."
  - Source: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables (checked 2026-10-26)
  - Reasoning: Customers can run the model for the built-in AI features on their own infrastructure (self-hosted vLLM or Ollama) or pick provider endpoints and regions (for example Bedrock region). All built-in features run on the Default/Mini model the customer chooses.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Set this when a self-hosted vLLM server is on your private network (allow-private) or on this machine (allow-all)."
  - Source: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables (checked 2026-10-26)
  - Reasoning: The LLM provider-network setting explicitly supports a customer-hosted vLLM inference server on the private network or local machine; the same page documents custom provider URLs and Metabot model selection.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For Ollama, if `MB_LLM_OLLAMA_API_BASE_URL` points a connection at a different server (such as Ollama Cloud at `https://ollama.com/v1`), Metabase won't send an API key entered in the UI there: set `MB_LLM_OLLAMA_API_KEY` too."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabase supports self-hosted local inference with Ollama running in the customer's cloud/host/tenant, as well as configurable provider base URLs and Azure/Bedrock deployments.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Metabot inherits the permissions of the person it's chatting with, so you don't need to set permissions specifically for Metabot."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabot answers as the person asking, so their data permissions (including row and column security) apply. Slack Metabot also uses the linked user's permissions. Caveat: an answer posted in a public channel is visible to everyone there.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Metabot inherits the permissions of the person it's chatting with, so you don't need to set permissions specifically for Metabot."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabot uses the requester's data and collection permissions. Scope is limited because Metabot also reads saved SQL questions, whose results the row-and-column-security documentation explicitly says are not filtered by those policies.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Metabot inherits the permissions of the person it's chatting with, so you don't need to set permissions specifically for Metabot."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabot executes queries strictly under the asking user's identity and group permissions, so row-level and column security rules apply to its results.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Result rows are sent to the LLM provider."
  - Source: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables (checked 2026-10-26)
  - Reasoning: The docs name the receiving service (the configured LLM provider) and part of what it receives (result rows). They do not say how long the provider keeps it. The AI privacy page is linked but not in this corpus.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Result rows are sent to the LLM provider."
  - Source: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables (checked 2026-10-26)
  - Reasoning: The Metabot query-execution setting states that result rows go to the selected LLM provider; this page names provider endpoints and documents local audit retention. It does not establish all prompt/data payloads and retention by each receiving provider.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Result rows are sent to the LLM provider."
  - Source: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables (checked 2026-10-26)
  - Reasoning: Metabase documents the receiving service (the configured LLM provider) and what it receives (result rows), but does not state retention periods for data received by the provider, earning partly.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The AWS region for Amazon Bedrock (e.g. us-east-1)."
  - Source: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables (checked 2026-10-26)
  - Reasoning: Processing regions are documented only for some provider connections (Bedrock region, Google location). Nothing covers where AI data is stored or where the Metabase AI service runs.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The AWS region for Amazon Bedrock (e.g. us-east-1)."
  - Source: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables (checked 2026-10-26)
  - Reasoning: The built-in-AI provider configuration identifies the Bedrock processing region and a Google location setting. The corpus does not document storage regions or processing/storage regions for every AI feature and provider.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The AWS region for Amazon Bedrock (e.g. us-east-1)."
  - Source: https://www.metabase.com/docs/latest/configuring-metabase/environment-variables (checked 2026-10-26)
  - Reasoning: Processing regions are documented for certain external provider connections such as Amazon Bedrock (and Google Cloud location), but Metabase does not document where AI data is stored or the processing regions for the hosted Metabase AI service across all features, earning partly.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Not found**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The corpus never says whether customer data is used to train AI models. The AI privacy page (ai/privacy) is linked from ai/start and ai/settings but is not in the corpus.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No default statement that customer data is not used to train AI models was found. AI settings and the AI index link to a privacy page, but that page is absent from this local corpus; its contents cannot be inferred.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The documentation corpus in this room does not contain a statement specifying that customer data is excluded by default from training AI models (the AI privacy page is linked but absent from the corpus).

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When turned on, Metabot only uses content that's [verified](../exploration-and-organization/content-verification.md), in an [official collection](../exploration-and-organization/collections.md#official-collections), or published to the [Library](../data-modeling/semantic-layer/library.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: An admin setting, separate from user permissions, limits Metabot across the instance to curated content. The collection scope for embedded Metabot is weaker: the docs say it is not a permission boundary.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When turned on, Metabot only uses content that's [verified](../exploration-and-organization/content-verification.md), in an [official collection](../exploration-and-organization/collections.md#official-collections), or published to the [Library](../data-modeling/semantic-layer/library.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: An administrator can enforce a verified/curated-content allowlist for Metabot separately from ordinary user permissions. This verdict relies on that explicit only-uses rule, not the collection search scope that users can bypass with mentions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When turned on, Metabot only uses content that's [verified](../exploration-and-organization/content-verification.md), in an [official collection](../exploration-and-organization/collections.md#official-collections), or published to the [Library](../data-modeling/semantic-layer/library.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Admins can enable the "Verified or curated content" setting to restrict Metabot across the workspace to only verified items, official collections, and Library tables, independently of individual user permissions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The token gets all the [permission scopes](#permission-scopes), unless you ask for fewer with a space-separated `scope` parameter."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: Outside agents can get MCP tokens with fewer scopes (for example read-only content plus query). Admins can also limit MCP tools per group. Both are narrower than the person's full access.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The token gets all the [permission scopes](#permission-scopes), unless you ask for fewer with a space-separated `scope` parameter."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: Headless MCP JWT authentication can request only read/query scopes, yielding an outside-agent token narrower than the human's full permissions; group-level tool controls provide additional enforcement.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The token gets all the [permission scopes](#permission-scopes), unless you ask for fewer with a space-separated `scope` parameter."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: When requesting a headless JWT access token for an agent, clients can request a subset of permission scopes (e.g., `agent:content:read agent:query:run`), restricting the agent narrower than the user's full permissions.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside agent can read the queries and transform definitions and work out their sources. The dependency graph is documented only as a Data Studio UI, with no agent interface.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- To preserve a native query's multi-line format, remove trailing whitespace from native queries. If your native query has trailing whitespace, YAML will convert your query to a single string literal (which only affects presentation, not functionality)."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/serialization (checked 2026-10-26)
  - Reasoning: The supported serialization API exports questions and models with their native SQL, so an outside agent can inspect that logic and infer sources. The documented dependency graph is a human UI; no outside-agent lineage-traversal interface is established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside agent driving the Metabase CLI can read queries and transform definitions to infer upstream data sources and transformations, but Metabase's visual dependency graph is documented only as a Data Studio UI with no dedicated programmatic lineage traversal interface for outside agents, earning partly.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Partly** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The **Tool calls** tab lists each call with its tool, client, user, status, duration, and error type."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: MCP analytics logs each outside-agent call with the client and user. It does not list the analytical objects affected.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The **Tool calls** tab lists each call with its tool, client, user, status, duration, and error type."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: MCP-specific logs attribute outside-agent tool calls to client and user. The documented fields do not identify the affected dashboard, question, table, or other analytical object, limiting coverage.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The **Tool calls** tab lists each call with its tool, client, user, status, duration, and error type."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: In MCP analytics, Metabase logs each tool call made by outside agents with client, user, status, duration, and tool name, but does not distinguish the specific analytical objects affected.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Open a pull request so your team can review the YAML diff."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: In the documented agent-driven workflow, the agent's content goes through a PR that the team reviews. The read-only production instance picks it up only after merge, so other people approve the agent's changes first.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Open a pull request so your team can review the YAML diff."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: The agent-specific development workflow stages changes in a development instance and uses a PR before production sync. It does not require approval by a distinct named person or role or enforce separation from the requester.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Open a pull request so your team can review the YAML diff."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: Agent-driven development documents creating content in a dev instance and pushing changes to a repository via Remote Sync where a team reviews the YAML diff in a pull request before merging to production. This Git PR review workflow is partly.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Yes** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Open a pull request so your team can review the YAML diff."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: Reviewers see a YAML diff of the content the outside agent created or changed. The docs explicitly cover agent changes.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Open a pull request so your team can review the YAML diff."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: This review step is explicitly in the agent-created-dashboard workflow, so reviewers can inspect the YAML diff of changes made by the outside coding agent.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Open a pull request so your team can review the YAML diff."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: Agent-driven development explicitly defines a workflow where agent changes are serialized as YAML and reviewed as a YAML diff in a pull request.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Revert to a commit and pull changes**: Revert to a previous commit, and pull that commit into your Metabase. Pulling that commit would overwrite any changes you or the agent had made."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: The 'Undoing the agent's changes' section documents rolling back an outside agent's changes. Item version history also allows reverts.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Revert to a commit and pull changes**: Revert to a previous commit, and pull that commit into your Metabase. Pulling that commit would overwrite any changes you or the agent had made."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: The section on undoing the agent's changes explicitly documents restoring an earlier commit into Metabase.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- **Revert to a commit and pull changes**: Revert to a previous commit, and pull that commit into your Metabase."
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: The "Undoing the agent's changes" section describes reverting to a previous Git commit and pulling it via Remote Sync to overwrite agent changes.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Metabase includes an [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server that lets AI clients connect directly to your Metabase, all scoped to the connecting person's permissions."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: Metabase supports a built-in MCP server with OAuth 2.0 authentication that reaches the customer's content and data. It is not labeled beta.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "MCP clients authenticate with Metabase using OAuth 2.0."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: Metabase ships a supported MCP server at its instance endpoint, including on Metabase Cloud, with an embedded OAuth server and authenticated access to analytical content and data. The available pages do not label it beta or preview.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Metabase includes an [MCP (Model Context Protocol)](https://modelcontextprotocol.io/) server that lets AI clients connect directly to your Metabase, all scoped to the connecting person's permissions."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: Metabase provides an embedded MCP server (`/api/metabase-mcp`) supporting OAuth 2.0 and JWT authentication for outside agents like Claude Code.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The MCP server gives your agent tools for searching, browsing, querying, and creating content in your Metabase."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: MCP search and browse tools, and the Agent API's search for tables and metrics, let an outside agent list what exists.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- `GET /api/collection/tree` and `GET /api/collection/:id/items` These API endpoints will always return official collections first, before other items in the collection."
  - Source: https://www.metabase.com/docs/latest/developers-guide/api-changelog (checked 2026-10-26)
  - Reasoning: The documented API enumerates the collection tree and collection contents without requiring a known dashboard/question ID. Outside agents can use these authenticated APIs; MCP also documents browsing and searching.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The MCP server gives your agent tools for searching, browsing, querying, and creating content in your Metabase."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: The MCP server provides outside agents with tools to browse and search existing tables, metrics, and content across Metabase.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "MCP clients authenticate with Metabase using OAuth 2.0."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: Named credential types are documented: OAuth 2.0 tokens and JWT bearer for MCP, plus API key, session token or JWT for the Agent API and CLI.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Log in with a Metabase username and password to get a session token, then pass it in subsequent requests."
  - Source: https://www.metabase.com/docs/latest/ai/agent-api (checked 2026-10-26)
  - Reasoning: The page specifies API keys in X-API-Key, Metabase session tokens, and signed JWT bearer authentication, including concrete headers and token acquisition steps for outside clients.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Agent API supports three authentication methods."
  - Source: https://www.metabase.com/docs/latest/ai/agent-api (checked 2026-10-26)
  - Reasoning: Metabase documents API keys, session tokens, and JWTs for programmatic access by outside agents to the Agent API and MCP server.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The CLI ships with its own agent skills, so the instructions your agent reads always match the version of the CLI it's running."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: Metabase publishes the metabase-cli agent skill and a Claude Code plugin, plus embedding agent skills.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The CLI ships with its own agent skills, so the instructions your agent reads always match the version of the CLI it's running."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: Metabase publishes a metabase-cli skill and Claude Code plugin, with installation commands and version-matched bundled instructions for outside coding agents.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Add the [`/metabase-cli` skill](https://github.com/metabase/agent-skills/tree/main/skills/metabase-cli) to your agent so it knows how to use the CLI to create content directly in your Metabase:"
  - Source: https://www.metabase.com/docs/latest/ai/agent-driven-development (checked 2026-10-26)
  - Reasoning: Metabase publishes official agent skills (such as `/metabase-cli` from `metabase/agent-skills`) that teach coding agents to use Metabase.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The CLI is built to be driven by an AI coding agent like Claude Code."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: The vendor's `mb` CLI is documented for AI agents and supports non-interactive login (MB_API_KEY or stdin).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The CLI is built to be driven by an AI coding agent like Claude Code."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: The supported mb CLI explicitly targets coding agents; the same page documents non-interactive API-key authentication through an environment variable or stdin with a profile.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The CLI is built to be driven by an AI coding agent like Claude Code."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: The Metabase CLI (mb) is officially documented for use by AI coding agents, including headless script authentication with API keys.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Yes** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "MCP tools access lets you choose which [MCP server](./mcp.md) tools each group's AI clients can use."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: Per-group MCP tool access is an admin control separate from data and collection permissions. People with no tools cannot connect at all.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **People with no tools can't connect.** People need to be in at least one group with access to tools to the MCP server."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: Administrators can allow or block MCP tools per group independently of data/collection permissions, and denying every tool blocks that group's outside-agent connections.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "MCP tools access lets you choose which [MCP server](./mcp.md) tools each group's AI clients can use."
  - Source: https://www.metabase.com/docs/latest/ai/usage-controls (checked 2026-10-26)
  - Reasoning: Admins can configure MCP tools access per user group, and blocking all tools prevents people in that group from connecting outside agents to the MCP server.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Not found** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI usage limits cap Metabot traffic only. The MCP page says MCP calls don't count against the AI connection, and usage auditing excludes MCP. MCP tools access allows or blocks tools but does not cap consumption. The Agent API's 200-row page size can be paged past and is not a usage cap. No rate limit is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Documented token and message caps cover Metabot traffic. MCP calls do not use that AI connection, and the Agent API's 200-row pagination limit is a result-size bound. No outside-agent consumption cap or applicable API rate limit was found.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While Metabase provides token and message usage limits for the built-in Metabot under AI usage controls, it documents no rate limits, spending caps, or quotas for outside agents accessing the MCP server, Agent API, or CLI.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Metabot can look up terms in the glossary to better understand your request."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Business terms can be defined in the glossary, plus descriptions and system prompts, and Metabot (the vendor assistant) reads them before answering.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Metabot can look up terms in the glossary to better understand your request."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: The built-in assistant reads glossary business definitions, including the documented MRR example, and can also receive standing business conventions in system prompts.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Add your organization's terminology, acronyms, and business-specific terms to the [glossary](../data-modeling/semantic-layer/glossary.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabase enables users to define domain-specific terms and business logic in the glossary and system prompts, which Metabot reads before answering.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When you sync the Library, Metabase also syncs your SQL snippets and [glossary](glossary.md) terms."
  - Source: https://www.metabase.com/docs/latest/data-modeling/semantic-layer/library (checked 2026-10-26)
  - Reasoning: Glossary terms, table metadata and Metabot prompts are serialized to YAML and synced to Git with Remote Sync, so they can be diffed, reviewed and rolled back.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When you sync the Library, Metabase also syncs your SQL snippets and [glossary](glossary.md) terms."
  - Source: https://www.metabase.com/docs/latest/data-modeling/semantic-layer/library (checked 2026-10-26)
  - Reasoning: The Library's versioning section explicitly puts the business glossary used by Metabot in version control with change history and cross-environment publishing.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Check the exported files into version control and audit changes to them, as the YAML files contained within the export are pretty readable."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/serialization (checked 2026-10-26)
  - Reasoning: Metabase exports glossary entries, data model descriptions, and Metabot configuration/prompts as serialized YAML files that can be version controlled in Git.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Partly**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Add descriptions to your [models](../data-modeling/models/models.md#add-metadata-to-columns-in-a-model), [metrics](../data-modeling/semantic-layer/metrics.md), [dashboards](../dashboards/introduction.md), and [questions](../questions/introduction.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Context can be attached to individual models and metrics through descriptions. System prompts and the glossary are instance-wide, so different teams cannot get different context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Add descriptions to your [models](../data-modeling/models/models.md#add-metadata-to-columns-in-a-model), [metrics](../data-modeling/semantic-layer/metrics.md), [dashboards](../dashboards/introduction.md), and [questions](../questions/introduction.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabot business context can be attached to particular models, metrics, and analytical assets, allowing teams using different models to have different contextual definitions. This is model/asset scope, not a claim of separate team-wide system prompts.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Write descriptions to provide context, define terms, and explain business logic."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Business context can be scoped to individual models, metrics, dashboards, and questions via descriptions, but broader context like system prompts and the glossary are configured globally instance-wide rather than scoped to specific teams, earning partly.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Partly**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The [Metabase Representation Format](https://github.com/metabase/representations) repository contains the full specification for the YAML format used by serialization, including schemas for each entity type, examples, and an [NPM validation package](https://www.npmjs.com/package/@metabase/representations) you can use to validate YAML files."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/serialization (checked 2026-10-26)
  - Reasoning: The same page lists 'Glossary entries (data definitions)', 'Data model and table metadata' and 'Metabot configuration (AI assistant settings and prompts)' among serialized entities. That is the business context Metabot reads. The named NPM validation package checks those YAML files before they are imported and take effect. This is partial scope: it checks structure only. No documented preview or test step shows how the context changes Metabot's answers before it goes live. The page states no beta or preview label, so the release stage is generally available.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The [Metabase Representation Format](https://github.com/metabase/representations) repository contains the full specification for the YAML format used by serialization, including schemas for each entity type, examples, and an [NPM validation package](https://www.npmjs.com/package/@metabase/representations) you can use to validate YAML files."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/serialization (checked 2026-10-26)
  - Reasoning: The same page explicitly includes glossary entries, table metadata, and Metabot settings and prompts in serialized content. Its named schema-validation package therefore supports checking the structure of this business context before import. This is partial scope: it does not document a context-specific test of the built-in assistant's answer behavior before publication.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The [Metabase Representation Format](https://github.com/metabase/representations) repository contains the full specification for the YAML format used by serialization, including schemas for each entity type, examples, and an [NPM validation package](https://www.npmjs.com/package/@metabase/representations) you can use to validate YAML files."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/serialization (checked 2026-10-26)
  - Reasoning: Business context used by Metabot (glossary entries, table metadata, and Metabot configuration/prompts) is exported as serialized YAML files that can be validated prior to import using the documented @metabase/representations NPM validation package, earning partly.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Not found**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page says a Metabot answer shows the glossary term, description or system-prompt instruction that shaped it. The admin transcript shows tool calls inline, but no page says it identifies which context shaped the answer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The docs establish that Metabot can read descriptions, system prompts, and glossary terms, but do not say an answer surfaces the specific business instruction, description, or glossary rule that shaped it. The audit's referenced-table list does not identify applied business context.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase answers do not display or cite the specific business context, instruction, or glossary definition that shaped them.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Not found**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Metabot uses descriptions that admins type into Metabase's table metadata, models and metrics. No page says Metabase ingests warehouse column comments or dbt docs as descriptions. The metadata pages describe only in-product editing.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Metabot is documented using descriptions curated inside Metabase. No evidence establishes importing warehouse column comments or dbt documentation and providing those imported descriptions as AI context. Schema sync documents names, types, keys, and sampled values.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not document ingesting column descriptions, dbt documentation, or database comments from the warehouse to supply context to the AI.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Yes**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If you turn on Metabot's [Verified or curated content](../../ai/settings.md#verified-or-curated-content) setting, Metabot will only use content that's verified, in an official collection, or published to the Library."
  - Source: https://www.metabase.com/docs/latest/data-modeling/semantic-layer/library (checked 2026-10-26)
  - Reasoning: This setting applies only to the AI. With it on, any table, question or metric that is not verified or published (or a table whose visibility layer is not Final) is out of Metabot's reach, while people still see it.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When turned on, Metabot only uses content that's [verified](../exploration-and-organization/content-verification.md), in an [official collection](../exploration-and-organization/collections.md#official-collections), or published to the [Library](../data-modeling/semantic-layer/library.md)."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: The AI-specific trusted-content setting excludes tables and saved answers outside its allowlist, independently of ordinary permissions. Content must be outside all three allowed categories to be excluded; this is not a per-column deprecation claim.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "System prompts can only influence Metabot's behavior, not its access."
  - Source: https://www.metabase.com/docs/latest/ai/system-prompts (checked 2026-10-26)
  - Reasoning: Admins can instruct Metabot in system prompts to avoid specific tables or fields. Guidance written into the AI's instructions telling it not to use something is followed by the model but not enforced, which earns partly.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Use this owner attribute to let people know who on your team is responsible for which table."
  - Source: https://www.metabase.com/docs/latest/data-modeling/metadata/managing-tables (checked 2026-10-26)
  - Reasoning: Tables, and the metadata the AI reads from them, can have a named owner, and Data Analysts curate the Library. No review or approval step for context changes is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Use this owner attribute to let people know who on your team is responsible for which table."
  - Source: https://www.metabase.com/docs/latest/data-modeling/metadata/managing-tables (checked 2026-10-26)
  - Reasoning: Metabase supports a named responsible owner for a table, whose descriptions and field metadata supply business context to built-in Metabot according to AI settings. This is partial ownership coverage; no review or approval step for business-context changes is documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Table **owner** can be a Metabase user or an arbitrary email address."
  - Source: https://www.metabase.com/docs/latest/data-modeling/metadata/managing-tables (checked 2026-10-26)
  - Reasoning: Metabase documents an owner attribute for tables to assign responsibility for data assets, but lacks a review/approval step for changes. Under the rule, a named owner role with no review step is partly.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Not found** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page says Metabot reads warehouse-level logic such as dbt models, view definitions or semantic views. It uses Metabase's own semantic layer (Library, metrics, models, glossary).
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documentation establishes built-in Metabot reading warehouse view definitions, dbt code, or other warehouse-level analytical logic. Querying a view or reading schema metadata does not establish reading its underlying logic; the CLI's transform-reading capability is for outside agents.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabot does not read warehouse-level logic like dbt models, database views, or stored procedures, inspecting only table and column metadata.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Metabase transforms write tables to the warehouse, but no transforms page mentions Metabot or AI. Metabot's documented writes are query-builder questions and SQL in the editor (which it doesn't run).
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Transforms can create persistent warehouse tables, but no documentation connects authoring those transforms to built-in Metabot. General SQL generation in the analytics editor does not establish writing warehouse logic, and the SQL editor explicitly does not support DDL.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabot does not write or author logic that lands in the customer's warehouse (such as database views, transforms, or DDL).

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside agent can read transforms through the CLI. Transforms are the SQL or Python logic that builds tables in the warehouse.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: The vendor's CLI explicitly lets an outside AI agent read transforms through Metabase. The transforms overview defines these objects as SQL/query-builder queries or Python scripts that create persistent warehouse tables, so their definitions are warehouse transformation logic rather than just table names or types.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside coding agent using the Metabase CLI can read transforms, which are documented as the queries or Python scripts that run and create persistent tables in the database warehouse.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside agent can write transforms through the CLI. Transforms create persistent tables in the customer's warehouse.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: The supported outside-agent CLI can author transforms. The transforms documentation establishes that those SQL/query-builder/Python definitions create persistent tables in the connected warehouse, so this is a documented warehouse-writing object rather than arbitrary SQL execution.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside AI agent can write transforms using the Metabase CLI, which execute queries or Python scripts that persist tables directly back into the warehouse.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Not found**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents importing metric definitions from dbt, Cube or Snowflake semantic views. Metrics are defined in Metabase's own semantic layer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented consumption of externally maintained dbt, Cube, MetricFlow, or Snowflake semantic-view metric definitions was found. Metabase's own Library and serialization of its own metrics do not establish importing an outside semantic model.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Metabase does not support consuming or importing metric definitions maintained outside the tool in dbt MetricFlow, Cube, or Snowflake semantic views.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The semantic layer is a collection of curated tables (together with their [segments](segments.md) and [measures](measures.md)), [metrics](metrics.md), and [SQL snippets](../../questions/native-editor/snippets.md) that people and AI can use to build authoritative questions and dashboards."
  - Source: https://www.metabase.com/docs/latest/data-modeling/semantic-layer/library (checked 2026-10-26)
  - Reasoning: The semantic layer's metrics, segments and measures are documented for AI use. Metabot searches metrics and uses segments and measures in queries.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Search.** Metabot can only search for tables, metrics, questions, models, and dashboards. It can't discover segments, measures, documents, collections, actions, or indexed entities on its own — but it can use segments and measures in ad-hoc queries (for example, filtering by a segment)."
  - Source: https://www.metabase.com/docs/latest/ai/metabot (checked 2026-10-26)
  - Reasoning: The built-in assistant explicitly uses shared measures and segments in queries, and embedded Metabot also builds on shared metrics and models.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To build that question, embedded chat first searches your Metabase for the best thing to build on: a [metric](../data-modeling/semantic-layer/metrics.md), a [model](../data-modeling/models/models.md), a saved question, or a table (tables drop out once you [scope the chat to a collection](#set-up-ai-chat-in-metabase))."
  - Source: https://www.metabase.com/docs/latest/embedding/ai-chat (checked 2026-10-26)
  - Reasoning: The built-in assistant searches and answers using metrics, models, segments, and measures defined in Metabase's semantic layer.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can even ask Metabot to write descriptions for you."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabot can write descriptions. No page says it creates or edits metrics, segments or measures, and embedded chat explicitly won't create metrics.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can even ask Metabot to write descriptions for you."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: In the section on model and metric descriptions, Metabot can write contextual documentation. No available page establishes that the built-in assistant creates or edits shared metric formulas, dimensions, or joins; embedded chat explicitly cannot create metrics/models.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can even ask Metabot to write descriptions for you."
  - Source: https://www.metabase.com/docs/latest/ai/settings (checked 2026-10-26)
  - Reasoning: Metabot can generate descriptions for data models, tables, and metrics, but cannot create or edit definitions themselves. Under M_IW rule, writing descriptions or documentation for existing definitions only is partly.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The [Agent API](../api.html#tag/apiagent) is a REST API for building headless, agentic BI applications on top of Metabase's semantic layer, scoped to an authenticated user's permissions."
  - Source: https://www.metabase.com/docs/latest/ai/agent-api (checked 2026-10-26)
  - Reasoning: The Agent API (which powers MCP) gives outside agents the semantic layer: they can search tables and metrics and inspect their fields.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "It will include YAML files for every database, table, field, segment, and metric."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/serialization (checked 2026-10-26)
  - Reasoning: The documented serialization API exports the shared layer as YAML, including data-model/table metadata, models, metrics, glossary entries, and field definitions. An authenticated outside agent can inspect definitions and descriptions rather than only column names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The [Agent API](../api.html#tag/apiagent) is a REST API for building headless, agentic BI applications on top of Metabase's semantic layer, scoped to an authenticated user's permissions."
  - Source: https://www.metabase.com/docs/latest/ai/agent-api (checked 2026-10-26)
  - Reasoning: Outside agents can read shared metrics, models, and table metadata through the Agent API and MCP server.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "`agent:content:write`: create, edit, and trash Metabase content."
  - Source: https://www.metabase.com/docs/latest/ai/mcp (checked 2026-10-26)
  - Reasoning: MCP and the CLI give outside agents general write access to Metabase content. No page names metrics, segments or measures as writable through them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Import** will read those exported YAML files and create or update those serialized items in the target Metabase."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/serialization (checked 2026-10-26)
  - Reasoning: The same page documents API imports and explicitly includes metrics, measures, segments, models, glossary entries, and data-model metadata in the serialized inventory; external clients can update the shared definitions through this supported interface.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "`mb` logs in to a Metabase instance and lets you or an AI agent read and write content over the Metabase API: questions, dashboards, collections, transforms, and more."
  - Source: https://www.metabase.com/docs/latest/installation-and-operation/metabase-cli (checked 2026-10-26)
  - Reasoning: An outside agent using the Metabase CLI can write and update shared entities including models, metrics, and transforms via the API and YAML representations.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Yes**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Runs the transform to create the output table in your database."
  - Source: https://www.metabase.com/docs/latest/data-modeling/transforms/query (checked 2026-10-26)
  - Reasoning: Models can be converted to transforms that write tables into the warehouse, and content is repointed to them. The logic itself stays in Metabase as a transform, not as warehouse code.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Conversion creates a transform from the model's query, runs it to produce the output table, and then updates all questions and dashboards that used the model to use the transform's table instead."
  - Source: https://www.metabase.com/docs/latest/data-modeling/models/models (checked 2026-10-26)
  - Reasoning: The documented model-to-transform conversion moves a BI-authored model calculation into a maintained warehouse table and redirects dependent BI content to it.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Transforms allow you to wrangle your data in Metabase, write the query results back to your database, and reuse them in Metabase as sources for new queries."
  - Source: https://www.metabase.com/docs/latest/data-modeling/transforms/transforms-overview (checked 2026-10-26)
  - Reasoning: Metabase transforms execute queries or Python scripts and write the results back as persistent tables directly in the target database warehouse.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "[Ask a question][question] using either the query builder or the SQL editor, or select an existing saved question that you want to convert to a model."
  - Source: https://www.metabase.com/docs/latest/data-modeling/models/models (checked 2026-10-26)
  - Reasoning: Any saved question, including its custom calculated columns, can be turned into a shared model with 'Turn this into a model'. No developer rewrite is needed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "1. [Ask a question][question] using either the query builder or the SQL editor, or select an existing saved question that you want to convert to a model."
  - Source: https://www.metabase.com/docs/latest/data-modeling/models/models (checked 2026-10-26)
  - Reasoning: The create-model-from-saved-question workflow directly converts an existing analysis into a reusable model, preserving its query and calculated columns without a developer re-expressing the calculation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can turn a question saved to a collection into a model to let others know that the results make a good starting point for new questions."
  - Source: https://www.metabase.com/docs/latest/questions/introduction (checked 2026-10-26)
  - Reasoning: Metabase provides a direct path to turn any question saved in a collection into a shared model without rewriting the logic.

