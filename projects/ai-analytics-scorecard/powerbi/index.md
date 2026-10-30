# Power BI: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/powerbi/

AI Feature Score **65**, #9 of 15 (BI and analytics tool). Built-in AI 55, external AI 72, other 74. Analysis 56, Building and maintaining assets 70, Context and connections 78, Reliability and controls 56. By model: Claude Opus 5.5 65, GPT-6.1 Sol 65, Gemini 3.8 Flash 67.

## Score breakdown

Four areas, 25 points each. Shown for Claude Opus 5.5, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 13.9 of 25
- Building and maintaining assets: 17.6 of 25
- Context and connections: 19.5 of 25
- Reliability and controls: 14.1 of 25

**Strengths**

- You can see what it changed
- It names the fields it used
- A correction sticks

**Not found in the docs**

- It can act outside the product
- A statement that your data is not used for training
- Investigate why a number changed

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Copilot for Power BI lets you ask natural-language questions about your data and summarize report content."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Users ask the built-in Copilot plain-English questions (for example 'What were the top 5 selling products in North America last month?'). Copilot builds the query against the semantic model and generates ad hoc DAX when needed. The report Copilot pane is GA, per the overview.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Copilot for Power BI lets you ask natural-language questions about your data and summarize report content."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The built-in Copilot answers English questions using the semantic model and can generate new DAX calculations, so an existing dashboard answer or user-written SQL is unnecessary.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Q&A features in Power BI let you explore your data in your own words by using natural language."
  - Source: https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-intro (checked 2026-10-26)
  - Reasoning: Power BI provides natural language exploration enabling users to ask plain English questions and receive answers and visuals directly from their data.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Copilot also responds to follow-up requests based on what you already asked in your current session."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Copilot keeps session context, so follow-up refinements apply to earlier questions. The semantic-models page adds that the session conversation is used as grounding.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Copilot also responds to follow-up requests based on what you already asked in your current session."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The built-in assistant retains conversational context for follow-up analytical requests within the current session.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Copilot also responds to follow-up requests based on what you already asked in your current session."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Copilot maintains conversational state across questions, allowing users to ask follow-up questions to refine earlier answers.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Provide the underlying DAX query and data table used to generate a response."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: With Fabric IQ in the report Copilot pane, the answer shows its reasoning steps, the generated DAX query and the query results. The query and analytical steps are therefore exposed with the answer. No preview label appears on the page or on the GA report pane.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Expand each reasoning step to understand how Copilot arrived at its answer, including the sequence of analysis steps, the generated DAX query, and the query results used to produce the response."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: In the report viewing experience with Fabric IQ enabled, the answer exposes the analytical steps, executable DAX, and intermediate results.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Expand each reasoning step to understand how Copilot arrived at its answer, including the sequence of analysis steps, the generated DAX query, and the query results used to produce the response."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Copilot exposes its reasoning steps, including the step sequence, the generated DAX query, and underlying query results.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Yes** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If Fabric IQ isn't enabled, expand How Copilot arrived at this to review how Copilot interpreted your question and verify the fields, measures, and filters it selected from the semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The 'How Copilot arrived at this' section lists the fields, measures and filters taken from the semantic model, with 'Data used' links. That is a field-level citation attached to the answer.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If Fabric IQ isn't enabled, expand How Copilot arrived at this to review how Copilot interpreted your question and verify the fields, measures, and filters it selected from the semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The answer has a dedicated explanation listing selected fields and measures, independently of displaying the generated query.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If Fabric IQ isn't enabled, expand How Copilot arrived at this to review how Copilot interpreted your question and verify the fields, measures, and filters it selected from the semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Copilot exposes a 'How Copilot arrived at this' explanation detailing the exact fields, measures, and filters selected from the semantic model.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Yes** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "We can start by asking Copilot to review our data and suggest some visuals."
  - Source: https://learn.microsoft.com/en-us/power-bi/fundamentals/service-get-started (checked 2026-10-26)
  - Reasoning: This is an official Power BI tutorial. The user gives the Power BI service a Microsoft Excel file (Add data > Excel; the page notes Upload as an alternative to Link to file), and the service imports it as a semantic model. The tutorial then has the built-in Copilot review that data, suggest visuals and create report pages ('Create a Gross Sales report.'). So the product's own AI analyzes the contents of a spreadsheet the user supplied. The page has no preview label, so it is generally available.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "We can start by asking Copilot to review our data and suggest some visuals."
  - Source: https://learn.microsoft.com/en-us/power-bi/fundamentals/service-get-started (checked 2026-10-26)
  - Reasoning: This official tutorial imports a local Excel file as a semantic model, then has Copilot analyze that same data and generate a Gross Sales report. It demonstrates the complete spreadsheet-to-AI path.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Q&A can work on any uploaded Excel file that contains tables, ranges, or a Power Pivot model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/service-prepare-data-for-q-and-a (checked 2026-10-26)
  - Reasoning: Power BI's natural language assistant directly analyzes uploaded Excel spreadsheet files containing data tables or models.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Partly (preview)** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Create, update, and manage tables, columns, measures, and relationships by using natural language"
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/copilot-web-modeling (checked 2026-10-26)
  - Reasoning: Copilot in web modeling is the built-in assistant, and the page labels it preview. It creates and updates tables and columns in the semantic model from natural language. The results stay as model objects whose definitions can be inspected, and the page adds a restore checkpoint through semantic model version history. That reshapes data at the model layer only. No page documents the AI cleaning source data, for example in Power Query or dataflows, or leaving transformation steps behind. So only part of the row is covered.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Power Query transformations and manual data preparation are documented, as are Copilot edits to semantic-model objects. No settling evidence shows the built-in AI cleaning or reshaping source data and retaining inspectable transformation logic; creating model objects alone does not establish that operation.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Create, update, and manage tables, columns, measures, and relationships by using natural language"
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/copilot-web-modeling (checked 2026-10-26)
  - Reasoning: Copilot in web modeling (preview) creates and updates tables and columns in semantic models using natural language, leaving inspectable model objects and a restore checkpoint, but this reshapes semantic model definitions rather than performing inspectable data cleaning transformations on raw input data.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Not found** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page shows Copilot or Q&A joining or blending two distinct data sources in one analysis. Standalone Copilot can search across several items, but it answers from one attached item at a time. Composite models combine sources in the semantic model itself, not through the AI. No page shows Copilot blending an uploaded file with another source.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Standalone and app-scoped Copilot can find a report or semantic model across available content. The pages do not establish the AI joining or blending two distinct data sources in one analysis. Multiple tables within an existing semantic model do not establish that capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While standalone Copilot can search across multiple semantic models to find the right item to answer a question, no documentation shows the AI combining or joining two or more distinct data sources in a single analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Yes** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Smarter report creation: Copilot delivers more accurate and relevant visuals, automatically selecting the best way to represent your data."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-create-reports (checked 2026-10-26)
  - Reasoning: Copilot picks and creates the visual itself. The semantic-models page adds that for data questions 'Copilot chooses the visual and its formatting'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Smarter report creation: Copilot delivers more accurate and relevant visuals, automatically selecting the best way to represent your data. It also supports a wider range of visual types, helping you present insights in the format that best fits your needs."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-create-reports (checked 2026-10-26)
  - Reasoning: Copilot selects and creates suitable report visuals from the analytical request rather than requiring the user to pick the visual first.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Generate Fabric visuals to help you further analyze your data."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Copilot automatically selects and generates appropriate visual charts to answer user questions.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: No** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The summary highlights what stands out in the chart, such as trend shifts over time, differences across categories or regions, and key drivers of change, without requiring you to manually interpret every data point."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-pane-summarize-content (checked 2026-10-26)
  - Reasoning: Copilot summaries name trend shifts and key drivers of change, but no page documents a contribution-by-segment breakdown with checkable calculations. The ask-data page says Copilot 'can't currently answer questions that require ... finding key influencers'. Naming drivers without contributions is partly.
- **GPT-6.1 Sol**: no
  - Quote: "Copilot can't currently answer questions that require generating new insights, such as anomaly detection, forecasting, or finding key influencers."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The documented unsupported-question section explicitly excludes deeper change explanations and key-influencer insight generation. Ordinary summaries and manual insight visuals do not establish assistant-calculated factor contributions.
- **Gemini 3.8 Flash**: no
  - Quote: "Copilot can't currently answer questions that require generating new insights, such as anomaly detection, forecasting, or finding key influencers."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The documentation explicitly states in the unsupported question types section that Copilot cannot answer questions requiring anomaly detection or finding key influencers.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: No** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: no
  - Quote: "This question asks for forecasting, which isn't currently supported."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The Copilot documentation explicitly lists forecasting as an unsupported question type.
- **GPT-6.1 Sol**: no
  - Quote: "This question asks for forecasting, which isn't currently supported."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The assistant documentation explicitly says forecasting is unsupported. Classic Power BI forecasting visuals do not demonstrate a forecast produced by the assistant.
- **Gemini 3.8 Flash**: no
  - Quote: "This question asks for forecasting, which isn't currently supported."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The documentation explicitly states in the unsupported question types section that forecasting is not currently supported by Copilot.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Copilot page documents defining what-if scenarios with stated changed assumptions, or calculating and comparing them. Every 'scenario' match on Copilot pages refers to usage or embedding scenarios, not what-if analysis.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Power BI documents ordinary what-if parameters, but no settling page connects them to the built-in AI calculating scenarios with stated changed assumptions. Neither a single AI-calculated scenario nor the required comparison was established.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: What-if parameters in Power BI Desktop are manual DAX modeling constructs operated by human users via slicers, not an AI feature where the assistant calculates and compares multiple what-if scenarios with stated assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Partly** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Check the last refresh time - see when the data was last updated at the top of the dashboard."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/end-user-dashboard-open (checked 2026-10-26)
  - Reasoning: The same dashboard-use page documents asking data questions with Q&A or Copilot on the dashboard ('Ask questions by using Q&A (if available) or Copilot.'). It also shows the dashboard's last-refresh time at the top of the surface where those answers appear. That is freshness shown through the data source's own indicator, not attached to each assistant answer, which the row scores as partly. The page has no preview label.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Check the last refresh time - see when the data was last updated at the top of the dashboard."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/end-user-dashboard-open (checked 2026-10-26)
  - Reasoning: This dashboard-use page documents asking data questions with Q&A or Copilot and checking the dashboard's last-refresh time. That is a freshness indicator on the analytical surface used for questions, rather than freshness attached to each assistant answer, so it meets the prescribed partial scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Check the last refresh time - see when the data was last updated at the top of the dashboard."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/end-user-dashboard-open (checked 2026-10-26)
  - Reasoning: On dashboards where consumers can ask data questions using Q&A or Copilot, the surface displays the data freshness via the dashboard's own refresh indicator at the top ('Check the last refresh time - see when the data was last updated at the top of the dashboard'), qualifying as partly under the rule for data source indicators.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "DAX query to natural language. Ask Copilot to explain what any DAX query is doing."
  - Source: https://learn.microsoft.com/en-us/dax/dax-copilot (checked 2026-10-26)
  - Reasoning: Copilot explains DAX in the DAX query view editor, including queries copied from report visuals. No page documents it reading the calculation behind a chart directly in BI content. In Desktop this is enabled as a preview feature.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Create measure descriptions: Intended to create a description for a measure in a semantic model based on the DAX formula."
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/desktop-measure-copilot-descriptions (checked 2026-10-26)
  - Reasoning: Built-in Copilot reads the actual DAX formula of an existing model measure to explain it. This page connects those same measures to the reports using the semantic model, establishing access to report calculation logic rather than only standalone editor SQL.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The standalone Copilot experience can summarize data from reports and use the report visuals to answer specific questions."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-chat-with-data-standalone (checked 2026-10-26)
  - Reasoning: The built-in assistant reads existing report visuals, their configuration, and underlying data to answer specific user questions.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Change visuals by selecting new visual types or adjusting their fields."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-create-reports (checked 2026-10-26)
  - Reasoning: In report edit mode, Copilot creates visuals and changes the fields and measures that feed them, which changes the calculation behind a chart in a report.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Copilot can also generate DAX queries to answer questions that require ad hoc calculations, such as creating new measures that aren't contained in the model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Copilot authors new DAX behind its answer visual; the same page documents Add to page for putting that generated visual directly in a saved report. This ties the authored calculation to BI content, beyond a standalone query editor.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Change visuals by selecting new visual types or adjusting their fields."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-create-reports (checked 2026-10-26)
  - Reasoning: Users can prompt Copilot to modify visual chart types and adjust field and measure bindings on report visuals.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Partly (preview)** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Visual bindings that map fields to visual roles such as Category, Values, Legend, and Tooltips"
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-get-started (checked 2026-10-26)
  - Reasoning: The Get Report Metadata MCP tool returns each visual's field bindings. The calculation itself (the measure's DAX) has to be resolved separately, or the agent downloads the whole PBIR definition through the management skill and parses it.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "- PBIR definition management — Download, encode, upload, and update full PBIR definitions including all report, page, and visual files."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-planner-fabric-skill-overview (checked 2026-10-26)
  - Reasoning: The outside-agent management skill retrieves the full report definition, which includes per-visual query/binding files for inspection. The documented transport downloads the full PBIR definition, so it earns the prescribed partial credit for retrieving a whole report to parse.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The Get Report Metadata tool retrieves the high-level schema of a Power BI report, including workspace information, semantic model details, pages, visual information, and filters."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-get-started (checked 2026-10-26)
  - Reasoning: The Consumption MCP server provides the Get Report Metadata tool, allowing outside agents to inspect visual configurations and chart structures.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Partly (preview)** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "PBIR file authoring and validation - creates and edits pages, visuals, filters, themes, and formatting in PBIR/PBIP format."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-planner-fabric-skill-overview (checked 2026-10-26)
  - Reasoning: Outside agents edit visuals in local PBIR files, then publish by replacing the full report definition through updateDefinition. No per-visual write API is documented.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "- PBIR definition management — Download, encode, upload, and update full PBIR definitions including all report, page, and visual files."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-planner-fabric-skill-overview (checked 2026-10-26)
  - Reasoning: Outside-agent skills can author visual queries/bindings in PBIR and upload the edited report. The documented service write replaces the full report definition, rather than a chart-calculation endpoint, so the whole-report replacement rule gives partial credit.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Author — Create or update the PBIR files, bind visuals to model fields and measures, and apply formatting."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-report-skill-overview (checked 2026-10-26)
  - Reasoning: Outside agents use the Power BI Report skill to author and update visual chart configurations in PBIR format, binding fields and configuring formatting.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "It takes the visuals that report authors curate and build, and generates summaries, overviews, insights, and answers that are grounded in the report data."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-pane-summarize-content (checked 2026-10-26)
  - Reasoning: The Copilot report pane opens existing reports and works from their visuals, with citations back to them.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "It takes the visuals that report authors curate and build, and generates summaries, overviews, insights, and answers that are grounded in the report data."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-pane-summarize-content (checked 2026-10-26)
  - Reasoning: The built-in report Copilot works from existing saved report visuals and data, with visual citations and follow-up questions.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Alternatively, if you know exactly which report or semantic model you want to reference, you can attach it to your chat by using the + option. Then it appears in the Copilot conversation, and Copilot uses it to answer your questions."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-chat-with-data-standalone (checked 2026-10-26)
  - Reasoning: Users can attach saved reports and semantic models into the Copilot chat session, enabling the assistant to read and analyze their saved contents.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Yes** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Copilot generates a report page based on your request."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-create-reports (checked 2026-10-26)
  - Reasoning: Copilot builds report pages on a live semantic model, saved as an ordinary report in a workspace with its usual owner and permissions ('save the report as you would any other').
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "In the Power BI service, save the report as you would any other when you're satisfied with it."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-create-reports (checked 2026-10-26)
  - Reasoning: Copilot creates and edits actual report pages, which are saved as normal persistent Power BI reports over a selected semantic model. The documented authoring prerequisites require edit/build access and a capacity-backed workspace, giving the report normal ownership and governance.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "In the Power BI service, save the report as you would any other when you're satisfied with it."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-create-reports (checked 2026-10-26)
  - Reasoning: Users can ask Copilot to generate full report pages and dashboards, and then save the resulting report asset directly in the Power BI service.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Yes (preview)** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: yes, preview
  - Quote: "The Get Report Metadata tool retrieves the high-level schema of a Power BI report, including workspace information, semantic model details, pages, visual information, and filters."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-get-started (checked 2026-10-26)
  - Reasoning: An outside agent can read an existing report's pages, visuals, bindings and filters through the vendor's (preview) MCP server.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The Get Report Metadata tool retrieves the high-level schema of a Power BI report, including workspace information, semantic model details, pages, visual information, and filters."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-get-started (checked 2026-10-26)
  - Reasoning: A first-party MCP tool lets an outside agent inspect an existing report’s pages, data visuals, field-role bindings, text, and filters. This reads report contents rather than merely listing report IDs.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The Get Report Metadata tool retrieves the high-level schema of a Power BI report, including workspace information, semantic model details, pages, visual information, and filters."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-get-started (checked 2026-10-26)
  - Reasoning: Outside agents can read report assets—including pages, visual configurations, filters, and metadata—using the MCP Get Report Metadata tool.

### D_OW: Can an outside coding agent build BI content?

**Result: Yes (preview)** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Create a report from a PBIR definition"
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-planner-fabric-skill-overview (checked 2026-10-26)
  - Reasoning: The vendor's report authoring and management skills (preview) let an outside agent author a PBIR report and create it in a Fabric workspace.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Publish, download, update, list, or delete reports in Fabric workspaces."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-report-skill-overview (checked 2026-10-26)
  - Reasoning: The vendor’s unified outside-agent report skill creates/edits PBIR pages and visuals and publishes the resulting report to a governed workspace. It produces viewer-facing BI content, not only analyst code.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Power BI Report skill (powerbi-report-cli) is a unified AI-agent skill for planning, designing, authoring, validating, and managing Power BI reports."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-report-skill-overview (checked 2026-10-26)
  - Reasoning: Outside agents use the Power BI Report skill to author, update, validate, and publish complete Power BI report definitions.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Yes**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "In the Power BI service, save the report as you would any other when you're satisfied with it."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-create-reports (checked 2026-10-26)
  - Reasoning: A report Copilot builds is saved as an ordinary Power BI report on the live semantic model. It is shared through the usual workspace, app and sharing permissions, and the semantic model's RLS is evaluated for each viewer. The Copilot pages confirm RLS and OLS stay enforced.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Use RLS in the semantic model to restrict access to rows of data, and OLS to restrict access to columns and tables, so that each person's credentials determine which data they can access."
  - Source: https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-share-dashboards (checked 2026-10-26)
  - Reasoning: Copilot-created reports are saved as ordinary Power BI reports. This sharing page documents Specific people/groups links and viewer-credential RLS/OLS, so recipients of the AI-built report see data under their own access rules.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use RLS in the semantic model to restrict access to rows of data, and OLS to restrict access to columns and tables, so that each person's credentials determine which data they can access."
  - Source: https://learn.microsoft.com/en-us/power-bi/collaborate-share/service-share-dashboards (checked 2026-10-26)
  - Reasoning: Power BI assets can be shared while strictly enforcing row-level security (RLS) and object-level security (OLS) based on recipient identity.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Yes**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can use the OneLake catalog to discover existing data and reports."
  - Source: https://learn.microsoft.com/en-us/power-bi/connect-data/service-get-data (checked 2026-10-26)
  - Reasoning: The OneLake catalog lets permitted users search and browse colleagues' reports and semantic models across the organization. Copilot search (preview) also finds reports, models and apps the user can access.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Copilot respects user permissions and only searches over attributes you have access to. It doesn't provide search results containing items you can't access."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-search-new-content (checked 2026-10-26)
  - Reasoning: The standalone workspace-spanning search finds colleagues’ saved reports, models, and apps and returns links with workspace details. Copilot-created reports are standard saved reports and participate in this same discovery surface.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Search governed data assets across your organization."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/end-user-experience (checked 2026-10-26)
  - Reasoning: Power BI provides enterprise-wide discovery search allowing users to find governed semantic models, reports, and dashboards.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Partly (preview)** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: partly, preview
  - Quote: "App-scoped Copilot supports verified answers prepared by app authors."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction (checked 2026-10-26)
  - Reasoning: App-scoped Copilot (preview) is set up once by an app author. It is scoped to the app's curated content and audience permissions and uses author-prepared verified answers, and app users reuse it. Its instructions, though, come from the semantic model; there is no saved assistant object with its own instructions. Fabric data agents are mentioned but not documented in this corpus.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "- An app-scoped Copilot (preview) that can summarize the app based on items within, help users find items in the app based on their interests, summarize an item in the app, or answer questions based on items in the app."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-apps-overview (checked 2026-10-26)
  - Reasoning: App authors enable a reusable app-scoped Copilot over curated reports and semantic models, and the page restricts it to items each app user can access. Verified answers can be prepared by authors. This is partial because the saved scope is the app and underlying models, rather than a separately configured assistant with its own independent instructions and permission configuration.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "While standalone Copilot scopes to all Copilot-supported item types a user has access to in Power BI, app-scoped Copilot scopes to only the Copilot-supported item types in the app."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-apps-overview (checked 2026-10-26)
  - Reasoning: App-scoped Copilot restricts AI queries and interactions specifically to the content and semantic models included within an app.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Yes (preview)** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Copilot runs the summary on behalf of the subscription owner, much like email subscriptions."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-summaries-in-subscriptions (checked 2026-10-26)
  - Reasoning: On each scheduled delivery of a report subscription, Copilot itself regenerates the summary and emails it to recipients with nobody present. The AI reruns the task on a schedule. The feature is labeled preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The summary changes based on the subscription schedule and data."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-summaries-in-subscriptions (checked 2026-10-26)
  - Reasoning: Copilot regenerates the report summary on the configured daily, weekly, or monthly subscription schedule and emails it to recipients. This is scheduled AI analysis, not merely a static report delivery.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "To get insights, include a Copilot-generated summary for your Power BI report page or full report attachment in your email subscription."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-summaries-in-subscriptions (checked 2026-10-26)
  - Reasoning: Power BI email report subscriptions can be scheduled (daily, weekly, monthly) to automatically run Copilot summaries and deliver insights without manual prompting.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Not found** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in Copilot or agent is documented sending messages, calling webhooks or writing data on its own. Copilot summaries in subscriptions are delivered by the ordinary email subscription, and the summary only supplies content. Translytical task flows write back and send Teams notifications, but a user starts them from a button and they run user data functions, not an agent.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Copilot-generated summaries can be delivered through scheduled report subscriptions, but this establishes delivery of analytical answers by the subscription mechanism. No settling evidence shows a built-in agent independently initiating an additional external action, such as writing to a destination, invoking a webhook, or sending an operational notification.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation was found indicating that Power BI's built-in assistant or agents can autonomously cause side effects outside analytics content, such as sending notifications, calling external webhooks, or writing back to external destinations. Translytical task flow buttons exist for report authors and require human user clicks, not autonomous agent execution.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This error message could include a request for clarification, including suggested variants of the user's original data question."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models (checked 2026-10-26)
  - Reasoning: When Copilot can't produce a response it asks the user to clarify (the standalone Copilot also 'asks simple clarifying questions'). No hand-off to a person through a notification or review queue is documented.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "When it needs more context, Copilot asks simple clarifying questions to narrow it down."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-chat-with-data-standalone (checked 2026-10-26)
  - Reasoning: The built-in standalone assistant asks the requester for clarification. There is no documented escalation queue, named recipient, or operational hand-off when it cannot complete a task.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "When it needs more context, Copilot asks simple clarifying questions to narrow it down."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-chat-with-data-standalone (checked 2026-10-26)
  - Reasoning: When user intent or query context is ambiguous, the assistant escalates back to the user by asking clarifying questions to refine the analytical scope.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Partly (preview)** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "It can query any report, semantic model, or data agent in your organization without needing to open a specific item first."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/mobile/mobile-copilot-overview (checked 2026-10-26)
  - Reasoning: The built-in standalone Copilot, labeled preview, can query a named data agent. A data agent is a separately configured agent with its own published description, example queries and data source schema (copilot-search-new-content). The same page says Copilot can search for one, and copilot-integration says standalone Copilot 'finds and answers questions about any ... Fabric data agent you have access to.' So the built-in assistant hands analytical questions to another named agent. However, the customer does not configure that delegation or give it explicit tools and permissions: the routing is automatic, or the user attaches the item. So only part of the row is met.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documented agentic bundle supplies tools and skills to outside coding agents. No settling evidence lets a customer configure one Power BI-run agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Capacity delegation is unrelated.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "In Power BI Copilot search, the terms content and items refer to reports, semantic models, workspace apps, organizational apps, and data agents."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-search-new-content (checked 2026-10-26)
  - Reasoning: The standalone Copilot experience (preview) can search for and query separately configured data agents with published descriptions and data schemas, but customer configuration of one agent directly delegating a bounded analytical task to another named agent with explicit tools and permissions is not documented.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The corpus documents only Power BI MCP servers that outside agents consume, which is the opposite direction. On Copilot pages the only MCP mention is a semantic-model setting covering access by 'Microsoft's MCP tools'. No page documents attaching external tools or MCP servers to Copilot in Power BI.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Power BI MCP servers expose Power BI capabilities to outside clients such as GitHub Copilot. No settling evidence documents attaching a customer-configured external tool or MCP server to Power BI's own built-in assistant; the documented MCP direction is the reverse.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The documentation describes Power BI providing MCP servers (Authoring MCP server, Fabric IQ MCP) for external clients like GitHub Copilot to connect to, but contains no documentation showing the built-in assistant connecting out to external MCP servers or tools configured by the user.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Not found** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents Copilot finding BI content affected by a data or definition change, then repairing it or flagging it to an owner. Copilot in web modeling finds model-design problems such as inconsistent naming, but that is not impact on downstream reports. Model-wide renames are documented only for the Authoring MCP server used by outside agents.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Copilot can analyze and edit an active semantic model, and outside agents can author reports. No settling page shows the built-in AI finding BI content affected by a schema or definition change and repairing it or flagging it for its owner. General model-quality recommendations do not establish downstream content repair.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation describes Power BI's AI or built-in agents automatically finding and fixing BI content affected by schema or metric changes. Semantic model impact analysis is a manual feature for human authors, not an AI capability.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Not found** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Fabric Apps pages in the corpus describe creating apps and including them in org apps. None documents the built-in assistant reading an existing app's code, layout or rendered output.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The Fabric Apps page documents using Copilot with a data app template to create an app. No settling evidence shows Power BI's built-in assistant opening an existing generated app and inspecting its code, layout, or rendered output. App-scoped Copilot works over reports and semantic models, which are different objects.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While Fabric Apps (preview) allows building web applications, no documentation in the Power BI corpus indicates that the built-in assistant can read an existing generated app's code, layout, or rendered output.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Yes (preview)** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "The guide covers the current supported creation experience, including using the data app template, connecting to your semantic model, and telling Copilot what you want it to create."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/fabric-apps-analytics (checked 2026-10-26)
  - Reasoning: Fabric Apps, labeled preview, are persistent Fabric items. They connect to a live semantic model with Fabric authentication, and per org-app-items they carry Read and Execute permissions. This page says the supported creation experience is telling Copilot what to create. But the same page says Fabric Apps 'enables coding agents to create custom web apps' and attributes DAX and visual generation to 'agent skills in the template'. So the documentation does not establish that the creator is Power BI's built-in assistant rather than a coding agent, and the build steps are only linked, not included. That ambiguity limits this to partly.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "The guide covers the current supported creation experience, including using the data app template, connecting to your semantic model, and telling Copilot what you want it to create."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/fabric-apps-analytics (checked 2026-10-26)
  - Reasoning: The documented Copilot creation experience builds a Fabric App connected to a semantic model; the supplied template includes Fabric authentication and data connectivity. These are persistent app items with author-managed access, not disposable HTML: the related Power BI org-app page documents Read/Execute permissions and separate control of app data dependencies. Fabric Apps is explicitly preview.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The guide covers the current supported creation experience, including using the data app template, connecting to your semantic model, and telling Copilot what you want it to create."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/fabric-apps-analytics (checked 2026-10-26)
  - Reasoning: Users can build analytical data web apps by connecting the data app template to a semantic model and instructing Copilot in natural language what to create.

### A_OR: Can an outside coding agent read a generated app?

**Result: Not found** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page in the Power BI corpus documents an API, CLI, MCP tool or skill that returns a Fabric App's definition (its code or layout) to an outside agent. The Fabric Apps documentation itself is only linked.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The corpus documents generated Fabric Apps and outside-agent interfaces for Power BI reports and semantic models, but no settling API, CLI, or MCP route retrieves a generated Fabric App's source definition. Power BI workspace-app REST endpoints concern collections of reports and dashboards, not generated app code.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documented API or CLI in the Power BI documentation corpus allows an outside coding agent to read or pull out the complete definition or code of a generated Fabric App.

### A_OW: Can an outside coding agent build a generated app?

**Result: Yes (preview)** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: yes, preview
  - Quote: "It enables coding agents to create custom web apps for exploring and presenting data, removing many of the authoring, visualization, and analytical limitations Power BI authors traditionally work around."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/fabric-apps-analytics (checked 2026-10-26)
  - Reasoning: Fabric Apps (preview) gives coding agents a vendor data-app template with agent skills, Fabric authentication and semantic-model connectivity for building data apps.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "It enables coding agents to create custom web apps for exploring and presenting data, removing many of the authoring, visualization, and analytical limitations Power BI authors traditionally work around."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/fabric-apps-analytics (checked 2026-10-26)
  - Reasoning: The first-party Fabric Apps data-app template is explicitly designed for outside coding-agent creation of analytical web apps. The same page documents built-in Fabric authentication, semantic-model connectivity, and agent-generated DAX bound to analytical visual components.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "It enables coding agents to create custom web apps for exploring and presenting data, removing many of the authoring, visualization, and analytical limitations Power BI authors traditionally work around."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/fabric-apps-analytics (checked 2026-10-26)
  - Reasoning: Fabric Apps enables outside AI coding agents to author and build custom web data applications backed by Power BI semantic models.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Partly** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "For each question, define the expected measure, grouping, date basis, filters, and validated result."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-evaluate-data (checked 2026-10-26)
  - Reasoning: The documentation sets out a manual evaluation process: choose representative questions, define expected results and compare Copilot's answers with them. The product has no saved test set, rubric, judge or repeatable run, so the row is only partly met.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "For each question, define the expected measure, grouping, date basis, filters, and validated result."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-evaluate-data (checked 2026-10-26)
  - Reasoning: The page prescribes a manual evaluation process for Copilot answers: choose business questions, define expected results, and inspect generated queries and results against those expectations. This supports partial credit; a product-managed saved test suite, judge, or repeatable evaluation run is not established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "For each question, define the expected measure, grouping, date basis, filters, and validated result."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-evaluate-data (checked 2026-10-26)
  - Reasoning: The documentation outlines a manual evaluation process where authors select focused business questions, define expected measures and validated results, and test Copilot answers against them, but the product lacks a saved automated test suite, rubric, or judge.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: No** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page names the model version Copilot uses, offers a choice of model, or says Microsoft manages the model with no customer choice. That leaves neither a partly nor a no verdict supported.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Searches did not establish customer selection or pinning of a named inference-model version for built-in Copilot. References to semantic-model versions and to models chosen by outside MCP clients concern different objects. No explicit statement of vendor-only model management was found to justify no.
- **Gemini 3.8 Flash**: no
  - Quote: "Admins need to be aware of four main settings related to Copilot:"
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-enable-power-bi (checked 2026-10-26)
  - Reasoning: The documentation lists an exhaustive set of four Copilot tenant administration settings, none of which allows pinning or selecting foundation model versions.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Diagnostics provide conversational context to your rating and are helpful during support case investigations."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-pane-summarize-content (checked 2026-10-26)
  - Reasoning: Downloadable diagnostics and 'How Copilot arrived at this' (with the DAX query) keep some conversational context and logic for audit. No documented record keeps the model version, configuration and data snapshot needed to reproduce an answer. Chat answers disappear when the pane closes.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "To keep the query and exit Copilot, select Keep query to add it to query tab."
  - Source: https://learn.microsoft.com/en-us/dax/dax-copilot (checked 2026-10-26)
  - Reasoning: Copilot-generated analytical logic can be retained as a DAX query, and report diagnostics provide conversation context. The documentation does not preserve the complete prompt/configuration/model-version/data-snapshot bundle needed for full reproduction or audit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Expand each reasoning step to understand how Copilot arrived at its answer, including the sequence of analysis steps, the generated DAX query, and the query results used to produce the response."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Copilot translates natural language questions into formal DAX queries that execute deterministically on the engine, although the prompt translation step itself is probabilistic.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Yes (preview)** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Because verified answers are model-level (not report-level), they work across any report that uses the same semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: In the FAQ example, Copilot answers 'sales by area' wrongly, the model author sets a verified answer, and Copilot then returns that approved answer for later matching prompts. Reach is stated: everyone using any report on that semantic model. Prep data for AI is labeled preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "Now, when the user asks for sales by area, Copilot returns the verified answer that the model author approves."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-faq (checked 2026-10-26)
  - Reasoning: The documented example first shows Copilot incorrectly interpreting area as product area. A model author corrects it by saving a sales-by-region verified answer with trigger phrases; later questions receive the corrected visual. Verified answers are model-level and apply across reports using that model, establishing the reach of the correction.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Because verified answers are model-level (not report-level), they work across any report that uses the same semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: Verified answers allow authors to correct misinterpretations and store the verified visual response in the semantic model, persisting the correction across all reports sharing the model.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Partly (preview)** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "If a match is found, Copilot returns the verified answer instead of generating a new response."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: Author-approved verified answers carry a verified checkmark and override generation for matching prompts. Models not marked 'Approved for Copilot' show low-quality warnings. Neither binds general answers to certified content or flags departures from it, so this is partly.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "If a match is found, Copilot returns the verified answer instead of generating a new response."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: Matching trigger phrases return a curated, human-approved visual stored on the semantic model. This enforces consistency for those answers, but does not establish general certification or governed-metric mismatch checking; Fabric IQ also bypasses verified answers.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "When a user types a prompt in Copilot, Copilot first checks for an exact or semantically similar match to any trigger phrase tied to a verified answer."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: When an incoming user prompt matches trigger phrases configured for a verified answer, Copilot returns the curated verified answer visual rather than generating a fresh unverified response.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Not found** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Copilot usage bills to Fabric capacity or a dedicated Fabric Copilot capacity, and the Capacity Metrics app reports it. When an autoselected workspace reaches its capacity limit, the service reassigns another workspace rather than blocking usage. Surge and overage protection are general capacity governance and are not documented as an AI-specific cap. No page documents a limit that blocks Copilot usage once it is reached.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Copilot CU reporting and capacity assignment are documented, but no settling evidence provides a customer-set hard spending or usage cap for built-in Copilot. A memory limit for separate integrated Azure AI workloads does not establish a cap on this assistant, and a full workspace can cause automatic reassignment.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While Copilot consumption is billed against Fabric Copilot capacities or Fabric capacities and can be monitored via the Capacity Metrics app, no documented mechanism allows customers to set a spend limit that blocks built-in AI usage once reached.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Partly** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If business users frequently request specific summary requests or questions, check the visual timings in diagnostics to optimize your report."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-pane-summarize-content (checked 2026-10-26)
  - Reasoning: Copilot pane diagnostics show customers, for their own reports, 'The time in seconds it took to load or query the visual' for each visual Copilot uses. The page offers this for working out why Copilot summaries or answers take longer than expected. That measures part of the built-in AI's response time on the customer's workload. It does not cover end-to-end response time, and there is no breakdown by agent, model or evaluation run. The page has no preview label.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Performance Analyzer measures report visuals and their DAX queries. The searches did not establish measurement of built-in AI response time on customer workloads by agent, model, or evaluation run; query-performance advice and generic timeouts do not meet that scope.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The time in seconds it took to load or query the visual"
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-pane-summarize-content (checked 2026-10-26)
  - Reasoning: Copilot diagnostics expose 'The time in seconds it took to load or query the visual' for report visuals used in Copilot responses, allowing customers to measure query/load latency on their own workload when diagnosing slow Copilot summaries or answers.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Partly** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "By filtering on the Copilot in Fabric operation, you can isolate all compute usage generated by Copilot requests and break it down by Power BI experience (report, semantic model, or mixed) to understand where compute demand originates."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction (checked 2026-10-26)
  - Reasoning: The Capacity Metrics app breaks Copilot consumption down by item and experience, and standalone Copilot usage is tracked against a chosen workspace. No page documents attribution by user or team.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "By filtering on the Copilot in Fabric operation, you can isolate all compute usage generated by Copilot requests and break it down by Power BI experience (report, semantic model, or mixed) to understand where compute demand originates."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction (checked 2026-10-26)
  - Reasoning: Capacity admins can inspect Copilot CU consumption through item history and Power BI experience. Standalone Copilot also assigns a workspace for tracking and billing. This is partial attribution: the documentation does not establish consumption by actual asking user or team, and the billing workspace can be selected independently of the content analyzed.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "After you select a workspace, Power BI checks if Copilot is enabled. If it is, Power BI uses that workspace for monitoring usage."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-enable-power-bi (checked 2026-10-26)
  - Reasoning: Power BI monitors AI Copilot usage tied directly to specific workspaces and capacities.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Partly (preview)** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: partly, preview
  - Quote: "From here, you can select a semantic model and see what questions users have been asking."
  - Source: https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-tooling-intro (checked 2026-10-26)
  - Reasoning: Q&A tooling, labeled preview, keeps a 28-day record of the questions asked of Power BI's built-in natural-language Q&A for each semantic model. So prompts and the analytical object they ran against are recorded. The page does not say each question is attributed to the user who asked it, or that the generated query is logged. No page documents Copilot activity in the audit or activity log. So only part of the row is met.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: General Power BI audit logging and downloadable Copilot diagnostics were found, but no settling evidence documents an assistant-specific action record containing its prompt or query, affected analytical objects, and attributable asking-user identity. Those separate mechanisms do not establish the required combined audit trail.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "From here, you can select a semantic model and see what questions users have been asking."
  - Source: https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-tooling-intro (checked 2026-10-26)
  - Reasoning: Q&A tooling (preview) logs questions asked by users against each semantic model for the last 28 days, recording natural language prompts and the target analytical model, but the documentation does not state that questions are attributed to the specific asking user.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Specify who can access Copilot in Fabric in the Applies to section."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-enable-power-bi (checked 2026-10-26)
  - Reasoning: The tenant setting 'Users can use Copilot and other features powered by Azure OpenAI' can be scoped to particular users or security groups. Capacity admins can also turn Copilot on or off per capacity, which controls which workspaces get it, and app-scoped Copilot is managed per app.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If you enable Copilot in Fabric in your capacity for a user or security group, then all workloads and Copilot experiences are accessible for those users."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models (checked 2026-10-26)
  - Reasoning: Administrators can grant Copilot access to particular users/security groups, with capacity-level controls also governing workspaces. The control is broader than an individual Copilot experience.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Specify who can access Copilot in Fabric in the Applies to section."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-enable-power-bi (checked 2026-10-26)
  - Reasoning: Fabric administrators can selectively enable Copilot for specific security groups or users in the tenant settings.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly (preview)** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Before responding to your first prompt, Copilot asks for your permission before reviewing your model or suggesting changes."
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/copilot-web-modeling (checked 2026-10-26)
  - Reasoning: Copilot in web modeling (preview) asks the requester for permission to change the semantic model and creates a restore checkpoint. The approval comes only from the requester; no separate named approver role is documented.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "By providing approval, you are consenting to Copilot making changes to the specific semantic model you have opened during the full duration of the chat session for changes to be made."
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/copilot-web-modeling (checked 2026-10-26)
  - Reasoning: The model author grants session-level permission to their own Copilot. This is requester confirmation, not a separate named person or role approving a governed change before it takes effect.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "When you're satisfied with the AI instructions, publish your report to the Power BI service or save it in Power BI Desktop."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: AI changes and configurations remain in local draft status until the author reviews and explicitly saves or publishes them, satisfying partly the grading standard.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If you're okay with your data being handled outside of your area, switch on the setting Data sent to Azure OpenAI can be processed outside your capacity's geographic region, compliance boundary, or national cloud instance, and select Apply."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-enable-power-bi (checked 2026-10-26)
  - Reasoning: Admins choose whether Copilot's Azure OpenAI processing may leave the capacity's geographic region. That is a documented choice about where processing happens, not inference in the customer's own tenant or cloud.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- If you're okay with your data being handled outside of your area, switch on the setting Data sent to Azure OpenAI can be processed outside your capacity's geographic region, compliance boundary, or national cloud instance, and select Apply."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-enable-power-bi (checked 2026-10-26)
  - Reasoning: The Fabric administrator controls whether Copilot's Azure OpenAI processing may cross the capacity's geographic boundary when Azure OpenAI is unavailable locally. This is a documented geographic-processing choice, supporting partial credit; it does not place inference in the customer's own cloud or tenant.
- **Gemini 3.8 Flash**: no
  - Quote: "If Azure OpenAI isn't available in your geographic region, you need to adjust one more setting."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-enable-power-bi (checked 2026-10-26)
  - Reasoning: Copilot inference is strictly vendor-managed via Microsoft's Azure OpenAI Service without customer-managed endpoint or API key configuration.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Partly (preview)** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Copilot reads these visuals in place, so the report's bookmark state doesn't change, and row-level security (RLS) and object-level security (OLS) stay fully enforced."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-pane-summarize-content (checked 2026-10-26)
  - Reasoning: RLS and OLS are enforced for Copilot report answers, and Copilot uses only items the user can access. However, the verified-answers page says RLS and OLS 'aren't fully supported as security features for verified answers' and that data might still be exposed. One AI surface therefore has a documented gap, which makes this partly.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "Row-level security (RLS) and object-level security (OLS) aren't fully supported as security features for verified answers."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: Ordinary report Copilot answers enforce RLS and OLS, but the verified-answer documentation explicitly limits that protection and warns about possible exposure during preview. Therefore protection is not established across every built-in surface.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Row-level security (RLS) and object-level security (OLS) aren't fully supported as security features for verified answers."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: While underlying model queries respect security definitions, RLS and OLS are explicitly not fully supported across all AI capabilities such as verified answers.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This summary is generated by sending a semantic query result back to Azure OpenAI (which includes data points) and requesting a natural language explanation."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models (checked 2026-10-26)
  - Reasoning: The docs name Azure OpenAI as the receiving service and list what is sent (schema, report metadata, conversation, query results with data points). No retention period is stated, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Summary: Copilot summarizes the query result. This summary is generated by sending a semantic query result back to Azure OpenAI (which includes data points) and requesting a natural language explanation."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models (checked 2026-10-26)
  - Reasoning: The documentation names Azure OpenAI and identifies semantic query results/data points sent for built-in Copilot summaries. Other sections describe schema and prompt grounding, but no retention duration for the AI requests is established here.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "This summary is generated by sending a semantic query result back to Azure OpenAI (which includes data points) and requesting a natural language explanation."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models (checked 2026-10-26)
  - Reasoning: The documentation details the data flow of AI interactions, specifying that DAX query results containing data points are transmitted to Azure OpenAI for natural language summarization.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If your tenant or capacity is outside the United States or EU data boundary, Copilot is disabled by default unless your Fabric tenant admin enables the tenant setting called Data sent to Azure OpenAI can be processed outside your tenant's geographic region, compliance boundary, or national cloud instance in the Fabric admin portal."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction (checked 2026-10-26)
  - Reasoning: The docs describe processing relative to the tenant's geographic region and the US/EU data boundary, but they don't say where Copilot data is stored. Processing without storage is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "If your tenant or capacity is outside the United States or EU data boundary, Copilot is disabled by default unless your Fabric tenant admin enables the tenant setting called Data sent to Azure OpenAI can be processed outside your tenant's geographic region, compliance boundary, or national cloud instance in the Fabric admin portal."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-introduction (checked 2026-10-26)
  - Reasoning: This documents regional processing boundaries and the cross-region exception for Copilot. It does not identify AI storage regions or fully specify processing and storage for every AI feature.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "If you're okay with your data being handled outside of your area, switch on the setting Data sent to Azure OpenAI can be processed outside your capacity's geographic region, compliance boundary, or national cloud instance, and select Apply."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-enable-power-bi (checked 2026-10-26)
  - Reasoning: Tenant administrators can control cross-geographic data movement by enabling or disabling the setting that permits data sent to Azure OpenAI to leave the capacity region or compliance boundary.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Not found**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page in the Power BI corpus states that customer data, prompts or outputs are not used to train AI models. The privacy and responsible-use article for Copilot is only linked, not included in the corpus.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No explicit default no-training commitment was found in the local Power BI pages. They link to separate Fabric privacy and responsible-use documentation, but a link without the statement in this corpus does not establish its terms. References to training Q&A or training users are unrelated.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No statement was found in this Power BI documentation corpus stating that customer data is not used to train AI models by default. External trust or Fabric-level pages covering training policies are not present in this corpus.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Partly** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Users with write permissions on a semantic model can control whether users with read-only permissions can access the model through Copilot experiences."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models (checked 2026-10-26)
  - Reasoning: An enforced, AI-specific setting can block read-only users from reaching a model through Copilot and MCP. It is set per model by the model's writers, though, not enforced tenant-wide by an administrator. The admin setting 'Only show approved items in the standalone Copilot' limits only standalone search.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "An AI data schema lets semantic model authors define a focused subset of the model's schema for Copilot to prioritize when it generates responses."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-data-schema (checked 2026-10-26)
  - Reasoning: The model author can scope schema-based Copilot answers independently of user permissions, but the scope is per model and several experiences ignore it. The administrator-approved-items option limits discovery and still permits manually attached accessible items.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "When you set an AI data schema for a model, Copilot uses the selected fields when it responds to data-related questions."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-data-schema (checked 2026-10-26)
  - Reasoning: Model authors can define an AI data schema to explicitly select and restrict which tables and fields Copilot can see and use when answering questions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Grant the delegated permissions your scenario needs on the Power BI Service API."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-external-clients (checked 2026-10-26)
  - Reasoning: An outside MCP client authenticates through a customer-registered Entra app with chosen delegated scopes. For example, the consumption server needs only Dataset.Read.All and Workspace.Read.All, a read-only token narrower than the user's own write access. The page is labeled preview.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Your service principal doesn't have access to any of your Power BI content and APIs."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/embedded/embed-service-principal (checked 2026-10-26)
  - Reasoning: A separate service-principal identity starts with no content access and receives explicitly assigned workspace access. An outside agent can therefore have narrower object access than its human operator; the local authoring MCP server also documents service-principal authentication.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "With only Build permission, the server can only run DAX queries against the model."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Permissions for agents using the MCP server are governed by granular Fabric/Power BI roles; an agent with only Build permission is restricted to running DAX queries without write capability.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Whether to return lineage info (upstream dataflows, tiles, data source IDs)"
  - Source: https://learn.microsoft.com/en-us/rest/api/power-bi/admin/workspace-info-post-workspace-info (checked 2026-10-26)
  - Reasoning: The documented scanner REST API (with lineage=True and datasetExpressions=True) returns upstream dataflows, data sources and dataset expressions. An outside agent can call this lineage interface, but it requires admin-level API permissions.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- What is the data lineage (dependencies between Power BI items, including external data sources)?"
  - Source: https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-auditing-monitoring-tenant-level-auditing (checked 2026-10-26)
  - Reasoning: The documented tenant-inventory API workflow exposes upstream dependencies to an authenticated programmatic caller. The scanner API’s lineage, datasourceDetails, and datasetExpressions parameters additionally return upstream dataflows/source IDs and DAX/Mashup transformations, allowing an outside agent to traverse the chain.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Whether to return lineage info (upstream dataflows, tiles, data source IDs)"
  - Source: https://learn.microsoft.com/en-us/rest/api/power-bi/admin/workspace-info-post-workspace-info (checked 2026-10-26)
  - Reasoning: Power BI provides administrative APIs and UI lineage views to trace upstream data sources and downstream dependent artifacts.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Yes** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The tenant auditing guidance says that when a service principal authenticates, the activity log captures its Application ID as the user ID. That is the general activity log for any automated process, which the row says is insufficient. No page documents logging of actions by an MCP or outside agent, or tying them to the agent's delegated identity and the analytical objects affected.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When you authenticate with a service principal (described next), the user ID captured by the activity log is the Application ID."
  - Source: https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-auditing-monitoring-tenant-level-auditing (checked 2026-10-26)
  - Reasoning: For an outside agent assigned its own service principal, Power BI activity events carry that application identity. The same activity-log documentation ties events to affected reports/items, so dedicated agent API activity can be attributed rather than blended into a human’s identity. Shared application identities would lose that distinction.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "When you authenticate with a service principal (described next), the user ID captured by the activity log is the Application ID."
  - Source: https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-auditing-monitoring-tenant-level-auditing (checked 2026-10-26)
  - Reasoning: Power BI's tenant activity log records the Application ID when an outside agent or automated client authenticates via a service principal, capturing its identity distinctly from human users.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Work with TMDL and Power BI Project (PBIP) files, so changes flow through your normal source control and review process."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/mcp-servers-overview (checked 2026-10-26)
  - Reasoning: Agent changes made through the Authoring MCP server can go through normal source-control review, and the planner skill waits for the user's approval. No named approver distinct from the requester, and no policy routing agent writes to one, is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Run agentic development workflows. Work with TMDL and Power BI Project files so that an agent can plan and execute changes across your semantic model codebase, and so that those changes flow through your normal source control and review process."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Outside-agent semantic-model changes can enter source control and review. This does not establish an enforced gate with a different named approver before deployment; the report planner’s approval is also from the requester.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Approve the fixes you want applied."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/semantic-model-authoring-skill-overview (checked 2026-10-26)
  - Reasoning: The semantic model authoring skill presents findings and requires the developer to approve proposed fixes before the agent applies them.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Yes** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Power BI Project (PBIP) files store your model as plain text, so Git tracks every change the agent makes."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: The docs explicitly cover agent-made changes to the semantic model: in PBIP under Git, 'You get a diff to review before you commit'. Local server and PBIP are GA.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Work in PBIP files under Git. Power BI Project (PBIP) files store your model as plain text, so Git tracks every change the agent makes. You get a diff to review before you commit, and a way to revert if the result isn't what you wanted."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: The first-party MCP guidance explicitly connects model edits by the outside agent to a reviewer-visible Git diff.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Power BI Project (PBIP) files store your model as plain text, so Git tracks every change the agent makes."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Power BI stores models and reports as plain-text files in PBIP format, allowing Git to track every change an agent proposes so developers can inspect diffs before committing.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Yes** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You get a diff to review before you commit, and a way to revert if the result isn't what you wanted."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: For agent edits to a semantic model kept as PBIP under Git, the docs give a way to revert the agent's change.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Work in PBIP files under Git. Power BI Project (PBIP) files store your model as plain text, so Git tracks every change the agent makes. You get a diff to review before you commit, and a way to revert if the result isn't what you wanted."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: The documented PBIP/Git workflow explicitly allows reverting the outside agent’s semantic-model changes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You get a diff to review before you commit, and a way to revert if the result isn't what you wanted."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Plain text PBIP project integration with Git provides an explicit way to review diffs and revert/undo changes made by an agent.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Partly** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: partly, preview
  - Quote: "The first time the agent calls a tool, the server prompts you to sign in with your Microsoft Entra account."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Microsoft ships MCP servers over semantic models with documented Entra ID authentication. The hosted Authoring and Consumption servers are labeled preview, and the GA local Authoring server is operated by the customer. Both cases earn partly. Fabric IQ MCP is named, but its setup is outside this corpus.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "The first time the agent calls a tool, the server prompts you to sign in with your Microsoft Entra account."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Microsoft supports authenticated MCP access to Power BI semantic models. The hosted authoring endpoint is preview; the generally available alternative is a customer-operated local server. Both routes therefore receive the row’s prescribed partial credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The Power BI Authoring MCP server gives an AI agent the tools to create and change Power BI semantic models."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Microsoft provides the Power BI Authoring MCP server enabling AI agents to connect to and modify Power BI semantic models.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Returns a list of dashboards from the specified workspace."
  - Source: https://learn.microsoft.com/en-us/rest/api/power-bi/dashboards/get-dashboards-in-group (checked 2026-10-26)
  - Reasoning: The documented REST API lists dashboards, reports and datasets in a workspace without knowing them in advance. The report management skill also wraps 'List reports in a workspace', and the MCP schema tool lists tables and measures.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Publish, download, update, list, or delete reports in Fabric workspaces."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-report-skill-overview (checked 2026-10-26)
  - Reasoning: The vendor’s report skill lets an outside agent enumerate workspace reports. The management documentation also resolves workspace and report IDs by name via List APIs, so it is not restricted to fetching a known ID.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The agent loads the semantic-model-authoring skill, connects to Power BI Desktop through the Power BI Authoring MCP server, inventories the model, and reports findings grouped by severity."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/semantic-model-authoring-skill-overview (checked 2026-10-26)
  - Reasoning: AI agents discover and inventory the semantic model's schema, tables, and measures by connecting through the Power BI Authoring MCP server.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Use more flexible authentication methods, such as a service principal in a continuous integration (CI) pipeline."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Named credential types for agents are documented: a service principal, and Entra ID interactive or delegated sign-in as the user.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Use more flexible authentication methods, such as a service principal in a continuous integration (CI) pipeline."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: The local first-party MCP server explicitly supports service-principal authentication for outside agents; hosted OAuth/Entra user authentication is documented separately.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Microsoft Entra ID interactive sign-in, or service principal"
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Outside agents connecting via the Power BI Authoring MCP server authenticate using standard Microsoft Entra ID interactive sign-in or service principals.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes (preview)** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Agent skills — Folders of instructions, scripts, and resources that an agent loads on demand to follow Power BI authoring best practices."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-agentic-overview (checked 2026-10-26)
  - Reasoning: Microsoft publishes the powerbi-authoring plugin of agent skills for coding agents (GitHub Copilot, Claude Code, Cursor and others). The individual skill pages are labeled preview.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Agent skills — Folders of instructions, scripts, and resources that an agent loads on demand to follow Power BI authoring best practices. Skills cover both semantic model authoring (designing a star schema, writing DAX, structuring a PBIP project, preparing a model for AI) and report authoring (creating pages and visuals, formatting, and validating PBIR report definitions)."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-agentic-overview (checked 2026-10-26)
  - Reasoning: Microsoft publishes the powerbi-authoring plugin and packaged skills for outside coding agents, including compatibility with multiple agent clients. This is an instruction pack in addition to MCP tools.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Agent skills — Folders of instructions, scripts, and resources that an agent loads on demand to follow Power BI authoring best practices."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-agentic-overview (checked 2026-10-26)
  - Reasoning: Power BI provides packaged agent skills containing instructions, scripts, and resources designed specifically for AI agent authoring workflows.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Partly** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The easiest way to start is with the Power BI Desktop Bridge CLI."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-desktop-bridge-overview (checked 2026-10-26)
  - Reasoning: The vendor's Desktop Bridge CLI is documented for external tools and agents (reload, screenshot, status). It is local-only, and no non-interactive authentication to the service is documented, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- Validate report definitions and capture rendered screenshots through the `powerbi-report-author` CLI."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-report-skill-overview (checked 2026-10-26)
  - Reasoning: The first-party agent skill documents a report CLI and its agent workflow. The corpus does not document non-interactive authentication for that CLI; the management skill separately uses az rest/az login, so the complete requested CLI authentication scope is not established.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Power BI Report skill (powerbi-report-cli) is a unified AI-agent skill for planning, designing, authoring, validating, and managing Power BI reports."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/agentic/power-bi-report-skill-overview (checked 2026-10-26)
  - Reasoning: Power BI provides the powerbi-report-cli tool and skill enabling AI agents and CLI workflows to plan, design, author, validate, and manage reports.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Partly (preview)** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Tenant settings: Administrators must enable "Users can use the Power BI Model Context Protocol server endpoint (preview)" for your organization."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-get-started (checked 2026-10-26)
  - Reasoning: Admins have a tenant-wide switch for the hosted MCP endpoint, and model writers can block read-only users from MCP tools per model. No admin control for particular users, groups or workspaces is documented. The local server can't be blocked except by disabling XMLA.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Enable Allow service principals to use Power BI APIs either for the entire organization or for the specific security group you created in Microsoft Entra ID. For more information see Service principals can call Fabric public APIs."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/embedded/embed-service-principal (checked 2026-10-26)
  - Reasoning: For outside agents using service principals, an administrator controls API access by security group separately from workspace permissions. This evidence covers the programmatic service-principal route; it does not claim that the local MCP server has its own deny switch.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "Your Power BI admin must enable the tenant setting Users can use the Power BI Model Context Protocol server endpoint (preview)."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-external-clients (checked 2026-10-26)
  - Reasoning: Access to hosted Power BI MCP server endpoints can be controlled at the tenant level through dedicated administrator tenant settings.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "DAX query execution tools have a hard limit of 100,000 rows."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: The MCP tools have a fixed per-query row cap, and general API throttling (429) applies. No configurable rate limit, quota or spend cap for agent usage is documented.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- There's a limit of 120 query requests per minute per user, regardless of the dataset that's queried."
  - Source: https://learn.microsoft.com/en-us/rest/api/power-bi/datasets/execute-queries (checked 2026-10-26)
  - Reasoning: The documented DAX API used by outside agents enforces a general caller rate limit. It is not a separately configurable agent-specific quota or spend cap.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "DAX query execution tools have a hard limit of 100,000 rows."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: The MCP server enforces a hard limit of 100,000 rows on DAX query execution tools invoked by outside agents, restricting analytical query payload size.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes (preview)**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, preview
  - Quote: "AI instructions allow semantic model authors to provide context, business logic, and specific guidance directly on a semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: Copilot (the built-in assistant) reads AI instructions that hold business definitions, such as what busy season or high performer means. Prep data for AI is labeled preview.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "AI instructions allow semantic model authors to provide context, business logic, and specific guidance directly on a semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: Built-in Copilot reads model-level business instructions, including authoritative tables, metric meaning, terminology, and analytical defaults before answering.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "AI instructions allow semantic model authors to provide context, business logic, and specific guidance directly on a semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: Semantic model authors can attach persistent natural language AI instructions to provide business context, logic, and operational guidance directly to Copilot.

### C5: Can the business context you give the AI live in version control?

**Result: Yes**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: yes, preview
  - Quote: "When you make LSDL or tooling edits through Git or deployment pipelines, take note of the following requirements:"
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai (checked 2026-10-26)
  - Reasoning: AI instructions and AI data schemas are saved to the model's LSDL, which can be edited through Git, so they can be diffed, reviewed and rolled back. Verified answers don't support Git.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- AI instructions and AI data schemas save to the LSDL and you can edit them as needed."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai (checked 2026-10-26)
  - Reasoning: The page explicitly documents LSDL/tooling edits through Git and their deployment/refresh requirements, so business instructions and schema context can live in version control. This establishes the requested file-based context route; verified answers have a separate documented CI/CD limitation.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Source control ready - Open text files, designed for seamless integration with Git, enabling version history and team collaboration."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/projects/projects-overview (checked 2026-10-26)
  - Reasoning: Power BI Project (PBIP) files store all model metadata, business logic, and context in human-readable plain text files designed for Git version control and change tracking.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes (preview)**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, preview
  - Quote: "AI instructions are saved at the semantic model level."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: Context is attached to each semantic model rather than the whole tenant, so each model or team can have its own. Different definitions per group within one model aren't supported.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- AI instructions are saved at the semantic model level. Instructions can't currently be stored at the report level."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: Built-in Copilot uses context attached to each semantic model. Teams using different models can therefore receive different business context rather than a single tenant-wide instruction set.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Provide instructions about the semantic model that help Copilot understand your business, terminology, and how to prioritize the data in the model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: AI instructions are scoped directly to individual semantic models, tailoring business vocabulary and context to specific data domains.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Yes (preview)**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: yes, preview
  - Quote: "You can test all Prep data for AI features on the report Copilot pane before publishing to the service."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai (checked 2026-10-26)
  - Reasoning: There is a named test step: in Desktop, authors test context in the Copilot pane with the skill picker before publishing it to users.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- You can test all Prep data for AI features on the report Copilot pane before publishing to the service."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai (checked 2026-10-26)
  - Reasoning: The named test workflow checks model instructions, schema selections, and verified answers in Desktop before broader publication, including a skill picker to simulate consumer experiences.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Test AI instructions in Power BI Desktop"
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: Authors can interactively test their AI instructions and verify Copilot's answers locally in Power BI Desktop before publishing.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Partly (preview)**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Matched trigger phrase: Displays the specific phrase that Copilot matched, whether it's exact or semantically similar."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: When a verified answer is used, the answer shows the matched trigger phrase. AI instructions are never shown ('End users can't see the AI instructions set on the model'), so this is only partly met.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "- Matched trigger phrase: Displays the specific phrase that Copilot matched, whether it's exact or semantically similar. The phrase helps users understand how their prompt was interpreted and gives them a starting point to adjust or refine their question, if needed."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-verified-answers (checked 2026-10-26)
  - Reasoning: A Copilot verified answer exposes the particular author-defined trigger that selected the governed response. This is limited context provenance: ordinary AI instructions and the AI schema remain hidden from consumers.
- **Gemini 3.8 Flash**: no
  - Quote: "End users can't see the AI instructions set on the model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: The documentation explicitly states in the considerations and limitations section that end users cannot see the AI instructions configured on the model.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Yes**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Certain semantic model properties, including descriptions, data types, format strings, and data category."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-semantic-models (checked 2026-10-26)
  - Reasoning: This list item names the grounding context Copilot takes when it answers data questions. Copilot reuses the description properties already defined on tables, columns and measures in the semantic model, so they do not need retyping for the AI. Those descriptions live in Power BI's own semantic model, though. No page documents Copilot ingesting warehouse column comments, catalog descriptions or dbt docs from the source. So only part of the row is met. The page has no preview label.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Descriptions: Descriptions set on tables and columns to provide more context about the data. Copilot uses descriptions only in Data Analysis Expressions (DAX) queries and search capabilities."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-faq (checked 2026-10-26)
  - Reasoning: Built-in Copilot consumes existing table and column descriptions from semantic-model metadata as context for DAX generation and search. The semantic model supplies these modeling descriptions without re-entering them as chat instructions. This establishes the column-description route; it does not assert a separate dbt-docs or warehouse-comment connector.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Copilot may use the description property on model metadata, but is limited to only the first 200 characters."
  - Source: https://learn.microsoft.com/en-us/dax/dax-copilot (checked 2026-10-26)
  - Reasoning: Copilot inherits and utilizes existing description properties defined on tables, columns, and measures in model metadata to ground its answers.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Yes (preview)**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: yes, preview
  - Quote: "The model author uses the Prep data for AI feature and removes the Total GPM measure from the schema that Copilot receives."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-faq (checked 2026-10-26)
  - Reasoning: The AI data schema is an AI-specific product setting that removes fields from Copilot's reach; the schema page says a question on an excluded field shouldn't return an answer. Some surfaces (DAX, report creation) use the full model.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "This option allows a column or table to be omitted from Q&A, meaning it won't be shown and a result can't be displayed with this column."
  - Source: https://learn.microsoft.com/en-us/power-bi/natural-language/q-and-a-tooling-intro (checked 2026-10-26)
  - Reasoning: For the built-in Q&A natural-language analyst, Include in Q&A is an AI-specific setting that prevents an excluded table/column from appearing in results. This is a product setting, not a model instruction or ordinary data permission. Copilot’s separate AI-schema control has narrower coverage.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Ask a data question by using a field that isn't in the AI data schema. Copilot shouldn't return an answer."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-data-schema (checked 2026-10-26)
  - Reasoning: By defining an AI data schema that excludes specific fields, authors enforce negative context ensuring Copilot refuses to answer queries involving unselected fields.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly (preview)**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, preview
  - Quote: "Approve your data for Copilot: Semantic model authors can approve a model for use with Copilot in model settings."
  - Source: https://learn.microsoft.com/en-us/power-bi/explore-reports/copilot-chat-with-data-standalone (checked 2026-10-26)
  - Reasoning: Semantic model authors are named as owners of the AI context and can mark a model 'Approved for Copilot'. That approval covers the model's readiness; no review or approval step for individual changes to the context is documented.
- **GPT-6.1 Sol**: partly, preview
  - Quote: "AI instructions allow semantic model authors to provide context, business logic, and specific guidance directly on a semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: Semantic-model authors are the documented responsible role for business instructions, and testing before publication is described. No formal owner review/approval workflow for context changes is established beyond authoring and self-testing.
- **Gemini 3.8 Flash**: partly, preview
  - Quote: "AI instructions allow semantic model authors to provide context, business logic, and specific guidance directly on a semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-prepare-data-ai-instructions (checked 2026-10-26)
  - Reasoning: Semantic model authors and owners can directly define and update AI instructions on their models without central administrator intervention.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Not found** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents Copilot reading warehouse-level logic such as view definitions, dbt models or semantic views. semantic-models-third-party lists the supported third-party semantic models as SAP BW, SAP HANA and AtScale only. That excludes dbt Semantic Layer, Snowflake semantic views and Databricks metric views. However, SAP HANA and SAP BW are warehouse-side semantic layers, and Copilot over them is undocumented, so the inventory does not settle a no.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Power BI documents Copilot grounding on its semantic model and connections to warehouse data. No settling page shows built-in Copilot reading or using the underlying warehouse-level definition logic, such as dbt models or warehouse semantic-view definitions. Consuming modeled data alone does not establish this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Documentation in 'Semantic models and third-party compatibility' states that Power BI does not support third-party warehouse semantic models (such as dbt Semantic Layer, Snowflake semantic views, or Databricks metric views), and no documentation shows the built-in assistant reading warehouse-level logic.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Copilot writes DAX, measures and semantic-model objects inside Power BI. No page documents Copilot authoring a transform, model or view that lands in the warehouse or lakehouse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Copilot web modeling creates or edits Power BI semantic-model objects and DAX. No settling evidence shows that assistant authoring a transform, dbt model, or view that lands in the warehouse below Power BI. References to Copilot in other Fabric workloads do not establish a Power BI capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation shows Power BI's built-in assistant authoring warehouse-level logic (transforms, tables, views, or models) that lands below the BI tool in the warehouse.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The semantic-model-authoring skill and MCP servers let an outside agent discover a lakehouse schema (tables, columns, data types). That is names and types, not logic. No page shows an outside agent reading view definitions, dbt models or semantic views through Power BI.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The Power BI authoring MCP reads Power BI semantic models and TMDL; the consumption interface queries those models. No settling evidence exposes underlying warehouse view SQL, dbt model code, or warehouse semantic-view logic to an outside agent through Power BI. Model schemas and source connections alone are insufficient.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While outside agents can interact with Power BI semantic models via the Authoring MCP server, no documentation shows an outside coding agent reading warehouse-level logic (view definitions, dbt models, or semantic views) through Power BI.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Not found** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The Power BI Authoring MCP server and agent skills write semantic models, for example creating a Direct Lake model on a lakehouse. They do not author views, transforms or models in the warehouse. No page documents an outside agent writing warehouse logic through Power BI.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Documented outside-agent tools write Power BI models and reports, not warehouse-level transforms or views. No settling evidence provides a Power BI agent interface that authors warehouse logic. General data access, DAX execution, and application writeback do not establish that operation.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: The Power BI Authoring MCP server and agent skills allow outside coding agents to create and modify Power BI semantic models (DAX measures, tables, relationships), but do not document authoring warehouse-level logic that lands in the underlying warehouse.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Partly**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Power BI supports only the following third-party semantic models:"
  - Source: https://learn.microsoft.com/en-us/power-bi/connect-data/semantic-models-third-party (checked 2026-10-26)
  - Reasoning: Power BI consumes external semantic models only from SAP BW, SAP HANA (multidimensional) and AtScale. The same page names Cube, the dbt Semantic Layer and Snowflake semantic views and excludes them, so this is partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Then all the Key Figures and dimensions of the selected InfoCube/BEx Query are available in the field list."
  - Source: https://learn.microsoft.com/en-us/power-bi/connect-data/desktop-directquery-sap-bw (checked 2026-10-26)
  - Reasoning: Power BI consumes pre-existing SAP BW key figures and dimensions instead of rebuilding those metric definitions locally. The supported external semantic systems are SAP BW, SAP HANA, and AtScale; the documentation does not extend this support to dbt, Cube, or Snowflake semantic views, and lists SAP-specific limitations.
- **Gemini 3.8 Flash**: no
  - Quote: "Power BI supports only the following third-party semantic models:"
  - Source: https://learn.microsoft.com/en-us/power-bi/connect-data/semantic-models-third-party (checked 2026-10-26)
  - Reasoning: The documentation explicitly limits third-party semantic model support to an exclusive list (SAP BW, SAP HANA, AtScale), excluding dbt, Cube, Snowflake semantic views, and Databricks metric views.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Yes** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Copilot can answer questions by using existing measures and columns in your semantic model."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: Copilot answers from the measures, columns and relationships defined in the shared semantic model.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Fabric IQ uses the measures, relationships, and business definitions in your semantic model to answer questions."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The built-in report Copilot’s Fabric IQ answering path uses the shared model’s measures, relationships, and business definitions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Fabric IQ uses the measures, relationships, and business definitions in your semantic model to answer questions."
  - Source: https://learn.microsoft.com/en-us/power-bi/create-reports/copilot-ask-data-question (checked 2026-10-26)
  - Reasoning: The built-in assistant leverages shared semantic definitions, measures, and relationships stored in the semantic model to formulate query answers.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Yes (preview)** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: yes, preview
  - Quote: "Create, update, and manage tables, columns, measures, and relationships by using natural language"
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/copilot-web-modeling (checked 2026-10-26)
  - Reasoning: Copilot in web modeling (preview) creates and edits measures and relationships directly in the semantic model.
- **GPT-6.1 Sol**: yes, preview
  - Quote: "- Create, update, and manage tables, columns, measures, and relationships by using natural language"
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/copilot-web-modeling (checked 2026-10-26)
  - Reasoning: Built-in web-modeling Copilot can change semantic-layer measures, dimensions/columns, and relationships directly, not just their descriptions.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "Create, update, and manage tables, columns, measures, and relationships by using natural language"
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/copilot-web-modeling (checked 2026-10-26)
  - Reasoning: Copilot in web modeling allows authors to create and update shared measures, calculated columns, and relationships in natural language.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, preview
  - Quote: "The Get Semantic Model Schema tool retrieves comprehensive metadata for a Power BI semantic model, including tables, columns, measures, relationships, and any AI-optimized metadata that the model author configured."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-get-started (checked 2026-10-26)
  - Reasoning: Through the vendor's MCP server, an outside agent can read the semantic model's measures and relationships along with author-provided context such as descriptions and AI tooling metadata. The GA local Authoring MCP also reads models.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "An AI agent can use the Power BI Authoring MCP server to read and write Power BI semantic models."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/mcp-servers-overview (checked 2026-10-26)
  - Reasoning: The generally available local authoring server reads model definitions; its documentation describes DAX inspection, existing model descriptions, and plain-business documentation. The schema/scanner interfaces also expose semantic metadata, so outside agents can read field meaning rather than just database names.
- **Gemini 3.8 Flash**: yes, preview
  - Quote: "The Get Semantic Model Schema tool retrieves comprehensive metadata for a Power BI semantic model, including tables, columns, measures, relationships, and any AI-optimized metadata that the model author configured."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/remote-mcp-server-get-started (checked 2026-10-26)
  - Reasoning: Outside agents retrieve semantic model schema, measures, and relationships via the Get Semantic Model Schema MCP tool.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Yes** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Create, update, and delete tables, columns, measures, relationships, hierarchies, calculation groups, perspectives, and security roles."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/mcp-servers-overview (checked 2026-10-26)
  - Reasoning: The Power BI Authoring MCP server (local is GA) lets an outside agent write to the semantic layer.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "- Create, update, and delete tables, columns, measures, relationships, hierarchies, calculation groups, perspectives, and security roles."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/mcp-servers-overview (checked 2026-10-26)
  - Reasoning: The first-party authoring MCP tools let an outside agent write shared Power BI semantic-layer objects. The local deployment is generally available.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Power BI Authoring MCP server gives an AI agent the tools to create and change Power BI semantic models."
  - Source: https://learn.microsoft.com/en-us/power-bi/developer/mcp/power-bi-authoring-mcp (checked 2026-10-26)
  - Reasoning: Outside agents can create, update, and refactor shared measures, columns, and relationships in semantic models using the Authoring MCP server.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Partly**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Content creators who make Power BI semantic models can use OneLake integration to write model tables to Delta tables in OneLake."
  - Source: https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-integration-with-other-services (checked 2026-10-26)
  - Reasoning: OneLake integration writes a semantic model's tables out to Delta tables in OneLake, reachable from a lakehouse or a data warehouse through shortcuts. So data modeled in Power BI can live in the warehouse layer. What is written is the materialized table data, not the definitions themselves (measures, relationships or calculation logic as views or models), so this covers only part of the row. This guidance page has no preview label.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: OneLake integration copies semantic-model table data to Delta tables accessible from a lakehouse. The page does not establish exporting maintained calculation or semantic definitions as warehouse-resident logic. Copying table data and pushing query execution down to a source do not settle the requested movement of definitions.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Content creators who make Power BI semantic models can use OneLake integration to write model tables to Delta tables in OneLake."
  - Source: https://learn.microsoft.com/en-us/power-bi/guidance/powerbi-implementation-planning-integration-with-other-services (checked 2026-10-26)
  - Reasoning: OneLake integration allows semantic model tables modeled in Power BI to be written out as Delta tables in OneLake, which can then be accessed by warehouses or lakehouses via shortcuts. However, this exports materialized table data rather than pushing view or metric definitions back down to the warehouse.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Yes**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can add DAX query scoped measures to the model using CodeLens update model actions or the Update model with changes button."
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/dax-query-view (checked 2026-10-26)
  - Reasoning: A measure written for a single DAX query, including one Copilot generated, can be promoted unchanged to a shared model measure with one action.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The Update model with changes button adds or overwrites model measures with the DAX formulas from the DAX query scoped measures."
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/dax-query-view (checked 2026-10-26)
  - Reasoning: A calculation first defined for an ad hoc DAX analysis can be saved directly as a maintained semantic-model measure using Update model/CodeLens, without rewriting it in another language.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Update model with changes button adds or overwrites model measures with the DAX formulas from the DAX query scoped measures."
  - Source: https://learn.microsoft.com/en-us/power-bi/transform-model/dax-query-view (checked 2026-10-26)
  - Reasoning: Calculations evaluated in DAX query view can be promoted directly into persistent model measures using the 'Update model with changes' button.

