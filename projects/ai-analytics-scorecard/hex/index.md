# Hex: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/hex/

AI Feature Score **81**, #4 of 15 (BI and analytics tool). Built-in AI 80, external AI 67, other 76. Analysis 72, Building and maintaining assets 91, Context and connections 89, Reliability and controls 72. By model: Claude Opus 5.5 78, GPT-6.1 Sol 81, Gemini 3.8 Flash 81.

## Score breakdown

Four areas, 25 points each. Shown for GPT-6.1 Sol, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 18.1 of 25
- Building and maintaining assets: 22.7 of 25
- Context and connections: 22.3 of 25
- Reliability and controls: 18.1 of 25

**Strengths**

- It hands back when unsure
- Context has an owner and a review step
- You can score whether the AI is right

**Not found in the docs**

- Definitions pushed back to the warehouse
- Outside agents write warehouse logic
- One agent can hand a task to another

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "With Threads, users can ask natural language questions and get AI-powered insights based on semantic models and warehouse tables, all in a conversational interface."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Threads, the built-in Hex agent, takes plain-English questions and writes and runs SQL against the user's data. No pre-built dashboard or SQL is needed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "With Threads, users can ask natural language questions and get AI-powered insights based on semantic models and warehouse tables, all in a conversational interface."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: The built-in Threads agent answers plain-English questions directly against connected data.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "With Threads, users can ask natural language questions and get AI-powered insights based on semantic models and warehouse tables, all in a conversational interface."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Hex Threads lets users ask questions in natural language and receive AI-powered answers and queries across warehouse tables and semantic models.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Of course, users can also ask follow up questions in their threads to tweak results."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Threads are conversational, and follow-up questions refine earlier results in the same thread (the MCP page also shows a 'break that down by sales channel' follow-up).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Of course, users can also ask follow up questions in their threads to tweak results."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Follow-up questions refine the existing Threads analysis within its conversation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Of course, users can also ask follow up questions in their threads to tweak results."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Hex Threads retains conversational context across multi-turn interactions, allowing users to ask follow-up questions to refine results.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can always expand the tool calls and thinking text to understand how the agent arrived at a particular result."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Thread answers expose the agent's tool calls (generated and executed SQL, among others) and its reasoning. Every Thread is also backed by a Notebook view that shows the underlying logic.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can always expand the tool calls and thinking text to understand how the agent arrived at a particular result."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: The answer retains inspectable tool calls, including generated/executed SQL and results, and an underlying notebook with analytical logic.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can always expand the tool calls and thinking text to understand how the agent arrived at a particular result."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Hex Threads exposes tool calls and thinking text alongside results so users can see the exact query and analytical steps used to derive an answer.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Partly** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Pick the 3 to 6 most-used topics and gather about 25 representative threads, reading each with `hex thread get --json` for its `resources` array (the exact tables and semantic models it touched) and `hex thread messages --json` for the conversation, where the agent's replies usually include the SQL it ran."
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Each Thread records the exact tables and semantic models the built-in agent touched. This is retrievable per thread, and admins see it in the Thread Inspector. The docs do not say a table/column/metric list is shown to the user with the answer. In the app, the citations shown are project or cell links, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Pick the 3 to 6 most-used topics and gather about 25 representative threads, reading each with `hex thread get --json` for its `resources` array (the exact tables and semantic models it touched) and `hex thread messages --json` for the conversation, where the agent's replies usually include the SQL it ran."
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Hex records the exact tables and semantic models used by its built-in agent in each Thread, separately from generated SQL. This supports conversation-level source attribution retrievable through the CLI; the Thread Inspector also exposes referenced data assets. The documentation does not establish a specific table, column, or metric citation attached to each answer in the ordinary user interface.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Pick the 3 to 6 most-used topics and gather about 25 representative threads, reading each with `hex thread get --json` for its `resources` array (the exact tables and semantic models it touched) and `hex thread messages --json` for the conversation, where the agent's replies usually include the SQL it ran."
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Hex thread answers include a resources array explicitly specifying the exact tables and semantic models touched to generate the answer.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Users can upload CSVs and the agent can craft queries based on the file provided."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: In Threads, users can upload a CSV and the built-in agent queries and analyzes it. This requires the allow-file-uploads setting.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Users can upload CSVs and the agent can craft queries based on the file provided."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Threads analyzes uploaded CSV contents, rather than merely storing uploaded files.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Users can upload CSVs and the agent can craft queries based on the file provided."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Hex Threads allows users to upload CSV files which the agent analyzes and queries.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Yes** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent is capable of creating Python cells, SQL cells, Markdown cells, Pivot cells, Input parameters, Single value cells, and Chart cells."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The Notebook agent transforms and reshapes data by writing SQL, Python and Pivot cells. These stay in the notebook as inspectable transformation code, and each change must be confirmed or undone per cell.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent is capable of creating Python cells, SQL cells, Markdown cells, Pivot cells, Input parameters, Single value cells, and Chart cells."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The built-in agent creates persistent, inspectable transformation artifacts, including Pivot cells that reshape and aggregate data; the pivot documentation describes their editable configuration and downstream dataframe output.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent is capable of creating Python cells, SQL cells, Markdown cells, Pivot cells, Input parameters, Single value cells, and Chart cells."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The Hex Notebook agent cleans and transforms data by creating inspectable SQL, Python, and Pivot transformation cells in the notebook.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Yes** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent is also capable of joining the CSV data with existing warehouse data, enabling cross-source insights through a simple file upload."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: The Threads agent joins an uploaded file with warehouse data in one analysis. The same page says it can also query multiple connections in one conversation.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent is also capable of joining the CSV data with existing warehouse data, enabling cross-source insights through a simple file upload."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: The built-in agent joins an uploaded CSV and warehouse data in one analysis, satisfying the distinct-source requirement.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent is also capable of joining the CSV data with existing warehouse data, enabling cross-source insights through a simple file upload."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: The Hex Threads agent can join uploaded CSV data with existing data warehouse sources in a single analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "In the agent response, the agent will typically explain the logic it used to arrive at the returned insight, and share results in the form of tables, pivots, and visualizations."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: The Threads agent decides how to present results and creates the tables, pivots and charts itself, using a visualization-creation tool. The user does not pick the chart first.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "In the agent response, the agent will typically explain the logic it used to arrive at the returned insight, and share results in the form of tables, pivots, and visualizations."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Threads creates visualizations as part of answering the question, with chart-creation tools; it does not require the user to select a chart first.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For complex analytical requests, the Hex Agent uses subagents to break your question into focused workstreams that run in parallel — including finding the right data connections, tables, and schemas, as well as handling chart creation."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: Hex Agent subagents automatically select, create, and configure charts suited to analytical questions.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "I filtered the pipeline chart to EMEA, which accounts are driving the total?"
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: Example prompts show the built-in agent being asked what drives a total or why churn spiked. No page documents a contribution breakdown with checkable per-segment shares, or a key-driver method the agent uses.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "I set the date input to last quarter, why is revenue down?"
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: This official example documents asking the built-in Chat with App agent to investigate a revenue decrease using the app state. It supports explaining a change, but does not document checkable calculations of each segment or factor's contribution to that change.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Go to slide 2 and tell me why churn spiked in March"
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: Hex documents sample prompts where the assistant is asked why a metric changed or which accounts drive a total ("Go to slide 2 and tell me why churn spiked in March"), but does not document a checkable per-segment contribution breakdown calculation or key-driver function used by the assistant, earning partly.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Partly** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Build me a 12-month ARR forecast.~5 credits"
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: The credits page lists a 12-month ARR forecast as an example task the Hex agent performs. No page documents the agent exposing the forecast's inputs or assumptions.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Build me a 12-month ARR forecast."
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: Hex lists an AI forecast request as a credit-consuming agent task. The example establishes a forecast horizon but not disclosed inputs or forecasting assumptions.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Build me a 12-month ARR forecast.~5 credits"
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: Hex documents that the agent can produce forecasts like a 12-month ARR forecast, but does not document exposing underlying forecast assumptions, horizon parameters, and baseline logic.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Hex page documents the Hex Agent, Threads agent or Notebook Agent defining what-if scenarios, stating each scenario's changed assumptions, or calculating several scenarios to compare side by side. Chat with App says the agent can 'Update input parameters and project filters' to refine and inspect app data. That is changing an input the app author built. It is not a scenario with stated assumptions, so it doesn't establish this row, even partly.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documentation establishes the built-in AI calculating multiple what-if scenarios with explicitly changed assumptions and comparable results. Generative apps can build simulators, and a forecast prompt is listed, but neither documents the required scenario analysis.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation in Hex describes the AI calculating and comparing what-if scenarios, each with changed assumptions stated.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Partly** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Hex does show freshness, but no page ties it to an AI answer. The running-apps page shows an 'age of results' timestamp on published apps, and the dbt integration shows source freshness in the Data browser. Neither page mentions the agent, and the Chat with App page does not say that the age-of-results indicator applies to agent answers. Cell staleness (run-modes page) describes upstream cells that were run more recently. It is about execution order, not the age of the data. None of this is freshness shown with the AI's answer.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "In the top right hand corner of an app, users will see a relative timestamp, indicating the age of the oldest data referenced in the results currently displayed."
  - Source: https://learn.hex.tech/docs/share-insights/apps/running-apps (checked 2026-10-26)
  - Reasoning: Hex shows the age of the data behind displayed app results. Because the built-in Chat with App agent works with those app outputs, this gives source-level freshness alongside the analytical content it uses. It does not establish a freshness timestamp attached to each conversational answer or the warehouse's own last-refresh time.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "In any mode other than Auto, cells can become "stale" if an upstream ancestor cell has been run more recently than it."
  - Source: https://learn.hex.tech/docs/explore-data/projects/project-execution/run-modes-and-cell-staleness (checked 2026-10-26)
  - Reasoning: Hex indicates cell staleness when upstream ancestors have executed more recently, but the conversational assistant does not independently report underlying warehouse data refresh timestamps or stale data alerts.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "View and summarize project logic: Give explanations of how metrics used in the app are defined"
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: On a published app (BI content), Chat with App's built-in agent reads and explains the logic behind the app's metrics.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- View and summarize project logic: Give explanations of how metrics used in the app are defined"
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: The built-in Chat with App agent reads analytical logic of an existing published app, including definitions behind displayed metrics, beyond isolated editor SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Each conversation is backed by the Threads agent with the app as context, so in addition to interacting with the app itself - viewing outputs, updating inputs, applying filters, re-running the app - the agent can write and run SQL and python, pull from semantic models, build charts, and work with uploaded files to extend its analysis beyond what is in the app."
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: Chat with App is backed by the Threads agent with the published app as context, allowing the built-in assistant to interact with the app, view outputs, update inputs, run queries, and extend analysis from the app.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Generate and edit cells: The Agent is capable of creating and modifying Python, SQL, Markdown, Pivot, and Chart cells."
  - Source: https://learn.hex.tech/docs/getting-started/ai-overview (checked 2026-10-26)
  - Reasoning: The Notebook agent edits the SQL and Chart cells behind an app's charts. Its page adds that it can arrange 'and publish the app for you', so the changed calculation reaches the published app.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent is capable of creating Python cells, SQL cells, Markdown cells, Pivot cells, Input parameters, Single value cells, and Chart cells."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The same agent page explicitly documents arranging and publishing the app from these cells. Thus agent-authored SQL/Python and pivot logic can feed charts/tables in persistent published BI content, rather than stopping at an isolated notebook query.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent is capable of creating Python cells, SQL cells, Markdown cells, Pivot cells, Input parameters, Single value cells, and Chart cells."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The built-in Hex Notebook agent authors and edits execution cells directly, generating SQL and Python logic in the notebook.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Exports a Hex project in the *.hex.yaml format."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: An outside agent can export the whole project file and parse it, or read SQL cells in the draft through MCP/API. MCP returns chart cells without their configuration. No per-chart calculation retrieval for published BI content is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Exports a Hex project in the *.hex.yaml format."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: ExportProject can select latest, the published app version; the Hex YAML contains the full project logic and app layout. An outside agent can parse that whole file to recover a particular chart’s calculation, which the row explicitly scores partly.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "get_cell: Read a single cell by its ID"
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents can read execution code and cell contents via the Hex MCP server get_cell and list_cells tools.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Update a cell's source and/or data connection."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: An outside agent can change the SQL feeding a chart through UpdateCell, but only in the draft. Chart configuration cannot be edited, and the published app is unchanged until a person publishes.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Update a cell's source and/or data connection."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: The UpdateCell API accepts a specific SQL/Python cell ID and new source. An outside agent can identify a published app’s backing calculation from ExportProject and then change that calculation cell in its draft before publication; replacing the entire workbook is not required. Direct chart-style configuration is not exposed.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "create_cell / update_cell / delete_cell: Add, edit, and remove SQL, Python, and Markdown cells"
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents can author and update execution logic (SQL, Python, Markdown cells) via Hex MCP server tools.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "View and summarize project outputs: Understand and synthesize the results and insights displayed in the app"
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: Chat with App's built-in agent opens a published app and works from what it shows: it reads outputs, updates inputs and filters, and reruns the app. Threads also finds published apps.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Chat with App lets you ask natural language questions and run analysis from a conversational sidebar on any published app."
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: The built-in agent starts from existing published BI content and can inspect outputs and underlying logic, update inputs/filters, and extend its analysis.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "On the published app view, use Chat with App to summarize information in the app, understand the project's underlying logic, update inputs and filters, and run projects!"
  - Source: https://learn.hex.tech/docs/getting-started/ai-overview (checked 2026-10-26)
  - Reasoning: Hex's Chat with App feature reads the published app view, its layout, summaries, and underlying logic to answer user questions.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Notebook agent can create and edit the layout of your published app, as well as publish the app for you."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The built-in agent builds and publishes apps: persistent projects with owners, sharing permissions and live data connections.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Notebook agent can create and edit the layout of your published app, as well as publish the app for you."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The built-in agent builds persistent first-class Hex apps from live SQL/Python/chart cells and publishes them. Project owners, permissions and governed connections apply to those apps.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Notebook agent can create and edit the layout of your published app, as well as publish the app for you."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The built-in Hex Notebook agent creates and edits app layouts (arranging cells into rows, columns, and tabs) and can publish apps.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Partly (preview)** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: partly, preview
  - Quote: "list_cells: Read the cells in a project's draft version"
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents read a project's draft notebook (SQL, code, Markdown) and chart images. Chart and filter configuration is not returned, and published app versions are not read, so this covers analyst work only. The MCP server is in beta.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Exports a Hex project in the *.hex.yaml format."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: The API can export latest, explicitly the published app version. Hex’s documented file format contains the entire project logic and app layout, so outside agents can read existing BI definitions, including queries and configuration. This is more than listing metadata.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "list_cells: Read the cells in a project's draft version"
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents can inspect cells in a project draft via the Hex MCP server, but cannot read the full visual layout configuration of published dashboards.

### D_OW: Can an outside coding agent build BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "AI agents that can interact with your command line, such as Claude Code, Cursor, or Codex, can use the `hex` CLI to create projects, edit cells, and run the Hex Agent."
  - Source: https://learn.hex.tech/docs/api-integrations/cli (checked 2026-10-26)
  - Reasoning: Outside agents can create projects and notebook cells, which is analyst work. MCP says to 'publish the project from the Hex app' to make the work visible, so outside agents do not directly create published BI content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If you prefer to build a classic Hex app, the skill can fall back to native chart and single value cells."
  - Source: https://learn.hex.tech/docs/migrate-to-hex/migrate-from-tableau (checked 2026-10-26)
  - Reasoning: The vendor-published migration skill runs in an outside coding agent through Hex’s CLI and builds persistent Hex BI apps. Its explicitly documented Classic app path establishes generally available BI creation; the default Generative app path is beta.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Shares the project link so the user can review, add charts, and publish it in Hex."
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents can create and edit cells in drafts via MCP, but adding charts, layout adjustments, and publishing must be completed by the user in Hex.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Data connection access (including OAuth), workspace roles, and project sharing settings all apply to Generative apps the same way they do to Classic apps."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: Generative apps built by the agent are shared with named users or groups through project sharing. With OAuth personal credentials, every viewer runs queries with their own token. Shared Threads, by contrast, show the author's outputs. Generative apps are Beta.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- App results and default states are per user, not shared across viewers."
  - Source: https://learn.hex.tech/docs/connect-to-data/data-connections/oauth-data-connections (checked 2026-10-26)
  - Reasoning: AI-built published Hex apps can use normal named-user/group project sharing. Requiring each viewer’s personal warehouse credentials and private results makes their displayed data respect their own warehouse permissions. This requires that configuration; shared author-result Threads alone would only be partial.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Data connection access (including OAuth), workspace roles, and project sharing settings all apply to Generative apps the same way they do to Classic apps."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: Hex Generative apps inherit workspace roles, data connection permissions, and project sharing settings.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Workspace search allows you to search your workspace to easily find projects and components."
  - Source: https://learn.hex.tech/docs/organize-content/workspace-search (checked 2026-10-26)
  - Reasoning: Workspace search finds colleagues' projects, with filters by creator. Thread-backed projects become searchable once saved as a project.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Workspace search will always respect Hex user roles and project permissions."
  - Source: https://learn.hex.tech/docs/organize-content/workspace-search (checked 2026-10-26)
  - Reasoning: Workspace-wide search finds colleagues’ shared projects and published apps, including saved AI-created projects. Unlisted Thread projects are intentionally excluded until saved.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Workspace search allows you to search your workspace to easily find projects and components."
  - Source: https://learn.hex.tech/docs/organize-content/workspace-search (checked 2026-10-26)
  - Reasoning: Hex provides workspace search to find projects, apps, and reusable components across the workspace.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Partly (preview)** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Tasks themselves are single-player: only the user who created a Task can view and edit the configuration of the Task."
  - Source: https://learn.hex.tech/docs/explore-data/tasks (checked 2026-10-26)
  - Reasoning: A Task saves a prompt with attached context (connections, semantic models, projects) for the built-in Threads agent. The configuration cannot be shared, so colleagues cannot reuse it. No custom shared-assistant feature is documented. Tasks are in Beta.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "A Task is a saved prompt, with context, that runs the Threads agent on a recurring schedule and delivers the result to a Slack channel or email."
  - Source: https://learn.hex.tech/docs/explore-data/tasks (checked 2026-10-26)
  - Reasoning: A Task persists instructions and attached connections, semantic models, or projects for the built-in Threads agent, running with its creator's access. The same page explicitly makes Task configuration single-player: only its creator can view or edit it. Sharing the resulting Thread does not let colleagues reuse the configured assistant or submit further prompts.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Tasks themselves are single-player: only the user who created a Task can view and edit the configuration of the Task."
  - Source: https://learn.hex.tech/docs/explore-data/tasks (checked 2026-10-26)
  - Reasoning: Tasks allow saving a prompt along with data connections, semantic models, and projects as context for the Threads agent to run on a schedule, but Tasks are single-player and cannot be shared or configured for reuse by colleagues.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Yes (preview)** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "A Task is a saved prompt, with context, that runs the Threads agent on a recurring schedule and delivers the result to a Slack channel or email."
  - Source: https://learn.hex.tech/docs/explore-data/tasks (checked 2026-10-26)
  - Reasoning: Tasks have the built-in Threads agent rerun a defined analysis on a schedule and deliver a freshly produced answer to Slack or email, with no person present. Tasks are labeled Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "A Task is a saved prompt, with context, that runs the Threads agent on a recurring schedule and delivers the result to a Slack channel or email."
  - Source: https://learn.hex.tech/docs/explore-data/tasks (checked 2026-10-26)
  - Reasoning: Tasks run the built-in agent afresh and deliver its analytical result, rather than merely rerunning a static dashboard.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "A Task is a saved prompt, with context, that runs the Threads agent on a recurring schedule and delivers the result to a Slack channel or email."
  - Source: https://learn.hex.tech/docs/explore-data/tasks (checked 2026-10-26)
  - Reasoning: Hex Tasks run the Threads agent on a recurring schedule with prompt and context, delivering AI-generated analysis to Slack or email.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Yes (preview)** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "For example, agents can search Notion docs, create Linear issues, or call tools you've built and hosted yourself."
  - Source: https://learn.hex.tech/docs/api-integrations/external-apps (checked 2026-10-26)
  - Reasoning: Through admin-configured External Apps (MCP), the built-in Hex agent calls external systems with side effects, such as creating Linear issues. Tasks also deliver Slack/email notifications. External Apps are in beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "For example, agents can search Notion docs, create Linear issues, or call tools you've built and hosted yourself."
  - Source: https://learn.hex.tech/docs/api-integrations/external-apps (checked 2026-10-26)
  - Reasoning: Hex agents can cause a named external side effect, such as creating a Linear issue; the Always allow policy permits automatic tool execution.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "For example, agents can search Notion docs, create Linear issues, or call tools you've built and hosted yourself."
  - Source: https://learn.hex.tech/docs/api-integrations/external-apps (checked 2026-10-26)
  - Reasoning: Hex agents can execute actions in external third-party systems like searching Notion docs, creating Linear issues, or calling custom external tools via MCP.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Yes (preview)** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "If the Task creator's OAuth session expires, the next run will fail and the creator will be notified to reauthenticate."
  - Source: https://learn.hex.tech/docs/explore-data/tasks (checked 2026-10-26)
  - Reasoning: When a scheduled Threads-agent Task cannot proceed because credentials expired, it stops and notifies the creator to act. Interactively, External Apps 'Always ask' tools pause the agent for approval, and users can get push notifications when the agent 'needs your input to proceed'. Tasks are Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "If the Task creator's OAuth session expires, the next run will fail and the creator will be notified to reauthenticate."
  - Source: https://learn.hex.tech/docs/explore-data/tasks (checked 2026-10-26)
  - Reasoning: For a documented inability to proceed, a scheduled agent Task fails and explicitly notifies its human creator of the required action. This establishes an authentication-specific hand-off.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Always ask — the agent pauses and shows an approval prompt with the tool name, arguments, and a description of what will happen. Nothing runs until you accept."
  - Source: https://learn.hex.tech/docs/api-integrations/external-apps (checked 2026-10-26)
  - Reasoning: External apps allow setting tool permissions to Always ask, which pauses the agent and presents an approval prompt showing tool arguments before continuing upon acceptance.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Not found** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Notebook Agent page says the Hex Agent 'uses subagents to break your question into focused workstreams'. These are internal subagents that Hex runs. The customer doesn't name or configure them, and the docs say model selection doesn't even apply to them. The row says hidden implementation subagents do not count. No page documents a customer setting up one agent to delegate a bounded task to another named agent with its own tools and permissions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The Notebook agent documentation describes Hex automatically using subagents for parallel schema discovery and charting. It does not document a customer configuring delegation to another named agent with explicit tools and permissions. Those implementation subagents are excluded by this row's definition; the corpus does not settle whether the requested customer-configurable capability exists.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For complex analytical requests, the Hex Agent uses subagents to break your question into focused workstreams that run in parallel — including finding the right data connections, tables, and schemas, as well as handling chart creation."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The Hex Agent uses subagents to break complex analytical requests into focused workstreams running in parallel to handle schemas, queries, and charting.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Yes (preview)** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Hex agents can use tools from External Apps that your Hex Admin configures."
  - Source: https://learn.hex.tech/docs/api-integrations/external-apps (checked 2026-10-26)
  - Reasoning: Admins attach Notion, Linear or any custom MCP server to the built-in Hex agent, with per-tool allow/ask/block controls. External Apps are currently in beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Connect Hex's agent via MCP to external apps like Notion, Linear, or your own custom MCP-compatible tools."
  - Source: https://learn.hex.tech/docs/api-integrations/external-apps (checked 2026-10-26)
  - Reasoning: Admins attach external MCP endpoints and tools to Hex’s own agents; this is the outbound client direction.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Connect Hex's agent via MCP to external apps like Notion, Linear, or your own custom MCP-compatible tools."
  - Source: https://learn.hex.tech/docs/api-integrations/external-apps (checked 2026-10-26)
  - Reasoning: Hex connects its built-in agent as an MCP client to external apps and custom MCP-compatible servers.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly (preview)** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The agent can fix your code with either Fix with agent or Quick fix."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The Notebook agent repairs broken cells a user points it at. Finding content affected by a definition change is a person-run step (the semantic publish 'References' tab). No AI-driven discovery and repair of affected BI content is documented.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "The agent can also read the rendered app and its console output, so it can fix layout issues, broken components, and runtime errors when you ask."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: The built-in agent can repair an app a user asks it to fix. No AI workflow is documented that discovers all BI assets affected by a warehouse or shared-definition change and repairs or flags them.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The agent can fix your code with either Fix with agent or Quick fix."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The Hex Notebook agent fixes code and query syntax errors in notebook cells, but does not autonomously repair broken external upstream data dependencies.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Yes (preview)** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: yes, preview
  - Quote: "The agent can also read the rendered app and its console output, so it can fix layout issues, broken components, and runtime errors when you ask."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: The built-in Hex agent reads a Generative app's code files, rendered output and console. Generative apps are Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The agent can also read the rendered app and its console output, so it can fix layout issues, broken components, and runtime errors when you ask."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: The built-in agent can inspect and iterate on the actual generated app, including what renders; the page also documents agent editing of its app files.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The agent can also read the rendered app and its console output, so it can fix layout issues, broken components, and runtime errors when you ask."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: The built-in Hex agent reads the rendered app, console outputs, components, and runtime errors to troubleshoot and fix generative apps.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Yes (preview)** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Generative apps are a new app type in Hex - you describe what you want, and the Hex agent creates a flexible, fully customizable app to meet your needs."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: The agent builds persistent, publishable apps backed by the project's live data. They inherit Hex permissions and sharing. Generative apps are Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Generative apps are a new app type in Hex - you describe what you want, and the Hex agent creates a flexible, fully customizable app to meet your needs."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: These are persistent, publishable Hex apps backed by notebook data, not disposable HTML. The page explicitly applies data-connection/OAuth permissions, workspace roles and project-sharing settings.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Generative apps are a new app type in Hex - you describe what you want, and the Hex agent creates a flexible, fully customizable app to meet your needs."
  - Source: https://learn.hex.tech/docs/share-insights/apps/generative-apps (checked 2026-10-26)
  - Reasoning: The built-in Hex agent writes and creates full interactive generative applications from natural language prompts.

### A_OR: Can an outside coding agent read a generated app?

**Result: Partly (preview)** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: partly, preview
  - Quote: "The skill re-derives the intended queries from the `.twb` and compares them to the cells under the app."
  - Source: https://learn.hex.tech/docs/migrate-to-hex/migrate-from-tableau (checked 2026-10-26)
  - Reasoning: A vendor skill lets an outside agent read the SQL cells under a generated app and screenshot it. No API returns the generated app's own definition (its code files).
- **GPT-6.1 Sol**: partly, preview
  - Quote: "The skill re-derives the intended queries from the `.twb` and compares them to the cells under the app."
  - Source: https://learn.hex.tech/docs/migrate-to-hex/migrate-from-tableau (checked 2026-10-26)
  - Reasoning: The vendor-published migration skill runs in an outside coding agent and reads the SQL cells underlying the generated Hex app for comparison; the same workflow can screenshot the app with Playwright. This is partial inspection of a generated app. No documented interface retrieves the generative app's own App.js, component, and style definitions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Hex file format represents the logic of your entire project (including the layout of an app) as a YAML file."
  - Source: https://learn.hex.tech/docs/explore-data/projects/import-export (checked 2026-10-26)
  - Reasoning: Outside tools and agents can export and read the complete definition and layout of Hex apps via the Hex project YAML format.

### A_OW: Can an outside coding agent build a generated app?

**Result: Yes (preview)** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Ask your coding agent to migrate a Tableau workbook, and it will read the `.twb`, write a brief for Hex, and hand the build to the Hex Agent."
  - Source: https://learn.hex.tech/docs/migrate-to-hex/migrate-from-tableau (checked 2026-10-26)
  - Reasoning: Hex's own migration skills and CLI let an outside coding agent have a generative app built in Hex. The build itself is done by the Hex Agent. Generative apps are Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Ask your coding agent to migrate a Tableau workbook, and it will read the `.twb`, write a brief for Hex, and hand the build to the Hex Agent."
  - Source: https://learn.hex.tech/docs/migrate-to-hex/migrate-from-tableau (checked 2026-10-26)
  - Reasoning: The vendor-published external-agent skill uses Hex’s CLI to build a Generative app on SQL dataframes. The outside agent authors the brief and invokes the supported Hex build workflow; the resulting generated app is the first-party Hex product, not a customer-built application framework project.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "To make an agent's work visible to your workspace, publish the project from the Hex app."
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents can create and edit project cells and apps via the Hex MCP server, but publishing the resulting interactive app requires user action in the Hex UI.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Yes** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Evals let you programmatically run threads with the Hex agent and grade each response against rubrics you define."
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Saved YAML eval suites of cases with LLM-judge or numeric rubrics, including expected answers or SQL ground truth, run against the built-in Hex agent. Runs can be repeated or scheduled.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Evals let you programmatically run threads with the Hex agent and grade each response against rubrics you define."
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Saved YAML cases, expected values, repeatable runs, and LLM judges evaluate the built-in agent’s answers.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Evals let you programmatically run threads with the Hex agent and grade each response against rubrics you define."
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Hex provides an Evals framework to programmatically test the agent against rubrics, tracking pass rates, run times, and credit usage.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: Partly** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Admins can also set a default model for the whole workspace from Settings > AI & Agents."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Users pick a model per thread (the choice is stored), admins set a workspace default, and eval suites can pin a model. The docs do not say a choice is fixed to a model version, and model selection does not apply to subagents. That makes this a model choice rather than documented version pinning.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Your model selection is stored per thread, so reopening a thread restores your last-used model and effort."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Users can choose and retain a model per conversation, and evals can specify a model. The docs do not guarantee a customer-pinned immutable model version across all built-in agent calls; purpose-specific subagents are explicitly outside the picker.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Admins can also set a default model for the whole workspace from Settings > AI & Agents."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Admins can pin and configure the default model backing agent features for the entire workspace.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The Overview provides a summary of the conversation, including the user’s intent, the agent’s assumptions, and details such as the user who created it, the model used, and the credits consumed."
  - Source: https://learn.hex.tech/docs/agent-management/observability (checked 2026-10-26)
  - Reasoning: Hex keeps each Thread's conversation, tool calls, model used and backing notebook (generated SQL). No page says it keeps a data snapshot or the full context configuration needed to reproduce an answer.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The Timeline shows how the conversation unfolded step by step, including the sequence of messages and the tools the agent used."
  - Source: https://learn.hex.tech/docs/agent-management/observability (checked 2026-10-26)
  - Reasoning: The Inspector preserves conversation steps, tool calls and referenced assets, and its overview identifies the model. The documentation does not establish preserving a complete input-data snapshot and all configuration needed for full reproducibility.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "This view lets you review individual turns in the conversation, inspect tool calls made by the agent, and see the primary data assets referenced at each stage."
  - Source: https://learn.hex.tech/docs/agent-management/observability (checked 2026-10-26)
  - Reasoning: The Thread Inspector in Context Studio preserves individual turns in the conversation, tool calls made by the agent, the primary data assets referenced, and the model used, while the backing notebook retains the generated query logic; however, it does not preserve a data snapshot or complete context configuration required to reproduce the exact answer, earning partly.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Yes** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Each warning includes suggested context updates to help improve future agent responses."
  - Source: https://learn.hex.tech/docs/agent-management/observability (checked 2026-10-26)
  - Reasoning: When a user pushes back on an answer, it is logged as a 'User doubt' warning. Repeated warnings become Suggestions, and once an Admin accepts them they update guides, workspace rules or descriptions that apply across the whole workspace. Separately, user memory (per-user, 'not shared with teammates') shapes that user's later conversations. Both the effect on later answers and its reach are documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When multiple warnings from recent conversations point to the same underlying knowledge gap, Hex groups them into a single suggestion and proposes concrete changes — such as updating a guide, improving a table description, or endorsing a resource — that an Admin can act on."
  - Source: https://learn.hex.tech/docs/agent-management/suggestions (checked 2026-10-26)
  - Reasoning: The documented correction path spans Agent Observability and Suggestions: user pushback becomes a User doubt warning, repeated warnings generate proposed context fixes, and an Admin or Manager can accept and publish changes to guides or workspace rules. These updates shape subsequent agent answers across the workspace. This is an administered learning loop, rather than a feedback thumb automatically retraining the model; user memory separately has per-user scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Your user memory profile is updated nightly is inferred from your Hex usage and conversation signals."
  - Source: https://learn.hex.tech/docs/agent-management/agent-personalization (checked 2026-10-26)
  - Reasoning: Hex infers user memory profiles nightly from usage and conversation signals to adapt future agent interactions, but does not provide an explicit manual error-correction memory artifact.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Partly** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "In Endorsed mode, the agent will only search for endorsed projects and data in your workspace."
  - Source: https://learn.hex.tech/docs/organize-content/statuses-categories (checked 2026-10-26)
  - Reasoning: Endorsed Mode limits the built-in agent to endorsed (certified) assets, and the agent otherwise prioritizes semantic models and endorsed data. No page says answers are checked against certified definitions or that a mismatch is prevented or flagged.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Endorsed assets are prioritized when agents answer questions and act as a clear visual signal to end users that the data has been reviewed and approved by workspace Admins or Managers."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/endorsements-in-context-studio (checked 2026-10-26)
  - Reasoning: The built-in agents prioritize governed/endorsed assets and can use semantic definitions, but no rule prevents or flags a definition mismatch in their answers.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Enabling Endorsed Mode restricts the agent to using only endorsed assets, while turning this off allows the Agent to access all data (with endorsed assets prioritized)."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Hex Threads prioritizes endorsed data assets when answering, and provides Endorsed Mode to restrict the agent exclusively to verified endorsed assets.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Yes** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Admins can control how many add-on credits each user is allowed by applying a credit limit to a User, Group, or Workspace."
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: Credit limits per user, group or workspace, plus auto top-up spend limits, cap AI credit usage. The same page says users are 'blocked from submitting additional agent prompts' once credits run out.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Once the workspace credit pool is empty or users consume their monthly grant and add-on credits, users will be blocked from submitting additional agent prompts."
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: Credit limits and the workspace pool block further built-in agent requests. An in-progress run may finish and spill over, so this is a block on subsequent requests rather than a mid-run cutoff.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Once the workspace credit pool is empty or users consume their monthly grant and add-on credits, users will be blocked from submitting additional agent prompts."
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: Hex enforces credit pool limits and allocations, blocking users from submitting further agent prompts once credit budgets are consumed.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Yes** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Measure consistency, run time, and credit usage"
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Customers run eval suites on their own prompts. Each case shows run time and model, and runs with different context or model settings can be compared side by side, so response time is measured per evaluation run and per model.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Each case also shows its attempts, run time, credit usage, and model."
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Customers run their own analytical prompts as evaluation cases and inspect per-case response runtime and model, satisfying workload-based measurement.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Each case also shows its attempts, run time, credit usage, and model."
  - Source: https://learn.hex.tech/docs/agent-management/evals (checked 2026-10-26)
  - Reasoning: Hex reports the run time and duration for agent executions in evals and observability.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Yes** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Usage log - Current cycle: review credit consumption by user, total add-on credit usage, and allocation amounts for the current billing cycle"
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: Admins see AI credit consumption broken down by user. The ListAgentUsage API also returns per-agent-run usage by userId.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Usage log - Current cycle: review credit consumption by user, total add-on credit usage, and allocation amounts for the current billing cycle"
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: Admins can attribute AI credit consumption to individual users; the page also documents historical logs and usage APIs.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Usage log - Current cycle: review credit consumption by user, total add-on credit usage, and allocation amounts for the current billing cycle"
  - Source: https://learn.hex.tech/docs/administration/credits (checked 2026-10-26)
  - Reasoning: Hex provides credit usage logs breaking down AI credit consumption by user and total add-on usage for billing cycles.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Yes** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This view lets you review individual turns in the conversation, inspect tool calls made by the agent, and see the primary data assets referenced at each stage."
  - Source: https://learn.hex.tech/docs/agent-management/observability (checked 2026-10-26)
  - Reasoning: The Thread Inspector records the built-in agent's prompts, tool calls (including SQL) and the data assets it touched, tied to the user who created the thread. Audit logs also have agent-specific events such as MAGIC_EDIT_CELL.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This view lets you review individual turns in the conversation, inspect tool calls made by the agent, and see the primary data assets referenced at each stage."
  - Source: https://learn.hex.tech/docs/agent-management/observability (checked 2026-10-26)
  - Reasoning: The agent-specific Thread Inspector records messages, tool actions and analytical assets, while its Overview identifies the user who created the conversation. This is assistant-specific observability, beyond the general audit log.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "MAGIC_EDIT_CELLNotebook agent is used to edit the contents of an existing cell (e.g., modifying code in a SQL or Python cell)"
  - Source: https://learn.hex.tech/docs/administration/workspace_settings/audit-logs/audit-logs-reference (checked 2026-10-26)
  - Reasoning: Hex enterprise audit logs track AI assistant activity such as MAGIC_EDIT_CELL when the Notebook agent edits cell contents.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Partly** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "By disabling this setting you will disable all AI features in your workspace."
  - Source: https://learn.hex.tech/docs/administration/workspace_settings/enable-ai-and-agents (checked 2026-10-26)
  - Reasoning: The documented admin control is a workspace-wide AI on/off, plus feature toggles such as Typeahead and web search. A Slack-page footnote says Threads can be enabled for Explorers, but no general per-user, per-group or per-workspace AI enablement control is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "By disabling this setting you will disable all AI features in your workspace."
  - Source: https://learn.hex.tech/docs/administration/workspace_settings/enable-ai-and-agents (checked 2026-10-26)
  - Reasoning: Admins have a workspace-wide AI switch. The documented control does not provide selected-user or selected-group rollout of all AI features within that workspace.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Hex Admins can disable AI features for their workspace in Settings > AI & agents."
  - Source: https://learn.hex.tech/docs/administration/workspace_settings/enable-ai-and-agents (checked 2026-10-26)
  - Reasoning: Workspace Admins have an explicit administrative toggle to disable AI and agent features workspace-wide.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When multiple warnings from recent conversations point to the same underlying knowledge gap, Hex groups them into a single suggestion and proposes concrete changes — such as updating a guide, improving a table description, or endorsing a resource — that an Admin can act on."
  - Source: https://learn.hex.tech/docs/agent-management/suggestions (checked 2026-10-26)
  - Reasoning: Changes the AI review agent proposes to governed context (guides, workspace rules, table descriptions, endorsements) do not take effect until an Admin or Manager accepts and publishes them. That approver is a role other than the AI.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When publishing changes to a project, editors can request a review from another user."
  - Source: https://learn.hex.tech/docs/collaborate/reviews (checked 2026-10-26)
  - Reasoning: Hex has a named-reviewer publishing workflow and required reviews for governed projects, but this page does not connect that workflow specifically to built-in assistant changes. Suggestion acceptance and requester confirmation alone are not independent approval.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When publishing changes to a project, editors can request a review from another user."
  - Source: https://learn.hex.tech/docs/collaborate/reviews (checked 2026-10-26)
  - Reasoning: Hex includes a peer review workflow where editors can request review from another user before publishing, but this applies generally to project changes rather than being an AI-specific gating control.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "With BYOK, Admins can supply their own credentials so that inference runs through your organization's provider account instead."
  - Source: https://learn.hex.tech/docs/trust/ai-data-privacy (checked 2026-10-26)
  - Reasoning: With BYOK (Enterprise), inference can run through the customer's own Anthropic/OpenAI account, AWS Bedrock account or Google Cloud project. The page also says typeahead runs on Hex's own infrastructure and is not affected by BYOK, so the choice covers only some AI features.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "With BYOK, Admins can supply their own credentials so that inference runs through your organization's provider account instead."
  - Source: https://learn.hex.tech/docs/trust/ai-data-privacy (checked 2026-10-26)
  - Reasoning: Enterprise admins choose direct providers, AWS Bedrock in their AWS account, or GEAP in their Google Cloud project, and can configure a provider/gateway endpoint. Scope is limited: Hex-hosted functionality such as typeahead is unaffected by BYOK.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Some functionality, such as typeahead, is powered by models Hex runs on its own infrastructure and is unaffected by your BYOK configuration."
  - Source: https://learn.hex.tech/docs/trust/ai-data-privacy (checked 2026-10-26)
  - Reasoning: Hex supports BYOK (bring your own key) for agent features on enterprise plans, but some AI features like typeahead are powered by Hex-hosted models unaffected by BYOK.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Require personal credentials: Everyone must use their own credentials when running the draft project or Thread."
  - Source: https://learn.hex.tech/docs/connect-to-data/data-connections/oauth-data-connections (checked 2026-10-26)
  - Reasoning: On OAuth connections, Thread queries run under the asking user's own warehouse identity, so warehouse row- and column-level rules apply. Tasks likewise use the creator's OAuth credentials.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Require personal credentials: Everyone must use their own credentials when running the draft project or Thread."
  - Source: https://learn.hex.tech/docs/connect-to-data/data-connections/oauth-data-connections (checked 2026-10-26)
  - Reasoning: OAuth can make the built-in Threads agent query under the asking user’s warehouse identity, enforcing warehouse permissions. Coverage is conditional: owner credentials are also supported and agent responses can be shared/reused across users; schema suggestions are not filtered to user permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "OAuth data connections can run each query under a user's warehouse identity, so warehouse permissions apply in Hex."
  - Source: https://learn.hex.tech/docs/connect-to-data/data-connections/oauth-data-connections (checked 2026-10-26)
  - Reasoning: Hex OAuth connections execute queries under the individual user's warehouse identity, enforcing warehouse-side row- and column-level security.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Hex sends Customer Input Data (project code), Customer Output Data (project/cell runs), and Hex Metadata (schema information and table and column names), submitted prompts, and any resulting responses to LLM providers for the purposes of delivering Hex's AI features."
  - Source: https://learn.hex.tech/docs/trust/data-privacy-and-usage-faq (checked 2026-10-26)
  - Reasoning: The FAQ says what is sent (this sentence), names the recipients (OpenAI and Anthropic, plus Baseten-hosted models and an OpenAI Ada embedding in Hex's vector database), and states retention (zero data retention by default, with limited provider retention for certain admin-enabled models).
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Hex sends Customer Input Data (project code), Customer Output Data (project/cell runs), and Hex Metadata (schema information and table and column names), submitted prompts, and any resulting responses to LLM providers for the purposes of delivering Hex's AI features."
  - Source: https://learn.hex.tech/docs/trust/data-privacy-and-usage-faq (checked 2026-10-26)
  - Reasoning: The FAQ names OpenAI, Anthropic, and Baseten, describes payloads, and documents default zero retention. Advanced-model retention is described only as provider/model-dependent and limited, without the duration; the full all-services retention requirement is not established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Hex uses Customer Database Metadata like schemas and Customer Data project code and output content as model context."
  - Source: https://learn.hex.tech/docs/trust/ai-data-privacy (checked 2026-10-26)
  - Reasoning: Hex documents in text what data and metadata flow to LLMs as context, but does not provide a formal architecture data flow diagram.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Any Subprocessor with a Data Residency listed as "Deployment Region" means the general geographic region of the hosted environment (generally, either the European Union or United States of America as selected by Customer) and no Customer Data leaves the stack’s region (e.g., Customer Data from the multi-tenant European Union stack sent to Datadog stays within the European Union)."
  - Source: https://learn.hex.tech/docs/legal/subprocessors (checked 2026-10-26)
  - Reasoning: The in-docs subprocessor list gives a processing location for each AI service: Anthropic in the USA, and OpenAI, Baseten, Google and Modal in the Deployment Region. It does not say where AI data such as chat history is stored for each AI feature.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Any Subprocessor with a Data Residency listed as "Deployment Region" means the general geographic region of the hosted environment (generally, either the European Union or United States of America as selected by Customer) and no Customer Data leaves the stack’s region (e.g., Customer Data from the multi-tenant European Union stack sent to Datadog stays within the European Union)."
  - Source: https://learn.hex.tech/docs/legal/subprocessors (checked 2026-10-26)
  - Reasoning: The documentation’s subprocessor table locates Anthropic and Parallel processing in the USA and other AI services in the deployment region. It does not fully specify processing and stored-request regions for every AI feature, optional retained model, and BYOK route.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Any Subprocessor with a Data Residency listed as "Deployment Region" means the general geographic region of the hosted environment (generally, either the European Union or United States of America as selected by Customer) and no Customer Data leaves the stack’s region (e.g., Customer Data from the multi-tenant European Union stack sent to Datadog stays within the European Union)."
  - Source: https://learn.hex.tech/docs/legal/subprocessors (checked 2026-10-26)
  - Reasoning: Hex guarantees regional data residency within EU or US deployment stacks for certain subprocessors, but LLM subprocessor data residency is dependent on customer stack selection or BYOK.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Partly**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Depending on your plan, Hex may use data from your AI sessions to improve Hex's AI features."
  - Source: https://learn.hex.tech/docs/trust/ai-data-privacy (checked 2026-10-26)
  - Reasoning: Hex's LLM providers do not train on customer data. Hex itself may use AI session data to improve its AI features depending on plan, and customers must opt out in Settings > AI & agents. That makes no-training an opt-out, not a default.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Hex's LLM providers do not train on customer data."
  - Source: https://learn.hex.tech/docs/trust/data-privacy-and-usage-faq (checked 2026-10-26)
  - Reasoning: The AI training opt-out section makes Hex’s own session-data use plan-dependent and offers an opt-out. Although its LLM providers are explicitly prohibited from training on customer data by default, that provider promise does not establish a universal default for Hex’s own AI improvement use.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Depending on your plan, Hex may use data from your AI sessions to improve Hex's AI features. You can opt out of this at any time in Settings > AI & agents without disabling AI features."
  - Source: https://learn.hex.tech/docs/trust/ai-data-privacy (checked 2026-10-26)
  - Reasoning: Hex allows customers to opt out of data usage for model improvements at any time, but data usage is not disabled by default across all tiers.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "By default, Explorer users are restricted to Endorsed Mode when using Threads and can only access endorsed assets via the agent."
  - Source: https://learn.hex.tech/docs/administration/workspace_settings/enable-ai-and-agents (checked 2026-10-26)
  - Reasoning: An admin-controlled workspace setting enforces which data the agent may use for Explorers (endorsed assets only), separate from their data permissions. Per-object AI exclusion also exists but is documented as not a security boundary.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "By default, Explorer users are restricted to Endorsed Mode when using Threads and can only access endorsed assets via the agent."
  - Source: https://learn.hex.tech/docs/administration/workspace_settings/enable-ai-and-agents (checked 2026-10-26)
  - Reasoning: Admins enforce an endorsed-assets-only restriction for the built-in Threads assistant across the workspace’s Explorer role, separately from those users’ underlying data permissions. This is the documented enforced mode; ordinary AI exclusions, which explicit mentions can bypass, are weaker and do not supply this verdict.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Admins and Managers can choose to Exclude certain objects so they are omitted from the agent's default discovery and generation context (for example, when the agent searches metadata or proposes queries)."
  - Source: https://learn.hex.tech/docs/explore-data/data-browser (checked 2026-10-26)
  - Reasoning: Admins and Managers can choose to exclude specific database objects so they are omitted from the agent's default discovery and generation context, though it does not enforce a hard block on SQL execution at runtime.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "MCP, API, and CLI requests can only query connections marked Standard."
  - Source: https://learn.hex.tech/docs/api-integrations/hex-agent-data-connection-access (checked 2026-10-26)
  - Reasoning: By default, an outside agent using MCP, the API or the CLI is excluded from Sensitive connections the human can still query in the app. Workspace tokens can also be scoped to read-only.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Read projects: The token will work with any API endpoint that only gets information (e.g. `ListProjects`)."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: An outside agent can use a scoped workspace token limited to read operations, narrower than the creating admin’s human access. Personal tokens and MCP OAuth instead mirror the user’s permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Read projects: The token will work with any API endpoint that only gets information (e.g. `ListProjects`)."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: Hex workspace tokens can be scoped with granular permissions such as read-only vs run/write access for projects, users, groups, collections, and data connections.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Given a project ID, return the list of warehouse tables queried in the project."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: An outside agent can get a project's upstream warehouse tables (GetQueriedTables) and read cell SQL through MCP/API to infer sources. No lineage interface traces a specific number through its transformations.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Given a project ID, return the list of warehouse tables queried in the project."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: The GetQueriedTables API exposes upstream warehouse sources for a project. Exported project SQL can also be inspected, but no external interface is documented for traversing a complete source-and-transformation lineage graph.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Before deletion, the agent inspects cell lineage to understand which other cells depend on the cell being removed, including variable references, dataframe dependencies, and input parameter usage."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The Notebook agent inspects cell lineage and downstream dependencies within the notebook, though full end-to-end warehouse lineage tracing is not documented for the assistant.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Partly** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Source location (Hex, Slack, or MCP)"
  - Source: https://learn.hex.tech/docs/agent-management/observability (checked 2026-10-26)
  - Reasoning: Observability can filter Threads started via MCP and inspect their tool calls and data assets, tied to the user. Project edits an outside agent makes through MCP/CLI tools are not documented as logged with a delegated agent identity. Audit logs record only a generic actor (user or API client).
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This view lets you review individual turns in the conversation, inspect tool calls made by the agent, and see the primary data assets referenced at each stage."
  - Source: https://learn.hex.tech/docs/agent-management/observability (checked 2026-10-26)
  - Reasoning: Observability can filter conversations by MCP source and individual user; its Thread Inspector records tool activity and referenced analytical assets. This covers Threads initiated by outside agents, attributed to the connected user. It does not establish that every outside-agent project edit is logged with a distinct delegated agent identity, so coverage is partial.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "CALL_MCP_SERVER_TOOLAn MCP tool was called as part of an agent chat"
  - Source: https://learn.hex.tech/docs/administration/workspace_settings/audit-logs/audit-logs-reference (checked 2026-10-26)
  - Reasoning: Hex audit logs record an explicit event CALL_MCP_SERVER_TOOL whenever an MCP tool is called as part of an agent chat.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly (preview)** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Edits made through these tools always apply to a project's draft version — the notebook you see in the Hex editor."
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Outside-agent edits stay in the draft until someone publishes from the Hex app. Required publish reviews exist, but the docs do not connect them to agent changes. The MCP server is in beta.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "To make an agent's work visible to your workspace, publish the project from the Hex app."
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: External-agent edits remain in a project draft until a user publishes. This is an author-controlled draft boundary, without a documented independent approver for outside-agent writes. General required reviews are documented separately.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Always ask — the agent pauses and shows an approval prompt with the tool name, arguments, and a description of what will happen. Nothing runs until you accept."
  - Source: https://learn.hex.tech/docs/api-integrations/external-apps (checked 2026-10-26)
  - Reasoning: Hex supports an Always ask setting that requires human confirmation before an external agent tool call runs, but confirmation is provided by the interacting user rather than an independent third-party approver.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "In the Changes view, you can double-check a diff of every edit that has been made."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: Hex has generic publish diffs (guide Changes view, semantic project publish preview, project version history). None is documented as covering changes made by an outside agent.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can use the Publish preview to see what your App will look like after you publish, and to view a diff with your previous published version."
  - Source: https://learn.hex.tech/docs/share-insights/apps/publish-and-share-apps (checked 2026-10-26)
  - Reasoning: Reviewers can inspect a general before/after publishing diff, but this documentation does not explicitly establish that the diff covers or identifies outside-agent changes.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Selecting an individual cell in the Pending changes modal will take you to the affected cell, where you can view the cell's logic in the context of your project."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: Hex displays pending changes made by the agent in a Pending changes modal where users inspect each affected cell's logic before confirming or undoing, though not a standard unified diff view.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When viewing a historical version, you'll have the option to restore the project to that version."
  - Source: https://learn.hex.tech/docs/explore-data/projects/history-and-versions (checked 2026-10-26)
  - Reasoning: Project version history restores a project to an earlier saved version, which also reverts edits an outside agent made through MCP/CLI. Guides and semantic projects also keep version history.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When viewing a historical version, you'll have the option to restore the project to that version."
  - Source: https://learn.hex.tech/docs/explore-data/projects/history-and-versions (checked 2026-10-26)
  - Reasoning: Outside agents edit the same Hex project draft, so its saved-version restoration can revert their changes. The limitation is saved versions: arbitrary instantaneous draft states cannot be restored.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "All changes that the agent suggests must be accepted into the Notebook (Confirm) or rejected (Undo)."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: Hex allows users to immediately reject and revert changes suggested by the agent with an Undo action.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Partly (preview)** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "The Hex MCP server enables AI assistants to interact directly with your Hex workspace."
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Hex hosts an MCP server with OAuth authentication that gives outside agents access to projects, cells, data connections and Threads. The page says 'Hex MCP server is currently in beta', so the rules make this partly.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "The Hex MCP server enables AI assistants to interact directly with your Hex workspace."
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Hex hosts the supported remote MCP endpoint and documents OAuth authentication for external clients. The row explicitly awards partly to a preview MCP server, and this server is labelled beta.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Hex MCP server is currently in beta."
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Hex exposes an official Model Context Protocol (MCP) server enabling external AI tools to interact with Hex projects and drafts.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "List all viewable projects, sorted by most recently created first."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: The ListProjects API lists every project the caller can see. MCP adds search_projects and list_data_connections, and the CLI has `hex projects list`.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Hex public API allows teams to programmatically interact with their Hex workspace — including listing projects, triggering runs of published projects, managing access controls, and configuring data connections."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: ListProjects enumerates existing analytical projects without a known project ID; the CLI also documents hex projects list. This establishes discovery through a generally available external interface.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Metadata can be fetched for an individual project via the get_project endpoint or for up to 100 projects via the list_projects endpoint."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: External agents can discover workspace projects and inspect metadata via the Hex API list_projects and get_project endpoints.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "There are two types of tokens users can create: Personal access tokens and Workspace tokens."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: Programmatic access uses named credential types: personal access tokens and workspace tokens (OAuth bearer). The MCP server uses an OAuth flow, and the CLI supports `--token-from-env`.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "API requests are authenticated using OAuth 2.0 Bearer Tokens in the header of the HTTP request."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: Hex documents personal access tokens and scoped workspace tokens for programmatic access, and the CLI’s non-interactive token authentication.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "API requests are authenticated using OAuth 2.0 Bearer Tokens in the header of the HTTP request."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: External agents and programmatic callers authenticate requests to the Hex API using OAuth 2.0 Bearer Tokens.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Install the general Hex CLI skill with `hex install agent-skill --claude` (or `--codex` / `--path `)."
  - Source: https://learn.hex.tech/docs/api-integrations/cli (checked 2026-10-26)
  - Reasoning: Hex publishes an agent skill (SKILL.md) for Claude Code and Codex, plus Tableau/Looker migration skills and Cursor/Codex plugins with bundled skills.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Install the general Hex CLI skill with `hex install agent-skill --claude` (or `--codex` / `--path `)."
  - Source: https://learn.hex.tech/docs/api-integrations/cli (checked 2026-10-26)
  - Reasoning: Hex publishes an installable skill for outside coding agents, as well as dashboard migration skills; this is more than MCP server documentation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Install the general Hex CLI skill with hex install agent-skill --claude (or --codex / --path )."
  - Source: https://learn.hex.tech/docs/api-integrations/cli (checked 2026-10-26)
  - Reasoning: Hex distributes official agent skills packaged for coding assistants like Claude Code and Codex via the hex install agent-skill command.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "AI agents that can interact with your command line, such as Claude Code, Cursor, or Codex, can use the `hex` CLI to create projects, edit cells, and run the Hex Agent."
  - Source: https://learn.hex.tech/docs/api-integrations/cli (checked 2026-10-26)
  - Reasoning: The Hex CLI documentation addresses use by coding agents directly and documents non-interactive authentication (`hex auth login --token-from-env`).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "AI agents that can interact with your command line, such as Claude Code, Cursor, or Codex, can use the `hex` CLI to create projects, edit cells, and run the Hex Agent."
  - Source: https://learn.hex.tech/docs/api-integrations/cli (checked 2026-10-26)
  - Reasoning: The vendor-supported CLI explicitly targets outside agents and documents --token-from-env authentication for non-interactive CI.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "AI agents that can interact with your command line, such as Claude Code, Cursor, or Codex, can use the hex CLI to create projects, edit cells, and run the Hex Agent."
  - Source: https://learn.hex.tech/docs/api-integrations/cli (checked 2026-10-26)
  - Reasoning: Outside AI agents that interact with the command line can execute the hex CLI to create projects, edit cells, and run the Hex Agent.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Partly** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Turning off API access for the workspace, or revoking it for an individual user, does not disable MCP access."
  - Source: https://learn.hex.tech/docs/api-integrations/mcp-server (checked 2026-10-26)
  - Reasoning: Admins can revoke API/CLI token access per user and toggle workspace-wide sensitive-connection access for MCP/API/CLI. MCP access cannot be blocked for particular users or groups short of deactivating the user.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This is true whether API access is turned off for the entire workspace, or revoked for an individual user."
  - Source: https://learn.hex.tech/docs/administration/workspace_settings/workspace-security (checked 2026-10-26)
  - Reasoning: Admins can block personal-token API/CLI access per user, separately from ordinary object permissions. This control explicitly excludes workspace tokens and MCP OAuth, so it does not cover all outside-agent entry points.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Admins must enable API access from the Integrations tab in Workspace settings before users can create tokens."
  - Source: https://learn.hex.tech/docs/api-integrations/cli (checked 2026-10-26)
  - Reasoning: Workspace Admins control whether API access is enabled for the workspace before any user can generate tokens for outside agents or the CLI.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Users are limited to 60 API requests per minute."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: The only limits are general API rate limits (60 rpm, some endpoints 30 rpm) and ordinary per-user credit limits, which also cover agent runs started via MCP/CLI. No limit specific to outside agents is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- `hex-api-30rpm`: Rate limit group for the Hex API at 30 requests per minute"
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: The API rate limit applies to outside-agent cell operations, but is a general API limit, not a separately configurable agent-specific quota. Credit limits on built-in Threads do not establish a cap on all external editing activity.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Users are limited to 60 API requests per minute."
  - Source: https://learn.hex.tech/docs/api-integrations/api/overview (checked 2026-10-26)
  - Reasoning: Hex enforces a platform request rate limit of 60 API requests per minute on users, but does not provide custom administrator-configurable rate limits or quotas per external agent.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Workspace context is a single text file that the Hex Agent reads in every conversation."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: Workspace context (hex.md) and the guide library hold business definitions and rules that the built-in Hex agent reads before answering.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The guides tab is where you can add context about your data and business to help agents interpret questions and respond appropriately across your workspace."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: Hex’s built-in agents read workspace business rules and retrieve relevant detailed guides before answering.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The guides tab is where you can add context about your data and business to help agents interpret questions and respond appropriately across your workspace."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: Hex allows adding business context, definitions, and rules in natural language guides to instruct agents across the workspace.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Programmatically sync context resources into Hex from an external source of truth, such as a git repository."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/context-sync (checked 2026-10-26)
  - Reasoning: Guides, workspace context, semantic projects and evals live as files in git and sync via the CLI or a GitHub Action, so they can be diffed, reviewed and rolled back.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Programmatically sync context resources into Hex from an external source of truth, such as a git repository."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/context-sync (checked 2026-10-26)
  - Reasoning: Business guides and the workspace context file can live in Git and be reviewed/diffed in pull requests, with preview and publish steps. Guides also have a native version history.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Programmatically sync context resources into Hex from an external source of truth, such as a git repository."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/context-sync (checked 2026-10-26)
  - Reasoning: Hex Context Sync enables teams to programmatically manage and sync context resources and guides from an external Git repository into Hex.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Partly (preview)**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Expose only the fields relevant for a particular analysis or audience"
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/semantic-authoring/semantic-authoring-overview (checked 2026-10-26)
  - Reasoning: Semantic views let different domains or audiences get their own curated definitions, and personal preferences and memory are per user. Guides and workspace context apply workspace-wide, and no team-scoped context set is documented. Semantic authoring is in public beta.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The guides tab is where you can add context about your data and business to help agents interpret questions and respond appropriately across your workspace."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: Context is attached to an individual Hex workspace, which is an allowed scope in this row. Within that workspace detailed guides are retrieved by relevance; the documentation does not promise team-level access isolation for guides.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Personal preferences let you store instructions that shape how Hex agents work with you — things like how you want results visualized, how much explanation you prefer, or conventions to follow when writing SQL or Python."
  - Source: https://learn.hex.tech/docs/agent-management/agent-personalization (checked 2026-10-26)
  - Reasoning: Personal preferences allow scoping instructions to individual users, but guides apply across the entire workspace rather than scoping to specific teams or datasets.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Use the Threads tab to test specific questions and validate how your changes will affect agent responses before publishing them live."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: Hex has named validation steps: Test and Publish in the Context Workbench, Context Previews (`hex context preview`), and evals run against a preview before publishing.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use the Threads tab to test specific questions and validate how your changes will affect agent responses before publishing them live."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: The Context Workbench has a named Test and Publish preview for business-guide changes, and evals can run against staged context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the Threads tab to test specific questions and validate how your changes will affect agent responses before publishing them live."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: Hex provides a Threads testing tab in Context Studio to validate and test how changes to context guides impact agent responses before publishing.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Partly**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When the Agent uses a project, it will cite what it used (e.g. links to the project or specific cells) so you can see where the answer came from."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: Answers cite the projects and cells used as context, and tool calls can be expanded. No page says the specific guide, rule or description that shaped an answer is shown with it.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When the Agent uses a project, it will cite what it used (e.g. links to the project or specific cells) so you can see where the answer came from."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: The built-in agent cites projects or individual cells it used as context, providing partial visibility into contextual sources shaping an answer. The documentation does not establish answer-level identification of the particular business guide, workspace rule, or metadata description applied.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "It cites the projects and cells it used so you can see the choices it made."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: Hex cites the projects and cells used as context when generating answers, but does not show which specific business guide rules or instructions were applied.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Database, schema, table, and column descriptions are inherited from your database and dbt and displayed in the Data browser."
  - Source: https://learn.hex.tech/docs/explore-data/data-browser (checked 2026-10-26)
  - Reasoning: Descriptions come in from warehouse comments and dbt, and the same section says 'All descriptions may be provided to Hex's AI agents for the purpose of improving responses.'
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Database, schema, table, and column descriptions are inherited from your database and dbt and displayed in the Data browser."
  - Source: https://learn.hex.tech/docs/explore-data/data-browser (checked 2026-10-26)
  - Reasoning: The same page states that all descriptions may be provided to Hex AI agents, tying inherited warehouse/dbt descriptions directly to AI context rather than requiring retyping.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Database, schema, table, and column descriptions are inherited from your database and dbt and displayed in the Data browser."
  - Source: https://learn.hex.tech/docs/explore-data/data-browser (checked 2026-10-26)
  - Reasoning: Hex automatically inherits database, schema, table, and column descriptions from connected databases and dbt.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Yes**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Admins and Managers can choose to include, exclude, or endorse data objects for use by Hex's AI agents."
  - Source: https://learn.hex.tech/docs/explore-data/data-browser (checked 2026-10-26)
  - Reasoning: An AI-specific product setting excludes tables and schemas, and their children, from the agent's default discovery and generation context.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Admins and Managers can choose to Exclude certain objects so they are omitted from the agent's default discovery and generation context (for example, when the agent searches metadata or proposes queries)."
  - Source: https://learn.hex.tech/docs/explore-data/data-browser (checked 2026-10-26)
  - Reasoning: This is an AI-specific exclusion setting, but the next sentence explicitly permits agent use when a user references the excluded data. It is a default-context preference, not a complete off-limits boundary.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Admins and Managers can choose to Exclude certain objects so they are omitted from the agent's default discovery and generation context (for example, when the agent searches metadata or proposes queries)."
  - Source: https://learn.hex.tech/docs/explore-data/data-browser (checked 2026-10-26)
  - Reasoning: Admins and Managers can explicitly exclude database objects from the agent's discovery and query generation context.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Yes**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Only Admins and Managers can create, edit, and publish guides."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/guides (checked 2026-10-26)
  - Reasoning: Named roles (Admins and Managers) own business context. Changes go through a documented Test and Publish review with a diff before going live, and through Suggestions an Admin accepts or rejects AI-proposed context changes.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Admins can view suggestions and their summaries, accept/reject changes, and review supporting evidence from individual conversations."
  - Source: https://learn.hex.tech/docs/agent-management/suggestions (checked 2026-10-26)
  - Reasoning: Admins are named reviewers of AI-proposed changes to guides and workspace rules. They inspect evidence/diffs, accept or reject each change, and publish accepted Hex-managed context; Managers also have a documented review role.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Endorsed assets are prioritized when agents answer questions and act as a clear visual signal to end users that the data has been reviewed and approved by workspace Admins or Managers."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/endorsements-in-context-studio (checked 2026-10-26)
  - Reasoning: Hex allows Admins and Managers to endorse and approve assets in Context Studio, but individual context rules do not have dedicated data steward ownership fields.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Yes** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent can pull information from across multiple repositories to answer questions about how your data is defined and how it maps to different features across your application."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/reference-repositories (checked 2026-10-26)
  - Reasoning: Reference repositories let the built-in Hex agent (Threads and Notebook) read dbt and other modeling code to clarify metric calculations. Synced dbt MetricFlow models and Snowflake Semantic Views also become semantic projects the agents use.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The Notebook agent can leverage any Data connections or Semantic models that a user has access to in order to properly power analysis."
  - Source: https://learn.hex.tech/docs/explore-data/notebook-view/notebook-agent (checked 2026-10-26)
  - Reasoning: The page explicitly points to syncing existing semantic models. Semantic Model Sync brings in dbt MetricFlow and warehouse-resident Snowflake Semantic View definitions, so the built-in agent can use that warehouse-level business logic.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "With Threads, users can ask natural language questions and get AI-powered insights based on semantic models and warehouse tables, all in a conversational interface."
  - Source: https://learn.hex.tech/docs/explore-data/threads (checked 2026-10-26)
  - Reasoning: The Hex Threads assistant reads and queries data warehouse tables, schemas, and semantic models.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Hex page documents the Hex Agent, Threads agent or modeling agent writing a transform, model or view that lands in the warehouse. Writeback cells and Snowflake Semantic View DDL from a notebook are actions a user takes, and those pages never mention the agent. The modeling agent edits Hex semantic projects, which live in Hex, not the warehouse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The built-in agents write SQL/Python notebook cells and Hex-native semantic YAML. A separate Snowflake page documents users creating warehouse Semantic Views with notebook DDL, but does not connect that operation to the built-in agent. General SQL execution and user-operated Writeback cells do not establish the assistant authoring warehouse transforms, models, or views.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation shows the built-in assistant authoring warehouse-level logic (transforms, dbt models, or views) that lands in the customer's warehouse below the BI tool. Hex's Modeling Agent generates YAML for Hex semantic projects, and the Notebook and Threads agents author cells within Hex notebooks.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The MCP server tools are search_projects, threads, project and cell CRUD, list data connections, run and output tools, and chart image. The CLI covers projects, cells, runs, connections, threads, guides and context sync. None of them returns warehouse view definitions, dbt models or semantic view definitions to an outside agent. list_data_connections returns connection metadata (id, name, type, description), which is not warehouse logic.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Hex's outside-agent interfaces expose project SQL cells, connection metadata, and Threads, but no located documentation shows them retrieving warehouse view definitions, dbt transformation logic, or warehouse semantic-view logic. Reading schema names or Hex notebook SQL does not settle this warehouse-logic row, and general query execution is insufficient.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation shows an outside coding agent reading warehouse-level logic (view definitions, dbt models, or semantic views) through Hex. Hex's MCP server and CLI expose project cells, threads, and connection metadata, but do not retrieve warehouse view or transform definitions.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Not found** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: nothing found
  - Reasoning: An outside agent can create and run cells through the MCP server or CLI. Though, running arbitrary SQL doesn't count unless the page ties it to warehouse logic, and no MCP or CLI page documents an outside agent authoring views, models or transforms in the warehouse. The Looker migration skill authors Hex semantic models and shared SQL cells. Both live in Hex, not the warehouse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The MCP server and CLI let outside agents create and execute SQL/Python notebook cells. The warehouse-specific DDL example is documented for users, without an outside-agent workflow. No located page establishes an outside agent creating warehouse transforms, models, or views through Hex; inferring this from arbitrary SQL execution would exceed the evidence rules.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation shows an outside coding agent authoring warehouse-level logic (transforms, dbt models, or views in the warehouse) through Hex. The MCP server and CLI allow outside agents to create and edit cells in Hex notebook drafts and manage Hex workspace resources, but not write warehouse logic.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Yes (preview)**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: yes, preview
  - Quote: "This gives you flexibility to either author models natively in Hex or bring in definitions from tools like Cube, dbt MetricFlow, or Snowflake Semantic Views."
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/intro-to-semantic-models (checked 2026-10-26)
  - Reasoning: Semantic Model Sync imports existing dbt MetricFlow, Cube and Snowflake Semantic View definitions, so they don't have to be rebuilt in Hex. The sync pages label Semantic Model Sync and Snowflake Semantic Views beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "This gives you flexibility to either author models natively in Hex or bring in definitions from tools like Cube, dbt MetricFlow, or Snowflake Semantic Views."
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/intro-to-semantic-models (checked 2026-10-26)
  - Reasoning: Hex consumes externally maintained metric/semantic definitions, including warehouse semantic views, rather than requiring their reimplementation in Hex. Semantic Model Sync is labelled beta.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This gives you flexibility to either author models natively in Hex or bring in definitions from tools like Cube, dbt MetricFlow, or Snowflake Semantic Views."
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/intro-to-semantic-models (checked 2026-10-26)
  - Reasoning: Hex imports external semantic models and definitions directly from tools like Cube, dbt MetricFlow, and Snowflake Semantic Views.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Work with semantic models: Query metrics and dimensions from your connected semantic layer"
  - Source: https://learn.hex.tech/docs/explore-data/chat-with-app (checked 2026-10-26)
  - Reasoning: The built-in Threads agent, which also powers Chat with App, answers using the metrics and dimensions defined in semantic models and prioritizes them.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "When configured, agents can use these definitions to answer questions more consistently."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/models (checked 2026-10-26)
  - Reasoning: The preceding sentence identifies these as shared metrics, dimensions and relationships in Hex semantic models; built-in agents use them in answers. The documented native authoring and imported-model paths are beta.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Semantic models define shared metrics, dimensions, and relationships used across Hex. When configured, agents can use these definitions to answer questions more consistently."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/models (checked 2026-10-26)
  - Reasoning: Hex agents read semantic model definitions (measures, dimensions, and relationships) to answer questions consistently.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Yes (preview)** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "The agent can generate new models and views from scratch or edit existing resources with incremental changes."
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/semantic-authoring/semantic-authoring-overview (checked 2026-10-26)
  - Reasoning: The built-in Modeling Agent creates and edits semantic models (measures, dimensions, relationships). Semantic authoring is in public beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The agent can generate new models and views from scratch or edit existing resources with incremental changes."
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/semantic-authoring/semantic-authoring-overview (checked 2026-10-26)
  - Reasoning: The Modeling Agent authors semantic YAML containing measures, dimensions and relationships, rather than only editing descriptions. Semantic authoring is public beta.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent can generate new models and views from scratch or edit existing resources with incremental changes."
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/semantic-authoring/semantic-authoring-overview (checked 2026-10-26)
  - Reasoning: The Hex modeling agent can author new semantic models and views from scratch or edit existing semantic models.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Every documented outside route for semantic projects writes into Hex: hex context preview/publish, the Context Toolkit GitHub Action, IngestSemanticProject and UpdateSemanticProject (status/endorsement). The semantic-authoring page says GitHub sync 'runs in a single direction - from GitHub into Hex.' No MCP tool, CLI command or API endpoint returns Hex's measure or dimension definitions or descriptions to an outside agent. An agent reading YAML in the customer's own repo is reading customer files, not a vendor interface. So the other reading's 'manage semantic YAML outside Hex' claim is not product evidence for this row.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can author and manage context resources outside Hex and sync them to your workspace with the Hex CLI from any environment."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/context-sync (checked 2026-10-26)
  - Reasoning: The same page explicitly includes semantic projects sourced from Hex, Cube, and dbt MetricFlow, with local model/view files. The documented YAML specification stores the measures, dimensions, relationships, descriptions, and expressions in these files. An outside coding agent can inspect the shared definitions in this first-party file-and-CLI workflow; this does not assert an API for reading every in-product semantic resource.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can author and manage context resources outside Hex and sync them to your workspace with the Hex CLI from any environment."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/context-sync (checked 2026-10-26)
  - Reasoning: External agents can inspect, read, and manage semantic project YAML files outside Hex and sync them using the Hex CLI.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Ingest a semantic project from a zip file."
  - Source: https://learn.hex.tech/docs/api-integrations/api/reference (checked 2026-10-26)
  - Reasoning: The semantic layer can be written from outside Hex through the IngestSemanticProject API and `hex context preview/publish`, both usable by an outside agent.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Semantic projects sourced from Hex, Cube, or dbt MetricFlow"
  - Source: https://learn.hex.tech/docs/agent-management/context-management/context-sync (checked 2026-10-26)
  - Reasoning: Semantic projects are explicitly supported Context Sync resources: an outside coding agent can author their local definition files and use the first-party CLI preview/publish interface to change the shared layer. The Looker skill also documents populating a Hex semantic model through the CLI.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Programmatically sync context resources into Hex from an external source of truth, such as a git repository."
  - Source: https://learn.hex.tech/docs/agent-management/context-management/context-sync (checked 2026-10-26)
  - Reasoning: External agents can author semantic project definitions in Git or local files and programmatically sync them to Hex.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Not found**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Hex semantic projects are imported from Cube, dbt MetricFlow, Snowflake Semantic Views, Unity Catalog and Ossie, or authored in Hex. No page documents exporting a Hex-authored definition to the warehouse as a view or semantic object. The Snowflake Semantic Views page says users can 'use DDL commands from a Hex notebook'. That uses Hex as a SQL client to write a definition directly in Snowflake. It doesn't push down logic modelled in Hex.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Users can create a Semantic View in Snowflake Cortex Studio, or use DDL commands from a Hex notebook."
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/semantic-model-sync/snowflake-semantic-views (checked 2026-10-26)
  - Reasoning: This page identifies Snowflake Semantic Views as native warehouse objects containing business metrics and logic, and explicitly documents creating them with DDL authored in a Hex notebook. Thus semantic definitions written through Hex can live in Snowflake. The evidence is specific to warehouse-native Semantic Views and does not imply automatic conversion of Hex-native semantic YAML.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation shows semantic definitions, metrics, or modeled logic created in Hex being pushed back down to the warehouse. Hex imports external semantic models (Cube, dbt MetricFlow, Snowflake Semantic Views) into Hex, and Writeback cells write dataframes to warehouse tables rather than pushing definitions or models.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Specific tables or Hex projects can be referenced directly with @ mentions."
  - Source: https://learn.hex.tech/docs/connect-to-data/semantic-models/semantic-authoring/semantic-authoring-overview (checked 2026-10-26)
  - Reasoning: An Admin or Manager can point the Modeling Agent at a Hex project to turn its logic into semantic YAML. That still means re-expressing the calculation in the modeling layer. No direct 'promote this calculation' path from a chart or analysis is documented. Semantic authoring is public beta.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "It’s also possible to create a new component from a single cell by clicking the cell’s 3-dot menu and selecting New component from cell."
  - Source: https://learn.hex.tech/docs/explore-data/components (checked 2026-10-26)
  - Reasoning: A one-off calculation cell can be promoted directly into a published, permissioned reusable component; it does not need to be rewritten in a modeling language. The same page documents maintaining components and propagating updates to referencing projects.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "It’s also possible to create a new component from a single cell by clicking the cell’s 3-dot menu and selecting New component from cell."
  - Source: https://learn.hex.tech/docs/explore-data/components (checked 2026-10-26)
  - Reasoning: Hex allows promoting ad-hoc logic from a single notebook cell into a reusable, published workspace component.

