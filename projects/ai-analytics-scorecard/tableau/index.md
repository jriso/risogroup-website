# Tableau: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/tableau/

AI Feature Score **68**, #8 of 15 (BI and analytics tool). Built-in AI 60, external AI 59, other 74. Analysis 69, Building and maintaining assets 64, Context and connections 68, Reliability and controls 69. By model: Claude Opus 5.5 64, GPT-6.1 Sol 68, Gemini 3.8 Flash 68.

## Score breakdown

Four areas, 25 points each. Shown for Gemini 3.8 Flash, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 17.4 of 25
- Building and maintaining assets: 15.9 of 25
- Context and connections: 16.9 of 25
- Reliability and controls: 17.4 of 25

**Strengths**

- Investigate why a number changed
- You can pin the model version
- Trace where a number came from

**Not found in the docs**

- It publishes skills for agents
- It can find and fix broken content
- Outside agents build generated apps

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Connect to a workbook or data source and use natural language to perform visual analysis."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent, the built-in assistant, takes plain-English requests (examples on the same page such as 'How many action movies did each director make?') and builds the viz against the connected data without SQL or a pre-built dashboard. Tableau Agent in authoring is not labeled beta.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "After indexing is complete, Tableau Agent provides some suggested questions you could ask about your data to help you get started, or type your own questions into the text box using natural language to describe what you want."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: The built-in authoring assistant accepts a new natural-language analytical question against a connected data source and creates its visualization, without a prebuilt dashboard or user-written SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Tableau Agent is a generative AI feature that helps you explore your data, create visualizations, and uncover insights with the help of a conversational assistant."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Users can ask Tableau Agent plain English questions to explore data and create visualizations without needing SQL or pre-built dashboards.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When you type a question or request into the conversation pane, a combined prompt consisting of the user's input, metadata describing the current state of the viz (web authoring), or Tableau Prep flow, and historical context from the conversation pane flow through the Einstein Trust Layer to the LLM."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm (checked 2026-10-26)
  - Reasoning: Each Tableau Agent request carries the conversation history and the current viz state, so follow-ups like 'now split that by region' refer back to earlier turns. web_author_einstein.htm also says users can 'Ask more questions with Tableau Agent to iterate', and Tableau Agent in Pulse is documented as a conversation you deepen with follow-up questions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "It's a conversational way to investigate your metrics. Your first question is just the start. Dig deeper by asking about different dimensions and time periods for additional insights."
  - Source: https://help.tableau.com/current/online/en-us/pulse_ask_discover_qa.htm (checked 2026-10-26)
  - Reasoning: This single documented list item establishes follow-up exploration in Tableau Agent in Pulse; the page also describes conversation history and time/dimension refinements.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If you close and reopen the conversation pane while still in your same session, your conversation history persists."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent maintains conversation history within the sheet session, allowing users to ask follow-up questions and refine results iteratively.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes (preview)** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "After Tableau Agent creates the viz, you can interact and modify it, just like if an analyst built and shared a viz with you."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent builds its answer as an ordinary viz in the authoring environment, and it explains any calculation it writes. That makes the fields, filters and calculations used inspectable. The documentation does not say the answer shows the query or a step-by-step trace, and Dashboard Q&A's generated SQL is not documented as shown to the user. That is partial exposure.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Dashboard Q&A shows all of the reasoning steps that Tableau Agent took to find its answer, as well as a summary of the data it used, so you can be confident that the response is accurate."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/dashboard_narratives_overview.htm (checked 2026-10-26)
  - Reasoning: Dashboard Q&A exposes the built-in agent’s analytical reasoning with the answer. This dashboard feature is beta.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Tableau Agent returns a summary about how to accomplish your task, and a suggested set of steps you can apply to your flow, even creating calculations if they are needed."
  - Source: https://help.tableau.com/current/prep/en-us/prep_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent returns a summary and a suggested plan of analytical transformation steps that users can inspect before applying to their flow.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Yes** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Click Metric Sources to see metrics considered as part of the analysis when the response is generated."
  - Source: https://help.tableau.com/current/online/en-us/pulse_ask_discover_qa.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent in Pulse attaches citations and a Metric Sources list to each insight brief. These name the specific metrics the answer was built from, which is more than naming the dataset.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Click Metric Sources to see metrics considered as part of the analysis when the response is generated."
  - Source: https://help.tableau.com/current/online/en-us/pulse_ask_discover_qa.htm (checked 2026-10-26)
  - Reasoning: The answer exposes a Metric Sources list naming the actual metrics considered, rather than merely naming the dataset or showing SQL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Click a citation link at the end of an insight to see its source."
  - Source: https://help.tableau.com/current/online/en-us/pulse_ask_discover_qa.htm (checked 2026-10-26)
  - Reasoning: Tableau Pulse answers attach citations and a Metric Sources button to explicitly show the specific metrics and fields used to derive the answer.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "However, you can also use Tableau Agent with live database connections, and uploaded files with the following file types:"
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: The page lists .csv, .txt and .xlsx among the uploaded file types Tableau Agent works with. A user can therefore give Tableau a CSV or spreadsheet and analyze it with the built-in AI.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Tableau Agent is recommended for use on data extract or file-based data for improved performance, but Tableau Agent for viz authoring also works with live connections, or uploaded files with .hyper, .csv, .txt, and .xlsx file types."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm (checked 2026-10-26)
  - Reasoning: The built-in authoring assistant explicitly analyzes uploaded CSV and Excel sources.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "However, you can also use Tableau Agent with live database connections, and uploaded files with the following file types:"
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent supports analyzing data directly from uploaded files including .csv and .xlsx spreadsheets.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Yes** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Tableau Agent performs the steps for you, building out your flow and adding the changes to the Changes pane."
  - Source: https://help.tableau.com/current/prep/en-us/prep_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent in Tableau Prep cleans and reshapes data (split, pivot, aggregate, filter, rename, and so on) and leaves inspectable artifacts: flow steps, calculations, and entries in the Changes pane that can be reviewed, edited or undone.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can evaluate and modify any changes listed in the Changes pane, as well as update the description added to the step in the flow pane."
  - Source: https://help.tableau.com/current/prep/en-us/prep_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent in Prep creates cleaning/transformation plans and applies inspectable flow steps; the Changes pane retains their editable transformation logic.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Tableau Agent performs the steps for you, building out your flow and adding the changes to the Changes pane."
  - Source: https://help.tableau.com/current/prep/en-us/prep_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent in Tableau Prep cleans and reshapes data using natural language instructions and records inspectable transformation steps in the Changes pane.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: No** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: no
  - Quote: "Tableau Agent only works with the primary data source in a data blend."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: The documentation explicitly limits Tableau Agent to one data source. It works only with the primary source in a blend, it 'can't ... do data modeling (such as creating joins or relationships)', and Tableau Agent in Prep lists Joins and Unions as unsupported. Tableau Agent in Pulse groups metrics but is not documented as joining two sources.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No page establishes the built-in AI joining or blending distinct sources in one analysis. Authoring uses the selected source and only the primary source of a blend; Prep excludes joins and unions. Pulse compares grouped metrics, but the documentation does not establish AI combination of distinct sources.
- **Gemini 3.8 Flash**: no
  - Quote: "Also, if you're using data blending, Tableau Agent can only be used with the primary data source."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau documentation explicitly states that Tableau Agent cannot combine multiple data sources and can only work with the primary data source in a blend.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Choose the best chart type for an analysis: "Show me the distribution of student's grades""
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent picks and builds a chart type suited to the question ('creates visualizations based on your data, just like Show Me'), from a list of supported chart types. It does not only modify a chart the user chose.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Choose the best chart type for an analysis: "Show me the distribution of student's grades""
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: This supported task lets the built-in assistant choose a chart type from an analytical request; the same page documents that it creates the resulting visualization.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Choose the best chart type for an analysis: "Show me the distribution of student's grades""
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent automatically selects and creates chart types (bar, heatmap, scatter plot, etc.) suited to the user's analytical question.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Tableau Agent in Pulse highlights shared contributors, detects when trends move together or in opposite directions, flags outliers across metrics, and identifies metrics that are jointly above or below expected ranges."
  - Source: https://help.tableau.com/current/online/en-us/pulse_ask_discover_qa.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent in Pulse, a built-in agent, answers 'what's driving changes' questions (the page's examples include Top Drivers, Top Detractors and Top Contributors) using Pulse's deterministic insight types. Top Drivers 'Shows values for dimension members that changed the most in the same direction as the observed change in the metric' (pulse_insights_platform_insight_types.htm). Each insight links to a checkable source chart through citations.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Shows values for dimension members that changed the most in the same direction as the observed change in the metric."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: The Top Drivers insight exposes segment-level changes for checking contributions. The page ties these statistical insights to Tableau Agent in Pulse, and the Agent page documents Top Drivers questions and linked insight charts.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Insights platform in Tableau Pulse detects drivers, trends, contributors, and outliers for metrics."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: Tableau Pulse's Insights platform and Tableau Agent in Pulse run statistical models to identify Top Drivers, Detractors, and Contributors broken down by dimension values.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Partly** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Shows the expected values for a metric for the remainder of the period, along with a forecast confidence range."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: Pulse's Forecast insight, which Tableau Agent in Pulse surfaces (for example through Pace to Goal questions), states its horizon (remainder of the period) and a confidence range. The only stated input is 'historical metric data'. It is a statistical insight the AI surfaces rather than a forecast the AI builds with stated assumptions, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Shows the expected values for a metric for the remainder of the period, along with a forecast confidence range."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: Pulse documents a forecast horizon and confidence range. Tableau Agent in Pulse surfaces the Pace to Goal insight, which requires Forecast, so this is connected to the built-in AI. Historical metric data is the stated input, but the answer is not documented exposing the forecasting assumptions or detailed inputs needed to challenge it.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Shows the expected values for a metric for the remainder of the period, along with a forecast confidence range."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: Tableau Pulse produces AI-driven forecasts with a confidence range and time horizon, but does not expose the underlying model inputs and assumptions, which qualifies as partly under the guidance.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents Tableau Agent, Pulse Q&A, Concierge or another built-in agent setting up several what-if scenarios, stating what each one changes, and calculating them side by side. The only AI-adjacent what-if found is the Einstein Discovery dashboard extension. That is a prediction model that dashboard authors configure, not the built-in assistant, and it works 'on a single set of input values'. The other what-if hits are manual parameters and ad-hoc calculations.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Searches found ordinary parameter and what-if query examples, but no built-in Tableau assistant calculating multiple scenarios with stated changed assumptions and comparable results. Pulse comparisons of actual metrics or time periods do not establish hypothetical scenarios.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches found parameters and ad-hoc calculations used for manual what-if analysis, and the Einstein Discovery dashboard extension supporting interactive single-scenario parameter inputs, but found no AI feature that calculates and compares multiple what-if scenarios side-by-side with changed assumptions explicitly stated.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI answer surface (Tableau Agent, Dashboard Q&A, Pulse Q&A, Tableau Next) is documented showing the age or last-refresh time of the data it used. The Pulse pages only cover setting digest generation times so that digests reflect fresh data, and date offsets for data sources that refresh late. Neither shows freshness with the answer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No settling evidence shows the age or last refresh of the data used alongside an AI answer. Refresh policies, administrative refresh metadata, and freshness information for legacy metrics do not establish that indicator for Tableau Agent or Pulse answers.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches across Tableau Agent, Tableau Pulse, and dashboard AI documentation found no feature where the AI's natural language answers expose data freshness, staleness, or the underlying dataset's last-refresh timestamp to the user at the point of use.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Whether it’s a calculation that Tableau Agent created for you or one that exists as part of your data set, you can ask Tableau Agent to explain the calculation."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent reads and explains existing calculated fields that feed vizzes in a workbook, which is BI content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Whether it’s a calculation that Tableau Agent created for you or one that exists as part of your data set, you can ask Tableau Agent to explain the calculation."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Inside a Tableau workbook worksheet, the built-in assistant reads and explains existing calculated fields used by visualizations. This is workbook chart logic, not an unrelated SQL-editor-only capability.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Explain calculations: "Explain the "Days to Ship Actual" calculation""
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent reads calculations behind charts and tables in workbooks and explains the calculation logic to the user.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Simply ask Tableau Agent to help you create a calculation using natural language to describe what you want to do."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent writes and edits calculated fields in the Calculation Editor, adds them to the workbook's Data pane, and builds vizzes that use them. Those are the calculations behind charts in BI content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Manually make your changes in the Calculation Editor and click OK or describe the changes you want to make in the Tableau Agent conversation pane, and let Tableau Agent make the changes for you."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: The assistant edits a workbook’s existing calculated field after it is opened in the Calculation Editor. The page also documents adding Agent-created fields to the Data pane and referencing them in a visualization.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Simply ask Tableau Agent to help you create a calculation using natural language to describe what you want to do."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent writes and creates calculated fields directly in worksheets and the Calculation Editor using natural language descriptions.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For example, suppose you want to use a query variable to find the Sample_Superstore workbook."
  - Source: https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_examples.html (checked 2026-10-26)
  - Reasoning: The example query that follows filters a workbook, then sheets by name, and returns worksheetFields { name formula }. An outside agent can therefore retrieve the calculation behind a specific sheet through the Metadata API without downloading and parsing the workbook.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "`formula`: The formula for this field if it’s a calculation."
  - Source: https://help.tableau.com/current/api/vizql-data-service/en-us/docs/vds_get_data_source_info.html (checked 2026-10-26)
  - Reasoning: VDS metadata returns calculation formulas for a workbook data source through workbookDatasourceId, without downloading/parsing a whole workbook. The Metadata API example additionally maps a specified workbook/sheet to worksheetFields and their formulas, establishing retrieval of logic behind a specific chart.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Metadata - the information about your content and assets that you can query using the Metadata API."
  - Source: https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_concepts.html (checked 2026-10-26)
  - Reasoning: An outside agent can retrieve the exact calculation formula behind a specific sheet via the GraphQL Metadata API using worksheetFields { name formula }.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Publishes a workbook on the specified site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_publishing.htm (checked 2026-10-26)
  - Reasoning: An outside agent can change a chart's calculation only by republishing the whole workbook file through the REST API. The Metadata API is read-only and no per-chart calculation write is documented, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Publishes a workbook on the specified site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_workbooks_and_views.htm (checked 2026-10-26)
  - Reasoning: An outside agent can publish/overwrite a native workbook file containing changed calculations. This establishes whole-workbook replacement; no direct chart-calculation editing endpoint was established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can use the REST API to programmatically publish (upload) workbooks and data sources to the server."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_publish.htm (checked 2026-10-26)
  - Reasoning: Outside agents can author calculations by modifying workbook files and republishing or overwriting the workbook via the REST API Publish Workbook method, which replaces the whole workbook.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When you type a question or request into the conversation pane, a combined prompt consisting of the user's input, metadata describing the current state of the viz (web authoring), or Tableau Prep flow, and historical context from the conversation pane flow through the Einstein Trust Layer to the LLM."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent works inside an existing workbook ('creating a new workbook or opening an existing one') from the current state of the viz it is on. Tableau Agent in Dashboards (beta) also reads existing dashboards viz-by-viz for overviews, insights and Q&A.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Start by creating a new workbook or opening an existing one."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: The built-in authoring assistant works inside an existing workbook/worksheet and modifies its analysis and visualization; Tableau workbooks are BI content. The beta dashboard-reading feature is additional evidence but is not required for this GA path.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "As a dashboard consumer use these capabilities to get a summary about your dashboards, get insights, and dive deeper into the data by asking your own questions."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent in Dashboards (Beta) opens existing dashboards and answers questions, surfaces insights, and provides summaries based on the visualizations in the dashboard.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Tableau Agent creates visualizations based on your data, just like Show Me in Tableau."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent builds worksheets in a Tableau workbook connected to live or published data sources. Once saved or published, these are persistent BI content with an owner and permissions. It cannot build dashboards, but a workbook sheet is BI content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "After Tableau Agent creates the viz, you can interact and modify it, just like if an analyst built and shared a viz with you."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: The built-in assistant creates actual Tableau workbook charts rather than disposable HTML or an SQL file. The page supports live data connections; those native workbooks are saved/published through Tableau’s owner/permission-governed workbook workflow. It need not build a multi-chart dashboard to create BI content.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "After Tableau Agent creates the viz, you can interact and modify it, just like if an analyst built and shared a viz with you."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent builds persistent visual analyses in worksheets and workbooks backed by live data sources, which are saved and published with ownership and permissions.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Metadata API surfaces the content and assets that comprise your Tableau Cloud site or Tableau Server, the content and asset roles, and how the content and assets relate to each other."
  - Source: https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_model.html (checked 2026-10-26)
  - Reasoning: Through the Metadata API, an outside agent reads workbooks, sheets, dashboards, calculated fields, filters and parameters. The REST API and VizQL Data Service return view and data-source data.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Downloads a workbook in `.twb` or `.twbx` format."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_workbooks_and_views.htm (checked 2026-10-26)
  - Reasoning: The first-party REST API retrieves an existing native workbook, including its chart definitions, calculations/queries and filters; this is the analytical object itself. The page explicitly states its content/filter values are readable in plain text.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Metadata API surfaces the content and assets that comprise your Tableau Cloud site or Tableau Server, the content and asset roles, and how the content and assets relate to each other."
  - Source: https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_model.html (checked 2026-10-26)
  - Reasoning: Outside agents can query the contents of existing BI content (workbooks, sheets, dashboards, fields, and queries) via the GraphQL Metadata API and REST API.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Publishes a workbook on the specified site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_workbooks_and_views.htm (checked 2026-10-26)
  - Reasoning: An outside agent can create BI content by publishing a workbook to a site through the REST API, which is the vendor's documented interface.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Publishes a workbook on the specified site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_workbooks_and_views.htm (checked 2026-10-26)
  - Reasoning: The Publish Workbook method lets an outside agent create persistent Tableau BI content from a native workbook definition through the supported API, subject to project publish permissions. This is an object-specific publishing API, not generic file storage.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can use the REST API to programmatically publish (upload) workbooks and data sources to the server."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_publish.htm (checked 2026-10-26)
  - Reasoning: Outside agents can create and publish BI content (workbooks) programmatically via the Tableau REST API Publish Workbook method.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "After Tableau Agent creates the viz, you can interact and modify it, just like if an analyst built and shared a viz with you."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: AI-built vizzes are ordinary workbook content, so Tableau's normal sharing and row-level security should apply per viewer. The documentation does not explicitly state viewer-evaluated results for AI-created content. Pulse states per-user evaluation for insights, not for AI-built assets. Partial.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "And you can share content freely, knowing that you won't put security at risk because data policies that apply row-level security are always enforced."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/navigating.htm (checked 2026-10-26)
  - Reasoning: Agent-created charts are native saved Tableau workbooks and can be shared with named users through the workbook Share dialog. For the live governed-data path, virtual connections enforce their row-security policies for content consumers; sharing does not bypass those policies.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The data a user has access to while using Tableau Agent conforms to any row or column-level security policies that you have in place."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: AI-created workbooks can be shared with named users or groups, with data evaluated under each viewer's individual permissions and row-level security.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Search can retrieve all the content that is available on your Site and in your Personal Space, but it will only show the content that you have access to view."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/search.htm (checked 2026-10-26)
  - Reasoning: Site-wide quick and full search let permitted users find colleagues' views, workbooks and data sources, including AI-built workbooks once published.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Search can retrieve all the content that is available on your Site and in your Personal Space, but it will only show the content that you have access to view."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/search.htm (checked 2026-10-26)
  - Reasoning: Permitted users can search site-wide saved Tableau assets, including the native workbook charts created with Agent; the page describes owner-based search and workbook/view filters.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Search shows results sorted by projects, workbooks, and views, just like the project-navigation screen."
  - Source: https://help.tableau.com/current/mobile/mobile-user/en-us/tableau_mobile_explore.htm (checked 2026-10-26)
  - Reasoning: Permitted users can search across projects, workbooks, and views to discover saved analytical assets across the site.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Yes** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can create permission sets or profiles to control which users can access your new Analytics and Visualization agent."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: In Tableau Next (included with Tableau+), an admin creates an Analytics and Visualization agent once from a template. They define its settings (system messages), select a data source to ground it, assign permission sets for access, and then users 'Select Agent and choose the new agent'. That is a configured assistant with instructions, data and permissions that colleagues reuse.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can create permission sets or profiles to control which users can access your new Analytics and Visualization agent."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: The Tableau Next setup configures an Analytics and Visualization agent once, defines system messages, selects its grounding data, tests and activates it, then assigns permission sets so colleagues can select and reuse that agent.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can create permission sets or profiles to control which users can access your new Analytics and Visualization agent."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: Admins can configure and save custom Agentforce Analytics and Visualization agents with their own instructions, grounded data sources, and permission sets for colleagues to reuse.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Yes** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This insight summary appears at the top of digests and in the Tableau Pulse home page."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: Pulse uses AI in Tableau to generate a fresh summary across followed metrics, and that summary is delivered in recurring email/Slack digests without anyone present. The AI reruns the defined metric analysis for each delivery, so this is more than an ordinary report schedule.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "These settings are useful if your data refreshes at a specific time or date so that Tableau Pulse digests include the latest data."
  - Source: https://help.tableau.com/current/online/en-us/pulse_set_up.htm (checked 2026-10-26)
  - Reasoning: Pulse schedules generation and delivery of fresh digests, and this page explicitly identifies personalized metric insight summaries as an AI in Tableau capability. The defined metrics and cadence drive recurring AI summaries without a person present.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Once every 24 hours, Tableau Pulse checks for alerts."
  - Source: https://help.tableau.com/current/online/en-us/pulse_alerts.htm (checked 2026-10-26)
  - Reasoning: Tableau Pulse's AI-backed insights platform automatically reruns analysis once every 24 hours without a person present and delivers fresh results, trend change alerts, and metric digests via email and Slack.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Inspector: Proactive Alerts: Includes the Data Alert Management subagent"
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: The Tableau Next agent's Data Alert Management subagent has a 'Create Data Alert' action, so the agent can set up a notification rule. The documentation does not show the agent itself sending a message, calling a webhook or writing data elsewhere, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Data Alert Management: Includes the Create Data Alert action"
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: A configured first-party Tableau Next agent can create an alert through its named action. This establishes alert setup, but not an agent autonomously executing a downstream notification, webhook, or data write.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Data Alert Management: Includes the Create Data Alert action"
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: Agentforce for Analytics includes the Data Alert Management subagent with the Create Data Alert action, allowing the built-in agent to perform side effects outside analytics content by creating alerts that notify users.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "For example, if you have high cardinality fields, fields with a lot of values, Tableau Agent might ask you to select the values you want."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent asks the user mid-conversation to pick filter values ('Add Filter' opens the Filter dialog). That is a clarifying hand-back during the conversation. No notification, review queue or paused hand-off is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "For example, if you have high cardinality fields, fields with a lot of values, Tableau Agent might ask you to select the values you want."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: When the authoring agent cannot resolve filter values it asks the user to supply them and opens a filter dialog. This is conversational assistance, not a documented escalation queue or separate human hand-off.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "If you try to filter on a high cardinality field, Tableau Agent creates a filter for the field but might prompt you to select the values you want to include or exclude."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm (checked 2026-10-26)
  - Reasoning: When the agent cannot proceed automatically (such as filtering high-cardinality fields), it prompts the user to select values during the conversation, which the grading standard/guidance earns partly for asking clarifying questions.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Partly** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The subagents you’ve added are assigned to your agent and visible on the Subagents panel in Agentforce Builder."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: An admin adds named subagents (Data Analysis, Data Pro - Preparation and Modeling, Data Alert Management) to the Tableau Next agent, each with listed actions. This is customer-configured delegation to named units with explicit tools. Separate permissions per subagent are not documented, so it is partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The subagents you’ve added are assigned to your agent and visible on the Subagents panel in Agentforce Builder."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: Customers explicitly add named Data Analysis, Data Pro - Preparation and Modeling, and Data Alert Management subagents to their Analytics and Visualization agent. The setup lists their bounded actions and configures access permissions; these are customer-configured subagents, not hidden implementation workers.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The subagents you’ve added are assigned to your agent and visible on the Subagents panel in Agentforce Builder."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: In Tableau Next, administrators can configure an Analytics and Visualization Agent by assigning named subagents (such as Data Analysis, Data Pro - Preparation and Modeling, and Data Alert Management) with explicit tool actions (Analyze Data, Create Calculated Field, Create Semantic Data Model). However, configuring independent permissions per subagent is not documented, earning partly.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Tableau documents its own MCP server for outside agents, such as Slackbot connecting to Tableau MCP. It also says connecting a knowledge graph to Tableau MCP lets Tableau Agent query that graph. Neither attaches a customer-configured external tool or external MCP server to Tableau's built-in assistant. Slackbot is the outside agent in that flow. Tableau Next 'integrations' refers to Slack delivery and Einstein Discovery, not tools for the assistant.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Tableau documents connecting its own knowledge graph to its own MCP server, enabling Tableau Agent and other agents to query that graph. This does not document attaching an external tool or customer-configured external MCP server to the built-in assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Documentation details Tableau's own MCP Server allowing outside agents and Tableau Agent to query knowledge graphs. However, searches found no capability for customers to attach outside MCP servers or external tools to Tableau's built-in AI assistant.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Not found** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Knowledge Graph REST API has a downstream-impact endpoint, and the customview_update page tells people how to check manually for breakage. Neither is run by the AI. Tableau Agent for Knowledge suggests fixes for knowledge-graph quality issues such as missing descriptions, owners and certifications. It is not documented finding BI content affected by a change to data or definitions, or repairing that content or flagging it. The Prep agent page says Tableau Agent cannot help 'troubleshoot your flow'.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Catalog impact analysis and knowledge-graph quality suggestions do not establish AI identifying and repairing or owner-flagging BI content after a source or definition changes. Authoring can edit calculations, but no documented change-repair workflow for affected BI content was found.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches found no capability where Tableau's AI or built-in agents identify BI content affected by schema/definition changes and automatically repair or flag it for an owner. Impact analysis in Tableau Catalog is human-driven, and Semantic Model AI Optimization detects semantic model quality issues rather than repairing downstream BI content affected by upstream changes.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Not found** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Tableau has no documented generated-app object, and no built-in assistant reading an app's code, layout or rendered output. The 'App Builder' hits are Salesforce Lightning App Builder pages for placing Tableau components. That is customer page assembly, not a generated app.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No generated-app object that Tableau's built-in assistant can inspect was found. Documented assistant reading of dashboards and worksheets concerns BI content, not generated application code, layout, or rendered output.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Tableau does not feature generated or generative applications (such as Hex generative apps or Databricks Apps). In Tableau documentation, 'apps' refers to Tableau Mobile, Connected Apps for embedding/SSO, or the Slack app. Searches found no built-in assistant capability to read generated app definitions or layouts.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Not found** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in assistant is documented building a persistent, governed app backed by live data. Lightning App Builder is a person placing Tableau components on Salesforce pages, and the dashboard narratives page says Tableau Agent 'can't help you build a dashboard'.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The corpus documents AI-created visualizations and calculations, but no built-in AI that builds a persistent governed generated app backed by live data. Embedding a Tableau dashboard in a customer application does not establish the AI building that app.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches of the corpus found no capability for the built-in assistant to author or build persistent, governed generated apps backed by live data. The product builds workbooks, dashboards, metrics, and prep flows, but not generative apps.

### A_OR: Can an outside coding agent read a generated app?

**Result: Not found** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Because Tableau documents no generated-app object, no API, CLI or MCP route exists to pull a generated app's definition. Workbook APIs return BI content, which is a separate row family.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No API or agent interface retrieves a generated application definition. Connected apps are authentication registrations, and workbook download or embedding APIs expose different objects; neither establishes a generated app definition.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Because Tableau does not produce or host AI-generated applications, searches found no API or CLI endpoints allowing an outside coding agent to read or export a generated app's code or definition.

### A_OW: Can an outside coding agent build a generated app?

**Result: Not found** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No first-party route lets an outside agent author a generated app. The embedding APIs and Lightning components put Tableau views inside customer-built applications, which is customer-built, and Tableau publishes no app-generation skill or CLI.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No first-party outside-agent interface for building generated apps was found. APIs for connected-app authentication registrations and customer-built embedding applications do not establish an outside agent creating a first-class generated app in Tableau.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches found no interface allowing an outside coding agent to create, modify, or deploy generated apps in Tableau, as Tableau does not support generative analytical applications.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Partly (preview)** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Q&A Calibration (Beta): You can access this tool in the Tableau Next menu to test questions in Concierge, and then verify and calibrate results."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: Tableau Next provides a beta tool for testing questions against the built-in Concierge assistant and verifying the results. The corpus does not say it keeps a saved case set with expected answers, a rubric, or a judge, so it is partly. Labeled Beta.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Q&A Calibration (Beta): You can access this tool in the Tableau Next menu to test questions in Concierge, and then verify and calibrate results."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: A named beta tool tests and verifies the built-in Concierge’s answers. The local documentation does not establish saved expected-answer cases, a rubric/judge, or a repeatable evaluation suite, so the documented testing scope is partial.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "You can access this tool in the Tableau Next menu to test questions in Concierge, and then verify and calibrate results."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: Tableau Next provides Q&A Calibration (Beta) to test questions and calibrate results, providing a structured evaluation run for the built-in assistant.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Manually selected models must also be maintained by you, and the setting updated when models are no longer supported to avoid users losing access to Tableau Agent."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: In Tableau Server, an admin enters specific model IDs or Azure deployment names for each Tableau Agent task in Model Settings. Those manual selections persist until the admin changes them. Tableau Cloud gives no model choice ('Tableau Agent doesn't support the selection of a Salesforce-managed Large Language Model'), but the Server path establishes pinning.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Manually selected models must also be maintained by you, and the setting updated when models are no longer supported to avoid users losing access to Tableau Agent."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: Tableau Server lets admins enter specific model IDs and retain their manual selection; Cloud chooses models for customers. The page does not establish a fixed snapshot/version pin as opposed to a named model or Azure deployment.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Ensure the model version assigned to the deployment is supported by Tableau Server."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: In Tableau Server site settings, administrators explicitly configure the Azure deployment name and model version for chat completions and embeddings, pinning the model until changed.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "It stores the prompt and response for every LLM API call along with other audit data for a maximum of 30 days in your Salesforce Data 360 instance."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_usage.htm (checked 2026-10-26)
  - Reasoning: The optional Audit Trail keeps prompts and responses, but not a data snapshot or the full configuration. Tableau Agent conversation history is cleared when the workbook closes. This is a partial record.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Prompts, responses, and Trust signals are logged and stored in Data Cloud."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust_layer.htm (checked 2026-10-26)
  - Reasoning: The optional first-party AI audit trail preserves prompts and responses for inspection. It does not establish preservation of the data snapshot, complete configuration, selected model version, and executable analytical logic needed for full reproduction.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Prompts, responses, and Trust signals are logged and stored in Data Cloud."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust_layer.htm (checked 2026-10-26)
  - Reasoning: Einstein Trust Layer logs prompts, responses, and trust signals in Data Cloud, but does not capture data snapshots or system configuration needed for complete reproduction.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Partly** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The Insights platform learns from this to further personalize the types of insights it shows to a user."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: Thumbs feedback on Pulse insights changes which insights are shown later, scoped to that user. It is a usefulness rating on Pulse insights rather than a correction to a Tableau Agent answer. Tableau Agent's own thumbs feedback is only documented as helping improve the product. This is partial.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Feedback further personalizes insights. Users can provide thumbs-up or thumbs-down feedback on the insights they see to indicate whether the insights are useful. The Insights platform learns from this to further personalize the types of insights it shows to a user."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: The built-in Pulse insights platform learns from thumbs feedback and changes subsequent insight selection for that user. This establishes a limited relevance-feedback loop, rather than factual or calculation corrections changing later Tableau Agent answers. Agent feedback pages otherwise describe product improvement without a defined correction reach.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Insights platform learns from this to further personalize the types of insights it shows to a user."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: In Tableau Pulse, user thumbs-up/thumbs-down feedback directly trains the insights platform to personalize future insights shown, with the reach explicitly documented as that individual user.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Partly** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Ground answers in trusted content. Agents use trusted business definitions and calculations from semantic models, metadata, relationships, and business preferences in the knowledge graph, rather than relying only on raw data."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: Tableau Knowledge grounds Tableau Agent in trusted definitions and tracks certification in graph health. Nothing says answers are bound to certified content or that a departure from it is prevented or flagged, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Tableau Pulse is also based on a metric layer that provides a bounded, safe space for insights to be detected."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm (checked 2026-10-26)
  - Reasoning: Pulse grounds AI insights in its maintained metric definitions. There is no documented rule binding every assistant answer to certified content or preventing/flagging a mismatch, so semantic-layer grounding earns partial credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Agents use trusted business definitions and calculations from semantic models, metadata, relationships, and business preferences in the knowledge graph, rather than relying only on raw data."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: The documentation states agents ground their responses in semantic models, relationships, and certified published data sources, but does not state that the assistant is verified against or prevented from departing from certified definitions.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Not found** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No customer-set limit that blocks built-in AI usage once reached is documented. The usage page says AI in Tableau no longer consumes Einstein Request credits, and that Digital Wallet reports Data 360 credit consumption, which is reporting only. The FAQ mentions vendor-imposed per-hour request limits during the trial, which the customer does not set.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Digital Wallet and dashboards report consumption, and the beta Custom Gateway can enforce rate-limiting policies. No page establishes a configurable AI spending or usage budget that blocks the built-in AI when exhausted. Trial request restrictions are not customer-set spend caps.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Tableau AI usage consumes Data 360 credits tracked through Digital Wallet in near real-time, but searches confirmed that Digital Wallet provides consumption reporting only and does not document a hard cap or spend limit that blocks built-in AI usage when reached.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Not found** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page lets customers measure built-in AI response time by agent, model or evaluation run. The latency and duration hits are about viz load times, flow and background job durations, performance recordings and server latency, none of which separates out the AI. The AI usage view reports credits, not response times.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented customer measurement of built-in AI response time by agent, model, or evaluation run was found. General visualization load-time monitoring, performance advice, geo-routing latency benefits, and gateway usage tracking do not establish the requested measurement.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches across Tableau AI documentation found general statements that geo-aware routing 'improves latency', but no documented feature, dashboard, or metric enabling customers to measure the built-in AI's response time on their own workloads by agent, model, or evaluation run.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Partly (preview)** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: partly, preview
  - Quote: "To support usage tracking and auditing, Tableau sends the requesting user's identity to your gateway as custom HTTP headers on every `/chat/completions` and `/embeddings` request so you can measure usage and active-user population directly from what the gateway receives, without relying on Tableau Server logs."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: With the beta Custom Gateway on Tableau Server, Tableau tags each AI request with the user and site, so the customer's gateway can attribute usage per user. The Cloud dashboards show counts of users, requests and tokens by feature area, not per-user attribution inside the product. This is partial.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "To support usage tracking and auditing, Tableau sends the requesting user's identity to your gateway as custom HTTP headers on every `/chat/completions` and `/embeddings` request so you can measure usage and active-user population directly from what the gateway receives, without relying on Tableau Server logs."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: For built-in Tableau Agent on Server, the beta Custom Gateway receives the requesting user identity on every AI request and can attribute usage per user and site. This requires customer-side gateway aggregation; the Cloud dashboards described in this corpus report users, requests, and tokens by feature area rather than establishing per-user consumption attribution.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To support usage tracking and auditing, Tableau sends the requesting user's identity to your gateway as custom HTTP headers on every /chat/completions and /embeddings request so you can measure usage and active-user population directly from what the gateway receives, without relying on Tableau Server logs."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: Tableau sends the requesting user's identity (Tableau-User, Tableau-UserEmail) on AI requests, enabling consumption tracking and reporting broken down by user.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Partly** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Prompts, responses, and Trust signals are logged and stored in Data Cloud."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust_layer.htm (checked 2026-10-26)
  - Reasoning: The Einstein audit trail logs the assistant's prompts and responses (Tableau+). The corpus does not document attribution to the asking user or the analytical objects touched. The Tableau activity log only records Tableau Agent settings changes (tabgpt_registration_event).
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Prompts, responses, and Trust signals are logged and stored in Data Cloud."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust_layer.htm (checked 2026-10-26)
  - Reasoning: The Tableau+ Einstein audit trail explicitly records the built-in AI prompts and responses, establishing assistant-specific logging. This page does not establish a record tying those actions to both the asking user and the affected analytical objects. Gateway identity headers do not supply that missing object-level audit record.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "It stores the prompt and response for every LLM API call along with other audit data for a maximum of 30 days in your Salesforce Data 360 instance."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_usage.htm (checked 2026-10-26)
  - Reasoning: Tableau logs prompts, responses, and user identity via Einstein Generative AI Audit & Feedback in Data Cloud / Custom Gateway headers, but does not log the specific analytical objects affected.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can turn on AI in Tableau features for either a single user group or for all users on your site."
  - Source: https://help.tableau.com/current/online/en-us/setup_tabAI_site_setting.htm (checked 2026-10-26)
  - Reasoning: Admins turn each AI feature on per site and can restrict Tableau Agent in Pulse, Authoring and Prep to a single user group. Tableau Agent in Dashboards is further controlled by the AI Access permission. This is control over a subset of the tenant.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Yes. You can turn on AI in Tableau features for either a single user group or for all users on your site."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm (checked 2026-10-26)
  - Reasoning: Cloud admins can enable authoring/Prep AI for one group rather than the entire tenant; this is an AI-specific rollout control.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can turn on AI in Tableau features for either a single user group or for all users on your site."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm (checked 2026-10-26)
  - Reasoning: Tableau Cloud administrators can enable or disable AI features for specific user groups or across the entire site.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "As soon as you start making changes to a new or existing workbook, we'll start to autosave the changes to a private draft version of your workbook."
  - Source: https://help.tableau.com/current/online/en-us/autosave.htm (checked 2026-10-26)
  - Reasoning: Web-authoring changes to a workbook, including those made with Tableau Agent in that workbook, stay in the author's private draft until the same user publishes them. The next sentence on the page says 'use Publish to replace the last published revision with your draft'. This is a general draft/publish workflow that the documentation does not connect to the assistant, and the requester publishes their own draft. Under the grading standard that is partly. No step routes an assistant change to a different named approver.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "As soon as you start making changes to a new or existing workbook, we'll start to autosave the changes to a private draft version of your workbook."
  - Source: https://help.tableau.com/current/online/en-us/autosave.htm (checked 2026-10-26)
  - Reasoning: The general web-authoring draft/publish workflow can hold workbook edits, including work containing Agent-created charts/calculations, until the editor publishes. It is not an AI-specific approval route or approval by another named person/role.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Publish the workbook to save the uploaded business preference document as part of your configuration settings."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm (checked 2026-10-26)
  - Reasoning: Changes made using the AI assistant remain in draft during authoring until the same user publishes the workbook; there is no documented workflow routing assistant writes to a different named person/role for approval.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Starting in version 2025.3, Tableau Server supports connecting to AI models directly and starting in version 2026.3, you can also route requests through a Custom Gateway (Beta)."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: On Tableau Server the customer points Tableau Agent at their own OpenAI or Azure OpenAI resource, or a gateway, so inference runs where they choose. Tableau Cloud AI features use vendor-selected Azure OpenAI with geo-aware routing and no customer choice. The choice covers only some of the product's AI features, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Configuring a different LLM provider per site is supported."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: Server admins choose an OpenAI or customer-deployed Azure OpenAI connection and resource, with an additional beta Custom Gateway option. This is documented provider/endpoint control for Server; Cloud inference remains Salesforce-managed.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Unlike Tableau Cloud, in Tableau Server AI in Tableau connects directly from your Tableau Server deployment to the selected LLM provider or via a custom gateway (version 2026.3 and later)."
  - Source: https://help.tableau.com/current/server/en-us/sites_gai_server.htm (checked 2026-10-26)
  - Reasoning: Customers can control where model inference occurs for Tableau Server deployments by connecting directly to their own provider or custom gateway, but Tableau Cloud inference is fixed to Azure OpenAI.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The data a user has access to while using Tableau Agent conforms to any row or column-level security policies that you have in place."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent answers under the asking user's row- and column-level security. The Trust Layer page adds that grounding is retrieved 'based on the permissions of the user executing the prompt'. Dashboards (beta) refuses to answer when workbook-level user filters exist rather than bypassing them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The data a user has access to while using Tableau Agent conforms to any row or column-level security policies that you have in place."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: The built-in assistant respects existing row and column security for the asking user; this is not merely dataset-level permissioning.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The data a user has access to while using Tableau Agent conforms to any row or column-level security policies that you have in place."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent runs under the asking user's identity and strictly conforms to existing row-level security and column-level permissions.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Yes**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Due to our zero data retention policies in place with our third-party LLM providers, any data sent to the LLM isn’t retained and is deleted after a response is sent back."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm (checked 2026-10-26)
  - Reasoning: The product documentation names the receiving services: Azure OpenAI per feature, plus OpenAI or a Custom Gateway on Server. tableau_gai_data.htm itemizes per feature what is sent (questions, field metadata, up to 1000 sampled values, dashboard images, and so on). Retention is stated: zero retention at the LLM provider and up to 30 days for the audit trail in Data 360.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When you type a question or request into the conversation pane, a combined prompt consisting of the user's input, metadata describing the current state of the viz (web authoring), or Tableau Prep flow, and historical context from the conversation pane flow through the Einstein Trust Layer to the LLM."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm (checked 2026-10-26)
  - Reasoning: The page describes the prompt/data payload, Einstein Trust Layer, Azure OpenAI and zero retention for Cloud, and separately direct requests to the customer’s Server LLM. Retention for customer-selected Server providers is left to their agreements, so this does not settle all documented routes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Questions the customer types in the Tableau Agent text box."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_data.htm (checked 2026-10-26)
  - Reasoning: The documentation explicitly names the services (OpenAI, Azure OpenAI, Data Cloud), specifies what data they receive per feature (queries, metadata, sampling), and states retention policies (zero retention by LLMs, 30 days in Data Cloud audit).

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Proximity to the nearest Azure OpenAI instance is determined by the Data Cloud region for your connected Salesforce org."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm (checked 2026-10-26)
  - Reasoning: Processing region is described for Tableau Cloud: the Data Cloud region, falling back to US. Audit data is stored 'in your Salesforce Data 360 instance' with no region stated, and Server processing depends on the customer's provider. This is processing without a full storage statement, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "If a model isn’t available in your Data Cloud region, or if there isn't enough available capacity, then the requests are routed to the US region."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm (checked 2026-10-26)
  - Reasoning: Cloud inference uses geo-aware Azure routing based on the connected Salesforce/Data Cloud region, with a documented US fallback. Storage regions and the regions for every AI surface/customer Server provider are not specified here.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "If a model isn’t available in your Data Cloud region, or if there isn't enough available capacity, then the requests are routed to the US region."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust.htm (checked 2026-10-26)
  - Reasoning: The documentation states that for Tableau Cloud, LLM inference requests are routed to the nearest Azure OpenAI instance determined by the Data Cloud region of the connected Salesforce org, falling back to the US region if unavailable. However, audit data is stored in the customer's Salesforce Data 360 instance without explicit geographic storage regions stated, and Tableau Server inference depends on the customer's self-managed LLM provider. Documenting processing regions without complete storage residency across all AI surfaces earns partly.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "As you interact with Tableau Agent, neither your data nor your conversations that are sent to the Large Language Model (LLM) are saved to the LLM, and no customer data is ever used to train the model."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: This is a default statement that customer data is not used for training, with no opt-out required. The Trust Layer page repeats 'No data is used for LLM model training'. tableau_gai_data.htm says submitted data 'may be used to improve your services' but does not claim model training.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "No data is used for LLM model training or product improvements."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust_layer.htm (checked 2026-10-26)
  - Reasoning: The Cloud Einstein Trust Layer states a default no-training policy, without an opt-out step. Customer-connected Server LLMs have their own provider agreements, as documented separately.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "No data is used for LLM model training or product improvements."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_einstein_trust_layer.htm (checked 2026-10-26)
  - Reasoning: The Einstein Trust Layer enforces a zero-data retention policy where customer data is not used for training AI models.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Partly (preview)** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "AI Access lets a user use Tableau Agent in Dashboards, including Dashboard Overview, Dashboard Insights, and Dashboard Q&A."
  - Source: https://help.tableau.com/current/online/en-us/permissions_capabilities.htm (checked 2026-10-26)
  - Reasoning: A separate AI Access capability (with Full Data Query) controls, per workbook, whether the beta dashboard agent may work with that content, independent of view rights. Dashboard authors can also exclude worksheets. This is a per-content scope and not a tenant-wide data restriction for all Tableau Agent surfaces, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Your first step is to select the workbooks to include in the graph."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_start.htm (checked 2026-10-26)
  - Reasoning: Knowledge graph creators select the content their connected AI consumes, separately from normal content permissions. This is per-graph author configuration rather than a workspace/tenant-wide administrator-enforced limit on all assistant data use.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "As a dashboard author you can turn each capability on or off at the dashboard level."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm (checked 2026-10-26)
  - Reasoning: Content authors can include or exclude specific worksheets or published data sources from the AI or knowledge graph, but there is no tenant-wide administrative data limit separate from user permissions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To ensure minimum access to administrative tasks and content, the JWT should contain access scopes that determine which methods are accessible to the connected app or UAT."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_auth.htm (checked 2026-10-26)
  - Reasoning: An outside agent using the REST API, VizQL Data Service or MCP can authenticate with a connected-app or UAT JWT whose access scopes restrict it to specific methods, for example tableau:viz_data_service:read or tableau:knowledge:read. That is narrower than the human's full access.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To enable least-privileged access, the JWT must contain access scopes that define the API methods that are available to the UAT."
  - Source: https://help.tableau.com/current/api/cloud-manager/en-us/docs/unified_access_tokens.html (checked 2026-10-26)
  - Reasoning: An outside agent can use a scoped UAT JWT for Tableau REST methods; scopes restrict the token to fewer operations than the mapped user can otherwise perform.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Using access scopes, the JWT that is passed during sign-in and can offer the minimum permissions required to perform a task."
  - Source: https://help.tableau.com/current/api/cloud-manager/en-us/docs/unified_access_tokens.html (checked 2026-10-26)
  - Reasoning: Outside agents authenticate via Unified Access Tokens (UATs) with access scopes that restrict permissions narrower than the human user's full access.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Lineage - reveals the origin of an object and its relationship to other related objects in Tableau Cloud or Tableau Server."
  - Source: https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_concepts.html (checked 2026-10-26)
  - Reasoning: The Metadata API (GraphQL) is a documented lineage interface. An outside agent can traverse upstreamTables, upstreamDatabases, upstreamDatasources and upstreamFlows and read calculated-field formulas behind content. The Knowledge Graph REST API also offers 'Get the lineage of a node'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "For example, you can use `upstreamTablesConnection` to query the tables used by a data source, use `downstreamSheetsConnection` to query sheets used by a workbook, or `upstreamLinkedFlows` and `downstreamLinkedFlows` to query flows that are directly upstream or downstream of one another."
  - Source: https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_model.html (checked 2026-10-26)
  - Reasoning: The first-party Metadata API exposes source tables, fields, workbooks and upstream transformation flows as traversable lineage. An outside agent can query those dependencies rather than infer them solely from SQL text.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Lineage - reveals the origin of an object and its relationship to other related objects in Tableau Cloud or Tableau Server."
  - Source: https://help.tableau.com/current/api/metadata_api/en-us/docs/meta_api_concepts.html (checked 2026-10-26)
  - Reasoning: Outside agents can traverse upstream sources and transformations (tables, databases, flows, data sources) programmatically using the GraphQL Metadata API lineage shortcuts.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Not found** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Activity Log records generic sign-in events. Examples are login_with_jwt, which distinguishes 'UAT JWT' from 'Connected Apps' and carries a session id, and hist_login_with_pat. These cover every token user, not outside agents or MCP calls in particular. No event ties an outside agent's actions to its delegated identity and the analytical objects affected. The grading standard says a general user activity log is insufficient.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No page establishes outside-agent audit events that identify both the delegated agent identity and affected analytical objects. General Tableau activity logs and Einstein logs for the built-in AI do not establish this outside-agent audit trail.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches of the Tableau documentation corpus found no mechanism for logging outside agent actions tied specifically to the agent's delegated identity and the specific analytical objects affected. Activity Log records general user actions, and REST API settings govern Tableau MCP tools, but dedicated outside agent audit logging is not documented.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Publishes a work copy as a data source."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_data_sources.htm (checked 2026-10-26)
  - Reasoning: Through Tableau's REST API, an outside agent can create a work copy of a published data source, edit its elements, and publish it in a separate call. The page lists 'Create a work copy of a published data source, read and edit its elements, and publish the changes'. Edits are held until publication, but the caller publishes them. The page names no different approver, so this is a requester-controlled draft and earns partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Publishes a work copy as a data source."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_data_sources.htm (checked 2026-10-26)
  - Reasoning: The first-party REST API lets an outside agent edit a published data source’s work copy and then publish it separately. This is a requester-controlled draft/publish boundary, not approval by a different named person or role; the page does not document such an approver.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Creates a work copy of a published data source and returns the work copy LUID."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_data_sources.htm (checked 2026-10-26)
  - Reasoning: Tableau's REST API enables programmatic clients and outside agents to create a work copy of a published data source to perform draft edits before publishing them. However, publishing the work copy is controlled by the requester rather than requiring review or approval by a distinct named person or role, which earns partly under the evidence rules.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "It may be possible to identify what changed to break a custom view by comparing a .twb from before and after the change."
  - Source: https://help.tableau.com/current/online/en-us/customview_update.htm (checked 2026-10-26)
  - Reasoning: Tableau documents a generic before/after change diff for a workbook. Save the .twb before and after a change, then run `vimdiff file1.twb file2.twb`, and 'The results highlight changes between the files.' This is a generic change diff of a governed workbook, done with an outside comparison utility. The documentation does not say it covers changes an outside agent made, and the product has no built-in diff view. Revision history only offers preview and restore. That makes it partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "It may be possible to identify what changed to break a custom view by comparing a .twb from before and after the change."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/customview_update.htm (checked 2026-10-26)
  - Reasoning: Tableau documents a generic workbook-change review method: save before/after TWB files and run vimdiff to highlight their XML changes. This permits a limited workbook diff, using an external comparison utility; it is not a documented review flow specifically covering outside-agent changes.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches for revision history and comparison tools in Tableau Cloud and Server documentation found features to preview, download, and restore previous workbook or data source revisions, but no before/after diff capability showing what an outside agent (or user) changed in an analytical asset.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can revert to a previous version at any time."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/qs_revision_history.htm (checked 2026-10-26)
  - Reasoning: Every publish of a workbook or data source, including one made by an outside agent through the REST API, saves a revision that can be reverted. The REST API also lists and downloads earlier revisions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can revert to a previous version at any time."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/qs_revision_history.htm (checked 2026-10-26)
  - Reasoning: Published Tableau workbooks/data sources have revision history and restore operations. This covers the same governed objects an outside agent publishes through the REST API; the Revisions API also retrieves prior workbook/data-source versions for republishing.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When you publish a workbook or data source, a version is saved in the revision history for Tableau Server and Tableau Cloud."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/qs_revision_history.htm (checked 2026-10-26)
  - Reasoning: Any workbook or data source published or updated (including by outside agents/scripts via API) generates an entry in revision history that can be reverted or restored.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Partly** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Connecting your knowledge graph to the Tableau MCP server enables Tableau Agent and other agents to query your knowledge graph."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_start.htm (checked 2026-10-26)
  - Reasoning: Tableau ships a vendor-supported MCP server that gives agents access to site content and data, with REST-managed per-site settings. Its setup and authentication docs live on GitHub, outside this corpus. The corpus only notes that 'a Tableau MCP user authenticates to a site', so documented authentication and hosting model are not established here.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "After you connect the Tableau Model Context Protocol (MCP) and Slackbot, you can ask Slackbot about your data in plain language."
  - Source: https://help.tableau.com/current/online/en-us/slack_tableau.htm (checked 2026-10-26)
  - Reasoning: The official Tableau Slack integration documents connecting its MCP service to outside Slackbot, with Tableau-site login and app authorization steps on this page. It provides data/site access without instructions to build middleware or operate a server in this route.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To learn more about the Tableau MCP, see the Tableau MCP documentation on GitHub(Link opens in a new window)."
  - Source: https://help.tableau.com/current/online/en-us/slack_tableau.htm (checked 2026-10-26)
  - Reasoning: Tableau supports a Model Context Protocol (MCP) server for outside agents (like Slackbot) to access Tableau content, with configuration managed in site settings and implementation hosted on GitHub.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Returns the workbooks on a site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_workbooks_and_views.htm (checked 2026-10-26)
  - Reasoning: The REST API's Query Workbooks for Site enumerates BI content without an id. The Metadata API lists databases and tables, Pulse lists metric definitions, and the Knowledge API lists graphs and sources.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "For example, if you are using the Tableau REST API and you want to find all the workbooks on your Tableau Cloud site or Tableau Server, you can make a GET request to return that information."
  - Source: https://help.tableau.com/current/api/metadata_api/en-us/index.html (checked 2026-10-26)
  - Reasoning: An outside agent can enumerate Tableau workbooks through the first-party REST API without knowing a workbook ID or title.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "By default, methods like Query Workbooks for Site return information about all of the workbooks on a Tableau Server site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_fields.htm (checked 2026-10-26)
  - Reasoning: Outside agents can enumerate existing analytical objects such as workbooks, views, and data sources via documented REST API methods (like Query Workbooks for Site) and the Tableau MCP search-content tool.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To get a credentials token, you call Sign In and pass credentials of a valid user, either a Personal Access Token (PAT), a user name and password, along with the content URL (subpath) of the site you are signing in to."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_concepts_auth.htm (checked 2026-10-26)
  - Reasoning: Named programmatic credential types are documented: personal access tokens, connected-app JWTs and unified access tokens.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can use the same UAT configuration to sign in to the Tableau REST API using the Sign in with JWT method to generate a Tableau credentials token for Tableau Cloud."
  - Source: https://help.tableau.com/current/api/cloud-manager/en-us/docs/unified_access_tokens.html (checked 2026-10-26)
  - Reasoning: The first-party API documents JWT/UAT authentication and a returned credentials token, a concrete outside-agent authentication route.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Personal access tokens (PATs) provide you and your Tableau Server users the ability to create long-lived authentication tokens."
  - Source: https://help.tableau.com/current/server/en-us/security_personal_access_tokens.htm (checked 2026-10-26)
  - Reasoning: Tableau documents personal access tokens (PATs) and Unified Access Tokens (UATs) as named programmatic credential types for authenticating API and agent access.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Not found** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor-published skill, plugin or instruction pack for outside coding agents is documented. The Slack page describes customers creating their own Slackbot skills, which is customer-built. In the API docs, 'Agent Resources' and 'View llms.txt' are navigation links with no skill content, and an MCP server alone belongs to a different row.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No vendor-published instruction pack, SKILL.md, or outside coding-agent plugin was found. Agent Resources navigation links to MCP documentation and Agentforce analytical skills are not packaged instructions for an outside agent.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Documentation search revealed references to built-in Agentforce analysis skills within Tableau Next and a vendor-provided Tableau MCP Server, but found no vendor-published packaged instructions or skills (such as a SKILL.md or plugin) that an outside coding agent (e.g. Claude Code or Cursor) loads to use Tableau.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Partly** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This new version allows you to: run tabcmd commands on MacOS and Linux, authenticate using personal access tokens (PATs), and allows you to be multi-factor authentication (MFA) compliant."
  - Source: https://help.tableau.com/current/online/en-us/tabcmd.htm (checked 2026-10-26)
  - Reasoning: tabcmd is a vendor CLI with non-interactive PAT authentication. Its documentation does not address use by AI or coding agents.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Tableau provides the tabcmd command-line utility which you can use to automate site administration tasks on your Tableau Cloud site."
  - Source: https://help.tableau.com/current/online/en-us/tabcmd.htm (checked 2026-10-26)
  - Reasoning: The first-party tabcmd CLI supports automation and PAT authentication. Its documentation does not address AI/coding-agent usage, so this is the general-CLI partial case.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "In most cases, you must use tabcmd command-line utility 2.0 (tabcmd 2.0) with Tableau Cloud."
  - Source: https://help.tableau.com/current/online/en-us/tabcmd.htm (checked 2026-10-26)
  - Reasoning: Tableau provides and supports the tabcmd command-line utility, but its documentation covers general administrative and publishing commands without specific guidance for outside AI or coding agents.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Partly** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Tableau MCP now supports per-site configuration via the REST API, allowing administrators to customize settings at the site level."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_whats_new.htm (checked 2026-10-26)
  - Reasoning: Admins configure MCP access per site (a workspace-level scope), separate from user permissions. Settings such as INCLUDE_TOOLS/EXCLUDE_TOOLS and INCLUDE_TAGS allow or block what outside agents can use on that site. This is finer than an account-wide switch.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Replaces the current list of Tableau MCP settings for a given site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_mcp.htm (checked 2026-10-26)
  - Reasoning: Admins have a dedicated per-site MCP settings API, including included/excluded tools in its examples. The corpus does not document a complete allow/block-access control for chosen users/groups; the established control is site-level MCP configuration.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Replaces the current list of Tableau MCP settings for a given site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_mcp.htm (checked 2026-10-26)
  - Reasoning: Tableau MCP settings (including tool inclusions/exclusions and tags) can be configured at the site level, but documentation does not provide granular per-user or per-group rollout for outside MCP access.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Gets the list of Tableau MCP settings for a specified site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_mcp.htm (checked 2026-10-26)
  - Reasoning: The documented MCP site settings examples include MAX_RESULT_LIMIT and MAX_RESULT_LIMITS (for example query-datasource:1000), an agent-interface-specific cap on results. The corpus does not describe these keys' semantics, and no rate limit, quota or spend cap is documented for agents, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Each Creator license on a site raises the cap for the entire site by 100 queries per hour."
  - Source: https://help.tableau.com/current/api/vizql-data-service/en-us/docs/vds_limitations.html (checked 2026-10-26)
  - Reasoning: The VDS analytical query interface enforces a site-wide usage cap. It applies to outside-agent requests through that interface but is not a separate per-agent quota/spend/rate control.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Gets the list of Tableau MCP settings for a specified site."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_mcp.htm (checked 2026-10-26)
  - Reasoning: Tableau provides site-level MCP configuration settings through the REST API specifically to cap agent-driven query limits, such as MAX_RESULT_LIMIT and MAX_RESULT_LIMITS (e.g. query-datasource:1000).

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Business preferences are natural-language instructions that explain organization-specific logic, terminology, and how your organization uses data."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: Tableau Knowledge lets creators write business rules and terminology (for example how revenue or NQL is defined). Tableau Agent and agents over MCP read these before answering. Workbook-level business preferences for Dashboard Q&A (beta) do the same per workbook.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Business preferences are natural-language instructions that explain organization-specific logic, terminology, and how your organization uses data."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: Tableau Knowledge supplies business rules to its own Knowledge agent and outside agents running over MCP before they answer. This is explicit context beyond schema names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Tableau Knowledge is an enterprise knowledge management solution that helps AI agents understand your organization's data and business context."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: Tableau Knowledge and Business Preferences allow users to document organization-specific business context, terminology, and definitions that agents read before answering.

### C5: Can the business context you give the AI live in version control?

**Result: Partly (preview)**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: partly, preview
  - Quote: "File formats: Supported file types are text files (.txt) and Markdown files (.md)."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm (checked 2026-10-26)
  - Reasoning: Workbook-level business preferences are plain .txt/.md files that can be downloaded, replaced or removed, so they can be kept and diffed outside Tableau. No version-control integration, diff or rollback is documented ('Undo and Redo are not currently supported'). Part of the beta Tableau Agent in Dashboards.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can either build a business preference by creating a single natural language instruction, or you can upload a file with your business preferences."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_start.htm (checked 2026-10-26)
  - Reasoning: Knowledge accepts business-preference source files, including plain text and Markdown in the same section. Those files can be maintained and reviewed in version control and an earlier file can be uploaded again; no native Git synchronization is claimed.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Download the Business Preferences file first before publishing any updates, then upload it again."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm (checked 2026-10-26)
  - Reasoning: Workbook-level business preferences (.md or .txt files) used by Tableau Agent in Dashboards (Beta) can be downloaded, edited, and uploaded again, allowing teams to store, diff, and manage them in external version control systems. However, native version control integration, in-product diffing, and rollback are not supported ('Undo and Redo are not currently supported'), earning partly.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Business preferences apply globally across the entire knowledge graph."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: Context is scoped to a knowledge graph built from selected workbooks and data sources. A site can hold several graphs (the selector shows up to 5), and agents can target a non-default graph, so different teams can get different context. Workbook-level preferences (beta) scope context further to one workbook.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Business preferences apply globally across the entire knowledge graph."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: Different Knowledge graphs can contain distinct business preferences and assets, and an agent can select a graph rather than the default. Workbook-level preferences additionally scope dashboard context to that workbook. This supplies distinct contexts to different teams/models instead of one tenant-global context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Tableau Agent uses these preferences when responding to user queries for dashboards in that workbook."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein_best_practice.htm (checked 2026-10-26)
  - Reasoning: Business preferences can be scoped at the workbook level for specific dashboards or across specific knowledge graphs, allowing different teams to maintain separate business context.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes (preview)**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, preview
  - Quote: "As a dashboard author, you can use Tableau Agent in Dashboards while in the authoring environment."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm (checked 2026-10-26)
  - Reasoning: The 'Test your output' step lets the author try the agent in the authoring draft before turning it on for consumers. Uploaded business preferences only take effect for consumers after the workbook is published ('Uploaded files aren’t saved when you close a draft'). This is a named test step for context. Beta.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "As a dashboard author, you can use Tableau Agent in Dashboards while in the authoring environment."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/dashboard-narratives.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent in Dashboards has a named Test your output step in authoring. In the same page, workbook business preferences are uploaded during authoring and saved by publishing; uploaded files are not saved on closing a draft. Authors can therefore test the context-driven answers before enabling them for consumers. This dashboard assistant is beta.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "You can access this tool in the Tableau Next menu to test questions in Concierge, and then verify and calibrate results."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: Tableau Next provides Q&A Calibration (Beta) to test questions and calibrate results before business context affects user answers.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Not found**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Dashboard Q&A shows 'all of the reasoning steps that Tableau Agent took to find its answer, as well as a summary of the data it used'. The business preferences pages say Tableau Agent uses workbook-level and global (Tableau Knowledge) preferences, and that global preferences 'are not displayed' in the workbook list. No page says an answer surfaces the specific business preference, description or rule that shaped it.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Pulse answers cite metric insight sources, while workbook settings expose the uploaded preferences. No page establishes surfacing the specific preference, instruction, description, or business rule that shaped an individual answer. Knowledge-graph grounding alone does not show that rule with the answer.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While Tableau Agent uses workbook-level and global business preferences from Tableau Knowledge during query evaluation, documentation explicitly notes that global preferences do not appear in the preferences list, and searches found no indication that the specific business context rule or preference shaping an answer is surfaced with the answer.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Partly**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The information it indexes includes field metadata such as field captions, field descriptions from comments(first 150 characters) in Tableau Desktop or from Tableau Catalog, data roles, and data types."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent uses existing field descriptions from Tableau Catalog, which can be inherited from upstream columns, and from semantic models brought in through the Tableau Semantics connector, so context need not be retyped. Ingesting warehouse column comments or dbt docs directly is not documented, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The information it indexes includes field metadata such as field captions, field descriptions from comments(first 150 characters) in Tableau Desktop or from Tableau Catalog, data roles, and data types."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: The built-in Tableau Agent indexes existing Catalog field descriptions. The Catalog documentation says descriptions can be inherited from upstream columns, and the Tableau Semantics connector retrieves source semantic metadata and descriptions. This provides a limited inherited-description route without retyping context into the assistant; direct ingestion of warehouse comments or dbt documentation is not established.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The information it indexes includes field metadata such as field captions, field descriptions from comments(first 150 characters) in Tableau Desktop or from Tableau Catalog, data roles, and data types."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent automatically indexes field descriptions and comments from the data source and Tableau Catalog as context for answers.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Partly**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Hide fields you don’t need and Tableau Agent won’t use these hidden fields."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein.htm (checked 2026-10-26)
  - Reasoning: Hiding a field is a product setting that removes it from Tableau Agent's reach, but it hides the field for everyone and is not AI-specific. Business preferences explicitly do not support 'Not for AI use' blocking, so it is partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When you start a Tableau Agent session, if you see similarly named fields in a data source, hide the ones that aren't relevant. Tableau Agent won't ground its answers on hidden fields"
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein_faq.htm (checked 2026-10-26)
  - Reasoning: This documented field-hiding mechanism excludes fields from the built-in assistant’s grounding, rather than merely asking the model to avoid them in a prompt. It is author/source-scoped, not a claim of a tenant security boundary.
- **Gemini 3.8 Flash**: no
  - Quote: "Not for AI use: Blocking topics or questions."
  - Source: https://help.tableau.com/current/online/en-us/web_author_einstein_best_practice.htm (checked 2026-10-26)
  - Reasoning: Tableau explicitly documents that business preferences do not support marking items off-limits to the AI ('Not for AI use: Blocking topics or questions. For example, “Don’t answer any questions about salary"').

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Tableau Creators build and maintain knowledge graphs."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: A role owns business context: Creators (and site admins) create and change knowledge graphs and preferences. No review or approval step for changes to context is documented, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Tableau Creators build and maintain knowledge graphs."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: The documentation assigns the context-maintenance responsibility to Creators, who select content, upload supporting documents, add business preferences and review graph-health suggestions. It does not require review/approval of a context edit before it becomes active.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Tableau Creators build and maintain knowledge graphs."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: Tableau Knowledge assigns ownership of knowledge graphs and business preferences to specific creator and administrator roles, but does not document a review or approval workflow before context changes take effect.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Not found** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents Tableau Agent, Pulse or Tableau Next agents reading warehouse-level logic such as dbt models, warehouse semantic views or view definitions. The only dbt mention is 'dbt Semantic Layer' in a Bridge connector list, which is not tied to the assistant. The assistant is documented using Tableau data sources, semantic models and Tableau Knowledge.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Tableau Agent uses connected data and Tableau field calculations; Tableau Semantics supplies external semantic models. No page establishes the built-in assistant reading warehouse view definitions, dbt logic, or warehouse semantic-view logic. Reading source metadata or product semantic definitions alone does not settle warehouse-logic access.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches found that Tableau Agent and Concierge answer questions from published data sources, semantic models in Data Cloud, or dashboard metadata, but found no capability for the built-in assistant to read logic (such as dbt models or warehouse semantic views) directly from an underlying data warehouse.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Tableau Agent for Prep writes flow steps and calculations, but the Prep agent page says 'Tableau Agent can't run the flow or schedule it to run, create output steps'. Output steps are what write to a database. No other built-in AI is documented authoring a warehouse transform, model or view.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The assistant authors Prep transformations and Tableau calculations, but no page establishes it authoring a warehouse transform, model, or view through Tableau. Prep database output is a separate user-configured operation; the assistant documentation excludes Output steps and running the flow. Data Pro semantic-model creation does not establish writing logic into the warehouse.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While Tableau Prep flows can write output data tables to databases, and Tableau Agent can assist in creating Prep flow steps, searches found no capability for the built-in assistant to author warehouse-level logic (such as DDL, database views, or warehouse transforms) that lands below the BI tool.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No API, MCP or CLI route returns warehouse view definitions, dbt models or semantic views to an outside agent. The Metadata API exposes database table and column metadata and lineage, plus Tableau-owned custom SQL. Table and column names are not logic, and Tableau custom SQL is not warehouse-level logic.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The Metadata API exposes upstream assets, column metadata, and custom SQL authored in Tableau data sources or flows. No documented route retrieves warehouse view definitions, dbt models, or warehouse semantic-view logic for an outside agent. Custom SQL stored in Tableau is a different object.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Tableau's Metadata API exposes database and table metadata (and queries for CustomSQLTable defined in Tableau), but searches found no interface allowing an outside coding agent to read warehouse-level logic such as view definitions, dbt models, or semantic views in the underlying warehouse.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Not found** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No first-party API, MCP or CLI route lets an outside agent author warehouse transforms, models or views through Tableau. The REST API publishes Tableau data sources and work copies, which are Tableau assets. Prep's database output writes data, and no outside-agent route is documented for authoring warehouse logic.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Database-output and custom-SQL facilities exist for human-authored Prep flows, and Hyper APIs address Tableau extract files. No documented outside-agent interface authors warehouse transformations, views, or models through Tableau. Generic SQL execution or file upload alone does not establish this warehouse-logic object.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches found no capability for an outside coding agent to author warehouse logic (such as views, transforms, or DDL) through Tableau's APIs or tools.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Yes**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The semantic information contained in the model is also retrieved by the connector using semantic metadata queries."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/examples_tableau_semantics.htm (checked 2026-10-26)
  - Reasoning: Tableau consumes semantic models maintained in Tableau Semantics (Data 360/Tableau Next) without rebuilding them. Consuming dbt, Cube or Snowflake semantic-view definitions is not documented beyond a 'dbt Semantic Layer' entry in Bridge's supported Exchange connector list, so it is partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "dbt Semantic Layer"
  - Source: https://help.tableau.com/current/online/en-us/to_sync_local_data.htm (checked 2026-10-26)
  - Reasoning: The official Bridge supported-Exchange-connectors inventory explicitly includes dbt Semantic Layer, a documented route to query externally maintained semantic definitions rather than rebuilding them in Tableau. This establishes connector consumption, not assistant understanding of dbt source code.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "dbt Semantic Layer"
  - Source: https://help.tableau.com/current/online/en-us/to_sync_local_data.htm (checked 2026-10-26)
  - Reasoning: Tableau supports connecting directly to the dbt Semantic Layer, consuming external metric definitions rather than requiring them to be rebuilt.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Fields in the data source including caption, description (used for viz generation only), role, field type, data type, default aggregation, calculation formulas, field table name, and placements of fields in the viz."
  - Source: https://help.tableau.com/current/tableau/en-us/tableau_gai_data.htm (checked 2026-10-26)
  - Reasoning: Tableau Agent is grounded in the published data source's defined calculations, default aggregations and roles, which is Tableau's shared definition layer. Tableau Knowledge adds 'trusted business definitions and calculations from semantic models' for agents.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The analytic context for insights is based on the Tableau Pulse metric definition."
  - Source: https://help.tableau.com/current/online/en-us/pulse_insights_platform_insight_types.htm (checked 2026-10-26)
  - Reasoning: The built-in Pulse AI works from maintained metric definitions and their measures, dimensions and user filters; the same page connects these definitions to Agent in Pulse’s generated answers.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Agents use trusted business definitions and calculations from semantic models, metadata, relationships, and business preferences in the knowledge graph, rather than relying only on raw data."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: The assistant answers questions using definitions, dimensions, and measures defined in Tableau Semantics and Tableau Knowledge graphs.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Semantic Model Curation helps you get relationship suggestions and create relationships in Tableau Semantics."
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: Agentforce for Analytics in Tableau Next creates relationships (joins) in the Tableau Semantics shared layer. Its Data Pro subagent has 'Create Calculated Field and Create Semantic Data Model actions', so the built-in agent creates and edits shared definitions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Data Pro - Preparation and Modeling: Includes the Create Calculated Field and Create Semantic Data Model actions"
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: The configured first-party Data Pro subagent creates calculated fields and semantic models in Tableau Next’s shared semantic layer, beyond writing descriptions for existing definitions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Data Pro - Preparation and Modeling: Includes the Create Calculated Field and Create Semantic Data Model actions"
  - Source: https://help.tableau.com/current/tableau-next/en-us/tableau_next_setup_guide_enable_tua_ai.htm (checked 2026-10-26)
  - Reasoning: The built-in assistant (Data Pro in Agentforce) includes actions to create semantic data models and calculated fields in Tableau Semantics.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`description`: The description of the field (what appears under the Lineage tab for the data source) if you have enabled data catalog."
  - Source: https://help.tableau.com/current/api/vizql-data-service/en-us/docs/vds_get_data_source_info.html (checked 2026-10-26)
  - Reasoning: VizQL Data Service's Request Data Source Metadata returns each published-data-source field's description and calculation formula to an outside agent. The Knowledge Graph API returns semantic contexts.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "`description`: The description of the field (what appears under the Lineage tab for the data source) if you have enabled data catalog."
  - Source: https://help.tableau.com/current/api/vizql-data-service/en-us/docs/vds_get_data_source_info.html (checked 2026-10-26)
  - Reasoning: An outside agent using VDS metadata can retrieve field descriptions, and the same response exposes formulas, default aggregations and roles. This is readable shared meaning and business calculation logic, not only table/column names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "AI agents including Tableau Agent for Knowledge in Tableau Cloud and any agent running over MCP query Tableau Knowledge graphs to answer questions for users."
  - Source: https://help.tableau.com/current/online/en-us/tableau_knowledge_about.htm (checked 2026-10-26)
  - Reasoning: Outside coding agents running over MCP or the Metadata API can read shared semantic models, entity descriptions, and metrics from Tableau Knowledge.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create, update, and delete metric definitions"
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_pulse.htm (checked 2026-10-26)
  - Reasoning: Pulse metric definitions (measure, time dimension, aggregation, filterable dimensions) are a shared metric layer, and the Pulse REST API lets an outside agent create and edit them. The Knowledge Graph API also writes semantic contexts.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Updates a metric definition."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_pulse.htm (checked 2026-10-26)
  - Reasoning: The first-party Pulse REST API updates governed metric definitions; the page also documents creating/listing definitions, permissions and named write scopes. An outside agent can author these shared definitions programmatically.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Create a semantic context node carrying one or more statements."
  - Source: https://help.tableau.com/current/api/rest_api/en-us/REST/rest_api_ref_tableau_knowledge_graph.htm (checked 2026-10-26)
  - Reasoning: Outside agents can create and update semantic context nodes in Tableau Knowledge via the REST API (POST/PATCH /api/v1/knowledge/semantic-contexts).

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Partly**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This enables you to add or update data in your database with clean, prepped data from your flow each time the flow is run."
  - Source: https://help.tableau.com/current/prep/en-us/prep_save_share.htm (checked 2026-10-26)
  - Reasoning: Cleaning and shaping logic built in Tableau Prep can be materialized as tables in an external database on every flow run. Write options include Create table, Append to table and Replace data. So the output of work modelled in Tableau lives in the warehouse. The logic itself stays a Tableau Prep flow and does not become a maintained view or model in the warehouse, so this is partial pushdown.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Save your flow output to a database to create, replace, or append the table data with your clean, prepared flow data. For more information, see Save flow output data to external databases."
  - Source: https://help.tableau.com/current/prep/en-us/prep_save_share.htm (checked 2026-10-26)
  - Reasoning: Tableau Prep can materialize the results of its cleaning and shaping logic in an external database table. This is partial pushdown: the output data lives in the database, while the reusable transformation definition remains a Tableau Prep flow rather than becoming a maintained warehouse view or model.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Searches confirmed that calculations and semantic definitions created in Tableau remain in the tool or published data sources; documentation notes that operations such as default sorting are 'carried out by Tableau, not sent back to the source'. No mechanism exists to push modeled definitions back down as views or models in the warehouse.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "All of these refinements become part of the metadata contained in the data source that you publish and maintain."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/publish_datasources_about.htm (checked 2026-10-26)
  - Reasoning: Calculations added while working with a view become part of the data source. Publishing it makes them a maintained shared definition that flows to all connected workbooks, without a developer rewriting them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "In Tableau 2026.2 and later, you can publish your semantic overrides on a PDS rather than keeping those modifications in a workbook as a local data source."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/datasource_extend_compose.htm (checked 2026-10-26)
  - Reasoning: A chart’s ad-hoc calculation can be copied to the Data pane as a named calculation; extended published data sources then publish workbook calculations/semantic overrides as a shared maintained PDS. This path does not require a developer to rewrite the formula.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When you’re working with your view, you can add calculations, sets, groups, bins, and parameters; define any custom field formatting; hide unused fields; and so on."
  - Source: https://help.tableau.com/current/pro/desktop/en-us/publish_datasources_about.htm (checked 2026-10-26)
  - Reasoning: Calculations added to an analysis can be published directly to Tableau Cloud/Server as part of a published data source, becoming a maintained shared definition without rewriting.

