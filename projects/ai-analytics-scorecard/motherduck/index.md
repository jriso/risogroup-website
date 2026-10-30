# MotherDuck: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/motherduck/

AI Feature Score **59**, #12 of 15 (Data platform). Built-in AI 36, external AI 83, other 74. Analysis 33, Building and maintaining assets 88, Context and connections 75, Reliability and controls 41. By model: Claude Opus 5.5 58, GPT-6.1 Sol 60, Gemini 3.8 Flash 59.

## Score breakdown

Four areas, 25 points each. Shown for Gemini 3.8 Flash, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 8.3 of 25
- Building and maintaining assets: 22.0 of 25
- Context and connections: 18.8 of 25
- Reliability and controls: 10.2 of 25

**Strengths**

- Changes can require approval
- Context has an owner and a review step
- The assistant reads generated apps

**Not found in the docs**

- An answer can be reproduced and audited
- An admin can allow or block agents
- Reusable saved agents

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "MotherDuck's AI features help you fix broken queries, rewrite SQL in plain English, and generate queries from scratch — all without leaving the editor."
  - Source: https://motherduck.com/docs/getting-started/interfaces/motherduck-quick-tour (checked 2026-10-26)
  - Reasoning: The built-in UI AI (Edit) writes queries from a plain-English description inside the editor, which the row counts as yes. Agent chat also answers plain-English questions about data in the UI (key-tasks/ai-and-motherduck/agent-chat). prompt_query is a SQL function and was not relied on.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "MotherDuck's AI features help you fix broken queries, rewrite SQL in plain English, and generate queries from scratch — all without leaving the editor."
  - Source: https://motherduck.com/docs/getting-started/interfaces/motherduck-quick-tour (checked 2026-10-26)
  - Reasoning: The built-in web editor AI generates SQL from a plain-English request from scratch. This does not require a prebuilt dashboard or an existing SQL query; Agent chat separately supports natural-language Dive creation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "MotherDuck's AI features help you fix broken queries, rewrite SQL in plain English, and generate queries from scratch — all without leaving the editor."
  - Source: https://motherduck.com/docs/getting-started/interfaces/motherduck-quick-tour (checked 2026-10-26)
  - Reasoning: MotherDuck allows users to generate SQL queries from scratch using plain English descriptions directly in the editor.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Review the suggestion, then iterate with follow-up prompts if needed:"
  - Source: https://motherduck.com/docs/getting-started/interfaces/motherduck-quick-tour (checked 2026-10-26)
  - Reasoning: The built-in Edit assistant keeps the thread so follow-up prompts refine its suggestion. Agent chat also keeps one conversation per Dive. Edit was labeled [Preview] in an April 2025 archived release note, but the current feature pages carry no stage label, so it is treated as GA.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **One conversation per Dive.** Sessions are scoped to a specific Dive. Each one has its own chat."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent maintains a conversation scoped to a Dive, including its current filters and selections. This supports conversational refinement during the open session; chats are not retained after the tab closes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If the suggestion is not as desired, it can be further clarified with follow-up prompts."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/ai-features-in-ui (checked 2026-10-26)
  - Reasoning: MotherDuck supports conversational refinement where initial suggestions can be further clarified with follow-up prompts.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "In the chat panel, type a question, or pick a suggested one such as "What stands out about the current view?" or "How are these numbers calculated?""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: In Agent chat you can ask how numbers are calculated, and the Dive's source (with its SQL) can be opened. The docs don't say a chat answer automatically shows the query or steps behind it, so this is partial.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **MotherDuck UI:** Open the Dive viewer, switch to the **Source** tab, and choose **Find in source** from the menu."
  - Source: https://motherduck.com/docs/key-tasks/dives (checked 2026-10-26)
  - Reasoning: Agent chat writes the Dive code and analytical queries, and the Dive viewer exposes that source for inspection. Thus the generated analytical logic is available with the persistent answer, rather than only a rendered result.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Output of this SQL statement is a single column table that contains the AI-generated SQL query."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/ai-features-in-ui (checked 2026-10-26)
  - Reasoning: MotherDuck's AI functions (such as prompt_sql and UI Edit) output and expose the generated SQL query used to derive the answer.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Not found** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: MotherDuck's built-in assistants are Agent chat (in Dives), Edit and FixIt in the SQL editor. The Agent chat page says the agent sees the Dive's queries and can answer 'How are these numbers calculated?'. That is about analytical steps (V3), not a list of tables, columns or metrics attached to the answer. No page documents a field or table citation shown with a built-in assistant answer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documentation shows specific table, column, or metric citations attached to built-in Agent chat answers. Schema exploration and names inside generated SQL do not establish answer-level field citations.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Built-in assistant answers from Agent chat and prompt_query return responses or SQL results without an attached field citation metadata list naming the specific tables, columns, or metrics used.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Not found** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Agent chat, AI-features-in-UI and Web UI tour pages say nothing about the built-in AI analyzing an uploaded CSV or spreadsheet. File-upload or loading pages that don't tie the upload to the AI don't count.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: CSV upload and a manual SQL cleaning walkthrough are documented, while the uploaded-file AI workflow uses outside Claude through MCP or its sandbox. No page ties uploaded CSV/spreadsheet analysis to MotherDuck's built-in assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While MotherDuck supports uploading CSV files into warehouse tables, neither the built-in Agent chat nor the SQL assistant can directly receive and analyze uploaded CSV or spreadsheet files.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Partly** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Agent chat produces inspectable SQL for data changes but does not run it, and Edit rewrites SQL in the editor. The AI leaves logic for a person to run but does not clean or reshape data itself, so this is partial.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "In the Edit dialog, enter your prompt (e.g., "extract the domain from the url, using a regex") and click Suggest edit."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/ai-features-in-ui (checked 2026-10-26)
  - Reasoning: The built-in SQL Edit feature reshapes a field from natural-language instructions and leaves the suggested SQL visible for review and application. This is inspectable transformation logic, although the user applies the edit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Agent chat generates inspectable SQL queries for requested data cleaning and reshaping rather than performing mutations directly, leaving reviewable transformation logic for the user to execute.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Not found** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Dives can declare several REQUIRED_DATABASES. But no page says the built-in Agent chat joins or blends two or more distinct sources in one analysis.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Cross-database joins and uploaded-file enrichment are documented for outside agents through MCP. The built-in SQL assistant is described as operating on the current database, and no built-in Agent chat example establishes combining distinct sources.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck's Agent chat is strictly scoped to an individual open Dive, and the product does not document combining multiple disparate data sources in a single AI-driven analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Use the agent chat to edit a Dive or build a new one in natural language."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Agent chat builds a new Dive (charts and their queries) from a plain description such as 'Make a Dive of weekly sign-ups by region', so the built-in agent picks and creates the visualization.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Create a Dive.** Describe what you want to see, for example "Make a Dive of weekly sign-ups by region.""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent creates a new visualization from the analytical request, including its code and queries. The documented example specifies the analysis without requiring the user to select a chart first.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the agent chat to edit a Dive or build a new one in natural language."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: In Agent Chat inside Dives, users describe what they want to see and the AI agent selects and creates suitable charts and visualizations in a Dive.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents the built-in Agent chat breaking a change down into contributing segments, or doing root-cause or key-driver analysis. Agent chat's suggested question 'What stands out about the current view?' doesn't document contributions to a change.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The complaint-spike investigation example explicitly builds a custom Pydantic AI agent and weather tool. No documentation establishes contribution analysis, or even causal investigation, by MotherDuck's built-in assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck's built-in assistant does not break down metrics into contributing factors or segments with checkable calculations.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Not found** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The word 'forecast' appears only in Guides topic examples (for example 'revenue-billing/forecasting'), which are context documents for MCP agents. No page documents the built-in Agent chat producing a forecast.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Forecast-related Guide topic examples and customer-authored modeling do not document a forecast produced by the built-in assistant. No built-in forecasting answer or its assumptions was found.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck's built-in assistant has no forecasting capabilities to project future values or state analytical assumptions.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: 'Scenario' appears only as Guide content examples ('Forecast inputs and scenario conventions') aimed at MCP agents. No page documents the built-in AI calculating and comparing what-if scenarios.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Guide examples mention forecast inputs and scenario conventions, but no page documents the built-in assistant calculating what-if scenarios with stated changed assumptions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck provides no built-in AI capability to calculate and compare what-if scenarios with explicitly stated assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Freshness pages cover read-scaling sync intervals for Dives, REFRESH DATABASE and a customer-built Flight freshness-alert cookbook. None says a built-in assistant answer exposes the age or last-refresh time of the data it used.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Share refresh dates appear in share-management settings and tooltips, and Dives query live data. Neither is documented as a freshness indicator accompanying a built-in assistant answer or its particular source at the point of use.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Built-in assistant responses do not expose data freshness, staleness indicators, or underlying dataset refresh timestamps at the point of use.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent sees the Dive's queries, the data behind them, and the view you have open, so you can drill into the numbers without writing SQL."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent reads the queries behind a Dive's charts. Dives are BI content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent sees the Dive's queries, the data behind them, and the view you have open, so you can drill into the numbers without writing SQL."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent chat reads the SQL feeding charts and tables in the existing Dive, which is persistent viewer-facing BI content.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent sees the Dive's queries, the data behind them, and the view you have open, so you can drill into the numbers without writing SQL."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent Chat reads the Dive's queries, underlying data, and visual charts.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Edit the Dive you're viewing.** Ask for a change such as "Add a chart of revenue by month," "Change the date filter to the last 90 days," or "Fix the query behind the second chart.""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Agent chat can change the query behind a specific chart in a Dive.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- **Edit the Dive you're viewing.** Ask for a change such as "Add a chart of revenue by month," "Change the date filter to the last 90 days," or "Fix the query behind the second chart.""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent can change the specific query behind a chart in existing BI content, not only SQL in an analyst editor.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Ask for a change such as "Add a chart of revenue by month," "Change the date filter to the last 90 days," or "Fix the query behind the second chart.""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent Chat can edit charts, filters, and chart queries in response to natural language prompts.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Read a specific Dive by ID, including its full component code"
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: read_dive and dive pull return the whole Dive component source, which the agent must parse to find a given chart's query. There is no per-chart retrieval.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The `read_dive` tool retrieves a Dive's complete details, including its title, description, [status](/docs/key-tasks/dives/dive-statuses), timestamps, and the full React component source code."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve the complete Dive source, which contains chart SQL. It must inspect the whole component to extract the calculation for a particular chart; a chart-specific calculation retrieval interface is not documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Read a specific [Dive](/docs/key-tasks/dives) by ID, including its full JSX/React component code."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: Outside agents read the full JSX/React component code of a Dive (which defines its charts and queries) via read_dive, but cannot query individual chart visual configurations separately.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can update the title, description, content (React component code), or any combination."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/update-dive (checked 2026-10-26)
  - Reasoning: update_dive (and dive push) replaces the whole component content. There is no edit at the level of one chart's calculation.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can update the title, description, content (React component code), or any combination."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/update-dive (checked 2026-10-26)
  - Reasoning: An outside agent edits chart SQL inside the component, then replaces the Dive content through update_dive. This is whole-component replacement rather than a chart-specific calculation write API.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The AI assistant will call `read_dive` to get the current code, modify it, then call `update_dive`:"
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/update-dive (checked 2026-10-26)
  - Reasoning: Outside agents modify chart definitions and queries by updating the full Dive component code via update_dive, rather than targeting a dedicated chart-only mutation endpoint.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Ask an AI agent questions to get answers to anything you want to know about a Dive."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Agent chat opens inside an existing Dive and answers from its queries, data and current filters.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent sees the Dive's queries, the data behind them, and the view you have open, so you can drill into the numbers without writing SQL."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent works from an existing Dive, including its rendered state, data, and queries; Dives are persistent BI content.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent sees the Dive's queries, the data behind them, and the view you have open, so you can drill into the numbers without writing SQL."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent Chat reads and inspects the open Dive's queries, data, and visual configuration.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Create a Dive.** Describe what you want to see, for example "Make a Dive of weekly sign-ups by region.""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent creates persistent Dives on live data. They have an owner, version history, and access governed by shares and the user's permissions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use the agent chat to edit a Dive or build a new one in natural language."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent creates saved Dives and versions their edits under the account's permissions. Dives retain an owner and live MotherDuck query sources, with access to data checked for viewers.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the agent chat to edit a Dive or build a new one in natural language."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent Chat can build new Dives or edit existing saved Dives in natural language.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Read a specific Dive by ID, including its full component code"
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: Outside agents read a Dive's contents (charts, SQL queries, filters inside the component), its status and its versions through MCP read_dive or the CLI.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The `read_dive` tool retrieves a Dive's complete details, including its title, description, [status](/docs/key-tasks/dives/dive-statuses), timestamps, and the full React component source code."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: Outside agents retrieve an existing Dive's contents through the supported MCP interface; the component contains its charts, queries, and filters. This is reading content, not merely discovering its ID.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Read a specific [Dive](/docs/key-tasks/dives) by ID, including its full JSX/React component code."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: Outside agents read saved Dives (dashboards/data apps) by ID, including title, description, version, and content, via the read_dive MCP tool.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Connect your AI assistant to the MotherDuck MCP Server, then ask it to create a visualization."
  - Source: https://motherduck.com/docs/key-tasks/dives (checked 2026-10-26)
  - Reasoning: Outside agents create persistent Dives with save_dive through MCP, or with the CLI including a PR workflow.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The `save_dive` tool creates a new Dive in your MotherDuck workspace."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/save-dive (checked 2026-10-26)
  - Reasoning: The first-party save_dive MCP tool creates persistent workspace Dives from an outside agent's component source. The code includes live MotherDuck queries, and the product validates and stores the BI asset.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Save a new [Dive](/docs/key-tasks/dives) to MotherDuck."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/save-dive (checked 2026-10-26)
  - Reasoning: Outside agents can create and save new Dives to MotherDuck using the save_dive MCP tool.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Partly**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When a Dive queries databases that you own but haven't shared, other users in your organization won't be able to view the Dive."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/share-dive-data (checked 2026-10-26)
  - Reasoning: Dives the AI creates are checked against each viewer's own data access. However, sharing is documented only org-wide (org-scoped shares), not with named users or groups.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Creates org-scoped shares for owned databases used in the Dive, so others in the organization can view it."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/share-dive-data (checked 2026-10-26)
  - Reasoning: The AI-created Dive sharing route shares live underlying data with the organization, rather than distributing a fixed author result. The documented tool does not target named users/groups, and saved Dives have organization-wide visibility by default, so the whole named-recipient sharing requirement is not established.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Any user with access to data in the warehouse and an MCP connection can create a Dive, and Dives can be shared across your organization, provided recipients have read access to the underlying data."
  - Source: https://motherduck.com/docs/key-tasks/data-warehousing (checked 2026-10-26)
  - Reasoning: Dives can be shared across the organization, provided recipients have read access to the underlying data.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This view makes it easier to find Dives created by others in your team."
  - Source: https://motherduck.com/docs/key-tasks/dives (checked 2026-10-26)
  - Reasoning: Settings → Dives lists every Dive in the organization, searchable and filterable by status, including AI-created Dives.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "For a complete list of all Dives in your organization, go to **Settings** → **Dives**."
  - Source: https://motherduck.com/docs/key-tasks/dives (checked 2026-10-26)
  - Reasoning: The organization-wide Dives listing explicitly helps users find Dives created by teammates, including AI-created Dives. Their ability to query underlying data remains permission-bound.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For a complete list of all Dives in your organization, go to **Settings** → **Dives**."
  - Source: https://motherduck.com/docs/key-tasks/dives (checked 2026-10-26)
  - Reasoning: Users can discover and list all saved Dives across the organization on the Settings → Dives page.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: No** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Agent chat is scoped to one Dive per conversation and isn't saved. No page documents a saved, configurable built-in assistant with its own instructions, data and permissions that colleagues can reuse. Guides are context for MCP-connected outside agents, not a saved built-in assistant.
- **GPT-6.1 Sol**: no
  - Quote: "This Flight shows how to build your own data-analysis agent and run it on a schedule in MotherDuck."
  - Source: https://motherduck.com/docs/cookbook/flight-analysis-agent (checked 2026-10-26)
  - Reasoning: The configurable-agent example is a customer-built Pydantic AI program deployed to a Python Flight. It is not a saved, reusable built-in assistant with its own instructions, data, and permissions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck does not allow saving a configured built-in assistant with custom instructions, data bindings, and permissions for colleagues to reuse.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: No** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: no
  - Quote: "Build a data-analysis agent from scratch and run it on a schedule in MotherDuck."
  - Source: https://motherduck.com/docs/cookbook/flight-analysis-agent (checked 2026-10-26)
  - Reasoning: The only scheduled AI analysis documented is a cookbook in which the customer builds their own Pydantic AI agent inside a Flight. That is customer-built on general-purpose tools, not the product's own AI rerunning an analysis.
- **GPT-6.1 Sol**: no
  - Quote: "This Flight shows how to build your own data-analysis agent and run it on a schedule in MotherDuck."
  - Source: https://motherduck.com/docs/cookbook/flight-analysis-agent (checked 2026-10-26)
  - Reasoning: Scheduled AI analysis is demonstrated by composing and deploying a customer-built Pydantic AI agent. Flights schedule the customer program; this is not a first-party built-in analytical agent.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck supports scheduled Flights for user-written Python code, but does not provide a built-in product AI or first-party agent that reruns analytical tasks on a schedule to deliver fresh results or alerts.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Agent chat cannot change data itself; it generates SQL for a person to run, which the row counts as partial. Its other actions (editing Dives, creating org-wide shares for a Dive's data) are not messages, webhooks or data writes to a destination.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- **Changes Dives, not your data.** The agent can [create and edit Dives](#create-and-edit-dives) when you ask, but it can't change your tables or databases. When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent generates SQL for a requested data write, but a person must execute it. Its direct Dive edits are analytics-content changes and do not satisfy the outside-content side-effect requirement.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: MotherDuck's built-in Agent chat cannot modify database tables directly, but writes SQL for a person to run, which fulfills the partial-scope criteria for generating code a person must execute.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: When Agent chat can't do a task (changing data), it hands it back in the conversation with SQL for the person to run. There is no notification, review queue or paused-task hand-off.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- **Changes Dives, not your data.** The agent can [create and edit Dives](#create-and-edit-dives) when you ask, but it can't change your tables or databases. When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: MotherDuck's built-in Agent chat hands unsupported data changes back to the person by supplying SQL to run. This is a conversational hand-back, without a documented notification, review queue, or paused task awaiting a decision.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: When MotherDuck's built-in Agent chat cannot execute a requested task such as modifying warehouse tables, it hands the task back inside the conversation by producing SQL for the user to run, without an external notification or review queue.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Not found** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents configuring one MotherDuck agent to delegate a bounded task to another named agent, or a subagent feature in Agent chat.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Subagent suggestions apply to an outside coding agent bootstrapping Guides, and the borough fan-out recipe builds a custom agent. No customer-configured delegation between named built-in agents with bounded tools and permissions is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck documentation contains no mechanism for configuring an agent to delegate bounded analytical tasks to other named agents.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: MotherDuck ships an MCP server for outside agents, which is the opposite direction. No page documents attaching external tools or MCP servers to the built-in Agent chat or SQL assistant.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: MotherDuck documents an MCP server consumed by outside assistants. No page documents attaching customer-configured external tools or MCP servers to MotherDuck's own Agent chat assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck hosts an MCP server for external clients to connect to MotherDuck, but does not support connecting its built-in assistant out to external MCP servers or tools configured by the customer.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "**Edit the Dive you're viewing.** Ask for a change such as "Add a chart of revenue by month," "Change the date filter to the last 90 days," or "Fix the query behind the second chart.""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Agent chat can fix a broken chart the user points it at, which the row counts as partial. Finding every Dive affected by a data change is not documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- **Edit the Dive you're viewing.** Ask for a change such as "Add a chart of revenue by month," "Change the date filter to the last 90 days," or "Fix the query behind the second chart.""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent can repair the specific chart query a user points it at. No built-in AI discovery of all BI assets affected by a schema/definition change is documented; the dependency-scanning Flight is a separate customer program.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- **Edit the Dive you're viewing.** Ask for a change such as "Add a chart of revenue by month," "Change the date filter to the last 90 days," or "Fix the query behind the second chart.""
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: MotherDuck's Agent chat can fix an individual broken chart query that a user points it at in an open Dive, but the product does not document the AI automatically discovering and repairing BI assets affected by schema changes across the workspace.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Yes** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Every message you send includes the Dive's current state, including the filters and selections you've applied so the answers are tailored to what's shown on your screen."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Dives are generated React data apps. The built-in agent sees an app's queries and what it currently renders.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent sees the Dive's queries, the data behind them, and the view you have open, so you can drill into the numbers without writing SQL."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Dives are the product's persistent React data apps. Built-in Agent chat reads the existing app's queries and current rendered view, and can edit its code, so this is reading the app that already exists.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent sees the Dive's queries, the data behind them, and the view you have open, so you can drill into the numbers without writing SQL."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent Chat reads the queries, underlying data, and visual view of interactive generated data apps (Dives).

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Yes** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent writes the Dive's code and queries for you."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Agent chat builds persistent Dive apps that are owned, versioned and query live governed data.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent writes the Dive's code and queries for you."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent creates Dives, the product's persistent interactive data apps, with an account owner, live database queries, and account/data permissions. These are saved workspace apps rather than disposable HTML.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the agent chat to edit a Dive or build a new one in natural language."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent Chat generates and edits interactive React/JSX data apps (Dives) from natural language instructions.

### A_OR: Can an outside coding agent read a generated app?

**Result: Yes** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Read a specific Dive by ID, including its full component code"
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: Outside agents pull a Dive app's full definition through MCP read_dive or CLI dive pull.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The `read_dive` tool retrieves a Dive's complete details, including its title, description, [status](/docs/key-tasks/dives/dive-statuses), timestamps, and the full React component source code."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: An outside agent can pull the definition and code of an existing generated React data app through MotherDuck MCP.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Read a specific [Dive](/docs/key-tasks/dives) by ID, including its full JSX/React component code."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/read-dive (checked 2026-10-26)
  - Reasoning: Outside agents read the full JSX/React application code of Dives using the read_dive MCP tool.

### A_OW: Can an outside coding agent build a generated app?

**Result: Yes** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The AI agent handles the SQL, chart configuration, styling and saving."
  - Source: https://motherduck.com/docs/key-tasks/dives (checked 2026-10-26)
  - Reasoning: Outside agents build and save persistent Dive apps through the MCP server (save_dive) or the CLI (dive push).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The `save_dive` tool creates a new Dive in your MotherDuck workspace."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/save-dive (checked 2026-10-26)
  - Reasoning: The vendor MCP save_dive interface lets an outside agent author and save the same first-class React data apps that built-in Agent chat creates, with live MotherDuck sources and persistent workspace identity.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Save a new [Dive](/docs/key-tasks/dives) to MotherDuck."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/save-dive (checked 2026-10-26)
  - Reasoning: Outside agents create and publish interactive data applications (Dives) using the save_dive MCP tool.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Not found** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The bootstrap-guides page only advises users to 'Consider building evals', which is customer-built. The triage-classifications page covers evaluating prompt_jev classifications, a SQL function rather than the assistant. No saved eval suite, rubric or judge is documented for the built-in assistant's answers.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Testing realistic questions and considering evals are instructions for customer-built or outside agents. No saved evaluation cases, rubric, judge, or repeatable evaluation facility for MotherDuck's built-in assistant answers is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck does not provide a built-in evaluation framework, saved test suites, rubrics, or automated judges to test the correctness of the built-in assistant's answers.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: No** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Agent chat 'uses models hosted on Amazon Bedrock' and the SQL assistant is 'provided by MotherDuck's integration with Azure OpenAI'. Neither page documents a customer choosing or pinning a model. Model selection exists only for the prompt() SQL function, which the grading standard excludes. No explicit statement that the customer cannot choose was found, so this isn't 'no'.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Agent chat documents Amazon Bedrock hosting, and SQL assistant functions document Azure OpenAI integration. Model selection in custom Flight code or general AI functions does not establish a fixed-version choice for the built-in assistant; no explicit prohibition establishes a no verdict either.
- **Gemini 3.8 Flash**: no
  - Quote: "These capabilities are provided by MotherDuck's integration with Azure OpenAI."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant (checked 2026-10-26)
  - Reasoning: MotherDuck uses fixed underlying LLM integrations (Azure OpenAI for SQL Assistant, Amazon Bedrock for Agent chat) with no user or admin configuration to select or pin specific model versions.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: No** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: no
  - Quote: "**Not saved.** Chats live in your browser tab only. Reloading or closing the tab clears them."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The docs say outright that Agent chat conversations are not saved, so the inputs and logic behind an answer are not kept. Dive version history keeps edited Dive code but not the answers.
- **GPT-6.1 Sol**: no
  - Quote: "- **Not saved.** Chats live in your browser tab only. Reloading or closing the tab clears them."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in chat does not preserve the conversation inputs after the tab closes. Dive versions preserve content code, but do not preserve the answer conversation, model/configuration, or input-data snapshot needed for an answer audit.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck does not preserve inputs, model version, configuration, or data snapshots required to audit or reproduce built-in assistant answers, and chat history is discarded when the tab is closed.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Not found** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Agent chat conversations aren't saved ('Chats live in your browser tab only'). Edit's follow-up prompts only refine one suggestion. Saving corrections into a Guide is documented for MCP-connected outside agents, not the built-in assistant. So no correction to a built-in assistant answer is documented to change later answers.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Guides preserve corrections for outside MCP-connected agents. Built-in SQL Edit allows follow-up refinement, but the documentation does not say that correcting a built-in answer changes later answers with a stated reach.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Agent chat sessions in MotherDuck are tab-scoped and cleared on refresh, and no mechanism is documented where user corrections modify subsequent answers or establish a reach across users.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Not found** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Dive statuses include an admin-set 'Endorsed' status, and agents are guided to prefer Endorsed Dives. That guidance is documented only for 'Agents connected through the MotherDuck MCP Server' (outside agents), not for the built-in Agent chat. Nothing ties built-in assistant answers to certified content or flags mismatches.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Guides teach outside agents definitions, and the MetricFlow recipe queries externally maintained semantics. No page binds or checks the built-in assistant against certified/governed definitions, flags mismatches, or documents its use of a semantic layer.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck documentation contains no feature binding the built-in assistant to certified BI content or governed metric definitions, nor flagging mismatches against certified content.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Partly** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The cap applies to combined usage from Advanced AI functions and helps prevent runaway queries from incurring unexpected costs."
  - Source: https://motherduck.com/docs/about-motherduck/billing/pricing (checked 2026-10-26)
  - Reasoning: An admin-adjustable per-session cap on AI Units exists, but only for the Advanced AI functions (prompt, embedding, prompt_jev). No cap is documented for Agent chat or the SQL assistant.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When the AI session cap has been reached or an unexpected error occurs while computing prompt responses, the function returns `NULL` for the affected rows instead of failing the entire query."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/prompt (checked 2026-10-26)
  - Reasoning: A real session cap stops Advanced AI-function responses, and admins can change the cap. This covers those built-in AI functions; it does not establish a cap for Agent chat or every SQL-assistant feature.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The AI session cap safeguards your spend; it is not a throughput limit."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/prompt (checked 2026-10-26)
  - Reasoning: MotherDuck provides an admin-configurable per-session cap on AI Units that blocks execution of Advanced AI functions (prompt, embedding, prompt_jev) once reached, but no spend cap is documented for Agent chat or the SQL assistant.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Not found** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: QUERY_HISTORY records elapsed time per SQL query, and Flight Explainer shows step timing. Neither measures the built-in AI's response time by agent, model or evaluation run.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Query history and observability cover database query execution. No documentation measures built-in assistant response time on customer workloads by agent, model, or evaluation run; custom-agent performance guidance does not establish that facility.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck measures database query execution times in QUERY_HISTORY, but does not provide tooling to measure built-in AI response latency across models, agents, or evaluation runs.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Not found** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The monitoring-usage page breaks down compute usage by user or custom user agent, but not AI usage. The AI Units pages price AI functions and the SQL assistant per call without per-user attribution. No per-user or per-team built-in AI consumption view is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Per-user compute/storage billing and AI-function prices are documented separately. No page documents per-user, team, or workspace consumption attribution for the built-in assistant or Agent chat.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck tracks compute consumption in QUERY_HISTORY and meters AI functions in AI Units with a session cap, but does not provide a breakdown of built-in AI consumption by user, team, or workspace.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Not found** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: QUERY_HISTORY is a general log of all organization queries with USER_AGENT 'of the client'. No page says it, or any other log, distinguishes Agent chat or SQL assistant activity. Under the row rule, a general audit log that doesn't distinguish assistant activity is insufficient.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: General query history records SQL and users, and Dive edits retain versions. No documented log distinguishes built-in assistant activity and records both the requesting user and affected analytical objects; Agent chat conversations themselves are not saved.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck's QUERY_HISTORY records general DuckDB queries without distinguishing built-in assistant activity, and Agent chat sessions live only in the browser tab without server-side audit logs capturing user prompts and affected analytical objects.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Partly** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Organization Admins can turn Agent chat on or off on the [AI Features](https://app.motherduck.com/settings/ai-features) page in Settings."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Admins can switch AI features (Agent chat, prompt_jev) on or off for the whole organization only. No per-user, group or workspace control is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Organization Admins can turn Agent chat on or off on the [AI Features](https://app.motherduck.com/settings/ai-features) page in Settings."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: An administrator has an organization-wide AI on/off switch. Per-user, group, or workspace rollout within the organization is not documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Organization Admins can turn Agent chat on or off on the [AI Features](https://app.motherduck.com/settings/ai-features) page in Settings."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Organization Admins can turn Agent chat on or off at the organization level in Settings, but there is no fine-grained role-based or user-group rollout mechanism.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Your reviewer clicks the link and sees the Dive running with live queries — no local setup needed."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: Dives are MotherDuck's BI content. This page documents a Git pull-request workflow: a PR deploys a preview Dive, a reviewer checks it, and the production Dive is created or updated only after the PR is merged. That is a general publishing and review workflow for governed BI content. The built-in Agent chat isn't documented to enter it, since its edits save a new version immediately ('Every edit saves a new version'). So under the row rule, a general publishing workflow the assistant isn't documented to enter is partly. The page has no beta or preview label (here 'preview' means a branch preview Dive, not a release stage).
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Creating Dives through an AI agent is fast, but as your team relies on them for decision-making, you may want the same rigor you apply to production code: version history, code review, and automated deployments."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: Dives have a documented Git/PR review and production-deployment workflow. It is not documented as an enforced route for built-in Agent chat edits, which save immediately, so this earns only the general-review-workflow partial credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Your reviewer clicks the link and sees the Dive running with live queries — no local setup needed."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: Dives are MotherDuck's BI content. MotherDuck documents a Git PR and preview workflow where changes are held for review on a preview Dive before being merged to production, representing a general publishing workflow not connected to built-in assistant actions.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Where model inference runs depends on your organization's [cloud region](/about-motherduck/cloud-regions/#agent-chat)."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Where Agent chat inference runs follows the org's region, which the customer picks when creating the org (US, EU, Japan, Australia geographies on Bedrock). That is a region choice, not inference in the customer's own cloud, and the SQL assistant functions route some regions to US endpoints.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Each MotherDuck Organization is scoped to a single cloud region, which is chosen at Organization creation when you sign up and cannot be changed afterward."
  - Source: https://motherduck.com/docs/about-motherduck/cloud-regions (checked 2026-10-26)
  - Reasoning: On the same page, the selected organization region determines Agent chat inference geography and AI-function processing endpoints. This provides regional inference control at organization creation, with Bedrock choosing a region inside that geography and some AI functions routed to the US; it is not customer-hosted inference.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Each MotherDuck Organization is scoped to a single cloud region, which is chosen at Organization creation when you sign up and cannot be changed afterward."
  - Source: https://motherduck.com/docs/about-motherduck/cloud-regions (checked 2026-10-26)
  - Reasoning: Customers select an organization cloud region upon creation, which determines the regional Amazon Bedrock boundary for Agent chat inference (US, EU, Japan, Australia), but inference is hosted on vendor-managed AWS services rather than customer tenant infrastructure, and APAC AI function calls route to US endpoints.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent works using your account permissions, so it can only perform the same actions as your account."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent acts as the asking user, so that user's access rules apply, including secure views that filter rows and mask columns using current_user. No AI surface is documented as bypassing them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent works using your account permissions, so it can only perform the same actions as your account."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent chat operates under the asking account. MotherDuck secure views enforce that consumer identity's row filtering and hidden/masked columns on the server, so the same rules constrain the agent's data access.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent works using your account permissions, so it can only perform the same actions as your account."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent Chat strictly inherits the calling user's account permissions and security policies.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Amazon Bedrock has a zero data retention policy and does not share your prompts or data with model providers."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: For Agent chat the docs give the service (Amazon Bedrock), what it receives (each message plus the Dive's state) and retention (zero). For the SQL assistant they give Azure OpenAI and the SQL, schema and sampled data, but no retention, so coverage is incomplete.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Amazon Bedrock has a zero data retention policy and does not share your prompts or data with model providers."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: For Agent chat the docs identify Amazon Bedrock, prompts/data, and zero retention. Other documented AI services include Azure OpenAI and TypeSafe, with payload details but no complete retention statement for all services, limiting product-wide coverage.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Amazon Bedrock has a zero data retention policy and does not share your prompts or data with model providers."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: MotherDuck documents that prompts and data processed by Amazon Bedrock are covered by a zero data retention policy and not shared with model providers, but does not publish a comprehensive data flow inventory.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Amazon Bedrock picks a geographically-aligned region for each request, so inference doesn't always run in the same region as your MotherDuck Organization."
  - Source: https://motherduck.com/docs/about-motherduck/cloud-regions (checked 2026-10-26)
  - Reasoning: The cloud-regions page lists processing regions for Agent chat and the AI functions, but not where AI data is stored. Processing without storage is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Amazon Bedrock picks a geographically-aligned region for each request, so inference doesn't always run in the same region as your MotherDuck Organization."
  - Source: https://motherduck.com/docs/about-motherduck/cloud-regions (checked 2026-10-26)
  - Reasoning: The page lists Agent chat inference regions and AI-function routing, including US processing for TypeSafe and some regional fallbacks. It does not establish processing and storage regions for AI request data across every AI feature.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Where model inference runs depends on your Organization's region:"
  - Source: https://motherduck.com/docs/about-motherduck/cloud-regions (checked 2026-10-26)
  - Reasoning: Model inference runs in specific AWS regions depending on the organization's cloud region (US regions use us-east-1, EU regions use eu-central-1), but Asia Pacific regions route inference to us-east-1, providing partial residency pinning.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The data processed by MotherDuck's AI functionality is **not** used for model training."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant (checked 2026-10-26)
  - Reasoning: An unconditional statement that data processed by MotherDuck's AI is not used for training, with no opt-out required. Agent chat's page adds that Bedrock does not share prompts with model providers.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The data processed by MotherDuck's AI functionality is **not** used for model training."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant (checked 2026-10-26)
  - Reasoning: MotherDuck states the policy for its AI functionality without requiring a customer opt-out.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The data processed by MotherDuck's AI functionality is **not** used for model training."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant (checked 2026-10-26)
  - Reasoning: MotherDuck explicitly guarantees that customer data processed by its AI functionality is not used for model training.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Partly** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can specify which tables and columns should be considered using the optional `include_tables` parameter."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant (checked 2026-10-26)
  - Reasoning: The SQL assistant can be limited per call with include_tables, a scope the caller sets rather than an admin-enforced, tenant-wide restriction. Agent chat simply uses the user's own permissions.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can specify which tables and columns should be considered using the optional `include_tables` parameter."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant (checked 2026-10-26)
  - Reasoning: The built-in SQL assistant supports table/column scoping per invocation. The caller supplies this scope; the documentation does not establish an admin-enforced workspace/tenant restriction separate from user permissions. Agent chat otherwise uses the user's account permissions.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can specify which tables and columns should be considered during SQL generation using the `include_tables` parameter."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/ai-functions/sql-assistant/prompt-sql (checked 2026-10-26)
  - Reasoning: The prompt_sql assistant function can be scoped per invocation with the include_tables parameter, but this is a caller-specified scope rather than an administrator-enforced tenant-wide restriction separate from user permissions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Read scaling tokens connect to dedicated read replicas that reject all write operations — even if the client calls `query_rw`, writes will fail."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/securing-read-only-access (checked 2026-10-26)
  - Reasoning: An outside MCP agent can use a read scaling token that is enforced read-only on the server, or a service account limited to specific shares. Either is narrower than the human's own read-write access.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Read scaling tokens connect to dedicated read replicas that reject all write operations — even if the client calls `query_rw`, writes will fail."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/securing-read-only-access (checked 2026-10-26)
  - Reasoning: An outside MCP agent can authenticate with a read-scaling token that removes database write capability even when the human has write access. The restriction is server-enforced; Guide/Dive/Flight operations need separate review.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For server-side enforcement, authenticate with a [read scaling token](/key-tasks/authenticating-and-connecting-to-motherduck/read-scaling/) instead of a regular access token."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/securing-read-only-access (checked 2026-10-26)
  - Reasoning: Outside agents connecting via MCP or API can be restricted to read-only access using read scaling tokens enforced server-side.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "List views in database: `SELECT database_name, schema_name, view_name, comment, sql FROM duckdb_views() WHERE database_name = 'your_database';`"
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/building-analytics-agents (checked 2026-10-26)
  - Reasoning: An outside agent can read a view's SQL and work out its sources, which the row counts as partial. There is no documented lineage interface, and list_views returns no definitions or dependencies.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- List views in database: `SELECT database_name, schema_name, view_name, comment, sql FROM duckdb_views() WHERE database_name = 'your_database';`"
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/building-analytics-agents (checked 2026-10-26)
  - Reasoning: The documented outside-agent schema workflow reads a warehouse view's defining SQL, from which upstream sources and transformations can be inferred. It is not a traversable product lineage graph.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The `query` tool executes SQL queries against your MotherDuck databases."
  - Source: https://motherduck.com/docs/sql-reference/mcp/core/query (checked 2026-10-26)
  - Reasoning: Outside agents can execute SQL queries to inspect system views like duckdb_views and deduce upstream sources from view SQL definitions, which meets the partial-scope criteria for reading view definitions, but no automated lineage traversal interface is documented.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Partly** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Queries run by any end user are attributed to the service account that owns the token, not to the individual Microsoft 365 user."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-setup (checked 2026-10-26)
  - Reasoning: Agent queries land in the general query history under the token's identity (service account or OAuth user), with USER_NAME and USER_AGENT columns. There is no agent-specific audit log of objects affected.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "All MotherDuck-side activity (query history, Dive ownership, billing) is attributed to the tenant's service account, not to the individual end user."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows/white-label-mcp-server (checked 2026-10-26)
  - Reasoning: This explicitly ties outside-MCP activity to its delegated service-account identity. QUERY_HISTORY retains the executed SQL, which identifies the analytical objects accessed; individual application-user question logging remains the customer's responsibility.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The `MD_INFORMATION_SCHEMA.QUERY_HISTORY` view provides a consolidated view of all queries run across an organization."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/md_information_schema/query_history (checked 2026-10-26)
  - Reasoning: Outside agent queries land in the general QUERY_HISTORY view under the connection's token identity (service account or OAuth user), with USER_NAME and USER_AGENT columns, but there is no dedicated agent-specific audit log tracking affected analytical objects.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Your reviewer clicks the link and sees the Dive running with live queries — no local setup needed."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: The vendor-documented Dives-as-code workflow has the outside agent (Claude Code) open a PR. A preview Dive is deployed for a reviewer, and the production Dive changes only when the PR is merged, so the agent's change is held for a different person.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Your reviewer clicks the link and sees the Dive running with live queries — no local setup needed."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: The documented outside-agent workflow opens a PR, deploys a preview for a reviewer, and deploys production on merge. It supports review before production, but does not document an enforced requirement for a different approver's approval before the agent's write takes effect.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Your reviewer clicks the link and sees the Dive running with live queries — no local setup needed."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: In MotherDuck's vendor-documented Dives-as-code workflow, changes by an outside agent (Claude Code) are submitted via a pull request which deploys a preview Dive held for review by a different person before merging into production.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When a PR is opened (or updated with new commits), a GitHub Action detects which Dive folders changed and deploys a **preview** Dive to MotherDuck."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: Agent changes go through a Git PR with a preview Dive, but the docs never describe a before/after diff the reviewer sees.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Creating Dives through an AI agent is fast, but as your team relies on them for decision-making, you may want the same rigor you apply to production code: version history, code review, and automated deployments."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: The documented outside-agent workflow puts Dive source in Git, opens a PR, and deploys a preview for a reviewer. This provides generic source-change review, but the page does not explicitly describe an agent-specific before/after diff of the governed Dive; credit is limited to that generic review workflow.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When a PR is opened (or updated with new commits), a GitHub Action detects which Dive folders changed and deploys a **preview** Dive to MotherDuck."
  - Source: https://motherduck.com/docs/key-tasks/dives/managing-dives-as-code (checked 2026-10-26)
  - Reasoning: In the documented Dives-as-code workflow, an outside agent (Claude Code) opens a Git pull request and deploys a preview Dive for a reviewer, providing a generic Git pull-request diff rather than an in-product diff interface for analytical assets.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Users can ask their agent to refer to and clone prior versions for continued iterations."
  - Source: https://motherduck.com/docs/key-tasks/dives (checked 2026-10-26)
  - Reasoning: Every agent edit to a Dive is saved as a version, and earlier versions can be restored by the agent or with MD_GET_DIVE_VERSION plus MD_UPDATE_DIVE_CONTENT (documented 'Roll back' example).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use this to read the code that was live at an earlier point, or to restore it by passing it back to [`MD_UPDATE_DIVE_CONTENT`](../md-update-dive-content)."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/dives/md-get-dive-version (checked 2026-10-26)
  - Reasoning: Agent-created and agent-edited Dives are versioned, and the SQL API documents restoring an earlier version by republishing its content. An outside agent can use this via its SQL interface; it is not merely read-only version browsing.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use this to read the code that was live at an earlier point, or to restore it by passing it back to [`MD_UPDATE_DIVE_CONTENT`](../md-update-dive-content)."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-sql-reference/dives/md-get-dive-version (checked 2026-10-26)
  - Reasoning: MotherDuck retains version history for Dives and allows restoring earlier versions by passing past code back to update functions.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The MotherDuck MCP Server lets AI assistants query and explore your databases using the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-setup (checked 2026-10-26)
  - Reasoning: MotherDuck runs a remote MCP server at api.motherduck.com/mcp, authenticated with OAuth or a Bearer token, covering databases, Dives, Flights and Guides. It is not labeled preview.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "MotherDuck offers a **remote MCP server** (fully managed, read-write) and a [**local MCP server**](#local-mcp-server) (fully customizable, self-hosted) that let AI assistants query and explore your MotherDuck databases using the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)."
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: The vendor-operated remote server provides database and analytical-object access, with OAuth and Bearer-token authentication documented on this page. The optional self-hosted implementation does not limit the managed route.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "MotherDuck offers a **remote MCP server** (fully managed, read-write) and a [**local MCP server**](#local-mcp-server) (fully customizable, self-hosted) that let AI assistants query and explore your MotherDuck databases using the [Model Context Protocol (MCP)](https://modelcontextprotocol.io/)."
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: MotherDuck provides a fully managed remote MCP server hosted at api.motherduck.com/mcp as well as an open-source local MCP server.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Explore database schemas, tables, and columns"
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: The MCP server lets an agent enumerate databases, tables, views, Dives (list_dives), Flights and Guides without knowing ids, and search the catalog.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The `list_dives` tool returns a list of all Dives in your MotherDuck workspace."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/list-dives (checked 2026-10-26)
  - Reasoning: The first-party MCP interface lets an outside agent enumerate existing persistent analytical apps without knowing their IDs. Companion catalog tools also enumerate databases, tables, views, and macros.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The `list_dives` tool returns a list of all Dives in your MotherDuck workspace."
  - Source: https://motherduck.com/docs/sql-reference/mcp/dives/list-dives (checked 2026-10-26)
  - Reasoning: The list_dives MCP tool enables outside agents to discover and list all Dives in the MotherDuck workspace.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Backend MCP clients can authenticate to `https://api.motherduck.com/mcp` with an `Authorization: Bearer <motherduck_token>` header."
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: The named credentials for agents are OAuth, Bearer access tokens, service-account tokens and read scaling tokens.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Backend MCP clients can authenticate to `https://api.motherduck.com/mcp` with an `Authorization: Bearer <motherduck_token>` header."
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: A named access-token credential and header are documented for outside MCP clients; interactive clients can also use OAuth.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Backend MCP clients can authenticate to `https://api.motherduck.com/mcp` with an `Authorization: Bearer <motherduck_token>` header."
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: Outside agents and backend MCP clients authenticate to the remote MCP server using standard HTTP Bearer tokens with MotherDuck access tokens.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "[MotherDuck Skills](https://github.com/motherduckdb/agent-skills/) is an opinionated, installable catalog of [agent skills](https://agentskills.io/home) that teaches coding agents how to work with MotherDuck."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-skills (checked 2026-10-26)
  - Reasoning: MotherDuck publishes a skills plugin catalog for Claude Code, Cursor, Codex, Copilot CLI and Gemini CLI.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "[MotherDuck Skills](https://github.com/motherduckdb/agent-skills/) is an opinionated, installable catalog of [agent skills](https://agentskills.io/home) that teaches coding agents how to work with MotherDuck."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-skills (checked 2026-10-26)
  - Reasoning: MotherDuck publishes an installable skills catalog with setup instructions for Claude Code, Codex, Cursor, Copilot CLI, and Gemini CLI; this is packaged guidance beyond an MCP server.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "[MotherDuck Skills](https://github.com/motherduckdb/agent-skills/) is an opinionated, installable catalog of [agent skills](https://agentskills.io/home) that teaches coding agents how to work with MotherDuck."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-skills (checked 2026-10-26)
  - Reasoning: MotherDuck publishes an installable catalog of agent skills (@motherduckdb/agent-skills) teaching coding agents how to interact with MotherDuck.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes (preview)** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "The MotherDuck CLI is designed for both AI agents and people."
  - Source: https://motherduck.com/docs/getting-started/interfaces/motherduck-cli/agents (checked 2026-10-26)
  - Reasoning: The vendor CLI has a 'Work with agents' page covering token auth without a browser (MOTHERDUCK_TOKEN, MOTHERDUCK_HOME) and JSON output. The CLI was released as '[Preview] MotherDuck CLI' (Aug 14, 2026) with no GA note since.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The MotherDuck CLI is designed for both AI agents and people."
  - Source: https://motherduck.com/docs/getting-started/interfaces/motherduck-cli/agents (checked 2026-10-26)
  - Reasoning: The agent-specific guide documents authoring Dives/Flights, machine-readable output, and noninteractive MOTHERDUCK_TOKEN authentication. The release notes label the MotherDuck CLI preview.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The MotherDuck CLI is designed for both AI agents and people."
  - Source: https://motherduck.com/docs/getting-started/interfaces/motherduck-cli/agents (checked 2026-10-26)
  - Reasoning: The MotherDuck CLI is explicitly built for AI agents with JSON output, authoring guides, and headless execution flags.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Not found** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The only per-tool and per-connector controls documented are in the outside clients (Claude connector permissions, ChatGPT Workspace Settings → Apps action control), not in MotherDuck. The AI Features settings page covers Agent chat, prompt_jev and the AI session cap, not MCP or outside-agent access. The roles pages document no MCP or agent permission.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documented controls are ordinary roles/tokens and client-side connector or tool restrictions in outside AI products. No MotherDuck admin control separately allows or blocks outside-agent/MCP access by user, group, or workspace.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck allows granting database permissions and issuing tokens to users and service accounts, but does not document an administrative control to allow or block outside-agent or MCP access for particular users, groups, or workspaces.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "**Query timeout:** 55 seconds. Queries exceeding this limit will be cancelled server-side and the tool will respond with an error message."
  - Source: https://motherduck.com/docs/sql-reference/mcp/core/query-rw (checked 2026-10-26)
  - Reasoning: The MCP query tools have fixed result-size and timeout limits, and read-scaling pool size bounds concurrency. There is no customer-configurable quota, rate limit or spend cap for agents.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- **Query timeout:** 55 seconds, to stay within common client timeouts. Queries exceeding this limit will be cancelled server-side and the tool will respond with an error message."
  - Source: https://motherduck.com/docs/sql-reference/mcp/core/query (checked 2026-10-26)
  - Reasoning: The outside-agent MCP query interface enforces a fixed server-side execution timeout; it also truncates oversized results. These are interface limits, not a customer-configurable agent quota, rate limit, or spend cap, so the documented consumption control has limited scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- **Query timeout:** 55 seconds, to stay within common client timeouts."
  - Source: https://motherduck.com/docs/sql-reference/mcp/core/query (checked 2026-10-26)
  - Reasoning: MotherDuck documents fixed technical limits for the MCP query tools, including a 55-second query timeout and 2,048-row / 50,000-character result truncation, but does not provide customer-configurable agent-specific rate limits, spend caps, or quotas.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes (preview)**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Guides are markdown documents you store in MotherDuck that AI agents read before working with your data."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Guides hold business context (MRR definitions, trusted tables, columns to avoid) that MCP-connected agents read automatically. Guides shipped as '[Preview] Guides' (July 29, 2026) with no GA note since.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Guides are markdown documents you store in MotherDuck that AI agents read before working with your data."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: For outside MCP agents, Guides persist the organization's metric meanings, trusted tables, joins, and pitfalls and load them into later sessions. The release notes label Guides preview.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Guides are markdown documents you store in MotherDuck that AI agents read before working with your data."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Guides store business context, metric definitions, and instructions as markdown documents in MotherDuck that AI agents read before working with data.

### C5: Can the business context you give the AI live in version control?

**Result: Yes (preview)**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, preview
  - Quote: "**Guide commands in the MotherDuck CLI:** Create, edit, and version [Guides](/key-tasks/guides/) from your terminal with `motherduck guide`, and keep them in version control alongside your other source files. Refer to the [`guide` command reference](/sql-reference/motherduck-cli/guide/) for details."
  - Source: https://motherduck.com/docs/about-motherduck/release-notes (checked 2026-10-26)
  - Reasoning: Guides can be pulled to and pushed from local files and kept in Git (Blueprints also has a guides/ directory). Guides and the CLI are both labeled Preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Create, edit, and version [Guides](/key-tasks/guides/) from your terminal with `motherduck guide`, and keep them in version control alongside your other source files."
  - Source: https://motherduck.com/docs/about-motherduck/release-notes (checked 2026-10-26)
  - Reasoning: The business context itself is in Markdown files, with pull/push and historical versions documented by the Guide CLI. It can live in Git for review, diffs, and rollback. Both Guides and the CLI are documented preview features.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Creates a local directory containing `guide.md` and `guide.metadata.json`."
  - Source: https://motherduck.com/docs/sql-reference/motherduck-cli/guide (checked 2026-10-26)
  - Reasoning: Guides can be managed as code and versioned locally as standard files (guide.md and guide.metadata.json) using the CLI.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes (preview)**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Org-shared Guides align every agent in your organization on the same definitions; private Guides personalize agents to how you work."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Context can be scoped to a user (or a per-tenant service account) or to the whole org, and topics load narrower context. There is no team or workspace scope, and topics are not access boundaries.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "When your application connects through a service account, `access: "user"` means private to that service account."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Outside agents can use different private business-context Guides under different service-account identities. The page explicitly recommends one service account per tenant, giving distinct audiences separate context without a single global set.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Definitions and instructions that apply to one domain, metric, database, or schema should load only when they're relevant."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Guides support scoped context loading by assigning topics and database references so instructions load only when relevant.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes (preview)**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Start a new conversation and repeat a question that needed the original context."
  - Source: https://motherduck.com/docs/key-tasks/guides/turn-a-session-into-a-guide (checked 2026-10-26)
  - Reasoning: There is a named 'Test the Guide' step, and Guides stay private while they are tested before being published org-wide (the bootstrap page adds a smoke test). Guides are labeled Preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Promote a Guide with [`set_guide_access`](/sql-reference/mcp/guides/set-guide-access) once it clears two separate gates: a named owner has confirmed the content, and the smoke test routes to it."
  - Source: https://motherduck.com/docs/key-tasks/guides/bootstrap-guides-with-an-ai-agent (checked 2026-10-26)
  - Reasoning: The documented Guide rollout uses a private staging scope, owner validation, and a fresh-session smoke test before promoting context organization-wide. This validates outside-agent context before broader answer use.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Promote a Guide with [`set_guide_access`](/sql-reference/mcp/guides/set-guide-access) once it clears two separate gates: a named owner has confirmed the content, and the smoke test routes to it."
  - Source: https://motherduck.com/docs/key-tasks/guides/bootstrap-guides-with-an-ai-agent (checked 2026-10-26)
  - Reasoning: MotherDuck outlines a verification process including smoke testing agent query routing against Guides before promoting them.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Partly (preview)**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Your agent's logs are worth reading here too — they show you exactly where it looked and what it skipped."
  - Source: https://motherduck.com/docs/key-tasks/guides/bootstrap-guides-with-an-ai-agent (checked 2026-10-26)
  - Reasoning: Which Guide an agent opened shows up only in the agent's tool-call logs. The answer itself does not surface the instruction that shaped it.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Your agent's logs are worth reading here too — they show you exactly where it looked and what it skipped."
  - Source: https://motherduck.com/docs/key-tasks/guides/bootstrap-guides-with-an-ai-agent (checked 2026-10-26)
  - Reasoning: For an outside agent using MotherDuck Guides, the page's Guide-routing test inspects tool calls/logs to establish which Guide it opened or skipped. This reveals context use through logs, rather than surfacing the specific business instruction with the answer. Guides are labeled Preview in the release notes.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can inspect which SQL query the MCP executed by expanding the tool call in the conversation:"
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows (checked 2026-10-26)
  - Reasoning: Which business context Guide or query was retrieved by an agent is visible only by expanding tool call logs in the client conversation; the final response text does not surface the specific business rule or context instruction that shaped it.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Agents read comments on every schema introspection."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows (checked 2026-10-26)
  - Reasoning: Table and column comments set with COMMENT ON in the warehouse are returned by the MCP schema tools (list_columns, list_views), so agents use them as context without retyping.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Agents read comments on every schema introspection."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Outside agents ingest existing warehouse table/column comments through schema introspection; the surrounding section distinguishes these comments from separately authored Guides. This comment-reading path does not depend on the preview Guide feature.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Agents read comments on every schema introspection."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Outside agents automatically inherit SQL comments placed on tables and columns during schema introspection.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Yes**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Retired. Archived Dives stay accessible by URL and ID, but sort last and are hidden from AI agent listings by default."
  - Source: https://motherduck.com/docs/key-tasks/dives/dive-statuses (checked 2026-10-26)
  - Reasoning: The Archived status is a product setting that takes a Dive out of AI agent listings so agents avoid it. For tables and fields, only Guide instructions ('columns to avoid') exist, which would be partial.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- [`list_dives`](/sql-reference/mcp/dives/list-dives) returns each Dive's status and orders results from most to least trusted. Archived Dives are excluded unless the agent asks for them."
  - Source: https://motherduck.com/docs/key-tasks/dives/dive-statuses (checked 2026-10-26)
  - Reasoning: An owner can mark a saved analytical answer/Dive Archived, and the first-party MCP listing then excludes it by default. This is product-supported deprecation so outside agents avoid it, rather than an absolute security block: archived content remains readable by ID.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "With Guides you capture the domain knowledge that isn't visible from a schema: how your org defines MRR, which tables to join on, which columns to avoid, common pitfalls in your data, or what "client" means in your field of work."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: MotherDuck Guides allow capturing domain knowledge including 'which columns to avoid, common pitfalls in your data', but this operates as prompt/context guidance for AI agents rather than a product-enforced restriction or deprecation setting, earning partly.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Yes (preview)**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Promote a Guide with [`set_guide_access`](/sql-reference/mcp/guides/set-guide-access) once it clears two separate gates: a named owner has confirmed the content, and the smoke test routes to it."
  - Source: https://motherduck.com/docs/key-tasks/guides/bootstrap-guides-with-an-ai-agent (checked 2026-10-26)
  - Reasoning: Only organization admins can make a Guide org-wide, and the documented workflow requires a named owner to confirm the content before promotion. That is both a role and a review step. Guides are labeled Preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Promote a Guide with [`set_guide_access`](/sql-reference/mcp/guides/set-guide-access) once it clears two separate gates: a named owner has confirmed the content, and the smoke test routes to it."
  - Source: https://motherduck.com/docs/key-tasks/guides/bootstrap-guides-with-an-ai-agent (checked 2026-10-26)
  - Reasoning: The documentation assigns validation to a named context/metric owner and describes the review and test steps before organization-wide promotion. This is a documented manual ownership/review workflow for outside-agent context, not an automatic enforced approval queue.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Promote a Guide with [`set_guide_access`](/sql-reference/mcp/guides/set-guide-access) once it clears two separate gates: a named owner has confirmed the content, and the smoke test routes to it."
  - Source: https://motherduck.com/docs/key-tasks/guides/bootstrap-guides-with-an-ai-agent (checked 2026-10-26)
  - Reasoning: Guides require a named owner to confirm content prior to promotion to organization-wide access.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Not found** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Edit is described as aware of 'relevant database schemas', but schemas aren't logic. Agent chat sees the Dive's own queries, which are BI content, not warehouse logic. No page says the built-in assistant reads view definitions or dbt models. The prompt_* SQL assistant functions are SQL functions, which the grading standard excludes.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Outside-agent guidance shows warehouse-view introspection, while Agent chat reads a Dive's queries and data. No page establishes that the built-in assistant reads warehouse definition logic such as dbt models, view definitions, or semantic views.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Agent chat inspects the active Dive's queries and UI view state rather than warehouse-level semantic models, views, or dbt definitions.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: No** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: no
  - Quote: "The agent can [create and edit Dives](#create-and-edit-dives) when you ask, but it can't change your tables or databases."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The docs say outright that the built-in agent cannot change tables or databases. It only writes SQL for the user to run.
- **GPT-6.1 Sol**: no
  - Quote: "- **Changes Dives, not your data.** The agent can [create and edit Dives](#create-and-edit-dives) when you ask, but it can't change your tables or databases. When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: The built-in agent explicitly cannot change warehouse tables/databases; it authors SQL for a human to run. It therefore does not land a transformation/model/view into the warehouse itself.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When you ask for a data change, it writes the SQL for you to run."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/agent-chat (checked 2026-10-26)
  - Reasoning: Built-in Agent Chat does not directly execute DDL/DML to alter warehouse logic or tables; instead, it drafts the SQL for the user to run manually (earning partly the grading standard/guidance).

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "List views in database: `SELECT database_name, schema_name, view_name, comment, sql FROM duckdb_views() WHERE database_name = 'your_database';`"
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/building-analytics-agents (checked 2026-10-26)
  - Reasoning: The vendor's agent query guide tells agents how to read view SQL definitions through MotherDuck. get_flight and flight pull also return Flight transformation source.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- List views in database: `SELECT database_name, schema_name, view_name, comment, sql FROM duckdb_views() WHERE database_name = 'your_database';`"
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/building-analytics-agents (checked 2026-10-26)
  - Reasoning: The outside-agent instructions explicitly retrieve the defining SQL of warehouse views, going beyond table/column names and types. Agents can run this through MotherDuck's documented SQL query route.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Macros encapsulate reusable SQL logic; knowing which ones exist helps the AI assistant reuse them instead of rebuilding the logic in every query."
  - Source: https://motherduck.com/docs/sql-reference/mcp/core/list-macros (checked 2026-10-26)
  - Reasoning: The list_macros MCP tool lets outside agents inspect and read warehouse macros and reusable SQL logic.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can create a Flight with the [MotherDuck MCP server](/key-tasks/ai-and-motherduck/mcp-setup/): describe the job in natural language, and the agent writes the Python, sets the schedule, and runs it for you with the MCP's Flight tools (`create_flight`, `edit_flight_source`, `run_flight`, and the rest)."
  - Source: https://motherduck.com/docs/concepts/flights (checked 2026-10-26)
  - Reasoning: Outside agents create and edit Flights, the warehouse-side ingest and transformation jobs, through the MCP server. query_rw can also change schema. Flights are GA (Sept 3, 2026).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use the MotherDuck MCP to create a table with the result instead of returning all rows in the chat."
  - Source: https://motherduck.com/docs/key-tasks/ai-and-motherduck/mcp-workflows (checked 2026-10-26)
  - Reasoning: The documented outside-agent workflow persists generated query results as a warehouse table, with CREATE TABLE AS SELECT specified elsewhere on this page. Together with the first-party query_rw schema-write tool, this establishes writing a warehouse transformation rather than only producing a local SQL file.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The `query_rw` tool executes SQL against your MotherDuck databases, including operations that change data or schema."
  - Source: https://motherduck.com/docs/sql-reference/mcp/core/query-rw (checked 2026-10-26)
  - Reasoning: Outside agents can create and alter warehouse logic, tables, views, and schemas using the query_rw MCP tool.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Not found**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The dbt MetricFlow cookbook runs MetricFlow's own 'mf' CLI to render SQL against MotherDuck. The definitions are consumed by MetricFlow, not by any MotherDuck feature. No page documents MotherDuck importing or consuming dbt, Cube or semantic-view metric definitions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The MetricFlow recipes run the external mf CLI via dbt-duckdb or customer-authored Flight Python; they do not document native consumption/import of existing metric definitions by MotherDuck's analytical layer. Harvesting dbt knowledge into Guides is context curation, not an executable metric-definition import.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck does not import or synchronize metric definitions maintained in dbt MetricFlow, Cube, or warehouse semantic views into a native BI semantic layer.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Not found** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: MotherDuck documents no shared metric, dimension or join layer that the built-in assistant answers from. Guides hold definitions but are documented as reaching agents 'through the MCP server' (outside agents). Agent chat isn't documented to read them.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Shared Guides deliver definitions to outside MCP-connected agents, and MetricFlow runs externally supplied semantic logic. No page establishes that MotherDuck's built-in assistant answers using a shared metric/dimension/join definition layer.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck has no native built-in semantic definition layer, and the built-in assistant queries tables and Dive queries rather than shared metrics or dimensions.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents the built-in Agent chat or SQL assistant creating or editing metrics, dimensions or joins in a shared definition layer. Agent chat edits Dives, and 'it can't change your tables or databases'.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The built-in agent edits Dive code, queries, and metadata; Guide creation/editing is documented for outside MCP-connected agents. No built-in assistant authoring of shared metrics, dimensions, joins, or their descriptions is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck does not provide a native shared semantic modeling layer, and the built-in assistant cannot create or edit governed metric definitions.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes (preview)** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Read and write [Guides](/key-tasks/guides/) — markdown documents that capture your org's metric definitions, join conventions, and domain context, so agents produce accurate SQL without repetitive prompting"
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: Outside agents read metric definitions in Guides (get_query_guide, get_guide) and column descriptions through the MCP server. Guides are labeled Preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Read and write [Guides](/key-tasks/guides/) — markdown documents that capture your org's metric definitions, join conventions, and domain context, so agents produce accurate SQL without repetitive prompting"
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: An outside agent reads shared metric and join meanings through Guide discovery/get APIs, rather than guessing from field names. These are documented as the semantic context layer, with no claim of enforced executable metric semantics.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Guides are markdown documents you store in MotherDuck that AI agents read before working with your data."
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Outside agents read shared metric definitions and business context stored in Guides via MCP tools.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes (preview)** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Read and write [Guides](/key-tasks/guides/) — markdown documents that capture your org's metric definitions, join conventions, and domain context, so agents produce accurate SQL without repetitive prompting"
  - Source: https://motherduck.com/docs/sql-reference/mcp (checked 2026-10-26)
  - Reasoning: Outside agents create and edit Guides with create_guide, update_guide and edit_guide_content through MCP, and with the CLI and SQL functions. Guides are labeled Preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "For targeted edits (fixing a table name, correcting a value), the agent uses [`edit_guide_content`](/sql-reference/mcp/guides/edit-guide-content), which applies find-and-replace edits without resending the whole document:"
  - Source: https://motherduck.com/docs/key-tasks/guides (checked 2026-10-26)
  - Reasoning: Outside agents can edit the shared metric definitions and join conventions stored in Guides, using first-party MCP tools. This is the documented Markdown definition/context layer, not a separately enforced modeling-language layer.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The `create_guide` tool creates a Guide identified by a generated UUID."
  - Source: https://motherduck.com/docs/sql-reference/mcp/guides/create-guide (checked 2026-10-26)
  - Reasoning: Outside agents can create shared definitions and Guides in MotherDuck using the create_guide MCP tool.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Not found**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents exporting definitions modelled in a MotherDuck BI surface (Dives) back into warehouse objects such as views or metric views.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: MetricFlow renders externally authored YAML to SQL, and customer-written Flights can execute warehouse code. No direct path pushes definitions modeled in MotherDuck's analytical content or Guides into maintained warehouse definitions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: MotherDuck Dives contain visualization logic and queries, but provide no mechanism to export or push analytical definitions down into warehouse views or models.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes (preview)**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, preview
  - Quote: "After a session where you analyzed data, explored tables, or worked through a task with an agent, save the reusable context that emerged as a Guide."
  - Source: https://motherduck.com/docs/key-tasks/guides/turn-a-session-into-a-guide (checked 2026-10-26)
  - Reasoning: Definitions worked out in a one-off analysis can be saved as a Guide and then published org-wide for everyone's agents, with no developer rewriting them in a modeling language. Guides are labeled Preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "After a session where you analyzed data, explored tables, or worked through a task with an agent, save the reusable context that emerged as a Guide."
  - Source: https://motherduck.com/docs/key-tasks/guides/turn-a-session-into-a-guide (checked 2026-10-26)
  - Reasoning: The documented path captures definitions, join/filter rules and working query patterns from a one-off analysis directly into a maintained Guide, then lets an admin publish it organization-wide for everyone's MCP-connected agents. No modeling-language rewrite is required. Guides are labeled Preview in the release notes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "After a session where you analyzed data, explored tables, or worked through a task with an agent, save the reusable context that emerged as a Guide."
  - Source: https://motherduck.com/docs/key-tasks/guides/turn-a-session-into-a-guide (checked 2026-10-26)
  - Reasoning: Reusable definitions, formulas, or context that emerge during an analysis session with an agent can be promoted and saved as a persistent Guide.

