# Redshift: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/redshift/

AI Feature Score **37**, #14 of 15 (Data platform). Built-in AI 23, external AI 41, other 41. Analysis 22, Building and maintaining assets 34, Context and connections 53, Reliability and controls 41. By model: Claude Opus 5.5 37, GPT-6.1 Sol 38, Gemini 3.8 Flash 36.

## Score breakdown

Four areas, 25 points each. Shown for Claude Opus 5.5, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 5.6 of 25
- Building and maintaining assets: 8.5 of 25
- Context and connections: 13.3 of 25
- Reliability and controls: 10.1 of 25

**Strengths**

- It hands back when unsure
- An admin can fence what the AI may touch
- Outside agents read warehouse logic

**Not found in the docs**

- The assistant's changes can require approval
- Outside agents read saved content
- Your access rules bind the assistant

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Yes** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You provide questions in a prompt field and Amazon Q generative SQL responds with suggested SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: Amazon Q generative SQL is the built-in assistant in query editor v2. It writes a working query from a plain-English question; the tutorial shows 'How many venues are there?' producing SELECT COUNT(*). Under the row guidance, writing the query from a description counts as yes even inside a code editor. No preview label appears on the page or its parent section.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You provide questions in a prompt field and Amazon Q generative SQL responds with suggested SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: The built-in Q assistant produces SQL from a question; the parent page explicitly supports English natural-language analysis requests.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You provide questions in a prompt field and Amazon Q generative SQL responds with suggested SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: In Amazon Redshift query editor v2, Amazon Q generative SQL allows users to type natural-language questions in a prompt field and generates working SQL queries against the connected database.

### I3: Can you refine the answer by carrying on the conversation?

**Result: Yes** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Iteratively ask follow-up questions to get more detailed analysis from the assistant."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The page goes on with an example of a follow-up that relies on the earlier answer: ask 'which state has the most venues?' and then 'which is the most popular venue from this state?'. It also says to correct a query with an instruction such as 'Provide venues from year 2008.' instead of restating the request. So the assistant keeps the conversation thread.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Iteratively ask follow-up questions to get more detailed analysis from the assistant."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The page demonstrates a follow-up about the most popular venue in the state identified by the preceding answer.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Iteratively ask follow-up questions to get more detailed analysis from the assistant."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The documentation instructs users to refine answers by iteratively asking follow-up questions in the chat panel (e.g. asking which state has the most venues, then asking for the most popular venue from that state).

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Yes** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: The assistant's answer is the SQL query itself. The user sees it in the chat panel and can add it to the notebook before running it, so the query behind the answer is always exposed.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You provide questions in a prompt field and Amazon Q generative SQL responds with suggested SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: The assistant exposes the actual generated SQL, which the user can inspect and execute in a notebook.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "It's a coding assistant that generates SQL statements based on your prompts and database schema."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The assistant returns generated SQL queries directly to the user in the chat panel, exposing the analytical steps and query logic.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Not found** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The built-in assistant (Amazon Q generative SQL in query editor v2) responds with suggested SQL only. No page documents a field, table or metric list attached to the answer apart from the generated query text, which the sheet credits to V3.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q returns generated SQL, but no answer-attached list or citation of specific tables, columns or metrics is documented. Names inside its SQL establish analytical steps, not field citations.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL responds with suggested SQL in the chat panel; it does not provide an attached list or citation of specific tables, columns, or metrics separately from the generated query text.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Not found** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Amazon Q generative SQL only works on data already stored in the connected database. The overview page says questions 'must be in reference to data that is stored in the connected database'. No page ties an uploaded CSV or spreadsheet to the assistant. A generic local-file load page does not count.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Query editor v2 can load local CSV files into warehouse tables. The upload page does not connect that workflow to analysis by Amazon Q, and the assistant pages document no CSV or spreadsheet attachment analysis.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While users can load CSV files into warehouse tables via query editor v2 using COPY, the built-in AI cannot directly accept or analyze an uploaded spreadsheet or CSV in the chat panel.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Not found** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The only built-in AI is Amazon Q generative SQL, which generates SELECT SQL. The example page shows it warning on and failing to produce data-changing SQL. No page documents it cleaning or reshaping data and leaving transformation logic.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q generates inspectable SQL, but the documentation does not establish AI-driven cleaning or reshaping. Ordinary SQL transformations and load-conversion options do not establish that the assistant performs this task.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL generates SELECT queries to retrieve data; it does not clean or reshape data or generate inspectable data transformation pipelines.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Not found** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: unsettled
  - Reasoning: The same page (query-editor-v2-generative-ai.html) says two conflicting things. A consideration says questions 'cannot reference an external schema' and must be about data in the connected database. But the custom-context field AdditionalTables 'allows the Amazon Q generative SQL to integrate external data sources into its SQL generation logic'. No page shows the assistant actually combining two sources in one analysis.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: AdditionalTables supplies external table definitions as SQL-generation context. No documented analysis combines two distinct data sources; the tutorial joins tables within one database. The same assistant page also limits questions to the connected database and excludes external schemas.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL only supports querying data stored in the connected database and explicitly cannot reference external schemas or blend distinct external sources in one analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Not found** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Amazon Q generative SQL returns suggested SQL, and its Add to notebook action adds a Markdown cell and a SQL cell. No page documents the assistant choosing or creating a chart.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Query editor v2 charts are configured by the user after running SQL. No page documents Amazon Q choosing a visualization appropriate to the question or creating that visualization itself.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL only generates SQL queries; visualizations in query editor v2 are manually created and configured by the user via the Chart panel.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents Amazon Q generative SQL breaking a change into contributing segments. Redshift ML functions a user calls in SQL do not count.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented Amazon Q workflow breaks a change into contributing factors with checkable contributions. General query analysis and database-performance recommendations do not establish this analytical task for the built-in assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL does not perform root-cause analysis or break down contributing factors with calculations a user can check.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Not found** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Forecasting appears only in Redshift ML (CREATE MODEL use cases), which a user runs in SQL. Under the grading standard this is a function, not the assistant. No page says Amazon Q generative SQL produces forecasts.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Redshift documents forecasting through user-invoked SQL and ML features. No documentation connects those features to Amazon Q producing a forecast, with or without inspectable assumptions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documented capability exists for Amazon Q generative SQL to generate forecasts and expose their assumptions. Redshift ML supports FORECAST model creation via SQL DDL, but per the grading standard, SQL functions called by users do not count as assistant capabilities.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents the built-in assistant computing what-if scenarios with stated assumptions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The assistant tutorial discusses assumptions about a question, but does not calculate what-if scenarios. No documented workflow compares multiple scenarios with their changed assumptions and calculated outcomes.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL does not calculate or compare what-if scenarios with stated assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Amazon Q generative SQL has a 'Refresh database' action for the schema metadata it uses. No page says an answer exposes the age or last-refresh time of the data. The SYS table publishing 'last ingest time' in the agent skill is about log tables, not AI answers.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Refresh database updates the schema metadata used by Amazon Q. It does not expose the freshness or staleness of the answer's underlying data at the point of use.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL responses do not expose the age, freshness, or last-refresh timestamp of the underlying data.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If the generated SQL query has errors or does not match your intent, provide instructions to the assistant on how to correct it instead of rephrasing the entire request."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Amazon Q generative SQL works on its previously generated SQL in the notebook's chat panel and revises it on instruction. That is SQL in the editor or notebook, not the calculation behind a chart in BI content, so per the row it is partly. (The quoted sentence spans soft-wrapped lines on the page.)
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "If the generated SQL query has errors or does not match your intent, provide instructions to the assistant on how to correct it instead of rephrasing the entire request."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Q can work from and correct its previous generated SQL in the editor conversation. This is inspection of SQL analyst work; reading the calculation behind a chart in published BI content is not documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "If the generated SQL query has errors or does not match your intent, provide instructions to the assistant on how to correct it instead of rephrasing the entire request."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Amazon Q generative SQL can read, iterate upon, and correct its previously generated SQL queries in the notebook chat editor when given instructions by the user, but this inspects SQL in editor/analyst work rather than reading calculations behind charts in published BI content.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: The assistant writes SQL into a query editor v2 notebook cell, which is analyst work. The row guidance makes that partly. It is not documented writing the calculation behind a chart in BI content.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: The assistant authors a query directly into a notebook SQL cell. The row explicitly credits editor/notebook SQL as partial scope; persistent viewer-facing BI content is not established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: Under the guidance rule ("Writing SQL in an editor, worksheet or notebook cell is partly"), the assistant writes suggested SQL into a notebook cell in query editor v2.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Not found** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor API, CLI, MCP server or skill returns the calculation behind a query editor v2 chart.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The corpus documents chart creation and SQL notebook permissions, but no outside API, CLI, MCP tool or skill retrieves the calculation behind a particular saved BI chart. General SQL access is not access to that chart's calculation.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No interface is documented allowing an outside coding agent to retrieve the calculation behind a specific chart or table in BI content in Redshift.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Not found** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor interface for an outside agent to change a chart calculation in BI content is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The corpus documents user-configured charts, but no outside API, CLI, MCP tool or skill changes the calculation behind a particular saved BI chart. Executing arbitrary SQL does not establish chart editing.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No interface is documented allowing an outside coding agent to write or modify the calculation behind a specific chart or table in BI content in Redshift.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Not found** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The assistant works in a notebook chat panel and generates new SQL. No page says it opens existing BI content or existing notebooks and works from what they show.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q is launched while a notebook is open and generates SQL from prompts and database schema. No page establishes that it reads and works from an existing notebook's contents or existing BI content; merely opening the notebook does not establish that reading.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Redshift has no published BI content (dashboards, reports, or read-only viewer apps) for the assistant to open and work from; query editor v2 notebooks and worksheets are editable analyst work.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Partly** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: What the assistant produces persists only as notebook cells, which is analyst work. Under the row guidance that is partly. It is not documented building governed BI content.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: Q directly creates persistent notebook cells that can be saved/versioned and shared. These are analyst work; publication as governed BI content for viewers is not documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: Under the guidance rule ("Analyst work only (a notebook, a SQL file) is partly"), Amazon Q generative SQL builds and adds cells into a notebook (analyst work) rather than persistent governed BI content.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Not found** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor API, CLI, MCP server or skill reads saved query editor v2 content (charts, saved queries, notebooks).
- **GPT-6.1 Sol**: nothing found
  - Reasoning: IAM documentation lists notebook permissions and retrieval of notebook-version cells, but no supported outside API, CLI, MCP or skill for that retrieval is documented. Query editor permission-only actions cannot by themselves establish a programmatic content-reading route.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No API, CLI, or MCP interface is documented for an outside coding agent to read the contents of published BI content in Redshift.

### D_OW: Can an outside coding agent build BI content?

**Result: Not found** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor interface for an outside agent to create BI content is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: IAM policies list notebook-creation permissions, but the corpus does not document an outside interface that creates persistent saved notebook or BI content. Running SQL through the Data API does not create a saved analytical asset.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No programmatic interface is documented for outside coding agents to build and publish governed BI content in Redshift.

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Not found**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The AI does not build BI content. It suggests SQL that a person adds to a notebook, so nothing here is AI-created under the row's definition.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q writes suggested SQL into editable notebooks, which can be shared with a team. These notebooks are analyst work, and no documented AI-created BI content is shared with results evaluated under each viewer's permissions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift does not have AI-created BI content (reports or dashboards) that can be shared with viewers seeing data evaluated under their own permissions.

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Partly**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You can share your queries with your team."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-query-share.html (checked 2026-10-26)
  - Reasoning: Team members can see queries shared with their team, where the team is set by the sqlworkbench-team principal tag. That is explicit team sharing, not workspace-wide browse or search, and nothing mentions AI-created work, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "- You can view queries that are My queries, Shared by me, or Shared to my team. These queries can appear as individual queries or within folders you created."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-save-queries.html (checked 2026-10-26)
  - Reasoning: Users can browse saved queries shared to their team, whose membership is controlled through the sqlworkbench-team principal tag. This establishes limited team discovery, but not workspace-wide browse or search covering colleagues' AI-created analytical assets.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can use these tags when setting up custom IAM policies or to search for resources."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-getting-started.html (checked 2026-10-26)
  - Reasoning: Query editor v2 resources (saved queries and charts) support tags that permitted users can use to search for resources across the workspace.

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Not found** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The administrator's custom context applies per cluster/workgroup resource. No page documents saving a named assistant with its own instructions, data and permissions that colleagues reuse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: An administrator can upload custom context for Amazon Q. No saved, separately configured assistant with its own instructions, data, permissions and colleague-reuse workflow is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift does not support saving custom built-in assistants configured with their own instructions, data, and permissions for colleagues to reuse.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Not found** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Scheduling exists only for ordinary queries (for example via SageMaker Unified Studio/MWAA). No page documents the AI or an agent rerunning an analysis on a schedule.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Redshift schedules ordinary SQL queries, and its Unified Studio overview mentions SQL scheduling alongside natural-language SQL generation. No page documents Amazon Q setting up a schedule or an AI agent rerunning an analysis and delivering results unattended.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No AI or agent feature was found that reruns a defined analysis on a schedule or trigger and delivers fresh results or alerts. Redshift supports scheduled SQL queries through query editor v2 and EventBridge, but these are ordinary cron schedules not driven or run by AI or agents.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Partly** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "You provide questions in a prompt field and Amazon Q generative SQL responds with suggested SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: The built-in AI (Amazon Q generative SQL) produces suggested SQL that the user adds to the notebook and runs. The overview page says 'Review the generated SQL before running it to ensure accuracy.' Per the row, generating code a person must then run is partly. No notification, webhook or autonomous write is documented. The page has no preview label.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: Amazon Q generates code that a person adds to a notebook, reviews and runs. This meets the row's explicit partial-credit rule for generated code requiring human execution; autonomous notifications, external calls or destination writes are not established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: Under the guidance rule ("Generating code a person must then run is partly"), Amazon Q generative SQL generates code into notebook cells which a user must then review and run.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Yes** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "I generated SQL, but you'll have to edit it to work with your database."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-example.html (checked 2026-10-26)
  - Reasoning: In the official tutorial, when Amazon Q generative SQL cannot produce valid SQL, it stops and tells the user in the chat to take over the edit. For an unknown entity it says 'I was not able to generate any SQL'. This hand-back happens only inside the conversation, like a clarifying exchange. No notification, review queue or pause awaiting another person's decision is documented, so the row is partly rather than yes.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "In this case, it gives you a message that it was not able to generate SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-example.html (checked 2026-10-26)
  - Reasoning: The built-in assistant stops without generating SQL when the question refers to nonexistent widgets and notifies the person with an inability message. This documents the failure-notification form of handing control back to the user.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "In this case, it gives you a message that it was not able to generate SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-example.html (checked 2026-10-26)
  - Reasoning: The official tutorial documents that when Amazon Q generative SQL cannot generate SQL because the request refers to nonexistent entities (widgets), it stops and notifies the user with an inability message ('I was not able to generate any SQL'), documenting the failure-notification hand-off to the user.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Not found** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Redshift documents only one built-in assistant and no way to configure agent-to-agent delegation.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No customer-configurable delegation from one built-in Redshift agent to another named agent, with bounded tools and permissions, is documented. The external AWS agent skill does not establish built-in agent delegation.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No capability was found allowing a customer to configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions in Redshift.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents attaching external tools or MCP servers to Amazon Q generative SQL. The only MCP mention is an AWS agent skill that recommends the AWS MCP server for an outside agent, which is the opposite direction.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The AWS skill mentions an MCP server for an outside agent. No documentation attaches external MCP servers or tools to Redshift's own Amazon Q SQL assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL does not support connecting out to customer-configured external tools or MCP servers.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Not found** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents the AI finding or repairing BI content affected by a data or definition change.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The assistant can receive SQL errors as prompts, but no page documents it identifying BI content affected by a schema or definition change and repairing it or flagging it to an owner.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No capability was found where the AI or an agent finds and fixes BI content affected by schema or definition changes.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Not found** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Redshift documents no generated apps.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q is documented as a notebook SQL assistant. No page establishes it reading an existing generated app's definition, code, layout or rendered output.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift has no generated application feature; the built-in assistant cannot read generated applications.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Not found** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents the assistant building a persistent governed app.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No first-class app-generation workflow for the built-in assistant is documented. Building an application with Redshift ML or Bedrock is a customer-built application path, not an app the Redshift assistant creates and governs.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift has no generated application feature; the built-in assistant cannot build persistent governed applications.

### A_OR: Can an outside coding agent read a generated app?

**Result: Not found** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Redshift documents no generated apps to read.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No Redshift-generated app definition or outside interface for retrieving one is documented. Identity Center application administration and database access APIs concern different objects.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift has no generated application feature; outside coding agents cannot read generated apps.

### A_OW: Can an outside coding agent build a generated app?

**Result: Not found** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor interface for an outside agent to build a generated app is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No outside interface for building or deploying a first-class generated Redshift app is documented. The application API matches concern IAM Identity Center integration, not generated analytical apps.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift has no generated application feature; outside coding agents cannot build generated apps.

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: Not found** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: CuratedQueries are examples that guide generation, not a test suite. The only quality mechanism is a helpful/not helpful feedback icon, which does not count. No saved evaluation set, rubric or judge is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: CuratedQueries are examples supplied as generation context, not a documented evaluation suite. No saved benchmark cases, scoring rubric, judge or repeatable correctness run against Amazon Q answers is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No evaluation system (saved test questions, rubrics, or model judges) is documented for testing the accuracy of Amazon Q generative SQL answers. Only a thumbs up/down feedback icon is provided, which per sheet rules does not count.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: No** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The settings page offers Free versus Pro tier, which is not a model choice. The cross-region page covers routing, not model selection. No page names a model version or says the customer cannot choose.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The corpus documents Amazon Q tiers and Redshift ML model choices, but no choice or fixed-version pin for the built-in SQL assistant's model. It also contains no explicit statement establishing that customers cannot choose one.
- **Gemini 3.8 Flash**: no
  - Quote: "Amazon Q Developer is powered by Amazon Bedrock, and uses cross-region inference to distribute traffic across different AWS Regions to enhance large language model (LLM) inference performance and reliability."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: Model selection and inference are managed entirely by AWS and Amazon Bedrock with no customer option to pin or choose specific model versions.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Partly** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: The prompt and the generated query can be kept together in the notebook. The model, configuration and data snapshot are not documented as preserved, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: The user can preserve the prompt and generated query together. Model version, complete generation configuration, and a data snapshot are not documented as preserved.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Choose Add to notebook to add a Markdown cell with your prompt and a SQL cell with the suggested SQL to your notebook."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-interact.html (checked 2026-10-26)
  - Reasoning: Users can preserve the prompt and the suggested SQL query together as Markdown and SQL cells in a query editor v2 notebook, keeping the analytical logic and input text, but model versions, configuration snapshots, and data state are not documented as preserved.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Partly** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "It learns from these errors to produce better SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Submitting error text back to Amazon Q generative SQL is documented to improve its later SQL. The docs do not say how far the learning reaches (that user, others, or the account), so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "It learns from these errors to produce better SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The preceding sentence tells users to submit execution errors back to Q. The documentation says this improves later SQL but does not specify persistence or reach beyond that interaction.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "It learns from these errors to produce better SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Submitting error text back to Amazon Q generative SQL enables it to learn from errors to produce better SQL in later answers, but the documentation does not state the reach (whether it affects only that session, user, or account), earning partly under the guidance rule.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Not found** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Redshift has no certified BI content or governed metrics that the assistant is bound to. CuratedQueries only guide generation, and no rule prevents or flags a mismatch.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: CuratedQueries guide SQL generation by example. No page binds Amazon Q answers to certified content or governed metrics, checks mismatches, or marks answers as verified against such definitions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation was found indicating that Amazon Q generative SQL is bound to or checked against certified content or governed metrics, or that departures are prevented or flagged. CuratedQueries in custom context serve only as reference prompt examples.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Partly** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When using Amazon Q Developer Free tier, the total number of prompts of all users of an AWS account is limited to 1,000 in a month."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-settings.html (checked 2026-10-26)
  - Reasoning: A fixed prompt allocation limits use of the built-in AI: 1,000 per account on the Free tier, 1,000 per user on Pro. It is set by the plan tier, not a cap the customer configures, so this is partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "When using Amazon Q Developer Pro tier, the total number of prompts that any individual user can submit is limited to 1,000 in a month."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-settings.html (checked 2026-10-26)
  - Reasoning: The built-in Q integration enforces a monthly submission limit, satisfying the row's hard AI-usage-limit criterion. The Free tier is capped at 1,000 prompts across the account. These are fixed prompt caps; a configurable dollar budget is not documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When using Amazon Q Developer Free tier, the total number of prompts of all users of an AWS account is limited to 1,000 in a month."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai-settings.html (checked 2026-10-26)
  - Reasoning: A fixed prompt allocation caps built-in AI usage (1,000 prompts per month for all users on Free tier, or 1,000 per user on Pro tier) and blocks usage once reached, but this cap is determined by the tier allocation rather than a customer-configured budget limit, earning partly.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Not found** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents measuring Amazon Q generative SQL response time by agent, model or evaluation run.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Database query timings and ML inference performance are documented, but no customer-visible measurement of Amazon Q response time by agent, model or evaluation run is established.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No feature is documented allowing customers to measure the built-in AI's response time on their own workload by agent, model, or evaluation run.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Not found** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The settings page shows 'the number of prompts left in your allocation' and states per-tier limits. It documents no per-user, team or workspace breakdown of AI consumption.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The settings page shows remaining prompt allocation and describes account or per-user tier quotas. It does not document a consumption breakdown attributable to individual users, teams or workspaces.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No consumption reporting broken down by user, team, or workspace was found for the built-in AI. The generative SQL settings page displays only the remaining prompt allocation (e.g. 1,000 prompts per month for the account on Free tier).

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Not found** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: CloudTrail logs all query editor v2 actions, but that is a general product audit log. No page shows it distinguishing assistant prompts or the objects the assistant touched, so per the row it is insufficient.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: CloudTrail records general query-editor actions, but the documentation does not establish an assistant-specific record containing its prompt or generated query, affected analytical objects and asking user.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No audit logging was found that logs the built-in assistant's prompts, suggested queries, and touched analytical objects attributed to the user. General database and CloudTrail logs record executed SQL queries and API calls, not assistant chat interactions.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Yes** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To use Amazon Q generative SQL, you need permission `sqlworkbench:GetQSqlRecommendations` in your IAM policy, in addition to other permissions specified in the AWS managed policy for query editor v2."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Admins turn the chat capability on for the account in the Generative SQL settings. Each user also needs the dedicated IAM permission sqlworkbench:GetQSqlRecommendations, which can be granted to or withheld from particular IAM users, groups or roles.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "To use Amazon Q generative SQL, you need permission `sqlworkbench:GetQSqlRecommendations` in your IAM policy, in addition to other permissions specified in the AWS managed policy for query editor v2."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: In addition to the account-wide switch, an AI-specific IAM permission gates Q access for individual IAM identities; administrators can grant it to selected users/roles.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "To use Amazon Q generative SQL, you need permission `sqlworkbench:GetQSqlRecommendations` in your IAM policy, in addition to other permissions specified in the AWS managed policy for query editor v2."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Administrators can enable or disable AI features for specific users or groups by granting or withholding the sqlworkbench:GetQSqlRecommendations IAM permission.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The assistant only suggests SQL, which the user adds to their own notebook. No approval step for assistant changes to governed assets is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Users review and run suggested SQL themselves. That acceptance is expressly insufficient for this row, and no documented approval hold routes an assistant change to governed content or shared definitions to another person or role.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No human approval workflow was found for changes made by the built-in assistant to governed analytical assets. Amazon Q generative SQL only generates SQL queries for user review in query editor v2 notebooks.

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Partly**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "For example, a request made from a Amazon Q Developer profile created in the US is kept within the AWS Regions in the US."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: The Redshift generative SQL page links to this page for where data is processed. The geography where the customer creates its Amazon Q Developer profile decides which set of regions handles inference. That is a region choice, not inference running in the customer's own environment, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "With bring your own model (BYOM), you can use a model trained outside of Amazon Redshift with Amazon SageMaker AI for in-database inference locally in Amazon Redshift."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/machine_learning_overview.html (checked 2026-10-26)
  - Reasoning: Redshift ML lets the customer import a model for inference inside the warehouse, and the page also distinguishes remote SageMaker endpoints. This establishes location control for SQL ML only; customer control over Q generative SQL inference placement is not established.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The following table describes what Regions your requests may be routed to depending on the geography where the request originated."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: Customers control where inference occurs at the geography level based on where the Amazon Q Developer profile is created (e.g. requests originating in the US geography are routed only to US inference regions), but inference is hosted on AWS-managed Bedrock infrastructure rather than in the customer's own cloud tenant or environment.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The generative SQL pages do not say that the assistant answers under the asking user's identity, or that row-level or column-level security applies to what it returns. Custom context table and column exclusions are generation scope, not RLS/CLS.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: IAM permission to use Amazon Q and its connected-database scope are documented. No statement establishes that the assistant answers under the asking user with existing row-level security and column permissions applied to its returns.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL generates SQL query text based on schema definitions; it does not execute queries or return data under the user's identity subject to row-level security or column-level privileges in its responses.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Partly**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Amazon Q Developer is powered by Amazon Bedrock, and uses cross-region inference to distribute traffic across different AWS Regions to enhance large language model (LLM) inference performance and reliability."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: The docs name the receiving services (Amazon Q Developer, powered by Amazon Bedrock). They also say what is sent: the Redshift page says 'Your input is used as contextual prompts to the FM', and this page says requests and output results may move between regions. Retention is not stated, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Amazon Q Developer is powered by Amazon Bedrock, and uses cross-region inference to distribute traffic across different AWS Regions to enhance large language model (LLM) inference performance and reliability."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: Q requests are routed to Amazon Bedrock for inference. The Redshift Q page says input is used as contextual prompts and identifies queries/data/schema as protected inputs, but these pages do not state retention duration for AI prompts/data.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Although cross-region inferencing doesn’t change where your data is stored, your requests and output results may move outside of the Region where the data originally resides."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: The documentation names the services (Amazon Q Developer / Amazon Bedrock) and describes data transferred (prompts and output results across regions), but omits data retention duration, earning partly under the guidance rule.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Partly**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Cross-region inference requests are kept within the AWS Regions that are part of the geography where the data originally resides."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: The page lists the processing regions for each geography for Amazon Q generative SQL. It defers storage location to another page outside the corpus, and it does not cover Redshift's other AI features. Processing only, for some features, is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Cross-region inference requests are kept within the AWS Regions that are part of the geography where the data originally resides."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: The page lists Q inference-region sets for the US, Europe, and Asia Pacific, including the Redshift integration. It does not give the storage-region details here or cover storage and processing for all Redshift AI features.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Cross-region inference requests are kept within the AWS Regions that are part of the geography where the data originally resides."
  - Source: https://docs.aws.amazon.com/amazonq/latest/qdeveloper-ug/cross-region-processing.html (checked 2026-10-26)
  - Reasoning: The documentation specifies the processing regions for cross-region inference by geographic region, but does not state the storage regions within this corpus, earning partly under the guidance rule ("processing without storage, is partly").

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Yes**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Your queries, data, and database schemas are not used to train a generative AI foundation model (FM)."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: A plain statement with no opt-out needed: customer queries, data and schemas are not used to train the model.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Your queries, data, and database schemas are not used to train a generative AI foundation model (FM)."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The built-in Q documentation states this protection without requiring an opt-out.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Your queries, data, and database schemas are not used to train a generative AI foundation model (FM)."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The documentation explicitly states that customer queries, data, and schemas are not used to train foundation models.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Yes** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This field is crucial when you want to limit the scope of SQL queries to a defined subset of available tables."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The query editor v2 administrator uploads a custom context for a cluster or workgroup. Its TablesToInclude, TablesToExclude, ColumnsToInclude and ColumnsToExclude fields limit which tables and columns the assistant considers. These are structured scope settings, separate from user permissions and from the free-text AppendToPrompt guardrails.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Specifies the set of tables that are excluded from SQL generation."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The administrator uploads warehouse custom context containing the product-defined TablesToExclude setting. It excludes tables from Q SQL generation independently of user database permissions; this is a dedicated exclusion field, not a free-text instruction.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The query editor v2 administrator can specify a custom context to tailor the generated SQL to your environment."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: An administrator can restrict the data the assistant considers across the warehouse resource using TablesToInclude, TablesToExclude, ColumnsToInclude, and ColumnsToExclude in custom context, separately from user permissions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can also create your own IAM policy that allows access to specific resources."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api-iam.html (checked 2026-10-26)
  - Reasoning: An outside agent calling the Data API can use its own IAM role. The policy can limit which Data API actions and which clusters or workgroups it may use, and the role maps to its own database user (IAMR:role) with its own grants. That gives the agent a scope narrower than the human's.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can also create your own IAM policy that allows access to specific resources."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api-iam.html (checked 2026-10-26)
  - Reasoning: An outside agent can use a dedicated IAM role/temporary database identity with a restricted Data API policy and database grants, rather than inheriting all of the human's access. The role mapping and RBAC tutorial show identity-specific restrictions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Use IAM roles or temporary credentials; avoid long-lived access keys."
  - Source: https://github.com/aws/agent-toolkit-for-aws/blob/main/skills/specialized-skills/system-table-skills/querying-aws-redshift/SKILL.md (checked 2026-10-26)
  - Reasoning: The documentation instructs that agents use IAM roles with temporary credentials scoped narrower than human credentials, avoiding broad long-lived keys.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Shows the definition of a view, including for materialized views and late-binding views."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_SHOW_VIEW.html (checked 2026-10-26)
  - Reasoning: An outside agent connected through Redshift's drivers or Data API can run SHOW VIEW and read a view's SQL. From that SQL it can infer the upstream tables and transformations. Redshift's metadata best-practices page recommends SHOW commands for 'tools, including those built with AI agents'. No dedicated lineage interface is documented, and per the row, reading a view's SQL and inferring its sources is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Shows the definition of a view, including for materialized views and late-binding views."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_SHOW_VIEW.html (checked 2026-10-26)
  - Reasoning: An outside agent using Redshift's SQL/Data API can inspect view SQL and infer its sources and transformations. This is view-definition inspection, not a documented traversal interface for lineage behind every number.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Shows the definition of a view, including for materialized views and late-binding views."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_SHOW_VIEW.html (checked 2026-10-26)
  - Reasoning: An outside agent using Redshift SQL drivers or the Data API can run SHOW VIEW to inspect view definitions and infer upstream source tables and transformations, but Redshift does not provide a dedicated programmatic lineage traversal interface.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Not found** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "When you connect to Amazon Redshift, set the optional application name driver property."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/discovering-metadata-application-name.html (checked 2026-10-26)
  - Reasoning: This page belongs to the metadata best-practices section, which addresses 'tools, including those built with AI agents'. An outside agent's connections can be tagged with an application name, which the same page says 'appears in the `application_name` column of `SYS_CONNECTION_LOG`' for auditing. That ties the agent's identity to its connections. The page does not record the analytical objects the agent affected, so this is partly.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: CloudTrail logs API caller identities, but the ExecuteStatement example omits the SQL. No documented outside-agent audit ties a delegated agent identity to the affected analytical objects; general API and user activity logs do not settle this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation was found describing audit logging of outside agent actions with the agent's identity and affected analytical objects. General database audit logging and CloudTrail record API calls and SQL queries, but not outside agent identities tied to analytical objects.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents holding an outside agent's change for approval by another person or role.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented outside-agent or MCP workflow holds a change to governed analytical content or shared definitions for approval by another person or role. Data API authorization controls access rather than approving individual changes.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documented workflow was found to hold an outside agent's change to a governed analytical asset for approval by a named human reviewer or role.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Not found** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents a before/after diff of changes to analytical assets, generic or agent-specific.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Saved SQL queries have version history, but no before/after diff for governed analytical assets is documented. There is also no documented diff covering changes made by an outside agent.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation was found for a reviewer before/after diff showing changes made by an outside agent to a governed analytical asset.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Not found** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Restores a table from a snapshot to your Amazon Redshift Serverless instance."
  - Source: https://docs.aws.amazon.com/redshift-serverless/latest/APIReference/API_RestoreTableFromSnapshot.html (checked 2026-10-26)
  - Reasoning: A table changed through any route, including an outside agent using the Data API, can be restored from a snapshot through the Redshift Serverless API. This is a generic restore. No page says it covers changes made specifically by an outside agent, so it is partly.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Query editor v2 can restore saved SQL query versions. These are analyst work, and no outside-agent interface or rollback of an agent's governed analytical asset change is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation was found for rolling back or reverting changes made by an outside agent to a governed analytical asset.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Not found** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The agent-toolkit SKILL.md only says it 'Works best with the AWS MCP server'. No page documents a Redshift MCP server, its tools or its authentication.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The AWS Redshift skill recommends the AWS MCP server, but the corpus gives no authenticated Redshift MCP setup, endpoint or supported access workflow. A mention without documented authentication does not establish this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: While SKILL.md in the AWS agent toolkit mentions working with the AWS MCP server, no vendor-supported MCP server giving outside agents access to Redshift analytical objects or data with documented authentication is documented in the Redshift corpus.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Yes** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "If neither `SchemaPattern` nor `TablePattern` are specified, then all tables in the database are returned."
  - Source: https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListTables.html (checked 2026-10-26)
  - Reasoning: Data API ListTables lists every table without knowing names in advance; ListDatabases and ListSchemas do the same for databases and schemas. The best-practices-discovering-metadata page recommends the driver metadata API and SHOW commands for tools 'including those built with AI agents'.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If neither `SchemaPattern` nor `TablePattern` are specified, then all tables in the database are returned."
  - Source: https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListTables.html (checked 2026-10-26)
  - Reasoning: An outside agent can enumerate the database table inventory through the authenticated Data API without knowing table names in advance.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "List the tables in a database."
  - Source: https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ListTables.html (checked 2026-10-26)
  - Reasoning: The Redshift Data API provides the ListTables operation (along with ListDatabases and ListSchemas) to allow outside agents to discover and enumerate tables without knowing their names in advance.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Yes** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "The Data API can use either credentials stored in AWS Secrets Manager or temporary database credentials."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html (checked 2026-10-26)
  - Reasoning: Programmatic access through the Data API has named credential types: a Secrets Manager secret, temporary IAM-derived credentials, or IAM Identity Center. The skill also tells agents to use IAM roles or temporary credentials.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "With this method, provide the `secret-arn` of a secret stored in AWS Secrets Manager which has `username` and `password`."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html (checked 2026-10-26)
  - Reasoning: The Data API documents Secrets Manager credentials for programmatic access and also documents IAM-derived temporary credentials; an outside agent can authenticate through these first-party routes.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "The Data API can use either credentials stored in AWS Secrets Manager or temporary database credentials."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html (checked 2026-10-26)
  - Reasoning: Outside agents programmatically authenticate with Amazon Redshift using named credential types including AWS Secrets Manager or temporary database credentials.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "You can also use AI agent skills for natural-language queries (see System table skills for AWS Agent Toolkit on the GitHub website)."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/system-table-s3-tables.html (checked 2026-10-26)
  - Reasoning: The Redshift docs point to an AWS-published SKILL.md (aws/agent-toolkit-for-aws, querying-aws-redshift). It gives outside agents instructions, a decision tree and constraints for enabling, checking and querying Redshift system-table logs. It is vendor-published, not community-built, and no preview label appears.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "You can also use AI agent skills for natural-language queries (see System table skills for AWS Agent Toolkit on the GitHub website)."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/system-table-s3-tables.html (checked 2026-10-26)
  - Reasoning: Redshift's documentation links the AWS-published Agent Toolkit skills. The captured querying-aws-redshift/SKILL.md packages instructions for outside agents querying Redshift system-table logs.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "You can also use AI agent skills for natural-language queries (see System table skills for AWS Agent Toolkit on the GitHub website)."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/system-table-s3-tables.html (checked 2026-10-26)
  - Reasoning: Official Redshift documentation explicitly references and links to packaged AI agent skills (querying-aws-redshift with SKILL.md) in the aws/agent-toolkit-for-aws repository.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "All commands below use the AWS CLI and work in any environment with configured AWS credentials."
  - Source: https://github.com/aws/agent-toolkit-for-aws/blob/main/skills/specialized-skills/system-table-skills/querying-aws-redshift/SKILL.md (checked 2026-10-26)
  - Reasoning: The AWS-published agent skill tells outside agents to drive Redshift through the AWS CLI (aws redshift / aws redshift-serverless). The next sentence covers non-interactive authentication: 'Use IAM roles or temporary credentials; avoid long-lived access keys.' So the vendor's CLI documentation addresses agent use.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "All commands below use the AWS CLI and work in any environment with configured AWS credentials."
  - Source: https://github.com/aws/agent-toolkit-for-aws/blob/main/skills/specialized-skills/system-table-skills/querying-aws-redshift/SKILL.md (checked 2026-10-26)
  - Reasoning: AWS's Redshift agent skill explicitly teaches CLI execution, recommends IAM roles or temporary credentials, and supplies aws redshift/redshift-serverless commands. It therefore documents an outside-agent CLI route with non-interactive credentials.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "All commands below use the AWS CLI and work in any environment with configured AWS credentials."
  - Source: https://github.com/aws/agent-toolkit-for-aws/blob/main/skills/specialized-skills/system-table-skills/querying-aws-redshift/SKILL.md (checked 2026-10-26)
  - Reasoning: The vendor-published agent skill explicitly documents using the AWS CLI for AI agents with non-interactive authentication.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Partly** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "To access the Data API, a user must be authorized."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api-access.html (checked 2026-10-26)
  - Reasoning: Admins can allow or deny access to the Data API, the programmatic interface outside agents use, per IAM user, group or role, separately from database grants. The control is not specific to agents or MCP, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "You can authorize a user to access the Data API by adding a managed policy, which is a predefined AWS Identity and Access Management (IAM) policy, to that user."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api-access.html (checked 2026-10-26)
  - Reasoning: An administrator can grant or withhold Data API access through IAM policies on users and roles assigned to groups. This provides partial control over the programmatic route an outside agent could use, separately from database grants, but no agent-specific or MCP-specific rollout control is documented.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "As a best practice, we recommend attaching permissions policies to an IAM role and then assigning it to users and groups as needed."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api-access.html (checked 2026-10-26)
  - Reasoning: Administrators can allow or deny access to the Redshift Data API (the programmatic interface used by outside agents) per IAM user, group, or role using IAM policies, separately from database permissions; this is a general API access control rather than an agent-specific access control, earning partly.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Partly** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Each API in the Redshift Data API has a transactions per second quota before throttling requests."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html (checked 2026-10-26)
  - Reasoning: A general per-API rate limit, plus caps on active queries and sessions, applies to any Data API caller, agents included. Nothing agent-specific is documented, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Each API in the Redshift Data API has a transactions per second quota before throttling requests."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html (checked 2026-10-26)
  - Reasoning: Outside agents using the first-party Data API are subject to its enforced API quotas. These are general interface quotas, not limits specific to agent-driven consumption.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "If the rate of request exceeds the quota, a `ThrottlingException` with HTTP Status Code: 400 is returned."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/data-api.html (checked 2026-10-26)
  - Reasoning: Under the guidance rule ("A general API rate limit that applies to agents is partly"), the Redshift Data API enforces request rate quotas that throttle agent requests with a ThrottlingException.

## Business context

### C4: Can you teach the AI about your business?

**Result: Yes**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "For example, if your business unit uses a unique way to calculate a value, for example "in manufacturing division total sales is price * revenue" this can be documented here."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The custom context fields CustomDocuments, TableAnnotations, ColumnAnnotations, CuratedQueries and AppendToPrompt let an admin record business definitions the schema does not hold. Amazon Q generative SQL, the vendor's assistant, uses them when generating SQL.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "A custom context provides domain knowledge and preferences to provide fine-grained control over SQL generation."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: For the built-in Q assistant, administrators can supply CustomDocuments, annotations, curated queries, and extra prompt guidance, including business-specific calculation definitions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A custom context provides domain knowledge and preferences to provide fine-grained control over SQL generation."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Administrators can upload a custom context JSON file providing business domain knowledge, custom documents, and table/column annotations that teach Amazon Q generative SQL about business logic.

### C5: Can the business context you give the AI live in version control?

**Result: Partly**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "A custom context is defined in a JSON file which can be uploaded by the query editor v2 administrator to Amazon Q generative SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The assistant's business context is a JSON file the admin uploads, so it can be kept and diffed outside the product. The docs describe no version control, review or rollback, so this is partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "A custom context is defined in a JSON file which can be uploaded by the query editor v2 administrator to Amazon Q generative SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The built-in assistant's business context is a JSON file, so the actual context artifact can be kept in version control, diffed, reviewed, and rolled back before uploading. A native Git integration is not claimed.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "A custom context is defined in a JSON file which can be uploaded by the query editor v2 administrator to Amazon Q generative SQL."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Custom business context for Amazon Q generative SQL is defined in a JSON file uploaded by an administrator, so it can be maintained, reviewed, and diffed in external version control systems, but version control, diffing, and rollback are not built into the product itself.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Yes**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "A resource specifies the scope or portion of a data asset to which the custom context is applied."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Each custom context entry is tied to a ResourceId, either a cluster id or a Serverless workgroup name. Different warehouses can therefore get different context for Amazon Q generative SQL instead of one tenant-wide set.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "A resource specifies the scope or portion of a data asset to which the custom context is applied."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Q custom context has separate resource entries identified by cluster ID or Serverless workgroup name. Teams using different warehouses can receive different context instead of a single tenant-global instruction set.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "A resource specifies the scope or portion of a data asset to which the custom context is applied."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Custom context is scoped to specific resources (cluster identifier or serverless workgroup name) rather than one global tenant-wide context.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Not found**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The administrator uploads custom context as a JSON file, and no preview, staging or validation step is documented before it takes effect.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q custom context can be uploaded as JSON, but no validation, staging, preview or test step for that context before it affects answers is documented. General advice to test generated SQL is a different object.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No validation, preview, staging, or test step is documented for custom context before it affects Amazon Q generative SQL answers.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Not found**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page says an answer surfaces which custom context instruction, annotation or curated query shaped it.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Custom documents, annotations and curated examples can influence Amazon Q generation, but no page documents an answer surfacing the particular instruction, description or example that shaped it.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL outputs only suggested SQL text in the chat panel; it does not cite or expose which specific piece of business context or custom annotation shaped its answer.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Not found**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The assistant's metadata 'includes the definitions of schemas, tables, and columns'. Annotations are retyped in the custom context JSON. No page says the assistant uses COMMENT ON descriptions or dbt docs.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q refreshes schema, table and column metadata, and administrators can upload annotations. No documentation says warehouse column comments, descriptions or dbt docs are ingested as business context without being re-entered.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL does not inherit warehouse column comments (COMMENT ON) or dbt docs as context; column and table annotations must be explicitly specified in the custom context JSON file.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Yes**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Use this when certain tables are irrelevant or should not be considered in the query generation process."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: TablesToExclude and ColumnsToExclude are structured settings specific to the AI that take tables or columns out of Amazon Q generative SQL's consideration. They are distinct from the free-text AppendToPrompt guardrails, which would count only as partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Specifies the set of tables that are excluded from SQL generation."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The TablesToExclude field is an AI-specific product setting in Q custom context; ColumnsToExclude likewise omits columns from generation. This goes beyond ordinary data permissions or a free-text request to avoid a field.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Specifies the set of tables that are excluded from SQL generation."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Custom context includes settings TablesToExclude and ColumnsToExclude that explicitly mark tables and columns off-limits to the AI during query generation.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Partly**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The query editor v2 administrator can specify a custom context to tailor the generated SQL to your environment."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The docs name an owner role, the query editor v2 administrator, for the assistant's business context. No review or approval step for changes is described, so this is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The query editor v2 administrator can specify a custom context to tailor the generated SQL to your environment."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: The query editor v2 administrator is the named role responsible for specifying the built-in Amazon Q assistant's business context. The documentation describes no review or approval step for context changes, so the named-owner portion earns partial credit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The query editor v2 administrator can specify a custom context to tailor the generated SQL to your environment."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/query-editor-v2-generative-ai.html (checked 2026-10-26)
  - Reasoning: Under the guidance rule ("A named owner role with no review step, or a review workflow with no named owner, is partly"), the documentation designates the query editor v2 administrator as the role that specifies and uploads custom context, but describes no review or approval workflow.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Not found** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The assistant reads schema, table and column definitions and optionally query history. No page says it reads view definitions or other warehouse logic.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q uses database schema and supplied context, but no page establishes that it reads warehouse view definitions, dbt models, UDF logic or warehouse semantic definitions. Schema metadata alone does not establish reading warehouse logic.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: No documentation was found indicating that Amazon Q generative SQL reads or interprets warehouse logic such as view definitions, dbt models, or semantic views.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The assistant warns on SQL that changes the database and in the tutorial fails to produce write SQL. No page shows it authoring views, models or transforms.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Amazon Q generates SQL suggestions, but the documentation does not show it authoring a transform, model or view that lands in the warehouse. The tutorial's attempted data-changing prompt produces a warning and invalid code rather than a working warehouse definition.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Amazon Q generative SQL only generates SELECT queries and explicitly issues warnings or inability messages when asked to perform DDL or DML that changes the connected database; it does not author warehouse transforms, models, or views.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Yes** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Shows the definition of a view, including for materialized views and late-binding views."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_SHOW_VIEW.html (checked 2026-10-26)
  - Reasoning: Redshift is the warehouse. An outside agent connected through the Data API or drivers can run SHOW commands, which the metadata-discovery best practices recommend for tools built with AI agents. SHOW VIEW returns the full definition of views and materialized views, which is warehouse logic rather than just names.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "Shows the definition of a view, including for materialized views and late-binding views."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_SHOW_VIEW.html (checked 2026-10-26)
  - Reasoning: Redshift exposes actual warehouse view definitions through SHOW VIEW. An outside coding agent can retrieve this logic over the first-party SQL interface/Data API, not merely table/column names.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "For applications and tools, including those built with AI agents, we recommend that you use the driver metadata API or `SHOW` commands for consistent, reliable, and performant metadata discovery."
  - Source: https://docs.aws.amazon.com/redshift/latest/mgmt/best-practices-discovering-metadata.html (checked 2026-10-26)
  - Reasoning: Redshift metadata discovery best practices explicitly recommend that tools and applications built with AI agents use SHOW commands (such as SHOW VIEW) or driver metadata APIs to discover warehouse metadata, allowing outside agents to retrieve the SQL definitions of views and materialized views.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Yes** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "Creates a view in a database."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_VIEW.html (checked 2026-10-26)
  - Reasoning: Redshift is the warehouse. An outside agent with Data API credentials can run CREATE VIEW and CREATE MATERIALIZED VIEW through ExecuteStatement, authoring logic that lives in the warehouse.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The following command creates or replaces a view called myuser from a table called USERS."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_CREATE_VIEW.html (checked 2026-10-26)
  - Reasoning: The documented CREATE OR REPLACE VIEW SQL interface authors persistent warehouse logic. An outside agent can submit that DDL through ExecuteStatement, subject to its database permissions.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "Runs an SQL statement, which can be data manipulation language (DML) or data definition language (DDL)."
  - Source: https://docs.aws.amazon.com/redshift-data/latest/APIReference/API_ExecuteStatement.html (checked 2026-10-26)
  - Reasoning: Outside coding agents can execute DDL statements (such as CREATE VIEW and CREATE MATERIALIZED VIEW) directly in Redshift via the Data API's ExecuteStatement action, authoring logic that lives in the warehouse.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Not found**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents importing metric definitions from dbt, Cube or semantic views.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Warehouse objects and external catalogs are documented, but no import or consumption of externally maintained metric definitions from dbt, Cube or semantic views is established.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift does not import or consume metric definitions maintained in dbt, Cube, or Snowflake semantic views.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Not found** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Redshift has no shared metric/dimension layer the assistant is documented to use. Custom context CustomDocuments are free-text hints (C4), not shared definitions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: CustomDocuments can express business calculation guidance, but that is prompt context. No documentation establishes Amazon Q consuming maintained metrics, dimensions and joins from a shared definition layer.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift has no shared metric definition layer or semantic layer for the built-in assistant to read.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents the assistant creating or editing metrics, dimensions, joins or descriptions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documentation establishes Amazon Q creating or editing shared metrics, dimensions or joins, or writing their descriptions. General SQL generation and administrator-authored custom context do not establish this assistant capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift has no shared metric definition layer or semantic layer for the built-in assistant to modify.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Yes** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "To view comments, query the PG_DESCRIPTION system catalog."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_COMMENT.html (checked 2026-10-26)
  - Reasoning: Redshift stores a persisted description for tables, views and columns through COMMENT ON. An outside agent connected through Redshift's drivers or Data API can read it back with PG_DESCRIPTION or col_description. The same page's example returns the EVENTID column's meaning, 'Foreign-key reference to the EVENT table.' SHOW COLUMNS also returns a 'remarks' attribute, and the metadata best-practices page recommends SHOW commands for 'tools, including those built with AI agents'. The agent therefore reads what a field means rather than guessing from its name.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "The following example displays a comment on the EVENTID column (column number 5) of the SALES table."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_COMMENT.html (checked 2026-10-26)
  - Reasoning: An outside agent using Redshift's SQL interface can retrieve persisted column meaning with col_description, rather than infer it from names and types. This page demonstrates reading the EVENTID column comment and returns its foreign-key definition; RSQL and Data API provide the documented programmatic SQL routes.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift has no shared metric definition layer or semantic layer for an outside coding agent to read.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Not found** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Creates or changes a comment about a database object."
  - Source: https://docs.aws.amazon.com/redshift/latest/dg/r_COMMENT.html (checked 2026-10-26)
  - Reasoning: An outside agent with object ownership or superuser rights can run COMMENT ON through Redshift's drivers or Data API to write a table's or column's shared description. That is writing descriptions only. No metric, dimension or join layer exists to edit, so by analogy with the M_IW guidance this is partly.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Redshift SQL can change warehouse objects and comments, but no documented outside interface creates or edits a shared semantic layer of metrics, dimensions or joins. General DDL execution does not by itself establish this object.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift has no shared metric definition layer or semantic layer for an outside coding agent to modify.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Not found**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents pushing definitions modelled in query editor v2 down as warehouse objects.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Query editor v2 creates warehouse tables and UDFs directly. No documented path pushes definitions already modeled in BI content or a shared BI layer down into warehouse definitions; ordinary warehouse object creation alone does not establish that transfer.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift is the warehouse itself and has no BI modeling tool pushing definitions down to the warehouse.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Not found**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No page documents a direct path in query editor v2 from a one-off query or calculation to a maintained shared definition, such as 'save as view'.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Saved queries can be shared, and users can create warehouse functions. No documented direct conversion promotes an analysis-specific calculation into a maintained shared definition; sharing SQL text is not that promotion path.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Redshift does not document a workflow to promote a one-off calculation into a maintained shared metric definition reused across the team.

