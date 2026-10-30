# Snowflake: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/snowflake/

AI Feature Score **88**, #2 of 15 (Data platform). Built-in AI 86, external AI 89, other 85. Analysis 75, Building and maintaining assets 98, Context and connections 96, Reliability and controls 84. By model: Claude Opus 5.5 90, GPT-6.1 Sol 86, Gemini 3.8 Flash 88.

## Score breakdown

Four areas, 25 points each. Shown for Gemini 3.8 Flash, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 18.8 of 25
- Building and maintaining assets: 24.5 of 25
- Context and connections: 24.1 of 25
- Reliability and controls: 21.1 of 25

**Strengths**

- Forecast with visible assumptions
- You can cap what agents consume
- It tells you which context it used

**Not found in the docs**

- It names the fields it used

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Natural language interaction: An intuitive, conversational interface allows users to ask questions using natural language and receive deep insights."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: Snowflake CoWork, the built-in assistant, takes plain-English questions. Cortex Agents turn them into governed SQL answers via Cortex Analyst, with no pre-built dashboard needed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Natural language interaction: An intuitive, conversational interface allows users to ask questions using natural language and receive deep insights."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: The ready-to-use CoWork interface accepts business questions in natural language and its native agents query enterprise data.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "With Cortex Analyst, business users can ask questions in natural language and receive direct answers without writing SQL."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst (checked 2026-10-26)
  - Reasoning: Business users can ask questions in plain natural language and receive direct answers and generated queries without writing SQL.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When the report is ready, it stays in context for the rest of the thread, so follow-up questions such as “break that down by region” run as standard chat turns without restarting the research."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork keeps the thread context, so a follow-up such as 'break that down by region' refines the earlier answer. Cortex Agents threads also persist context across turns.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When the report is ready, it stays in context for the rest of the thread, so follow-up questions such as “break that down by region” run as standard chat turns without restarting the research."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: A CoWork investigation stays in the thread, and subsequent region-breakdown requests reuse its context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Build complex queries through a conversation with Snowflake Copilot by asking follow-up questions to refine the suggested SQL query."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-copilot (checked 2026-10-26)
  - Reasoning: Users can refine answers and build complex queries by carrying on the conversation and asking follow-up questions.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Deep, trustworthy insights: Breaks down questions and chooses the best tools to deliver accurate, actionable insights. Provides traceability to source data and queries, while “Verified Answers” allow data teams to add trusted responses."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork answers trace back to the queries used. The Agent run API also returns the Cortex Analyst 'sql' and 'sql_explanation' fields with the answer.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Every claim in the report is traced back to its source data and queries, so you can verify the reasoning and share results with confidence."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork Deep Research exposes the source data and queries supporting each claim, allowing users to inspect the analytical derivation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Snowflake Copilot responds with a SQL query that answers your question."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-copilot (checked 2026-10-26)
  - Reasoning: The assistant provides the exact SQL query derived to answer the user's natural language question.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Not found** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Snowflake page documents a list of specific tables, columns or metrics attached to a Cortex Analyst, Cortex Agent, CoWork or CoCo answer. The Cortex Analyst REST API returns a semantic_model_selection field naming which semantic model was chosen, but that only names the dataset, which the row excludes. It also returns verified_query_used, which is query text and provenance, and that belongs to V3. Citations in Cortex Agents and CoWork are cortex_search_citation document citations (source URL or file), not table, column or metric citations for structured answers.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: CoWork documents traceability to source data and queries, and the Agents response API documents citations to retrieved documents. Neither establishes a separate answer-associated list of specific source tables, columns, or metrics. Generated SQL, result-column metadata, and semantic-view tool names do not establish this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Snowflake documentation documents source citations for unstructured Cortex Search queries (cortex_search_citation), and administrative query monitoring tables (CORTEX_ANALYST_REQUESTS_V.tables_referenced), but does not document any field list or citation of specific tables, columns, or metrics attached to the generated analytical answer returned to the end user.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent can use the content of the files to answer questions and provide insights."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork's zero-setup file upload accepts spreadsheets (.xlsx, .xls, .csv) in chat, and the agent analyzes their contents to answer questions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent can use the content of the files to answer questions and provide insights."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork’s zero-setup chat upload lets its agent analyze uploaded content; the same section explicitly lists .xlsx, .xls, and .csv spreadsheets.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Snowflake CoWork supports uploading files directly in the chat interface to provide more context for the agent."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: Snowflake CoWork allows users to upload files directly into the chat interface for AI analysis.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Yes** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Using natural language prompts, the CoCo agent helps you explore data, author dbt models, add tests, optimize performance, and generate documentation through iterative feedback."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: CoCo in Snowsight (GA) explores raw data and scaffolds staging and intermediate dbt models. The reshaping logic it leaves behind is inspectable dbt model code.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use CoCo to explore, clean, and transform raw data into ML-ready inputs."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-ml/agentic-ml (checked 2026-10-26)
  - Reasoning: CoCo performs preprocessing and transformations itself; this page also specifies that the Python it writes and runs remains inspectable in generated notebook cells.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Using natural language prompts, the CoCo agent helps you explore data, author dbt models, add tests, optimize performance, and generate documentation through iterative feedback."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: CoCo helps users clean, transform, and reshape data by authoring and modifying inspectable dbt transformation models and SQL code.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Yes** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "They generate SQL over structured data using Cortex Analyst semantic views and use Cortex Search to retrieve insights from unstructured sources, then reason over the combined results."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: Built-in Cortex Agents (which power CoWork) combine structured semantic-view data with unstructured document sources in one answer. CoWork also accepts uploaded files alongside them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Deep Research is agentic exploration: the agent runs an autonomous loop that cross-references structured tables, unstructured data in stages, and external context to explain the why behind the numbers."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork’s own Deep Research combines structured tables, staged unstructured data, and external context in one investigation. This is broader than joining multiple tables within one database.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "They generate SQL over structured data using Cortex Analyst semantic views and use Cortex Search to retrieve insights from unstructured sources, then reason over the combined results."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: Cortex Agents combine multiple data sources in a single analysis, querying structured warehouse tables via Cortex Analyst and unstructured content via Cortex Search, reasoning over the combined results.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent determines whether data is best shown as a chart or table based on the query type."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: The CoWork agent chooses and generates a chart or table suited to the question. The overview's built-in visualization capability carries no preview label; only the separate chart-customization page is preview.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent determines whether data is best shown as a chart or table based on the query type."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork’s native agent chooses whether a question should produce a chart or table and generates that visualization.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent determines whether data is best shown as a chart or table based on the query type."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: Snowflake CoWork agents automatically choose whether to present analytical results as a chart or a table based on query characteristics.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Reach for Deep Research when you need to understand why something happened, when the answer likely spans multiple tables or domains, or when you want a citable report you can hand to stakeholders."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork Deep Research investigates why something happened and traces claims to queries. No documented breakdown shows each segment's contribution to a change, and no key-driver function is documented as used by the assistant (TOP_INSIGHTS appears only as a SQL class).
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "It might ask you to run SQL statements to gather more information, such as a statement that identifies the warehouses, queries, or users that contributed to a spike."
  - Source: https://docs.snowflake.com/en/user-guide/cost-anomalies-ui (checked 2026-10-26)
  - Reasoning: CoCo investigates cost changes and exposes SQL to identify contributing warehouses, queries, or users. The documentation does not establish a calculated contribution breakdown or shares of the total change.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Deep Research is an investigation mode for complex, open-ended questions that require multi-step reasoning across your data."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: Snowflake CoWork provides Deep Research as an investigation mode for complex, open-ended questions requiring multi-step reasoning across data. However, the documentation does not describe breaking down changes into contributing factors or segments with checkable calculations (such as share of change), and Snowflake's key driver analysis class (TOP_INSIGHTS) is a SQL/ML class called in SQL queries rather than a tool used by the conversational assistant. Per the rule, naming causes or describing changes without checkable contribution calculations earns partly.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Yes (preview)** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "CoCo infers everything else (task type, target column, evaluation metric, train/test split strategy) and asks you to confirm before proceeding."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-ml/agentic-ml (checked 2026-10-26)
  - Reasoning: The Auto ML skill belongs to Snowflake CoCo, Snowflake's own built-in AI, available in CoCo in Snowsight, CoCo Desktop and the CoCo CLI. The page says it does time-series forecasting from a prompt such as "Forecast daily order volume for the next 2 weeks from ORDERS table", so the AI itself produces the forecast with a stated horizon and input table. The quoted sentence shows that it surfaces its assumptions (task type, target column, evaluation metric, train/test split strategy) for the user to confirm. The same page says it proposes a configuration and waits for approval. It also leaves a notebook with "the full decision trail", experiment-tracking metrics and parameters, and diagnostic plots including "forecast components". Together these expose the horizon, inputs and assumptions so the forecast can be challenged. The section is labelled "Preview Feature — Open", so release_stage is preview. In the source file the quoted sentence wraps after "train/test split"; the line break is rendered as a space.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "CoCo infers everything else (task type, target column, evaluation metric, train/test split strategy) and asks you to confirm before proceeding."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-ml/agentic-ml (checked 2026-10-26)
  - Reasoning: The public-preview Auto ML skill includes a native ORDERS forecast for the next two weeks. The user specifies its source and horizon; CoCo exposes and confirms target, metric, and split strategy, and preserves the experimentation code and full decision trail in a notebook.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The Auto ML skill builds a complete machine learning model from scratch."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-ml/agentic-ml (checked 2026-10-26)
  - Reasoning: The Auto ML skill in Snowflake CoCo builds machine learning forecasting models from scratch across multiple algorithms and exposes evaluation metrics.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Snowflake page documents Cortex Analyst, Cortex Agents, CoWork or CoCo defining several what-if scenarios with stated changed assumptions and calculating results to compare side by side. Matches for 'what if' and 'sensitivity' are unrelated: feature-store prose, anomaly-detection sensitivity settings and SENSITIVITY governance tags.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No settling documentation found for a built-in Snowflake assistant calculating what-if scenarios with stated changed assumptions, either singly or side by side. General Python execution and analysis capabilities do not establish scenario analysis. The what-if search matches concern network-policy simulation or transcribed speech rather than assistant-generated analytical scenarios.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Snowflake documentation does not describe any capability for Cortex Analyst, Cortex Agents, or Snowflake CoWork to define, calculate, and compare multiple what-if scenarios with explicitly stated changed assumptions. Mentions of what-if simulations in documentation are confined to network ingress policy evaluation (EVALUATE_CANDIDATE_NETWORK_POLICY) and audio transcription samples.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Consumer (check and assess freshness): Check when a consumed listing last refreshed and assess whether shared data is stale"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: The listing-observability skill is one of the CoCo CLI bundled skills, which the page says are "available in every session". CoCo is Snowflake's own AI, so this is the built-in assistant reporting when data it would use was last refreshed and whether it is stale. That exposes data age, but only when a user asks for a freshness check on consumed listings. No page says that analytical answers from CoCo, Cortex Analyst, Cortex Agents or CoWork automatically show the age or last-refresh time of the data they used. This is less than the full row, so it is partly. The page has no preview label, so release_stage is generally available. Note that the similar 'checking-freshness' skill is excluded because the page lists it under the separately installed Airflow plugin on Astro.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: CoWork documents rerunning questions against current data and refreshing saved charts, but does not document showing the age or last-refresh time of the data with the answer. CoCo skills can inspect listing refresh history or check table freshness; these do not establish freshness indicators attached to analytical answers or their displayed data sources.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Snowflake documents data metric functions for freshness (SNOWFLAKE.CORE.FRESHNESS), maximum staleness properties on semantic views (MAX_STALENESS), and stream staleness, but no documentation indicates that the built-in assistant or Cortex Agents expose the age, last-refresh timestamp, or staleness of data with their answers to the user at the point of use.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Open a chat session with the app context loaded for making changes."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/building-apps (checked 2026-10-26)
  - Reasoning: CoCo Desktop's Modify app action loads a Streamlit dashboard app's code, including the queries feeding its charts, into the assistant. A deployed Streamlit app is published BI content.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Code explanation: Request an explanation of existing SQL to assist with understanding or collaboration."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: CoCo explicitly reads and explains existing SQL in Workspaces. Although Snowflake documents app and dashboard creation, this evidence does not establish retrieval of the query behind a particular existing BI chart, so the SQL-editor partial scope applies.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Each follow-up starts a new conversation with the visualization specification, data snapshot, and a summary of the original conversation context."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: Snowflake CoWork reads the visualization specification and data snapshot of a saved chart artifact when answering follow-up questions.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Iterate on the app using natural language. Ask the agent to add features, change layouts, or fix issues."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/building-apps (checked 2026-10-26)
  - Reasoning: CoCo writes and changes the queries and charts in Streamlit dashboard apps (e.g. adding a revenue-by-category pie chart) and deploys them. CoCo can also author dashboard (.dash) files.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent creates a single `streamlit_app.py` file with Snowflake-branded theming, connected to your tables via Snowpark."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/building-apps (checked 2026-10-26)
  - Reasoning: In the documented Build an app workflow, CoCo creates a viewer-facing Streamlit dashboard with live table queries, charts, and KPI components, then deploys it to Snowflake. It authors the data-query logic powering those app charts rather than only generating unrelated editor SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For other chart types, ask Snowflake CoWork to change the chart."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: Users can prompt Snowflake CoWork to modify and change chart configurations and visual encodings.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Push committed changes from the Streamlit back to its connected Git repository."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/streamlit/streamlit-introduction (checked 2026-10-26)
  - Reasoning: Via the Streamlit REST API, an outside agent gets the whole app source, which it must parse for a chart's query. Dashboard artifact SQL interfaces 'return metadata, not content'.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This location is readable and writable."
  - Source: https://docs.snowflake.com/en/sql-reference/sql/desc-streamlit (checked 2026-10-26)
  - Reasoning: DESCRIBE STREAMLIT exposes the readable live-version source-file location for a specific deployed analytical app. An outside agent must retrieve and inspect app source files to recover a chart’s calculation; no per-chart calculation endpoint is documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "These interfaces return metadata, not content."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-artifacts (checked 2026-10-26)
  - Reasoning: An outside agent cannot read the calculation behind a specific chart or table in BI content through a granular endpoint. SQL interfaces for Snowflake dashboard and chart artifacts return metadata, not content ('These interfaces return metadata, not content'), and for Streamlit dashboard apps, an outside agent can only download the entire app source file through Git or REST, which it must parse itself to extract a specific chart calculation. Per the rules, downloading a whole file that must be parsed is partly.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Create a new Streamlit application, or replace an existing one."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/streamlit/streamlit-introduction (checked 2026-10-26)
  - Reasoning: An outside agent can change a dashboard app's calculations only by replacing the app or adding a version from files. No per-chart write interface is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can remotely update a live app by copying files to this location."
  - Source: https://docs.snowflake.com/en/sql-reference/sql/desc-streamlit (checked 2026-10-26)
  - Reasoning: An outside agent can replace a deployed Streamlit app’s source files to change chart/query logic. This is file-based app replacement, not a specific-chart calculation write interface.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Artifact administration SQL manages existing artifacts; it doesn’t create artifacts or edit their content."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-artifacts (checked 2026-10-26)
  - Reasoning: Snowflake provides no interface for outside coding agents to update the calculation behind an individual chart or table in BI content. Dashboard and chart artifact SQL interfaces do not create or edit content ('Artifact administration SQL manages existing artifacts; it doesn’t create artifacts or edit their content'), and Streamlit dashboard apps can only be updated by replacing the entire app or adding a new version from files. Under the evidence rules, replacing a whole file or workbook earns partly.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can ask follow-up questions about a saved chart or table."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: CoWork opens saved or shared chart artifacts and works from them. Follow-ups start with the visualization spec, data snapshot and original context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can ask follow-up questions about a saved chart or table."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: CoWork can reopen persistent saved chart/table BI artifacts and start analysis from their visualization specification, data snapshot, and original-conversation summary.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "CoCo can author dashboard files, but its sandbox environment doesn’t publish Dashboard artifacts."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-artifacts-create-share (checked 2026-10-26)
  - Reasoning: The built-in CoCo assistant can inspect and author dashboard files (.dash) within Workspaces.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The saved artifact preserves the underlying query, visualization specification, and a cached snapshot generated with the viewer’s credentials."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: A CoWork-generated chart saves as a Chart artifact. It is a securable object with an OWNERSHIP role and READ/WRITE grants, and it reruns its query with caller's rights against governed data.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The saved artifact preserves the underlying query, visualization specification, and a cached snapshot generated with the viewer’s credentials."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: CoWork generates the chart or table and saves its query and visualization as a persistent Chart artifact. The page links the artifact’s owner and RBAC model and documents refresh against current governed data.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "CoCo can author dashboard files, but its sandbox environment doesn’t publish Dashboard artifacts."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-artifacts-create-share (checked 2026-10-26)
  - Reasoning: CoCo can author dashboard (.dash) files in Workspaces, but cannot directly publish Dashboard artifacts from its sandbox environment.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Push committed changes from the Streamlit back to its connected Git repository."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/streamlit/streamlit-introduction (checked 2026-10-26)
  - Reasoning: Outside agents can only get dashboard-app contents as whole source files through Git. Artifact (dashboard or chart) SQL interfaces return metadata, not content, so no structured read of charts, queries and filters is documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This location is readable and writable."
  - Source: https://docs.snowflake.com/en/sql-reference/sql/desc-streamlit (checked 2026-10-26)
  - Reasoning: For a specific published Streamlit analytical app, DESCRIBE returns its readable live-version source URI. Authorized outside clients can retrieve the app source that defines charts, queries, and filters; this is viewer-facing app content, not just object enumeration or a notebook.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "These interfaces return metadata, not content."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-artifacts (checked 2026-10-26)
  - Reasoning: Outside agents cannot perform a structured read of charts, queries, and filters from existing BI content. Snowflake dashboard and chart artifacts provide administrative SQL interfaces (SHOW ARTIFACTS, DESCRIBE ARTIFACT) that return metadata rather than content ('These interfaces return metadata, not content'), and Streamlit dashboard apps can only be retrieved as whole source files through Git integration.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create a new Streamlit application, or replace an existing one."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/streamlit/streamlit-introduction (checked 2026-10-26)
  - Reasoning: An outside agent can create a published Streamlit dashboard app (BI content) through the vendor's REST API, versioned from Git or a stage.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If you already have a Streamlit app on your local machine or on a Snowflake stage, use one of the following methods to create a STREAMLIT object from your source files."
  - Source: https://docs.snowflake.com/en/developer-guide/streamlit/app-development/creating-your-app (checked 2026-10-26)
  - Reasoning: The first-party SQL and CLI workflows deploy local app code as a persistent STREAMLIT object visible to viewers with USAGE privilege. An outside coding agent can author and deploy such a live analytical app using that interface.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Snowflake REST Streamlit API provides the following endpoints to access, update, and perform certain actions on Streamlit resources."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/streamlit/streamlit-introduction (checked 2026-10-26)
  - Reasoning: Outside agents can create persistent, published Streamlit dashboard apps (BI content in Snowflake) through the vendor's Snowflake REST Streamlit API (POST /api/v2/databases/database/schemas/schema/streamlits to create a new Streamlit application or replace an existing one) as well as through the Snowflake CLI (snow streamlit deploy).

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Each viewer’s chart or table snapshot is generated under that viewer’s credentials."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: Chart artifacts built by CoWork can be shared with named roles or users, and each viewer's results honor their own RBAC, row-access and masking policies. Thread snapshots differ, but chart artifacts meet the row.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Each viewer’s chart or table snapshot is generated under that viewer’s credentials."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: CoWork-created Chart artifacts can be saved and shared through role/user grants. Each viewer’s refresh uses that viewer’s credentials and enforces RBAC, row access, and masking; static Thread snapshots are a different artifact type.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Query-backed artifacts: Snowflake evaluates the viewer’s data privileges when queries run."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-artifacts (checked 2026-10-26)
  - Reasoning: Shared query-backed artifacts evaluate the viewer's data privileges at runtime, ensuring access control policies are respected.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Use the artifacts hub to find your saved and shared content:"
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/artifacts (checked 2026-10-26)
  - Reasoning: Users can search only their own saved artifacts and those opened through a shared link. Workspace-wide SHOW ARTIFACTS is 'coming soon', so colleagues' assets cannot be browsed across the account.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To list the Streamlit apps for which you have access, use the `snow streamlit list` command."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-cli/streamlit-apps/manage-apps/manage-app (checked 2026-10-26)
  - Reasoning: Users can enumerate all permitted published Streamlit analytical apps with the vendor CLI, including colleagues’ and CoCo-created apps. This satisfies workspace/account-wide permitted browsing without needing a known app ID.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "With Universal Search, you can find objects in your account, data products available to you in the Snowflake Marketplace, relevant Snowflake Documentation topics, and relevant Snowflake Community Knowledge Base articles, all from the Snowsight home page."
  - Source: https://docs.snowflake.com/en/user-guide/ui-snowsight-universal-search (checked 2026-10-26)
  - Reasoning: Universal Search enables finding account objects, data products, documentation, and community knowledge directly across Snowflake.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Yes** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You define an agent as a reusable object that bundles its model, tools, and orchestration instructions."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: A Cortex Agent is a schema-level object with its own instructions, tools and data (semantic views, search services). Colleagues get USAGE on it and reuse it in Snowflake CoWork (see deploy-agents privileges).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You define an agent as a reusable object that bundles its model, tools, and orchestration instructions."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: A persistent Cortex Agent stores its tools, model, and instructions. The page documents creation once and reuse, with USAGE and underlying-resource privileges controlling colleagues’ access.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You define an agent as a reusable object that bundles its model, tools, and orchestration instructions."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: Snowflake Cortex Agents are schema-level persistent objects that bundle model configuration, tools, and orchestration instructions for reuse across sessions.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Yes** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Each time the automation runs, Snowflake CoWork re-executes the original question against current data and delivers the result to your email."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/automations (checked 2026-10-26)
  - Reasoning: The CoWork agent itself reruns the defined analysis on a schedule (agent tasks) and emails a fresh result without anyone present.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "With automations, you can schedule recurring reports that run automatically on a cadence you define, delivering AI-generated summaries, key metrics, and insights directly to your inbox."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/automations (checked 2026-10-26)
  - Reasoning: CoWork itself reruns the original question against fresh data and delivers an AI-generated report on the configured cadence.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "With automations, you can schedule recurring reports that run automatically on a cadence you define, delivering AI-generated summaries, key metrics, and insights directly to your inbox."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/automations (checked 2026-10-26)
  - Reasoning: Snowflake CoWork automations allow users to schedule recurring AI reports and analyses that execute autonomously on a defined cadence.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Yes** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "With MCP connectors, your agents can go beyond answering questions to taking action across enterprise systems, such as creating Jira tickets, updating Salesforce records, or posting to Slack, all within Snowflake’s governed environment."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp-connectors (checked 2026-10-26)
  - Reasoning: Built-in Cortex Agents and CoWork can act on their own outside analytics content: create Jira tickets, update Salesforce, post to Slack. Custom tools can also call backend systems.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "With MCP connectors, your agents can go beyond answering questions to taking action across enterprise systems, such as creating Jira tickets, updating Salesforce records, or posting to Slack, all within Snowflake’s governed environment."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp-connectors (checked 2026-10-26)
  - Reasoning: Snowflake’s own Cortex Agents and CoWork can invoke external MCP tools to create Jira tickets, update Salesforce records, or post to Slack. These are named side effects outside analytical content.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "MCP connectors to remote Model Context Protocol (MCP) servers, letting agents discover and invoke tools hosted by providers such as Atlassian Jira, Salesforce, or your own applications."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: Snowflake Cortex Agents can take actions in external systems by connecting to remote Model Context Protocol (MCP) servers to discover and invoke tools hosted by third-party systems like Jira and Salesforce.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "By default, tools that modify state (such as `bash`, `write`, `edit`, and `snowflake_sql_execute`) require user approval before execution."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-coding-agent (checked 2026-10-26)
  - Reasoning: A built-in Coding Agent that reaches a state-modifying step pauses and returns a permission request to a person. The documented hand-off loop has the decision come back as a permission_decision block, and over SQL the statement ends without the tool running.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Reflect and respond: The agent evaluates the results from each tool to decide what to do next, whether that’s asking a clarifying question, calling another tool, or generating a final response."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: The native agent may ask a clarifying question in its reasoning loop. No documented failure escalation to a named person, notification, or review queue is established by this behavior.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Reflect and respond: The agent evaluates the results from each tool to decide what to do next, whether that’s asking a clarifying question, calling another tool, or generating a final response."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: Cortex Agents can evaluate tool outcomes and ask clarifying questions to users when uncertain or stuck, though full human escalation workflows are limited to interactive prompts.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Yes** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The front matter specifies the agent’s name, description, tool access, and model."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/extensibility (checked 2026-10-26)
  - Reasoning: In CoCo CLI (GA), customers define named custom subagents with explicit tool access and model. CoCo delegates tasks to them automatically or by name, with parallel runs documented. Agent toolsets in Cortex Agents only inherit tools, so they were not relied on.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The front matter specifies the agent’s name, description, tool access, and model."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/extensibility (checked 2026-10-26)
  - Reasoning: CoCo allows customer-defined named subagents with explicit tools, model, and task instructions; the page documents explicitly requesting a named agent to explore database-query definitions. These are customer-configured delegates rather than hidden implementation subagents.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Custom agents let you pre-configure a name, description, allowed tools, model, and system prompt — useful when you have a recurring kind of task you want to delegate to a specialized agent."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/agents (checked 2026-10-26)
  - Reasoning: Snowflake Cortex Code supports delegating tasks between agents by defining specialized custom agents and routing tasks to subagents.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Yes** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "An MCP connector in Snowflake connects Snowflake CoWork and Cortex Agents to a remote Model Context Protocol (MCP) server, letting the agent discover and invoke tools hosted by providers such as Atlassian Jira, Salesforce, or your own custom applications."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp-connectors (checked 2026-10-26)
  - Reasoning: Admins attach external MCP servers to the vendor's own assistant (CoWork / Cortex Agents). CoCo CLI also supports configured MCP servers.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "MCP Connectors allow CoCo in Snowsight to use external tools and data sources through the Model Context Protocol (MCP)."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight/mcp-connectors (checked 2026-10-26)
  - Reasoning: Administrators configure external MCP servers for CoCo in Snowsight, whose own AI then discovers and invokes their tools.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "MCP connectors to remote Model Context Protocol (MCP) servers, letting agents discover and invoke tools hosted by providers such as Atlassian Jira, Salesforce, or your own applications."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: Snowflake Cortex Agents can act as MCP clients, connecting to external MCP servers to discover and execute third-party tools.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Trace which downstream tables and dashboards break if a source table schema changes"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: CoCo's built-in lineage skill finds the downstream dashboards a schema change breaks. Repairing them or flagging them to an owner is not documented as an AI step.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Create and modify interactive Snowflake dashboards with charts, KPI widgets, tables, and markdown: including adding, editing, and fixing widgets."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: CoCo’s native dashboard skill can repair dashboard widgets. The corpus does not connect this repair to AI identification of all Snowflake BI assets affected by a schema or shared-definition change; cross-platform lineage impact analysis alone does not establish that combined workflow.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "CoCo reads the same lineage that the catalog exposes and reports the downstream objects, ranked by risk, along with how often each is queried and how many users it affects."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-horizon/horizon-context (checked 2026-10-26)
  - Reasoning: Snowflake CoCo performs downstream impact analysis using Horizon lineage to evaluate the blast radius of schema migrations, though automatic fixing of broken content is not documented.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Yes** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Screenshot capture for the agent to verify its own work"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/building-apps (checked 2026-10-26)
  - Reasoning: CoCo Desktop sees the app's code (Modify app loads app context) and its rendered layout through the Agent Browser preview and screenshots.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can iterate on the app by asking the agent to make changes."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/building-apps (checked 2026-10-26)
  - Reasoning: CoCo works from the existing app project and context, updates its code/layout, and uses an in-IDE browser with rendering and screenshots to inspect the running app. This is the first-party app-building assistant workflow.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create, edit, debug, and style Streamlit in Snowflake apps: including custom CSS theming, custom components, and packaged component development."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: The built-in CoCo assistant includes the developing-with-streamlit skill, allowing it to inspect, debug, and read generated Streamlit in Snowflake applications.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Yes** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "CoCo Desktop scaffolds working applications connected to your Snowflake data, runs a local development server for live iteration, and deploys the finished app to Snowflake."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/building-apps (checked 2026-10-26)
  - Reasoning: CoCo deploys persistent Streamlit or App Runtime apps on live Snowflake data, governed by RBAC with an owning role. Caller's rights are supported.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent scaffolds the project, wires up your Snowflake data, and deploys to a live URL."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-app-runtime/about-snowflake-app-runtime (checked 2026-10-26)
  - Reasoning: CoCo’s built-in app skill creates and deploys a persistent Snowflake Application Service with live data access. This page documents inherited SSO, RBAC, audit/governance, and caller-rights queries; it is a first-class deployed app, not disposable HTML.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create, edit, debug, and style Streamlit in Snowflake apps: including custom CSS theming, custom components, and packaged component development."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: The built-in assistant can author and edit generated applications, creating and modifying Streamlit in Snowflake apps via the developing-with-streamlit skill.

### A_OR: Can an outside coding agent read a generated app?

**Result: Yes** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Push committed changes from the Streamlit back to its connected Git repository."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/streamlit/streamlit-introduction (checked 2026-10-26)
  - Reasoning: A script or outside agent can pull an app's definition out of Snowflake through the Streamlit REST API, pushed to Git or fetched by name.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This location is readable and writable."
  - Source: https://docs.snowflake.com/en/sql-reference/sql/desc-streamlit (checked 2026-10-26)
  - Reasoning: The documented DESCRIBE STREAMLIT interface returns a specific deployed app’s readable live-version source URI and its main file. An outside client can pull its source definition through Snowflake’s file/SQL interfaces, rather than only reading its title or URL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Snowflake REST Streamlit API provides the following endpoints to access, update, and perform certain actions on Streamlit resources."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/streamlit/streamlit-introduction (checked 2026-10-26)
  - Reasoning: Snowflake documents the Snowflake REST Streamlit API, which provides endpoints that an outside agent or script can use to access and read Streamlit applications by name (GET /api/v2/databases/database/schemas/schema/streamlits/name to fetch detailed information about a specific Streamlit app) or commit and push changes back to a connected Git repository (POST /api/v2/databases/database/schemas/schema/streamlits/name:push).

### A_OW: Can an outside coding agent build a generated app?

**Result: Yes** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create a new Streamlit application, or replace an existing one."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-rest-api/streamlit/streamlit-introduction (checked 2026-10-26)
  - Reasoning: Outside agents can create apps through the same vendor API that publishes Streamlit apps, or through the Snowflake CLI (snow streamlit deploy).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If you already have a Streamlit app on your local machine or on a Snowflake stage, use one of the following methods to create a STREAMLIT object from your source files."
  - Source: https://docs.snowflake.com/en/developer-guide/streamlit/app-development/creating-your-app (checked 2026-10-26)
  - Reasoning: Outside coding agents can use the documented CREATE STREAMLIT SQL or snow streamlit deploy workflow to turn authored source into a persistent live Snowflake app with warehouse and access-control configuration.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The command uploads local files to a specified stage and creates a Streamlit app using those files."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-cli/command-reference/streamlit-commands/deploy (checked 2026-10-26)
  - Reasoning: Outside coding agents can author and deploy generated apps into Snowflake using the vendor CLI command snow streamlit deploy, which uploads local app files to a stage and creates a persistent Streamlit app object in the database and schema. Snowflake also documents the REST API endpoint POST /api/v2/databases/database/schemas/schema/streamlits to create a new Streamlit application or replace an existing one.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Yes** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Cortex Agent evaluations allow you to test, baseline, and hill climb on your agent’s behavior and performance, so that you know when your agent is ready to roll out to your users."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-evaluations (checked 2026-10-26)
  - Reasoning: Saved evaluation datasets with ground truth, answer-correctness and LLM-judge custom metrics run against the built-in Cortex Agents that power CoWork. Only some individual metrics are labeled preview; the feature itself is not.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Snowflake also allows you to create custom evaluation metrics that use the LLM judging process to measure context critical to your agent’s domain and use case."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-evaluations (checked 2026-10-26)
  - Reasoning: The evaluation system runs native Cortex Agents against saved cases and supports LLM judges, prompts, scoring criteria, and reference answers. This is not merely feedback collection or a custom application tutorial.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Cortex Agent evaluations allow you to test, baseline, and hill climb on your agent’s behavior and performance, so that you know when your agent is ready to roll out to your users."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-evaluations (checked 2026-10-26)
  - Reasoning: Snowflake provides native Cortex Agent evaluations to benchmark, test, and score agent accuracy and behavior against test datasets.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can pick a specific model, or one of these Auto options that choose a model for you:"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: Users can select a specific named model version in CoCo (older versions are listed under Other models), saved per chat. Cortex Agent specs also pin a named orchestration model such as claude-sonnet-4-6, which holds until changed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "CoCo saves your effort level for each chat, along with the selected model."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: CoCo lets users select a specific model, including older versions, and saves that selection with the chat. This establishes version selection for the built-in coding assistant; Auto modes and legacy Cortex Analyst’s automatic routing are distinct options.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Choose auto to let CoCo pick, auto-small for lightweight tasks, inherit to match the main chat’s model, or pin a specific model."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/agents (checked 2026-10-26)
  - Reasoning: Users and administrators can explicitly pin specific foundation models (such as Claude, GPT, Gemini) or choose auto model selection.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Opening a thread’s trace view shows the version that served each turn, so you can tell exactly which configuration produced a given response."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-monitor (checked 2026-10-26)
  - Reasoning: Agent observability keeps each turn's inputs and outputs, planning, tool calls and SQL execution spans, plus the model name and the immutable agent version (configuration) that served it.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "For that reason, Snowflake records the version and any alias used at invocation time for each turn instead of assigning one version to the whole thread."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-monitor (checked 2026-10-26)
  - Reasoning: Native agent traces preserve prompts, outputs, SQL/tool steps, and the configuration version serving each turn. The documentation does not establish preservation of the underlying data snapshot needed for full answer reconstruction.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Conversation threads (each made up of one or more turns), where each turn has one trace composed of spans such as planning, tool calls, SQL, chart generation, and response generation."
  - Source: https://docs.snowflake.com/en/sql-reference/local/ai_observability_events (checked 2026-10-26)
  - Reasoning: Snowflake logs detailed execution traces and spans (planning, tool calls, SQL, response generation) to the AI_OBSERVABILITY_EVENTS table, allowing post-hoc inspection of agent actions.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Yes** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When memory is enabled, CoCo records durable facts — your preferences, project context, and guidance you’ve given it — and brings the relevant ones back into new conversations automatically, so you don’t have to re-explain them each time."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/memory (checked 2026-10-26)
  - Reasoning: Guidance a user gives CoCo changes its later answers. The same page states the reach: global memory applies to all of that user's conversations, and project memory to a single workspace.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If the generated query is incorrect, select the Edit button to modify the query. Run the modified query to check if it produces the intended results. Continue editing and testing until the query works as desired. Then select Save as verified query to add it to your semantic model."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-repository (checked 2026-10-26)
  - Reasoning: The documented first-party verified-query editor lets a person correct and test an answer’s SQL, then save it into the semantic model’s VQR. The page explains that Analyst reuses relevant repository SQL for later similar questions, making the correction’s scope the users of that semantic model, rather than an unscoped feedback rating.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When the user’s question is similar to a query in the Verified Query Repository (VQR), Cortex Analyst uses that query to generate the SQL query in its response."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-repository (checked 2026-10-26)
  - Reasoning: Snowflake provides a Verified Query Repository (VQR) where corrections and curated example pairs are stored to improve future AI SQL generation.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Partly** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "List certified tables for a topic before writing SQL, and warn when a selected object is uncertified"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: CoCo's certified-data-product-discovery skill answers 'using only certified (or best available) Snowflake objects' and warns when an uncertified object is used. That both binds answers to certified content and flags departures.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "If the question exactly matches a verified query, Snowflake CoWork runs that verified query’s validated SQL directly, without generating new SQL."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/reference (checked 2026-10-26)
  - Reasoning: CoWork directly executes validated SQL for exact verified-query matches. Similar questions use the verified query as a model reference; the documentation does not promise enforcement or mismatch flags against all certified assets or governed metrics.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When the user’s question is similar to a query in the Verified Query Repository (VQR), Cortex Analyst uses that query to generate the SQL query in its response."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-repository (checked 2026-10-26)
  - Reasoning: When an incoming question matches a certified query in the Verified Query Repository (VQR), Cortex Analyst uses it and returns the verified_query_used metadata in its API response.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Yes** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "These limits help organizations control CoCo consumption by blocking access when a user’s estimated credit usage in a rolling 24-hour window exceeds the configured threshold."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/credit-usage-limit (checked 2026-10-26)
  - Reasoning: Per-user daily credit limits block CoCo once reached. Per-user quotas can also block Cortex Agents and CoWork usage.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When a user’s estimated usage reaches the configured limit for a given surface, access is blocked for that surface until usage drops below the threshold."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/credit-usage-limit (checked 2026-10-26)
  - Reasoning: Administrators can set per-user daily credit limits for CoCo in Snowsight, Desktop, and CLI. Reaching the estimated threshold blocks that surface; this is enforcement rather than spend reporting.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When block enforcement is enabled, Snowflake can automatically deny further AI requests for users who reach their limit."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/governance-and-availability/ai-cost-management-and-governance (checked 2026-10-26)
  - Reasoning: Snowflake enforces spending limits on AI requests with automatic block enforcement when users hit their quota.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Yes** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Use the `agent-observability-report` sub-skill of the CoCo `agent-studio` skill in the CoCo CLI to generate a report on agent monitoring metrics pulled from `SNOWFLAKE.LOCAL.AI_OBSERVABILITY_EVENTS`, including usage and adoption, latency percentiles, token economics, tool execution stats, conversation depth and completion, and a breakdown of user feedback."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-monitor (checked 2026-10-26)
  - Reasoning: Customers measure per-agent latency on their own workload from observability events. Cortex Analyst evaluations also record latency per evaluation run.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use the `agent-observability-report` sub-skill of the CoCo `agent-studio` skill in the CoCo CLI to generate a report on agent monitoring metrics pulled from `SNOWFLAKE.LOCAL.AI_OBSERVABILITY_EVENTS`, including usage and adoption, latency percentiles, token economics, tool execution stats, conversation depth and completion, and a breakdown of user feedback."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-monitor (checked 2026-10-26)
  - Reasoning: Customers can measure real native-agent latency percentiles by generating reports from their own agent monitoring records. Evaluation results additionally expose per-response DURATION_MS.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the agent-observability-report sub-skill of the CoCo agent-studio skill in the CoCo CLI to generate a report on agent monitoring metrics pulled from SNOWFLAKE.LOCAL.AI_OBSERVABILITY_EVENTS, including usage and adoption, latency percentiles, token economics, tool execution stats, conversation depth and completion, and a breakdown of user feedback."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-monitor (checked 2026-10-26)
  - Reasoning: Snowflake agent observability tracks and reports performance metrics including latency percentiles, token economics, and execution statistics from AI_OBSERVABILITY_EVENTS.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Yes** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "A shared resource budget lets you track and control credit consumption for AI features (such as AI Functions, Cortex Agents, Cortex Code, Snowflake CoWork, and the AI Gateway) broken down by the team or cost center consuming them."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/governance-and-availability/ai-cost-management-and-governance (checked 2026-10-26)
  - Reasoning: AI usage for CoCo and CoWork is attributed per tagged team or cost center. Usage views carry user_id for per-user attribution.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To attribute credit consumption to individual prompts, join the event table to SNOWFLAKE_COCO_USAGE_HISTORY on `REQUEST_ID`."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/observability (checked 2026-10-26)
  - Reasoning: The page’s query joins native CoCo requests to credit usage and groups by snow.user.name, allowing user-level attribution across Snowsight, Desktop, and CLI.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Budgets let you track and control CoCo credit consumption broken down by the team or cost center consuming it."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cost-controls (checked 2026-10-26)
  - Reasoning: Snowflake budgets allow organizations to track and control AI credit consumption broken down by team or cost center.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Yes** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Observability pane lists each conversation thread with its first input, user feedback, thread length, the user who ran it, and when it was last updated."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-monitor (checked 2026-10-26)
  - Reasoning: The agent behind CoWork logs prompts, tool calls and SQL execution spans per user. ACCESS_HISTORY.agents_info attributes object access to the agent and the user (agent-identity page).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Together, these columns help you reconstruct the causal chain that compliance teams often need: a user invoked an agent, specific queries followed, and specific objects were accessed."
  - Source: https://docs.snowflake.com/en/user-guide/agent-identity (checked 2026-10-26)
  - Reasoning: Native Cortex Agents and CoCo sessions are automatically marked agentic. QUERY_HISTORY agent_type and ACCESS_HISTORY agents_info connect the asking user, native agent, executed queries, and accessed analytical objects.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The view also includes relevant metadata, such as the user ID, request ID, and the agent ID."
  - Source: https://docs.snowflake.com/en/sql-reference/account-usage/cortex_agent_usage_history (checked 2026-10-26)
  - Reasoning: The CORTEX_AGENT_USAGE_HISTORY account usage view records audit metadata including user ID, request ID, and agent ID for AI requests.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can grant these roles to specific roles that you want to have access to the features, then grant those roles to specific users as needed."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/opting-out (checked 2026-10-26)
  - Reasoning: Admins revoke SNOWFLAKE.CORTEX_USER from PUBLIC and grant AI features to chosen roles and users. CoCo can also be enabled per user via credit limits, and CoWork automations per role.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can then selectively allow access for individual users by assigning them a positive value at the user level."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/credit-usage-limit (checked 2026-10-26)
  - Reasoning: An administrator can block CoCo by surface account-wide, then selectively enable named users using overrides. The AI-specific daily-limit control is granular rather than only a tenant switch.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Revoke both Cortex database roles from `PUBLIC`, then grant one of them only to the roles that need access."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: Cortex AI access can be gated and rolled out selectively by revoking default roles from PUBLIC and granting them to specific authorized roles.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Cortex Code pauses at key checkpoints for your review and approval."
  - Source: https://docs.snowflake.com/en/user-guide/dcm-projects/dcm-projects-overview (checked 2026-10-26)
  - Reasoning: When Cortex Code manages DCM-defined objects, including semantic views, the approval prompt goes to the requester ('your review'), not a separate named approver. Semantic Studio diffs are likewise accepted by the same user.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Deploy pushes your local YAML file directly to the live Snowflake object."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/semantic-studio (checked 2026-10-26)
  - Reasoning: CoCo-authored semantic-view changes remain in editable YAML until the user reviews the diff and confirms deployment. This is requester-controlled publication; the page does not require a different named approver.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Under Default Approvals, the agent stops and asks before running tool calls that could have side effects."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/permission-modes (checked 2026-10-26)
  - Reasoning: Cortex Code permission modes require confirmation before running side-effecting tools, but this is requester confirmation rather than approval by an independent person or role.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Except as you elect, all AI models run inside of Snowflake’s security and governance perimeter."
  - Source: https://docs.snowflake.com/en/guides-overview-ai-features (checked 2026-10-26)
  - Reasoning: Inference runs inside the Snowflake platform that holds the customer's warehouse. The customer controls where via CORTEX_ENABLED_CROSS_REGION, down to DISABLED (home region only), per the cross-region inference page.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You control the routing behavior through a single account-level parameter, CORTEX_ENABLED_CROSS_REGION, choosing the option that best fits your performance, compliance, and data residency requirements."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference (checked 2026-10-26)
  - Reasoning: Customers choose allowed cloud providers and geographies, or restrict processing to the home region, through CORTEX_ENABLED_CROSS_REGION. This is a routing-boundary choice for vendor-hosted inference, not a customer-operated model deployment.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You control the routing behavior through a single account-level parameter, CORTEX_ENABLED_CROSS_REGION, choosing the option that best fits your performance, compliance, and data residency requirements."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference (checked 2026-10-26)
  - Reasoning: Snowflake allows controlling cross-region inference routing via CORTEX_ENABLED_CROSS_REGION to manage data residency boundaries, though bringing custom keys for managed AI inference is not provided.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Seamless governance: Automatically inherits and respects all existing Snowflake data governance controls, including row-access policies and column-level security."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork answers apply row-access and column-level policies, and runs use the caller's role (automations follow caller's rights). CoCo performs only actions the active role permits.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "For example, for a Cortex Search Service that references a table with row-level masking policies, querying users of that service will be able to see search results from rows on which the owner’s role has read permission, even if the querying user’s role cannot read those rows in the source table."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-search/query-cortex-search-service (checked 2026-10-26)
  - Reasoning: CoWork’s structured SQL path documents caller-role row and column enforcement, but its Cortex Search tool runs with owner’s rights and can return indexed rows the asking user cannot read. Therefore existing per-user protections do not uniformly bind every native agent answer.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Seamless governance: Automatically inherits and respects all existing Snowflake data governance controls, including row-access policies and column-level security."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: Snowflake AI features automatically inherit and enforce existing Snowflake governance controls including row access policies and column masking.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "However, Snowflake has enabled zero data retention (ZDR) with Brave: Brave does not store the search query text, the results returned, or any metadata associated with the request, for any length of time."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-manage (checked 2026-10-26)
  - Reasoning: For agent web search, the docs name the receiving service (Brave), what it gets (query text, results) and retention (none). The cross-region page says inference payloads move transiently. No comparable statement names the services receiving prompts for model inference generally.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Data stays within Snowflake’s governance boundary. By default, Cortex Analyst is powered by Snowflake-hosted LLMs from Mistral and Meta, ensuring that no data, including metadata or prompts, leaves Snowflake’s governance boundary."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst (checked 2026-10-26)
  - Reasoning: For Cortex Analyst the page identifies Snowflake-hosted Mistral/Meta models and explains that metadata and prompts remain inside Snowflake, with semantic metadata used to generate SQL. It does not provide a complete service-by-service retention duration for all AI features.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "During cross-region inference, the inference payload—the input prompt you send and the output response you receive—is transmitted transiently to the processing region for the duration of processing."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference (checked 2026-10-26)
  - Reasoning: Snowflake documents that during cross-region inference, prompt and response payloads are transmitted transiently to processing regions and not stored permanently.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Your customer data remains stored only in the region where your account is located."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference (checked 2026-10-26)
  - Reasoning: The page states storage (account region) and processing regions for Cortex AI inference under each routing option. Web search and MCP connectors send requests over the public internet with no processing region stated, so not every AI feature is covered.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "During cross-region inference, the inference payload—the input prompt you send and the output response you receive—is transmitted transiently to the processing region for the duration of processing."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference (checked 2026-10-26)
  - Reasoning: The page documents processing within configured cloud/geography boundaries and storage only in the account’s region, with no persistence in the inference region. It does not establish processing and storage locations for every AI capability, including third-party MCP/web tools and local Desktop history.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Your customer data remains stored only in the region where your account is located."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference (checked 2026-10-26)
  - Reasoning: Snowflake explicitly guarantees that customer data remains stored only in the account's home region even when AI operations run.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Data privacy. Snowflake never uses your Customer Data to train models made available to our customer base."
  - Source: https://docs.snowflake.com/en/guides-overview-ai-features (checked 2026-10-26)
  - Reasoning: This default statement covers Snowflake AI features. Cortex Analyst and CoCo Desktop pages repeat it.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Data privacy. Snowflake never uses your Customer Data to train models made available to our customer base."
  - Source: https://docs.snowflake.com/en/guides-overview-ai-features (checked 2026-10-26)
  - Reasoning: Snowflake states a default no-training rule for Customer Data across its AI-feature suite, without requiring an opt-out.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Snowflake never uses your Customer Data to train models made available to our customer base."
  - Source: https://docs.snowflake.com/en/guides-overview-ai-features (checked 2026-10-26)
  - Reasoning: Snowflake commits that customer data is never used to train foundation models made available to other customers.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Admin-managed RSS: An administrator sets `AGENT_RESTRICTED_SESSION_SCOPE` on a session policy, then attaches that policy to the account or to specific users."
  - Source: https://docs.snowflake.com/en/user-guide/restricted-session-scope (checked 2026-10-26)
  - Reasoning: An admin-enforced privilege ceiling applies only while an agent (CoCo, CoWork, Cortex Agents) is active. It can limit agents to databases approved for AI use, separately from the users' own RBAC.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Databases that aren’t listed are inaccessible while the agent is active, even if the user’s roles grant SELECT on them."
  - Source: https://docs.snowflake.com/en/user-guide/restricted-session-scope (checked 2026-10-26)
  - Reasoning: An administrator can attach an agent-only Restricted Session Scope to an account or users, limiting native assistants to approved databases even when the human’s roles grant broader data access.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "An administrator sets `AGENT_RESTRICTED_SESSION_SCOPE` on a session policy, then attaches that policy to the account or to users."
  - Source: https://docs.snowflake.com/en/user-guide/restricted-session-scope (checked 2026-10-26)
  - Reasoning: Snowflake supports Restricted Session Scope (RSS) policies to restrict agent sessions to read-only access or bounded subsets of roles.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "A Restricted Session Scope (RSS) is a privilege ceiling that limits what an agent can do on behalf of a user."
  - Source: https://docs.snowflake.com/en/user-guide/restricted-session-scope (checked 2026-10-26)
  - Reasoning: An outside agent can act under a narrower scope: a token-bound RSS from OAuth token exchange, an admin RSS on agent-active sessions, or its own SERVICE_AGENT user. All can be read-only or limited to certain objects.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Token-bound RSS: An application attaches an RSS to a delegated access token that it obtains through OAuth token exchange. The ceiling applies to every session created from that token."
  - Source: https://docs.snowflake.com/en/user-guide/restricted-session-scope (checked 2026-10-26)
  - Reasoning: An application can give an outside agent an OAuth delegated token bounded by an RSS. This narrows permitted objects and operations relative to the human’s privileges and cannot grant additional access.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Your application should attach a Restricted Session Scope to the token to bound the agent."
  - Source: https://docs.snowflake.com/en/user-guide/agent-identity (checked 2026-10-26)
  - Reasoning: Applications can bound service agents by attaching a Restricted Session Scope to the authentication token.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Find the upstream origin of a specific column in a complex reporting table"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: The vendor's Claude Code plugin routes an outside agent's Snowflake prompts to the Cortex Code CLI and its built-in skills. Those skills include lineage (upstream source tracing, column-level lineage), backed by Snowflake lineage (GET_LINEAGE).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Given a Snowflake object, returns data lineage information upstream or downstream from that object."
  - Source: https://docs.snowflake.com/en/sql-reference/functions/get_lineage-snowflake-core (checked 2026-10-26)
  - Reasoning: An outside agent can invoke GET_LINEAGE through Snowflake’s authenticated SQL interface, including the managed MCP SQL tool. It traverses upstream object/column edges and exposes PROCESS information such as query IDs and procedures, rather than merely inferring sources from a view’s SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Given a Snowflake object, returns data lineage information upstream or downstream from that object."
  - Source: https://docs.snowflake.com/en/sql-reference/functions/get_lineage-snowflake-core (checked 2026-10-26)
  - Reasoning: Snowflake provides the GET_LINEAGE function and Snowsight Lineage visualization to trace upstream and downstream dependencies.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Yes** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Together, these columns help you reconstruct the causal chain that compliance teams often need: a user invoked an agent, specific queries followed, and specific objects were accessed."
  - Source: https://docs.snowflake.com/en/user-guide/agent-identity (checked 2026-10-26)
  - Reasoning: QUERY_HISTORY.agent_type marks EXTERNAL_AGENT sessions (SERVICE_AGENT, agentic OAuth, token exchange, managed MCP). ACCESS_HISTORY.agents_info ties accessed objects to the agent and the delegating user.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The `agents_info` column in ACCESS_HISTORY provides ordered agent details for object access, from the nearest agent to the top-level agent."
  - Source: https://docs.snowflake.com/en/user-guide/agent-identity (checked 2026-10-26)
  - Reasoning: Snowflake identifies third-party OAuth/SERVICE_AGENT sessions and records EXTERNAL_AGENT in query history plus ordered agent identity details in access history. These records tie delegated users, agent identity, queries, and accessed objects together.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The `agents_info` column in ACCESS_HISTORY provides ordered agent details for object access, from the nearest agent to the top-level agent."
  - Source: https://docs.snowflake.com/en/user-guide/agent-identity (checked 2026-10-26)
  - Reasoning: Snowflake records agent interactions and access history in the ACCESS_HISTORY view, using the agents_info column to provide ordered agent identity details from nearest to top-level agent.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Both the developer and the reviewer can now inspect the DCM changeset from the plan to confirm that all changes are as expected."
  - Source: https://docs.snowflake.com/en/user-guide/dcm-projects/dcm-projects-cicd (checked 2026-10-26)
  - Reasoning: DCM Projects, which can define semantic views, document a pull-request review before production deploy. That is a general Git PR workflow, not one documented for outside-agent changes.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Store the semantic view YAML (or SQL DDL) in a Git repository; this approach supports version control, peer review, history, and rollback."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-dev (checked 2026-10-26)
  - Reasoning: The documented version-controlled semantic-view workflow permits peer review before programmatic deployment. It is a general development workflow, without an enforced approval route for an outside agent’s change to a different named approver.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Under Default Approvals, the agent stops and asks before running tool calls that could have side effects."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/permission-modes (checked 2026-10-26)
  - Reasoning: Under Default Approvals, the agent stops and prompts the user before executing tool calls with side effects, but this is requester confirmation rather than approval by an independent party.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Plan: Runs `snow dcm plan` and summarizes the changeset."
  - Source: https://docs.snowflake.com/en/user-guide/dcm-projects/dcm-projects-cicd (checked 2026-10-26)
  - Reasoning: DCM PLAN gives a generic changeset or diff for governed definitions such as semantic views, posted to the PR. It is not documented as covering changes made by an outside agent.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Review the diff preview, which shows what changed between your local file and the live object."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/semantic-studio (checked 2026-10-26)
  - Reasoning: Semantic Studio can compare local semantic-view YAML with the deployed governed object. This is a generic deployment diff; the documentation does not explicitly identify it as a review of changes made by an outside agent.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Preview AI-suggested changes using a diff view before applying them."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: Cortex Code provides a visual diff view in Snowsight and Semantic Studio that previews AI-suggested modifications with insertions and deletions before applying them.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If you need to roll back, you point the alias to a previous named version."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-versioning (checked 2026-10-26)
  - Reasoning: Changes to a Cortex Agent's configuration (instructions, tools, semantic-view bindings), including changes made by an outside agent through the Agent REST/SQL interface, can be rolled back to an earlier immutable version.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If necessary, roll back by redeploying the previous known-good YAML or DDL from Git."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-dev (checked 2026-10-26)
  - Reasoning: Semantic views can be written programmatically by outside agents, and the documented restoration path redeploys a previous definition from Git. The rollback restores the governed shared asset regardless of which client authored its replacement.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Agent-authored cells appear inline with Keep / Undo controls so you can review each edit before accepting."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-desktop/agentic-notebook (checked 2026-10-26)
  - Reasoning: Agent-authored code changes and notebook cell edits appear with Keep / Undo controls allowing users to reject or roll back modifications made by the agent.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Snowflake-managed MCP server lets AI agents securely retrieve data from Snowflake accounts without needing to deploy separate infrastructure."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: This is a vendor-hosted MCP server exposing Cortex Analyst, Search, Agents and SQL to outside agents. Snowflake OAuth or External OAuth authentication is documented, and no preview label appears.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Snowflake-managed MCP server lets AI agents securely retrieve data from Snowflake accounts without needing to deploy separate infrastructure."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: Snowflake operates this first-party server, exposes analytical data/tools, and documents Snowflake OAuth, External OAuth, and PAT authentication on the same page. It is not a customer-hosted server or documentation-only search service, and this page carries no preview label.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Snowflake-managed MCP server lets AI agents securely retrieve data from Snowflake accounts without needing to deploy separate infrastructure."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: Snowflake provides a first-party managed MCP server that exposes Cortex Analyst, Cortex Search, Cortex Agents, and SQL execution tools to outside AI clients.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "List all tables in my current schema"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-claude-code (checked 2026-10-26)
  - Reasoning: The vendor's Claude Code plugin documents an outside agent enumerating objects ('What databases do I have access to?', 'List all tables in my current schema'). Snowflake REST APIs also list tables, views, agents and Streamlits.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To list the Streamlit apps for which you have access, use the `snow streamlit list` command."
  - Source: https://docs.snowflake.com/en/developer-guide/snowflake-cli/streamlit-apps/manage-apps/manage-app (checked 2026-10-26)
  - Reasoning: The vendor CLI enumerates every permitted deployed Streamlit app without requiring an app ID. These apps are analytical assets and can be created by colleagues or the vendor assistant; SQL SHOW also enumerates tables and semantic objects.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "MCP clients discover and invoke these tools, and retrieve data required for the application."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: The Snowflake-managed MCP server allows outside agents to discover available tools, semantic views, and analytical datasets on a standardized interface.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Comprehensive authentication: Snowflake OAuth by default, with optional External OAuth so MCP clients can authenticate against your organization’s identity provider."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: Named credential types for outside agents: OAuth, External OAuth, programmatic access tokens (PAT), and SERVICE_AGENT users with workload identity federation.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Autonomous agents act under their own identity and authorization. Create a SERVICE_AGENT user and authenticate with workload identity federation or another supported non-interactive method. Every session for that user is agent-active."
  - Source: https://docs.snowflake.com/en/user-guide/agent-identity (checked 2026-10-26)
  - Reasoning: The third-party agent identity path uses a SERVICE_AGENT user with workload identity federation or another supported non-interactive method; the same page lists PATs and key-pair authentication.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create a SERVICE_AGENT user and authenticate with workload identity federation or another supported non-interactive method."
  - Source: https://docs.snowflake.com/en/user-guide/agent-identity (checked 2026-10-26)
  - Reasoning: Snowflake provides a dedicated SERVICE_AGENT user type for AI agents, which authenticates via workload identity federation or non-interactive methods.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Cortex Code in Claude Code plugin detects Snowflake-related prompts in your Claude Code session and routes them to the Cortex Code CLI, where Snowflake-specific skills handle the request."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-claude-code (checked 2026-10-26)
  - Reasoning: Snowflake publishes a Claude Code plugin (snowflake-cortex-code@claude-plugins-official) that an outside coding agent installs to use Snowflake through vendor skills. A Snowflake plugin is also listed in the Cursor marketplace.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Cortex Code in Claude Code plugin detects Snowflake-related prompts in your Claude Code session and routes them to the Cortex Code CLI, where Snowflake-specific skills handle the request."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-claude-code (checked 2026-10-26)
  - Reasoning: Snowflake publishes an installable official Claude Code plugin that routes Snowflake tasks to its packaged Snowflake skills. This is an actual outside-agent plugin, not just MCP configuration prose.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "CoCo CLI includes a set of built-in skills that cover common Snowflake workflows."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: Snowflake bundles pre-built agent skills with CoCo CLI covering Streamlit app authoring, notebook development, warehouse optimization, dbt orchestration, and lineage analysis.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If it is, the plugin starts a Cortex Code CLI session, runs the request with the CLI’s built-in Snowflake skills, and returns the result to your Claude Code session."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-claude-code (checked 2026-10-26)
  - Reasoning: The vendor CLI (cortex) is documented for use by an outside coding agent. It runs non-interactively (cortex -p / exec in the CLI reference) using a connections.toml connection.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If it is, the plugin starts a Cortex Code CLI session, runs the request with the CLI’s built-in Snowflake skills, and returns the result to your Claude Code session."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-claude-code (checked 2026-10-26)
  - Reasoning: The official integration explicitly runs CoCo CLI from outside Claude Code. Its CLI reference documents batch/exec use, and the security guide documents role-scoped PAT authentication, establishing an agent-addressed non-interactive CLI route.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Type natural-language requests (such as “find tables with PII tags” or “generate a Streamlit app for SALES_MART.REVENUE”) and CoCo attempts to fulfill the request by orchestrating Snowflake-native skills and any MCP tools you have configured."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-cli (checked 2026-10-26)
  - Reasoning: Snowflake provides the CoCo CLI (Cortex Code CLI), a dedicated command-line interface designed for agent workflows that orchestrates Snowflake-native skills and MCP tools.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Yes** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`ALLOWED_ROLES_LIST` restricts the integration to the roles intended for MCP access."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: Admins control which roles can reach MCP through the OAuth integration and USAGE on each MCP server. Agent-specific session policies can also be attached to particular users.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Admin-managed RSS: An administrator sets `AGENT_RESTRICTED_SESSION_SCOPE` on a session policy, then attaches that policy to the account or to specific users. The ceiling applies whenever an agent is active for users covered by the policy."
  - Source: https://docs.snowflake.com/en/user-guide/restricted-session-scope (checked 2026-10-26)
  - Reasoning: Administrators attach agent-specific session policy ceilings to selected users or the account. These allow or block agent access to roles, data, and operations without changing the users’ ordinary permissions, and apply to identified external agents as well as native ones.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Access to the MCP Server does not give access to the tools."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: Agent tools and server access are gated by granular permissions where access to the MCP server does not grant access to the underlying tools without specific role grants.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Yes (preview)** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "This topic covers how to see what the gateway is spending and how to limit it."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-ai-gateway/cost-management (checked 2026-10-26)
  - Reasoning: Cortex AI Gateway, used by external agents such as `snow ai claude`, has its own spend controls, including per-user quotas that block usage. The page is labeled Preview.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "`query_timeout`: Maximum time in seconds for query execution."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: The outside-agent MCP SQL tool has a configurable execution-time cap per query. This limits one operation’s compute duration; no separate per-agent aggregate quota, spend limit, or request-rate policy was found for managed MCP access.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Snowflake enforces a maximum recursion depth of 10 invocations."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: Snowflake enforces execution boundaries on agents, including a maximum recursion depth limit of 10 invocations to avoid recursive loops.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For example, use custom instructions to tell Cortex Analyst what you mean by performance or financial year."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/custom-instructions (checked 2026-10-26)
  - Reasoning: Custom instructions in the semantic view or model record business meaning that Cortex Analyst reads before generating SQL, both directly and as a CoWork agent tool. Agent instructions do the same.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "For example, use custom instructions to tell Cortex Analyst what you mean by performance or financial year."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/custom-instructions (checked 2026-10-26)
  - Reasoning: Native Cortex Analyst, including when used by Cortex Agents, reads semantic-model instructions defining business meanings beyond schema structure.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Currently, Cortex Agents reads the information captured in the semantic view definition and generates the SQL against the physical tables directly."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/overview (checked 2026-10-26)
  - Reasoning: Cortex Agents and Cortex Analyst consume business context directly from Semantic Views, reading defined metrics, dimensions, and relationships to generate accurate queries.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can also create named versions directly from a stage or Git repository without going through the live version."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-versioning (checked 2026-10-26)
  - Reasoning: Agent configuration (instructions, tools) is managed in Git, imported as versions and rolled back by alias. Semantic views (YAML, dbt_semantic_view package) can also live in Git.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can reference skills stored in a named stage or a Git repository and Cortex Agents discover them automatically for use in orchestration."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-skills (checked 2026-10-26)
  - Reasoning: Business instructions and context can live in SKILL.md plus supporting files in a Git repository read by native Cortex Agents. The page documents immutable commit references and tag-based updates, so this context can be diffed, reviewed, and restored.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To create and manage Semantic Views, you can use Semantic Studio in Workspaces, SQL commands (such as CREATE SEMANTIC VIEW), or a wizard in Snowsight that guides you through the process of creating a semantic view."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/overview (checked 2026-10-26)
  - Reasoning: Semantic views and models can be codified, authored, and managed in code and files via SQL DDL commands (CREATE SEMANTIC VIEW), YAML specifications, and Semantic Studio.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Using natural language, you can tell Cortex Analyst exactly how to generate SQL queries from within your semantic model YAML file."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/custom-instructions (checked 2026-10-26)
  - Reasoning: Context attaches to each semantic model or view and to each agent, which is granted to particular roles. Different teams therefore get different context instead of one tenant-wide set.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Prefer multiple semantic views when you have distinct business domains that don’t need to be joined, or different user groups that need different views of the data."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-modeling (checked 2026-10-26)
  - Reasoning: Native Cortex Agents can be configured with different business-domain semantic views and instructions. The documentation explicitly supports different user groups needing distinct views instead of one tenant-global context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Prefer multiple semantic views when you have distinct business domains that don’t need to be joined, or different user groups that need different views of the data."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-modeling (checked 2026-10-26)
  - Reasoning: Snowflake documents partitioning business context across multiple domain-focused semantic views (such as Sales, Support, Marketing) suited to different user groups.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Test the agent: Prompt the agent in the Snowsight playground and refine its tools and instructions until it responds as expected."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents (checked 2026-10-26)
  - Reasoning: A named test step validates agent instructions before rollout: playground testing on the live/draft version before commit, plus evaluations and Cortex Analyst evaluations against verified queries.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can pass `TRUE` as the third argument to validate the YAML without creating the view."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl (checked 2026-10-26)
  - Reasoning: Semantic context YAML has an explicit validate-only mode before a live semantic view is created. Native agent playgrounds/evaluations additionally test instructions and semantic behavior before deployment.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Cortex Analyst evaluations let you measure and improve the performance of your semantic views that are used for SQL generation."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst-evaluations (checked 2026-10-26)
  - Reasoning: Snowflake provides native Cortex Analyst evaluations to benchmark, test, and measure the accuracy of semantic views against verified queries.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Yes**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`message.content[].confidence.verified_query_used` (object): Represents the verified query from Verified Query Repository used in SQL response generation."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst/rest-api (checked 2026-10-26)
  - Reasoning: Cortex Analyst answers report which verified query (name, question, SQL, verified_by) shaped the response. The agent run stream carries verified_query_used too.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Skill invocations are surfaced in the thinking steps during Snowflake CoWork interactions."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-skills (checked 2026-10-26)
  - Reasoning: CoWork’s visible thinking steps identify the particular skill invoked; skills are the instruction/context bundles read by its native agent. This exposes a specific context item rather than merely naming the dataset.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Represents the verified query from Verified Query Repository used in SQL response generation."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst/rest-api (checked 2026-10-26)
  - Reasoning: Cortex Analyst responses include a confidence.verified_query_used object that specifies the name, natural language question, SQL statement, and verified_at timestamp of the verified gold-standard business query from the Verified Query Repository that shaped the generated answer.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Semantic View Autopilot supports using a file from Tableau to automatically generate a semantic view."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/tableau-ingestion (checked 2026-10-26)
  - Reasoning: Context is ingested rather than retyped: Autopilot imports business logic and metadata from Tableau or Power BI files. Semantic views carry warehouse-level COMMENT/description metadata that Cortex Analyst consumes, and the dbt_semantic_view package defines them from dbt.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Extract all table and column descriptions."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/autopilot (checked 2026-10-26)
  - Reasoning: Autopilot ingests existing table metadata descriptions into semantic context that Analyst and Cortex Agents use. Warehouse comments need not be manually retyped as assistant instructions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Snowflake continuously gathers metadata from objects in your account."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-horizon/horizon-context (checked 2026-10-26)
  - Reasoning: Horizon Context collects metadata from existing database objects in the account and activates it for Cortex Agents and Cortex Analyst.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Partly**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Call IS_AGENT_ACTIVATED in a policy body so regulated or high-risk data isn’t returned to an agent, even when the user’s role would otherwise allow it."
  - Source: https://docs.snowflake.com/en/user-guide/agent-identity (checked 2026-10-26)
  - Reasoning: An enforced, AI-specific setting can remove a column or rows from the reach of any agent (CoWork, CoCo, outside agents) while leaving human access unchanged. Question-categorization instructions offer only an instruction-level block.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Reject all questions about salary data and tell the user this information is not available."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/custom-instructions (checked 2026-10-26)
  - Reasoning: The native agent can receive semantic instructions marking salary data off-limits, but this is model-followed guidance rather than a product-enforced exclusion. Agent-specific RSS/masking enforcement is separately credited under AIRESTRICT.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can use the `question_categorization` component to block questions about specific topics."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/custom-instructions (checked 2026-10-26)
  - Reasoning: Semantic models support question_categorization custom instructions to direct Cortex Analyst to reject questions on sensitive or off-limits topics, but as guidance followed by the model rather than database engine enforcement, this earns partly the grading standard.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Merge: Review and merge changes through your standard pull request process."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-versioning (checked 2026-10-26)
  - Reasoning: A review step for agent-context changes (pull request before import) is documented, but no named owner or approver role for business context is given. Suggestions also require 'human review' with no named role.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Both teams need to share ownership of the semantic model."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-dev (checked 2026-10-26)
  - Reasoning: Snowflake assigns shared ownership of the semantic business context to business and data-engineering teams and recommends Git peer review. It does not define a required review or approval step assigned to a particular owner role for context changes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To secure the semantic layer in a way that serves the needs of both teams, use role-based access control (RBAC) to grant appropriate privileges to semantic views and their dependent objects."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-dev (checked 2026-10-26)
  - Reasoning: Snowflake semantic views support ownership and access governance using RBAC, where data engineering and business teams manage shared ownership via database privileges.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Yes** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Cortex Agents use Cortex Analyst to retrieve structured data from semantic views by converting natural language requests into SQL queries."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork/build-agents (checked 2026-10-26)
  - Reasoning: The CoWork assistant answers from semantic views, which are warehouse-level objects in Snowflake.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Currently, Cortex Agents reads the information captured in the semantic view definition and generates the SQL against the physical tables directly."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/overview (checked 2026-10-26)
  - Reasoning: The built-in Cortex Agent consumes warehouse-resident semantic-view definitions when generating analytical SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Using natural language prompts, the CoCo agent helps you explore data, author dbt models, add tests, optimize performance, and generate documentation through iterative feedback."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: The built-in CoCo assistant reads warehouse logic, schemas, and dbt models to help users explore and understand warehouse data.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Yes** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Using natural language prompts, the CoCo agent helps you explore data, author dbt models, add tests, optimize performance, and generate documentation through iterative feedback."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: CoCo in Snowsight writes dbt models in dbt Projects on Snowflake and runs dbt commands. It also generates semantic views, so the logic lands in the warehouse.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You define a semantic view as a YAML file and deploy it to a live Snowflake object, with Snowflake CoCo, an AI-driven intelligent agent, available directly in the editing workflow."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/semantic-studio (checked 2026-10-26)
  - Reasoning: CoCo authors and modifies semantic YAML in Semantic Studio and deploys it as a live Snowflake schema object. This lands warehouse logic below the analytical UI.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Using natural language prompts, the CoCo agent helps you explore data, author dbt models, add tests, optimize performance, and generate documentation through iterative feedback."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-snowsight (checked 2026-10-26)
  - Reasoning: The built-in assistant authors and edits warehouse logic by generating and modifying dbt models, SQL views, and test suites.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Generate documentation and lineage for a deployed dbt project from within Snowflake"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: Through the vendor's Claude Code plugin, an outside agent's prompts run on Cortex Code CLI skills that read deployed dbt project logic and semantic views (dbt-projects-on-snowflake and agent-studio skills).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Semantic view to DDL: Use the GET_DDL function to export the SQL definition of an existing semantic view."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl (checked 2026-10-26)
  - Reasoning: The documented SQL function exports the actual warehouse semantic-view SQL definition. An outside agent can retrieve this through authenticated SQL API/CLI or the managed MCP SQL tool; this is logic rather than schema names alone.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Snowflake-managed MCP server lets AI agents securely retrieve data from Snowflake accounts without needing to deploy separate infrastructure."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: The Snowflake-managed MCP server allows outside AI agents to securely query and read warehouse data and tables.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create a dynamic table that refreshes hourly"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/cortex-code-claude-code (checked 2026-10-26)
  - Reasoning: The vendor plugin documents Claude Code authoring warehouse transformation logic (a dynamic table) through the Cortex Code CLI. The REST View API can also create views.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Programmatic creation and querying is possible through interfaces such as JDBC and ODBC drivers or the SQL API."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-dev (checked 2026-10-26)
  - Reasoning: This section explicitly documents CREATE OR REPLACE SEMANTIC VIEW via JDBC, ODBC, and the SQL API, so an outside coding agent can create or replace warehouse-resident logic with its scoped credentials.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A SQL execution tool runs queries without Cortex Agent orchestration."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: Outside agents can execute SQL DDL/DML to create or modify warehouse logic using the SQL execution tool provided by the Snowflake-managed MCP server.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Yes**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This package works natively with dbt Projects on Snowflake or any dbt installation that has access to a Snowflake account."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-dev (checked 2026-10-26)
  - Reasoning: The AI consumes Snowflake semantic views directly, and those views can be maintained in dbt via the dbt_semantic_view package. Tableau and Power BI definitions can be ingested, so nothing has to be rebuilt by hand.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This preserves the business logic you’ve already built in Power BI, including metric definitions, table relationships, and column descriptions, and makes it available to Cortex Analyst and other Snowflake tools."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/power-bi-ingestion (checked 2026-10-26)
  - Reasoning: Semantic View Autopilot imports existing Power BI metric definitions, relationships, and descriptions for use by Analyst instead of requiring manual re-expression. Existing Snowflake semantic views can also be consumed directly.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Semantic View Autopilot supports using a file from Tableau to automatically generate a semantic view."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/autopilot (checked 2026-10-26)
  - Reasoning: Snowflake imports logic and metrics from external tools like Tableau and Power BI into semantic views using Semantic View Autopilot.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Cortex Agents use these semantic views to enhance data-driven decisions and provide consistent business definitions across enterprise applications."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/snowflake-cowork (checked 2026-10-26)
  - Reasoning: CoWork answers from the shared metrics, dimensions and relationships defined in semantic views.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Cortex Analyst uses Semantic Views to understand your data and generate accurate SQL queries."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-analyst (checked 2026-10-26)
  - Reasoning: The native assistant reads the semantic layer’s metrics, dimensions, business formulas, and table relationships. CoWork uses this same Analyst capability as its structured-data tool.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Currently, Cortex Agents reads the information captured in the semantic view definition and generates the SQL against the physical tables directly."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/overview (checked 2026-10-26)
  - Reasoning: The built-in Cortex Agents read shared semantic view definitions and metrics to generate accurate queries.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "CoCo generates a YAML file with tables, relationships, and metrics."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/autopilot (checked 2026-10-26)
  - Reasoning: In Semantic View Autopilot or Studio, the built-in CoCo creates semantic views and edits them on request, e.g. adding a profit margin metric or changing a join.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Instead of writing a YAML specification by hand, you describe what you want and Autopilot generates the logical tables, relationships, and metrics for you."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/autopilot (checked 2026-10-26)
  - Reasoning: The built-in AI authors the shared semantic layer’s logical tables, joins, and metrics; Semantic Studio also supports conversational refinement and deployment.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Semantic View Autopilot is the AI-assisted way to create a semantic view in Snowsight."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/autopilot (checked 2026-10-26)
  - Reasoning: The built-in assistant (Semantic View Autopilot / CoCo) creates and modifies shared semantic view definitions and metrics through conversational iterations.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create, manage, edit, debug, delete, and chat with Cortex Agents (including multi-tool agents combining Cortex Search and Analyst); create and manage semantic views for Cortex Analyst with VQR suggestions, verified queries, metrics, dimensions, and filters; test, evaluate, and publish agents; generate datasets; and audit quality."
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: Through the vendor's Claude Code plugin, outside-agent prompts run on the Cortex Code CLI agent-studio skill. That skill manages, debugs and audits semantic views, which means reading their metric and dimension definitions and descriptions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Semantic view to YAML: Use the SYSTEM$READ_YAML_FROM_SEMANTIC_VIEW function to export any existing semantic view to YAML."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/yaml-vs-ddl (checked 2026-10-26)
  - Reasoning: An authenticated outside coding agent can export the semantic definition, including descriptions, calculation expressions, metrics, and relationships. The same page’s feature mapping confirms that meaning-bearing metadata is included.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Snowflake-managed MCP server only supports using semantic views with Cortex Analyst."
  - Source: https://docs.snowflake.com/en/user-guide/snowflake-cortex/cortex-agents-mcp (checked 2026-10-26)
  - Reasoning: Outside agents connecting through the Snowflake-managed MCP server can read and query through shared semantic views using Cortex Analyst tools.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Build semantic views for Cortex Analyst with verified query representations, metrics, and dimensions"
  - Source: https://docs.snowflake.com/en/user-guide/cortex-code/bundled-skills (checked 2026-10-26)
  - Reasoning: The plugin route lets an outside agent write semantic views (the shared definition layer) through the vendor's CLI skills. Semantic views are also writable from outside via SQL DDL or DCM in Git.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Create a semantic view via a SQL CREATE OR REPLACE SEMANTIC VIEW statement, using any interface that supports SQL."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/best-practices-dev (checked 2026-10-26)
  - Reasoning: Shared semantic definitions are first-party writable SQL objects; the page explicitly supports programmatic SQL interfaces and replacement for changes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "DCM Projects supports defining semantic views."
  - Source: https://docs.snowflake.com/en/user-guide/dcm-projects/dcm-projects-supported-entities (checked 2026-10-26)
  - Reasoning: Snowflake's shared semantic definitions (semantic views) are writable from outside the product. Outside tools and coding agents can create and alter semantic views declaratively in Git via DCM Projects using DEFINE SEMANTIC VIEW, through SQL DDL (CREATE OR ALTER SEMANTIC VIEW), or via dbt models using the dbt-semantic-view plugin.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Yes**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Semantic Studio: You can refine, configure, and deploy semantic views in Semantic Studio, the authoring environment in Workspaces with conversational assistance from CoCo."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/overview (checked 2026-10-26)
  - Reasoning: Definitions modeled in Snowsight deploy as semantic views, which are schema objects in the warehouse rather than BI-tool-only metadata.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Deploy pushes your local YAML file directly to the live Snowflake object."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/semantic-studio (checked 2026-10-26)
  - Reasoning: Semantic Studio’s locally authored business definitions deploy directly into a warehouse-resident semantic view, so the maintained definitions live in Snowflake rather than only in the UI file.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "To improve the query performance of a semantic view, you can materialize selected dimensions and metrics in the view, similar to how you materialize data in a materialized view."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/materializations (checked 2026-10-26)
  - Reasoning: Snowflake supports materializing dimensions and metrics from semantic views down into the warehouse storage layer.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "These suggestions analyze SQL query history to find frequently used SQL expressions that are not yet represented in the Semantic Model or view."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-suggestions (checked 2026-10-26)
  - Reasoning: Calculations written ad hoc in queries are surfaced as metric or filter suggestions. A user accepts them into the shared semantic view without a developer rewriting them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "These suggestions analyze SQL query history to find frequently used SQL expressions that are not yet represented in the Semantic Model or view."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-suggestions (checked 2026-10-26)
  - Reasoning: Cortex Analyst detects calculation expressions from analysis/query history and proposes metrics that users accept into the maintained semantic model/view without developer rewriting. Suggestions require sufficient repeated query activity; this is not merely reusing an existing shared definition.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Cortex Analyst surfaces suggestions in contexts where it has enough information to propose new verified queries, filters, metrics, and other model elements."
  - Source: https://docs.snowflake.com/en/user-guide/views-semantic/verified-query-suggestions (checked 2026-10-26)
  - Reasoning: Snowflake analyzes query history and user interactions to suggest new metrics, filters, and verified queries that analysts can review and accept into shared semantic views.

