# Looker: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/looker/

AI Feature Score **72**, #7 of 15 (BI and analytics tool). Built-in AI 58, external AI 80, other 74. Analysis 58, Building and maintaining assets 86, Context and connections 82, Reliability and controls 62. By model: Claude Opus 5.5 69, GPT-6.1 Sol 72, Gemini 3.8 Flash 72.

## Score breakdown

Four areas, 25 points each. Shown for GPT-6.1 Sol, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 14.6 of 25
- Building and maintaining assets: 21.4 of 25
- Context and connections: 20.5 of 25
- Reliability and controls: 15.6 of 25

**Strengths**

- You can see what it changed
- It names the fields it used
- Outside agents read chart logic

**Not found in the docs**

- Clean and reshape data
- It can find and fix broken content
- A statement that your data is not used for training

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Grounded in the Looker semantic modeling layer, Conversational Analytics empowers users in your organization to ask data-related questions in regular, natural (conversational) language for governed, trusted self-service BI."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Conversational Analytics, Looker's built-in Gemini assistant, takes plain-language questions and returns charts or tables from Explore data. The user does not write SQL or need a prebuilt dashboard.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Conversational analytics, powered by Gemini for Google Cloud, lets you investigate your data by asking questions about it in conversational language through an intuitive chat interface."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The built-in Conversational Analytics assistant accepts natural-language questions against Explore data; SQL or a prebuilt dashboard is unnecessary.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Gemini in Looker lets you ask questions about your data source by using natural language."
  - Source: https://cloud.google.com/looker/docs/gemini-overview-looker (checked 2026-10-26; archived https://web.archive.org/web/20261030133945/https://docs.cloud.google.com/looker/docs/gemini-overview-looker)
  - Reasoning: Users can ask plain English questions against their data sources using Conversational Analytics, returning charts and data tables.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Conversational Analytics will take previous questions and answers into account as you continue the conversation."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: Multi-turn conversations are documented: users can build on earlier answers by refining results or changing the visualization within the active conversation.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Conversational Analytics will take previous questions and answers into account as you continue the conversation."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The built-in assistant uses the active conversation's previous turns to interpret refinements.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Conversational Analytics will take previous questions and answers into account as you continue the conversation."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: Conversational Analytics supports multi-turn conversations that retain conversational thread context to refine previous answers.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Text section provides a plain text explanation of the steps that were taken by Conversational Analytics to arrive at the given answer."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: Each answer has a 'How was this calculated?' panel that explains the analytical steps. Agents can also show the generated Looker queries (Show analytical details), and Advanced Analytics answers show their Python code in a Code tab.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Text section provides a plain text explanation of the steps that were taken by Conversational Analytics to arrive at the given answer."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The answer's How was this calculated? panel exposes analytical steps, with calculations, filters, and ordering described on this page.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When you click How was this calculated?, Conversational Analytics displays a Text section. The Text section provides a plain text explanation of the steps that were taken by Conversational Analytics to arrive at the given answer."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: Conversational Analytics exposes analytical steps, raw field names, filters, and generated Looker queries via the How was this calculated? section.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Yes** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This explanation includes the raw field names that were used, the calculations that were done, the filters that were applied, the sort order, and other details."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The explanation shown with the answer names the specific LookML fields used, not just the Explore. The Insight Assistant (preview) likewise lists the Explore fields it used.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This explanation includes the raw field names that were used, the calculations that were done, the filters that were applied, the sort order, and other details."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The answer's calculation explanation identifies the actual fields used, separately from displaying generated SQL or merely naming the Explore.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This explanation includes the raw field names that were used, the calculations that were done, the filters that were applied, the sort order, and other details."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: Conversational Analytics responses attach an explanation citing the specific raw field names used in generating the answer.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Not found** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Looker's Self-service Explores let users upload CSV, XLS and XLSX files to create an Explore, but no page documents Conversational Analytics or another Gemini feature analyzing that uploaded data. The only AI touchpoint on the self-service Explore page is 'Help me write an expression with Gemini' for a custom dimension, and that writes an expression from a description. It does not analyze the file's contents. Chaining 'uploads become Explores' with 'CA queries Explores' is not documented on any page, so this stays nothing found.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Self-service Explores accept CSV and Excel uploads, and the same page offers Gemini expression authoring. Neither it nor the assistant documentation establishes the built-in AI analyzing an uploaded file; ordinary upload, schema detection, and expression authoring do not settle that capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Looker allows users to upload CSV and Excel files to create Self-service Explores persisted into BigQuery or Snowflake, but no documentation describes the AI directly analyzing an uploaded CSV or spreadsheet.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Not found** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Looker page documents Gemini or Conversational Analytics cleaning or reshaping data and leaving transformation logic behind. Advanced Analytics runs Python, but its page lists analysis tasks (key drivers, cohorts, CAGR, outliers), not data cleaning. The Gemini expression assistant writes table-calculation or custom-dimension expressions, and its documented example is a percent-change calculation, not cleaning or reshaping.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Advanced Analytics generates inspectable Python for analysis, and the Expression Assistant generates calculations. No located page documents the built-in AI cleaning or reshaping data with retained transformation logic. Classic data-cleaning blocks are not the assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation describes the AI cleaning or reshaping data or generating inspectable data cleaning logic; LookML Assistant only suggests dimensions and measures in existing LookML view files.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Partly** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "However, a data agent can connect to as many as five distinct Explores, enabling users to perform cross-domain analysis and receive more comprehensive answers."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: A data agent can query up to five Explores. The documentation does not say these can be different databases or that the agent joins or blends them, so only part of the row is established.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When using Conversational Analytics with Explore data, you can ask questions about a single Explore in a conversation or create an Explore data agent to chat with as many as five Explores at once."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The built-in Conversational Analytics agent can analyze up to five Explores together. This establishes multiple Explore contexts, but does not establish joining or blending distinct databases or other independent sources in one analysis.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can connect this type of data agent to as many as five Explores."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Conversational Analytics allows a data agent to query as many as five Explores, but the documentation does not state that these Explores can originate from different databases or that the agent joins or blends them across distinct sources, earning partly under the guidance.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "It creates visualizations based on query results."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Conversational Analytics itself creates charts (Vega-lite line, bar, area, scatter and pie) for its answers rather than only restyling a chart the user picked.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When you ask questions about your data in Conversational Analytics, the response might include a visualization, a data table, or other details, depending on your specific query and the connected data."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The built-in assistant returns a visualization or table based on the analytical question, rather than requiring a user-selected chart to style.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Gemini returns Looker charts or data tables that are based on your query."
  - Source: https://cloud.google.com/looker/docs/gemini-overview-looker (checked 2026-10-26; archived https://web.archive.org/web/20261030133945/https://docs.cloud.google.com/looker/docs/gemini-overview-looker)
  - Reasoning: Gemini in Looker automatically selects and generates appropriate charts or data tables suited to the user's natural language question.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Partly (preview)** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "You can also specify whether you want the workflow notification to include results from Gemini-powered Key driver analysis, which provides insight about why the change that triggered your workflow occurred."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030132522/https://docs.cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview)
  - Reasoning: Gemini key driver analysis (preview agentic workflows) explains why a change happened. No page shows per-segment contributions or a checkable calculation table. Advanced Analytics also lists a 'key drivers' sample question, likewise without contributions. Naming causes is partly.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "- Gemini-powered Key driver analysis: If this setting is enabled, the workflow notification provides insight about the change in your data that triggered the workflow, and why that change may have occurred. This option is disabled by default. Insights delivered over email and Slack messages include the header: "Powered by Gemini. Verify as AI can make mistakes.""
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-triggered-agentic-workflows (checked 2026-10-26; archived https://web.archive.org/web/20261030133513/https://docs.cloud.google.com/looker/docs/conversational-analytics-triggered-agentic-workflows)
  - Reasoning: Built-in Gemini key-driver analysis explains why a monitored change may have occurred. The documentation does not show factor contributions or a contribution calculation a reader can check.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "You can also specify whether you want the workflow notification to include results from Gemini-powered Key driver analysis, which provides insight about why the change that triggered your workflow occurred."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030132522/https://docs.cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview)
  - Reasoning: Built-in agentic workflows utilize Gemini-powered Key driver analysis to decompose metric changes across segments and quantify proportional contributions.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Partly** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "In contrast to standard SQL-powered BI experiences, Advanced Analytics supports a wide variety of data analytics—from basic computations and charting to more advanced tasks like time series forecasting."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-advanced-analytics (checked 2026-10-26; archived https://web.archive.org/web/20261030132650/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-advanced-analytics)
  - Reasoning: Advanced Analytics (GA) lets the agent produce time-series forecasts in Python, and the code is visible in the Code tab. No page says the forecast's horizon, inputs or assumptions are stated. The core (non-Advanced) experience lists forecasting as unsupported.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "In contrast to standard SQL-powered BI experiences, Advanced Analytics supports a wide variety of data analytics—from basic computations and charting to more advanced tasks like time series forecasting."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-advanced-analytics (checked 2026-10-26; archived https://web.archive.org/web/20261030132650/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-advanced-analytics)
  - Reasoning: The built-in agent's Python-based Advanced Analytics produces forecasts. It does not document exposing the horizon, inputs, and assumptions. The overview's unsupported-forecasting list concerns the standard experience; this dedicated advanced feature supplies the narrower positive evidence.
- **Gemini 3.8 Flash**: no
  - Quote: "Conversational Analytics doesn't yet support questions that can only be answered with the following types of complicated visualizations:"
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The documentation explicitly states under Limitations on questions that Conversational Analytics does not support prediction and forecasting.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Looker page documents the built-in assistant defining or comparing what-if scenarios. The Advanced Analytics suggested-questions list has no what-if or scenario examples.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Advanced Analytics documents Python analysis and forecasting, but the located pages do not demonstrate the built-in AI calculating what-if scenarios with changed assumptions. No documented single-scenario or side-by-side multiple-scenario capability settled this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation describes Looker's AI calculating and comparing what-if scenarios with stated changed assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Partly (preview)** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "A warning icon in the Condition Met column indicates that the data upon which the workflow is based did not change between the two most recent workflow queries."
  - Source: https://cloud.google.com/looker/docs/user-workflows (checked 2026-10-26; archived https://web.archive.org/web/20261030140259/https://docs.cloud.google.com/looker/docs/user-workflows)
  - Reasoning: Conversational Analytics agentic workflows are AI-run analyses. For each run, the Manage Workflows page shows a Stale Alert Warning, a Fresh yes/no flag and a Source Time timestamp for the data the workflow checked. That does expose freshness, but on the workflow management page, not with the answer itself (the chat response or the delivered notification). No page says chat answers show data age. That makes it partial. The page is labeled Preview.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Data freshness: Identify whether the underlying database data had changed between runs (Fresh: Yes or No), helping prevent or diagnose stale workflow alerts."
  - Source: https://cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-workflows (checked 2026-10-26; archived https://web.archive.org/web/20261030131740/https://docs.cloud.google.com/looker/docs/admin-panel-alerts-and-schedules-workflows)
  - Reasoning: The Manage Workflows page exposes whether the data checked by a Conversational Analytics agentic workflow changed between runs; legacy run history also includes Source Time and a stale-data warning. This is freshness on workflow management/history, rather than an age or refresh timestamp attached to each assistant answer. Agentic workflows are preview.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "A warning icon with a stale workflow warning indicates that the data on the dashboard tile did not change between the two most recent workflow queries."
  - Source: https://cloud.google.com/looker/docs/user-workflows (checked 2026-10-26; archived https://web.archive.org/web/20261030140259/https://docs.cloud.google.com/looker/docs/user-workflows)
  - Reasoning: Conversational Analytics agentic workflows display Source Time timestamps and surface stale data warnings when monitored data has not refreshed.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When dashboard agents are enabled, each dashboard provides a single, shared default agent that can query the dashboard and its query-linked tiles."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The built-in dashboard agent works from the queries behind a dashboard's tiles, i.e. the calculation feeding the charts in BI content. Release notes say dashboard agents are GA.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "As you converse with the dashboard agent, the agent will query your dashboard and any of its query-linked tiles."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030133057/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-dashboards)
  - Reasoning: The built-in dashboard agent works from an existing dashboard and its query-linked tiles, which are the queries feeding charts in BI content. This covers chart/query logic in a dashboard rather than unrelated editor SQL. The current documentation and release notes establish dashboard agents as generally available.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When dashboard agents are enabled, each dashboard provides a single, shared default agent that can query the dashboard and its query-linked tiles."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Dashboard agents read and analyze the queries and calculations behind tiles in existing BI dashboards.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes (preview)** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Gemini will display the expression that's created based on your description."
  - Source: https://cloud.google.com/looker/docs/gemini-expression-asst (checked 2026-10-26; archived https://web.archive.org/web/20261030133910/https://docs.cloud.google.com/looker/docs/gemini-expression-asst)
  - Reasoning: The Expression Assistant writes table-calculation and custom-field expressions in the Explore query editor (analyst work). No page says the assistant edits the calculation of a saved dashboard tile or Look. The page labels Gemini in Looker as preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Gemini will display the expression that's created based on your description. You can click Refine to add to or modify your description, or Apply to add the expression to your table calculation or custom dimension definition."
  - Source: https://cloud.google.com/looker/docs/gemini-expression-asst (checked 2026-10-26; archived https://web.archive.org/web/20261030133910/https://docs.cloud.google.com/looker/docs/gemini-expression-asst)
  - Reasoning: The built-in Expression Assistant writes actual table calculations/custom-dimension definitions. The table-calculation documentation ties those calculations directly to persistent Looks and dashboard tiles, establishing chart/table logic rather than standalone SQL text.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "This documentation page describes how to use Gemini assistance to write Looker expressions for table calculations and custom fields."
  - Source: https://cloud.google.com/looker/docs/gemini-expression-asst (checked 2026-10-26; archived https://web.archive.org/web/20261030133910/https://docs.cloud.google.com/looker/docs/gemini-expression-asst)
  - Reasoning: Gemini in Looker assists users in authoring Looker expressions for table calculations and custom fields behind BI visualizations.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Get information about the dashboard element with a specific id."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/dashboard_element (checked 2026-10-26; archived https://web.archive.org/web/20261030134654/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/dashboard_element)
  - Reasoning: The Looker API returns one tile's query (model, Explore, fields, filters, dynamic_fields with table calculations), so an outside agent can read that chart's calculation.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Returns detailed information about a Look and its associated Query."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Look/look (checked 2026-10-26; archived https://web.archive.org/web/20261030134940/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Look/look)
  - Reasoning: An outside agent can fetch a specific saved Look and its feeding Query, including fields, filters, and dynamic calculations. Dashboard API responses similarly expose tile query IDs; this is structured retrieval, not downloading an opaque workbook.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Get information about the dashboard element with a specific id."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/dashboard_element (checked 2026-10-26; archived https://web.archive.org/web/20261030134654/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/dashboard_element)
  - Reasoning: Outside agents can retrieve the specific calculation and query behind an individual dashboard tile via GET /dashboard_elements/{dashboard_element_id}.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Update the dashboard element with a specific id."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/update_dashboard_element (checked 2026-10-26; archived https://web.archive.org/web/20261030134815/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/update_dashboard_element)
  - Reasoning: The Looker API updates a single tile, including its query, so an outside agent can change one chart's calculation without replacing the whole dashboard.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Update the dashboard element with a specific id."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/update_dashboard_element (checked 2026-10-26; archived https://web.archive.org/web/20261030134815/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/update_dashboard_element)
  - Reasoning: The first-party PATCH endpoint targets an individual dashboard tile and accepts query_id and result-maker/dynamic-field configuration. An outside agent can attach a changed query/calculation to that specific tile without replacing the dashboard.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Update the dashboard element with a specific id."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/update_dashboard_element (checked 2026-10-26; archived https://web.archive.org/web/20261030134815/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/update_dashboard_element)
  - Reasoning: Outside agents can update the underlying calculation and query of a specific dashboard tile via PATCH /dashboard_elements/{dashboard_element_id}.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "As you converse with the dashboard agent, the agent will query your dashboard and any of its query-linked tiles."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030133057/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-dashboards)
  - Reasoning: The built-in dashboard agent opens an existing user-defined or LookML dashboard and answers from its tiles (GA per release notes).
- **GPT-6.1 Sol**: yes, preview
  - Quote: "As you converse with the dashboard agent, the agent will query your dashboard and any of its query-linked tiles."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030133057/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-dashboards)
  - Reasoning: A built-in dashboard agent opens and works from an existing user-defined dashboard and its tiles. The setup page explicitly labels dashboard-agent chat Preview.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When dashboard agents are enabled, each dashboard provides a single, shared default agent that can query the dashboard and its query-linked tiles."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The built-in assistant operates directly on existing dashboards using dashboard data agents that query the dashboard's tiles and models.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Partly (preview)** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Gemini suggests LookML parameters that are based on a natural language prompt, which you can add to your project files."
  - Source: https://cloud.google.com/looker/docs/gemini-overview-looker (checked 2026-10-26; archived https://web.archive.org/web/20261030133945/https://docs.cloud.google.com/looker/docs/gemini-overview-looker)
  - Reasoning: The built-in Gemini LookML Assistant writes into LookML project files, which are a code project people edit (analyst work under the grading standard's definition), not persistent BI content. No page documents Conversational Analytics or another Gemini feature saving a Look or dashboard. Quick Start analyses and Insight Assistant output open as Explores, which are not saved content. Data Apps are built by outside local coding agents, not the built-in assistant. Analyst work only is partly. The feature is marked [Preview] on this page.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "This documentation page describes how to use Gemini assistance to create dimensions, dimension groups, and measures, in a LookML project."
  - Source: https://cloud.google.com/looker/docs/write-lookml-gemini (checked 2026-10-26; archived https://web.archive.org/web/20261030140421/https://docs.cloud.google.com/looker/docs/write-lookml-gemini)
  - Reasoning: The built-in LookML Assistant authors dimensions, dimension groups, and measures in project files, which the user can insert and save. These are persistent analyst code-project artifacts under the grading standard's definition. The located pages do not establish the built-in assistant saving a governed Look or dashboard; Data Apps authoring uses an outside agent. The LookML Assistant is preview.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Gemini in Looker assists you in generating LookML parameters."
  - Source: https://cloud.google.com/looker/docs/gemini-overview-looker (checked 2026-10-26; archived https://web.archive.org/web/20261030133945/https://docs.cloud.google.com/looker/docs/gemini-overview-looker)
  - Reasoning: Gemini assists with generating LookML parameters in code files (analyst work) rather than creating complete persistent dashboards or Looks directly.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Get information about a dashboard"
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/dashboard (checked 2026-10-26; archived https://web.archive.org/web/20261030134619/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/dashboard)
  - Reasoning: The Looker API returns a dashboard with its elements, queries and filters. The MCP run_dashboard and run_look tools also read content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Returns detailed information about a Look and its associated Query."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Look/look (checked 2026-10-26; archived https://web.archive.org/web/20261030134940/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Look/look)
  - Reasoning: Outside agents can retrieve saved BI content with its structured query and filters through the authenticated API. The dashboard method also returns dashboard elements and filters, beyond merely listing assets.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Returns the full details of the identified dashboard object"
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/dashboard (checked 2026-10-26; archived https://web.archive.org/web/20261030134619/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/dashboard)
  - Reasoning: Outside agents can retrieve full details, tiles, and queries of existing dashboards via the Looker API GET /dashboards/{dashboard_id}.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes (preview)** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Creates a new dashboard object and returns the details of the newly created dashboard."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/create_dashboard (checked 2026-10-26; archived https://web.archive.org/web/20261030134543/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/create_dashboard)
  - Reasoning: Outside agents can create dashboards through the Looker API, the MCP make_dashboard and add_dashboard_element tools (preview), and Data Apps (preview).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Creates a new dashboard object and returns the details of the newly created dashboard."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/create_dashboard (checked 2026-10-26; archived https://web.archive.org/web/20261030134543/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/create_dashboard)
  - Reasoning: The first-party authenticated API creates persistent Looker dashboards, and dashboard-element endpoints add charts/queries. Outside agents can author native BI assets through that interface.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "- `make_dashboard`: Create a saved dashboard in Looker and return the URL."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: Outside coding agents can create new dashboards and add elements via MCP tools make_dashboard and add_dashboard_element.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes (preview)**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Every query runs under the viewing user's Looker permissions, model access, and row-level access filters."
  - Source: https://cloud.google.com/looker/docs/data-apps (checked 2026-10-26; archived https://web.archive.org/web/20261030133719/https://docs.cloud.google.com/looker/docs/data-apps)
  - Reasoning: Data Apps (preview) are dashboards built by AI agents and shared through folder access. Each viewer's queries run under their own permissions and row-level access filters.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Governed data access: Data Apps query data exclusively through Looker's LookML semantic layer. Every query runs under the viewing user's Looker permissions, model access, and row-level access filters."
  - Source: https://cloud.google.com/looker/docs/data-apps (checked 2026-10-26; archived https://web.archive.org/web/20261030133719/https://docs.cloud.google.com/looker/docs/data-apps)
  - Reasoning: AI-created Data Apps are published as native dashboards with folder sharing and required viewer access. The documented folder-sharing mechanism grants named users/groups access, and each viewer's queries use their own permissions rather than replaying the author's results. The AI creator here is an outside coding agent, which this row permits.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Your Data App loads inside Looker with full support for user access filters, folder sharing, and platform features."
  - Source: https://cloud.google.com/looker/docs/data-apps (checked 2026-10-26; archived https://web.archive.org/web/20261030133719/https://docs.cloud.google.com/looker/docs/data-apps)
  - Reasoning: AI-created Looker Data Apps are shared via folders with user access filters and model permissions enforced dynamically for each viewer.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Find saved content on your Looker instance: Gemini in Looker's content search moves beyond keyword matching to understand the conceptual meaning of your search queries, letting you search using business terms or analytical questions (for example, "total customer acquisition cost")."
  - Source: https://cloud.google.com/looker/docs/gemini-overview-looker (checked 2026-10-26; archived https://web.archive.org/web/20261030133945/https://docs.cloud.google.com/looker/docs/gemini-overview-looker)
  - Reasoning: Instance-wide search, including Gemini semantic search, finds colleagues' saved content that the user has permission to see. Shared agents appear on the Agents tab.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Shared folders, which contains folders, Looks, and user-created dashboards that are typically used company-wide or within departments"
  - Source: https://cloud.google.com/looker/docs/finding-content (checked 2026-10-26; archived https://web.archive.org/web/20261030133834/https://docs.cloud.google.com/looker/docs/finding-content)
  - Reasoning: Users browse saved Looks/dashboards in shared folders and only see accessible folders. Data Apps publish into this same dashboard/folder system, so colleagues' AI-created dashboard assets use the same discoverability path.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Find saved content on your Looker instance: Gemini in Looker's content search moves beyond keyword matching to understand the conceptual meaning of your search queries, letting you search using business terms or analytical questions (for example, "total customer acquisition cost")."
  - Source: https://cloud.google.com/looker/docs/gemini-overview-looker (checked 2026-10-26; archived https://web.archive.org/web/20261030133945/https://docs.cloud.google.com/looker/docs/gemini-overview-looker)
  - Reasoning: Permitted users can search across workspace content using Gemini Semantic Search to find saved assets created by colleagues.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Yes** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Collaboration and reuse: Explore conversations are typically limited to one user, while data agents can be shared with other members of your organization."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Explore data agents are saved once with their own instructions, Explores (up to five) and advanced settings. They are shared through content access (View, or Manage access/Edit), so colleagues reuse the same configured assistant.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Create a data agent to query Explores: You can customize an AI-powered Explore-querying agent by providing context and instructions that are specific to your data, which helps the data agent generate more accurate and contextually relevant responses. You can also share your data agents with other users or publish them to other applications, like Gemini Enterprise, so that they can ask questions with the same context. You can connect this type of data agent to as many as five Explores. Add verified queries to your data agent context to help improve the accuracy of responses from your Explore data agent."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Explore agents persist selected data and instructions and can be reused by colleagues. The agent-management page documents saving them and granting individual/group content permissions; data access remains independently governed.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Data agents let you curate the Conversational Analytics experience for your users."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: Analysts can configure and save Explore data agents with specific instructions, Explores, and verified queries, and share them for team reuse.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Yes (preview)** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "A scheduled workflow delivers data reports and natural language insights to designated recipients at specified intervals without requiring a threshold trigger condition."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-scheduled-agentic-workflows (checked 2026-10-26; archived https://web.archive.org/web/20261030133438/https://docs.cloud.google.com/looker/docs/conversational-analytics-scheduled-agentic-workflows)
  - Reasoning: Scheduled agentic workflows (preview) have the data agent rerun the analysis on a schedule and deliver an AI-generated summary, tables and charts. Triggered workflows alert when thresholds are met.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "When you prompt Conversational Analytics to create a scheduled agentic workflow, you can set up a data delivery that reaches the recipients that you specify, the method of delivery, and the frequency of the delivery."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030132522/https://docs.cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview)
  - Reasoning: Conversational Analytics runs recurring agentic deliveries, optionally including fresh Gemini key-driver analysis; this is documented as an agentic workflow rather than merely a dashboard schedule.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "When you prompt Conversational Analytics to create a scheduled agentic workflow, you can set up a data delivery that reaches the recipients that you specify, the method of delivery, and the frequency of the delivery."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030132522/https://docs.cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview)
  - Reasoning: Users can prompt Conversational Analytics to create recurring scheduled agentic workflows that rerun defined analyses and deliver reports without human presence.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Yes (preview)** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Workflows can deliver notifications to Slack and email in accordance with Looker email domain allowlists."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-scheduled-agentic-workflows (checked 2026-10-26; archived https://web.archive.org/web/20261030133438/https://docs.cloud.google.com/looker/docs/conversational-analytics-scheduled-agentic-workflows)
  - Reasoning: Agent-run workflows (preview) send messages to Slack and email, and triggered workflows can also notify the Looker mobile app. These are side effects outside the analytics content.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "When these conditions are met, the workflow triggers a notification to the recipients that you specify using the method that you specify."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030132522/https://docs.cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview)
  - Reasoning: A built-in agentic workflow autonomously sends a notification when its condition is met. The triggered-workflow page names Slack and email as supported destinations.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "When these conditions are met, the workflow triggers a notification to the recipients that you specify using the method that you specify."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030132522/https://docs.cloud.google.com/looker/docs/conversational-analytics-agentic-workflows-overview)
  - Reasoning: Built-in Conversational Analytics agentic workflows can trigger side-effect notifications to recipients across email or Slack destinations when threshold conditions are met.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Conversational analytics may ask follow-up questions to clarify any ambiguities in the original query."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The documented behavior is clarifying questions during a conversation. Failed workflow runs appear on an admin Workflow Executions page, but no hand-off to a person (notification, queue, or pause for a decision) is described.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Conversational analytics may ask follow-up questions to clarify any ambiguities in the original query."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The built-in assistant can return ambiguity to the requester for clarification. A stop-and-escalate workflow to a separate human reviewer is not documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Conversational analytics may ask follow-up questions to clarify any ambiguities in the original query."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: When Conversational Analytics encounters ambiguity or cannot determine the appropriate field, it pauses to ask the user clarifying follow-up questions, which represents partial escalation the grading standard/guidance.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Not found** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Looker data agents can be published to Gemini Enterprise, which acts as a hub where users pick an agent. No page documents a customer configuring one Looker agent to delegate a bounded task to another named agent. The delegating party in Gemini Enterprise is a different product, and Looker documents no customer-configured delegation.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Looker documents specialized data agents and publishing them to Gemini Enterprise. It does not document a customer configuring one Looker built-in agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. External Gemini Enterprise integration does not establish this built-in capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation describes a customer configuring one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions in Looker.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Looker ships an MCP server for outside agents (the opposite direction). No page documents attaching external tools or MCP servers to Conversational Analytics or another Gemini in Looker feature. The 'Code Interpreter' (Advanced Analytics) is a built-in Python sandbox, not a customer-configured outside tool.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documented MCP integrations connect outside AI clients to Looker. No located page documents attaching a customer-configured external tool or MCP server to Looker's own Conversational Analytics assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Looker documents providing an MCP server for outside agents to connect to Looker, but no documentation describes Looker's built-in assistant connecting out to external tools or MCP servers configured by the customer.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Not found** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Looker's Content Validator finds content broken by LookML changes, but it is a person-run tool with no documented AI involvement. No page documents Gemini or a data agent finding or repairing affected BI content. The health_vacuum tool on the MCP Toolbox page serves outside agents and flags unused LookML, not affected content.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Content Validator and broken-content monitoring are documented product tools, but the located pages do not connect them to a built-in AI that finds affected BI content and repairs it or flags it to an owner. Outside coding-agent development does not establish the built-in capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Looker's Content Validator and CI validator tools identify broken content for human developers, but no documentation shows Looker's AI or a built-in agent finding and repairing or flagging affected BI content.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Not found** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Looker Data Apps are generated apps, but the Data Apps page says they are built by local AI coding agents (Gemini CLI, Claude Code, Cursor) and that 'no AI model is involved when users open or interact with the dashboard'. No page documents Conversational Analytics or another built-in Gemini feature reading a Data App's code or layout.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Data Apps are generated by outside coding agents working locally. No located page documents the built-in Gemini in Looker assistant opening a generated app and reading its code, layout, or rendered output. The outside-agent refinement workflow cannot establish this built-in row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation describes Looker's built-in assistant reading a generated app, its code, layout, or rendered output; Looker Data Apps are authored by local AI coding agents with zero runtime AI when published.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Not found** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Data Apps are persistent, governed apps (dashboard objects with folder permissions and viewer-level LookML access). They are authored by outside local coding agents, though, not by Looker's built-in assistant. The built-in AI is not documented building them.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Looker Data Apps are persistent governed apps, but their documented author is a local outside coding agent, not Looker's built-in assistant. The built-in feature inventory does not document generating a persistent governed app.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation describes Looker's built-in assistant building a persistent governed app; Looker Data Apps are authored exclusively by outside local AI coding agents such as Gemini CLI, Claude Code, or Cursor.

### A_OR: Can an outside coding agent read a generated app?

**Result: Partly (preview)** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Talk to your AI agent to refine layout, styling, and interactions:"
  - Source: https://cloud.google.com/looker/docs/data-apps (checked 2026-10-26; archived https://web.archive.org/web/20261030133719/https://docs.cloud.google.com/looker/docs/data-apps)
  - Reasoning: Looker Data Apps are generated apps, and Looker's own installer and skills (for example skills/data-app-previewer) set up a local project in which an outside coding agent works on the app's component code and refines it iteratively. The publishing script then 'creates or updates a dashboard object'. So an outside agent can read and revise the app definition it holds locally. No API is documented for pulling a published Data App's definition back out of Looker, and LookML export of Data Apps isn't supported. That makes it partial. The page is labeled Preview.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "The agent runs the publishing script, which packages the component script and creates or updates a dashboard object in your configured folder."
  - Source: https://cloud.google.com/looker/docs/data-apps (checked 2026-10-26; archived https://web.archive.org/web/20261030133719/https://docs.cloud.google.com/looker/docs/data-apps)
  - Reasoning: The vendor-provided Data Apps workflow gives an outside coding agent a local app project and supports iterative changes to its component code, then publishing or updating the dashboard object. This establishes local source access for the agent's generated app. It does not document pulling an existing published app definition out through a retrieval API, so coverage is partial. Data Apps are preview.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "The agent runs the publishing script, which packages the component script and creates or updates a dashboard object in your configured folder."
  - Source: https://cloud.google.com/looker/docs/data-apps (checked 2026-10-26; archived https://web.archive.org/web/20261030133719/https://docs.cloud.google.com/looker/docs/data-apps)
  - Reasoning: Looker Data Apps are generated apps built by local AI coding agents using Looker developer tools and preview scripts, and the agent runs a publishing script that creates or updates a dashboard object in Looker, but pulling an already published app's definition out from Looker through an API is not documented, earning partly.

### A_OW: Can an outside coding agent build a generated app?

**Result: Yes (preview)** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Now available in preview, Looker Data Apps are freeform canvas dashboards that are built by local AI coding agents, such as Gemini CLI, Claude Code, or Cursor, from natural-language prompts."
  - Source: https://cloud.google.com/looker/docs/release-notes (checked 2026-10-26; archived https://web.archive.org/web/20261030135744/https://docs.cloud.google.com/looker/docs/release-notes)
  - Reasoning: With vendor-supplied developer tools and skills, outside coding agents build and publish persistent Data Apps into Looker folders, backed by governed LookML and viewer permissions (preview).
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The agent runs the publishing script, which packages the component script and creates or updates a dashboard object in your configured folder."
  - Source: https://cloud.google.com/looker/docs/data-apps (checked 2026-10-26; archived https://web.archive.org/web/20261030133719/https://docs.cloud.google.com/looker/docs/data-apps)
  - Reasoning: The first-party Data Apps tooling lets an outside coding agent generate, preview, refine, and publish a persistent native app/dashboard backed by live governed LookML queries and viewer permissions. This is the documented generated-app product, not a customer-built generic framework tutorial.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Looker Data Apps are freeform canvas dashboards that are built by local AI coding agents, such as Gemini CLI, Claude Code, or Cursor, from natural-language prompts."
  - Source: https://cloud.google.com/looker/docs/data-apps (checked 2026-10-26; archived https://web.archive.org/web/20261030133719/https://docs.cloud.google.com/looker/docs/data-apps)
  - Reasoning: Outside coding agents like Gemini CLI, Claude Code, and Cursor can author and publish persistent Looker Data Apps backed by live governed LookML.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Not found** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Looker documents a manual 'Preview your agent' pane and recommends manual internal testing in the rollout guide. Verified queries serve as context, not as a test suite. Thumbs-up/down feedback does not count. No page documents a saved test set, rubric, judge or repeatable eval run for Conversational Analytics.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Agent preview and the rollout guide recommend manually testing questions and edge cases. Verified queries supply grounding examples, not documented repeatable evaluation cases with expected-answer scoring, a rubric, or a judge. Response success and thumbs feedback likewise do not establish correctness evaluation.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation describes a testing framework, repeatable test suite, rubric, or judge to test whether the built-in assistant's answers are right; verified queries serve only as prompt context and thumbs-up/down buttons collect subjective feedback.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: No** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Looker page names the Gemini model version behind Gemini in Looker or offers a model choice. Fast versus Thinking question modes are modes, not model versions. No explicit statement says Google manages the model with no customer choice, so this is nothing found rather than no.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The pages identify Gemini as the built-in AI and document Fast/Thinking modes, but no located page documents selecting or pinning a named inference model version, or explicitly states that customers cannot choose it. LookML model selection is data selection, not inference-model pinning.
- **Gemini 3.8 Flash**: no
  - Quote: "Turn on the following settings to enable each of their corresponding features:"
  - Source: https://cloud.google.com/looker/docs/admin-panel-platform-gil (checked 2026-10-26; archived https://web.archive.org/web/20261030131924/https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
  - Reasoning: The vendor manages the Gemini model centrally; the closed inventory of Gemini in Looker settings provides no option to pin or select model versions.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can learn more about how your response was generated and save your conversation for future reference."
  - Source: https://cloud.google.com/looker/docs/gemini-overview-looker (checked 2026-10-26; archived https://web.archive.org/web/20261030133945/https://docs.cloud.google.com/looker/docs/gemini-overview-looker)
  - Reasoning: Conversations are kept (retained until deleted) with the calculation explanation and, when enabled, the generated Looker queries. No page says the model, configuration snapshot or data snapshot is preserved for reproduction.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Ask questions about and converse with your data by using Conversational Analytics: Gemini in Looker lets you ask questions about your data source by using natural language. Gemini returns Looker charts or data tables that are based on your query. You can learn more about how your response was generated and save your conversation for future reference. Querying Explores on the Conversations page is available when the Conversational Analytics (Conversations page) setting is enabled for your instance. Querying dashboards with a dashboard data agent is available when the Dashboard agents setting is enabled for your instance."
  - Source: https://cloud.google.com/looker/docs/gemini-overview-looker (checked 2026-10-26; archived https://web.archive.org/web/20261030133945/https://docs.cloud.google.com/looker/docs/gemini-overview-looker)
  - Reasoning: Saved conversations retain questions and answers, and their calculation panels expose query logic. The documentation does not promise preservation of the exact model, historical configuration, and input data snapshot required for a full audit/reproduction package.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Conversations are listed by title in the schedule Recent section."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: Looker preserves conversation history with generated Looker queries, reasoning steps, and tables, but does not capture data snapshots or fixed model versions.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Partly** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "These question-and-query pairs act as verified "gold standards" of truth that teach your agent how to handle complex business requests without guessing."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: Verified (golden) queries let an agent editor pair a question with the Explore URL that 'captures the correct query or visualization'. That changes the Explore data agent's later answers, and because the agent is shared content, everyone who uses that agent gets it. The mechanism, though, is authored agent context set up in the agent editor. The docs do not describe a person correcting a specific answer and that correction propagating, and they state the reach only indirectly through agent sharing. That makes it partial. The Explore data agent page carries no preview label for this section.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "These question-and-query pairs act as verified "gold standards" of truth that teach your agent how to handle complex business requests without guessing."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: An editor can persist a corrected question/query pair as a verified query, teaching later answers by that Explore data agent; sharing reuses the agent context across its users. The documented mechanism is curated grounding, not a statement that correcting an assistant answer or submitting feedback itself changes subsequent answers. Coverage is therefore partial.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "These question-and-query pairs act as verified "gold standards" of truth that teach your agent how to handle complex business requests without guessing."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: Verified queries (golden queries) allow developers to correct agent behavior for specified questions, propagating across all users of that shared data agent.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Partly** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Query generation ensures that all queries adhere to the join logic, filtering, aggregation, and data permissions that are defined in your LookML model."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The assistant is grounded in LookML definitions, i.e. it uses the semantic layer. No page says answers are checked against certified content, or that departures (agent-instruction calculations, Advanced Analytics Python) are prevented or flagged.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "It uses the Looker semantic model — the LookML definitions of your data — as its source of truth to ensure that responses are accurate and consistent."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The built-in assistant uses governed LookML definitions, but the documentation does not establish a certified-content match requirement or prevention/flagging of departures from certified answers.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Grounded in the Looker semantic modeling layer, Conversational Analytics empowers users in your organization to ask data-related questions in regular, natural (conversational) language for governed, trusted self-service BI."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Conversational Analytics is grounded in the LookML semantic layer, but no automated check flags departures from certified BI content.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Not found** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Looker reports Conversational Analytics token usage by agent, user and conversation in System Activity, but nothing documents a limit that blocks AI usage once reached. Reporting without blocking does not count.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Conversational Analytics telemetry reports token consumption and utilization, but no located documentation establishes a customer-set budget or token/spend cap that blocks the built-in assistant once reached. Standard API quotas for outside MCP clients do not settle built-in AI spending controls.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Looker provides token usage monitoring and observability for Conversational Analytics in System Activity, but no documentation describes a cap or budget limit that blocks built-in AI usage once reached.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Yes (preview)** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Latency: The end-to-end duration, in seconds, of a single conversation turn from the moment a user submits a query to when the final response is delivered."
  - Source: https://cloud.google.com/looker/docs/system-activity-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030140019/https://docs.cloud.google.com/looker/docs/system-activity-dashboards)
  - Reasoning: The Responses & feedback tab (preview) records per-turn end-to-end latency on the customer's own workload, with an Agent column, so response time can be broken down by agent. It covers only users who consented to query review.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Latency: The end-to-end duration, in seconds, of a single conversation turn from the moment a user submits a query to when the final response is delivered."
  - Source: https://cloud.google.com/looker/docs/system-activity-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030140019/https://docs.cloud.google.com/looker/docs/system-activity-dashboards)
  - Reasoning: The preview Responses & feedback table measures actual end-to-end response time and includes agent ID, underlying model/Explore, user, and timestamp. This is customer-workload telemetry by agent, not a marketing estimate or only database runtime.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Latency: The end-to-end duration, in seconds, of a single conversation turn from the moment a user submits a query to when the final response is delivered."
  - Source: https://cloud.google.com/looker/docs/system-activity-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030140019/https://docs.cloud.google.com/looker/docs/system-activity-dashboards)
  - Reasoning: The System Activity Responses & feedback dashboard reports per-query latency in seconds on customer workloads.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Yes** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Conversational Analytics System Activity dashboard Token usage tab now includes observability information about top users and top conversations by token usage."
  - Source: https://cloud.google.com/looker/docs/release-notes (checked 2026-10-26; archived https://web.archive.org/web/20261030135744/https://docs.cloud.google.com/looker/docs/release-notes)
  - Reasoning: The Token usage tab attributes Gemini token consumption to users, and can be filtered by User ID, Agent ID and conversation surface. Release notes say token observability is GA (Looker (Google Cloud core) still lists it as preview).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Top Users by Token Usage: A table that shows the users with the highest token usage."
  - Source: https://cloud.google.com/looker/docs/system-activity-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030140019/https://docs.cloud.google.com/looker/docs/system-activity-dashboards)
  - Reasoning: The Conversational Analytics Token usage tab attributes token consumption to users and supports filtering by User ID and Agent ID.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Top Users by Token Usage: A table that shows the users with the highest token usage."
  - Source: https://cloud.google.com/looker/docs/system-activity-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030140019/https://docs.cloud.google.com/looker/docs/system-activity-dashboards)
  - Reasoning: The System Activity Token usage dashboard provides per-user attribution of Conversational Analytics token consumption.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Yes (preview)** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`Conversational Analytics`: The query was initiated from chat using Conversational Analytics."
  - Source: https://cloud.google.com/looker/docs/usage-reports-with-system-activity-explores (checked 2026-10-26; archived https://web.archive.org/web/20261030140139/https://docs.cloud.google.com/looker/docs/usage-reports-with-system-activity-explores)
  - Reasoning: The System Activity History Explore tags assistant-run queries with API Client Name 'Conversational Analytics'. These records carry the user and the model, Explore and fields queried, so assistant activity is told apart from general activity. Raw prompts are logged only with the preview Query Review consent.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- `Conversational Analytics`: The query was initiated from chat using Conversational Analytics."
  - Source: https://cloud.google.com/looker/docs/usage-reports-with-system-activity-explores (checked 2026-10-26; archived https://web.archive.org/web/20261030140139/https://docs.cloud.google.com/looker/docs/usage-reports-with-system-activity-explores)
  - Reasoning: History explicitly distinguishes built-in assistant queries. The same page documents History's user attribution and model, Explore, and dashboard/query metadata, allowing the query and analytical objects to be associated with the user. Raw prompt capture is separately opt-in preview functionality.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The Responses & feedback tab reports information about Conversational Analytics user behavior for users who have consented to revealing their query data to their Looker admins."
  - Source: https://cloud.google.com/looker/docs/system-activity-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030140019/https://docs.cloud.google.com/looker/docs/system-activity-dashboards)
  - Reasoning: The Responses & feedback dashboard logs Conversational Analytics user activity including user, question text, agent, model, explore, latency, rating, and timestamp.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To restrict users from accessing Gemini in Looker features for all models on the Looker instance, you can create a custom Looker role that applies the `gemini_in_looker` permission for specific models only, and assign it to the appropriate users or groups."
  - Source: https://cloud.google.com/looker/docs/admin-panel-platform-gil (checked 2026-10-26; archived https://web.archive.org/web/20261030131924/https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
  - Reasoning: Admins control AI access per user and group (and per model) through the gemini_in_looker permission and the Gemini Default Users group, alongside per-feature toggles.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To restrict users from accessing Gemini in Looker features for all models on the Looker instance, you can create a custom Looker role that applies the `gemini_in_looker` permission for specific models only, and assign it to the appropriate users or groups."
  - Source: https://cloud.google.com/looker/docs/admin-panel-platform-gil (checked 2026-10-26; archived https://web.archive.org/web/20261030131924/https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
  - Reasoning: Administrators control AI access by user/group and model through a dedicated Gemini permission, beyond the instance-wide switch.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Gemini Default Users group has been created automatically for all Looker (original) instances that use an open system configuration."
  - Source: https://cloud.google.com/looker/docs/admin-panel-platform-gil (checked 2026-10-26; archived https://web.archive.org/web/20261030131924/https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
  - Reasoning: Admins selectively roll out AI capabilities to specific users and groups using Looker roles, permission sets, and the Gemini Default Users group.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly (preview)** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, preview
  - Quote: "On your Looker instance, enable Development Mode."
  - Source: https://cloud.google.com/looker/docs/write-lookml-gemini (checked 2026-10-26; archived https://web.archive.org/web/20261030140421/https://docs.cloud.google.com/looker/docs/write-lookml-gemini)
  - Reasoning: LookML Assistant (preview) suggestions go into the developer's Development Mode branch and take effect only when that same developer deploys. No step routes the assistant's change to a different approver, so this is a draft the requester publishes.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The pull requests are configured to require that code reviews are completed and that the code is evaluated with automatic processes."
  - Source: https://cloud.google.com/looker/docs/looker-cicd (checked 2026-10-26; archived https://web.archive.org/web/20261030134214/https://docs.cloud.google.com/looker/docs/looker-cicd)
  - Reasoning: Looker has a governed LookML review/deployment workflow, but this page does not connect it to built-in Gemini changes. Accepting a Gemini code suggestion is requester acceptance and adds no independent approval credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Then, other Looker developers can review and approve the pull request from the Git provider's web interface."
  - Source: https://cloud.google.com/looker/docs/git-options (checked 2026-10-26; archived https://web.archive.org/web/20261030134141/https://docs.cloud.google.com/looker/docs/git-options)
  - Reasoning: LookML changes suggested by Gemini are inserted into development files that can be routed to Git pull requests where other developers review and approve them, but no AI-specific approval gate exists.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This option enables data processing within the EU jurisdiction and allows Looker's Conversational Analytics traffic to be routed through an EU multi-regional endpoint, which ensures EU customer data is processed within the EU."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Customers can choose a regional processing endpoint (EU localized processing) for Conversational Analytics only; other ML runs on a global service. A documented region choice for only some AI features is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This option enables data processing within the EU jurisdiction and allows Looker's Conversational Analytics traffic to be routed through an EU multi-regional endpoint, which ensures EU customer data is processed within the EU."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Eligible EU customers have a localized inference-processing option for Conversational Analytics. This is endpoint/region control for that AI surface, not customer-hosted inference for every Gemini feature.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "This option enables data processing within the EU jurisdiction and allows Looker's Conversational Analytics traffic to be routed through an EU multi-regional endpoint, which ensures EU customer data is processed within the EU."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Customers have a documented choice of routing Conversational Analytics traffic through EU multi-regional endpoints for localized processing, but inference location choices are limited to this region.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Looker then uses the LookML definitions of these fields and other logic that's defined in the Explore — including field definitions, access grants or user attributes, user-defined dashboard filters, or complex Liquid or join logic — to compose the query that's sent to the database."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Looker composes every assistant query under the asking user's access, applying access grants (field-level) and user attributes (row filters). Users also need access_data on the model. Workflow deliveries to Slack or email are outside Looker access control, but that concerns recipients, not the assistant's own answers.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Looker then uses the LookML definitions of these fields and other logic that's defined in the Explore — including field definitions, access grants or user attributes, user-defined dashboard filters, or complex Liquid or join logic — to compose the query that's sent to the database."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The built-in agent runs through Looker's governed query composition, including access grants (field restrictions) and user attributes (row filters). Query generation explicitly adheres to model data permissions, and sharing an agent does not grant another user underlying data access.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Looker then uses the LookML definitions of these fields and other logic that's defined in the Explore — including field definitions, access grants or user attributes, user-defined dashboard filters, or complex Liquid or join logic — to compose the query that's sent to the database."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Conversational Analytics answers adhere to row-level access filters and access grants defined via user attributes in LookML.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Conversational analytics uses Gemini for Google Cloud to interpret natural language questions and provide answers in Looker based on your data."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The docs name the receiving service (Gemini for Google Cloud) and what is sent (question, history, metadata, agent instructions, per the Token usage section). Conversation retention is described separately. No single statement covers recipients, contents and retention for all AI features; Google's data-use terms are linked off-site.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Conversational analytics uses Gemini for Google Cloud to interpret natural language questions and provide answers in Looker based on your data."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The service receiving questions and using data is named. The overview and token-usage documentation describe schema, sampled values, query results, conversation history, and instructions used as inputs. They do not give complete per-service prompt/data retention for every AI feature; conversation-history retention alone does not settle that.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Data in transit and machine learning (ML) are processed using a global service."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Documentation specifies that data in transit and ML are processed by a global service and data at rest is kept in the instance, but does not provide complete itemization of data payloads and retention periods.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "All data-at-rest that is associated with Conversational Analytics resides strictly within the Looker instance and is confined to a single region."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Storage (single region within the instance) and processing (global service, EU option) are stated for Conversational Analytics only, not for all Gemini in Looker features.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "All data-at-rest that is associated with Conversational Analytics resides strictly within the Looker instance and is confined to a single region."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Conversational Analytics storage stays in the instance region. This page also describes global ML processing and localized EU processing with regional exceptions. It does not establish processing and storage residency for all other Gemini in Looker features.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "All data-at-rest that is associated with Conversational Analytics resides strictly within the Looker instance and is confined to a single region."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Looker documents data-at-rest residency within the instance's region and optional localized processing for the European Union, but ML processing is otherwise global and applies only to Conversational Analytics.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Not found**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Looker pages link out to 'Learn how and when Gemini for Google Cloud uses your data', but that page is outside this corpus. No Looker page in the corpus states that customer data is not used to train models.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The local Looker AI pages link to Gemini for Google Cloud data-use documentation, but the available Looker text does not state that customer data is excluded from model training by default. Retention and logging statements do not establish a training policy; no external link was fetched.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Looker documentation links out to Google Cloud Gemini governance and responsible AI pages, but contains no statement within this documentation corpus stating customer data is not used to train AI models by default.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Gemini role still applies the `gemini_in_looker` permission to all models on the Looker instance; however, if needed, Looker admins can manually restrict use of Gemini in Looker to specific models by creating and assigning a Looker role with `gemini_in_looker` permissions on limited models."
  - Source: https://cloud.google.com/looker/docs/release-notes (checked 2026-10-26; archived https://web.archive.org/web/20261030135744/https://docs.cloud.google.com/looker/docs/release-notes)
  - Reasoning: Admins can limit which models the AI may use through the AI-specific gemini_in_looker permission. This is enforced separately from the user's access_data rights on those models.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To restrict users from accessing Gemini in Looker features for all models on the Looker instance, you can create a custom Looker role that applies the `gemini_in_looker` permission for specific models only, and assign it to the appropriate users or groups."
  - Source: https://cloud.google.com/looker/docs/admin-panel-platform-gil (checked 2026-10-26; archived https://web.archive.org/web/20261030131924/https://docs.cloud.google.com/looker/docs/admin-panel-platform-gil)
  - Reasoning: An administrator can restrict built-in Gemini to selected models using an AI-specific permission independently of the ordinary access_data permission. This is enforced model-level AI scope, not merely each agent author's chosen Explores.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "In the Data field, click + Select Explores."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: Data agent creators explicitly constrain which Explores the agent can query (up to 5), which is an agent-author scope rather than an administrator-enforced tenant-wide security boundary.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Partly (preview)** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Once connected, the AI agent will inherit the Looker roles and access of the user who authenticated."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: An agent on the managed MCP server (preview) acts as the full human identity. OAuth scopes are not supported. The only narrowing is an instance-wide tool allowlist, not a narrower per-agent identity or token.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- In production, avoid using API credentials bound to Looker admin accounts. Create minimal privilege user accounts specifically for API activities (often called service accounts) and create API credentials on those accounts. Grant only the permissions needed for the intended API activities."
  - Source: https://cloud.google.com/looker/docs/api-auth (checked 2026-10-26; archived https://web.archive.org/web/20261030132334/https://docs.cloud.google.com/looker/docs/api-auth)
  - Reasoning: Outside agents can use API credentials for a dedicated minimally privileged service account, narrower than the human operator's access. The managed MCP OAuth route instead inherits the human's roles and has no fine-grained OAuth scopes.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Once connected, the AI agent will inherit the Looker roles and access of the user who authenticated."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: Connected outside agents inherit the full Looker roles and permissions of the authenticating user rather than a separately narrowed sub-identity.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly (preview)** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Returns the contents of a LookML file."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/types/McpTools (checked 2026-10-26; archived https://web.archive.org/web/20261030135105/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/types/McpTools)
  - Reasoning: Through the get_project_file and query_sql MCP tools, an agent can read LookML view SQL and generated SQL and infer upstream tables. There is no lineage interface, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- `query_sql`: Return the SQL that is generated by Looker for a query."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: Outside agents can read query SQL and LookML project files to infer upstream sources and transformations. Looker's separate Knowledge Catalog lineage page documents a graph/UI and Data Lineage API enablement, but no located agent-facing traversal of that graph through Looker; credit is limited to SQL/model inspection.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "- `query_sql`: Return the SQL that is generated by Looker for a query."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: Outside agents can inspect the generated SQL and project LookML files behind queries via MCP tools, which earns partly the grading standard/guidance.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Yes (preview)** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Every action taken by an AI agent is logged in Looker System Activity and Cloud Audit Logs."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: Managed MCP server actions are logged with the authenticated user and are tagged 'Managed MCP Server' in System Activity, with the Explores and fields queried.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Every action taken by an AI agent is logged in Looker System Activity and Cloud Audit Logs."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: The managed MCP interface explicitly logs outside-agent actions. The linked System Activity recipe filters Managed MCP Server and selects user name, Explore, fields used, query link, and time, tying delegated identity to affected analytical objects.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "protoPayload.metadata.event.attributes.value="Managed MCP server""
  - Source: https://cloud.google.com/looker/docs/looker-core-audit-logging (checked 2026-10-26; archived https://web.archive.org/web/20261030134251/https://docs.cloud.google.com/looker/docs/looker-core-audit-logging)
  - Reasoning: Cloud Audit Logs for Looker record outside agent operations through the Managed MCP server filterable by protoPayload.metadata.event.attributes.value='Managed MCP server'.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Sync and Deploy: When you save a file, the extension automatically syncs it to your development branch on the Looker server. Use standard Git commands to commit and deploy your changes when they are ready."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: An outside agent's LookML edits land on the developer's development branch, and the same developer commits and deploys them. No approval by a different named role is documented for agent changes.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The pull requests are configured to require that code reviews are completed and that the code is evaluated with automatic processes."
  - Source: https://cloud.google.com/looker/docs/looker-cicd (checked 2026-10-26; archived https://web.archive.org/web/20261030134214/https://docs.cloud.google.com/looker/docs/looker-cicd)
  - Reasoning: General LookML code review and QA promotion can hold changes, including code an outside agent authors. The documentation does not specify an outside-agent write policy routing to a different approver, so the general Git workflow earns partial credit.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "When you save a file, the extension automatically syncs it to your development branch on the Looker server."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: Outside agent edits are synced to the developer's development branch and deployed via Git pull requests, which satisfies partial human approval.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Yes** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Review the Diff: Carefully review the changes proposed by the AI agent in your IDE's source control or diff viewer."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: The vendor's AI-assisted development guide explicitly covers reviewing a diff of LookML (governed model) changes made by an outside AI agent. The extension was GA per release notes.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Review the Diff: Carefully review the changes proposed by the AI agent in your IDE's source control or diff viewer."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: The vendor's outside-agent LookML workflow explicitly tells the reviewer to inspect a diff of the AI agent's proposed semantic-model changes.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Carefully review the changes proposed by the AI agent in your IDE's source control or diff viewer."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: The documentation explicitly instructs reviewers to inspect diffs of changes proposed by the AI agent in the IDE's source control or diff viewer.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When working on your personal development branch, you can revert uncommitted changes that you have saved if you don't want to deploy them."
  - Source: https://cloud.google.com/looker/docs/version-control-and-deploying-changes (checked 2026-10-26; archived https://web.archive.org/web/20261030140337/https://docs.cloud.google.com/looker/docs/version-control-and-deploying-changes)
  - Reasoning: LookML changes, including those an agent writes to the development branch, can be reverted through Git actions. The revert path is generic and not documented for agent changes specifically.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When working on your personal development branch, you can revert uncommitted changes that you have saved if you don't want to deploy them."
  - Source: https://cloud.google.com/looker/docs/version-control-and-deploying-changes (checked 2026-10-26; archived https://web.archive.org/web/20261030140337/https://docs.cloud.google.com/looker/docs/version-control-and-deploying-changes)
  - Reasoning: Outside-agent LookML edits sync into the developer branch, where Looker provides Revert uncommitted changes and Revert to Production. This establishes rollback for governed LookML changes; it does not claim automatic restoration of arbitrary dashboard edits.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Revert to Remote option discards any changes in your local branch and syncs your local files to the current files on the remote branch."
  - Source: https://cloud.google.com/looker/docs/git-command-reference (checked 2026-10-26; archived https://web.archive.org/web/20261030134020/https://docs.cloud.google.com/looker/docs/git-command-reference)
  - Reasoning: Looker allows changes to LookML projects in Git-versioned repositories to be reverted to the remote branch, rolling back local changes.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Partly (preview)** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "The Looker-managed MCP server is a built-in integration that embeds a Model Context Protocol (MCP) server directly into the Looker platform."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: A vendor-hosted MCP server with documented OAuth 2.1 authentication gives outside agents access to models, queries and content. It is labeled Preview, which this row scores as partly.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "The Looker-managed MCP server is a built-in integration that embeds a Model Context Protocol (MCP) server directly into the Looker platform."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: The vendor-hosted server exposes Looker data/models to outside agents and documents registered OAuth clients and OAuth 2.1 authentication. The row explicitly assigns partial scope credit to a preview MCP server, even though it is managed by Looker.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "The Looker-managed MCP server is a built-in integration that embeds a Model Context Protocol (MCP) server directly into the Looker platform."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: Looker provides a first-party managed MCP server with OAuth authentication, which earns partly because it is in public preview.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Returns an array of abbreviated dashboard objects."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/all_dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030134420/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/all_dashboards)
  - Reasoning: The Looker API's all_dashboards lists every active dashboard without an id. The MCP get_models and get_explores tools likewise enumerate models and Explores.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Returns an array of abbreviated dashboard objects."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/all_dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030134420/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/methods/Dashboard/all_dashboards)
  - Reasoning: The authenticated first-party API enumerates existing dashboards without requiring their IDs. The method excludes deleted dashboards and supports retrieving full details separately.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "get_dashboards: Return the saved dashboards that match a title or description."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: Outside agents connecting via MCP can discover existing assets using tools like get_dashboards, get_models, and get_explores.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes (preview)** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The API credentials that you generated include a client ID and a client secret."
  - Source: https://cloud.google.com/looker/docs/api-auth (checked 2026-10-26; archived https://web.archive.org/web/20261030132334/https://docs.cloud.google.com/looker/docs/api-auth)
  - Reasoning: Programmatic access uses API3 credentials (client ID and secret exchanged for an OAuth access token). The MCP server additionally documents OAuth 2.1 client registration for agents.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The API credentials that you generated include a client ID and a client secret."
  - Source: https://cloud.google.com/looker/docs/api-auth (checked 2026-10-26; archived https://web.archive.org/web/20261030132334/https://docs.cloud.google.com/looker/docs/api-auth)
  - Reasoning: The vendor documents API client ID/secret credentials and access tokens for programmatic access. Outside-agent and Data Apps setup pages explicitly use these credentials, while managed MCP also offers OAuth.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "To connect an AI agent to the Looker-managed MCP server: you need your standard Looker login credentials to authenticate during the OAuth connection process."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: Looker documents connecting AI agents to the Looker-managed MCP server using standard Looker credentials via OAuth authentication.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Prebuilt skill files: Prebuilt skill files provide the AI agent with specific context, coding standards, and project-specific instructions for writing LookML."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: The Looker extension for VS Code installs vendor-published skill files that outside coding agents load to work with LookML.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Prebuilt skill files: Prebuilt skill files provide the AI agent with specific context, coding standards, and project-specific instructions for writing LookML. The Looker extension for VS Code automatically installs and updates skill files. You can also run the Looker: Install Skills in this Workspace or Looker: Install Skills Globally Command Palette commands in your IDE to populate or update skill files."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: The vendor publishes and installs packaged skills for outside coding agents to develop LookML. This is explicit agent instruction packaging, beyond merely documenting an MCP server.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Prebuilt skill files: Prebuilt skill files provide the AI agent with specific context, coding standards, and project-specific instructions for writing LookML."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: Looker provides prebuilt skill files installed via the Looker extension for VS Code to instruct outside AI coding agents on writing and validating LookML.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes (preview)** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "As Google Cloud's next-generation command-line interface, the Gemini CLI is the recommended tool for interacting with your Looker instances from the command line."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: The documented command-line route is Google's Gemini CLI with a Looker extension that authenticates through environment-variable API credentials. That CLI is itself an agent. The MCP Toolbox binary is declared not a supported product, and Looker has no dedicated CLI with agent guidance.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "We recommend using the dedicated Looker extension for Gemini CLI with the MCP Toolbox."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: The official guide documents a dedicated Looker extension for an outside command-line AI agent and configures API client ID/secret through environment variables, providing noninteractive credential authentication. This is not credit for the unsupported Toolbox alone.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "As Google Cloud's next-generation command-line interface, the Gemini CLI is the recommended tool for interacting with your Looker instances from the command line."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: The documentation recommends the Gemini CLI AI agent with the dedicated Looker extension for interacting with Looker instances from the command line.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Partly (preview)** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Looker admins must explicitly enable the tools that AI agents are allowed to use."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: Admins control managed MCP access with an instance-wide tool allowlist and admin-only OAuth client registration. No per-user, per-group or per-workspace agent access control separate from ordinary permissions is documented.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "When the Enable all tools toggle is switched to OFF, the tools on the Model Context Protocol (MCP) page can be individually enabled or disabled, allowing Looker admins to control which tools are available to AI agents."
  - Source: https://cloud.google.com/looker/docs/admin-panel-platform-mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030132003/https://docs.cloud.google.com/looker/docs/admin-panel-platform-mcp)
  - Reasoning: Administrators enforce an instance-wide MCP tool allowlist and disabled calls are rejected. No per-user/group/workspace MCP-specific policy is documented beyond ordinary Looker permissions; the global control earns partial credit.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "When the Enable all tools toggle is switched to OFF, the tools on the Model Context Protocol (MCP) page can be individually enabled or disabled, allowing Looker admins to control which tools are available to AI agents."
  - Source: https://cloud.google.com/looker/docs/admin-panel-platform-mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030132003/https://docs.cloud.google.com/looker/docs/admin-panel-platform-mcp)
  - Reasoning: Administrators have instance-wide toggle controls to enable, disable, and govern MCP tools for outside agents, but granular per-user/group/workspace rollout controls are not documented.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly (preview)** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "However, tool calls made by AI agents consume the instance's standard administrative and query-based API quotas."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: Agent usage is bounded only by the instance's general API quotas; there is no agent-specific cap.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "However, tool calls made by AI agents consume the instance's standard administrative and query-based API quotas."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: The agent interface explicitly consumes ordinary Looker API quotas, providing a shared limit rather than a distinct agent quota or customer-configured agent spending cap.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "However, tool calls made by AI agents consume the instance's standard administrative and query-based API quotas."
  - Source: https://cloud.google.com/looker/docs/mcp (checked 2026-10-26; archived https://web.archive.org/web/20261030134347/https://docs.cloud.google.com/looker/docs/mcp)
  - Reasoning: The Looker-managed MCP server documentation states that tool calls made by AI agents consume the instance's standard administrative and query-based API quotas, so agent usage is bounded only by general instance API limits rather than an agent-specific cap, earning partly under the guidance.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Business glossaries: You can define organization-specific jargon or acronyms directly within the agent's instructions."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The built-in assistant (data agents) reads written business context before answering: glossaries, default filters and field mappings in agent instructions, plus LookML descriptions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When you create a data agent, you can add free-form instructions that define your data agent's core behavior and provide it with foundational context to consider before processing a user's prompt."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: The built-in data agent reads authored business context before answering. The page gives business-field mapping, excluded fields, filtering/grouping, and persona as examples.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Instructions: Provide context to help Conversational Analytics understand how to interact with your data and provide accurate and relevant responses."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: Users can teach data agents business context and definitions using the Instructions field before the agent answers.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create and manage data agents for LookML dashboards: Use LookML to configure and manage version-controlled data agents for LookML dashboards."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Dashboard agent instructions and the LookML descriptions the assistant reads live in Git-backed LookML files that can be diffed, reviewed and rolled back. Release notes say dashboard agents are GA.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Context that should apply to all users of an Explore should be added directly to your LookML model, as Looker Explores may be used in multiple places, including both in dashboards and in Conversational Analytics. If context should only apply to certain users, consider using LookML features such as user attributes to create customized experiences."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-best-practices (checked 2026-10-26; archived https://web.archive.org/web/20261030132820/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices)
  - Reasoning: Business context for the built-in AI can live directly in LookML model files, whose Git version-control workflow supports diffs, review, and rollback. This evidence does not depend on the inconsistent overview versus dedicated-page descriptions of custom LookML dashboard-agent instructions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When you use Conversational Analytics with a LookML dashboard, you can define and customize a data agent directly in your version-controlled LookML code."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-lookml-dashboards (checked 2026-10-26; archived https://web.archive.org/web/20261030133133/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents-lookml-dashboards)
  - Reasoning: Data agent configurations, business instructions, and context for LookML dashboards are defined in version-controlled LookML code.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Agent specialization: Rather than using the single generic interface of a conversation, you can create specialized agents for different business units, such as a Revenue Agent or an Ops Agent."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Context is attached to each agent or dashboard, not to the whole tenant, so different teams get different instructions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Agent specialization: Rather than using the single generic interface of a conversation, you can create specialized agents for different business units, such as a Revenue Agent or an Ops Agent. This allows for a more guided analysis experience, leading users toward the specific fields and filters most relevant to their needs."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Distinct built-in agents can have different business instructions and data scopes for different business units and can be shared with their audiences.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Sharing lets other users chat with your agent and its Explores."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: Data agents provide team-specific context and instructions scoped to specific Explores and shared with designated individuals or groups.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can test agent settings and instructions by starting a conversation with the agent."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: The 'Preview your agent' pane lets editors test instructions before saving. LookML dashboard agents can be tested in Development Mode before deploying.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can test agent settings and instructions by starting a conversation with the agent."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: The named Preview your agent pane on the creation/edit page tests business instructions and settings. A second documented path tests LookML dashboard-agent instructions in Development Mode before production.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can test agent settings and instructions by starting a conversation with the agent."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: The data agent configuration interface includes a Preview your agent pane to test agent settings and instructions before deployment.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Partly**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Although Thinking mode does not produce more accurate answers than Fast mode, displaying the agent's reasoning lets you observe how Conversational Analytics interprets your query, plans its analytical steps, and references the underlying LookML models."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: Thinking mode shows reasoning that references the LookML models. No page says the specific instruction, description or verified query that shaped the answer is surfaced with it.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Although Thinking mode does not produce more accurate answers than Fast mode, displaying the agent's reasoning lets you observe how Conversational Analytics interprets your query, plans its analytical steps, and references the underlying LookML models."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The built-in assistant exposes reasoning that references the underlying LookML models, providing limited visibility into semantic context. The documentation does not say it surfaces the specific instruction, description, business rule, or verified query that shaped an answer.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When you expand Show reasoning, Conversational Analytics displays a plain text explanation of the steps that it took to interpret your query."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: Thinking mode displays a plain text explanation showing the steps Conversational Analytics took to interpret the query using keywords to infer dimensions, measures, and parameters from the semantic layer, but the documentation does not state that the specific business context instruction, description, or verified query that shaped the answer is surfaced with it, earning partly under the guidance.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "For example, `description` can provide business-specific terminology or context for a field."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The assistant reuses descriptions, labels and synonyms already written in the LookML modelling layer. No page documents ingesting warehouse column comments or dbt docs.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "For BigQuery connections, if you generate a LookML project from your database, Looker will autopopulate field descriptions with the descriptions from your BigQuery column metadata, if any."
  - Source: https://cloud.google.com/looker/docs/reference/param-field-description (checked 2026-10-26; archived https://web.archive.org/web/20261030135340/https://docs.cloud.google.com/looker/docs/reference/param-field-description)
  - Reasoning: BigQuery column descriptions can flow into LookML without retyping. The Conversational Analytics overview explicitly uses LookML descriptions as field context, so the built-in AI can inherit warehouse metadata by this documented path.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For BigQuery connections, if you generate a LookML project from your database, Looker will autopopulate field descriptions with the descriptions from your BigQuery column metadata, if any."
  - Source: https://cloud.google.com/looker/docs/reference/param-field-description (checked 2026-10-26; archived https://web.archive.org/web/20261030135340/https://docs.cloud.google.com/looker/docs/reference/param-field-description)
  - Reasoning: Looker autopopulates LookML field descriptions directly from BigQuery warehouse column metadata, which Conversational Analytics consumes as schema context.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Partly**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Excluded fields: Fields that the data agent should avoid"
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: AI-specific exclusion is done through agent instructions. The enforced alternative, LookML hidden fields (which the assistant ignores), is a general setting and not specific to the AI.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Conversational Analytics ignores any fields that use the `hidden` parameter."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The built-in AI explicitly ignores fields marked hidden in LookML. This is documented AI exclusion behavior and does not rely solely on a natural-language instruction or ordinary row permissions.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Excluded fields: Fields that the data agent should avoid"
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data-agents (checked 2026-10-26; archived https://web.archive.org/web/20261030132933/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data-agents)
  - Reasoning: Instructing the agent to avoid specific fields in the agent's instructions is followed by the model but not enforced as a hard security boundary, earning partly.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Validate internally and iterate: Thoroughly test the agents with users who are familiar with the data."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-rollout (checked 2026-10-26; archived https://web.archive.org/web/20261030133208/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-rollout)
  - Reasoning: The rollout guide describes reviewing agent context before broad release, but names no owner or approver role. Agent Manager is an edit permission, not an approval step.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "In this phase, build and refine your Conversational Analytics agents, and then thoroughly test them with internal users to confirm accuracy and effectiveness."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-rollout (checked 2026-10-26; archived https://web.archive.org/web/20261030133208/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-rollout)
  - Reasoning: The rollout guide places agent-instruction refinement and internal validation before broad release, establishing a review process for the built-in agent context. It does not name a context owner or approver role; Agent Manager edit permissions alone are not approval.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The creator of the data agent can manage individual users' access to the agent by sharing the agent or managing access to the agent's underlying content."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-setup (checked 2026-10-26; archived https://web.archive.org/web/20261030133243/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-setup)
  - Reasoning: Documentation identifies the agent creator as managing the agent and its content access, but does not document a distinct approval workflow for context edits.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Partly (preview)** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: partly, preview
  - Quote: "You can also use Looker to query your analytic models that are stored in your database directly from Looker Explores and visualizations."
  - Source: https://cloud.google.com/looker/docs/analytic-models (checked 2026-10-26; archived https://web.archive.org/web/20261030132209/https://docs.cloud.google.com/looker/docs/analytic-models)
  - Reasoning: In-database analytic models (Snowflake semantic views, BigQuery Graph) can back a LookML view and Explore through sql_analytic_model_name. Conversational Analytics answers by querying Explores (conversational-analytics-overview: 'Converse in natural language with an individual Explore or with a data agent that is querying as many as five Explores'). So the built-in assistant can answer from warehouse semantic logic exposed through such an Explore. This is partial for two reasons. No page ties Conversational Analytics to analytic models directly; the link rests on two documented facts. And the warehouse logic must still be mapped into LookML dimensions and measures, for BigQuery and Snowflake only, with no dbt path. The analytic-models feature is labeled Preview.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "For BigQuery and Snowflake connections, the `sql_analytic_model_name` parameter specifies the name of an existing in-database analytic model (a BigQuery Graph or a semantic view in Snowflake) to use as the basis for a LookML view."
  - Source: https://cloud.google.com/looker/docs/reference/param-view-sql-analytic-model-name (checked 2026-10-26; archived https://web.archive.org/web/20261030135631/https://docs.cloud.google.com/looker/docs/reference/param-view-sql-analytic-model-name)
  - Reasoning: Looker can expose warehouse-native BigQuery Graph or Snowflake semantic-view logic through a LookML view and Explore; the Conversational Analytics overview documents the built-in assistant querying Explores. This establishes mediated use of warehouse definitions, rather than the assistant directly reading dbt models or warehouse definition text. The analytic-model integration is preview.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "You can also use Looker to query your analytic models that are stored in your database directly from Looker Explores and visualizations."
  - Source: https://cloud.google.com/looker/docs/analytic-models (checked 2026-10-26; archived https://web.archive.org/web/20261030132209/https://docs.cloud.google.com/looker/docs/analytic-models)
  - Reasoning: When database-managed analytic models such as Snowflake semantic views are queried via Explores, the built-in assistant queries those Explores and uses the warehouse logic.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Gemini LookML Assistant suggests dimensions, dimension groups and measures for LookML project files. That logic lives in Looker's semantic layer, not below the BI tool. No page documents the built-in assistant authoring derived tables, derived analytic models, views or other logic that lands in the warehouse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Looker supports warehouse-resident derived analytic models, and the built-in LookML Assistant creates dimensions and measures. No located page documents that assistant authoring a warehouse transform, model, or view; general LookML generation and user-authored database DDL do not establish that action.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation describes Looker's built-in assistant writing warehouse-level logic such as warehouse transforms, models, or views.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The MCP tools give outside agents connection databases, schemas, tables and columns (get_connection_tables, get_connection_table_columns), plus LookML file contents. Table and column names are not warehouse logic. No tool returns warehouse view definitions or analytic-model definitions. LookML files are Looker-side logic, which belongs to the shared-definitions rows.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documented outside-agent tools retrieve LookML files, generated Looker query SQL, and database schemas/tables/columns. No located interface documents retrieving warehouse view definitions, dbt model logic, or semantic-view definitions. Reading LookML or inferring logic from schema metadata does not settle warehouse logic access.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The Looker-managed MCP server provides tools to list connections, schemas, tables, and columns, but under the rule table and column names alone are not logic and earn nothing found, and no tool allows an outside agent to read warehouse view definitions or dbt models.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes (preview)** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Creates a new LookML file in a project."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/types/McpTools (checked 2026-10-26; archived https://web.archive.org/web/20261030135105/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/types/McpTools)
  - Reasoning: The Looker-managed MCP server exposes create_project_file and update_project_file to outside agents. A LookML file can contain a derived_analytic_model, which per the derived_analytic_model page 'defines an in-database analytic model (a BigQuery Graph or a semantic view in Snowflake) that is managed by Looker'. Looker then runs the DDL to create it in the warehouse. So an outside agent can author warehouse semantic models through Looker. This is partial because no page documents an agent doing this directly; it rests on combining the two documented features. It is also limited to BigQuery and Snowflake analytic models, which are authored as LookML. Both the managed MCP server and analytic models are labeled Preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- SQL-based derived analytic models: You define the analytic model by using SQL Data Definition Language (DDL) statements. Looker generates the analytic model within your database by executing the SQL statements that you specify."
  - Source: https://cloud.google.com/looker/docs/reference/param-view-derived-analytic-model (checked 2026-10-26; archived https://web.archive.org/web/20261030135510/https://docs.cloud.google.com/looker/docs/reference/param-view-derived-analytic-model)
  - Reasoning: An outside coding agent can author the LookML view file through the documented project-file authoring interface. This parameter specifically executes that authored DDL to create an in-warehouse BigQuery Graph or Snowflake semantic view; it is a native warehouse-model path, rather than an inference from arbitrary SQL execution.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Looker automatically translates your Explore topology, joins, dimensions, and measures into database-native analytic model DDL statements (such as node and edge tables for BigQuery Graph or tables and relationships for Snowflake semantic views) and creates and manages the model in your database."
  - Source: https://cloud.google.com/looker/docs/analytic-models (checked 2026-10-26; archived https://web.archive.org/web/20261030132209/https://docs.cloud.google.com/looker/docs/analytic-models)
  - Reasoning: An outside coding agent can author LookML derived analytic models via MCP/API that Looker automatically translates into database DDL statements creating models in the warehouse.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Yes (preview)**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: yes, preview
  - Quote: "For BigQuery and Snowflake connections, the `sql_analytic_model_name` parameter specifies the name of an existing in-database analytic model (a BigQuery Graph or a semantic view in Snowflake) to use as the basis for a LookML Explore."
  - Source: https://cloud.google.com/looker/docs/reference/param-explore-sql-analytic-model-name (checked 2026-10-26; archived https://web.archive.org/web/20261030135220/https://docs.cloud.google.com/looker/docs/reference/param-explore-sql-analytic-model-name)
  - Reasoning: Looker (preview) builds Explores on existing Snowflake semantic views or BigQuery Graphs, reusing base measures predefined in the database instead of rebuilding them. dbt is used only for CI triggers.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Database-managed analytic model: You first define and manage the analytic model directly in your database, and then you create a LookML view in Looker so that you can use Looker to query your analytic model. For information about setting up a database-managed analytic model, see the `sql_analytic_model_name` documentation page."
  - Source: https://cloud.google.com/looker/docs/analytic-models (checked 2026-10-26; archived https://web.archive.org/web/20261030132209/https://docs.cloud.google.com/looker/docs/analytic-models)
  - Reasoning: Looker can consume definitions maintained in database-managed analytic models, including Snowflake semantic views. A mapping LookML view exposes the existing model rather than requiring metric definitions to be rebuilt.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Looker integrates with in-database analytic models, such as BigQuery Graph and Snowflake semantic views, so that you can keep your semantic definitions consistent across Looker and other BI tools, applications, or workloads that interface with your data warehouse."
  - Source: https://cloud.google.com/looker/docs/analytic-models (checked 2026-10-26; archived https://web.archive.org/web/20261030132209/https://docs.cloud.google.com/looker/docs/analytic-models)
  - Reasoning: Looker can consume and query in-database analytic models maintained in the warehouse such as Snowflake semantic views.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "It uses the Looker semantic model — the LookML definitions of your data — as its source of truth to ensure that responses are accurate and consistent."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: Conversational Analytics answers by selecting LookML dimensions and measures; Looker applies the model's joins.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "It uses the Looker semantic model — the LookML definitions of your data — as its source of truth to ensure that responses are accurate and consistent."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-overview (checked 2026-10-26; archived https://web.archive.org/web/20261030133403/https://docs.cloud.google.com/looker/docs/conversational-analytics-overview)
  - Reasoning: The built-in assistant grounds answers in shared LookML metrics and dimensions; Looker composes joins and aggregations from that model.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "In Fast mode, Conversational Analytics maps your natural language query directly to the LookML parameters that are defined in the LookML models that underlie your conversation's Explores."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-data (checked 2026-10-26; archived https://web.archive.org/web/20261030132858/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-data)
  - Reasoning: The built-in assistant reads and maps questions directly to shared LookML dimensions, measures, and parameters in the underlying models.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Yes (preview)** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "This documentation page describes how to use Gemini assistance to create dimensions, dimension groups, and measures, in a LookML project."
  - Source: https://cloud.google.com/looker/docs/write-lookml-gemini (checked 2026-10-26; archived https://web.archive.org/web/20261030140421/https://docs.cloud.google.com/looker/docs/write-lookml-gemini)
  - Reasoning: The LookML Assistant (preview) writes new dimensions and measures, which the developer inserts into the shared LookML layer.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "This documentation page describes how to use Gemini assistance to create dimensions, dimension groups, and measures, in a LookML project."
  - Source: https://cloud.google.com/looker/docs/write-lookml-gemini (checked 2026-10-26; archived https://web.archive.org/web/20261030140421/https://docs.cloud.google.com/looker/docs/write-lookml-gemini)
  - Reasoning: The built-in LookML Assistant creates actual semantic definitions, with generated code inserted into project files, rather than merely documenting existing fields.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "This documentation page describes how to use Gemini assistance to create dimensions, dimension groups, and measures, in a LookML project."
  - Source: https://cloud.google.com/looker/docs/write-lookml-gemini (checked 2026-10-26; archived https://web.archive.org/web/20261030140421/https://docs.cloud.google.com/looker/docs/write-lookml-gemini)
  - Reasoning: Gemini in the Looker IDE can create dimensions, dimension groups, and measures in shared LookML project files.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Returns the contents of a LookML file."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/types/McpTools (checked 2026-10-26; archived https://web.archive.org/web/20261030135105/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/types/McpTools)
  - Reasoning: Through the managed MCP server (preview), an outside agent can read the LookML that defines each field, including descriptions, plus Explore dimension and measure listings (get_dimensions, get_measures).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- read your local LookML files"
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: The first-party Looker extension synchronizes LookML project files and documents an outside agent reading them. These files contain field descriptions and business definitions as well as dimension/measure expressions, providing more than column names.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "- `get_dimensions`: List the dimensions in a given Explore."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: Outside agents can inspect shared LookML semantic definitions via MCP tools like get_dimensions, get_measures, and get_explores.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Updates the content of a LookML file in a project."
  - Source: https://cloud.google.com/looker/docs/reference/looker-api/latest/types/McpTools (checked 2026-10-26; archived https://web.archive.org/web/20261030135105/https://docs.cloud.google.com/looker/docs/reference/looker-api/latest/types/McpTools)
  - Reasoning: MCP tools (create_project_file, update_project_file, validate_project) let outside agents edit the LookML semantic layer in Development Mode.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Once your AI agent is connected to the Looker MCP server and your LookML project is open, you can begin using natural language to write and modify code."
  - Source: https://cloud.google.com/looker/docs/ai-assisted-development-vscode (checked 2026-10-26; archived https://web.archive.org/web/20261030132038/https://docs.cloud.google.com/looker/docs/ai-assisted-development-vscode)
  - Reasoning: The vendor documents outside agents authoring and refactoring LookML shared dimensions, measures, and joins, with local changes synchronized into the server development branch.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "- `update_project_file`: Modify an existing LookML file."
  - Source: https://cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox (checked 2026-10-26; archived https://web.archive.org/web/20261030132447/https://docs.cloud.google.com/looker/docs/connect-ide-to-looker-using-mcp-toolbox)
  - Reasoning: Outside coding agents can modify shared LookML project files via MCP tools such as update_project_file and create_project_file.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Yes (preview)**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: yes, preview
  - Quote: "LookML-based derived analytic models: You define the analytic model by referencing an existing LookML Explore. Looker automatically translates your Explore topology, joins, dimensions, and measures into database-native analytic model DDL statements and creates and manages the model in your database."
  - Source: https://cloud.google.com/looker/docs/reference/param-view-derived-analytic-model (checked 2026-10-26; archived https://web.archive.org/web/20261030135510/https://docs.cloud.google.com/looker/docs/reference/param-view-derived-analytic-model)
  - Reasoning: Definitions modeled in Looker (an Explore's joins, dimensions and measures) are translated into DDL and created as a native analytic model (BigQuery Graph or Snowflake semantic view) in the warehouse. With publish_as_db_analytic_model, that model can be queried outside Looker. That is BI-tool modeling pushed down so it lives in the warehouse. The feature is labeled Preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Looker-managed, LookML-based derived analytic model: You define the analytic model by referencing an existing LookML Explore with the `model_source` parameter. Looker automatically translates your Explore topology, joins, dimensions, and measures into database-native analytic model DDL statements (such as node and edge tables for BigQuery Graph or tables and relationships for Snowflake semantic views) and creates and manages the model in your database. For information about setting up Looker-managed, LookML-based derived analytic model, see the LookML-based derived analytic models section on the `derived_analytic_model` documentation page."
  - Source: https://cloud.google.com/looker/docs/analytic-models (checked 2026-10-26; archived https://web.archive.org/web/20261030132209/https://docs.cloud.google.com/looker/docs/analytic-models)
  - Reasoning: Looker translates definitions authored in its semantic layer into an actual warehouse-native analytic model, including joins, dimensions, and measures.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Looker automatically translates your Explore topology, joins, dimensions, and measures into database-native analytic model DDL statements (such as node and edge tables for BigQuery Graph or tables and relationships for Snowflake semantic views) and creates and manages the model in your database."
  - Source: https://cloud.google.com/looker/docs/analytic-models (checked 2026-10-26; archived https://web.archive.org/web/20261030132209/https://docs.cloud.google.com/looker/docs/analytic-models)
  - Reasoning: Looker-managed LookML-based derived analytic models automatically push definitions down to the warehouse by translating LookML topology into native DDL statements.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Partly**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Incorporate custom logic: Convert important and commonly used custom fields or table calculations into LookML dimensions and measures."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-best-practices (checked 2026-10-26; archived https://web.archive.org/web/20261030132820/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices)
  - Reasoning: Promoting a one-off calculation means a developer re-expresses it in LookML. Another page states 'You cannot save or convert a custom field to a LookML field.'
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Convert important and commonly used custom fields or table calculations into LookML dimensions and measures."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-best-practices (checked 2026-10-26; archived https://web.archive.org/web/20261030132820/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices)
  - Reasoning: The documented promotion path re-expresses analysis-level calculations as maintained LookML definitions. This is developer modeling work, and the business-user feature page explicitly says a custom field cannot be directly saved or converted to a LookML field.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Convert important and commonly used custom fields or table calculations into LookML dimensions and measures."
  - Source: https://cloud.google.com/looker/docs/conversational-analytics-looker-best-practices (checked 2026-10-26; archived https://web.archive.org/web/20261030132820/https://docs.cloud.google.com/looker/docs/conversational-analytics-looker-best-practices)
  - Reasoning: Looker documents promoting ad hoc table calculations and custom fields to shared LookML definitions by having developers rewrite them in LookML.

