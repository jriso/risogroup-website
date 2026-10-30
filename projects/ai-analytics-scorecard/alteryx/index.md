# Alteryx: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/alteryx/

AI Feature Score **60**, #11 of 15 (BI and analytics tool). Built-in AI 50, external AI 63, other 62. Analysis 64, Building and maintaining assets 65, Context and connections 53, Reliability and controls 56. By model: Claude Opus 5.5 53, GPT-6.1 Sol 61, Gemini 3.8 Flash 60.

## Score breakdown

Four areas, 25 points each. Shown for Gemini 3.8 Flash, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 16.0 of 25
- Building and maintaining assets: 16.3 of 25
- Context and connections: 13.3 of 25
- Reliability and controls: 14.1 of 25

**Strengths**

- Investigate why a number changed
- AI data flow is documented
- An admin can allow or block agents

**Not found in the docs**

- Keep that context in version control
- Outside agents change metric definitions
- A saved analysis can run unattended

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Describe what you want in natural language, and Ask Alteryx finds the data in your workspace, builds a workflow, runs it, and reports the results in the chat."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx, the built-in assistant, takes a plain-English description and builds and runs the analysis against workspace data without the user writing anything. Alteryx Agents also answer natural-language questions about datasets.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Describe what you want in natural language, and Ask Alteryx finds the data in your workspace, builds a workflow, runs it, and reports the results in the chat."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: The built-in assistant turns a natural-language analytical request into an executed workflow and answer, without requiring SQL or a prebuilt dashboard.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Describe what you want in natural language, and Ask Alteryx finds the data in your workspace, builds a workflow, runs it, and reports the results in the chat."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Users can type analytical requests in plain English, and Ask Alteryx autonomously finds relevant data, constructs a workflow, runs it, and reports answers in the chat.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Update the workflow with follow-up requests, such as adding a filter or sorting the results."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx keeps the conversation thread and revises the analysis it already built in response to follow-up requests. Chats are saved and can be resumed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Update the workflow with follow-up requests, such as adding a filter or sorting the results."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx retains the workflow and conversational thread so follow-up requests refine the preceding analysis.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To change the workflow, send a follow-up request, or select one of the suggested next steps below the response."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx maintains conversation context across multiple turns, enabling users to refine analyses and update workflows with follow-up prompts.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Review the explanation of the workflow and the results."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Each answer comes with an explanation of the workflow that produced it. The same page says the workflow is saved so it can be opened and reviewed, and that the Called tools list can be expanded to review each action. That exposes the analytical steps.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The workflow is saved to your workspace, so you can open it, review it, and run it again later."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: The answer has a saved, inspectable workflow containing the analytical steps. The same page also documents the expandable Called tools actions and Execution Plan.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "While Ask Alteryx works, the chat shows Thinking and a list of the actions it takes, with a count of completed actions."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx exposes each analytical action and tool execution taken via a Thinking state, Execution Plan, and Called tools breakdown.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Not found** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Alteryx Agents link answers back to 'the underlying data queries or datasets' when that information is available. The Ask Alteryx Assets panel lists the workflows and datasets used in a chat, and help answers show 'Show 3 Sources' for documentation pages. None of these attaches named tables, columns or measures to an analytical answer. Naming only the dataset does not count.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Agent responses can link to queries or datasets, and the chat Assets panel lists datasets and workflows. Neither establishes a table, column, or metric citation attached to an analytical answer independently of its query. Underlying raw-data previews also do not document such citations.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Alteryx Agents provide traceability links back to underlying datasets or queries, but the product does not document attaching a list or citation of specific tables, columns, or metrics to conversational answers.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Ask Alteryx turns each file into a dataset in Data, so you can ask questions about it or build a workflow from it."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one/upload-files-to-ask-alteryx.html (checked 2026-10-26)
  - Reasoning: Users upload CSV or XLSX files to an Ask Alteryx chat, and the assistant analyzes them. It summarizes a file sent without a message.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Ask Alteryx turns each file into a dataset in Data, so you can ask questions about it or build a workflow from it."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one/upload-files-to-ask-alteryx.html (checked 2026-10-26)
  - Reasoning: This is specifically the built-in Ask Alteryx chat upload flow for CSV and XLSX files, followed by AI questions or workflow analysis.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If your homepage is named Home, you can upload CSV and XLSX files to an Ask Alteryx chat."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one/upload-files-to-ask-alteryx.html (checked 2026-10-26)
  - Reasoning: Users can upload CSV and XLSX spreadsheets directly into an Ask Alteryx chat session to analyze their contents and generate workflows.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Yes** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Clean up the file I uploaded and remove rows with missing values."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: This is a documented example request for Ask Alteryx. The page states that the assistant builds a workflow to fulfil requests and saves it to the workspace to open and review, so the cleaning steps remain as an inspectable workflow.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Clean up the file I uploaded and remove rows with missing values."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: The built-in assistant performs data cleaning through a workflow that this page says is saved and reviewable; the transformation logic remains inspectable.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Clean up the file I uploaded and remove rows with missing values."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx executes data cleaning and reshaping requests and generates a full Designer workflow saved to the workspace with inspectable transformation logic.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Yes** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The agent combines the resulting calculations and insights to produce a richer analysis for the user."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: A built-in Alteryx Agent can use several datasets in one answer. The page says the datasets are not merged: each is calculated separately and only the results are combined. No join or blend across distinct sources is documented for the AI. Ask Alteryx's tool list includes Join tools, but no page shows it joining two sources.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Join and blend datasets to enrich records with attributes from internal and external sources."
  - Source: https://help.alteryx.com/aac/en/platform/getting-started-with-alteryx-one/getting-started-for-workspace-users.html (checked 2026-10-26)
  - Reasoning: The Build Data Pipelines section explicitly permits having Ask Alteryx build these workflows, including joins and blends across internal and external sources. This is broader than joining tables within one database.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Join and blend datasets to enrich records with attributes from internal and external sources."
  - Source: https://help.alteryx.com/aac/en/platform/getting-started-with-alteryx-one/getting-started-for-workspace-users.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx can build workflows that join and blend datasets across multiple internal and external data sources in a single analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Select a dataset, and Auto Insights will generate use cases based on the type of data available in the selected dataset. You can then choose a use case, and Auto Insights will generate a Custom Report based on the use case and the chosen dataset."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/reports.html (checked 2026-10-26)
  - Reasoning: The Custom Reports AI generates a whole report, with its charts and analytics blocks, for a chosen use case. The documentation does not say that the AI picks a chart type suited to the question, so only part of the row is shown.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Select a dataset, and Auto Insights will generate use cases based on the type of data available in the selected dataset. You can then choose a use case, and Auto Insights will generate a Custom Report based on the use case and the chosen dataset."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/reports.html (checked 2026-10-26)
  - Reasoning: The built-in report-generation AI chooses and creates the report analytics and visual blocks from an analytical use case and dataset. The user chooses the use case, rather than specifying a chart to restyle.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Auto Insights uses Recommended Charts to connect the best charts with the insights shown."
  - Source: https://help.alteryx.com/aac/en/auto-insights/create-insights/edit-missions.html (checked 2026-10-26)
  - Reasoning: Alteryx Auto Insights automatically selects and creates visualizations suited to the discovered insights using Recommended Charts.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Yes** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Root cause analysis, such as why changes occurred."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: Built-in Alteryx Agents perform root-cause analysis of changes. The agent pages do not document a per-segment contribution breakdown with a checkable calculation. Auto Insights' What Caused This contributions are a classic feature that the agent is not documented to use.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Let’s take a look at this example, where we see Loyalist customers had contributed to a 0.31 increase in the overall average price for that month (0.2 increase)."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/contributions-explained.html (checked 2026-10-26)
  - Reasoning: Auto Insights documents segment contributions to a metric change, including positive and negative contributions and a worked contribution formula on this page. Its What Caused This AI analysis is also documented, and built-in Alteryx Agents support root-cause analysis.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Within the What Caused This section, for averages and ratios are 3 main columns: the main metric, numerator changes, and denominator changes."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/contributions-explained.html (checked 2026-10-26)
  - Reasoning: Auto Insights calculates and displays segment contributions in 'What Caused This', breaking down metric changes into segment influences with verifiable mathematical calculations.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: No** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Alteryx Agents list trend, root cause, common cause and outlier analysis, with no forecasting. Auto Insights, the engine behind them, states it 'does not do predictive modeling or forecasting'. The Ask Alteryx supported-tool list has no forecasting or time-series tools. Forecasting exists in Alteryx Machine Learning and the Designer predictive tools, but no page says the built-in AI produces a forecast.
- **GPT-6.1 Sol**: no
  - Quote: "- Auto Insights does not do predictive modeling or forecasting–predictive modeling requires business acumen, knowledge, judgment, and overlays. However, if you have your own forecast scores, you can upload them into Auto Insights to trend and analyze."
  - Source: https://help.alteryx.com/aac/en/auto-insights/prepare-data.html (checked 2026-10-26)
  - Reasoning: Auto Insights explicitly excludes forecasting. The documented built-in Agent analysis inventory and Ask Alteryx supported tool inventory provide no forecasting route; classic Designer time-series tools are not documented as driven by the assistant.
- **Gemini 3.8 Flash**: no
  - Quote: "- Auto Insights does not do predictive modeling or forecasting–predictive modeling requires business acumen, knowledge, judgment, and overlays."
  - Source: https://help.alteryx.com/aac/en/auto-insights/prepare-data.html (checked 2026-10-26)
  - Reasoning: The documentation explicitly states as a negative limit that Auto Insights does not perform predictive modeling or forecasting.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The only 'scenario' features are Ask Alteryx's sample-data use cases and Auto Insights AI Suggested Use Cases. Both generate synthetic data for a business scenario. Neither calculates what-if scenarios with stated changed assumptions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AI Suggested Use Cases uses a scenario to propose analytical use cases or generate sample data. The searches did not establish the built-in AI calculating alternative what-if outcomes with changed assumptions, either singly or side by side.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The documentation describes Ask Alteryx generating sample data for user-selected business scenarios to explore workflow building, but does not support calculating and comparing side-by-side what-if scenarios with explicitly stated changed assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Partly** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When a Preset Report or dataset is updated, you are notified that the export you created is out of date."
  - Source: https://help.alteryx.com/aac/en/auto-insights/share-insights/magic-documents.html (checked 2026-10-26)
  - Reasoning: When the underlying data changes, an AI-generated Export Options draft is flagged as out of date. The age or last-refresh time of the data is not shown with AI answers, and Alteryx Agents only state that they use the latest refreshed dataset.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When a Preset Report or dataset is updated, you are notified that the export you created is out of date."
  - Source: https://help.alteryx.com/aac/en/auto-insights/share-insights/magic-documents.html (checked 2026-10-26)
  - Reasoning: Auto Insights flags an AI-generated export when its report or dataset has changed. This exposes stale AI output, but does not display the age or last-refresh timestamp of the data with conversational answers.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When a Preset Report or dataset is updated, you are notified that the export you created is out of date."
  - Source: https://help.alteryx.com/aac/en/auto-insights/share-insights/magic-documents.html (checked 2026-10-26)
  - Reasoning: When the underlying data or Preset Report changes, an AI-generated Export Options draft alerts the user that it is out of date. However, age or last-refresh timestamps are not displayed directly with conversational AI answers.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Workflow metadata and workflow XML, including tool configurations and the connections between tools."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx reads workflow tool configurations, including formulas, in Designer workflows. Those are analyst work rather than calculations behind charts in BI content such as Auto Insights reports.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Workflow metadata and workflow XML, including tool configurations and the connections between tools."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx reads the workflow configuration/logic it is helping edit. This is analyst workflow logic, including supported Formula/SQL Transform tools, rather than the calculation behind a chart in published BI content.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Use Ask Alteryx to ask questions about your Live Query workflow and add supported tools to the canvas while you build in Live Query."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx reads the active workflow canvas in Designer and Live Query to explain tools and summarize workflow logic.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Add tools to your workflow and configure them."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-designer.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx writes and configures calculation tools, such as Formula, in a Designer workflow, which is analyst work. Writing the calculation behind a chart in BI content is not documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Automatically add and configure tools in your workflow."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx writes workflow analytical logic; its documented supported tools include SQL Transform and Formula. The evidence is analyst work rather than a chart/table calculation in persistent BI content, so credit is partial.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- Automatically add and configure tools in your workflow."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx writes workflow tools and configurations directly onto the Live Query and Designer canvases.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To download a workflow package, use the `GET {baseURL}/v3/workflows/{workflowId}/package` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: Analytic apps published to Server are workflow records (packageWorkflowType 'App') that people run to see results. Through the Server API an outside agent can download the whole YXZP package and parse it to find the logic feeding a table or chart output. No endpoint returns the calculation behind one specific chart or table, so this is the whole-file partial case.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "To download a workflow package, use the `GET {baseURL}/v3/workflows/{workflowId}/package` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: The Server workflow interface includes analytic apps, and returns their complete YXZP package. An outside agent can retrieve the app workflow and parse the logic feeding its report output; there is no direct chart/table calculation endpoint, so this is whole-file partial credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To download a workflow package, use the `GET {baseURL}/v3/workflows/{workflowId}/package` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: Through the Server API V3, an outside agent can download an entire workflow package (YXZP) for a published analytic app and parse it to retrieve calculation logic feeding visual or table outputs, scoring partly as no endpoint retrieves the calculation behind an individual chart or table.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To upload a new version to an existing workflow, use the `POST {baseURL}/v3/workflows/{workflowId}/versions` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: An outside agent can change the logic behind a published analytic app's outputs only by uploading a replacement YXZP version through the Server API. The same page says the version behavior 'applies uniformly to all workflow types (including workflows, apps, macros, etc.)'. No endpoint edits a single chart or table calculation, so this is the whole-file replacement case.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "To upload a new version to an existing workflow, use the `POST {baseURL}/v3/workflows/{workflowId}/versions` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: The Server workflow interface includes analytic apps and accepts replacement YXZP versions. An outside agent can replace the whole app workflow containing report logic; direct editing of one chart/table calculation is not documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "This behavior applies uniformly to all workflow types (including workflows, apps, macros, etc.)."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: An outside agent can update logic in published analytic apps by uploading a new version of the complete workflow package (YXZP) via the Server API, but cannot write or modify the calculation of a single specific chart or table in place.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This feature analyzes the entire report and generates a concise, high-level summary that you can use as-is or refine to suit your needs."
  - Source: https://help.alteryx.com/aac/en/auto-insights/data-security/data-security-when-using-magic-documents-or-playbooks.html (checked 2026-10-26)
  - Reasoning: The built-in Auto Insights AI Assistant opens an existing Custom Report (BI content) and works from what it shows to produce an Executive Summary.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This feature analyzes the entire report and generates a concise, high-level summary that you can use as-is or refine to suit your needs."
  - Source: https://help.alteryx.com/aac/en/auto-insights/data-security/data-security-when-using-magic-documents-or-playbooks.html (checked 2026-10-26)
  - Reasoning: The named AI Assistant Executive Summary capability reads an existing Auto Insights report and works from its content. This is BI report content, not merely a workflow editor.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This feature analyzes the entire report and generates a concise, high-level summary that you can use as-is or refine to suit your needs."
  - Source: https://help.alteryx.com/aac/en/auto-insights/data-security/data-security-when-using-magic-documents-or-playbooks.html (checked 2026-10-26)
  - Reasoning: The AI Assistant Executive Summary feature directly reads and analyzes the entire Preset Report to generate summaries and answer questions.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Select a dataset, and Auto Insights will generate use cases based on the type of data available in the selected dataset. You can then choose a use case, and Auto Insights will generate a Custom Report based on the use case and the chosen dataset."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/reports.html (checked 2026-10-26)
  - Reasoning: The Custom Reports AI generates a persistent Custom Report on the user's dataset. The same page says the user becomes its owner, its data blocks update when the data refreshes, and viewers get underlying dataset permissions. That is governed BI content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Select a dataset, and Auto Insights will generate use cases based on the type of data available in the selected dataset. You can then choose a use case, and Auto Insights will generate a Custom Report based on the use case and the chosen dataset."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/reports.html (checked 2026-10-26)
  - Reasoning: The built-in AI creates a persistent Custom Report backed by a selected dataset; its data/insight blocks refresh with that dataset. This page documents report ownership and editor/viewer access, and sharing makes it an Alteryx One governed asset.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Select Open report for your preferred use case, and your automatically generated report opens in a new tab."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/playbooks-with-your-data.html (checked 2026-10-26)
  - Reasoning: Auto Insights AI Suggested Use Cases automatically generates complete multi-page Preset Reports and Custom Reports from natural language use case selections.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The Designer toolset lets AI agents create, update, run, and inspect Designer workflows stored in your Alteryx One workspace Library."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: Outside agents can read workflows, which are analyst work, through get_condensed_workflow. No MCP or API read of Auto Insights reports or App Builder apps is documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To download a workflow package, use the `GET {baseURL}/v3/workflows/{workflowId}/package` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: The documented Server workflow API includes analytic apps. An outside agent can retrieve the full published app workflow package, including its analytical tools and filters, rather than only listing its metadata.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "You can work only with Designer workflows when you have access to them."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: The MCP Server Designer toolset lets connected AI agents retrieve metadata and sample data from saved Designer workflows, but does not provide access to Preset Reports.

### D_OW: Can an outside coding agent build BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The Designer toolset lets AI agents create, update, run, and inspect Designer workflows stored in your Alteryx One workspace Library."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: Outside agents can create and edit workflows, which are analyst work, through create_workflow and add_tool. Creating BI content such as reports or apps is not documented.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To upload a new workflow, use the `POST {baseURL}/v3/workflows` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: The endpoint accepts a YXZP package, owner ID, visibility and execution permissions, and explicitly covers workflow types including apps. An outside agent can author and upload a persistent Server analytic app as BI content through this vendor interface.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Adds a custom tool or plugin using raw configuration XML."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: The MCP Server Designer toolset exposes add_custom_tool_with_xml, edit_custom_tool_with_xml, and remove_tool for external agents to edit saved Designer workflows.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "When viewers view the Custom Report inside Auto Insights, the underlying dataset permissions apply, meaning they might have to request access for certain analytics blocks to view them."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/reports.html (checked 2026-10-26)
  - Reasoning: AI-generated Custom Reports can be shared with users. Viewers see report blocks only under their own dataset permissions, unlike the PDF export, which shows the editor's view.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- When viewers view the Custom Report inside Auto Insights, the underlying dataset permissions apply, meaning they might have to request access for certain analytics blocks to view them."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/reports.html (checked 2026-10-26)
  - Reasoning: This same page documents AI-generated Custom Reports. The Share Insights guide supports sharing those report assets with named Users or Groups, and interactive viewers need their own underlying dataset access. PDF/email copies do not have this protection.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Select Users or Groups to share with."
  - Source: https://help.alteryx.com/aac/en/auto-insights/share-insights.html (checked 2026-10-26)
  - Reasoning: Preset Reports and insights in Auto Insights can be shared directly with specified users and user groups.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The library is designed to help you organize, search, filter, and manage shared analytical content across teams and projects."
  - Source: https://help.alteryx.com/aac/en/platform/library-for-assets.html (checked 2026-10-26)
  - Reasoning: The Library lets users search and filter colleagues' workflows, reports and Alteryx Agents across the workspace. Ask Alteryx saves the workflows it builds to the Library.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The library is designed to help you organize, search, filter, and manage shared analytical content across teams and projects."
  - Source: https://help.alteryx.com/aac/en/platform/library-for-assets.html (checked 2026-10-26)
  - Reasoning: The shared Library includes Auto Insights Custom/Preset Reports, agents, analytic apps and workflows, supports owner/shared-with filters, and provides search. AI-generated Custom Reports are saved as these same report assets.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use the search to find supported assets and resources across Alteryx One."
  - Source: https://help.alteryx.com/aac/en/platform/alteryx-one-app/global-app-bar.html (checked 2026-10-26)
  - Reasoning: The global search bar in Alteryx One allows users to discover supported assets and resources across all modules.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Yes** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Creators and editors can share agents."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: An Alteryx Agent is configured once with a name, chosen datasets, custom instructions and starter prompts, then shared. Viewers can use it only if they have access to all of its dependencies, so it carries its own data, instructions and permission scope for colleagues to reuse.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Alteryx Agents: Build an agent to answer natural-language questions about your datasets. Select 1 or more datasets, add custom instructions and starter prompts to guide the agent's responses, and preview the agent before you share it. Agents can return trend analysis, root cause analysis, common cause analysis, and outlier detection."
  - Source: https://help.alteryx.com/aac/en/release-notes/agent-studio-release-notes.html (checked 2026-10-26)
  - Reasoning: Customers save a configured built-in agent with instructions and chosen datasets, then share it. The Alteryx Agents page documents creator/editor/viewer access and blocks colleagues missing a dependency.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Add custom instructions to guide the agent's behavior and analysis approach."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: Agent Studio allows authors to provide custom instructions defining objectives, role, tone, domain-specific terms, and analysis methods to govern agent behavior.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Not found** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Ask Alteryx reruns a saved workflow only when a user asks it to in a chat ('Run my Customer Counts by Region workflow again'), so a person is present. Workflows and dataset refreshes can be scheduled, but those are ordinary schedules that the AI does not run. No page documents Ask Alteryx or Alteryx Agents creating or running a scheduled or triggered task.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Insights refresh now follows your Alteryx One dataset: updating the dataset, through a manual upload, a workflow run, or a manual refresh, automatically updates its Insights."
  - Source: https://help.alteryx.com/aac/en/orchestrator/plan-tasks/auto-insights-task.html (checked 2026-10-26)
  - Reasoning: Auto Insights is documented as an AI-powered virtual analyst. Dataset-update triggers automatically refresh its analytical Insights; plans automate those updates, and Schedule Preset Reports documents unattended email delivery. This covers the dynamic Auto Insights analysis. Generated executive-summary prose can remain static, as the Custom Reports page explains.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: In Alteryx, workflows and dataset refreshes can be automated on a schedule or orchestrated plan, but the documentation does not describe an AI assistant or agent rerunning defined analytical tasks on a schedule or trigger and delivering fresh results or alerts without human intervention.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Yes** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Run your workflow. Run your workflow and publish the results to the output source configured in the Output tool."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx in Live Query runs the workflow itself and publishes results to the configured output destination, such as a warehouse table. That is a write to a destination outside the analytics content.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Run your workflow. Run your workflow and publish the results to the output source configured in the Output tool."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx can execute the workflow and publish data to the configured output destination, a named write side effect beyond editing analytics content.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Run your workflow and publish the results to the output source configured in the Output tool."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx in Live Query can run the workflow directly and publish the results to an external destination configured in the Output tool (such as a database or warehouse table), performing a side effect outside the analytics content.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Review the response from Ask Alteryx and confirm next steps if prompted."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx pauses inside the conversation to ask the user to confirm next steps. It also asks which XLSX sheet to use. No hand-off outside the conversation, such as a notification or review queue, is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "When you upload an XLSX file with more than 1 sheet, Ask Alteryx asks which sheet to use."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one/upload-files-to-ask-alteryx.html (checked 2026-10-26)
  - Reasoning: The built-in assistant hands a required input choice back to the requester as a clarifying question. This is the limited conversational case, not a documented failure escalation to a review queue or another person.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Review the response from Ask Alteryx and confirm next steps if prompted."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx can pause during execution to prompt the user to confirm next steps (or ask which sheet to use when uploading XLSX files), which constitutes a clarifying question or pause inside the conversation scoring partly; no external hand-off mechanism like a notification or review queue is documented.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Not found** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: An Alteryx Agent is configured with a name, description, datasets, custom instructions and starter prompts. No option lets it delegate to another named agent. Ask Alteryx's Execution Plan lists its own tasks, not delegation to configured agents. The Gemini Enterprise agent is routed by Gemini, and that routing is not configured as a delegation in Alteryx.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Agent Studio documents datasets, custom instructions, sharing, and external clients. It does not establish customer-configured delegation of a bounded analytical task between named agents with explicit tools and permissions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The documentation does not support configuring one agent to delegate bounded analytical tasks to another named agent with explicit tools and permissions.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Every MCP page covers Alteryx as an MCP server, either the cloud Alteryx MCP Server or the local Alteryx One app MCP server, which outside AI clients connect to. No page documents attaching external tools or MCP servers to Ask Alteryx or Alteryx Agents.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documented MCP route exposes Alteryx capabilities to external AI clients. No searched page establishes attaching a customer-configured external MCP server or external tools to Ask Alteryx or an Alteryx Agent.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Alteryx documents providing an MCP server (Alteryx MCP Server) for outside clients to access Alteryx assets, but does not document its built-in assistant (Ask Alteryx or Alteryx Agents) connecting out to external tools or MCP servers configured by the customer.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Partly** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Troubleshoot workflow errors to help you identify and resolve issues."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx, the built-in assistant, troubleshoots and helps resolve errors in the workflow the user has open, and it can edit or delete tools on the canvas. That is the AI fixing one asset a user points it at, which the row scores as partly. No page documents the AI finding all content affected by a data or definition change, or flagging it to owners.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Ask Alteryx can troubleshoot and edit the workflow a user opens. The documented object is an analyst workflow; this does not establish finding affected BI reports, charts, or shared definitions after an upstream change and repairing them or flagging their owners. The other reading's workflow-repair claim does not settle the required BI-content object.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Troubleshoot workflow errors to help you identify and resolve issues."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx can troubleshoot errors and add, edit, or delete tools in a workflow the user currently has open on the canvas, scoring partly for fixing one asset pointed to by the user; tenant-wide automatic discovery and repair/flagging of affected BI content is not documented.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Partly** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Ask Alteryx can find and describe macros and analytic apps, but it can't build them."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx can describe existing analytic apps. Reading an app's layout or rendered output is not documented, and App Builder apps have no AI support.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Ask Alteryx can find and describe macros and analytic apps, but it can't build them."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx can find and describe existing analytic apps. This establishes limited app understanding, but the page does not document reading the app's layout or rendered output, or its full generated code.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- Ask Alteryx can find and describe macros and analytic apps, but it can't build them."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx can inspect, find, and describe existing analytic apps and macros in the workspace, but cannot build them.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: No** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: no
  - Quote: "Ask Alteryx can find and describe macros and analytic apps, but it can't build them."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: The vendor states explicitly that the built-in assistant cannot build analytic apps, and App Builder documents no AI authoring.
- **GPT-6.1 Sol**: no
  - Quote: "- Ask Alteryx can find and describe macros and analytic apps, but it can't build them."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: The current built-in assistant documentation explicitly excludes building analytic apps. AI-created Auto Insights reports satisfy the BI-content rows, but are not documented as generated applications; manual App Builder/Designer construction is not built-in AI app generation.
- **Gemini 3.8 Flash**: no
  - Quote: "- Ask Alteryx can find and describe macros and analytic apps, but it can't build them."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one.html (checked 2026-10-26)
  - Reasoning: The documentation explicitly states as a negative limitation that Ask Alteryx cannot build analytic apps.

### A_OR: Can an outside coding agent read a generated app?

**Result: Yes** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To get question information for a workflow or an analytic app, use the `GET {baseURL}/v3/workflows/{workflowId}/questions` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: A script or outside agent can read an analytic app's interface questions (names, types, descriptions, items) through the Server API. The full definition is available only as the whole YXZP package. Analytic apps are built in Designer rather than generated, and the dedicated endpoint exposes only the interface, so this is partly. App Builder apps in Alteryx One have no documented API.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To download a workflow package, use the `GET {baseURL}/v3/workflows/{workflowId}/package` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: The Server workflow API explicitly includes analytic apps and returns their YXZP definition package. An outside agent can retrieve the app workflow and interface definition, rather than only execute the app.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Get the questions for the given Alteryx Analytics App"
  - Source: https://help.alteryx.com/current/en/developer-help/apis/server-api-overview.html (checked 2026-10-26)
  - Reasoning: External agents can inspect analytic app questions, parameters, and interface requirements via Server API GET /v1/workflows/{appId}/questions.

### A_OW: Can an outside coding agent build a generated app?

**Result: Partly** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To upload a new workflow, use the `POST {baseURL}/v3/workflows` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: An outside agent can publish an analytic app to Server by uploading a complete YXZP package, with owner and execution permissions set in the same call. The page notes upload behavior 'applies uniformly to all workflow types (including workflows, apps, macros, etc.)'. Only whole-package upload is documented. No interface builds an app from outside, and Ask Alteryx 'can't build' analytic apps, so this is partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To upload a new workflow, use the `POST {baseURL}/v3/workflows` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: The Server API accepts packages for apps as well as workflows, with owner and access/execution controls. An outside agent can author the analytic-app definition and upload it as a persistent first-class Server app through this interface.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To upload a new workflow, use the `POST {baseURL}/v3/workflows` endpoint."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: External agents can upload packaged analytic app files (.yxzp) via Server API POST {baseURL}/v3/workflows, but cannot interactively construct analytic apps from scratch via API.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Not found** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Alteryx Agents have a preview window for asking test questions manually, and Ask Alteryx has thumbs-up and thumbs-down feedback. The privacy page says Alteryx itself evaluates prompts internally. No page gives customers a saved case set, a rubric or a judge for the assistant's answers.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Agent preview supports manually asking questions and reviewing responses. No saved evaluation cases, rubric, judge, or repeatable answer-evaluation run is documented in the searched material. Prompt-tool validation and outside-agent workflow validation do not evaluate the built-in assistant's answers.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No saved evaluation suite, benchmark question set with expected answers, rubric, or LLM judge is documented for testing the correctness of answers from Ask Alteryx or Alteryx Agents.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: Partly** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The LLM can be selected via the LLM Provider and Model."
  - Source: https://help.alteryx.com/aac/en/auto-insights/for-it-and-security/generative-ai-within-auto-insights.html (checked 2026-10-26)
  - Reasoning: Admins choose the LLM provider and model for the Auto Insights AI features, including the Custom Reports AI Assistant. No fixed version pin is documented. Alteryx Agents use Alteryx-managed models with no customer choice, and Ask Alteryx uses Gemini.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- The LLM can be selected via the LLM Provider and Model."
  - Source: https://help.alteryx.com/aac/en/auto-insights/for-it-and-security/generative-ai-within-auto-insights.html (checked 2026-10-26)
  - Reasoning: Auto Insights lets administrators select a provider/model, including a customer Azure connection. It does not establish pinning a fixed named model version until explicitly changed; Alteryx Agents use managed models.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "- The LLM can be selected via the LLM Provider and Model."
  - Source: https://help.alteryx.com/aac/en/auto-insights/for-it-and-security/generative-ai-within-auto-insights.html (checked 2026-10-26)
  - Reasoning: Workspace Admins can select the LLM Provider and Model for Auto Insights AI capabilities, but model pinning/selection is not available for Alteryx Agents (which strictly use Alteryx-managed models).

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The chat opens with its full history, and you can send a new message to continue."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-alteryx-one/manage-ask-alteryx-chats.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx keeps the chat history and saves the generated workflow, which holds the analytical logic. Message history is retained for 90 days. The model version, configuration and data snapshot are not documented as preserved.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The Assets panel lists the workflows that Ask Alteryx created, changed, or ran in a chat, plus the datasets those workflows use or produce."
  - Source: https://help.alteryx.com/aac/en/release-notes/ask-alteryx-release-notes.html (checked 2026-10-26)
  - Reasoning: Saved chats and their saved workflows/datasets preserve part of the prompt-to-analysis record. The documentation does not establish preservation of the model version, complete configuration, and input data snapshot required for full reproduction or audit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Ask Alteryx saves your chats."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx persists chats for repeatability, but does not expose user-facing temperature or random seed controls to enforce deterministic LLM outputs.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Not found** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Users can send follow-up requests to change a workflow, and chats are saved. The only feedback mechanism is thumbs up or down, which only rates an answer. No page says a correction changes later answers or states how far a correction reaches.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Ask Alteryx documents feedback buttons, and follow-up prompts can change the current workflow. No searched page documents a correction changing later assistant answers with a defined reach, or even an unspecified future reach. Editing agent instructions is not documented as learning from an answer correction.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While users can click thumbs up or thumbs down icons in Ask Alteryx chats to submit feedback, feedback ratings are explicitly excluded by rule, and no mechanism is documented where human corrections change the assistant's future answers across a defined reach.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Not found** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Alteryx One certifies assets with Data Labels, and agent pages describe 'trusted datasets' and 'trusted insights'. No page binds Ask Alteryx or Alteryx Agents to certified assets, or says a mismatch with certified content is prevented or flagged.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Custom Measures display in Explore Data Insights, Preset Reports, and Custom Reports, where you can curate the analysis further by adding filters and comparing across segments."
  - Source: https://help.alteryx.com/aac/en/auto-insights/manage-dataset/custom-measures.html (checked 2026-10-26)
  - Reasoning: Auto Insights, the built-in AI virtual analyst, uses dataset-level Custom Measures in its analytical reports and insights. This establishes reuse of shared metric definitions, the partial scope specified by the row. It does not establish binding answers to certified content or preventing or flagging definition mismatches.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Alteryx supports data labels and asset certification for packages and assets in SDLC, but documentation does not bind assistant answers to certified definitions or state that deviations or mismatches from certified content are prevented or flagged.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Not found** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Credits meter workflow runs. When credits run out, customers are told to contact their account team, and nothing is blocked. AI Tools record token usage in the audit log but have no cap. No limit on Ask Alteryx or Alteryx Agents usage is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The searches found AI access controls, usage records, and MCP Automation Credits, but no customer-configured cap that blocks the built-in AI's consumption when reached.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No budget limit, quota, or spend cap that actively blocks built-in AI assistant usage once reached is documented in Alteryx.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Not found** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The pages only say that Ask Alteryx 'can take a few minutes'. No page offers customers a measurement of the built-in AI's response time by agent, model or evaluation run.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Release notes discuss improved response time and AI-tool audit records include event times. Neither establishes customer measurement of built-in AI response latency on their workload by agent, model, or evaluation run.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The documentation does not provide customers with tools or metrics to measure built-in AI response times on their own workloads broken down by agent, model, or evaluation run.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Partly** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "An Account Admin can use the Audit Logs page in Alteryx One to review AI tool execution events for users and workspaces."
  - Source: https://help.alteryx.com/current/en/designer/tools/ai-tools.html (checked 2026-10-26)
  - Reasoning: Per-user and per-workspace AI usage, including model and token counts, is attributed for Designer AI Tools executions only. No per-user consumption view is documented for Ask Alteryx or Alteryx Agents.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "An Account Admin can use the Audit Logs page in Alteryx One to review AI tool execution events for users and workspaces."
  - Source: https://help.alteryx.com/current/en/designer/tools/ai-tools.html (checked 2026-10-26)
  - Reasoning: Designer AI Tools have execution events attributable to users and workspaces, with model and input/output token usage in expanded records. This establishes consumption attribution for that AI surface; no comparable consumption view for Ask Alteryx or Alteryx Agents was found.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "An Account Admin can use the Audit Logs page in Alteryx One to review AI tool execution events for users and workspaces."
  - Source: https://help.alteryx.com/current/en/designer/tools/ai-tools.html (checked 2026-10-26)
  - Reasoning: Account Admins can view AI tool execution events broken down by user and workspace, including model name and token usage, but this attribution is documented only for Designer AI Tools executions, not for Ask Alteryx or Alteryx Agents.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Not found** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The audit log's only AI event is 'Generated content with model [model-name]'. It records AI Tools executions (the Prompt and LLM Override tools users place in workflows), which are functions and not the assistant. No audit event records Ask Alteryx or Alteryx Agents prompts or the objects they touched.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The audit inventory distinguishes AI-tool content generation and Auto Insights report generation, and general workflow events carry asset IDs. It does not establish a built-in assistant audit record containing its prompt or executed query, the analytical objects it touched, and the asking user. AI-tool model/token events alone do not settle that assistant-action requirement.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The Alteryx audit trail logs general platform events and Designer AI Tools executions, but does not record built-in assistant (Ask Alteryx or Alteryx Agents) queries/prompts along with the analytical objects touched attributable to the asking user.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To limit user access to Ask Alteryx, create a custom role without the Ask Alteryx capability."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-designer/set-up-ask-alteryx.html (checked 2026-10-26)
  - Reasoning: Workspace Admins can switch Ask Alteryx off for particular users through custom roles. Agent Studio and AI Agents can likewise be disabled per role, and Data Awareness per workspace.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- To allow access to Agent Studio but not Alteryx Agents, Workspace Admins can assign users a custom role with Agent Studio enabled and `AI Agents` disabled. This allows users to manage external MCP connections and set up assets without access to Alteryx Agents."
  - Source: https://help.alteryx.com/aac/en/agent-studio.html (checked 2026-10-26)
  - Reasoning: A Workspace Admin can disable built-in Alteryx Agents for selected users through a custom role, independently of other Agent Studio access.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- To limit access to Agent Studio for individual users, Workspace Admins can assign users a custom role with the Agent Studio capability disabled."
  - Source: https://help.alteryx.com/aac/en/agent-studio.html (checked 2026-10-26)
  - Reasoning: Workspace Admins can control AI feature rollouts by assigning custom roles with the Agent Studio or AI Agents capabilities enabled or disabled for specific users.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Waiting for Approval: The promotion request is awaiting review by an authorized user in the destination workspace."
  - Source: https://help.alteryx.com/aac/en/platform/software-development-lifecycle--sdlc-/sdlc-key-concepts.html (checked 2026-10-26)
  - Reasoning: SDLC promotion holds a packaged workflow until an authorized user in the destination workspace approves it. This is a general publishing workflow that the documentation does not connect to Ask Alteryx changes.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- When you're ready, publish the changes together. Select Publish to apply all changes made by every editor up to that point."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/reports.html (checked 2026-10-26)
  - Reasoning: This is the general Custom Report draft/publish workflow on a page documenting AI-generated reports and AI edits. It does not require approval by a different named person or role before an AI change takes effect.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Promotion history provides a record of package promotion activity, including who approved a promotion, when the package was approved, and associated approval information."
  - Source: https://help.alteryx.com/aac/en/platform/software-development-lifecycle--sdlc-/manage-package-versions.html (checked 2026-10-26)
  - Reasoning: Alteryx provides formal SDLC package promotion workflows requiring approval by designated persons, but this is a general asset promotion mechanism not specifically connected to AI changes.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "These features connect to a large language model (LLM) – by default, this LLM is accessed via an Alteryx instance within Microsoft Azure Cognitive Services; however, you can instead use an LLM in your own Microsoft Azure Cognitive Services tenant."
  - Source: https://help.alteryx.com/aac/en/auto-insights/for-it-and-security/generative-ai-within-auto-insights.html (checked 2026-10-26)
  - Reasoning: Customers can run Auto Insights AI inference in their own Azure tenant. This covers only some AI features: Alteryx Agents state that customer-hosted models are not supported, and Ask Alteryx runs on Alteryx-configured Vertex AI.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "These features connect to a large language model (LLM) – by default, this LLM is accessed via an Alteryx instance within Microsoft Azure Cognitive Services; however, you can instead use an LLM in your own Microsoft Azure Cognitive Services tenant."
  - Source: https://help.alteryx.com/aac/en/auto-insights/for-it-and-security/generative-ai-within-auto-insights.html (checked 2026-10-26)
  - Reasoning: Customers can run Auto Insights inference through their own Azure tenant. The choice covers these Auto Insights AI features; it is not documented for Ask Alteryx or Alteryx Agents, so the product-wide row has limited scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "To use your own LLM to power AI capabilities in Auto Insights, you will need to first configure a new Connection in Alteryx One."
  - Source: https://help.alteryx.com/aac/en/auto-insights/for-it-and-security/generative-ai-within-auto-insights.html (checked 2026-10-26)
  - Reasoning: Auto Insights supports Bring Your Own Key/model via customer Microsoft Azure Cognitive Services OpenAI connections, but Ask Alteryx and Agent Studio rely strictly on vendor-managed models.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Ask Alteryx only returns assets you have permission to access."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx and Alteryx Agents respect asset- and dataset-level permissions. No row-level or column-level security is documented for what they return.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Ask Alteryx only returns assets you have permission to access."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: The built-in assistant enforces asset access. Neither this statement nor Agent dependency permissions establishes that both row-level and column-level rules apply to every returned answer under the requester identity.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Ask Alteryx only returns assets you have permission to access."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx and Agent Studio bind to the authenticated user's permissions, ensuring the AI cannot surface assets or data outside the user's authorized scope.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Yes**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Ask Alteryx uses Google Gemini models hosted on Google Cloud’s Vertex AI platform to generate."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: The same page covers all three parts. It names the receiving service (Gemini on Vertex AI). It lists what is sent: asset metadata, workflow XML, descriptions, column profiles, and sampled rows when Data Awareness is on. It states retention: message history is kept for 90 days.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The system performs all AI Assistant operations through secure API calls using Microsoft Azure Cognitive Services, encrypting data in transit and at rest."
  - Source: https://help.alteryx.com/aac/en/auto-insights/data-security/data-security-when-using-magic-documents-or-playbooks.html (checked 2026-10-26)
  - Reasoning: This page names the Auto Insights recipient service and says it receives only report content or selected information. Ask Alteryx separately names Google Gemini on Vertex AI and documents metadata/samples plus 90-day chat history, but retention across all recipient services is not established.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Alteryx retains message history for a period of 90 days."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: The documentation specifies the exact data flow for AI processing, data access limitations, encryption standards, and a 90-day retention period for message history.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "OpenAI on Microsoft Azure Cognitive Services is available throughout multiple regions."
  - Source: https://help.alteryx.com/aac/en/auto-insights/data-security/data-security-when-using-magic-documents-or-playbooks.html (checked 2026-10-26)
  - Reasoning: A table on this page maps each Alteryx One region to Azure processing regions, but only for Auto Insights generative AI. No processing or storage regions are documented for Ask Alteryx or Alteryx Agents.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "OpenAI on Microsoft Azure Cognitive Services is available throughout multiple regions."
  - Source: https://help.alteryx.com/aac/en/auto-insights/data-security/data-security-when-using-magic-documents-or-playbooks.html (checked 2026-10-26)
  - Reasoning: The Data Residency section maps Auto Insights AU to Australia East, EU to France Central/UK South/Switzerland North, and US to US East/US East 2. It does not establish processing and storage regions for all built-in AI features, including Ask Alteryx.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "OpenAI on Microsoft Azure Cognitive Services is available throughout multiple regions."
  - Source: https://help.alteryx.com/aac/en/auto-insights/data-security/data-security-when-using-magic-documents-or-playbooks.html (checked 2026-10-26)
  - Reasoning: Auto Insights documents regional mappings for Azure Cognitive Services across AU, EU, and US environments, but customer selection or pinning of AI processing regions is partial.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Ask Alteryx doesn't train, retrain, or fine-tune AI models with your workflows or data."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: This is a default, unconditional statement that customer data is not used for training. The Custom Reports page likewise says no information is used to train any models.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Ask Alteryx doesn't train, retrain, or fine-tune AI models with your workflows or data."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: This is an unconditional no-training statement for the built-in assistant, without an opt-out step. The Custom Reports documentation also states that no information is used to train any models.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Ask Alteryx doesn't train, retrain, or fine-tune AI models with your workflows or data."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/data-privacy-and-retention.html (checked 2026-10-26)
  - Reasoning: The documentation explicitly states that Ask Alteryx does not train, retrain, or fine-tune AI models on customer workflows or data.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To limit how Ask Alteryx can sample data for all users on a workspace, disable Data Awareness from the Workspace Settings:"
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-designer/set-up-ask-alteryx.html (checked 2026-10-26)
  - Reasoning: A Workspace Admin can stop the assistant reading row data for every user in a workspace, leaving it metadata only. This is enforced by the product and is separate from users' data permissions.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Select Choose Datasets to give your agent access to 1 or more datasets."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: The author can scope each built-in agent to selected datasets. This is the expressly limited per-agent author scope, not an administrator-enforced workspace/tenant data allowlist separate from ordinary user access. Workspace Data Awareness controls also limit sampling but do not define such a dataset allowlist.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To limit how Ask Alteryx can sample data for all users on a workspace, disable Data Awareness from the Workspace Settings:"
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-designer/set-up-ask-alteryx.html (checked 2026-10-26)
  - Reasoning: Workspace Admins can restrict AI data access and sampling across all workspace users by disabling the Data Awareness setting.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "`readOnly`: Exposes only toolsets that do not update data. Supported options are `true` and `false`."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/connect-an-ai-app-to-the-alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: An outside agent's MCP connection can be restricted to read-only tools and to named toolsets, which is narrower than the user's own access. Service principals with custom roles also exist but are in Public Preview.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- `readOnly`: Exposes only toolsets that do not update data. Supported options are `true` and `false`."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/connect-an-ai-app-to-the-alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: The documented MCP connection can restrict an outside agent to read-only toolsets, narrower than the human user full set of capabilities; toolsets can also be explicitly selected in the connection URL.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can add query parameters to the MCP Server URL to limit which toolsets are available through a connection."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/connect-an-ai-app-to-the-alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: Admins and users can restrict external AI capabilities by adding query parameters to the MCP Server URL to expose only designated toolsets or force read-only mode.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Calculates trend behavior for selected measures. Returns a source link back to the underlying data, but the link doesn't include forecast-verification detail."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: MCP Insights tools return a link from an answer back to its underlying source, and the Designer toolset can read workflows. No lineage interface for agents is documented. Alteryx's OpenLineage export sends Server lineage to external catalogs, not to agents.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Calculates trend behavior for selected measures. Returns a source link back to the underlying data, but the link doesn't include forecast-verification detail."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: The calculate_trend tool exposes a source link to an outside MCP agent. This meets only the explicitly partial source-link case; no outside-agent traversal of upstream transformations through a lineage interface was established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Alteryx Agents can provide traceability through links back to the underlying data queries or datasets when that information is available in the response."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: Alteryx Agents provide traceability links back to underlying queries or datasets when available, though some responses lack traceability links.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Yes (preview)** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Outside agents reach Alteryx through the MCP Server using OAuth 'on behalf of the end user'. No audit event is documented for MCP actions. Service-principal actions are tagged 'agent_type = SERVICE_PRINCIPAL', but service principals (Public Preview) are documented only for running workflows with AI Tools on Server, not as an outside-agent identity. The Sessions page identifies MCP client connections but logs no actions or objects. That leaves only a general activity log, which is insufficient.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Actions performed by service principals appear in the Audit Log with: `agent_type = SERVICE_PRINCIPAL`"
  - Source: https://help.alteryx.com/aac/en/platform/admin/admin-reference/admin-console/service-principals.html (checked 2026-10-26)
  - Reasoning: Service principals provide non-human API identities and their actions are explicitly marked in audit records. The audit-events page documents affected workflow assetId and workflowName fields. This establishes identity-and-object auditing for outside automation using that service-principal workflow route, currently limited to workflows with AI Tools on Server. The service-principal feature is Public Preview.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Actions performed by service principals appear in the Audit Log with:"
  - Source: https://help.alteryx.com/aac/en/platform/admin/admin-reference/admin-console/service-principals.html (checked 2026-10-26)
  - Reasoning: Service principals acting as non-human automated agents to execute AI workflows log their actions in the Audit Log with agent_type = SERVICE_PRINCIPAL.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Waiting for Approval: The promotion request is awaiting review by an authorized user in the destination workspace."
  - Source: https://help.alteryx.com/aac/en/platform/software-development-lifecycle--sdlc-/sdlc-key-concepts.html (checked 2026-10-26)
  - Reasoning: SDLC promotion requires approval by an authorized user in the destination workspace. It is a general workflow that the documentation does not connect to changes made by outside agents through MCP.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- makePublished (boolean): Required. The default is set to "true". The makePublished parameter is a way to control whether the new version of a workflow that you push to Server should be the published version or not. You can set the value to "false" when you push the workflow to Server, and then only you will have the ability to run it."
  - Source: https://help.alteryx.com/current/en/server/api-overview/alteryx-server-api-v3/server-api-v3-objects/workflow-endpoints.html (checked 2026-10-26)
  - Reasoning: An outside agent using the Server API can upload a new workflow/analytic-app version without publishing it. This is a draft/publishing control, not a required approval by someone other than the requester.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Promotion history provides a record of package promotion activity, including who approved a promotion, when the package was approved, and associated approval information."
  - Source: https://help.alteryx.com/aac/en/platform/software-development-lifecycle--sdlc-/manage-package-versions.html (checked 2026-10-26)
  - Reasoning: Alteryx SDLC Manager provides formal package promotion workflows requiring approval by designated roles, but this is a general publishing workflow not exclusively tied to AI.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Partly** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Use the Compare Workflows feature to compare 2 workflows and quickly identify the differences via visual indicators."
  - Source: https://help.alteryx.com/current/en/designer/workflows/compare-workflows.html (checked 2026-10-26)
  - Reasoning: Outside agents change Alteryx workflows through the MCP Designer toolset (edit_tool, remove_tool) and through Alteryx Skills. Designer's Compare Workflows shows a reviewer the before and after differences in tools, configurations and connections. This is a generic workflow diff and is not documented specifically for changes made by an outside agent, so it is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The Compare Workflows feature identifies differences in tool IDs, tool types, tool configurations, and connections (to name a few)."
  - Source: https://help.alteryx.com/current/en/designer/workflows/compare-workflows.html (checked 2026-10-26)
  - Reasoning: The native visual comparison shows generic before/after workflow-configuration differences; analytic apps consist of workflows with interface tools. It is not documented as an outside-agent review workflow, so this earns only generic-diff credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Use the Compare Workflows feature to compare 2 workflows and quickly identify the differences via visual indicators."
  - Source: https://help.alteryx.com/current/en/designer/workflows/compare-workflows.html (checked 2026-10-26)
  - Reasoning: Alteryx Designer provides Compare Workflows to visually inspect differences between workflow versions, though not presented directly as an AI change diff in chat.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Here, you can restore older versions of the asset and create a new asset from previous versions."
  - Source: https://help.alteryx.com/aac/en/platform/library-for-assets/manage-assets.html (checked 2026-10-26)
  - Reasoning: Library assets, including the workflows an MCP agent can edit, can be restored to earlier versions. The documentation does not show that this covers changes made through the MCP Designer toolset.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can publish a specific workflow version in Server."
  - Source: https://help.alteryx.com/current/en/server/use-alteryx-server-ui/workflows--server-user-interface/publish-a-workflow-version.html (checked 2026-10-26)
  - Reasoning: Server preserves versions and permits publishing an earlier one. The workflow API includes analytic apps and their versions, so a package/version uploaded by an outside agent can be reverted by republishing the earlier version.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Restore a previous workflow version or open a previous version as a new workflow."
  - Source: https://help.alteryx.com/aac/en/designer-experience/workflows/build-workflows.html (checked 2026-10-26)
  - Reasoning: Users can restore a previous workflow version from Version History in Designer Cloud to revert changes made to workflows.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Alteryx MCP Server connects your datasets, workflows, and analytic apps capabilities to supported AI apps and MCP clients."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: Alteryx hosts the remote MCP server, with regional URLs and OAuth 2.0 with PKCE. It gives outside agents access to datasets, insights and workflows with no customer-built middleware. No preview label is given.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The MCP Server uses OAuth 2.0 with PKCE for authentication."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: Alteryx provides its own hosted regional MCP endpoints for customer datasets, workflows, and analytic apps, with documented OAuth authentication. The cited page and connection guide do not require customer middleware or label this hosted service preview.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Alteryx MCP Server connects your datasets, workflows, and analytic apps capabilities to supported AI apps and MCP clients."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: Alteryx provides an official first-party Model Context Protocol (MCP) server exposing datasets, workflows, and analytic apps capabilities to external AI clients.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Searches cataloged Alteryx One asset types, such as workflows, datasets, macros, connections, plans, schedules, and folders. Supports free-text queries, entity-type restrictions, field filters, sorting, and pagination."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: The MCP search_alteryx_assets tool lets an outside agent enumerate assets with filters and pagination, and list_datasets lists available datasets.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Lists datasets available to the authenticated user through the Insights toolset."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: The list_datasets MCP tool lets an outside agent enumerate accessible datasets. The Assets toolset also searches cataloged workflows, datasets, macros, connections, plans, schedules, and folders with pagination.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Lists datasets available to the authenticated user through the Insights toolset."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: External AI clients connected to the Alteryx MCP Server can discover available datasets through the list_datasets tool in the Insights toolset.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The MCP Server uses OAuth 2.0 with PKCE for authentication."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: A named credential flow is documented: OAuth 2.0 with PKCE, with the agent acting on behalf of the user. Personal access tokens and OAuth API tokens are also documented for the REST APIs.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The MCP Server uses OAuth 2.0 with PKCE for authentication."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: The outside agent authenticates on behalf of an Alteryx One user through a named, documented OAuth 2.0 PKCE route.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The MCP Server uses OAuth 2.0 with PKCE for authentication."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: The Alteryx MCP Server uses OAuth 2.0 with PKCE for authentication, securely acting on behalf of the authenticated user.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Alteryx Skills let supported AI coding assistants work with local Designer workflows."
  - Source: https://help.alteryx.com/current/en/developer-help/get-started-with-alteryx-skills.html (checked 2026-10-26)
  - Reasoning: Alteryx publishes a skills plugin (alteryx-designer, alteryx-asset-discovery, alteryx-insights) in the alteryx/skills GitHub repo and the Claude plugin directory, for Claude Code, Codex and others. The page mentions a guided preview only as a support contact and does not label the skills as preview.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Alteryx Skills let supported AI coding assistants work with local Designer workflows."
  - Source: https://help.alteryx.com/current/en/developer-help/get-started-with-alteryx-skills.html (checked 2026-10-26)
  - Reasoning: Alteryx publishes a supported agent plugin and the alteryx-designer, alteryx-asset-discovery, and alteryx-insights skills, with installation instructions for coding assistants. This is more than MCP server documentation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Alteryx Skills let supported AI coding assistants work with local Designer workflows."
  - Source: https://help.alteryx.com/current/en/developer-help/get-started-with-alteryx-skills.html (checked 2026-10-26)
  - Reasoning: Alteryx publishes official agent skills (alteryx-designer, alteryx-asset-discovery, alteryx-insights) for external AI assistants like Antigravity, Claude Code, and Codex.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Partly** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can run workflows via the command line with `AlteryxEngineCmd.exe`, located in the Alteryx program files root directory."
  - Source: https://help.alteryx.com/current/en/designer/workflows/run-workflows-via-command-line.html (checked 2026-10-26)
  - Reasoning: Alteryx provides a general command-line tool for running workflows, but its page gives no guidance for AI or coding agents. The skills are installed with the agents' own CLIs, not an Alteryx agent CLI.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can run workflows via the command line with `AlteryxEngineCmd.exe`, located in the Alteryx program files root directory."
  - Source: https://help.alteryx.com/current/en/designer/workflows/run-workflows-via-command-line.html (checked 2026-10-26)
  - Reasoning: The vendor documents a noninteractive workflow/analytic-app command-line engine requiring an Engine API license. Skills document agent use of Designer Engine, but this CLI documentation does not establish a complete agent-specific CLI authentication flow, so credit is limited to the general CLI.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Plugin CLI is a command-line interface based on Typer, a tool that helps you build and manage custom plugins for Alteryx Designer."
  - Source: https://help.alteryx.com/current/en/developer-help/platform-sdk/ayx-plugin-cli/ayx-plugin-cli-overview.html (checked 2026-10-26)
  - Reasoning: Alteryx provides the AYX Plugin CLI to build, test, and manage custom plugins and tools from the command line, though it does not provide a CLI for running ad-hoc data analyses.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Yes** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To limit access to the Alteryx MCP Server for individual users, a Workspace Admin can assign users a custom role with the Alteryx MCP Server capability disabled."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: A dedicated Alteryx MCP Server capability lets admins block outside-agent access per user through roles, separately from data permissions. An account-wide switch also exists.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To limit access to the Alteryx MCP Server for individual users, a Workspace Admin can assign users a custom role with the Alteryx MCP Server capability disabled."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: This is an explicit administrator control for selected users access to the outside-agent MCP interface, separate from their ordinary asset permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- To limit access to the Alteryx MCP Server for individual users, a Workspace Admin can assign users a custom role with the Alteryx MCP Server capability disabled."
  - Source: https://help.alteryx.com/aac/en/agent-studio.html (checked 2026-10-26)
  - Reasoning: Workspace Admins can manage rollout of external agent access by assigning custom roles with the Alteryx MCP Server capability enabled or disabled.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Workflow runs through the MCP Server consume Automation Credits under the user's existing rules. That is metering, and running out does not block anything. The MCP registration limits (package sizes and 1000 JSON output rows) cap per-call payload size, not consumption. No rate limit, quota or spend cap on agent usage is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "API rate limiting sets the maximum number of requests that are accepted by an endpoint within a specified period of time."
  - Source: https://help.alteryx.com/dataprep/en/release-notes/changes-to-system-behavior/changes-to-the-apis.html (checked 2026-10-26)
  - Reasoning: The public Dataprep API imposes endpoint quotas, including requests to start jobs/plans, and returns 429 when the queue fills. This is the allowed general-API partial case; no separate MCP/agent consumption cap was documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Beginning October 1, 2026, qualifying workflow runs triggered through the Alteryx MCP Server will consume Automation Credits."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server.html (checked 2026-10-26)
  - Reasoning: Workflow runs triggered through the Alteryx MCP Server consume Automation Credits subject to account rules, metering usage without granular agent spending caps.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Custom instructions strongly influence how the agent interprets user questions and frames responses."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: This is the built-in AI. Alteryx Agents take custom instructions covering dataset context, domain-specific terms and key measures, and the agent uses them when interpreting questions. Ask Alteryx also reads dataset and column descriptions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Custom instructions strongly influence how the agent interprets user questions and frames responses."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: The built-in Alteryx Agent reads saved custom instructions covering dataset context, domain-specific terms, key measures, and analysis methods. This supplies business meaning beyond the schema.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Custom instructions let you guide agent behavior."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: Agent Studio allows creators to inject business context through custom instructions covering objectives, role, tone, domain-specific terms, and analysis methods.

### C5: Can the business context you give the AI live in version control?

**Result: Not found**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Alteryx Agent custom instructions are entered in the Agent Studio UI. No page documents exporting them or storing AI business context in files under version control. The Alteryx Skills GitHub repository holds vendor-published skills, not customer context.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Agents have custom business instructions, but no searched page places those instructions in version-controlled files or documents exporting, reviewing, and rolling back their context. Workflow-file editing and versioned skills do not establish version control for business context the AI reads.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Custom instructions and business context for Alteryx Agents are authored and stored through the Agent Studio user interface, not in version-controlled repository files that can be diffed, reviewed, and rolled back.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Add custom instructions to guide the agent's behavior and analysis approach."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: This is the built-in AI. Each Alteryx Agent carries its own custom instructions and datasets and is shared with specific users, so different teams get different context rather than one tenant-wide set.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Add custom instructions to guide the agent's behavior and analysis approach."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: Instructions belong to an individual saved Alteryx Agent, with separately selected datasets and sharing permissions. Teams can therefore reuse different agents carrying different business context instead of one global context.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Add custom instructions to guide the agent's behavior and analysis approach."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: Custom instructions in Agent Studio are configured per individual agent and scoped specifically to the datasets assigned to that agent.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Preview the agent before you share it."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: This is the built-in AI. Agent Studio has a named preview step for testing an agent's instructions and datasets before it is shared with users.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Preview the agent before you share it."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: The named Preview the Agent step asks authors to test representative questions and review the expected datasets and analysis approach before sharing the agent and its custom instructions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Preview the agent before you share it."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: Agent Studio includes an interactive preview window where authors can test custom instructions against sample questions before sharing the agent.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Not found**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Ask Alteryx shows the help pages behind documentation answers, its Called tools, and its Execution Plan. Alteryx Agents link to source data. No page says an answer surfaces the custom instruction or description that shaped it.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Responses can show documentation sources, data-query or dataset links, and tool actions. No searched page says an answer exposes the specific custom instruction, business rule, description, or glossary entry that shaped it.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Although custom instructions influence agent answers, agent responses do not state or cite the specific instruction, business definition, or rule that shaped them.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Not found**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Ask Alteryx reads 'dataset and column descriptions' that are added in Alteryx One or AI-generated. No page says those descriptions are ingested from warehouse comments, dbt docs or a modelling tool. The only dbt page covers a Trifacta profiling utility, not AI context.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Ask Alteryx reads dataset and column descriptions already in Alteryx. The searched pages do not establish that those descriptions are inherited from warehouse comments or dbt documentation. The dbt integration profiles dbt-produced datasets and creates dataset metadata, without documenting imported business descriptions being supplied to the AI.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The documentation does not describe Ask Alteryx or Alteryx Agents automatically ingesting column descriptions, warehouse comments, or dbt documentation from the warehouse as context for generating answers.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Yes**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Select Choose Datasets to give your agent access to 1 or more datasets."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: This is the built-in AI. An agent's author picks which datasets it may use, which keeps other datasets out of that agent's reach. There is no AI-specific setting to mark a table, field or answer as deprecated or off-limits, and Data Labels' Deprecated label is not tied to the AI.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Columns that are disabled from Relevant Segments/Breakdowns will not be available for use as a dimension for comparing metrics, in addition to not being shown in the 'What Caused This?' analysis for that measure"
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/what-caused-this.html (checked 2026-10-26)
  - Reasoning: This is a product-enforced field exclusion from Auto Insights automated AI root-cause analysis for the selected measure. It applies to that AI surface; it is not a claim that a deprecated label restricts every assistant.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "- Go to the AI Suggested Use Cases with your own data section, and select Enabled from the dropdown."
  - Source: https://help.alteryx.com/aac/en/auto-insights/find-insights/playbooks-with-your-data.html (checked 2026-10-26)
  - Reasoning: Administrators can selectively enable or disable AI suggested use cases for specific datasets to exclude sensitive topics or data from AI processing.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Not found**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The pages say 'Creators and editors can edit and share agents', which is an edit permission and not an owner or approval workflow for business context. No review or approval step for custom instructions is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Agent creators and editors can configure instructions and share agents. These are edit permissions; the searched documentation does not designate a business-context owner or describe review or approval of context changes. General package-promotion and plan-approval search results do not connect approval to AI business context.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Custom instructions for Alteryx Agents are managed by anyone with creator or editor access to the agent; no formal context owner role or review/approval workflow for context updates is documented.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Not found** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Ask Alteryx reads workflow XML (Alteryx's own logic), dataset metadata, and connection metadata such as 'the data objects available through them' (names). In Live Query it samples rows. No page says it reads view definitions, dbt models or semantic views in the warehouse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Ask Alteryx can inspect workflow XML, sample warehouse data in Live Query, and work with SQL Transform tools. The searches did not establish it reading or using warehouse-resident view definitions, dbt model logic, or warehouse semantic definitions. Data access and schema metadata do not establish reading that logic.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Ask Alteryx and Alteryx Agents connect to database tables and views to execute data processing tools, but do not read warehouse-level logic such as dbt models or warehouse semantic view definitions.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Partly** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Run your workflow. Run your workflow and publish the results to the output source configured in the Output tool."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: In Live Query, which processes against the customer's BigQuery, Databricks or Snowflake warehouse, Ask Alteryx adds and configures tools and runs the workflow. The run publishes results to the configured output, which for Live Query is a warehouse table (create, append, merge and so on). The transformation logic stays in Alteryx as a workflow rather than becoming a view or model in the warehouse, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Run your workflow. Run your workflow and publish the results to the output source configured in the Output tool."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: Ask Alteryx configures and runs Live Query transformations against BigQuery, Databricks, or Snowflake and can publish results through its Output tool. The Output Data documentation includes creating or updating warehouse tables. This establishes warehouse materialization of an assistant-authored workflow, while its maintained transformation definition remains an Alteryx workflow rather than a warehouse-resident view or model.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Automatically add and configure tools in your workflow."
  - Source: https://help.alteryx.com/aac/en/ask-alteryx/ask-alteryx-in-live-query.html (checked 2026-10-26)
  - Reasoning: In Live Query, which executes in-warehouse against BigQuery, Databricks, or Snowflake, Ask Alteryx automatically adds and configures tools and runs workflows that publish results to warehouse tables, scoring partly as the logic is authored in workflow tools that write to warehouse tables rather than creating views or models in the warehouse.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Outside agents can preview a dataset with its schema (preview_dataset), list connections, and read Alteryx workflow XML. Schema names and types are not logic. No MCP tool or API returns warehouse view, dbt or semantic-view definitions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The MCP interface exposes dataset schemas, insights, and Alteryx workflow inspection. Skills inspect local workflow XML. No searched page establishes an outside agent retrieving warehouse view definitions, dbt models, or semantic-view logic through Alteryx.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Outside agents can retrieve dataset schemas and workflow XML via Alteryx MCP Server and APIs, but cannot read warehouse-level logic such as view definitions, dbt models, or semantic views.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Not found** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The MCP Designer toolset builds cloud workflows, but 'Input and output configurations are limited to Alteryx One datasets'. Alteryx Skills build local Designer workflows. No page documents an outside agent authoring a view, model or transform in the warehouse through Alteryx.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Outside agents can create and edit Designer workflows, and run existing Live Query workflows. The searched interface documentation does not connect outside-agent authoring to creation of warehouse-resident transformation logic, views, or models. Running an already configured warehouse workflow does not establish authoring its warehouse logic.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The documentation does not provide an interface for outside agents to author warehouse-level logic (such as SQL views, warehouse tables, or dbt models) into the underlying data warehouse through Alteryx.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Not found**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Auto Insights measures and Custom Measures are defined inside Alteryx One. No page documents importing metric definitions from dbt, Cube or Snowflake semantic views. The only dbt page covers a profiling utility.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The dbt integration imports access to dbt-produced datasets for profiling. It does not document consuming existing metric definitions from dbt, Cube, or warehouse semantic views. Custom Measures instead defines ratio metrics within Alteryx.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Alteryx does not import or consume metric definitions maintained outside the product in dbt Semantic Layer, Cube, or Snowflake semantic views.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Auto Insights datasets have configured Measures, Segments and Custom Measures, and the MCP Insights toolset (an outside-agent route) lists them. But no page says the built-in Alteryx Agents or Ask Alteryx answer from those configured measures. The agent page instead tells creators to describe 'Key Measures' in custom instructions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Custom Measures display in Explore Data Insights, Preset Reports, and Custom Reports, where you can curate the analysis further by adding filters and comparing across segments."
  - Source: https://help.alteryx.com/aac/en/auto-insights/manage-dataset/custom-measures.html (checked 2026-10-26)
  - Reasoning: Auto Insights is a built-in AI-powered virtual analyst. Its analysis consumes shared dataset-level Custom Measures, including ratios constructed from configured Sum, Average, and Count measures. The quoted report-and-insight usage establishes that the built-in AI uses maintained definitions rather than inferring each calculation from raw column names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Selecting a dataset allows the agent to answer questions and generate insights from that dataset."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-agents.html (checked 2026-10-26)
  - Reasoning: Alteryx Agents read defined datasets along with their configured measures, segments, and calculation rules in Alteryx One.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Custom Measures can be created 'Only Dataset Owners or Editors' through the UI. No page says Ask Alteryx or an Alteryx Agent creates or edits measures or segments. AI Metadata Enrichment writes asset descriptions for search, but it is not the assistant and does not touch the measure layer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Dataset Owners or Editors can create Custom Measures through settings, while Ask Alteryx edits workflow tools. No searched page documents the built-in AI creating or editing the shared measure definitions, dimensions, or joins used by Auto Insights. Local workflow formulas do not establish shared-layer authoring.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Shared definitions such as Custom Measures in Auto Insights must be created and modified manually by dataset owners or editors; the built-in assistant is not documented creating or editing metrics, dimensions, or joins in this shared layer.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Partly** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Lists measures for a dataset."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: The MCP list_measures and list_segments tools let an outside agent see a dataset's defined measures and segments. Business definitions or descriptions of those fields are not documented as returned.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Lists measures for a dataset."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: The MCP Insights toolset exposes list_measures and list_segments to outside agents, so they can discover defined measures and segments. The documented return descriptions do not establish field business definitions, descriptions, or calculation formulas; the supported read scope is therefore limited.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Lists measures for a dataset."
  - Source: https://help.alteryx.com/aac/en/agent-studio/alteryx-mcp-server/alteryx-mcp-server-toolsets.html (checked 2026-10-26)
  - Reasoning: The MCP Server Insights toolset exposes the get_measures tool to enable external AI agents to read and inspect measures defined on a dataset.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Not found** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The MCP Insights toolset only lists measures and segments, and the Datasets toolset creates empty datasets. No MCP tool, skill or API creates or edits Auto Insights measures or Custom Measures.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The MCP inventory lists shared measures and segments but does not document creating or updating them. Outside-agent workflow/XML editing does not establish editing Auto Insights' shared metric definitions or a semantic layer.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Neither the Alteryx MCP Server nor the REST APIs offer tools or endpoints for an outside coding agent to create, edit, or delete shared Custom Measures in the shared definition layer.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Partly**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Use Write Data In-DB to create or update a table directly in the database."
  - Source: https://help.alteryx.com/current/en/designer/tools/in-database/write-data-in-db-tool.html (checked 2026-10-26)
  - Reasoning: Logic built in an Alteryx In-Database workflow, or a Live Query workflow, runs in the database and writes its result to a table there. The output lives in the warehouse, but the logic stays in Alteryx as a workflow rather than becoming a view or model in the warehouse, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Use Write Data In-DB to create or update a table directly in the database."
  - Source: https://help.alteryx.com/current/en/designer/tools/in-database/write-data-in-db-tool.html (checked 2026-10-26)
  - Reasoning: In-Database workflows execute analytical transformations in the database and materialize results as warehouse tables. Live Query similarly writes computed results to warehouse tables. The output lives in the warehouse, but the maintained definition remains in Alteryx rather than being exported as a warehouse view, model, or semantic definition.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Use the Write Data In-DB tool to create or update a table in the database, or use the Data Stream Out tool to stream the In-DB results to a workflow for standard processing."
  - Source: https://help.alteryx.com/current/en/designer/tools/in-database-overview.html (checked 2026-10-26)
  - Reasoning: In-Database workflows execute queries inside the database and can create or update a database table using the Write Data In-DB tool; however, the logic remains within the Alteryx workflow rather than being authored as a view or model in the warehouse.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "In addition to building a macro from scratch, you have the option to convert an existing workflow (or a portion of the workflow) to a macro."
  - Source: https://help.alteryx.com/current/en/designer/apps-and-macros/macros.html (checked 2026-10-26)
  - Reasoning: Convert to Macro turns tools a user selects in a workflow built for one analysis directly into a macro file, with no developer re-expressing the logic. The macro is a reusable shared unit, and the same page says 'When changes are saved to a macro, it is automatically updated', so it is maintained wherever it is reused. That is a direct path from one-off logic to a maintained shared definition.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "In addition to building a macro from scratch, you have the option to convert an existing workflow (or a portion of the workflow) to a macro."
  - Source: https://help.alteryx.com/current/en/designer/apps-and-macros/macros.html (checked 2026-10-26)
  - Reasoning: Convert to Macro directly packages selected existing workflow tools, preserving their analytical logic without a developer rewriting it. The same page documents saving and sharing the macro through Server or a repository, reusing it in other workflows, and automatically updating it when changes are saved. This provides a maintained shared unit for a calculation originally built in one analysis.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "In addition to building a macro from scratch, you have the option to convert an existing workflow (or a portion of the workflow) to a macro."
  - Source: https://help.alteryx.com/current/en/designer/apps-and-macros/macros.html (checked 2026-10-26)
  - Reasoning: Convert to Macro allows users to select tools in an existing workflow and convert them directly into a macro (.yxmc), creating a reusable shared analytic asset without requiring a developer to re-express the logic in a modeling language.

