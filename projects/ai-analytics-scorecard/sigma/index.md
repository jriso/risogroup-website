# Sigma: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/sigma/

AI Feature Score **75**, #5 of 15 (BI and analytics tool). Built-in AI 73, external AI 78, other 74. Analysis 78, Building and maintaining assets 85, Context and connections 79, Reliability and controls 58. By model: Claude Opus 5.5 74, GPT-6.1 Sol 75, Gemini 3.8 Flash 77.

## Score breakdown

Four areas, 25 points each. Shown for GPT-6.1 Sol, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 19.4 of 25
- Building and maintaining assets: 21.2 of 25
- Context and connections: 19.6 of 25
- Reliability and controls: 14.4 of 25

**Strengths**

- One agent can hand a task to another
- Choose where model inference runs
- You can measure answer latency

**Not found in the docs**

- A statement that your data is not used for training
- A correction sticks
- Outside agents write warehouse logic

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Sigma Assistant is a natural language query (NLQ) interface that allows you to ask questions about your data and interact with AI-generated responses."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Sigma Assistant, the built-in assistant, takes plain-English questions in the 'Ask me anything about your data' box and answers them by running its own queries. No SQL or existing dashboard is needed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Sigma Assistant is a natural language query (NLQ) interface that allows you to ask questions about your data and interact with AI-generated responses."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: The built-in Assistant accepts natural-language data questions and generates answers, queries, and charts without a prebuilt dashboard.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Sigma Assistant is a natural language query (NLQ) interface that allows you to ask questions about your data and interact with AI-generated responses."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Users can ask questions in plain English and Sigma Assistant generates answers and queries against connected data platforms.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can continue to ask follow-up questions to refine your analysis or understanding of the data source."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: The same step's example is the follow-up 'Please break down sales by region', which Assistant answers in the context of the earlier question. The page also says Assistant iterates 'without losing context'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Assistant uses multi-step reasoning to handle comparisons, trends, rankings, forecasts, and time-based or geographic questions, and supports conversations, so you can ask follow-up questions and iterate on a specific data analysis task without losing context."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: The built-in Assistant explicitly retains conversational context for follow-up analysis.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Assistant uses multi-step reasoning to handle comparisons, trends, rankings, forecasts, and time-based or geographic questions, and supports conversations, so you can ask follow-up questions and iterate on a specific data analysis task without losing context."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Sigma Assistant maintains multi-turn conversational context, allowing users to ask follow-up questions and refine answers iteratively.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Click **View SQL** to review the exact query Assistant sent to your data platform."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Each Assistant response has 'Worked for...' and 'Gathered data from...' panels showing its steps, plus the exact SQL it ran.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Click **View SQL** to review the exact query Assistant sent to your data platform."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: The response exposes its exact executed SQL, alongside expandable reasoning and query results.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Click **View SQL** to review the exact query Assistant sent to your data platform."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Sigma Assistant exposes the exact SQL query sent to the underlying data platform for users to inspect the analytical steps.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Partly** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Review the sources used by Assistant throughout your conversation."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: The summary panel lists the specific tables and data models the answer used (for example F_SALES). No column- or metric-level citation is documented apart from the SQL text, which belongs to V3, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "* Review the sources used by Assistant throughout your conversation. Select a source to preview the data and confirm it is the relevant source. When previewing a source, click **Open table** or **Open data model** () to open the source in a new tab."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Assistant exposes named table and data-model sources in its conversation summary panel; the page illustrates F_SALES among the sources. This is conversation-level source attribution, rather than a specific table, column, or metric citation attached to each answer. Generated SQL is not counted as field citation.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Review the sources used by Assistant throughout your conversation."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Sigma Assistant cites the tables and data sources used to construct answers in a conversation summary, but does not attach citations for specific individual columns or metrics.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To ask ad hoc questions about your eval results, such as which cases regressed after your last instructions change, or to automate using a large language model (LLM) as a judge, add a Sigma agent to the **Agent evaluation scoring** workbook and add the `AI_USAGE` table and your eval cases table (uploaded as a CSV if you used a local file programmatically, or the input table if you used a UI-based approach) as data sources for the agent."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: This official guide gives an uploaded CSV table to a Sigma agent (an agent the product runs) as a data source to analyze. CSV upload and agent data sources are both shipped features.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To ask ad hoc questions about your eval results, such as which cases regressed after your last instructions change, or to automate using a large language model (LLM) as a judge, add a Sigma agent to the **Agent evaluation scoring** workbook and add the `AI_USAGE` table and your eval cases table (uploaded as a CSV if you used a local file programmatically, or the input table if you used a UI-based approach) as data sources for the agent."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: The official workflow explicitly gives a CSV-uploaded table to a built-in Sigma agent to analyze evaluation results; this establishes CSV analysis rather than merely file storage.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To ask ad hoc questions about your eval results, such as which cases regressed after your last instructions change, or to automate using a large language model (LLM) as a judge, add a Sigma agent to the **Agent evaluation scoring** workbook and add the `AI_USAGE` table and your eval cases table (uploaded as a CSV if you used a local file programmatically, or the input table if you used a UI-based approach) as data sources for the agent."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: Sigma's official documentation for building an evaluation suite explicitly shows adding an eval cases table uploaded as a CSV file as a data source for a Sigma agent in a workbook, allowing the built-in agent to query and analyze the uploaded CSV data.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Yes** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The formula assistant evaluates your description of calculations, data references, manipulations, and other context, then suggests a formula to achieve the desired output."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The built-in formula assistant writes the transformation as a formula applied to a column. The formula stays visible in the formula bar, where anyone can inspect it, and the assistant can explain it later.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The formula assistant evaluates your description of calculations, data references, manipulations, and other context, then suggests a formula to achieve the desired output."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The built-in formula assistant turns requested data manipulations into an inspectable column formula. The table documentation identifies these same calculated columns as supporting data cleaning, including Coalesce.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The formula assistant evaluates your description of calculations, data references, manipulations, and other context, then suggests a formula to achieve the desired output."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The formula assistant suggests formula logic for data manipulations and cleansing, which persists as inspectable column formulas in workbook tables, but there is no autonomous multi-step data profiling and transformation workflow.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Yes** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Data sources can be from different connections."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: A Sigma agent can be given data sources from different connections and uses them together. The agents overview adds that it reasons 'across multiple related data sources, even if those sources are in different connections'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **Sophisticated analysis of complex datasets**: An agent can perform sophisticated analysis such as "Identify unused servers by analyzing the currently running applications and server inventory" by reasoning across multiple related data sources, even if those sources are in different connections."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: A built-in Sigma agent combines information across related sources, explicitly including different connections; this exceeds joining tables in one database.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "An agent can perform sophisticated analysis such as "Identify unused servers by analyzing the currently running applications and server inventory" by reasoning across multiple related data sources, even if those sources are in different connections."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Sigma agents can reason across and combine multiple data sources in a single analysis, even across different database connections.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Review responses and explore AI-generated charts and tables."
  - Source: https://help.sigmacomputing.com/docs/getting-started-with-ai (checked 2026-10-26)
  - Reasoning: Assistant generates the chart or table itself in answer to the question (the region question returns a bar chart), and the user can add it to a workbook.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Extract factual information from your data, identify the drivers behind a metric, detect anomalies and get guided next steps, segment your data into meaningful groups, or ask questions that generate charts you can explore in a workbook."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: The built-in Assistant can generate charts from analytical questions rather than requiring the user to choose an existing visualization.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When Sigma Assistant includes a chart in its response, you can click **Add to workbook** to add it directly to the workbook canvas."
  - Source: https://help.sigmacomputing.com/docs/sigma-assistant-in-the-workbook (checked 2026-10-26)
  - Reasoning: Sigma Assistant autonomously selects and creates chart visualizations suited to the user's natural language question and adds them to the workbook.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Extract factual information from your data, identify the drivers behind a metric, detect anomalies and get guided next steps, segment your data into meaningful groups, or ask questions that generate charts you can explore in a workbook."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Assistant is documented to identify the drivers behind a metric. No documented output breaks a change into per-segment contributions with a calculation a person can check, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "* **Analyze key drivers of customer satisfaction**: Based on customer satisfaction survey data, an agent can identify, explain, and rank the drivers that contribute to low or high customer satisfaction scores. For specific customers represented in the survey data, the agent can send Slack or Microsoft Teams messages, such as to notify customer success managers about accounts that might be a churn risk."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Built-in agents identify and rank drivers, and Assistant supports questions about a sales dip. Neither passage establishes a calculated segment-by-segment contribution to a change that a person can verify.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Based on customer satisfaction survey data, an agent can identify, explain, and rank the drivers that contribute to low or high customer satisfaction scores."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Sigma agents can identify and rank drivers contributing to metrics, but do not provide inspectable mathematical segment contribution tables.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Partly** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Assistant uses multi-step reasoning to handle comparisons, trends, rankings, forecasts, and time-based or geographic questions, and supports conversations, so you can ask follow-up questions and iterate on a specific data analysis task without losing context."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Assistant produces forecasts, but nothing says the answer exposes the forecast's horizon, inputs, or assumptions. Partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Assistant uses multi-step reasoning to handle comparisons, trends, rankings, forecasts, and time-based or geographic questions, and supports conversations, so you can ask follow-up questions and iterate on a specific data analysis task without losing context."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: The built-in Assistant explicitly handles forecasts, but its forecast horizon, inputs, and assumptions are not documented as exposed. The separate Python forecasting recipe requires a customer-provided model.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "An agent can run forecasting calculations based on the contents of an input table and informed by policy documents in an external system, then present results in a structured format for review and approval."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Sigma agents can execute forecasting calculations based on input data and external documents, but do not automatically break out and expose underlying statistical assumptions, confidence intervals, or mathematical parameters.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Partly** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When performing scenario analysis, the agent can state assumptions and uncertainty, and evaluate the output of a possible scenario compared with real outcomes provided in an input table."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: A Sigma agent can generate what-if scenarios and state their assumptions. The documented comparison is a scenario against real outcomes, not several scenarios calculated side by side, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "* **Perform scenario analysis for strategic planning**: An agent can analyze possible scenarios that could affect the product supply chain by generating what-if scenarios based on user inputs and data, running scenarios using external models defined in Python code or stored procedures. When performing scenario analysis, the agent can state assumptions and uncertainty, and evaluate the output of a possible scenario compared with real outcomes provided in an input table."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: The built-in agent can generate scenarios and state assumptions. Calculation depends on customer-defined external models, and the documentation does not establish first-party calculation and side-by-side comparison of multiple scenarios.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When performing scenario analysis, the agent can state assumptions and uncertainty, and evaluate the output of a possible scenario compared with real outcomes provided in an input table."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Sigma agents can evaluate what-if scenarios against input tables and state assumptions, but do not provide automated side-by-side scenario modeling matrices.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Sigma Assistant response page documents a 'Worked for...' summary, the queries run, View SQL, and a summary panel where sources can be previewed. None of it shows the age or last-refresh time of the data used. The data catalog shows 'last updated' and 'last synced' for tables, and dbt models show 'Last run'. Both appear only when browsing connections, not with the answer. The only freshness wording for the Assistant is a sample line an author can type into data model AI context ('Data in this model is refreshed daily at midnight UTC'). That is author-supplied context, not a freshness indicator shown with the answer. The agent-memory example's 'Agent memory can get stale' is about stored memory, not data freshness.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Assistant response documentation does not establish a data-age, last-refresh, or staleness indicator with the answer. Caching, workbook refresh schedules, dbt job metadata, and optional freshness instructions in AI context do not establish that Assistant exposes the freshness of the data used at the point of answering.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Sigma documentation does not state that the built-in assistant or agents expose the age, freshness, or last-refresh timestamp of the underlying data with their answers, nor do they flag stale output at the point of use. While Sigma provides workbook caching and refresh options and dbt job freshness in data modeling, no freshness metadata is presented to users alongside conversational AI answers.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Sigma’s formula assistant uses AI to write new formulas, correct formula errors, and explain existing formulas applied to elements in workbooks and data models."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The formula assistant reads and explains the formulas behind workbook elements, including chart columns. Assistant can also be invoked on a single element with 'Analyze with Assistant'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Sigma’s formula assistant uses AI to write new formulas, correct formula errors, and explain existing formulas applied to elements in workbooks and data models."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The built-in formula assistant reads and explains the existing formula of a selected chart/table column, including visualization underlying-data formulas; this is workbook BI content.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The formula assistant evaluates an existing formula and explains what it accomplishes."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The built-in formula assistant reads and explains calculations and formulas underlying workbook elements and charts.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Sigma’s formula assistant uses AI to write new formulas, correct formula errors, and explain existing formulas applied to elements in workbooks and data models."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The formula assistant writes formulas into columns of workbook tables and visualizations. Assistant build mode also creates and edits elements.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* To apply the suggested formula to the column, click **Use formula**."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The built-in formula assistant writes inspectable calculations directly into selected workbook chart/table columns; visualizations are explicitly supported in the same procedure.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The formula assistant evaluates your description of calculations, data references, manipulations, and other context, then suggests a formula to achieve the desired output."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The formula assistant writes calculations and formulas for specific workbook elements, columns, and charts from natural language descriptions.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Partly (preview)** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "To retrieve the code representation of an existing workbook, call the [Get a workbook](/reference/get-workbook) endpoint with the `workbookId` for the workbook and the query parameter `includeContents=true`:"
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: An outside agent can fetch the whole workbook representation (Beta) and parse it to find one chart's calculation. No per-element endpoint is documented, so this is partial.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "You can retrieve a code representation of an existing workbook by calling the [Get a workbook](/reference/get-workbook) endpoint with the `workbookId` for the workbook and the query parameter `includeContents=true`."
  - Source: https://help.sigmacomputing.com/docs/get-the-code-representation-of-a-workbook (checked 2026-10-26)
  - Reasoning: Outside agents can retrieve workbook-wide code containing element formulas and source definitions, then locate the chart’s calculation. The documented calculation route is a whole-workbook representation, which the row limits to partly.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "The representation, sometimes referred to as a schema or specification, defines the structure of the workbook, including its data sources, pages, and elements."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: An outside agent can read the formula or calculation behind a chart by downloading the entire workbook JSON/YAML code specification; downloading the whole file/workbook rather than inspecting individual elements earns partly the grading standard.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Partly (preview)** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "To update a workbook, you must provide a complete representation of the workbook, even if you are only making minor changes."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Changing one chart's calculation through the API means replacing the whole workbook representation (Beta). Partial.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "To update a workbook, you must provide a complete representation of the workbook, even if you are only making minor changes."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Outside agents can edit formulas in the workbook representation and replace it through the API. This route requires replacing the whole workbook; the MCP page does not specifically document a targeted formula-write interface.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "You can use the Sigma API to retrieve, update, and create [workbooks](/docs/workbooks-overview) based on a JSON or YAML representation."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: An outside agent can update an element calculation by modifying and uploading the full workbook code specification via the API, but cannot write to an individual element calculation directly without replacing the whole workbook.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When viewing the published version of a workbook, you can use Sigma Assistant to ask about the entire workbook or specific elements, or you can ask it to reason about the workbook data."
  - Source: https://help.sigmacomputing.com/docs/sigma-assistant-in-the-workbook (checked 2026-10-26)
  - Reasoning: Assistant opens existing published workbooks (BI content) and answers from their pages and elements.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Sigma Assistant lets you ask natural language questions about workbook data and content."
  - Source: https://help.sigmacomputing.com/docs/sigma-assistant-in-the-workbook (checked 2026-10-26)
  - Reasoning: The built-in Assistant works from existing published workbooks, their pages and elements, and the data they show.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "**Sigma Assistant in the workbook** lets you ask natural language questions about workbook data when viewing a workbook, and build or edit dashboards and apps using natural language when editing a workbook draft."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Sigma Assistant opens and operates directly within existing workbooks, dashboards, and apps to answer questions about existing data and suggest edits.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Build dashboards with charts, tables, KPIs, and filters to visualize and explore your data."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Assistant build mode creates persistent workbook dashboards with an owner, permissions, and live governed data sources. It acts with the user's permissions.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "* Build dashboards with charts, tables, KPIs, and filters to visualize and explore your data."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: The built-in Assistant builds governed workbook content in a saved draft using permitted live sources; the owner publishes and shares it. The employee-survey tutorial explicitly labels Assistant app-building Beta.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Build dashboards with charts, tables, KPIs, and filters to visualize and explore your data."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Sigma Assistant in build mode creates and modifies persistent dashboards and workbooks with charts, tables, controls, and layout elements.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes (preview)** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, preview
  - Quote: "The endpoint returns the workbook metadata, the `documentVersion` the representation was read from, and the code representation in the `contents` field."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: An outside agent can read an existing workbook's contents through the API: its sources, pages, elements, and their configuration. The code representation is Beta, so preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The representation, sometimes referred to as a schema or specification, defines the structure of the workbook, including its data sources, pages, and elements."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Outside agents retrieve the contents of existing workbooks as code, including supported charts, calculations, controls, and data sources; this is BI content rather than analyst-only code.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "You can use the Sigma API to retrieve, update, and create [workbooks](/docs/workbooks-overview) based on a JSON or YAML representation."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Outside agents can retrieve the complete JSON or YAML code specification of existing workbooks and dashboards through the Sigma REST API using the Get Workbook endpoint.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Describe the workbook you want, and your AI assistant builds it in Sigma."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents create workbooks (BI content) through Sigma's MCP server.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Describe the workbook you want, and your AI assistant builds it in Sigma."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: The supported MCP server builds persistent workbooks, returns a review link, and supports subsequent edits. New workbooks are saved in Your documents and governed by normal workbook permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "AI assistants like Claude, ChatGPT, Codex, Cortex Code, and Cursor can use these tools to search, describe, and query data in Sigma, and to build workbooks."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents can create and build workbooks and dashboards in Sigma using Model Context Protocol (MCP) tools supported by the Sigma MCP server.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If you share a workbook, data model, or report with a user who does not have access to a data source, Sigma grants those users implicit access to query the data source as the document owner."
  - Source: https://help.sigmacomputing.com/docs/data-permissions-overview (checked 2026-10-26)
  - Reasoning: Assistant-built workbooks are ordinary workbooks that can be shared with users and teams. RLS stays per viewer, but source-level access falls back to the owner's, so viewers are not fully evaluated as themselves. Partial.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* If you use OAuth to authenticate users to a data source, Sigma runs the query using the viewer's identity in the data platform."
  - Source: https://help.sigmacomputing.com/docs/data-permissions-overview (checked 2026-10-26)
  - Reasoning: AI-built workbooks are ordinary saved workbooks that can be shared with named users or teams. With the documented OAuth configuration, queries evaluate as each viewer and enforce their warehouse permissions; RLS also remains protected. Default owner-inherited access is not the basis for this yes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If row-level security (RLS) is applied to the data source, the data remains protected."
  - Source: https://help.sigmacomputing.com/docs/data-permissions-overview (checked 2026-10-26)
  - Reasoning: AI-created workbook content is shared via Sigma's standard document sharing, and viewers only see data permitted by row-level security (RLS) and their warehouse credentials.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Use global search in Sigma to locate content in your organization, including:"
  - Source: https://help.sigmacomputing.com/docs/search-in-sigma (checked 2026-10-26)
  - Reasoning: Global search covers workbooks, data models, and reports across the org, filtered by access. That includes AI-built workbooks.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use global search in Sigma to locate workbooks, data models, reports, folders, and other content across your organization."
  - Source: https://help.sigmacomputing.com/docs/search-in-sigma (checked 2026-10-26)
  - Reasoning: Workspace-wide search covers workbooks, reports, and models, with at-least-view access required for results. AI-created workbooks are saved as these same discoverable assets.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use global search in Sigma to locate workbooks, data models, reports, folders, and other content across your organization."
  - Source: https://help.sigmacomputing.com/docs/search-in-sigma (checked 2026-10-26)
  - Reasoning: Sigma provides a global search and browsing interface that allows users to find workbooks, reports, data models, folders, and workspaces across the organization without knowing their names in advance, with filters by document type, badge, and owner.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Yes** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Sigma agents are specific to a workbook, based on the predefined context of the data elements in the workbook and the access granted on the workbook."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: A Sigma agent is configured once with instructions, data sources, and tools and saved in a workbook. Colleagues with workbook access reuse it through a chat element, the API, or MCP, and the workbook's grants control their access.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Sigma agents are specific to a workbook, based on the predefined context of the data elements in the workbook and the access granted on the workbook."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: A saved built-in Sigma agent has workbook-scoped instructions, data, tools, and access. Colleagues with workbook access reuse it through its chat element.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Instructions and data sources provide the context, while actions and agents configured in your data platform provide the tools for an agent to take action or enrich insights."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Sigma supports building reusable, configurable agents with customized instructions, data sources, and tools to automate analytical workflows.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Yes** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "When an automated action sequence calls an agent, the agent runs once with the prompt included with the configured action, then runs its available tools (such as querying data sources), and returns structured output."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: A Sigma agent can rerun on a schedule with no user present, query fresh data, and deliver output via Slack, Teams, or email. The automated action sequences that run it are labeled '(Beta)', so the stage is preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "In this example, an agent runs every night to review the last 24 hours of usage data across multiple sources and send an email with the summary."
  - Source: https://help.sigmacomputing.com/docs/example-agent-implementations (checked 2026-10-26)
  - Reasoning: The scheduled task actually reruns a Sigma agent on fresh usage data and delivers its result by email. The automated action sequence feature used to schedule it is public beta.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can call an agent as part of an automated action sequence to automate multi-step workflows that gather data, generate structured output, and trigger downstream actions without any user interaction."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: Sigma agents can be called within automated action sequences triggered by schedules, events, or webhooks to run analyses and downstream actions autonomously.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Yes** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For specific customers represented in the survey data, the agent can send Slack or Microsoft Teams messages, such as to notify customer success managers about accounts that might be a churn risk."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Using action tools, a Sigma agent can itself send Slack, Teams, or email notifications, call APIs, and write to input tables. Those are side effects outside the analytics content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **Cluster and segment prospective customers**: An agent can review metadata for prospective customers and identify meaningful clusters. For each cluster, the agent can summarize why each segment is different, then suggest specific actions to take for each group. For example, accelerate prospective customer outreach by prompting the agent to draft an email message and send it to a list of relevant recipients in each cluster, then call an API to update an internal outreach tracker."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: A built-in agent can send emails and call an external API through configured action tools. These are side effects outside analytical content.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A notification action uses the action variables to send the summary and description to a Slack channel, Microsoft Teams, or email."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: Sigma agents can execute actions beyond answering questions, such as calling webhook and notification actions that post summaries to Slack, Microsoft Teams, or email, or modifying input tables.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If your question is vague, Assistant might prompt you to clarify what you're asking for before responding."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Only in-conversation clarifying questions are documented. Tool approval prompts gate actions; they are not a hand-off when the agent cannot proceed. No notification or review-queue hand-off exists for built-in agents.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "If your question is vague, Assistant might prompt you to clarify what you're asking for before responding."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: The built-in Assistant asks the user for clarification. No general stop-and-escalate mechanism for blocked tasks is established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "If your question is vague, Assistant might prompt you to clarify what you're asking for before responding."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Sigma Assistant prompts the user for clarification when a question is ambiguous, but there is no documented formal escalation or handoff to a designated human analyst or team when the AI cannot answer.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Yes** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "A Sigma agent can function as an orchestrator, instructing a set of warehouse agents to perform narrowly scoped tasks on specific data sources, and summarizing the responses to inform further analysis or take action in Sigma."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: The customer adds named Snowflake Cortex or Databricks Genie agents as tools on a Sigma agent, each with a description of when to call it and access controlled by 'Can use' grants. The Sigma agent then delegates bounded tasks to them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "A Sigma agent can function as an orchestrator, instructing a set of warehouse agents to perform narrowly scoped tasks on specific data sources, and summarizing the responses to inform further analysis or take action in Sigma."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: A customer adds named warehouse agents as tools, supplies descriptions and routing instructions, and grants access to those tools. The documented RECENT_SALES example is explicit bounded delegation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A Sigma agent can function as an orchestrator, instructing a set of warehouse agents to perform narrowly scoped tasks on specific data sources, and summarizing the responses to inform further analysis or take action in Sigma."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: A Sigma agent can orchestrate and delegate bounded analytical tasks to other named warehouse agents (such as Snowflake Cortex Agents or Databricks Genie Agents) configured as tools.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Yes** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can use MCP servers with [Sigma agents](/docs/sigma-agents) to add context to your conversation, retrieve ad hoc data, or permit the agent to take action in third-party tools."
  - Source: https://help.sigmacomputing.com/docs/configure-mcp-connectors (checked 2026-10-26)
  - Reasoning: Admins add outside MCP servers (Atlassian, Slack, SharePoint) as MCP connectors, and Sigma's own agents call them as tools. This is the outbound direction, separate from Sigma's MCP server.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can use MCP servers with [Sigma agents](/docs/sigma-agents) to add context to your conversation, retrieve ad hoc data, or permit the agent to take action in third-party tools."
  - Source: https://help.sigmacomputing.com/docs/configure-mcp-connectors (checked 2026-10-26)
  - Reasoning: Customers attach external MCP servers to built-in Sigma agents, with connector authentication and access controls.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can use MCP servers with [Sigma agents](/docs/sigma-agents) to add context to your conversation, retrieve ad hoc data, or permit the agent to take action in third-party tools."
  - Source: https://help.sigmacomputing.com/docs/configure-mcp-connectors (checked 2026-10-26)
  - Reasoning: Sigma agents act as MCP clients that can connect outward to external MCP servers to retrieve context and invoke third-party tools.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can use the assistant to correct formulas in existing columns (typically indicated by `Incomplete formula`, `Invalid Query`, or `Unknown column` cell values) or correct a manually entered formula when adding a new column."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The formula assistant repairs one broken column the user points it at, such as an 'Unknown column' error. Finding affected content after a definition change is done by non-AI content validation, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can use the assistant to correct formulas in existing columns (typically indicated by `Incomplete formula`, `Invalid Query`, or `Unknown column` cell values) or correct a manually entered formula when adding a new column."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The formula assistant repairs a specific existing formula the user selects, including unknown-column errors in workbook content. Automated AI discovery of all affected BI content is not documented; content validation is a separate non-AI workflow.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When Sigma detects a formula error, the formula assistant interprets the intent of your original formula and either suggests valid formulas or provides information about the error and how to correct it."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The formula assistant can diagnose and suggest fixes for errors in individual broken formulas, but it does not scan across an entire organization or workspace to find and fix all downstream BI content broken by an upstream change.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Yes** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Review existing workbook content and recommend improvements or next steps."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Sigma's AI apps are workbooks. Assistant reads an existing app's pages, elements, and layout in plan mode and can @-reference its objects.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "* Review existing workbook content and recommend improvements or next steps."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Sigma apps are workbook-native content. Assistant plan mode reads the existing app’s pages, elements, layout, and logic to improve it; app-building Assistant is labeled Beta in the linked tutorial.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Review existing workbook content and recommend improvements or next steps."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Sigma Assistant in plan mode can review existing workbook and AI app content to recommend improvements, architectural updates, or next steps.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Yes** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Assistant in plan or build mode can explore any data source you have permission to access, enabling you to ask questions, provide instructions, give feedback, and iterate as needed to build a complete dashboard or [AI app](/docs/ai-apps)."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Assistant builds persistent workbook apps (input tables, forms, actions) on live governed data, with an owner and permissions.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Assistant builds the app using an input table, form, and actions that record and clear form entries."
  - Source: https://help.sigmacomputing.com/docs/app-tutorial-data-collection (checked 2026-10-26)
  - Reasoning: The built-in Assistant constructs a persistent native app in a saved workbook, with live warehouse-backed input-table writes and normal ownership/access controls. This is shipped Assistant generation, not a person implementing an AI capability from general-purpose primitives.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Accelerate the development of AI-powered apps from idea to working product."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Sigma Assistant in build mode creates persistent AI-powered applications connected directly to live warehouse data, generating input tables, forms, layout elements, and automated actions from natural language prompts.

### A_OR: Can an outside coding agent read a generated app?

**Result: Yes (preview)** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Using this representation with the Sigma API, you can manage, create, and review workbooks without using the Sigma UI."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: An outside agent can pull an app's full definition (a workbook with input tables, layout, and actions) through the API. Beta, so preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Most workbook features and elements can be represented as code, including all table, pivot table, and input table elements, every chart type, all layout elements, controls, themes, panels, agents, and action effects."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Sigma apps consist of workbook input tables, layouts, and actions. Outside agents can retrieve this supported app definition through the workbook code API.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The representation, sometimes referred to as a schema or specification, defines the structure of the workbook, including its data sources, pages, and elements."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Outside agents can retrieve the complete JSON or YAML code specification of any Sigma workbook or AI app (including input tables, layout elements, containers, and actions) via the Get Workbook API endpoint with includeContents=true.

### A_OW: Can an outside coding agent build a generated app?

**Result: Yes (preview)** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Using the API, you can programmatically create and manage dashboards with tables, charts, controls, input tables, layout elements, and actions."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Outside agents can create app workbooks with input tables and actions through the code-representation API (Beta). The MCP server and sigma-workbooks skill do the same.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Using the API, you can programmatically create and manage dashboards with tables, charts, controls, input tables, layout elements, and actions."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: The first-party workbook code API creates the same persistent input-table, layout, and action objects that define a Sigma app, with live connection references and normal governance. Vendor skills explicitly teach outside agents to author these representations.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Using the API, you can programmatically create and manage dashboards with tables, charts, controls, input tables, layout elements, and actions."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Outside agents can programmatically create and update Sigma AI apps—including their core defining components of input tables, layout elements, and actions—via the Create a Workbook and Update Workbook Contents API endpoints using a JSON or YAML code representation.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: No** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: no
  - Quote: "You can run your agent evaluations in the Sigma UI using [input tables](/docs/intro-to-input-tables) to define and record the evaluations."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: Sigma ships no evaluation feature. Its official guide shows the customer building an eval suite from general-purpose tools (input tables, action sequences, AI columns, a judge agent, or REST API scripts). Under the rules that is customer-built and earns no.
- **GPT-6.1 Sol**: no
  - Quote: "You can run your agent evaluations in the Sigma UI using [input tables](/docs/intro-to-input-tables) to define and record the evaluations."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: This recipe has customers assemble evaluation cases, runners, and graders from input tables, actions, API scripts, and agents. It is a customer-built evaluation harness using general-purpose features, not a shipped first-party evaluation-suite capability under the stated rule.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To test whether an agent is behaving as expected, you can build an evaluation suite to test agent behavior systematically, rather than testing the agent ad hoc in chat."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: Sigma provides built-in capabilities and workflows to construct systematic evaluation suites that score agent responses across test prompts.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: No** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If you use [Azure OpenAI](/docs/manage-external-ai-integrations#add-azure-openai-as-an-ai-provider), you can choose which model to use."
  - Source: https://help.sigmacomputing.com/docs/supported-ai-models (checked 2026-10-26)
  - Reasoning: For every other provider, 'You cannot choose which model Sigma uses'. Azure OpenAI customers can choose the deployed model and admins can pick the provider. No fixed version pin is documented, so this is partial.
- **GPT-6.1 Sol**: no
  - Quote: "You cannot choose which model Sigma uses."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Sigma explicitly manages model selection. Provider selection does not let a customer pin a named model version.
- **Gemini 3.8 Flash**: no
  - Quote: "You cannot choose which model Sigma uses, and Sigma might update the supported models over time."
  - Source: https://help.sigmacomputing.com/docs/supported-ai-models (checked 2026-10-26)
  - Reasoning: Documentation explicitly states that customers cannot choose or pin the specific model version used by Sigma's AI features, as Sigma selects and updates models over time.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If *Span Type* is `generation`, includes all details sent to the LLM."
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: The AI_USAGE table records the full LLM input (prompt plus context and configuration), a Model column, tool-call inputs including the SQL run, and agentToolConfig metadata for agents. That covers inputs, configuration, model, and logic for auditing an answer.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Toggle between all conversations and agent conversations, or view details about a full conversation, including user input and AI output, user name, input and output tokens, total turns and duration of the conversation, model used and product that the conversation took place in."
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: AI usage retains prompts, outputs, model, and tool-call details including SQL; agent metadata can include tool configuration. No preservation of the source-data snapshot and complete answer configuration is established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Details about recent conversations in all products, including the total conversation count and the percentage of responses flagged with negative sentiment."
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: Sigma's AI usage logging captures prompts, model identifiers, token counts, and generated queries, but does not capture immutable data snapshots required for deterministic reproducibility.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: No** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: no
  - Quote: "To help the agent remember important context from conversations, add an input table to your workbook and create an action tool for the agent to use."
  - Source: https://help.sigmacomputing.com/docs/example-agent-implementations (checked 2026-10-26)
  - Reasoning: The only documented way for something a user tells a Sigma agent to change its later answers is this example. The customer builds 'agent memory' themselves from general tools: an input table, an Insert row action tool, instructions telling the agent to use it, and the table added back as a data source. The grading standard says a tutorial showing how to build a capability yourself with the vendor's general-purpose tools is customer-built, and customer-built capabilities earn no. No first-party feature is documented. Assistant feedback ('Good response'/'Bad response', with details shared with Sigma) and the Explain-this-chart Helpful/Not helpful buttons only rate answers. Editing data model AI context is configuration an editor changes, not a correction to an answer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documented response rating sends feedback to Sigma, without saying it changes later answers. Editing published AI context changes later chats, but the documentation does not connect a correction to an assistant answer to that mechanism. The agent-memory example describes a customer-configured storage workflow, not a documented correction-learning capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Sigma documentation does not describe any mechanism by which a person's correction to a built-in assistant or agent answer alters its subsequent answers, nor does it define the scope or reach of corrections. While users can submit Good/Bad response ratings and feedback descriptions for Assistant or agent responses, these feedback submissions are recorded for administrative review rather than updating or retraining future conversational answers.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Partly** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "For example, if a data model has an "endorsed" badge applied, Assistant is more likely to use that data source."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Assistant favors endorsed data models and shared metrics, and it includes an existing workbook in its response when one answers the question. Nothing binds it to certified definitions or flags a mismatch, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "* **The known validity of the data**: For example, if a data model has an "endorsed" badge applied, Assistant is more likely to use that data source. Similarly, if someone in your organization has created and shared metrics and data models, Assistant is more likely to select one of those when answering rather than using a table directly from your connected data platform."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Assistant prefers endorsed sources and shared metrics, but preference is not a binding certified-definition check and no mismatch is prevented or flagged.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Assistant uses any available metadata, such as certification badges, source descriptions, table descriptions, and column descriptions, to determine relevancy to a user's question, but can also determine relevancy using column names alone."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Sigma Assistant prefers certified and endorsed data models when selecting sources, but does not strictly verify generated answers against certified metrics or require answers to match certified definitions.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Partly (preview)** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Admins can configure monthly token usage limits for their organization to limit [AI column](/docs/create-ai-columns) usage costs."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-column-token-limit (checked 2026-10-26)
  - Reasoning: An enforced monthly token limit exists only for AI columns, and that page is labeled Beta. For Assistant and agents, the docs offer only alerts and point to the AI provider's own budgets, so this is partial.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Token usage limits are enforced based on usage estimates and are not exact."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-column-token-limit (checked 2026-10-26)
  - Reasoning: Sigma enforces monthly token limits for AI columns, per connection across users, using estimates that can overshoot the limit. This covers only AI columns. Assistant and agent consumption guidance documents monitoring alerts and recommends provider-side budgets rather than a Sigma-wide blocking cap. The AI-column limit is public beta.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Admins can configure monthly token usage limits for their organization to limit [AI column](/docs/create-ai-columns) usage costs."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-column-token-limit (checked 2026-10-26)
  - Reasoning: Admins can configure monthly token usage limits for AI columns, but this limit applies specifically to AI columns rather than capping overall organization-wide spend across all AI assistants and agents.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Yes** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "**Execution log**: Lists individual conversations by session, including when each started, who invoked it, its source, execution path, tokens consumed, latency, and outcome."
  - Source: https://help.sigmacomputing.com/docs/manage-agents-for-your-organization (checked 2026-10-26)
  - Reasoning: Admins can see latency per agent conversation on the customer's own workload. The AI usage dashboard also shows average response time by model.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* **Execution log**: Lists individual conversations by session, including when each started, who invoked it, its source, execution path, tokens consumed, latency, and outcome. Filter the log by source or error type. Click **View details** on a conversation to review the details, including each turn's question and response."
  - Source: https://help.sigmacomputing.com/docs/manage-agents-for-your-organization (checked 2026-10-26)
  - Reasoning: Admins measure actual built-in agent runs and latency on their own workload; AI usage also reports response time by model.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Details about requests by model, tokens by model, average response time by model, and unique users by model."
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: Sigma's AI usage dashboard measures and displays average response time and request latency by model.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Yes** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can filter by product and date range, or choose to filter by user, sentiment, model used, agent, or team name:"
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: The AI usage dashboard breaks token use down by user and by team name, including 'top users consuming tokens'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can filter by product and date range, or choose to filter by user, sentiment, model used, agent, or team name:"
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: The dashboard covers built-in Assistant, agents, and formula assistant, and attributes consumption by user and team.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Details about token consumption over time, top users consuming tokens, tokens used by product, and tokens used by agent."
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: The AI usage dashboard provides granular metrics breaking down AI consumption by top users, specific AI products, and individual agents over time.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Yes** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For example, for a *Trace Name* of `database_execute_query`, includes the SQL statement run for the tool call and the title shown to the user in the chat (if applicable) during the tool call."
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: AI_USAGE records each AI turn with the user's name, the prompt, and the SQL the AI ran. The audit log also has a separate AI_CONVERSATIONS category for Assistant and agent activity.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Input for the LLM. If *Span Type* is `tool`, JSON array of tool call details. For example, for a *Trace Name* of `database_execute_query`, includes the SQL statement run for the tool call and the title shown to the user in the chat (if applicable) during the tool call. If *Span Type* is `custom-agent`, includes a string of the message sent to the agent. If *Span Type* is `generation`, includes all details sent to the LLM."
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: The AI usage table records assistant/agent user identity, tool calls, and the executed SQL, identifying analytical sources and columns touched. This distinguishes AI activity from a generic product audit log.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The AI usage dashboard displays AI token usage across the entire organization for all relevant product surfaces that use AI, such as Sigma agents, Sigma Assistant, and the formula assistant."
  - Source: https://help.sigmacomputing.com/docs/ai-usage (checked 2026-10-26)
  - Reasoning: Sigma logs all AI assistant and agent interactions in an organization-wide AI usage dashboard and underlying audit tables, recording users, prompts, tokens, models, and timestamps.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Control who can access different AI features by enabling feature permissions on different account types assigned to users:"
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Each AI feature has its own account-type permission (Use Assistant, Manage agents, Use AI with formulas, Explain charts with AI). Admins enable these for some users and not others.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Control who can access different AI features by enabling feature permissions on different account types assigned to users:"
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Admins enable or disable Assistant, formula assistance, and chart explanations through per-account-type feature permissions assigned to subsets of users.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Control who can access different AI features by enabling feature permissions on different account types assigned to users:"
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Administrators can selectively enable or disable individual AI features (such as Sigma Assistant, formula assistant, AI columns, or MCP access) per account type for specific users and groups.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When you access a workbook draft, Sigma Assistant can operate in one of two specialized modes: [plan](#plan-mode) or [build](#build-mode)."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Assistant's build-mode changes stay in a workbook draft until the same user publishes them. Protected version tags have named approvers, but that workflow is not documented for AI changes, and agent tool approvals go only to the requester. Partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Use a protected tag to enforce a request approval process for setting tags on workbook, data model, or report versions."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-version-tags (checked 2026-10-26)
  - Reasoning: Protected tags route general content promotion requests to designated approvers, but the documentation does not connect this enforcement to Assistant changes. Assistant build work also stays in a requester-edited draft; this is only partial approval coverage.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Plan mode gathers context, makes decisions, and outlines a structured approach without building or editing anything."
  - Source: https://help.sigmacomputing.com/docs/use-ai-to-build-dashboards-and-apps (checked 2026-10-26)
  - Reasoning: Sigma Assistant in plan mode presents a proposed plan for user review before building, and workbook changes remain in an unpublished draft until published; however, this is confirmation by the requester, not a formal multi-user approval workflow by a separate role.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Yes**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When you choose the option to configure a warehouse-hosted model, your data is managed fully in your data platform."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Customers can run inference on Snowflake, Databricks, or BigQuery models hosted in their own data platform. The configured provider powers all of Sigma's AI features.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* To connect to an AI model hosted by your data platform, see [Configure a warehouse-hosted model as AI provider](/docs/configure-warehouse-ai-model-integration). When you choose the option to configure a warehouse-hosted model, your data is managed fully in your data platform."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Customers choose warehouse-hosted inference in their connected data platform, instead of an external provider; the configured provider powers Sigma AI features.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When you [configure AI features for your organization](/docs/configure-ai-features-for-your-organization), you can use the AI models available in your connected data platform as your AI provider to power Sigma AI features."
  - Source: https://help.sigmacomputing.com/docs/configure-warehouse-ai-model-integration (checked 2026-10-26)
  - Reasoning: Customers can configure warehouse-hosted AI models (such as Snowflake Cortex or Databricks) so that all AI inference executes directly inside their own cloud data warehouse.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For example, if row-level security or column-level security is applied to a data source, Sigma Assistant only works with data that you have access to."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Sigma Assistant runs as the asking user, so existing row-level and column-level security applies to what it returns. The workbook page says the same: 'Sigma Assistant inherits your permissions and data access.'
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "By default, warehouse agents such as a Snowflake Cortex Agent or a Databricks Genie Agent use the data in your data platform directly, so any data transformations and restrictions applied to your data in Sigma, such as row-level security, are not applied when you interact with the agent from Sigma."
  - Source: https://help.sigmacomputing.com/docs/use-warehouse-agents-sigma (checked 2026-10-26)
  - Reasoning: Native Sigma Assistant respects the asking user’s row and column security, but warehouse-agent surfaces available within Assistant explicitly bypass Sigma-applied restrictions. The row prescribes partly for this documented exception.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "All data access grants that apply elsewhere in Sigma also apply in Sigma Assistant."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Sigma Assistant strictly binds to the user's data access permissions, enforcing row-level security and column-level restrictions on all generated queries.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When you use the **Explain this chart** feature, Sigma captures a snapshot of the chart and passes this image, along with the chart’s underlying data, to your configured AI provider."
  - Source: https://help.sigmacomputing.com/docs/explain-visualizations-with-ai (checked 2026-10-26)
  - Reasoning: The docs name the receiving service (the configured AI provider or warehouse model) and what it receives. The AI notice says prompts, input data, customer data, and user info are sent. Retention at the provider is not stated (only Sigma's chat history retention is), so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "* When you configure an External AI Model , Input Data , Prompts , Customer Data , and User Information used for AI-enabled features will be sent to that External AI Model under your organization’s API credentials and will be handled per that External AI Model’s terms and your configuration."
  - Source: https://help.sigmacomputing.com/docs/notice-for-enabling-ai-enabled-features-in-sigma (checked 2026-10-26)
  - Reasoning: The documentation names possible receiving providers and identifies inputs, prompts, customer data, and user information sent to the selected service. It does not establish retention periods at all receiving services.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When you enable a Warehouse AI Model , your Input Data , Prompts , Customer Data , and User Information are transmitted to the AI/LLM hosted or run by your Data Warehouse ."
  - Source: https://help.sigmacomputing.com/docs/notice-for-enabling-ai-enabled-features-in-sigma (checked 2026-10-26)
  - Reasoning: Sigma documents that when enabling a warehouse AI model, input data, prompts, customer data, and user information are transmitted to the warehouse LLM, but it does not specify retention periods for all external providers.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Sigma uses the [global endpoint](https://docs.cloud.google.com/gemini-enterprise-agent-platform/resources/locations) to access the supported model."
  - Source: https://help.sigmacomputing.com/docs/manage-external-ai-integrations (checked 2026-10-26)
  - Reasoning: Processing location is stated only for some providers: Gemini uses the global endpoint, and Bedrock uses the region the customer sets. Customer-owned chat-history buckets must be in the org's region. No statement covers processing and storage for all AI features, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "4. (Optional, BigQuery connections only) In the **Region** dropdown menu, select the region to access the Vertex AI API from. By default, Sigma uses `us-central1`."
  - Source: https://help.sigmacomputing.com/docs/configure-warehouse-ai-model-integration (checked 2026-10-26)
  - Reasoning: A specific processing-region configuration is documented for BigQuery inference. There is no complete processing-and-storage region account for every Sigma AI feature and provider.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Sigma uses the global endpoint to access the supported model."
  - Source: https://help.sigmacomputing.com/docs/configure-warehouse-ai-model-integration (checked 2026-10-26)
  - Reasoning: When warehouse-hosted models are used, processing occurs within the customer's data platform, but Sigma's external integrations specify global endpoints without granular geographic residency guarantees for inference.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Not found**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page in the Sigma corpus says whether customer data, prompts or feedback are used to train AI models. The AI disclaimer page covers which models are used, data sent to warehouse or external AI providers, and accuracy limits, but says nothing about training. Every hit for 'train' or 'training' is about Sigma training videos or courses.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No default no-training commitment was found in the local Sigma product documentation. The AI notice describes sending data to the configured warehouse or external provider and defers external-model handling to that provider's terms and customer configuration; it does not state that customer data is excluded from model training by default.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Sigma documentation contains no statement that customer data is not used to train AI models by default. The documentation notes that input data, prompts, customer data, and user information are transmitted to third-party applications (such as OpenAI/Azure OpenAI) or warehouse AI models and handled according to those external providers' terms and customer configurations.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Partly** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can limit Sigma Assistant to use only sources that you specify."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Admins can set 'Specific sources' for Assistant, but users can still pick other sources they can access. The setting also doesn't apply to Assistant in workbooks, so it is a default rather than an enforced limit. Partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can configure Sigma Assistant to use only specific data sources or any data sources available to users by default. Users can always manually choose a source for Assistant to use from the sources that they have access to."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Admin curation changes default source selection, but users can override it and workbook Assistant can access all permitted sources. Agent authors can also scope each agent, without a separate enforced tenant-wide restriction.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "These data source settings only apply to Sigma Assistant when used from Sigma Home."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Admins can configure selected data sources for Sigma Assistant from Sigma Home, but this restriction does not enforce a tenant-wide boundary in workbook contexts where Assistant can query any table the user can view.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To build workbooks, you must be assigned an account type with the **Create, edit, and publish workbooks** and **Create, edit, and publish workbooks with Sigma MCP** permissions enabled."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Writing through the MCP server needs its own permission. An admin can give a user UI edit rights but withhold the MCP build permission, so the outside agent acting for that user is limited to reading.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Impersonating users allows admins to act as a user and view, edit, and access Sigma resources based on the [user's account type](/docs/account-type-and-license-overview)."
  - Source: https://help.sigmacomputing.com/docs/impersonate-users (checked 2026-10-26)
  - Reasoning: The documented API issues an impersonation bearer token for another user and performs calls under that identity. An admin can delegate a narrower non-admin identity to an outside agent rather than its full admin access.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Connect your AI assistant to the Sigma MCP server so it can search documents, query data, and build workbooks using the same permissions you have in your Sigma organization."
  - Source: https://help.sigmacomputing.com/docs/interact-with-ai-tools (checked 2026-10-26)
  - Reasoning: Outside agents connecting through the Sigma MCP server act under the delegated permissions of the authorizing user, without separate narrower scoping specific to the agent.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Also fires for usage of the Sigma MCP `describe` tool to view the schema / DDL of a data model or workbook."
  - Source: https://help.sigmacomputing.com/docs/audit-log-events-and-metadata (checked 2026-10-26)
  - Reasoning: An outside agent can read a data model's or workbook's schema and DDL through the MCP describe tool and infer upstream sources. The lineage graph is documented only in the UI, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The representation, sometimes referred to as a schema or specification, defines the structure of the data model, including its data sources, pages, elements, and their configurations."
  - Source: https://help.sigmacomputing.com/docs/manage-data-models-as-code (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve a model specification containing source connection/path references and calculation formulas, and infer upstream dependencies from that model logic. A documented programmatic traversal of lineage from a number is not established.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "The representation, sometimes referred to as a schema or specification, defines the structure of the workbook, including its data sources, pages, and elements."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: An outside agent can inspect data sources and upstream lineage by parsing the workbook code specification JSON/YAML, but Sigma does not provide a dedicated upstream lineage API endpoint.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Yes** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Also fires for Sigma MCP Server requests."
  - Source: https://help.sigmacomputing.com/docs/audit-log-events-and-metadata (checked 2026-10-26)
  - Reasoning: The audit log records MCP server traffic separately (filter api_path '/mcp'). Each entry carries the delegated user's ID and email, and the method, path, and params of the call. MCP query and describe calls are also logged with the affected Inode ID.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Also fires for Sigma MCP Server requests."
  - Source: https://help.sigmacomputing.com/docs/audit-log-events-and-metadata (checked 2026-10-26)
  - Reasoning: The PUBLIC_API/API_USAGE audit event explicitly covers MCP and code clients. Its documented fields include method, path, path/query/body parameters, and the responsible user ID/email (plus impersonation identity), tying delegated API activity to targeted analytical objects.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can use the "kind":"mcp" tag to monitor queries sent by the Sigma MCP server."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Queries sent by the Sigma MCP server can be monitored using query tags in the data platform, but Sigma's audit logs do not distinguish actions taken directly by the user from those taken on their behalf by an outside agent.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Use a protected tag to enforce a request approval process for setting tags on workbook, data model, or report versions."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-version-tags (checked 2026-10-26)
  - Reasoning: When an outside agent edits a workbook over MCP, 'Sigma publishes a new version' immediately. Protected version tags provide named approvers, but that general workflow is not documented for agent changes, so this is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Use a protected tag to enforce a request approval process for setting tags on workbook, data model, or report versions."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-version-tags (checked 2026-10-26)
  - Reasoning: This is a general document promotion workflow with designated approvers, not a policy holding outside-agent writes. MCP edits immediately publish a version, and agent action approvals are skipped through the API.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The Sigma MCP server cannot create workbooks in a shared folder, even if you have **Can edit** access to the folder."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Workbooks created by the Sigma MCP server are saved to the user's private documents folder and do not take effect in shared team folders until the user shares or moves them, but no separate role review or approval workflow is enforced.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Each published version includes a detailed list of changes, called the edit history."
  - Source: https://help.sigmacomputing.com/docs/workbook-versions-and-version-history (checked 2026-10-26)
  - Reasoning: Version and edit history lets editors review and compare changes. Nothing says it is a diff of changes made by an outside agent, so this is the generic case: partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can use the version and edit history to review drafted changes, compare or revert to older published versions, identify who on your team made a specific edit or set of changes, or identify which version is tagged with a specific version tag."
  - Source: https://help.sigmacomputing.com/docs/workbook-versions-and-version-history (checked 2026-10-26)
  - Reasoning: Sigma provides general workbook change comparison and edit history. The documentation does not explicitly show a before/after diff of changes made by an outside agent.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Each published version includes a detailed list of changes, called the edit history."
  - Source: https://help.sigmacomputing.com/docs/workbook-versions-and-version-history (checked 2026-10-26)
  - Reasoning: Sigma provides an edit history listing changes for workbook versions, but this is a generic change history rather than a diff specifically covering changes made by an outside agent.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When your AI tool edits an existing workbook, Sigma publishes a new version of the workbook."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: An outside agent's MCP edit becomes a new published version in version history. The version-history page documents 'Restore version as draft' to revert to an earlier published version.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To return a workbook to a previously published version, or to a specific change in the workbook version history, restore a previous change or version to draft."
  - Source: https://help.sigmacomputing.com/docs/workbook-versions-and-version-history (checked 2026-10-26)
  - Reasoning: MCP edits publish a new workbook version, and version history can restore its predecessor and republish it. This reverts governed workbook content, not separately written input-table data.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To return a workbook to a previously published version, or to a specific change in the workbook version history, restore a previous change or version to draft."
  - Source: https://help.sigmacomputing.com/docs/workbook-versions-and-version-history (checked 2026-10-26)
  - Reasoning: Changes made to workbooks, including those made by external agents or the MCP server, can be reverted by restoring an earlier change or published version from the workbook version history.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Sigma MCP server allows you to use natural language to interact programmatically with your Sigma organization using Model Context Protocol (MCP) tools."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Sigma hosts its own MCP server with documented OAuth authentication. Outside agents use it to search, describe, and query customer data and build workbooks, with no middleware. It carries no beta label.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Sigma MCP server authenticates to Sigma using OAuth."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Sigma documents its hosted product MCP server, remote HTTP connection, OAuth authentication, and analytical access. The page does not label this server beta or preview.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Sigma MCP server allows you to use natural language to interact programmatically with your Sigma organization using Model Context Protocol (MCP) tools."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Sigma provides a first-party, vendor-supported MCP server enabling external AI tools to discover, query, and build content in Sigma.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Browse and list collections of documents, helping you to quickly locate documents across large organizations."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Through the MCP server, an outside agent can search and list documents, data models, tables, and agents across the org without knowing IDs. The CLI also offers 'sigma api workbooks list'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Browse and list collections of documents, helping you to quickly locate documents across large organizations."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents can enumerate document collections, including workbooks, data models, and tables, rather than needing a known object ID.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The AI tool searches across your Sigma organization for relevant documents and elements and locates a relevant data source."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents connected to the Sigma MCP server can search and discover documents, elements, tables, and data models across the organization.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Sigma MCP server authenticates to Sigma using OAuth."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Agents authenticate with named credential types: OAuth acting for a user (MCP, CLI) or REST API client credentials (API, CLI API-key profiles).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Sigma MCP server authenticates to Sigma using OAuth."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: OAuth is a documented credential mechanism for outside agents; API/CLI routes additionally support API client credentials.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If prompted to choose an authentication method, select OAuth."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Outside agents connecting via the Sigma MCP server authenticate through OAuth, and REST API access uses API tokens (client ID and secret).

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can use agent skills published by Sigma to provide reference materials and instructions to your AI assistants."
  - Source: https://help.sigmacomputing.com/docs/install-skills-for-ai-assistants (checked 2026-10-26)
  - Reasoning: Sigma publishes the sigma-agent-skills repository (a Claude Code plugin, AGENTS.md, and a Cursor plugin) with skills for the API, CLI, and data models. The workbook and report skills are Beta, but the core skills carry no beta label.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can use agent skills published by Sigma to provide reference materials and instructions to your AI assistants."
  - Source: https://help.sigmacomputing.com/docs/install-skills-for-ai-assistants (checked 2026-10-26)
  - Reasoning: Sigma publishes installable agent skills for API authentication, CLI use, and document modeling. The basic skills are generally available; workbook/report authoring skills are separately labeled beta.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can use agent skills published by Sigma to provide reference materials and instructions to your AI assistants."
  - Source: https://help.sigmacomputing.com/docs/install-skills-for-ai-assistants (checked 2026-10-26)
  - Reasoning: Sigma publishes pre-packaged agent skills that provide documentation, OpenAPI specs, and instructions to outside AI assistants.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Simplify requests to the Sigma REST API for users and AI assistants"
  - Source: https://help.sigmacomputing.com/docs/sigma-cli (checked 2026-10-26)
  - Reasoning: Sigma's CLI is documented for AI assistants, and a vendor 'sigma-cli' agent skill exists. Non-interactive authentication works through API client-credential profiles.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* Simplify requests to the Sigma REST API for users and AI assistants"
  - Source: https://help.sigmacomputing.com/docs/sigma-cli (checked 2026-10-26)
  - Reasoning: Sigma supports a CLI explicitly intended for AI assistants, including structured API commands and saved API-client-credential profiles for noninteractive requests.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Configure the Sigma CLI to give agents simple, structured commands for the Sigma REST API."
  - Source: https://help.sigmacomputing.com/docs/interact-with-ai-tools (checked 2026-10-26)
  - Reasoning: Sigma provides and documents a first-party CLI specifically designed to give AI agents structured commands for the Sigma REST API.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Yes** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You must be assigned a Sigma [account type](/docs/account-type-and-license-overview) with the **Use Sigma MCP with OAuth** permission enabled."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: MCP access depends on its own account-type permission ('Use Sigma MCP with OAuth', plus a separate MCP build permission). Admins enable it for some users and not others, separately from ordinary data permissions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* You must be assigned a Sigma [account type](/docs/account-type-and-license-overview) with the **Use Sigma MCP with OAuth** permission enabled."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: A distinct account-type permission controls MCP access for selected users; separate MCP authoring permissions control outside-agent writes. This is separate from ordinary object permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You must be assigned a Sigma [account type](/docs/account-type-and-license-overview) with the **Use Sigma MCP with OAuth** permission enabled."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Administrators can control which users or groups can connect outside agents by enabling or disabling the 'Use Sigma MCP with OAuth' permission on specific account types.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Screenshots count toward the [rate limit](/reference/get-started-sigma-api#api-limits) on the Sigma API export endpoints, which is 400 requests per minute."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Only the general API rate limit is documented as applying to MCP agent use. No agent-specific quota or cap exists. Partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "* Screenshots count toward the [rate limit](/reference/get-started-sigma-api#api-limits) on the Sigma API export endpoints, which is 400 requests per minute. If a screenshot takes longer than 10 minutes to generate, the request fails."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: The outside-agent MCP interface explicitly inherits an API export-endpoint rate limit for screenshots. It is a general API limit, not a separate configurable agent-wide quota.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Screenshots count toward the [rate limit](/reference/get-started-sigma-api#api-limits) on the Sigma API export endpoints, which is 400 requests per minute."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: The Sigma API enforces general rate limits (such as 400 requests per minute for export endpoints) that apply to MCP requests, but there is no dedicated agent-specific quota or spend cap.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Add organization-specific context, such as the fiscal year quarters that your organization uses to conduct business or the names of subsidiary organizations."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: Agent instructions hold business context that the Sigma agent reads before answering. Data models also take AI context for Sigma Assistant (Beta).
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* Add organization-specific context, such as the fiscal year quarters that your organization uses to conduct business or the names of subsidiary organizations."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: Customers put business knowledge into built-in Sigma agent instructions read when the agent answers. Data-model AI context is an additional beta mechanism.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Add AI context to a data model to improve the accuracy and consistency of Sigma Assistant responses when answering questions that use the data model as a source."
  - Source: https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models (checked 2026-10-26)
  - Reasoning: Users can add business context, calculation rules, terminology, and instructions directly to a data model to teach the AI how to answer questions correctly.

### C5: Can the business context you give the AI live in version control?

**Result: Yes (preview)**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Most workbook features and elements can be represented as code, including all table, pivot table, and input table elements, every chart type, all layout elements, controls, themes, panels, agents, and action effects."
  - Source: https://help.sigmacomputing.com/docs/manage-workbooks-as-code (checked 2026-10-26)
  - Reasoning: Agents, including their instructions, can be exported and updated as JSON or YAML (Beta), which could be kept in files. The source of truth is still Sigma, and Git-based review or rollback of context is not documented. Partial, preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "This is an example representation of a workbook, retrieved using the [Get a workbook](/reference/get-workbook) endpoint with the query parameter `includeContents=true`."
  - Source: https://help.sigmacomputing.com/docs/example-representation-workbook-with-an-agent (checked 2026-10-26)
  - Reasoning: The documented YAML includes an agent’s instructions and dataSources. That business context can therefore live in diffable, reviewable, rollback-capable files through the first-party workbook-as-code interface.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Representations like this one can be used to create a workbook from code using the [Create a workbook](/reference/create-workbook) endpoint."
  - Source: https://help.sigmacomputing.com/docs/example-representation-workbook-with-an-agent (checked 2026-10-26)
  - Reasoning: Agent definitions, system prompts, instructions, and context are represented in workbook JSON and YAML code specifications that can be managed and tracked in Git or other version control systems.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes (preview)**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Sigma agents are specific to a workbook, based on the predefined context of the data elements in the workbook and the access granted on the workbook."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Context belongs to a single agent in a workbook, and data model AI context belongs to a single model. Different teams can get different context; there is no single global set.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Sigma agents are specific to a workbook, based on the predefined context of the data elements in the workbook and the access granted on the workbook."
  - Source: https://help.sigmacomputing.com/docs/sigma-agents (checked 2026-10-26)
  - Reasoning: Built-in agents have different workbook-specific instructions and data, with workbook access controlling their audiences. This supports team-specific context rather than one tenant-wide instruction set.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "You can add AI context to a data model to help [Sigma Assistant](/docs/ask-natural-language-queries-with-assistant) better understand how to use your data model as a data source."
  - Source: https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models (checked 2026-10-26)
  - Reasoning: AI context is scoped to individual data models or agents, ensuring that business rules, definitions, and guidelines apply specifically to the relevant model or domain rather than polluting the entire workspace.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Partly**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Use this approach only when production users see a specific [tagged version](/docs/add-version-tags-to-workbooks-and-data-models) of the workbook and agent, and the latest published version is visible only to users performing evaluations."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: Version tags can stage agent instruction changes for testing before production users see them. That test step is customer-assembled, and there is no staging for Assistant's data model AI context, which uses only the published version. Partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Use this approach only when production users see a specific [tagged version](/docs/add-version-tags-to-workbooks-and-data-models) of the workbook and agent, and the latest published version is visible only to users performing evaluations."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: For Sigma agents, the documented evaluation workflow separates the tested workbook and agent from production users through version tags, and explicitly discusses evaluating instruction and data-model AI-context changes. This is a customer-assembled testing workflow using Sigma version isolation. Assistant itself only uses the published data-model version, so the documentation does not establish a staged context-validation surface for Assistant.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Before and after updating the AI context available to a data model, to see if it has a positive or negative effect on analysis or source selection."
  - Source: https://help.sigmacomputing.com/docs/build-agent-evaluation-suite (checked 2026-10-26)
  - Reasoning: Sigma documents using evaluation suites to systematically test and validate data model AI context before and after updates to verify the impact on analysis quality.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Not found**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Assistant answers show a reasoning summary, the actions performed, the queries and SQL, and the sources used. Agent answers show 'Analyzed using <warehouse agent>' with that agent's SQL. No page says an answer surfaces the specific data model AI context, agent instruction, description or rule that shaped it. The AI context pages only say context is used and can be viewed via File > View AI context, separately from any answer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Assistant exposes reasoning, queries, and conversation sources, but no page establishes that an answer surfaces the specific AI-context instruction, business rule, description, or curated example that shaped it. Attaching and linking workbook objects also does not establish instruction-level attribution.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Sigma documentation does not document that the built-in assistant or agents surface the specific piece of business context, instruction, or rule that shaped an answer. Responses display reasoning summaries, execution duration, and underlying data sources, but do not cite the specific business context text configured on data models or agent instructions.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Descriptions can be inherited from your data platform, [imported from dbt](/docs/manage-dbt-integration), or set in Sigma:"
  - Source: https://help.sigmacomputing.com/docs/data-modeling-best-practices (checked 2026-10-26)
  - Reasoning: Assistant reads column and table descriptions inherited from the warehouse or imported from dbt to judge relevance, so nobody has to retype them in Sigma.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Descriptions can be inherited from your data platform, [imported from dbt](/docs/manage-dbt-integration), or set in Sigma:"
  - Source: https://help.sigmacomputing.com/docs/data-modeling-best-practices (checked 2026-10-26)
  - Reasoning: The page explicitly connects inherited warehouse/dbt column, table, and model descriptions to Sigma Assistant context and source relevance. The same modeled context is recommended for outside agents using MCP.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Assistant uses any available metadata, such as certification badges, source descriptions, table descriptions, and column descriptions, to determine relevancy to a user's question, but can also determine relevancy using column names alone."
  - Source: https://help.sigmacomputing.com/docs/configure-ai-features-for-your-organization (checked 2026-10-26)
  - Reasoning: Sigma Assistant automatically inherits table and column descriptions, annotations, and metadata synced from connected warehouses and catalogs when interpreting queries.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Partly (preview)**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: partly, preview
  - Quote: "**Never** use this data model for forecasting or predictions."
  - Source: https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models (checked 2026-10-26)
  - Reasoning: Off-limits guidance exists only as AI-context instruction text (Beta). The 'Visible as source' toggle and specific-sources setting are general or permission settings, not AI deprecation marks. Partial.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "**Never** use this data model for forecasting or predictions."
  - Source: https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models (checked 2026-10-26)
  - Reasoning: This is a documented instruction that makes the built-in Assistant avoid a model for a specified use. It is model-followed guidance, not product-enforced AI exclusion, that limits the verdict to partly.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "**Never** use this data model for forecasting or predictions. If a user attempts to use it for those purposes, please direct them to the Sales Data - Predictions and Forecasting data model."
  - Source: https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models (checked 2026-10-26)
  - Reasoning: Documentation demonstrates providing negative instructions in AI context telling the model never to use specific data for certain purposes, but this relies on model compliance rather than product-enforced exclusion rules.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly (preview)**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, preview
  - Quote: "You must be the data model owner or be granted **Can edit** [access](/docs/folder-and-document-permissions) to the data model."
  - Source: https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models (checked 2026-10-26)
  - Reasoning: AI context belongs to the data model, whose owner role is documented. No review or approval step for context changes is documented, so this is partial.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "* You must be the data model owner or be granted **Can edit** [access](/docs/folder-and-document-permissions) to the data model."
  - Source: https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models (checked 2026-10-26)
  - Reasoning: The AI-context page explicitly names the data-model owner for context maintained on that model. This supplies an owner role for Assistant's model-specific business context, but documents no review or approval step for changes. The model AI-context feature is public beta.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "You must be the data model owner or be granted **Can edit** [access](/docs/folder-and-document-permissions) to the data model."
  - Source: https://help.sigmacomputing.com/docs/manage-ai-context-for-data-models (checked 2026-10-26)
  - Reasoning: Updating AI context on a data model requires ownership or edit permissions, but changes do not go through a separate role review or sign-off process before taking effect.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Not found** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Sigma Assistant answers from 'Table in your data platform' or data models and uses metadata such as table and column descriptions, which can come from dbt. Descriptions are metadata, not warehouse logic. No page says the Assistant or a Sigma agent reads view definitions, dbt models or Snowflake semantic views. A Sigma agent or the Assistant can hand a question to a Snowflake Cortex Agent or Databricks Genie Agent. The analysis is then done by the warehouse vendor's agent, which 'use[s] the data in your data platform directly', so it is not Sigma's assistant reading the logic. The dbt Semantic Layer integration is queried by users in workbooks, with no Assistant involvement documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The corpus establishes Assistant using Sigma data-model metrics, relationships, and descriptions, including imported dbt descriptions. It does not establish Assistant using warehouse-level definitions such as dbt model logic or warehouse semantic views. General access to warehouse data and separate warehouse-agent integrations do not settle that object and actor.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Sigma Assistant can answer questions about any data source that you have access to."
  - Source: https://help.sigmacomputing.com/docs/ask-natural-language-queries-with-assistant (checked 2026-10-26)
  - Reasoning: Sigma Assistant directly reads tables, views, schemas, and logic defined in the connected cloud data warehouse.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Sigma can write warehouse views and materializations from workbook elements, but those pages describe a person doing it and never mention the Assistant or agents. Sigma agents can run action tools, for example inserting input table rows or calling stored procedures. That writes data or runs existing procedures. It does not author transforms, models or views. No page documents the Assistant or a Sigma agent authoring warehouse logic.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Assistant is documented building workbook elements, formulas, input tables, and actions. Warehouse-view creation is documented as a separate user workflow, without establishing that Assistant authors a view, transform, or model in the warehouse. Writing input-table data or invoking an existing stored procedure does not establish authoring warehouse logic.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Sigma documentation does not state that the built-in assistant can author logic that lands in the customer's data warehouse (such as warehouse views, dbt models, transforms, or DDL). Sigma Assistant generates queries to read data and creates workbook visual elements, while warehouse views and write-back configurations require manual creation in the user interface.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Sigma MCP server lets outside agents search for warehouse tables and describe them: column names, data types, definitions and descriptions. The documented example returns 'the column names and data types of all the columns in the table'. Per the grading standard, table and column names, types and descriptions are not logic. No MCP tool, CLI command, skill or API is documented as returning view definitions, dbt model SQL or semantic views. Workbook code representations contain no warehouse view or materialization definitions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The MCP and CLI documentation establishes exploring source schemas and Sigma document definitions, but not retrieving warehouse view SQL, dbt model logic, or warehouse semantic-view definitions. Reading a Sigma model representation or table metadata is not reading warehouse-level logic.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Sigma documentation does not provide an interface for outside coding agents to read warehouse-level logic (such as view definitions, dbt models, or warehouse semantic views) through Sigma. The documented MCP server, CLI, and REST API describe data source tables and columns, but do not expose warehouse view SQL definitions or warehouse transformation logic.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Not found** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Outside agents can build and edit Sigma workbooks through the MCP server, CLI and skills. That is BI content inside Sigma, not warehouse logic. The documentation never ties outside-agent workbook edits to creating warehouse views or materializations. The workbook code representation pages have no warehouse view or materialization fields. No documented outside-agent route authors transforms, models or views in the warehouse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The external interfaces document authoring Sigma workbooks and data models, not warehouse transforms, models, or views. Warehouse views can be created through a user-facing workflow, but no documented external interface found here exposes that operation. Input-table writeback changes data, not warehouse logic.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Sigma documentation does not provide an interface for outside coding agents to author warehouse-level logic (such as warehouse views, transforms, or database DDL) through Sigma into the customer's data warehouse. While warehouse views can be created by users via the Sigma UI on workbook elements, neither the MCP server nor the CLI/API expose endpoints to create warehouse views or write logic to the warehouse.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Yes**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Sigma supports [dbt Semantic Layer](https://www.getdbt.com/product/semantic-layer) integrations, allowing you to leverage your predefined dbt metrics in Sigma workbooks."
  - Source: https://help.sigmacomputing.com/docs/configure-a-dbt-semantic-layer-integration (checked 2026-10-26)
  - Reasoning: Sigma uses existing dbt Semantic Layer metrics directly, so nobody has to rebuild them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Sigma supports [dbt Semantic Layer](https://www.getdbt.com/product/semantic-layer) integrations, allowing you to leverage your predefined dbt metrics in Sigma workbooks for ad-hoc analysis, recurring reports, and organizational dashboards."
  - Source: https://help.sigmacomputing.com/docs/query-a-dbt-semantic-layer-integration (checked 2026-10-26)
  - Reasoning: The product consumes existing dbt metric definitions instead of requiring their recreation in Sigma.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Sigma supports [dbt Semantic Layer](https://www.getdbt.com/product/semantic-layer) integrations, allowing you to leverage your predefined dbt metrics in Sigma workbooks."
  - Source: https://help.sigmacomputing.com/docs/configure-a-dbt-semantic-layer-integration (checked 2026-10-26)
  - Reasoning: Sigma integrates with external metric stores such as the dbt Semantic Layer, importing and leveraging predefined metrics directly in workbooks.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If you [create metrics in your data model](/docs/create-and-manage-metrics), Sigma Assistant uses them to perform aggregate calculations."
  - Source: https://help.sigmacomputing.com/docs/data-modeling-best-practices (checked 2026-10-26)
  - Reasoning: Assistant answers using data model metrics and relationships (joins) the team has defined.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "* If you [create metrics in your data model](/docs/create-and-manage-metrics), Sigma Assistant uses them to perform aggregate calculations. When you set up a metric, do the following:"
  - Source: https://help.sigmacomputing.com/docs/data-modeling-best-practices (checked 2026-10-26)
  - Reasoning: The built-in Assistant uses shared metrics, and the adjacent relationship guidance establishes joins from the shared Sigma data model.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If the data source contains metrics, and the columns used by the metric are visible in the data element, the agent can use the metrics."
  - Source: https://help.sigmacomputing.com/docs/build-agents (checked 2026-10-26)
  - Reasoning: Sigma agents can read and use predefined metrics from data sources when the columns used by the metric are visible in the data element.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Sigma’s formula assistant uses AI to write new formulas, correct formula errors, and explain existing formulas applied to elements in workbooks and data models."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The built-in formula assistant writes and edits calculated-column formulas inside data models, which are Sigma's shared definition layer.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Sigma’s formula assistant uses AI to write new formulas, correct formula errors, and explain existing formulas applied to elements in workbooks and data models."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The built-in formula assistant writes or changes calculated-column logic directly in data-model elements. These are maintained shared model fields/dimensions reused downstream; the evidence does not establish arbitrary metric or relationship management.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To use the formula assistant in a workbook, open the workbook in **Explore** or **Edit** mode. To use the formula assistant in a data model, open the data model's [workbook page](/docs/intro-to-data-models-archive#data-model-workbook-page)."
  - Source: https://help.sigmacomputing.com/docs/use-ai-with-formulas (checked 2026-10-26)
  - Reasoning: The formula assistant can write and edit calculation formulas within data models, but the assistant cannot autonomously create new shared data models from scratch.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Explore data sources and documents in Sigma by asking questions about column names, definitions, and descriptions."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: Through the MCP server, an outside agent can read field definitions and descriptions in data models.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Explore data sources and documents in Sigma by asking questions about column names, definitions, and descriptions."
  - Source: https://help.sigmacomputing.com/docs/use-sigma-mcp-server (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve business definitions and descriptions rather than infer meanings solely from column names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can use the Sigma API to retrieve, update, and create [data models](/docs/get-started-with-data-modeling) based on a JSON or YAML representation."
  - Source: https://help.sigmacomputing.com/docs/manage-data-models-as-code (checked 2026-10-26)
  - Reasoning: Outside agents can retrieve the complete schema and definitions of shared data models via the Sigma REST API using a JSON or YAML representation.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The `sigma-data-models` skill provides instructions and reference materials that an AI assistant can use to build and manage Sigma [data models](/docs/get-started-with-data-modeling) from code."
  - Source: https://help.sigmacomputing.com/docs/install-skills-for-ai-assistants (checked 2026-10-26)
  - Reasoning: Outside agents can create and update data models (the semantic layer) through the code-representation API, using Sigma's own skill.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can use the Sigma API to retrieve, update, and create [data models](/docs/get-started-with-data-modeling) based on a JSON or YAML representation."
  - Source: https://help.sigmacomputing.com/docs/manage-data-models-as-code (checked 2026-10-26)
  - Reasoning: The first-party model API retrieves, creates, and updates the semantic specification, explicitly including tables, shared metric calculations, and relationships. Vendor agent skills document outside-agent use of that interface.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To update an existing data model from a code representation, call the [Update a data model from a code representation](/reference/update-data-model-spec) endpoint with the code representation in the request body."
  - Source: https://help.sigmacomputing.com/docs/manage-data-models-as-code (checked 2026-10-26)
  - Reasoning: Outside agents can create and update shared data models programmatically via the Sigma REST API endpoints using JSON or YAML code representations.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Yes**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Instead of storing data in a database table, a warehouse view saves a SQL statement that expresses specific query logic defined by an individual data element or input table in Sigma."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-workbook-warehouse-views (checked 2026-10-26)
  - Reasoning: Logic modeled in Sigma can be saved to the data platform as a warehouse view.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Instead of storing data in a database table, a warehouse view saves a SQL statement that expresses specific query logic defined by an individual data element or input table in Sigma."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-workbook-warehouse-views (checked 2026-10-26)
  - Reasoning: Sigma publishes element logic as a warehouse-resident SQL view that stays linked to published Sigma definitions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Warehouse views are virtual tables saved to your data platform."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-workbook-warehouse-views (checked 2026-10-26)
  - Reasoning: Sigma allows definitions and analytical elements written in the tool to be saved back down to the data platform as virtual tables (warehouse views) queryable by other applications.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can also create a data model from a table in a workbook."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-data-models (checked 2026-10-26)
  - Reasoning: A workbook table and its calculations become a shared, reusable data model in a few menu clicks (Advanced options > Create data model). No developer has to rewrite them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can also create a data model from a table in a workbook."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-data-models (checked 2026-10-26)
  - Reasoning: The direct Create data model action converts an existing analysis table, including its calculated-column logic, into reusable model content that can be published and shared without a developer rewriting the calculation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can also create a data model from a table in a workbook."
  - Source: https://help.sigmacomputing.com/docs/create-and-manage-data-models (checked 2026-10-26)
  - Reasoning: Sigma allows users to promote an ad-hoc table or calculation in a workbook into a reusable, governed shared data model.

