# Mode: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/mode/

AI Feature Score **44**, #13 of 15 (BI and analytics tool). Built-in AI 18, external AI 57, other 65. Analysis 17, Building and maintaining assets 62, Context and connections 64, Reliability and controls 31. By model: Claude Opus 5.5 36, GPT-6.1 Sol 44, Gemini 3.8 Flash 44.

## Score breakdown

Four areas, 25 points each. Shown for Gemini 3.8 Flash, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 4.2 of 25
- Building and maintaining assets: 15.6 of 25
- Context and connections: 16.1 of 25
- Reliability and controls: 7.8 of 25

**Strengths**

- AI data flow is documented
- Outside agents read chart logic
- Metrics imported from your warehouse

**Not found in the docs**

- It has a CLI built for agents
- Choose where model inference runs
- You can tell it what NOT to use

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Using AI Assist does not require you to write full SQL queries from scratch."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist, the built-in assistant, writes a complete query from a natural-language description in --! comments. The page's example turns 'total sales by manager' into a full query with joins and GROUP BY, inside the SQL editor. The user must name at least one table, but they do not have to write the SQL. The guidance counts query generation from plain English in a code editor as yes. No beta or preview label appears. Access is enabled per account on request.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Using AI Assist does not require you to write full SQL queries from scratch."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode demonstrates starting a query with a natural-language sales request plus table names; AI Assist supplies the working SELECT, calculation, join and grouping. The row explicitly allows query generation inside an editor.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Incorporate natural language into your edits by adding a special AI comment type via the --! symbol combination"
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist assists and completes SQL code the user is writing in the editor by interpreting natural language instructions embedded within `--!` comment tags, rather than answering questions from scratch without SQL.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Partly** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "One of the primary benefits of the workflow is the ability to integrate natural language seamlessly into SQL code you've already written to quickly iterate."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist, Mode's built-in assistant, lets a user refine its earlier output: the user inserts the generated SQL, adds another --! natural-language edit and regenerates, and the SQL already in the editor carries the earlier step. The page documents no conversation thread or chat memory, though. Refinement works through the SQL in the editor, not through the assistant holding a dialogue, so the row is only partly met.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI Assist allows editing the current SQL and regenerating it. No documented conversation history or follow-up question interpreted from an earlier answer was found; revising editor contents does not establish a conversational thread.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Alternatively, you can revise your edits on the left and regenerate"
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist allows users to iteratively refine SQL by inserting generated code into the editor, adding further natural language comments (--!), and clicking regenerate. However, Mode lacks a persistent conversational chat thread holding conversation state.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Once the generated code returns, you can compare it with your original code, insert the SQL in place of your original edits (Shift + Opt/Alt + I), or copy and paste manually as needed."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: The assistant's answer is the generated SQL itself. It is shown to the user and can be compared with the original, so the query used is fully exposed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Once the generated code returns, you can compare it with your original code, insert the SQL in place of your original edits (Shift + Opt/Alt + I), or copy and paste manually as needed. Alternatively, you can revise your edits on the left and regenerate"
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist returns the actual generated SQL in a separate pane for comparison and inspection, exposing its analytical calculation and query logic.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Once the generated code returns, you can compare it with your original code, insert the SQL in place of your original edits (Shift + Opt/Alt + I), or copy and paste manually as needed."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist exposes the complete generated SQL query in the AI Assist interface so users can inspect, compare, and verify the analytical query before execution.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Not found** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist returns generated SQL, which names tables and columns. Under the row definition, query text counts for V3, not here. No field list or citation attached to an AI Assist answer is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI Assist receives table and column metadata and returns SQL. No table, column, or metric citation attached to its answer separately from the generated SQL was found. The dbt table list is report freshness metadata, not a documented AI-answer citation.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode AI Assist only outputs SQL syntax in the code editor and does not display an attached citation list of specific tables, columns, or metrics used.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Not found** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Mode documents uploading .csv/.tsv/.xlsx files into Datasets, but that page never connects the uploads to AI Assist. AI Assist is documented as working on SQL for warehouses the user has Query access to. A file-upload page alone is nothing found.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Local File Uploads and Native Spreadsheet document CSV, TSV, and XLSX analysis by users. Neither connects uploaded-file contents to analysis by AI Assist, whose documented context is warehouse metadata and SQL edits.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While users can upload CSV or spreadsheet files as Datasets in Mode, AI Assist operates exclusively in the SQL query editor on connected databases and cannot analyze uploaded files.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Partly** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Refine data scopeDescribe how you want to limit your data, have AI define the WHERE clause`--! exclude returns`"
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist can write SQL that filters and reshapes data (WHERE clauses, title-case aliasing). The SQL is inspectable transformation code. The scope is limited, though: the AI only generates editor SQL, and the user must insert and run it. The AI does not clean or reshape the data itself.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Notice that the explicit column names, join, and sales calculation have all been completed, and that a GROUP BY clause has been added."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: The demonstrated AI-generated SQL joins and aggregates the source data into a reshaped result and remains visible for inspection. The same page documents alias formatting and data-scope edits; the artifact is SQL rather than an opaque transformation.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "We can insert this code to run the SQL and use the results."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist generates SQL to filter, reshape, and transform data (e.g., adding WHERE clauses, GROUP BY, and aggregations) leaving behind inspectable SQL code in the editor, but the AI only generates the editor SQL which the user must insert and execute rather than directly cleaning the data.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Not found** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist's example joins two tables in one warehouse, which counts as one source. Combining several databases is documented only for Python/R/JavaScript in the Notebook, not for the AI. The querying page also says you cannot JOIN across connections in a single query. No AI-driven blend of two sources is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI Assist demonstrates joining two tables in one warehouse. Data Mashup documents joins across warehouses and datasets, but does not document AI Assist performing those joins. Neither establishes the built-in AI combining distinct sources.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode AI Assist generates SQL within the context of a single connected warehouse and cannot combine, join, or blend multiple disparate data sources in a single AI analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Not found** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist is documented only as generating SQL in the editor. No page says the AI selects or creates a chart.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The AI Assist page documents SQL generation. Chart and Dataset pages describe users selecting and building visualizations; no evidence was found that the built-in AI selects a visualization suited to the question and creates it.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode AI Assist only generates SQL code in the query editor; it does not choose, recommend, or create visualizations or charts.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist can write a month-over-month growth calculation on request. That is writing SQL, not breaking a change down into contributing segments. No contribution analysis by the AI is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The search found no documented built-in AI driver or contribution analysis. AI Assist can generate month-over-month growth SQL, but this does not establish identifying contributing factors, even without a checkable contribution calculation.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode has no AI feature that performs automated root-cause analysis or breaks down metric changes into contributing factors with checkable calculations.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Not found** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No forecasting by AI Assist, or by any Mode AI, appears in the corpus.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented AI-produced forecast was found. Notebook predictive modeling is an analyst capability, with no statement that AI Assist drives it or exposes forecast assumptions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode's AI Assist generates SQL queries and has no capability to generate predictive forecasts or expose forecasting assumptions.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The only what-if mention is the Native Spreadsheet's Redo function, which is a manual feature and not AI. No AI scenario comparison is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Native Spreadsheet mentions user-driven what-if analysis through undo and redo. No documented built-in AI calculation of what-if scenarios, assumptions, or comparable results was found.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode has no AI capability to define, calculate, or compare what-if scenarios with explicitly stated changed assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Mode's dbt integration shows a 'Source data last refreshed' time on Reports, but that page never connects it to AI Assist output. AI Assist's answer is generated SQL in the editor, and no freshness is shown with it.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Mode reports expose dbt source freshness and Dataset refresh badges. No documentation connects those indicators to an AI Assist answer or states that the AI answer exposes freshness; the assistant returns SQL in the editor.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode reports can show dbt source data freshness timestamps, but Mode's built-in AI Assist produces SQL text in the editor without returning data or exposing data freshness at point of use.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "With AI Assist enabled, you’ll now see a pane appear to the right side of your SQL editor in both the Report and Dataset contexts."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist reads the SQL in the editor, including the user's SQL edits. That is the editor-SQL partial case. It is not documented to read the calculation behind a chart in a viewed report.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Mode sends the query syntax along with the additional metadata of the currently selected warehouse name, table column names and their data types as part of the GPT prompt in order to provide helpful, in-context responses."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist reads SQL supplied in its editor context. The page does not establish opening a particular existing chart or reading its rendered chart calculation; the row’s explicit SQL-editor exception gives partial credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Mode sends the query syntax along with the additional metadata of the currently selected warehouse name, table column names and their data types as part of the GPT prompt in order to provide helpful, in-context responses."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist reads the query syntax and referenced table schemas present in the product's SQL editor to provide context, but does not read calculations directly from published BI content charts or tables.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Write calculationsDescribe a new metric or an update to an existing one, have AI Assist write the calculation`SELECT --! total sales by rep`"
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist writes calculations as SQL in the editor, which the guidance treats as partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Once opened, you can use it to generate new SQL code on the fly for any warehouse you have Query access to."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist writes calculation SQL in Report and Dataset editors, but does not document selecting or editing the calculation of a specific BI chart. SQL-editor authoring receives the partial credit prescribed by the row.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Once the generated code returns, you can compare it with your original code, insert the SQL in place of your original edits (Shift + Opt/Alt + I), or copy and paste manually as needed."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist generates and inserts SQL code into the SQL editor (analyst work), which earns partly under the guidance for writing SQL in an editor.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can use the queries resource to manage, update, or retrieve information about a SQL query in a given report."
  - Source: https://mode.com/developer/api-reference/analytics/queries (checked 2026-10-26)
  - Reasoning: An outside agent can GET a specific report query, including its raw_query. The Charts API lists the charts for each Query, so the calculation behind a specific chart can be retrieved without parsing a whole file.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can use the queries resource to manage, update, or retrieve information about a SQL query in a given report."
  - Source: https://mode.com/developer/api-reference/analytics/queries (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve raw_query for a report query; the Charts API identifies a specific chart underneath that report/query path and exposes its aggregation and encoding configuration. This is object-level retrieval of the calculation feeding the chart, not a whole-workbook download.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To retrieve information about a single `query`, send a GET request including the report and query tokens to the `queries` resource."
  - Source: https://mode.com/developer/api-reference/analytics/queries (checked 2026-10-26)
  - Reasoning: Mode's API allows an outside coding agent to retrieve the exact calculation (`raw_query`) feeding a specific chart in BI content.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can use the API to update a query’s text without accessing the report in the editor."
  - Source: https://mode.com/developer/api-cookbook/reports/update-query-texts (checked 2026-10-26)
  - Reasoning: PATCH on a specific report query changes the SQL that feeds that query's charts, from outside the product.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can use the API to update a query’s text without accessing the report in the editor."
  - Source: https://mode.com/developer/api-cookbook/reports/update-query-texts (checked 2026-10-26)
  - Reasoning: An outside agent can PATCH the exact report/query supplying a chart’s data and calculation. Chart styling need not be writable for this row; the chart-to-query path is documented separately.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To update a query, send a PATCH request including the corresponding report and query tokens to the `queries` resource."
  - Source: https://mode.com/developer/api-reference/analytics/queries (checked 2026-10-26)
  - Reasoning: Mode's API allows an outside coding agent to update the calculation (`raw_query`) of a query feeding a chart via a PATCH request without replacing the entire report.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "One of the primary benefits of the workflow is the ability to integrate natural language seamlessly into SQL code you've already written to quickly iterate."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist works from existing SQL in the editor, which is analyst work. It is not documented to open a report and work from what it shows.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Mode sends the query syntax along with the additional metadata of the currently selected warehouse name, table column names and their data types as part of the GPT prompt in order to provide helpful, in-context responses."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: The assistant can work from existing SQL edits in the Report/Dataset editor. It is not documented opening and interpreting existing report charts, layout or filters, so its editor-only reading earns the specified partial credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "With AI Assist enabled, you’ll now see a pane appear to the right side of your SQL editor in both the Report and Dataset contexts."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist operates inside the SQL editor pane in Report and Dataset editing contexts (analyst work), rather than opening and working directly from published BI content.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "We can insert this code to run the SQL and use the results."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist produces SQL that the user inserts into the editor (analyst work). It does not build reports with owners and permissions.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "With AI Assist enabled, you’ll now see a pane appear to the right side of your SQL editor in both the Report and Dataset contexts."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: The built-in assistant generates SQL in existing analytical editors. It does not itself construct a complete persistent report with its charts, ownership and sharing controls; the generated analyst SQL is the limited scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Mode’s AI Assist helps analysts more efficiently write queries."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist assists analysts in writing SQL queries in the SQL editor (analyst work), but does not create or build complete persistent BI reports or dashboards directly.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can use this resource to either get a single Chart or list of all Charts for a given Report’s Query in your Mode Workspace."
  - Source: https://mode.com/developer/api-reference/analytics/charts (checked 2026-10-26)
  - Reasoning: The vendor API lets an outside agent read a report's charts, queries (raw_query) and report filters.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To retrieve information about a single report, send a GET request including the report token to the `reports` resource."
  - Source: https://mode.com/developer/api-reference/analytics/reports (checked 2026-10-26)
  - Reasoning: The report response exposes its layout and links to queries, report filters and other content resources. Outside agents can follow the documented query, chart and filter endpoints to read existing BI report contents, rather than just enumerate titles.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A report is the basic building block of analysis in Mode."
  - Source: https://mode.com/developer/api-reference/analytics/reports (checked 2026-10-26)
  - Reasoning: Mode's API allows an outside coding agent to read the contents of existing BI reports, including their queries, charts, and report filters.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To create a new query, send a POST request to the `queries` resource."
  - Source: https://mode.com/developer/api-reference/analytics/queries (checked 2026-10-26)
  - Reasoning: Through the API, an agent can add queries and filters to an existing report. There is no create-report endpoint (the Reports API has get, list, update, delete and archive), and charts can only be read, so building BI content is only partly covered.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "These include writing queries, building, sharing, or distributing reports, and managing members, workspaces, and data."
  - Source: https://mode.com/developer/api-reference/introduction (checked 2026-10-26)
  - Reasoning: The vendor explicitly documents building reports through its API, the first-party route an outside agent can use. Report SQL and layout can be authored externally, and GitHub sync also accepts external report changes into Mode.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Any commit to the default branch in your GitHub repository will automatically trigger a push to Mode."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Through Mode's two-way GitHub sync, an outside coding agent can build BI content (reports with queries, layout, and settings) in a GitHub branch, open a pull request, and merge to automatically deploy it to Mode.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Partly**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI-built BI content is documented. AI Assist produces SQL that a person inserts, and that does not make the asset AI-created. The Reports API has no create-report endpoint for an outside agent; it offers only get, list, update, delete, archive and purge. Collection sharing exists, but it is not tied to AI-created assets.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Sharing reports and results in Mode is still controlled by Mode permissions, so a user who can view a report can see its results even if they could not run the query in the database themselves."
  - Source: https://mode.com/help/articles/oauth (checked 2026-10-26)
  - Reasoning: Reports built by an outside agent through the documented report API can be shared with named members/groups using Collections. However, saved results are visible under Mode report permissions rather than always being re-evaluated with each viewer’s database access, limiting the row to partly.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Click Add next to any members or member groups that you want to become a member of your new Collection."
  - Source: https://mode.com/help/articles/spaces (checked 2026-10-26)
  - Reasoning: Reports created via Mode's API by an outside agent can be shared with named members or member groups by adding them to Collections. However, viewers see the saved report results based on Collection permissions rather than results always being re-evaluated under each viewer's personal database access permissions.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To easily navigate to Reports, Datasets, and Collections in Mode, click the magnifying glass icon in the top right to use the search bar, or use the keyboard shortcut (Cmd/Ctrl + K)."
  - Source: https://mode.com/help/articles/collaboration-and-discovery (checked 2026-10-26)
  - Reasoning: Users can search Reports, Datasets and Collections across the workspace by title, description or query keywords.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To easily navigate to Reports, Datasets, and Collections in Mode, click the magnifying glass icon in the top right to use the search bar, or use the keyboard shortcut (Cmd/Ctrl + K)."
  - Source: https://mode.com/help/articles/collaboration-and-discovery (checked 2026-10-26)
  - Reasoning: Mode provides workspace search across colleagues’ shared analytical assets by title, description and SQL keywords. Permissioned Collections govern discoverability; reports authored through the API use the same report objects and search path.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To easily navigate to Reports, Datasets, and Collections in Mode, click the magnifying glass icon in the top right to use the search bar, or use the keyboard shortcut (Cmd/Ctrl + K)."
  - Source: https://mode.com/help/articles/collaboration-and-discovery (checked 2026-10-26)
  - Reasoning: Mode provides workspace-wide search and Collection browsing allowing permitted users to discover colleagues' saved analytical assets (Reports, Datasets, Collections).

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Not found** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist is a pane in the SQL editor. No saved, shareable assistant with its own instructions, data and permissions is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No saved, reusable built-in assistant with its own instructions, data, and permissions was found. Saved Reports, Datasets, and Definitions are analytical assets, not configured assistants.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not support creating, configuring, or saving custom built-in assistants with dedicated instructions, data, and permissions for colleagues to reuse.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Not found** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Mode documents ordinary report and dataset schedules, which no AI runs. No AI or agent rerunning an analysis on a schedule is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Report and Dataset schedules refresh ordinary content, and report schedules can rerun analyst notebook code. No documentation says AI Assist or a built-in agent reruns an analytical task or sets up such a schedule.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode supports scheduled report and dataset refreshes, but does not document any AI feature or agent that reruns analytical tasks on a schedule or trigger and delivers fresh insights or alerts.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Not found** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist only generates SQL, which a person inserts and runs. No built-in agent that sends notifications, calls webhooks or writes to a destination is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Mode documents ordinary report webhooks, Slack delivery, and query capabilities. No evidence connects a named external side effect to an autonomous built-in AI or agent; customer-written notebook or API automation does not establish that actor.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode has no built-in agents capable of executing autonomous actions, notifications, webhooks, or writing to external systems beyond answering. AI Assist only generates SQL code in the editor upon manual prompt.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Not found** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in agent exists in the corpus, and AI Assist has no documented hand-off or clarifying-question behavior.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented AI hand-off, pause awaiting a human decision, or clarification behavior was found. Ordinary report schedule failure notifications are not an agent handing back an unfinished task.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode has no built-in agents and therefore documents no escalation or hand-off mechanism from an agent back to a human when an autonomous task cannot proceed.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Not found** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No agents, and therefore no agent-to-agent delegation, are documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No customer-configurable agent delegation, named analytical subagent, or tools-and-permissions configuration was found. Search hits for agent and delegate were browser metadata and third-party library attributions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not support built-in agents or configuring one agent to delegate bounded analytical tasks to another named agent.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The corpus has no MCP mentions, and no external tool connections for AI Assist are documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented attachment of external MCP servers or tools to Mode AI Assist was found. Native Spreadsheet references to external tools describe avoiding exports, not an assistant tool connection.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode's built-in assistant (AI Assist) has no support for connecting out to external tools or Model Context Protocol (MCP) servers.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Fix broken SQLPrompt AI Assist to fix syntax error and include the error message for context`--! update code above to valid Postgres SQL`"
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: A user can point AI Assist at a broken report query and its error message and have it repaired. This matches the 'AI fixes one broken item a user points it at' partial case. The AI is not documented to find affected content across BI after a data or definition change.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Fix broken SQLPrompt AI Assist to fix syntax error and include the error message for context`--! update code above to valid Postgres SQL` `--! avoid this error message: "insert your error message here"`"
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: This verbatim use-case entry documents AI Assist fixing broken SQL when the user supplies the query and error. AI Assist operates in the Report SQL editor, so this covers repairing a report query the user points it at. It does not establish AI discovery of affected BI content after a schema or definition change, or repair and owner flagging across that content.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Prompt AI Assist to fix syntax error and include the error message for context"
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode documents that users can prompt AI Assist to fix a syntax error in a broken query and include the error message for context (Fix broken SQL). This meets the partial case of fixing one broken item a user points the assistant at, but Mode does not document the AI proactively finding and fixing affected BI content across the workspace.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Not found** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Mode documents no generated apps, and AI Assist does not read app code or layout.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No generated-app object or assistant reading of its code, layout, or rendered output was found. AI Assist reads SQL editor contents; report HTML editing and embedding do not establish the assistant reading an app.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not support generated apps, and its built-in assistant (AI Assist) only operates within SQL editor queries, not reading generated app code or layouts.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Not found** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI-built persistent app is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant app builder or AI creation of a persistent governed application was found. Report building, spreadsheet transformations, and SQL generation do not establish AI authorship of a first-class app.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode has no capability for its built-in assistant to generate persistent, governed applications backed by live data.

### A_OR: Can an outside coding agent read a generated app?

**Result: Not found** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Mode has no generated-app object for an outside agent to read.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Mode documents Report HTML, Notebook code, GitHub sync, and analytical API objects. No generated-app definition retrievable through the vendor interface was found; a report definition or embedding host application is not the generated app named by this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not feature generated apps or provide an API for outside coding agents to read generated app definitions.

### A_OW: Can an outside coding agent build a generated app?

**Result: Not found** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Mode documents no generated-app object, and no outside-agent route to build one.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No generated-app creation or deployment interface was found. APIs and GitHub sync for Reports do not establish an outside agent building a generated app, and custom HTML written by a customer is not a documented first-party app builder.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not feature generated apps or offer an external API or CLI for outside agents to author or deploy generated apps.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Not found** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The only quality signal is the 👍👎 feedback on generations, and a thumbs rating does not count. No saved test cases, rubric or judge is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No saved evaluation questions, expected answers, rubrics, judges, or repeatable assistant evaluation runs were found. AI Assist helpful/unhelpful feedback and vendor model testing do not establish customer evaluation of assistant answers.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode offers no evaluation suite, benchmark cases, rubrics, or model-based judges to test whether the built-in assistant's SQL generations or answers are correct.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: No** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: no
  - Quote: "As the models progress, we will update the versions if they improve the performance of our features."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode chooses and updates the OpenAI model versions (GPT-3.5T/GPT-4T) itself. No customer selection or pinning is described.
- **GPT-6.1 Sol**: no
  - Quote: "- Mode’s AI Assist does not use ChatGPT. We use & test with GPT-3.5T and GPT-4T, also created by Open AI, because they are better suited for natural language translation to SQL. As the models progress, we will update the versions if they improve the performance of our features."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode explicitly manages and updates AI Assist model versions. The documented model policy offers no customer version selection or pinning.
- **Gemini 3.8 Flash**: no
  - Quote: "As the models progress, we will update the versions if they improve the performance of our features."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode explicitly states that model versions are managed and updated by Mode without customer choice or version pinning.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "View History: The running history of each query execution, including the raw code (as written), rendered code (SQL sent to the database after processing all Liquid code), and any data that was returned."
  - Source: https://mode.com/help/articles/querying-data (checked 2026-10-26)
  - Reasoning: AI Assist's answer is SQL generated in this same SQL editor, which the user inserts and runs. The ai-assist page says 'We can insert this code to run the SQL and use the results.' The editor's View History then keeps the executed code and the returned data for that run. Mode keeps the prompt and generation only when a user submits feedback. No record of the model version or AI configuration is documented, so the logic and data are kept but the model and configuration are not. That is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- View History: The running history of each query execution, including the raw code (as written), rendered code (SQL sent to the database after processing all Liquid code), and any data that was returned. Select a historical query run and click Open to replace the code currently in the query editor with the code from that run."
  - Source: https://mode.com/help/articles/querying-data (checked 2026-10-26)
  - Reasoning: AI Assist’s generated SQL can be inserted and run in this editor; its executed SQL and result data are then inspectable in query history. Mode also retains voluntarily submitted feedback prompts and generations. Neither record documents preserving the exact AI model version, full original prompt and all generation configuration together, so reproduction/audit support is partial.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "View History: The running history of each query execution, including the raw code (as written), rendered code (SQL sent to the database after processing all Liquid code), and any data that was returned."
  - Source: https://mode.com/help/articles/querying-data (checked 2026-10-26)
  - Reasoning: Mode's SQL editor preserves a running 'View History' of each query execution containing the raw SQL code, rendered SQL, and returned data. When a user runs AI-generated SQL, the query logic and resulting data are preserved, but Mode does not record the AI prompt, configuration, or model version alongside it.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Not found** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Feedback is a 👍👎 rating plus optional notes, which Mode uses 'to help improve the feature over time'. That is a rating, not a correction that changes later answers with a stated reach.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI Assist accepts helpful/unhelpful ratings and comments to improve the feature. The documentation does not say that a correction changes later answers or define a user, team, or workspace reach; this feedback alone does not satisfy the row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode AI Assist only collects thumbs-up/thumbs-down feedback for product improvement, which the row definition explicitly excludes. Mode does not document any user correction mechanism that modifies the assistant's future answers.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: No** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: no
  - Quote: "Though you can include Definitions in your edits, the code contained within a given Definition won’t be included in the context that’s sent to OpenAI or used to generate updated syntax."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Definitions are Mode's governed shared business logic ('Ensure consistency'). The docs explicitly say AI Assist does not use their code, so answers are not bound to or checked against governed definitions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No rule binding AI Assist answers to certified content or checking definition mismatches was found. The AI Assist FAQ says Definition code is not sent as context and discourages dbt metrics queries; the general semantic-layer integration does not establish assistant consistency.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode AI Assist does not check answers against certified content or governed metrics; in fact, the documentation explicitly notes that Definitions and dbt metrics connections are not incorporated into AI Assist's context.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Not found** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI spend cap, credit limit or budget is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No enforced AI Assist spending, credit, or usage cap was found. SQL LIMIT examples restrict result rows, not built-in AI consumption, and general data capacity limits do not establish an AI spend block.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode provides no administrator controls to cap, budget, or block built-in AI usage once a spending threshold is reached.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Not found** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No measurement of AI Assist response time is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No customer measurement of AI Assist response time by agent, model, or evaluation run was found. SQL execution timing and the vendor testing models for performance do not establish observability of AI response latency on customer workloads.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not provide metrics or tools for customers to measure AI Assist response time or inference latency on their own workload.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Not found** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Discovery Database and organization usage pages cover seats and data compute, not AI usage. No per-user AI consumption is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No AI Assist usage or token consumption breakdown by user, team, or workspace was found. Dataset data usage and Notebook memory usage refer to other product resources.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode provides no usage dashboard or reporting that breaks down AI Assist consumption by user, team, or workspace.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: No** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: no
  - Quote: "Below is a categorized list of events currently audited:"
  - Source: https://mode.com/help/articles/audit-logs (checked 2026-10-26)
  - Reasoning: The audit log page gives a closed inventory of audited events. It covers user membership, groups, collections, connections, exports, report activity, schedules, API tokens and audit-log access. It contains no AI Assist event, and nothing in it distinguishes assistant activity, so AI Assist's actions are not logged as such.
- **GPT-6.1 Sol**: no
  - Quote: "Below is a categorized list of events currently audited:"
  - Source: https://mode.com/help/articles/audit-logs (checked 2026-10-26)
  - Reasoning: The closed Audited Events inventory lists report, SQL, visualization, schedule, permission and token events, but no AI Assist prompt, generation or assistant action. It therefore does not provide the required assistant-specific activity record.
- **Gemini 3.8 Flash**: no
  - Quote: "Below is a categorized list of events currently audited:"
  - Source: https://mode.com/help/articles/audit-logs (checked 2026-10-26)
  - Reasoning: Mode's Audit Logs documentation provides a closed, categorized inventory of all audited events across the workspace, none of which log AI assistant actions, queries, or prompts.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Partly** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To ensure that we provide the best possible experience for our users, we are turning AI Assist on an account-by-account basis, by request only."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist can only be enabled for a whole account, on request. No admin control for particular users, groups or workspaces is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "To ensure that we provide the best possible experience for our users, we are turning AI Assist on an account-by-account basis, by request only."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode documents enabling AI Assist account by account on request. This establishes account-wide availability control only; it does not document an administrator enabling or disabling AI for particular users, groups, or workspaces within the account.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To ensure that we provide the best possible experience for our users, we are turning AI Assist on an account-by-account basis, by request only."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode enables AI Assist on an account-by-account basis upon request, functioning as an account-wide enablement without granular controls for subsets of users, groups, or workspaces.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Mode's GitHub sync holds Report, Dataset and Definition changes made on a branch until they are merged through a pull request. This is a general code-review workflow. It is not connected to AI Assist writes and names no approver for AI changes, so it earns partly. AI Assist edits are made in Mode's editor, and no step holds them for a different person or role.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Mode documents a general branch/pull-request workflow for report and Definition changes. It is not connected to AI Assist writes and names no separate AI-change approver; the grading standard gives only partial credit to this general publishing workflow.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Mode documents a code-review and pull-request workflow through GitHub sync where changes to Reports, Datasets, and Definitions on branches do not affect Mode until merged. A general publishing or code-review workflow that documentation does not connect specifically to AI or agent changes earns partly.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Not found**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist uses OpenAI's GPT API. The docs give no customer choice of region, endpoint or provider, and they also do not state that the customer cannot choose, so this is not a documented 'no'.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Mode documents sending AI Assist SQL and metadata to OpenAI and vendor-managed model updates. No customer choice of inference region, provider endpoint, or customer-hosted inference was found; merely naming OpenAI does not establish customer location control or an explicit prohibition on it.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode documentation states that AI Assist uses OpenAI's GPT API, with no customer control over where model inference executes, no choice of region or endpoint, and no BYOK option.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Once opened, you can use it to generate new SQL code on the fly for any warehouse you have Query access to."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist is limited to connections where the user has Query access. That is object-level permission only. Nothing says the assistant answers under the user's row and column rules.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Once opened, you can use it to generate new SQL code on the fly for any warehouse you have Query access to."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: AI Assist is scoped to warehouse connections the user can query. This establishes connection-level permission binding, not an explicit guarantee that both row-level and column-level rules constrain every built-in assistant return.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Once opened, you can use it to generate new SQL code on the fly for any warehouse you have Query access to."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode AI Assist checks whether the user has warehouse-level Query access (connection/object level), rather than executing queries under the user's identity to enforce row-level and column-level security.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Yes**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "NOTE: When you generate, Mode pulls the currently selected warehouse name, column names & data types for all tables explicitly referenced in your SQL, and sends them and your SQL edits to OpenAI for context."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: The page names OpenAI as the receiving service and lists exactly what it receives (no sample values). Retention is covered in the same page's security list: 'OpenAI does not retain any data sent by Mode', and Mode keeps feedback data only when submitted.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Mode has a Data Privacy Agreement (DPA) with OpenAI, which protects the privacy of Mode customer metadata shared in the API request. OpenAI does not retain any data sent by Mode."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: The page names OpenAI, describes the SQL and warehouse/table/column metadata sent there, excludes sample column values and states no OpenAI retention. Mode also retains volunteered feedback prompts and generations, but does not specify how long it keeps that Feedback Data, leaving the full retention account incomplete.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Mode sends the query syntax along with the additional metadata of the currently selected warehouse name, table column names and their data types as part of the GPT prompt in order to provide helpful, in-context responses."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode documents the service that receives AI data (OpenAI's GPT API), what data and metadata are sent (query syntax, warehouse name, table column names, and data types), and retention policies (OpenAI does not retain data; Mode retains voluntary feedback).

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Not found**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The ai-assist page names OpenAI and says OpenAI retains no data, but it gives no processing or storage regions for AI requests.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The AI Assist page names OpenAI and describes non-retention and voluntary feedback storage, but does not identify regions for AI processing or storage. General report data retention is not AI request residency.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While Mode states that OpenAI processes prompt metadata and does not retain customer data, Mode documentation does not state the geographical regions where AI requests are processed and stored.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Mode does not share any historical data with OpenAI, or use it to train AI Assist."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: This is a default statement that customer data is not used for training. The same page also says OpenAI does not use the data to retrain the model.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- OpenAI does not use this data or metadata to retrain the model."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode explicitly says the AI provider does not retrain on the data or metadata it sends, and separately says historical customer data is not shared for AI Assist training; no opt-out step is required.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "OpenAI does not use this data or metadata to retrain the model."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode explicitly states that OpenAI does not use customer data or metadata to retrain AI models.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Not found** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist works on any warehouse the user has Query access to, which is ordinary user permissions. No admin restriction on the assistant's data that is separate from those permissions is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No admin-enforced AI data scope separate from ordinary user permissions was found. AI Assist uses the selected warehouse and explicitly referenced tables; a user writing a WHERE-clause instruction is not a workspace-wide administrator restriction.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not document an administrative control to restrict which data the AI assistant may access separately from user database query permissions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`read-only` is the only valid value for `authorization_type`."
  - Source: https://mode.com/developer/discovery-api/signature-tokens (checked 2026-10-26)
  - Reasoning: Discovery API signature tokens are always read-only and cover only the batch API (Reports, Collections, Queries, Charts metadata). They are created from a Workspace admin's API key, so an outside agent can use a credential narrower than the admin's own access. Member tokens, by contrast, mimic the user's full access.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "These tokens mimic the individual user's access to the resources in the Workspace."
  - Source: https://mode.com/help/articles/api-tokens (checked 2026-10-26)
  - Reasoning: An outside agent can use a Member API token, but that token inherits the member’s full access. Workspace tokens are broader admin credentials; neither documented token provides narrower per-agent scopes.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "These tokens mimic the individual user's access to the resources in the Workspace."
  - Source: https://mode.com/help/articles/api-tokens (checked 2026-10-26)
  - Reasoning: Mode Member API tokens mimic the full access of the individual user across the workspace and cannot be scoped narrower than the human's own access.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can use the queries resource to manage, update, or retrieve information about a SQL query in a given report."
  - Source: https://mode.com/developer/api-reference/analytics/queries (checked 2026-10-26)
  - Reasoning: An outside agent can fetch a report query's raw SQL through the API and infer its sources. That is the 'read SQL and infer' partial case. No documented lineage interface traverses upstream transformations.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can use the queries resource to manage, update, or retrieve information about a SQL query in a given report."
  - Source: https://mode.com/developer/api-reference/analytics/queries (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve the raw SQL behind a report query and inspect its referenced sources and transformations. This supports inference from query text, not documented traversal of an upstream lineage graph.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can use the queries resource to manage, update, or retrieve information about a SQL query in a given report."
  - Source: https://mode.com/developer/api-reference/analytics/queries (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve the raw SQL (raw_query) of report queries via Mode's first-party REST API (GET /{account}/reports/{report}/queries/{query}) and infer upstream sources from the SQL text, but Mode does not provide a dedicated programmatic lineage traversal interface.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Not found** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The audit log records general user, collection, connection, report and API-token events. It does not separate outside-agent actions or tie them to a delegated agent identity. The row says a general user activity log is insufficient.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The Audit Logs pages describe general actor, entity, report, permission, and API-token events. They do not document outside-agent actions attributed to a delegated agent identity and affected analytical objects; a general user activity log is insufficient.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode's audit logs record standard user and workspace API actions by IP and API token, but do not record outside agent actions tied to a delegated agent identity and affected analytical objects.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Through the GitHub sync, changes to Reports, Datasets and Definitions can be held in a pull request until merged. This is a general Git PR workflow that the docs do not connect to agent changes.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: The general GitHub workflow can stage external report and Definition edits before merge. It is not documented as an outside-agent approval policy and does not require a different named approver, so the grading standard limits it to partly.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Mode supports a Git pull-request review workflow via its GitHub sync where changes in branches are held until merged into the default branch, but this general workflow is not specific to outside agent writes.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Synced Mode assets are files in GitHub, so reviewers can see change diffs in a pull request. This is a generic change diff and is not documented for outside-agent changes.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Another option we would suggest is using Github Sync to track all changes made to a report, so you can go on the Github repo to track exactly what changes are made at what time, and who made the changes."
  - Source: https://mode.com/help/articles/collaboration-and-discovery (checked 2026-10-26)
  - Reasoning: Mode explicitly recommends GitHub Sync to inspect exactly what changed in a report, when, and by whom; its GitHub sync page also documents branches and pull requests for synced assets. This establishes generic report change review, earning partly. Neither page documents the diff as covering changes made by an outside agent.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Mode supports GitHub synchronization where changes to analytical assets can be inspected via pull request diffs, but this is a generic Git pull-request review rather than an agent-specific diff interface.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If your branch causes any issues, you can revert back to the previous version in GitHub."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Changes synced from GitHub to Mode assets can be reverted in GitHub. This general rollback covers only the GitHub sync path. It is not documented for agent changes or for API edits.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If your branch causes any issues, you can revert back to the previous version in GitHub."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Mode explicitly supports reverting externally authored repository changes; default-branch changes automatically sync back to Mode. The versioned assets include reports, Datasets and shared Definitions, so an outside coding agent’s changes through that route can be rolled back.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If your branch causes any issues, you can revert back to the previous version in GitHub."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Through Mode's two-way GitHub sync, changes made by an outside agent to reports, queries, and definitions can be reverted in GitHub and automatically restored in Mode.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Not found** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The corpus never mentions an MCP server.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No Mode-supported Model Context Protocol server, server endpoint, or MCP authentication documentation was found. The ordinary REST API does not establish an MCP server.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not provide or host an MCP server for outside agents to connect to its analytical assets or data.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Discovery API is a read-only batch API that allow developers to get lists of Mode resources, along with metadata about each of those resources."
  - Source: https://mode.com/developer/discovery-api/introduction (checked 2026-10-26)
  - Reasoning: The vendor API lets an outside agent list Reports, Collections, Queries and Charts without knowing ids in advance. It is Enterprise-plan only and carries no preview label.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To return a list of all reports in a given Collection, send a GET request to the `reports` resource."
  - Source: https://mode.com/developer/api-reference/analytics/reports (checked 2026-10-26)
  - Reasoning: An outside agent can enumerate reports by Collection without knowing report IDs. The API cookbook also documents enumerating Collections and all accessible workspace reports.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "In this example, the `get_all_reports_tokens` method first makes a `GET` request to `app.mode.com/api/{workspace}/spaces?filter=all` to return a list of Collections in the Workspace."
  - Source: https://mode.com/developer/api-cookbook/management/get-all-reports (checked 2026-10-26)
  - Reasoning: Mode provides API endpoints to enumerate Collections and reports across a workspace without requiring prior knowledge of their IDs.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Member API tokens are meant to be used by a single user for individual use cases, such as updating a specific Report or managing a Collection."
  - Source: https://mode.com/help/articles/api-tokens (checked 2026-10-26)
  - Reasoning: Named credential types for programmatic access are documented: Workspace and Member API tokens (token plus secret, basic auth) and Discovery API signature tokens.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "An API token is used instead of your email address and account password whenever you programmatically authenticate to Mode with basic authentication."
  - Source: https://mode.com/help/articles/api-reference (checked 2026-10-26)
  - Reasoning: The documented API-token and secret credentials with HTTP basic authentication provide a first-party authentication route for an outside agent or script.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "API tokens allow you to connect to Mode’s API programmatically."
  - Source: https://mode.com/developer/api-reference/authentication (checked 2026-10-26)
  - Reasoning: Mode documents programmatic authentication using API tokens (Workspace Tokens and Member Tokens) via HTTP Basic Authentication.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Not found** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor-published skills, plugins or agent instruction packs are documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No vendor-published agent skill, SKILL.md, coding-agent plugin, or packaged agent instructions were found. WordPress plugins and general analytics skills are unrelated to outside-agent instruction packs.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode does not publish any agent skills, plugins, or packaged instruction sets (such as SKILL.md) for outside coding agents.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Not found** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Mode documents no CLI of its own. The only command-line mentions are host setup steps for database connections.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No supported Mode analytical CLI was found. Bridge installation shell commands configure database connectivity, and API cookbook commands run customer-written Python examples; neither is a vendor CLI for analytical objects or outside agents.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode provides a Bridge client CLI for database connectivity, but does not offer or document a command-line tool designed for use by AI or outside coding agents.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Partly** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To enable the Member API tokens feature, Admins can navigate to your Workspace Settings > Features > API Keys > Member keys."
  - Source: https://mode.com/help/articles/api-tokens (checked 2026-10-26)
  - Reasoning: Admins can turn member API access on or off for the whole workspace and revoke individual tokens. These are general API controls, not agent-specific controls for chosen users or groups.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "To enable the Member API tokens feature, Admins can navigate to your Workspace Settings > Features > API Keys > Member keys."
  - Source: https://mode.com/help/articles/api-tokens (checked 2026-10-26)
  - Reasoning: Admins can enable the Member API-token route for a workspace and revoke all or specific issued tokens. This controls the interface used by outside agents separately from data permissions, but no persistent user/group-specific agent allowlist or blocklist is documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To enable the Member API tokens feature, Admins can navigate to your Workspace Settings > Features > API Keys > Member keys."
  - Source: https://mode.com/help/articles/api-reference (checked 2026-10-26)
  - Reasoning: Mode allows administrators to enable or disable Member API token generation at the workspace level, but does not provide granular controls to allow or block agent access for particular users, groups, or individual workspaces.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "As of today, our API rate limiting is approximately 40 requests every 10 seconds, or 4 requests per second per username."
  - Source: https://mode.com/help/articles/api-reference (checked 2026-10-26)
  - Reasoning: A general API rate limit applies to agents calling the API. No agent-specific cap is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "As of today, our API rate limiting is approximately 40 requests every 10 seconds, or 4 requests per second per username."
  - Source: https://mode.com/help/articles/api-reference (checked 2026-10-26)
  - Reasoning: An outside agent using the Mode API is subject to its documented per-username throttle. This is a general API limit, not a separate customer-configured agent quota or spend cap.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "As of today, our API rate limiting is approximately 40 requests every 10 seconds, or 4 requests per second per username."
  - Source: https://mode.com/help/articles/api-reference (checked 2026-10-26)
  - Reasoning: Mode documents a general API rate limit of approximately 40 requests every 10 seconds per username, which applies to programmatic and agent callers but is not separate or specifically configured for agents.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Field descriptions can be added to Datasets to build shared understanding around business and logic definition."
  - Source: https://mode.com/developer/api-reference/analytics/dataset-field-descriptions (checked 2026-10-26)
  - Reasoning: The AI here is an outside agent connected through Mode's first-party REST API. AI Assist does not read these descriptions: it sends only warehouse name, column names and types. Dataset field descriptions are where business definitions go that the schema does not carry. The Datasets help page's example defines 'engaged' as a user who logged in and took more than one action in the past 14 days. The same API page documents GET /{account}/datasets/{dataset}/field_descriptions, so a connected agent can read this context before answering.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Field descriptions can be added to Datasets to build shared understanding around business and logic definition."
  - Source: https://mode.com/developer/api-reference/analytics/dataset-field-descriptions (checked 2026-10-26)
  - Reasoning: For an outside agent, Mode provides business-definition text stored on Dataset fields and a first-party GET field_descriptions endpoint to read it before analysis. Dataset documentation gives an engagement definition beyond schema names. This credit is for the connected agent, not AI Assist’s schema-only context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Field descriptions can be added to Datasets to build shared understanding around business and logic definition."
  - Source: https://mode.com/developer/api-reference/analytics/dataset-field-descriptions (checked 2026-10-26)
  - Reasoning: Mode allows users to document business context and business definitions in Dataset field descriptions that go beyond schema metadata. Through Mode's first-party REST API (GET /{account}/datasets/{dataset}/field_descriptions), an outside AI agent can programmatically read these business definitions before answering.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: nothing found
  - Reasoning: GitHub sync stores Dataset queries, Reports, themes and Definitions as files. The documented repository structure does not include Dataset field descriptions, which are the business context. Definitions are SQL shared definitions and are credited in the shared-definition rows, not as business context, so nothing documents business context in version control.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This will create a two-way sync between Mode and GitHub, where changes made in Mode can be pushed to the GitHub repository, and changes made in GitHub will be automatically pushed to Mode."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: For an outside agent, executable business context in Mode Definitions is readable through the Definitions API and stored as SQL files by the documented GitHub sync. Those context files support branches, review and reverting versions. This does not claim that AI Assist reads Definition bodies.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If your branch causes any issues, you can revert back to the previous version in GitHub."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Mode synchronizes Definitions (reusable SQL business logic) to a GitHub repository where the business context lives in version-controlled files that can be diffed, reviewed across branches via pull requests, and rolled back by reverting commits.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To retrieve a list of Dataset field descriptions for a given Dataset, send a GET request including the Dataset token to the Dataset `field descriptions` resource."
  - Source: https://mode.com/developer/api-reference/analytics/dataset-field-descriptions (checked 2026-10-26)
  - Reasoning: The AI here is an outside agent using Mode's API. Business context in the form of field descriptions is attached to an individual Dataset, which plays the role of a model, not to the whole tenant. The agent retrieves it per Dataset, so teams working from different Datasets get different context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To retrieve a list of Dataset field descriptions for a given Dataset, send a GET request including the Dataset token to the Dataset `field descriptions` resource."
  - Source: https://mode.com/developer/api-reference/analytics/dataset-field-descriptions (checked 2026-10-26)
  - Reasoning: For an outside agent, business descriptions are attached to a specific Dataset rather than a tenant-global prompt. Different team Datasets can carry different definitions, and the connected agent retrieves the relevant model-scoped context through its token’s permitted resources.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To retrieve a list of Dataset field descriptions for a given Dataset, send a GET request including the Dataset token to the Dataset `field descriptions` resource."
  - Source: https://mode.com/developer/api-reference/analytics/dataset-field-descriptions (checked 2026-10-26)
  - Reasoning: In Mode, business context (field descriptions) is attached per individual Dataset rather than globally across the tenant. An outside AI agent retrieves context scoped to a specific Dataset token via GET /{account}/datasets/{dataset}/field_descriptions, ensuring distinct business context for different teams.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No preview, staging or test step for field descriptions or other business context is documented. The Definitions 'Run to test and save' step tests SQL shared definitions, not business context, and no AI is involved.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Click Run to test and save your Definition. If the run succeeds, you or anyone else in your Workspace with access to the underlying connection can reference the Definition in their reports."
  - Source: https://mode.com/help/articles/definitions (checked 2026-10-26)
  - Reasoning: For an outside agent reading executable business context through the Definitions API, Mode provides a named Run test of the Definition before its saved logic is available for shared use. This validates the SQL business logic, without claiming an AI-answer evaluation suite.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Click Run to test and save your Definition. If the run succeeds, you or anyone else in your Workspace with access to the underlying connection can reference the Definition in their reports."
  - Source: https://mode.com/help/articles/definitions (checked 2026-10-26)
  - Reasoning: Mode provides a mandatory validation test step ('Click Run to test and save your Definition') ensuring the business logic executes successfully against the warehouse before the Definition can be saved and shared for downstream use, including by an outside agent.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Not found**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Field descriptions appear in the chart builder tooltips, but no AI answer is documented as surfacing the context that shaped it.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI Assist documents what SQL and metadata are sent as context, but not an answer displaying which specific business rule, instruction, or description shaped it. Dataset field-description tooltips do not establish AI-context attribution.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode AI Assist generates SQL directly in the query editor and does not surface or cite the specific business context, rule, or description that shaped the generation.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: no
  - Quote: "Check out Mode’s API endpoints for creating and updating field descriptions to programmatically add and update descriptions from your semantic layer documentation."
  - Source: https://mode.com/help/articles/semantic-layer-integrations (checked 2026-10-26)
  - Reasoning: Mode's documented route for bringing semantic-layer or dbt documentation into Mode is for the customer to script it with the general field-description API. That is customer-built, and the grading standard scores customer-built capabilities as no. Mode does not ingest column descriptions, dbt docs or warehouse comments itself. AI Assist sends only warehouse name, column names and data types.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Check out Mode’s API endpoints for creating and updating field descriptions to programmatically add and update descriptions from your semantic layer documentation."
  - Source: https://mode.com/help/articles/semantic-layer-integrations (checked 2026-10-26)
  - Reasoning: For an outside agent, Mode explicitly documents carrying descriptions from external semantic-layer documentation into Dataset field descriptions using its first-party API; the GET endpoint then exposes those descriptions for use as context. This is programmatic metadata transfer, not a claim of native AI Assist ingestion.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Check out Mode’s API endpoints for creating and updating field descriptions to programmatically add and update descriptions from your semantic layer documentation."
  - Source: https://mode.com/help/articles/semantic-layer-integrations (checked 2026-10-26)
  - Reasoning: Mode explicitly documents programmatically importing descriptions from external semantic layer documentation into Dataset field descriptions via its first-party API, allowing an outside AI agent to use inherited external modeling documentation as business context without retyping.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Not found**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI-specific setting to deprecate or exclude a table, field or answer is documented. The 'deprecat' matches refer to drivers and API endpoints.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No AI-specific deprecation or exclusion control for a table, field, or answer was found. Chart filters and spreadsheet column hiding affect user views, and the AI example excluding returns limits result rows rather than making an analytical object off-limits to the AI.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode provides no setting or metadata flag to mark specific tables, columns, or answers as deprecated or off-limits specifically to the AI.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: For field descriptions, the docs only say to edit the original Dataset to change them, which is an edit permission. They name no owner and no review step. Field descriptions are not in the GitHub sync, so the pull-request workflow does not cover them.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: For an outside agent, the synced executable context in Definitions can use the documented branch/pull-request review workflow. Mode names no owner or approver responsible for that business context, so the workflow is only partial evidence.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can create branches and open pull requests in GitHub as normal without affecting your reports in Mode until those branches are merged into the default branch."
  - Source: https://mode.com/help/articles/github (checked 2026-10-26)
  - Reasoning: Mode Definitions, which store reusable business logic and context, can be managed using GitHub sync with pull request reviews. However, Mode does not designate a specific named owner or approval role for business context, earning partly under the rule for a review workflow without a named owner.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: No** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: no
  - Quote: "When you click the generate button, Mode pulls the currently selected warehouse name, column names & data types for all tables explicitly referenced in your SQL, and sends them and your SQL edits to OpenAI for context."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: The docs list AI Assist's full context: names, types and the user's SQL. View definitions, dbt models and semantic views are not included, and the FAQ advises against querying the dbt metrics connection with AI Assist.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The search found warehouse schema metadata and general semantic-layer integrations, but no statement that AI Assist reads dbt models or warehouse definition logic. Table and column metadata alone are not warehouse logic, and the AI FAQ discourages dbt metrics queries.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode AI Assist only inspects table column names and data types, and does not read underlying warehouse logic such as view definitions, stored procedures, or dbt model logic.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist is documented as generating SQL syntax in the editor. No page says it authors views, transforms or models that land in the warehouse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI Assist generates SQL in the editor, and the general query editor can execute database DDL with sufficient permissions. No documentation connects AI Assist to authoring a warehouse transform, model, or view; arbitrary SQL capability alone does not establish this object.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode's built-in assistant (AI Assist) only generates SQL text into the query editor for manual execution by the user; it cannot author or write persistent views, transforms, or models directly into the warehouse.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No API or other route documented for outside agents returns view definitions, dbt models or semantic views. The dbt integration pulls only freshness metadata.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The data-source API manages connections and refreshes schema metadata. No documented interface returning warehouse view definitions, dbt model logic, or semantic-view logic to an outside agent was found. dbt freshness mappings and dbt_metadata links do not establish access to transformation definitions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode's developer APIs expose query raw_query from reports and dataset metadata, but do not provide an interface for an outside coding agent to read underlying warehouse-level logic such as database view definitions or dbt models.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Creating, dropping, and altering tables and views"
  - Source: https://mode.com/help/articles/querying-data (checked 2026-10-26)
  - Reasoning: This page lists warehouse DDL among the statements Mode executes against the connected database, given database permissions, which ties SQL execution to warehouse objects such as views. An outside agent can reach this through Mode's first-party REST API. Create a query (POST to the queries resource with raw_query and data_source_id) is at https://mode.com/developer/api-reference/analytics/queries, and Create a report run is at https://mode.com/developer/api-reference/analytics/report-runs. Together they let the agent author view logic in the warehouse through Mode.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Creating, dropping, and altering tables and views"
  - Source: https://mode.com/help/articles/querying-data (checked 2026-10-26)
  - Reasoning: Mode explicitly permits DDL against connected databases, including warehouse tables and views, subject to database permissions. An outside agent can submit SQL through the Queries API and execute the report/query via the documented run APIs, so the first-party route can write warehouse logic.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Creating, dropping, and altering tables and views"
  - Source: https://mode.com/help/articles/querying-data (checked 2026-10-26)
  - Reasoning: Mode explicitly documents that queries executed against connected databases are not limited to SELECT statements and can execute warehouse DDL including 'Creating, dropping, and altering tables and views'. An outside coding agent can author and execute these statements via Mode's first-party REST API (POST /{account}/reports/{report}/queries), thereby authoring warehouse logic through Mode.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Yes**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This connection will surface all available metrics to query."
  - Source: https://mode.com/help/articles/semantic-layer-integrations (checked 2026-10-26)
  - Reasoning: Mode's dbt Semantic Layer connection surfaces metrics already defined in dbt, and the Looker SQL connection surfaces Looker models. They are queried directly, not rebuilt.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This connection will surface all available metrics to query."
  - Source: https://mode.com/help/articles/semantic-layer-integrations (checked 2026-10-26)
  - Reasoning: In the dbt Metrics Query section, the dbt Semantic Layer connection exposes existing externally maintained metrics and turns them into reusable Mode Datasets. The same page also documents querying existing Looker semantic definitions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This connection will surface all available metrics to query."
  - Source: https://mode.com/help/articles/semantic-layer-integrations (checked 2026-10-26)
  - Reasoning: Mode connects directly to external semantic layers (dbt Semantic Layer and Looker Open SQL interface) to consume and query maintained metric definitions.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: No** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: no
  - Quote: "Though you can include Definitions in your edits, the code contained within a given Definition won’t be included in the context that’s sent to OpenAI or used to generate updated syntax."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Definitions are Mode's shared business-logic layer. The docs explicitly say AI Assist does not read their code.
- **GPT-6.1 Sol**: no
  - Quote: "Though you can include Definitions in your edits, the code contained within a given Definition won’t be included in the context that’s sent to OpenAI or used to generate updated syntax."
  - Source: https://mode.com/help/articles/ai-assist (checked 2026-10-26)
  - Reasoning: Mode explicitly excludes the SQL bodies of shared Definitions from AI Assist’s context. Referencing a Definition token therefore does not let the assistant read the team’s shared business logic; the page also discourages using dbt metrics with AI Assist.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode's AI Assist documentation explicitly states that Definitions and dbt metrics are not included in the context sent to OpenAI or used to generate SQL, so the built-in assistant cannot read shared definitions.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AI Assist does not create or edit Definitions. Its FAQ says Definition code is not sent as context and advises against referencing Definitions while using AI Assist.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI Assist writes calculations in Report and Dataset SQL, but no documentation establishes it creating or editing Definitions, semantic metrics, dimensions, or joins in the shared definition layer. General user editing of Definitions and calculated fields does not establish assistant authorship of those objects.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode AI Assist operates only within report and dataset SQL query editors, not within the Definitions editor, and cannot create or modify shared Definition assets.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Field descriptions can be added to Datasets to build shared understanding around business and logic definition."
  - Source: https://mode.com/developer/api-reference/analytics/dataset-field-descriptions (checked 2026-10-26)
  - Reasoning: Through the API, an outside agent can GET a Dataset's field descriptions, which carry the business meaning of each field. The Definitions endpoints also return shared Definitions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To retrieve information about a single Definition, send a GET request including the definition token to the `definitions` resource."
  - Source: https://mode.com/developer/api-reference/analytics/definitions (checked 2026-10-26)
  - Reasoning: The Definition response contains its source SQL and description, so an outside agent can read Mode’s maintained shared business logic. Dataset field_descriptions GET additionally exposes field business meanings rather than only column names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Field descriptions can be added to Datasets to build shared understanding around business and logic definition."
  - Source: https://mode.com/developer/api-reference/analytics/dataset-field-descriptions (checked 2026-10-26)
  - Reasoning: Mode provides API endpoints to retrieve Dataset field descriptions and shared Definitions (saved SELECT statements) programmatically.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Similar to the example for updating query texts, you can also use the Mode API to update a Definition’s text without going into the Definitions editor."
  - Source: https://mode.com/developer/api-cookbook/reports/update-definition-texts (checked 2026-10-26)
  - Reasoning: The Definitions API supports POST and PATCH, so the shared definition layer is writable from outside Mode.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Similar to the example for updating query texts, you can also use the Mode API to update a Definition’s text without going into the Definitions editor."
  - Source: https://mode.com/developer/api-cookbook/reports/update-definition-texts (checked 2026-10-26)
  - Reasoning: The first-party API lets an outside agent change the SQL source of shared Definitions, not merely documentation. Definition create, PATCH and delete routes are also documented.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To create a new Definition, send a POST request to the `definitions` resource."
  - Source: https://mode.com/developer/api-reference/analytics/definitions (checked 2026-10-26)
  - Reasoning: Mode provides API endpoints to create and update shared Definitions and Dataset field descriptions from outside the product.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Not found**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Definitions are 'created and maintained in Mode rather than your database'. GitHub sync exports them to a repository, not to the warehouse. No push-down of Mode definitions into warehouse views or models is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Definitions are documented as maintained in Mode, while Datasets cache query results in Helix and GitHub sync stores code in a repository. No documented path pushes those maintained definitions into warehouse logic. Executing arbitrary SQL is insufficient to establish definition export or pushdown.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Mode Definitions and modeling logic remain within Mode or its connected GitHub repository and cannot be exported or pushed down into the warehouse as database views or dbt models.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can create a dataset directly from a SQL query in an existing report, as long as the query has run successfully and returned a non-zero number of rows."
  - Source: https://mode.com/help/articles/datasets (checked 2026-10-26)
  - Reasoning: A one-off report query can be promoted in place ('Create a Dataset from this Query' > Promote) into a reusable, shareable, schedulable Dataset. No developer has to rewrite it.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This process takes a snapshot of your SQL query and saves and executes it as a reusable dataset."
  - Source: https://mode.com/help/articles/datasets (checked 2026-10-26)
  - Reasoning: Mode directly promotes a successfully run SQL query from an existing report into a named Dataset in a Collection, without rewriting its calculation. That maintained reusable Dataset can power multiple reports and refresh on a schedule.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can create a dataset directly from a SQL query in an existing report, as long as the query has run successfully and returned a non-zero number of rows."
  - Source: https://mode.com/help/articles/datasets (checked 2026-10-26)
  - Reasoning: Mode provides a direct one-click workflow ('Click Promote') to turn a SQL query from an individual report into a maintained shared Dataset without rewriting it.

