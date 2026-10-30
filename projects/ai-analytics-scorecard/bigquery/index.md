# BigQuery: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/bigquery/

AI Feature Score **73**, #6 of 15 (Data platform). Built-in AI 68, external AI 61, other 79. Analysis 75, Building and maintaining assets 75, Context and connections 75, Reliability and controls 68. By model: Claude Opus 5.5 69, GPT-6.1 Sol 73, Gemini 3.8 Flash 74.

## Score breakdown

Four areas, 25 points each. Shown for GPT-6.1 Sol, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 18.8 of 25
- Building and maintaining assets: 18.7 of 25
- Context and connections: 18.8 of 25
- Reliability and controls: 17.1 of 25

**Strengths**

- Answers agree with certified content
- Investigate why a number changed
- The assistant writes warehouse logic

**Not found in the docs**

- Changes can require approval
- Outside agents read chart logic
- Outside agents change metric definitions

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Conversational analytics in BigQuery lets you chat with agents about your data using natural language."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Conversational analytics, the built-in Gemini data agents, answers plain-English questions against BigQuery data without the user writing SQL. Per the page, users can ask 'without having to specify table field names'. The page carries no preview label.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Conversational analytics in BigQuery lets you chat with agents about your data using natural language."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: The built-in conversational analytics agent accepts natural-language questions and runs queries against selected data; a prebuilt dashboard or user-written SQL is unnecessary.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Conversational analytics in BigQuery lets you chat with agents about your data using natural language."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Users can ask plain-English questions about their data, and conversational analytics returns answers and working queries.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Continues a stateful conversation by sending a chat message that references an existing conversation and its associated agent context."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/overview (checked 2026-10-26)
  - Reasoning: Conversations with data agents are stateful and multi-turn: Google Cloud stores the history, so follow-up questions are interpreted in context. create-conversations.md also describes conversations as 'persisted chats' that accept multi-part questions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Gemini in BigQuery uses the context of the chat session to help answer questions in the same session."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-analyze-data (checked 2026-10-26)
  - Reasoning: Gemini retains conversational context within the session so subsequent questions can refine the earlier analysis. The conversational analytics guidance also demonstrates follow-up questions referencing previous metrics.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Continues a stateful conversation by sending a chat message that references an existing conversation and its associated agent context."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/overview (checked 2026-10-26)
  - Reasoning: Multi-turn conversations retain conversation history and context, enabling users to ask follow-up questions to refine answers.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Summary section includes the generated query followed by the query result."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: Each conversational-analytics answer has a 'How was this calculated?' panel that shows the generated query and its result, plus a 'Show thinking' view of each step the agent took.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Summary section includes the generated query followed by the query result."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: The built-in agent's How was this calculated response exposes the actual generated query and its result; Show thinking exposes analytical steps.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Summary section includes the generated query followed by the query result."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: The assistant exposes the generated SQL query and reasoning steps used to calculate the response.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Partly** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Metadata about the conversation, such as the agent and data sources used."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: The response lists the data sources (tables and views) used, but at the conversation level. No per-answer citation of specific columns or metrics is documented. Field names appear only inside the generated query, which belongs to V3.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Metadata about the conversation, such as the agent and data sources used."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: The documented chat-response metadata identifies data sources used. In the table/view conversations described on this page, those sources are specific tables or views, rather than merely a dataset; this is separate from reading their names in SQL.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- Metadata about the conversation, such as the agent and data sources used."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: The conversation response returns metadata naming the data sources (tables and views) queried, but does not provide specific column or metric citations.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To analyze a CSV using the DSA in BigQuery, follow these steps."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent (checked 2026-10-26)
  - Reasoning: The built-in Data Science Agent accepts an uploaded CSV ('Add to Gemini > Upload') and analyzes it on request, for example 'Identify trends and anomalies in this file.' The page has no preview label.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Upload a CSV file or use the `+` symbol in your prompt to search for available files."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent (checked 2026-10-26)
  - Reasoning: The built-in Data Science Agent accepts an uploaded CSV and the same page walks through asking it to identify trends and anomalies in that file.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Upload a CSV file or use the + symbol in your prompt to search for available files."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent (checked 2026-10-26)
  - Reasoning: Users can upload a local CSV file into a Colab Enterprise notebook and prompt the Data Science Agent to analyze its contents directly.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Yes** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Data cleaning. The agent can analyze raw data and suggest cleanup opportunities, such as removing outliers, filling missing or inconsistent values (data imputation), fixing duplicate data, or standardizing data formats—for example, phone numbers or addresses."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: The built-in Data Engineering Agent cleans and reshapes data. Per the same page it 'generates and organizes data pipeline code directly within Dataform repositories and workspaces', so the transformation logic remains as reviewable SQLX files.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This document explains how to clean and transform your data within BigQuery data preparations using SQL code suggestions from Gemini."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-prep-get-suggestions (checked 2026-10-26)
  - Reasoning: Gemini generates SQL transformations for cleaning and reshaping data. The preparation editor retains applied steps and their editable SQL expressions, making the transformation inspectable.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Data preparation uses Gemini in BigQuery to analyze your data and provide intelligent suggestions for cleaning, transforming, and enriching it."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-prep-introduction (checked 2026-10-26)
  - Reasoning: Data preparation uses Gemini in BigQuery to provide AI-augmented transformation suggestions, leaving inspectable SQL steps in the applied steps list.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Yes** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This feature lets you query and join regional open-source format tables (stored in Cloud Storage) directly alongside your BigQuery tables."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: The built-in Data Engineering Agent joins Iceberg tables stored in Cloud Storage with native BigQuery tables. Both are reached through BigQuery's lakehouse, and the context is pipeline building rather than an ad hoc analysis. Conversational analytics only documents joining tables in one dataset or project, which counts as one source. No join of an uploaded file with a table is documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This feature lets you query and join regional open-source format tables (stored in Cloud Storage) directly alongside your BigQuery tables."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: The built-in Data Engineering Agent generates analytical transformation pipelines that join Cloud Storage Iceberg data with BigQuery tables. These are two storage sources, rather than two tables in one database. This credit is for that documented cross-source pipeline analysis.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "An agent can query multiple Explores in a conversation that includes questions with multiple parts, or in conversations that include follow-up questions."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/known-limitations (checked 2026-10-26)
  - Reasoning: An agent can query across multiple separate Explores in multi-part questions to combine and compare multiple sources in one conversation.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Generated charts where appropriate."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: The conversational-analytics agent decides when a chart suits the answer and generates it. Per create-conversations.md, 'When appropriate for the data, the response provides images, charts, tables, and other visualizations.'
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When you ask a question that doesn't specify a results format, the Conversational Analytics API determines the format that's best suited to the specific criteria and the key terms that are provided in the question."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/ask-effective-questions (checked 2026-10-26)
  - Reasoning: The vendor-run conversational analytics agent chooses the result format from the question. BigQuery's conversation UI renders its generated charts, tables, and other visualizations.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When appropriate for the data, the response provides images, charts, tables, and other visualizations."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: The assistant automatically selects and renders appropriate charts, tables, and visualizations suited to the analytical query.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Conversational analytics supports the following AI and ML functions in response to chats with data agents and data sources, and in verified SQL queries that you create."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: The agent itself uses AI.KEY_DRIVERS in its answers; the documented sample prompt is 'Identify the key drivers for changes in trip volume between 2017 and 2018.' Per its reference page, AI.KEY_DRIVERS returns per-segment difference and contribution values. The answer's 'How was this calculated?' panel shows the query and result, so a person can check the calculation.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- `AI.KEY_DRIVERS`"
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: This item is in the inventory explicitly supported in responses to chats with built-in data agents. Its reference documents per-segment metric_interest, metric_reference, difference, and contribution=ABS(difference), with formulas and output tables, so the agent can provide checkable contributions. The generic API limitations page restricts some complicated visualizations; the BigQuery-specific page explicitly documents this function for agent answers.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Conversational analytics supports the following AI and ML functions in response to chats with data agents and data sources, and in verified SQL queries that you create."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Conversational analytics supports AI.KEY_DRIVERS in response to chats, breaking down metric changes across segments and providing checkable relative unexpected difference and contribution metrics.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Partly** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When you ask high-level questions about data to an agent, in a conversation, or in a verified query using keywords, the agent generates SQL in response to your questions."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: The same page lists AI.FORECAST among functions the agent uses, with the sample prompt 'Predict the number of trips for the next month.' So the agent produces the forecast, and the generated query is visible. However, no page says the answer states the forecast's horizon, inputs and assumptions. Also, the Conversational Analytics API known-limitations page (Preview) says the API 'doesn't yet support' prediction and forecasting visualizations.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- "Using SQL, forecast the future traffic of my website for the next month based on `bigquery-public-data.google_analytics_sample.ga_sessions_*`. Then, plot the historical and forecasted values.""
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent (checked 2026-10-26)
  - Reasoning: The built-in Data Science Agent generates a forecast with a named input table and a one-month horizon, leaving generated code in the notebook. The documentation does not establish that forecast assumptions are surfaced with the result. This verdict relies on the Data Science Agent, not a standalone SQL forecasting function or the conflicting generic conversational-API forecasting limitation.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Conversational analytics supports the following AI and ML functions in response to chats with data agents and data sources, and in verified SQL queries that you create."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Conversational analytics runs forecasting queries using AI.FORECAST in response to user chats, outputting predictions and prediction intervals without detailing underlying model assumptions.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No BigQuery page documents the built-in assistant (conversational analytics data agents, Gemini in BigQuery, data canvas or the Data Science Agent) defining several what-if scenarios with stated assumptions and comparing calculated results. The analytic functions listed for conversational analytics (AI.FORECAST, AI.CAUSAL_EFFECT, AI.KEY_DRIVERS and others) cover forecasting, causal impact and drivers, not user-defined what-if scenarios.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The assistant supports forecasts, predictive modeling and causal-effect analysis, but no located page documents it calculating what-if outcomes with changed assumptions, either singly or as multiple comparable scenarios. A counterfactual baseline in AI.CAUSAL_EFFECT does not establish user-defined what-if scenarios.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: BigQuery documentation does not describe the AI calculating and comparing multiple what-if scenarios with explicitly stated changed assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page says a conversational analytics, data canvas or Gemini answer shows the age or last-refresh time of the data it used. The response features listed for conversations are text/code/images, charts, reasoning and metadata about the agent and data sources used; data freshness is not mentioned. The data canvas 'last modified' date describes the canvas, not the data behind an answer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No located documentation attaches data age, last refresh time or a staleness indicator to a built-in AI answer or to the particular source used with that answer. Materialized-view refresh metadata and pipeline freshness monitoring are separate warehouse administration features.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: BigQuery documentation documents data freshness and staleness for materialized views and change data capture, but conversational analytics answers are not documented exposing data freshness or staleness to the user.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can prompt Gemini in BigQuery to explain a SQL query in natural language."
  - Source: https://docs.cloud.google.com/bigquery/docs/write-sql-gemini (checked 2026-10-26)
  - Reasoning: Gemini reads and explains SQL in the query editor. No assistant is documented reading the calculation behind a chart in BI content.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Explanation. You can prompt Gemini in BigQuery to explain a SQL query using natural language."
  - Source: https://docs.cloud.google.com/bigquery/docs/write-sql-gemini (checked 2026-10-26)
  - Reasoning: Gemini reads and explains SQL in BigQuery's own query editor. This establishes exactly the prescribed editor-only partial scope, not documented reading of a calculation behind existing published BI content.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- Explanation. You can prompt Gemini in BigQuery to explain a SQL query using natural language."
  - Source: https://docs.cloud.google.com/bigquery/docs/write-sql-gemini (checked 2026-10-26)
  - Reasoning: Gemini reads and explains SQL queries in the BigQuery query editor using natural language, earning partly.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can generate SQL in the query editor by describing the query that you want in a comment."
  - Source: https://docs.cloud.google.com/bigquery/docs/write-sql-gemini (checked 2026-10-26)
  - Reasoning: Gemini writes SQL in the query editor, which counts as partly. No assistant is documented writing the calculation behind a chart in BI content.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "You can create cell types manually, or you can use the Colab Data Science Agent or Gemini to generate cells for you."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-apps (checked 2026-10-26)
  - Reasoning: The Data Apps page explicitly ties agent-generated SQL/code/visualization cells to the underlying published app. The built-in agent writes the analytical code feeding charts in persistent viewer-facing Data Apps, which qualify as BI content under the sheet's published-notebook exception.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- Auto-generation. You can prompt Gemini in BigQuery using a natural language comment in the BigQuery query editor to generate a SQL query."
  - Source: https://docs.cloud.google.com/bigquery/docs/write-sql-gemini (checked 2026-10-26)
  - Reasoning: Gemini can generate or edit SQL query formulas in the query editor from natural language comments, earning partly.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Not found** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The BigQuery BI content I found is Data Apps, which are notebooks published to Data Studio. No page documents an API, CLI, MCP tool or skill that returns the calculation behind a specific chart or table in a Data App, or even exports the whole app for parsing. Saved queries and data canvases are analyst work, so they do not count here.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No located API, CLI, MCP or agent-skill documentation exposes the query or formula behind a particular chart in saved BI content. Data Apps explicitly derive components from notebook cells, but their documented access is through the UI; generic notebook downloads, warehouse queries and repository files do not document an outside-agent retrieval route for that BI object.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: BigQuery documentation provides no API, CLI, or MCP endpoint allowing an outside coding agent to read the calculation behind a specific chart or table in BI content.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Not found** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents an outside agent changing the calculation behind a chart or table in BigQuery BI content (Data Apps), either per chart or by replacing the whole app, through an API, CLI, MCP or skill. Data Apps are edited through the source notebook in the console and republished with 'Publish changes'.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No located documentation gives an outside agent an interface for changing a specific saved BI chart's calculation or replacing its published app definition. MCP SQL writes change warehouse objects, while the Data Apps page describes editing source notebooks and publishing through the UI. Neither establishes the required outside-agent write to a chart in BI content.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: BigQuery documentation provides no API, CLI, or MCP endpoint allowing an outside coding agent to write or modify the calculation behind a specific chart or table in BI content.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Partly (preview)** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "The assistant works with new or existing data canvases."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-canvas (checked 2026-10-26)
  - Reasoning: The data canvas Gemini assistant (Preview) works from existing canvases. Data canvas is analyst work ('isn't intended for direct use by business users'), not BI content.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The Data Science Agent is a Gemini-powered assistant that can write, explain, and troubleshoot code directly within your notebook."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-agent-tutorial (checked 2026-10-26)
  - Reasoning: The built-in agent can explain and work with existing notebook code; its usage guide begins with creating or opening a notebook. This is analyst work. No direct opening and understanding of an existing published Data App was established.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "- Code completion (Preview). Gemini provides contextually appropriate recommendations that are based on content in the notebook."
  - Source: https://docs.cloud.google.com/bigquery/docs/write-sql-gemini (checked 2026-10-26)
  - Reasoning: Gemini inspects existing code and content in Colab Enterprise notebook cells to provide context-aware recommendations.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "As the plan runs, generated code and text appear in the notebook."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent (checked 2026-10-26)
  - Reasoning: The Data Science Agent builds persistent notebook content, and the canvas assistant (Preview) builds canvas nodes. Both are analyst work, not governed BI content.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "You can create cell types manually, or you can use the Colab Data Science Agent or Gemini to generate cells for you."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-apps (checked 2026-10-26)
  - Reasoning: The built-in agent directly creates SQL/code/visualization cells that the documented Data Apps feature publishes as persistent interactive BI content. The same page documents app ownership via creator credentials, editor/viewer sharing, runtime-backed queries, and republishing changes. Human publication is part of the documented workflow.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- Auto-generation. You can prompt Gemini in BigQuery using a natural language comment in the BigQuery query editor to generate a SQL query."
  - Source: https://docs.cloud.google.com/bigquery/docs/write-sql-gemini (checked 2026-10-26)
  - Reasoning: Gemini generates and edits SQL query statements and notebook code cells from natural language comments, earning partly.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To manage BigQuery Studio saved queries by using the BigQuery API:"
  - Source: https://docs.cloud.google.com/bigquery/docs/manage-saved-queries (checked 2026-10-26)
  - Reasoning: The saved-query management page documents API access to BigQuery Studio saved queries, which are Dataform-backed code assets with the Code Owner role and readFile permissions listed. An outside agent can therefore read a saved query's contents through the vendor's API. A saved query is analyst work (SQL people edit), not BI content, so this is partly. No API read of Data Apps (the published BI content) is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- To manage BigQuery Studio saved queries by using the BigQuery API: `dataform.locations.*, dataform.repositories.*, dataform.workspaces.*, resourcemanager.projects.get, resourcemanager.projects.list`"
  - Source: https://docs.cloud.google.com/bigquery/docs/manage-saved-queries (checked 2026-10-26)
  - Reasoning: The saved-query page explicitly documents programmatic management, including repository/workspace readFile permissions and Code Viewer access. An outside agent can read the saved SQL code asset, but that is analyst work rather than a published chart/dashboard/app.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Saved queries are BigQuery Studio code assets powered by Dataform."
  - Source: https://docs.cloud.google.com/bigquery/docs/manage-saved-queries (checked 2026-10-26)
  - Reasoning: The documentation specifies managing BigQuery Studio saved queries via API using the Code Viewer or Code Owner role (which include Dataform readFile permissions), allowing an outside agent to read saved queries programmatically. However, saved queries are analyst code assets rather than governed BI content.

### D_OW: Can an outside coding agent build BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To manage BigQuery Studio saved queries by using the BigQuery API:"
  - Source: https://docs.cloud.google.com/bigquery/docs/manage-saved-queries (checked 2026-10-26)
  - Reasoning: The vendor documents managing BigQuery Studio saved queries through the API, with the Code Owner role and dataform.repositories.* and dataform.workspaces.* permissions. An outside agent can therefore create and edit persistent saved SQL assets. These are analyst work, not BI content, so this is partly. No page documents creating or publishing a Data App or other BI content programmatically.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- To manage BigQuery Studio saved queries by using the BigQuery API: `dataform.locations.*, dataform.repositories.*, dataform.workspaces.*, resourcemanager.projects.get, resourcemanager.projects.list`"
  - Source: https://docs.cloud.google.com/bigquery/docs/manage-saved-queries (checked 2026-10-26)
  - Reasoning: The documented saved-query API permissions cover creating and editing Dataform-backed SQL code assets; the creation page names repositories.create and Code Creator. This permits outside-authored persistent analyst work, but no programmatic publication of governed BI content was established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Saved queries are BigQuery Studio code assets powered by Dataform."
  - Source: https://docs.cloud.google.com/bigquery/docs/manage-saved-queries (checked 2026-10-26)
  - Reasoning: BigQuery Studio saved queries can be created and managed programmatically via the BigQuery and Dataform APIs using the Code Owner role and dataform.repositories/workspaces permissions. However, saved queries represent analyst code assets rather than governed BI content.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Partly (preview)**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: partly, preview
  - Quote: "All viewers see the rendered Data Apps based on the author's access."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-apps (checked 2026-10-26)
  - Reasoning: Data Apps (Preview), whose cells can be generated by the Data Science Agent, can be shared with named people and groups. Viewers see the author's results, not results evaluated under their own permissions.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "All viewers see the rendered Data Apps based on the author's access."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-apps (checked 2026-10-26)
  - Reasoning: Agent-created cells can be published as Data Apps and shared with named people/groups, but the page explicitly says all viewers see the author's rendered results. Results are not evaluated with each viewer's source-data permissions.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "All viewers see the rendered Data Apps based on the author's access."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-apps (checked 2026-10-26)
  - Reasoning: Data Apps generated from notebooks can be shared with viewers and editors via Data Studio sharing permissions.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Users with the `dataform.repositories.list` permission—which is included in standard BigQuery roles such as BigQuery Job User, BigQuery Studio User, and BigQuery User—can see all code assets in the Explorer panel of the Google Cloud project, regardless of whether they created these assets or these assets were shared with them."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-canvas (checked 2026-10-26)
  - Reasoning: Users with permission can browse colleagues' code assets (canvases, notebooks) in Explorer, including AI-built canvases, and search them in Knowledge Catalog. The Agent Catalog lists agents shared by others.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Users with the `dataform.repositories.list` permission—which is included in standard BigQuery roles such as BigQuery Job User, BigQuery Studio User, and BigQuery User—can see all code assets in the Explorer panel of the Google Cloud project, regardless of whether they created these assets or these assets were shared with them."
  - Source: https://docs.cloud.google.com/bigquery/docs/work-with-saved-queries (checked 2026-10-26)
  - Reasoning: The project-wide Explorer lists colleagues' analytical code assets, and notebook management documents search/filter and all-notebook views. This includes persisted AI-created notebook and query work, subject to the documented metadata-listing permissions; opening content has its own IAM requirements.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- A list of agents that other people create and share with you."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Users can discover shared data agents created by colleagues through the Agent catalog tab in the Google Cloud console.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Yes** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Shared by others in your organization: Agents that others create and share with you."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: A data agent is configured once with knowledge sources, instructions, glossary and verified queries. It is published and shared with principals through IAM roles (Data Agent User, Editor, Viewer), and colleagues then chat with it from the Agent Catalog.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Data agents consist of one or more knowledge sources, and a set of instructions specific to a use case for processing that data."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: A reusable data agent stores selected sources, custom instructions, metadata, and verified queries. Create data agents documents publishing it and sharing named User, Editor, and Viewer roles; source access remains the colleague's own.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- A list of agents that other people create and share with you."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: The Agent catalog presents agents created and shared by other users across the project for collaborative discovery and use.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Partly (preview)** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Schedule a query by providing the following details in your prompt:"
  - Source: https://docs.cloud.google.com/bigquery/docs/use-cloud-assist (checked 2026-10-26)
  - Reasoning: Gemini Cloud Assist (Preview) can set up a scheduled query from a prompt. The scheduled query then runs as an ordinary schedule that the AI does not run, which per the row makes this partly. No agent rerunning an analysis and delivering a fresh result is documented.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Schedule the query open in the editor to run daily."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-cloud-assist (checked 2026-10-26)
  - Reasoning: Gemini Cloud Assist can set up a recurring query and a destination for results. The recurring execution is an ordinary scheduled query, rather than a documented rerun of the agent itself, so this meets the prescribed partial scope.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Alternatively, you can use Gemini Cloud Assist to schedule a query by providing the scheduling details in your prompt."
  - Source: https://docs.cloud.google.com/bigquery/docs/scheduling-queries (checked 2026-10-26)
  - Reasoning: Gemini Cloud Assist (Preview) can configure and set up a scheduled query from a natural language prompt. However, once scheduled, the query runs as an ordinary scheduled query rather than being executed or delivered by the AI agent itself.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The Data Engineering Agent cannot execute pipelines. You must review and run or schedule pipelines."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines (checked 2026-10-26)
  - Reasoning: The built-in agents generate code, pipelines and notebook cells that a person must then run. Conversational analytics 'can't perform write operations and can't run DML queries.' No built-in agent is documented sending notifications, calling webhooks, or writing to a destination on its own.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "While the agent won't actually create the UDF, you can create the UDF by running the data pipeline."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines (checked 2026-10-26)
  - Reasoning: The built-in Data Engineering Agent generates warehouse-writing pipeline code, including DDL, but a person must run the pipeline. No autonomous notification, webhook, or other external side effect is established by this route.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The Data Engineering Agent cannot execute pipelines. You must review and run or schedule pipelines."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines (checked 2026-10-26)
  - Reasoning: The Data Engineering Agent can generate and modify transformation logic within Dataform repositories, but cannot execute pipelines autonomously without human intervention.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The agent might also generate an agent plan automatically and request your approval."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: When a prompt is ambiguous, the Data Engineering Agent stops and asks the user in the conversation to approve a plan. That is a clarifying pause inside the session. No hand-off to another person, notification or review queue is documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If the agent encounters issues with its approach, it provides reasoning about how to correct the issue and prompts you to accept the altered code."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-agent-tutorial (checked 2026-10-26)
  - Reasoning: When the built-in Data Science Agent encounters an execution problem, it explains the proposed correction and pauses for the person to accept altered code. The tutorial describes waiting-for-user-input cells and Accept and run, providing a documented hand-off awaiting a decision.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "A data agent that uses a Looker data source may ask follow-up questions to clarify any ambiguities in the original query."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/ask-effective-questions (checked 2026-10-26)
  - Reasoning: Data agents can ask clarifying questions when encountering ambiguous user inputs or similarly named fields, but do not provide an escalation mechanism to a human reviewer.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Partly** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Seamless orchestration: Ask a general analytical question (for example, "How is our sales pipeline trending in the last 3 months?") and Gemini Enterprise automatically routes the query to the relevant data agent."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Once a BigQuery data agent is registered, Gemini Enterprise delegates analytical questions to it, and the data agent carries its own knowledge sources and IAM permissions. However, the customer cannot configure which agent delegates which bounded task, and the routing is automatic. A2A orchestration in the API docs is something customers build themselves.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Seamless orchestration: Ask a general analytical question (for example, "How is our sales pipeline trending in the last 3 months?") and Gemini Enterprise automatically routes the query to the relevant data agent."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Publishing and registering a named BigQuery data agent lets Gemini Enterprise route analytical questions to that agent, whose knowledge sources and IAM roles are configured in BigQuery. This documents automatic orchestration, but not a customer-configured delegation from one named built-in analytical agent to another with a bounded task and explicit tool permissions.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Ask a general analytical question (for example, "How is our sales pipeline trending in the last 3 months?") and Gemini Enterprise automatically routes the query to the relevant data agent."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: When a BigQuery data agent is registered in Gemini Enterprise, Gemini Enterprise automatically delegates and routes incoming analytical questions to the data agent. However, the customer cannot configure which agent delegates which bounded analytical task to another named agent, as routing is automatic orchestration or directed via @mention.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Every BigQuery MCP page describes BigQuery as an MCP server (BigQuery, migration, transfer, MCP Toolbox) for outside agents, which is the opposite direction. No page documents attaching external tools or MCP servers to the built-in assistant (data agents, Gemini in BigQuery, Data Science Agent or Data Engineering Agent). Publishing a data agent into Gemini Enterprise makes the BigQuery agent a tool for another product; it does not attach outside capabilities to BigQuery's AI.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documented MCP connections attach outside clients such as Claude, Antigravity and Gemini CLI to BigQuery. No located page documents attaching a customer-configured external MCP server or external tool to BigQuery's built-in assistant. General-purpose remote SQL functions do not establish assistant tool connections.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While BigQuery documentation describes BigQuery offering remote MCP servers for external clients to connect to BigQuery, it does not document the built-in assistant connecting out to user-configured external MCP servers or tools.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly (preview)** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Understand the downstream consequences of modifying or dropping an asset."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-cloud-assist (checked 2026-10-26)
  - Reasoning: Gemini Cloud Assist (Preview) uses lineage to find assets affected by a change, including downstream 'Looker dashboards'. It is not documented repairing the affected content or flagging it to an owner, so only the finding half of the row is covered.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Search for specific types of connected assets (such as BigQuery views or Looker dashboards) or assets that match a specific naming pattern."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-cloud-assist (checked 2026-10-26)
  - Reasoning: Gemini Cloud Assist in BigQuery can use lineage to identify downstream BI assets, explicitly including Looker dashboards, while evaluating the impact of modifying or dropping a warehouse asset. This establishes the finding portion only; the page does not document repairing those dashboards or flagging them to an owner.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Search for specific types of connected assets (such as BigQuery views or Looker dashboards) or assets that match a specific naming pattern."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-cloud-assist (checked 2026-10-26)
  - Reasoning: Gemini Cloud Assist (Preview) uses data lineage to evaluate downstream impact and identify assets affected by a change, including downstream Looker dashboards. However, the documentation does not show the AI repairing the affected BI content or flagging it for an asset owner, covering only the impact analysis half.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Not found** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Data Apps (Preview) are BigQuery's generated-app surface, and the page says the integrated agent can generate their cells. No page says the Data Science Agent or Gemini reads an existing Data App's code, layout or rendered output. The agent docs describe it working on notebook data and prompts only.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: BigQuery documents agent-generated notebook cells and widgets that can become Data Apps. It also documents explaining notebook code. No located page says the built-in assistant reads an existing Data App as an app, including its definition, layout or rendered output; generating new cells alone does not establish that reading capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: BigQuery documentation does not show the built-in assistant reading a generated app (its code, layout, or rendered output).

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Partly (preview)** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "To save time, use the integrated agent to generate the code for you."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-apps (checked 2026-10-26)
  - Reasoning: In Data Apps (Preview), the integrated agent generates the notebook cells and widgets an app is built from, but a person builds and publishes the app. The app runs on the author's credentials rather than governed per-viewer access.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Flexibility. Integrate any Python visualization library or widget to build custom, complex Data Apps with ease. To save time, use the integrated agent to generate the code for you."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-apps (checked 2026-10-26)
  - Reasoning: BigQuery provides a first-class Data Apps publishing feature with an integrated agent to generate app code/cells. Apps persist independently of source notebook deletion, use live notebook runtimes and BigQuery data, and have named editor/viewer permissions. This is the documented product app surface, rather than a customer-built web framework.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "To save time, use the integrated agent to generate the code for you."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-apps (checked 2026-10-26)
  - Reasoning: Users can transform notebook analyses into interactive Data Apps and use the integrated agent to generate application code.

### A_OR: Can an outside coding agent read a generated app?

**Result: Not found** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents an API, CLI, MCP tool or skill that lets a script or outside agent pull a Data App's definition. The Data Apps page covers only console and Data Studio steps for creating, publishing, sharing and deleting apps.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Data Apps are a documented first-party app surface, but no located API, CLI, MCP or skill exposes an existing app definition to an outside coding agent. The app page offers browser-based editing and report download; generic notebook and repository file operations are not documented as retrieving a Data App definition.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: BigQuery documentation does not document any API, CLI, or MCP interface that allows an outside coding agent to read the definition or layout of a generated Data App.

### A_OW: Can an outside coding agent build a generated app?

**Result: Not found** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents an outside agent creating or publishing a Data App through an API, CLI, MCP server or skill. Publishing is documented only through the BigQuery Studio console (the Data app view, then Publish) and Data Studio.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No located vendor API, CLI, MCP or skill documents an outside coding agent creating or deploying a first-class Data App. The documented Data App path creates notebook components and publishes them through the BigQuery Studio UI. Generic SQL execution, notebook code and customer-written application frameworks do not establish an outside-agent app-building interface.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: BigQuery documentation does not document any API, CLI, or MCP interface allowing an outside coding agent to build or deploy a generated Data App.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Yes** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To evaluate the effectiveness of a data pipeline generated by the Data Engineering Agent, use the EvalBench tool."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: Google documents EvalBench for repeatable multi-turn evaluation suites with LLM-backed and deterministic scorers against the built-in Data Engineering Agent. It covers that agent's pipeline output, not conversational-analytics answers, and is an open-source framework run separately. For data agents only an interactive Preview test pane exists.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "EvalBench acts as an automated unit-testing suite, letting you set up multi-turn scenarios, add LLM-backed and deterministic scorers, and manage the lifecycle of your Dataform pipelines."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: The vendor documents EvalBench specifically for its built-in Data Engineering Agent. Saved multi-turn cases, LLM-backed and deterministic scorers, sandbox runs, and the ten-case regression suite test whether the agent generates correct pipeline code.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Always pair cloud compilation and execution verifiers (dataform_cloud_compile, dataform_cloud_run) with LLM-based binary rubrics to identify both syntactical or runtime errors and high-level logic flaws."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: The Data Engineering Agent documentation defines evaluation benchmarks combining cloud compilation and execution verifiers with LLM rubrics to systematically test agent accuracy.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: Partly** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "In the Model section, choose which types of models are available to users in a conversation with the agent."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Data agent authors can choose model types (Preview vs Generally Available), and the Data Science Agent lets users pick a model (default 'Gemini 3.0 Flash'). Nothing documents that the choice stays fixed on a version. gemini-security-privacy-compliance.md states 'Google manages the specific models used to generate Gemini in BigQuery responses.'
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Choose your model. The default model is Gemini 3.0 Flash."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent (checked 2026-10-26)
  - Reasoning: The Data Science Agent offers customer model selection and names a default. The documentation does not promise an immutable model revision pinned until changed; conversational agents additionally select model categories rather than a fixed revision.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- Fast (default): best for most questions."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: Users can select reasoning modes (Fast vs Thinking) when submitting questions, but cannot pin a specific frozen model snapshot version.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Messages in the conversation, including user prompts and agent responses"
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/retention-deletion (checked 2026-10-26)
  - Reasoning: Conversations keep prompts and agent responses. Each answer exposes its generated query, and the agent's context is stored. No snapshot of the data or of the model version is documented, so this is kept chat history plus query.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Results from questions in a conversation persist even if the underlying data sources are deleted."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: Conversations retain prompts, answers, generated SQL, and results, including after source deletion. The corpus does not establish preserving the model revision, complete configuration, and input data snapshot together for reproducing an answer.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Results from questions in a conversation persist even if the underlying data sources are deleted."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: Conversation question results persist across sessions within the stored conversation history, though new executions of generated queries are not statically cached.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Partly** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If the response is not what you expect, change the settings in the Editor section to refine the data agent configuration until you get satisfactory responses."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: The data agent page documents a person reviewing a data agent's answer in Preview and correcting the agent's configuration (descriptions, verified queries, instructions) so that later answers change. The page does not say how far the correction reaches (it describes sharing published agents, but never states which users' later answers a correction affects), so this is partly. Verified queries on their own are context authored in advance, not a correction to an answer, which is why I did not use them for yes.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "If the response is not what you expect, change the settings in the Editor section to refine the data agent configuration until you get satisfactory responses."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: The built-in data-agent preview workflow explicitly lets a person inspect a bad answer and correct the agent configuration until subsequent responses improve. The correction is made through agent settings, such as descriptions, verified queries or instructions. The documentation does not explicitly state the user or team reach of answer corrections.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If an agent can use a verified query to answer a question that you ask it, to ensure a trustworthy answer, the agent invokes the query exactly as written."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Data agents use pre-authored verified queries to guarantee correct and trustworthy answers for matched questions.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Yes** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If an agent can use a verified query to answer a question that you ask it, to ensure a trustworthy answer, the agent invokes the query exactly as written."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Verified queries are curated, certified answers. When a question matches one, the agent is bound to run it exactly as written, and matching responses 'are always marked as verified', so answers that come from certified content are flagged.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- If an agent can use a verified query to answer a question that you ask it, to ensure a trustworthy answer, the agent invokes the query exactly as written."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: For matching questions, the built-in conversational agent must execute the maintained verified query exactly as written. This is a documented binding to governed query logic, beyond simply a badge; unmatched questions use verified queries only as reference.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If an agent can use a verified query to answer a question that you ask it, to ensure a trustworthy answer, the agent invokes the query exactly as written."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: When an incoming user question matches an existing verified query, the agent prioritizes and invokes the certified query exactly as authored.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Yes** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If the estimated bytes to be scanned exceed the `big_query_max_billed_bytes` value, the query fails without incurring a charge, and the agent returns an error message."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/manage-costs (checked 2026-10-26)
  - Reasoning: A per-agent maximum-bytes-billed limit blocks agent queries that would exceed it, and project or user daily quotas act as a 'hard stop'. Conversational analytics is billed at BigQuery compute pricing, so these caps limit what the agent spends. The page notes the controls apply to on-demand billing.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "If the estimated bytes to be scanned exceed the `big_query_max_billed_bytes` value, the query fails without incurring a charge, and the agent returns an error message."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/manage-costs (checked 2026-10-26)
  - Reasoning: Conversational-agent on-demand query charges can be blocked using maximum billed bytes and daily project/user quotas. This establishes a hard cap on query compute; it does not establish a cap covering all built-in model/token charges or reservation-based usage.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This limit creates a hard stop that prevents the project from exceeding the specified daily cost."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/manage-costs (checked 2026-10-26)
  - Reasoning: Administrators can configure daily spending limits and quotas for projects and users, as well as per-query byte limits on agents.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Yes (preview)** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Agent metrics include agent usage, model calls, tool usage, health, latency, and token usage."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Agent observability (Preview) reports 'Hourly answer latency' and per-agent metrics in Cloud Monitoring, plus traces for each conversation turn. Customers can therefore measure the AI's response time on their own workload, broken down by agent.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "You can monitor the performance, adoption, latency, and costs of your data agents and their conversations by using Google Cloud Observability in BigQuery."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: The built-in agent observability feature measures customer conversations and agent latency through Cloud Monitoring and traces; it includes hourly answer latency and inspection of model/tool calls.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Agent metrics include agent usage, model calls, tool usage, health, latency, and token usage."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: BigQuery monitors agent operations and exposes latency metrics alongside model calls and tool usage in Cloud Monitoring dashboards and trace explorer.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Partly** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Filter your billing report by label to understand agent costs."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Agent-run jobs carry data-agent-id and conversation-id labels, so consumption can be split by agent. Per-user or per-team AI consumption is not explicitly documented. The manage-costs page also says 'Tracking costs for individual agents by using BigQuery labels isn't supported', which conflicts.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "BigQuery jobs run by a data agent include specific labels."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: The documented conversational-agent labels identify AI-generated query jobs. INFORMATION_SCHEMA.JOBS retains user_email, bytes billed, and slot milliseconds, enabling user-attributed agent query consumption. The documentation does not establish per-user or per-team attribution of model-token usage, so this is limited to analytical compute.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Filter your billing report by label to understand agent costs."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Administrators can filter Cloud Billing reports by agent labels to attribute and analyze compute and token spending by agent and workload.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Yes** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "BigQuery jobs run by a data agent include specific labels."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Agent-run query jobs are labeled, so the queries and the tables they touch can be told apart and audited ('Audit agent activity'). Agents run under the asking user's permissions. However, gemini-security-privacy-compliance.md says 'Cloud logging audit logs are not available for Gemini in BigQuery user prompts and responses', so prompts are not logged.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- `ca-bq-job: true` indicates that your job was run using conversational analytics."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Built-in conversational queries have an explicit assistant label, plus agent and conversation IDs. The documented JOBS view records user identity, SQL, and referenced/destination tables, so assistant query activity is distinguishable and attributable. This does not claim prompt/response Cloud Logging, which the security page explicitly excludes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Audit agent activity."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Agent activity is audited via system-generated labels attached to jobs (ca-bq-job, data-agent-id, conversation-id) that are queryable in INFORMATION_SCHEMA.JOBS and Cloud Logging.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To turn off Gemini in BigQuery for a specific user, an administrator needs to revoke the Gemini for Google Cloud User (`roles/cloudaicompanion.user`) role for that user."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent (checked 2026-10-26)
  - Reasoning: Admins turn AI features on or off per user through IAM roles, per project through the API, and per feature through Gemini settings. Data agent and conversation roles add finer control over the agents.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To prevent a user from using Gemini in BigQuery features, revoke the specific `cloudaicompanion` IAM permissions that grant access to these capabilities, as detailed in Enable necessary APIs and grant roles."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-set-up (checked 2026-10-26)
  - Reasoning: Administrators can revoke the AI-specific cloudaicompanion permissions for selected users; the Data Science Agent page also documents revoking a specific user's Gemini role.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To turn off Gemini in BigQuery for a specific user, an administrator needs to revoke the Gemini for Google Cloud User (roles/cloudaicompanion.user) role for that user."
  - Source: https://docs.cloud.google.com/bigquery/docs/colab-data-science-agent (checked 2026-10-26)
  - Reasoning: Administrators can selectively roll out or disable Gemini AI capabilities for individual users by granting or revoking the Gemini for Google Cloud User IAM role.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To save your changes without publishing, click Save."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: In a data agent, Gemini suggests table and field descriptions and verified queries, which the author accepts into the agent's configuration. Saved edits stay unpublished (draft agents go under 'My draft agents' and cannot be shared) until the same author clicks Publish. That makes this a draft the same user later publishes, which this row scores partly. No page routes the assistant's change to a separate named approver or role. The Data Engineering Agent's 'Review ... and then click Apply' is the requester accepting a suggestion to their own work, which does not count. Conversational analytics itself 'can't perform write operations'.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- To place the data agent in draft mode, which you can re-edit later, click arrow_back Go back to return to the Agent Catalog page. Because your agent is now in draft mode, it appears in the My draft agents section on the Agent Catalog tab."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Gemini-generated descriptions and verified queries can be saved in a draft agent before the same author publishes it. This documents a draft/self-publication step rather than a separate approver for AI changes, that limits the verdict to partly.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "After you've made changes, click Save draft."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: Agent configurations can be saved as a draft before being published by the author, but independent human approval by a separate named reviewer or role is not documented, earning partly.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "For most Gemini in BigQuery features, the Gemini processing location can be controlled by an administrator by using the Global Default Location setting at the project or organization level."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-locations (checked 2026-10-26)
  - Reasoning: Customers can choose a processing jurisdiction (US or EU) for most features, and data agents can have a location selected. Inference still runs on Google-managed models, not in the customer's tenant. Cloud Assist chat is global only.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "For most Gemini in BigQuery features, the Gemini processing location can be controlled by an administrator by using the Global Default Location setting at the project or organization level."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-locations (checked 2026-10-26)
  - Reasoning: Customers can choose default/query locations that constrain supported Gemini inference to US/EU jurisdictions, and conversational agents can select a supported location. This is a regional choice for vendor-hosted inference with feature limitations, not customer-hosted inference or control over all AI surfaces.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Customer-managed encryption keys (CMEK): Describes how to use your own encryption keys in Cloud Key Management Service to protect data agents and conversations."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/overview (checked 2026-10-26)
  - Reasoning: Customers can use customer-managed encryption keys (CMEK) via Cloud Key Management Service to encrypt and protect data agents and conversations.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When a user interacts with an agent, the API queries the connected data source by using that user's credentials."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/access-control (checked 2026-10-26)
  - Reasoning: Data agents answer under the asking user's identity. create-conversations.md states that column-level access control, row-level access policies and data masking apply to the user chatting with the agent.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Agents act on your behalf and uses your permissions."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: The built-in conversational agent runs with the asking user's permissions. Create conversations explicitly requires the user's row-level policy grants, column-level Fine-Grained Reader role, and masking permissions; a shared agent does not grant extra data access.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If a data table uses row-level access control, you must be granted access through the role-level access policy on that table."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: Conversational analytics acts on behalf of the user and strictly enforces row-level security, column-level security, and data masking policies configured on source tables.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Yes**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When a user uses Gemini in BigQuery, a prompt and its relevant context are sent to Google's large language models (LLMs) for processing."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-security-privacy-compliance (checked 2026-10-26)
  - Reasoning: The page names where data goes: Gemini LLMs, plus context held in Knowledge Catalog and Spanner. It says what is sent: the prompt, metadata, schema, sample data and job history. It also says retention: Gemini 'doesn't retain or store contextual information.' The retention-deletion page gives retention periods for conversations and agents.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When a user uses Gemini in BigQuery, a prompt and its relevant context are sent to Google's large language models (LLMs) for processing."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-security-privacy-compliance (checked 2026-10-26)
  - Reasoning: The page names Google/Gemini LLM processing and explains prompt, schema, sample-data, and job-history context flows, including existing context in Knowledge Catalog and Spanner. Conversation retention is separately documented, but complete prompt/data retention for every receiving service and AI surface is not established.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Conversations are retained until you request deletion by using the projects.locations.conversations.delete method, until they are automatically deleted after 180 days of inactivity, or until the Google Cloud project that contains the agent is deleted."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/retention-deletion (checked 2026-10-26)
  - Reasoning: Data flow, storage, and retention lifecycles are explicitly documented for conversations and agent resources, including deletion schedules and soft-deletion behavior.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "For these features, Gemini processing occurs in the jurisdictional boundaries of the query location, or where the BigQuery dataset is stored."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-locations (checked 2026-10-26)
  - Reasoning: Processing regions are documented for some features (SQL assist, Data Engineering Agent, data canvas, data insights, data preparation), and conversational analytics lists storage and processing locations. Coverage is incomplete: Cloud Assist chat is global only, and jurisdiction processing covers only generally available features.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When interacting with the agent in the Google Cloud console, all internal processing—including the reasoning engine and temporary storage of conversation context—is maintained strictly within the jurisdictional boundary defined by the Dataform workspace region."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-locations (checked 2026-10-26)
  - Reasoning: This explicitly covers processing and temporary conversation storage for the Data Engineering Agent. The page and conversational overview describe other processing/storage locations, but Data Science Agent routing varies by model and some features process globally; a complete region-by-region storage and processing guarantee for every AI feature is not established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Gemini in BigQuery doesn't provide data residency for individual locations. Data processing can be specified for US and EU supported jurisdictions."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-locations (checked 2026-10-26)
  - Reasoning: Administrators can restrict AI processing to US or EU jurisdictional boundaries, but granular residency for specific individual regional locations is not supported.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Gemini in BigQuery doesn't use your data to train or fine-tune its models."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-overview (checked 2026-10-26)
  - Reasoning: This is a direct statement that customer data is not used for training by default. Conversational analytics prompt analytics is on by default, but the docs say that data 'isn't used to train or fine tune Google's foundational AI models.'
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Gemini for Google Cloud doesn't use your prompts or its responses as data to train its models without your express permission."
  - Source: https://docs.cloud.google.com/bigquery/docs/gemini-overview (checked 2026-10-26)
  - Reasoning: Google states that prompts and responses are not training data without express permission. The same page excludes BigQuery customer data from model training/fine-tuning, and conversational prompt analytics explicitly excludes foundational-model training.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Gemini for Google Cloud doesn't use your prompts or its responses as data to train its models without your express permission."
  - Source: https://docs.cloud.google.com/bigquery/docs/write-sql-gemini (checked 2026-10-26)
  - Reasoning: The documentation states that user prompts and generated responses are not used as data to train or fine-tune models without express permission.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Partly (preview)** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "It can only access the knowledge sources that you explicitly select."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Each agent's author sets which knowledge sources the agent may use, which is a per-agent scope rather than a tenant-wide admin limit. For database sources, the known-limitations page says 'Table selection isn't a security setting.'
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- It can only access the knowledge sources that you explicitly select."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: A data-agent author selects an enforced source scope beyond the user's overall data permissions. This is per-agent author configuration; no independent administrator-enforced tenant/workspace AI-data exclusion policy was found.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Table selection isn't a security setting."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/known-limitations (checked 2026-10-26)
  - Reasoning: Table selection guides which tables the agent focuses on, but it is not an enforced security boundary; the agent may query other tables if the calling user has underlying permissions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "We recommend that you create a separate identity for agents that are using MCP tools so that access to resources can be controlled and monitored."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: Outside agents can authenticate with a separate agent identity, use the read-only execute_sql_readonly tool, and be blocked from the read-write execute_sql tool by IAM deny policies. This gives an identity scoped more narrowly than the human's.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can restrict access to the `execute_sql` tool by creating a deny policy that restricts read-write MCP tool use."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: The first-party remote MCP server supports separate agent identities with IAM and enforceable tool deny policies. Denying the read-write execute_sql tool leaves the agent with read-only tools even if the human can write.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can restrict access to the execute_sql tool by creating a deny policy that restricts read-write MCP tool use."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: Administrators can govern outside agent permissions using IAM deny and allow policies that restrict read-write MCP tools like execute_sql.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "`VIEW`: A virtual table defined by a SQL query."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: Through the MCP get_table_info tool, an outside agent can read a view's or materialized view's definition and infer its upstream sources from the SQL. No lineage interface for outside agents (MCP or skill) is documented; lineage traversal is shown only inside Gemini Cloud Assist.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "A query that BigQuery executes when the view is referenced."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: The remote MCP metadata tool returns a view's SQL definition, letting an outside agent infer its upstream sources and transformations. The corpus's BigQuery lineage pages did not document a programmatic traversal interface for outside agents, so this is the prescribed view-definition partial scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Get metadata information about a BigQuery table or BigLake table."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: Through the BigQuery MCP server get_table_info tool, an outside agent can retrieve table metadata including the SQL query definition of views and materialized views, allowing it to infer upstream sources from SQL. No programmatic lineage traversal interface is documented for outside agents.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Yes** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Queries executed using the `execute_sql` tool will always have the default job label `goog-mcp-server: true` automatically set in addition to any custom `labels` provided in the request."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp (checked 2026-10-26)
  - Reasoning: MCP-driven jobs are labeled, and the remote MCP servers have 'Centralized audit logging'. Combined with the recommended separate agent identity, an outside agent's queries can be identified by job records tied to that identity and the tables referenced.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Queries executed using the `execute_sql` tool will always have the default job label `goog-mcp-server: true` automatically set in addition to any custom `labels` provided in the request."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/execute_sql (checked 2026-10-26)
  - Reasoning: Remote MCP query jobs are explicitly tagged goog-mcp-server:true. With the documented separate agent IAM identity, the JOBS view's principal/user, SQL, and referenced/destination tables record attributable agent actions against analytical data objects; this is more than an undifferentiated user-activity log.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the tag goog-mcp-server:true to identify the query jobs that ran through the MCP server."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: All queries executed by outside agents through the BigQuery MCP server are automatically tagged with goog-mcp-server:true for audit and performance tracking in job history and Cloud Logging.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page holds an outside agent's change to a governed analytical asset for approval. The BigQuery MCP docs offer IAM deny policies that block the read-write execute_sql tool, which is a block, not an approval. Tool annotations only let MCP clients decide whether to prompt their own user, and they are not tied to governed assets. The Git-backed repository pages document no pull-request or review step.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When a TVF references data that you don't own—for example, another contributor's data—only that data's owner can approve the query template."
  - Source: https://docs.cloud.google.com/bigquery/docs/query-templates (checked 2026-10-26)
  - Reasoning: BigQuery documents an enforced review workflow for governed clean-room query definitions: another contributor's data owner must approve the query template. This is a general analytical-asset approval workflow with API support; the documentation does not connect it specifically to changes made by an outside agent, so it earns partial credit.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: BigQuery documentation does not document any mechanism where changes made by an outside agent to governed analytical assets or shared definitions are held for human approval by a named person or role before taking effect.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The comparison pane opens, comparing the data canvas version that you selected with the current data canvas version."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-canvas (checked 2026-10-26)
  - Reasoning: Data canvases have a generic version compare, and repository-based assets use Git. Neither is documented as covering changes made by an outside agent.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The comparison pane opens, comparing the data canvas version that you selected with the current data canvas version."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-canvas (checked 2026-10-26)
  - Reasoning: A reviewer can compare a saved data canvas against its current version, including an inline comparison. This is a generic comparison of a permission-controlled analytical asset; no located page identifies outside-agent changes as a supported case. The separate Git repository feature is Preview, but this quoted comparison is available for canvases outside repositories.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The comparison pane opens, comparing the data canvas version that you selected with the most recent data canvas version."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-canvas (checked 2026-10-26)
  - Reasoning: BigQuery data canvas supports version comparison through a comparison pane showing differences between canvas versions. However, this is a generic version comparison feature and is not documented as covering changes made by an outside agent.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Partly** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "BigQuery lets you query and restore data stored in BigQuery that was changed or deleted within your time travel window."
  - Source: https://docs.cloud.google.com/bigquery/docs/access-historical-data (checked 2026-10-26)
  - Reasoning: Time travel can restore tables changed through any route, including the MCP execute_sql tool, and data canvases can restore earlier versions. These are generic restores, not documented specifically for outside-agent changes to governed analytical assets.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- To restore the previous data canvas version after comparison, click Restore."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-canvas (checked 2026-10-26)
  - Reasoning: BigQuery documents restoring earlier versions of a permission-controlled data canvas. This is a generic analytical-asset restore; no located documentation connects the restore operation specifically to changes made by an outside agent. Restoring warehouse tables alone would not establish rollback of BI content or shared definitions.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To restore the previous data canvas version after comparison, click Restore."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-canvas (checked 2026-10-26)
  - Reasoning: BigQuery data canvas allows restoring an earlier version of a data canvas from the version history comparison pane. However, this is a generic asset version restoration capability and is not documented specifically for rolling back changes made by an outside agent.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "BigQuery MCP servers use the OAuth 2.0 protocol with IAM for authentication and authorization."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: Google runs a remote MCP server at https://bigquery.googleapis.com/mcp. It gives outside agents tools to list datasets and tables and run SQL, uses documented OAuth/IAM authentication, and needs no customer middleware. No preview label is shown.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "BigQuery MCP servers use the OAuth 2.0 protocol with IAM for authentication and authorization."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: BigQuery documents its vendor-hosted remote MCP endpoint, supported outside AI clients, and OAuth 2.0/IAM authentication. It runs on the service infrastructure, requires no customer middleware, and the page does not label it preview.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This document shows you how to use the BigQuery remote Model Context Protocol (MCP) server to connect with AI applications including Antigravity, ChatGPT, Claude, and custom applications you are developing."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: BigQuery provides an official remote MCP server allowing external AI agents and applications to connect and query BigQuery.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "List table ids in a BigQuery dataset or BigLake namespace."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp (checked 2026-10-26)
  - Reasoning: The MCP tools list_dataset_ids and list_table_ids enumerate datasets and tables with pagination, without being told what exists. The Conversational Analytics API also lists data agents.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "List table ids in a BigQuery dataset or BigLake namespace."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/list_table_ids (checked 2026-10-26)
  - Reasoning: The first-party MCP list_table_ids tool enumerates tables with pagination; list_dataset_ids also enumerates datasets. The outside agent need not know individual table IDs first.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can use the BigQuery remote MCP server to perform tasks such as running queries, getting metadata, and listing resources."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: External agents connecting through the remote MCP server can list resources and retrieve schema metadata using tools like list_dataset_ids, list_table_ids, and get_table_info.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Authentication details: depending on how you want to authenticate, you can enter your Google Cloud credentials, your OAuth Client ID and secret, or an agent identity and credentials."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: Named credential types are documented for outside agents: Google Cloud credentials, an OAuth client ID and secret, or an agent identity.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Authentication details: depending on how you want to authenticate, you can enter your Google Cloud credentials, your OAuth Client ID and secret, or an agent identity and credentials. For more information about authentication, see Authenticate to MCP servers."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: The remote MCP setup explicitly accepts Google Cloud credentials, OAuth client credentials, or a separate agent identity and credentials. Its authentication section specifies OAuth 2.0 with IAM.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For more information about OAuth 2.0 scopes at Google, see Using OAuth 2.0 to access Google APIs."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: Outside agents authenticate to the BigQuery remote MCP server using standard OAuth 2.0 scopes and IAM credentials.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "BigQuery provides agent skills that can help your agent accomplish common tasks."
  - Source: https://docs.cloud.google.com/bigquery/docs/agent-skills-overview (checked 2026-10-26)
  - Reasoning: Google publishes the bigquery-basics and bigquery-ai-ml SKILL.md packages, which outside agents install with 'npx skills add google/skills'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The BigQuery basics skill, `bigquery-basics`, contains instructions for completing basic tasks in BigQuery, such as creating a dataset or running a query."
  - Source: https://docs.cloud.google.com/bigquery/docs/agent-skills-overview (checked 2026-10-26)
  - Reasoning: Google publishes installable BigQuery skills for outside agentic clients, with instructions, scripts, references, SKILL.md links, and an npx installation command. This goes beyond MCP documentation alone.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "BigQuery provides agent skills that can help your agent accomplish common tasks."
  - Source: https://docs.cloud.google.com/bigquery/docs/agent-skills-overview (checked 2026-10-26)
  - Reasoning: BigQuery provides packaged agent skills (such as bigquery-basics and bigquery-ai-ml) containing standardized scripts, reference materials, and instructions for external agents.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "bq command-line tool usage"
  - Source: https://docs.cloud.google.com/bigquery/docs/agent-skills-overview (checked 2026-10-26)
  - Reasoning: Google's bigquery-basics agent skill ships a reference file teaching agents to use the bq command-line tool. The bq reference documents non-interactive service-account authentication ('Use a service account').
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- bq command-line tool usage"
  - Source: https://docs.cloud.google.com/bigquery/docs/agent-skills-overview (checked 2026-10-26)
  - Reasoning: The vendor's outside-agent skill explicitly packages bq command-line guidance. The bq reference documents service-account impersonation and --headless=true for unattended operation, establishing both agent guidance and non-interactive authentication.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To allow agents access to advanced BigQuery capabilities like scheduling, permission management, and reservation management, use the run_bq_command tool available under the Google Cloud CLI MCP server."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: External agents can use the run_bq_command tool in the Google Cloud CLI remote MCP server to run bq commands for administrative and analytical BigQuery operations.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Yes** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can combine multiple criteria to build customized security and governance policies by allowing or denying access based on the following:"
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: IAM allow and deny policies for MCP use can target the principal, tool properties, tool name or OAuth client ID. MCP calls also need the separate MCP Tool User role, so agent access can be granted or blocked per user or group.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Make MCP tool calls: `mcp.tools.call`"
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: Administrators control the MCP-specific mcp.tools.call permission through IAM, separately from ordinary BigQuery data access. The same page documents allow/deny policies by principal, tool, service, and OAuth client, supporting selective user/group rollout.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Identity and Access Management (IAM) deny policies and allow policies help you secure Google Cloud and Google MCP servers."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: Access by outside agents to MCP servers is managed and rolled out selectively using IAM allow and deny policies based on principal, tool properties, or OAuth client ID.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You are still subject to the quotas enforced by the APIs called by the MCP server tools."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: The page says the MCP server 'doesn't have its own quotas', so agents are limited only by the general BigQuery API and query quotas. Those are general limits that also apply to agents.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You are still subject to the quotas enforced by the APIs called by the MCP server tools."
  - Source: https://docs.cloud.google.com/bigquery/docs/use-bigquery-mcp (checked 2026-10-26)
  - Reasoning: MCP calls inherit ordinary BigQuery API quotas and hard query timeouts. The page explicitly says the MCP server has no quotas of its own, so agent-interface-specific customer quotas are not established; general API limits receive partial credit.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Agent-to-Agent (A2A) requests have a maximum rate of 10 QPS, which is 600 QPM per project per agent."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/known-limitations (checked 2026-10-26)
  - Reasoning: Documented rate limits enforce a maximum throughput of 10 QPS / 600 QPM per project per agent on Agent-to-Agent (A2A) calls from outside agents.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Because the data agent uses these instructions to understand the context for user questions and to provide answers, make the instructions as clear as possible."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: The built-in data agents read authored business context before answering: agent instructions (for example 'We consider loyal customers to be those with purchase_count > 5'), glossary terms, custom field descriptions and verified queries.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Context. A data agent for sales analysis can be configured to understand that "top performers" refers to sales representatives with the highest revenue, rather than just the most closed deals."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: The built-in conversational agent reads authored business context, including definitions that are not inferable from schema. Its configuration supports business terms, authoritative logic in verified queries, glossary terms, and interpretation instructions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A data agent for sales analysis can be configured to understand that "top performers" refers to sales representatives with the highest revenue, rather than just the most closed deals."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Data agents can be configured with custom glossaries, synonyms, and business term definitions so the AI understands organizational domain concepts.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To share instructions across data pipelines, store instructions in a central Dataform repository and link them to the working Dataform repository."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: The Data Engineering Agent's business context lives in GEMINI.md files in Dataform repositories, which are Git repositories, so it can be diffed, reviewed and rolled back. Data agent context is stored as an API resource, not in files.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can create agent instruction files to use in your local workspace, or you can use the same instruction files across multiple data pipelines with an external repository."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines (checked 2026-10-26)
  - Reasoning: The built-in Data Engineering Agent reads persistent GEMINI.MD context files, including instructions loaded from an external repository. Those context files live with versioned Dataform code and can be diffed, reviewed, and rolled back.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To create agent instructions for the Data Engineering Agent, create a GEMINI.MD context file as an agent instruction file."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/agent-overview (checked 2026-10-26)
  - Reasoning: Users can provide custom instructions and guidelines to the agent via GEMINI.MD context files located directly within repository workspaces.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If your agent requires more than 20 data sources, is used across teams that have different metric definitions, or prioritizes one type of result at the expense of another, consider creating additional agents."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Context is attached to each data agent, not set tenant-wide, so different teams get different instructions and glossaries through separate agents shared with them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Scope your agents. Broadly scoped agents can have instructional conflicts, ambiguous outputs, and inconsistent performance. If your agent requires more than 20 data sources, is used across teams that have different metric definitions, or prioritizes one type of result at the expense of another, consider creating additional agents."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Separate built-in data agents have their own context and are shareable to particular teams. The documentation explicitly recommends distinct agents when teams use different metric definitions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If your agent requires more than 20 data sources, is used across teams that have different metric definitions, or prioritizes one type of result at the expense of another, consider creating additional agents."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Context, instructions, and metric definitions can be scoped to specific domains and teams by creating dedicated scoped data agents.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "In the Preview section, type an example user question in the Ask a question field, and then press Enter."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Agent context is tested in a named Preview pane while the agent is in draft mode, before it is published. The API also separates staging_context from published_context.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- In the Preview section, type an example user question in the Ask a question field, and then press Enter. To verify that the data agent returns the data that you expect, review the agent's response. If the response is not what you expect, change the settings in the Editor section to refine the data agent configuration until you get satisfactory responses. You can continue to test and modify your agent to refine the agent's results."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: The named Preview step lets an author test the agent's context and settings, refine them, and only then publish the configuration to colleagues.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can continue to test and modify your agent to refine the agent's results."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Authors can iteratively test prompts and inspect agent answers within the configuration editor to validate and refine business context rules.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Partly**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Matches are always marked as verified."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: An answer is marked when a verified query shaped it, and the agent's reasoning is shown. Surfacing the specific instruction or glossary term that shaped an answer is not documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Matching responses from the query template appear as verified."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: A built-in data-agent answer indicates when a parameterized verified query supplied the answer. That exposes use of curated business logic, but the documented verified marker does not identify the particular instruction, glossary term or other specific business-context rule that shaped the answer.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The agent's reasoning behind the results."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: Conversational analytics chat responses expose the agent's reasoning behind the results and indicate when an answer was shaped by a verified query. However, surfacing the specific business context instruction, glossary term, or rule that shaped the answer is not documented.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Take into account all of the context about a data source stored in Knowledge Catalog."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Data agents use warehouse and catalog metadata such as table and column descriptions and Knowledge Catalog glossary terms, so this context is not retyped in the agent. Best practice: 'Add table and column descriptions to your tables.'
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Agents can also use descriptions, synonyms, extensions, and measures defined on your graph to improve the quality of the results."
  - Source: https://docs.cloud.google.com/bigquery/docs/graph-chat (checked 2026-10-26)
  - Reasoning: The built-in conversational agent consumes descriptions and semantic annotations already defined on a warehouse graph. It also uses Knowledge Catalog context, so this does not require retyping descriptions into a chat.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Take into account all of the context about a data source stored in Knowledge Catalog."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-conversations (checked 2026-10-26)
  - Reasoning: Conversations and agents automatically inherit and utilize data source context and column metadata stored in Knowledge Catalog.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Partly**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Never use these fields: Transaction Date Derived, City Derived."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Excluding fields is done with an instruction in the agent's context (the 'Excluded fields' example), which the model follows but the product does not enforce. No AI-specific deprecate or off-limits setting is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: ""Never use these fields: Transaction Date Derived, City Derived.""
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: The agent-instruction examples explicitly exclude named fields. This is a natural-language instruction followed by the model, not an enforced exclusion or deprecation setting, that limits the verdict to partly.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Instructions. You can instruct a data agent to always filter data to the most recent quarter when asked about "trends," or to group results by "product category" by default."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Users can provide custom natural language instructions defining rules and restrictions for data agents, which the model follows as guidance but the product does not enforce as a security boundary.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To edit, share, or delete a data agent: Gemini Data Analytics Data Agent Owner (`roles/geminidataanalytics.dataAgentOwner`) on the agent or project."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Each agent's context has a named owner role (Data Agent Owner, granted automatically to the creator). No review or approval step for context changes is documented beyond the editor publishing.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "This role automatically grants you the Gemini Data Analytics Data Agent Owner role on the data agents that you create."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Each built-in data agent and its authored context has a named Data Agent Owner role, automatically assigned to the creator. Owners can edit the agent, but the documented test, save and publish steps do not require a separate owner review or approval of context changes. The named ownership role supplies partial scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To edit, share, or delete a data agent: Gemini Data Analytics Data Agent Owner (roles/geminidataanalytics.dataAgentOwner) on the agent or project."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Specific IAM roles such as Data Agent Owner govern the ability to create, edit, and curate data agent context and definitions.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Yes** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Use knowledge sources such as tables, views, graphs, and UDFs with a data agent."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Data agents use warehouse logic: views, UDFs and property graphs with their measures. The docs recommend that you 'Join related tables in a view and use that view as a data source.'
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The agent operates in the Dataform workspace, so Dataform pipelines are automatically available to the agent."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines (checked 2026-10-26)
  - Reasoning: The built-in Data Engineering Agent automatically sees existing Dataform pipeline logic and can modify it. This is warehouse transformation SQLX logic rather than only table/column names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Use knowledge sources such as tables, views, graphs, and UDFs with a data agent."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Data agents directly read warehouse logic including views and user-defined functions (UDFs) as knowledge sources.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Yes** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The agent generates and organizes data pipeline code directly within Dataform repositories."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines (checked 2026-10-26)
  - Reasoning: The built-in Data Engineering Agent writes SQLX transformations, tables, views and UDF DDL that land in the warehouse when the pipeline runs.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "After your prompt is sent, the Data Engineering Agent generates a data pipeline and modifies Dataform SQLX files based on your prompt."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines (checked 2026-10-26)
  - Reasoning: The built-in agent authors and edits Dataform SQLX pipeline files that define warehouse tables, views, transformations, and UDFs. A person runs or schedules that warehouse logic afterward.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The agent generates and organizes data pipeline code directly within Dataform repositories."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-engineering-agent-pipelines (checked 2026-10-26)
  - Reasoning: The Data Engineering Agent authors and modifies data pipeline definitions and warehouse transformation code directly within Dataform repositories.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Optional. The view definition."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: The MCP get_table_info tool returns a table's view and materializedView definitions, so an outside agent can read the SQL logic of warehouse views.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "A query that BigQuery executes when the view is referenced."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: The documented output schema of the vendor MCP get_table_info tool includes ViewDefinition.query, returning actual warehouse view SQL to an outside agent, not just schema names and types.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Get metadata information about a BigQuery table or BigLake table."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: Outside agents read warehouse view definitions and table schema information through the get_table_info tool in the remote MCP server.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can use the Data Engineering Agent API, which is accessed through `geminidataanalytics.googleapis.com`, to build, modify, and manage data pipelines to load and process data in BigQuery."
  - Source: https://docs.cloud.google.com/gemini/data-agents/data-engineering-agent/api-overview (checked 2026-10-26)
  - Reasoning: A documented first-party API lets an outside client author warehouse pipelines and transformations. The MCP execute_sql tool also runs DDL such as CREATE statements.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- SQL Queries (`SELECT`, `INSERT`, `UPDATE`, `DELETE`, `CREATE`, etc.)"
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/execute_sql (checked 2026-10-26)
  - Reasoning: The first-party MCP execute_sql tool documents DDL and includes a CREATE OR REPLACE MODEL example, so an outside agent can author persistent warehouse logic with suitable IAM permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Run a SQL query in the project and return the result."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/execute_sql (checked 2026-10-26)
  - Reasoning: External agents write and update warehouse views and tables by executing DDL statements via the execute_sql MCP tool.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Partly**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Create BigQuery custom glossary terms for each agent or import business glossary terms from Knowledge Catalog."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Agents reuse business glossary terms maintained in Knowledge Catalog and graph measures defined in the warehouse. Importing metric definitions from dbt, Cube or semantic-view tools is not documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Conversational analytics can use measures defined on your graph to help accurately answer questions that involve aggregations."
  - Source: https://docs.cloud.google.com/bigquery/docs/graph-chat (checked 2026-10-26)
  - Reasoning: The built-in conversational agent can reuse measures already defined on a BigQuery warehouse graph instead of rebuilding the aggregation in agent context. This is limited reuse of existing warehouse definitions; no located documentation establishes importing metric models from dbt, Cube or another vendor's semantic views. Imported Knowledge Catalog glossary terms are business context rather than metric calculations.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Agents can also take advantage of measures defined on your graph to perform multi-level aggregation."
  - Source: https://docs.cloud.google.com/bigquery/docs/conversational-analytics (checked 2026-10-26)
  - Reasoning: Data agents can reuse business glossary terms maintained in Knowledge Catalog and measures defined on property graphs in the warehouse. However, importing metric definitions from external semantic modeling tools such as dbt Semantic Layer, Cube, or Snowflake semantic views is not documented.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Conversational analytics can use measures defined on your graph to help accurately answer questions that involve aggregations."
  - Source: https://docs.cloud.google.com/bigquery/docs/graph-chat (checked 2026-10-26)
  - Reasoning: The agent answers using shared definitions on BigQuery Graph: measures, relationships (joins), descriptions and synonyms. The example has it using a defined user_count measure.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Conversational analytics can use measures defined on your graph to help accurately answer questions that involve aggregations."
  - Source: https://docs.cloud.google.com/bigquery/docs/graph-chat (checked 2026-10-26)
  - Reasoning: The built-in conversational agent explicitly uses centrally defined graph measures; the example uses user_count to avoid overcounting across joins. These are maintained aggregation definitions, not guessed field names.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "You can query any included Explore in a conversation."
  - Source: https://docs.cloud.google.com/gemini/data-agents/conversational-analytics-api/known-limitations (checked 2026-10-26)
  - Reasoning: Data agents can connect to Looker Explores as knowledge sources and read semantic metrics and definitions directly.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can review, edit, and publish these descriptions to Knowledge Catalog to improve data discoverability and documentation."
  - Source: https://docs.cloud.google.com/bigquery/docs/data-insights (checked 2026-10-26)
  - Reasoning: Gemini data insights, and the Data Engineering Agent's metadata enrichment, write descriptions and documentation for existing definitions. No assistant is documented creating or editing measures, dimensions or joins in the shared layer.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- In the Fields section, review the Gemini-suggested field descriptions."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Gemini generates the field descriptions that an author can accept into a shared agent's semantic context. This documents writing descriptions, not creating or editing the warehouse graph's shared measure/dimension/join definitions, so only partial scope is established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "In the Fields section, review the Gemini-suggested field descriptions."
  - Source: https://docs.cloud.google.com/bigquery/docs/create-data-agents (checked 2026-10-26)
  - Reasoning: Gemini suggests field descriptions and semantic metadata when configuring an agent, which users review and accept.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Optional. The field description. The maximum length is 1,024 characters."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: Through MCP get_table_info, an outside agent receives the schema with each field's description and the table description, so it can read what a column means instead of guessing.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The field description."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: The first-party outside-agent metadata tool returns table and field descriptions, giving an agent the maintained meaning of fields. The query interface can additionally read graph-definition metadata and DDL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Get metadata information about a BigQuery table or BigLake table."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/get_table_info (checked 2026-10-26)
  - Reasoning: External agents inspect table definitions, field types, and descriptions using the get_table_info tool in the BigQuery MCP server.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Not found** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents an outside agent creating or editing shared definitions such as metrics, dimensions or joins. The other reading relied on execute_sql DDL creating tables and schemas. Running arbitrary SQL or DDL does not establish a row about shared definitions unless the page ties it to them, and the MCP page does not. The data agent patch API is documented only as updating 'the parameters of a single DataAgent' (descriptions, per the create page), not shared metric or join definitions. The graph measures page does not mention any outside-agent route.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The MCP execute_sql tool documents creating or modifying ordinary warehouse tables and schemas, and the graph pages document measure definitions. No located agent-interface page ties outside-agent writes to shared metrics, dimensions, joins or graph measures. Generic SQL execution and table/schema DDL alone do not establish writes to the shared definition layer.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Run a SQL query in the project and return the result."
  - Source: https://docs.cloud.google.com/bigquery/docs/reference/mcp/tools_list/execute_sql (checked 2026-10-26)
  - Reasoning: Outside agents execute DDL queries through the execute_sql MCP tool to create and modify shared tables and schemas in the warehouse.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Yes**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Logical views let you save a SQL query as a virtual table, which helps you reuse query logic and simplify access to your data."
  - Source: https://docs.cloud.google.com/bigquery/docs/views (checked 2026-10-26)
  - Reasoning: Logic written in BigQuery Studio, including a saved query (a Dataform-backed Studio code asset), can be written out as a logical view in a BigQuery dataset. The same page's console steps say to open a query or a saved query and click Save > Save view, choosing the destination project and dataset. The definition then lives in the warehouse as a view object rather than as a Studio asset.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Logical views let you save a SQL query as a virtual table, which helps you reuse query logic and simplify access to your data."
  - Source: https://docs.cloud.google.com/bigquery/docs/views (checked 2026-10-26)
  - Reasoning: Logic authored in the BigQuery Studio query editor, including an existing saved query, can be saved as a logical view in a selected BigQuery project and dataset. The console procedure on this page explicitly opens a query or saved query and uses Save > Save view, so the resulting reusable definition lives in the warehouse.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Alternatively, you can open a saved query."
  - Source: https://docs.cloud.google.com/bigquery/docs/views (checked 2026-10-26)
  - Reasoning: Logic authored in BigQuery Studio as a query or saved query (a Dataform-backed Studio code asset) can be saved directly as a logical view into a BigQuery dataset via Save > Save view, writing the model logic back down into the warehouse as a virtual table.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Logical views let you save a SQL query as a virtual table, which helps you reuse query logic and simplify access to your data."
  - Source: https://docs.cloud.google.com/bigquery/docs/views (checked 2026-10-26)
  - Reasoning: There is a direct path from a one-off query written in the query editor (or an opened saved query) to a reusable, maintained shared object: Save > Save view stores the same SQL as a logical view in a dataset, with no developer rewrite. Anyone with dataset access can reuse the view, and the page documents later edits through Edit query, bq update --view or the API.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Logical views let you save a SQL query as a virtual table, which helps you reuse query logic and simplify access to your data."
  - Source: https://docs.cloud.google.com/bigquery/docs/views (checked 2026-10-26)
  - Reasoning: An analyst can take an existing analysis query (including a saved query) and choose Save > Save view. This directly promotes the calculation to a persistent warehouse view whose logic the team can reuse and govern with IAM, without re-expressing the calculation in another language.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Logical views let you save a SQL query as a virtual table, which helps you reuse query logic and simplify access to your data."
  - Source: https://docs.cloud.google.com/bigquery/docs/views (checked 2026-10-26)
  - Reasoning: SQL query logic can be promoted and saved as a virtual table (logical view) to allow reuse of analytical calculations across users.

