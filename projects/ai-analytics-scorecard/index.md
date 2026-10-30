# AI Feature Scorecard for Analytics and BI Tools

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/

Scored by LLM based on 28k pages of official public documentation.

This scores what each tool’s AI can do according to its public documentation. It does not test how good the answers are.

Judgments are AI generated.

## Scores

| # | Tool | Type | AI Feature Score | Built-in AI | External AI | Other |
|---|---|---|---|---|---|---|
| 1 | [Databricks](databricks/index.md) | Data platform | 89 | 85 | 91 | 97 |
| 2 | [Snowflake](snowflake/index.md) | Data platform | 88 | 86 | 89 | 85 |
| 3 | [Omni](omni/index.md) | BI and analytics tool | 85 | 81 | 85 | 88 |
| 4 | [Hex](hex/index.md) | BI and analytics tool | 81 | 80 | 67 | 76 |
| 5 | [Sigma](sigma/index.md) | BI and analytics tool | 75 | 73 | 78 | 74 |
| 6 | [BigQuery](bigquery/index.md) | Data platform | 73 | 68 | 61 | 79 |
| 7 | [Looker](looker/index.md) | BI and analytics tool | 72 | 58 | 80 | 74 |
| 8 | [Tableau](tableau/index.md) | BI and analytics tool | 68 | 60 | 59 | 74 |
| 9 | [Power BI](powerbi/index.md) | BI and analytics tool | 65 | 55 | 72 | 74 |
| 10 | [Metabase](metabase/index.md) | BI and analytics tool | 62 | 54 | 80 | 62 |
| 11 | [Alteryx](alteryx/index.md) | BI and analytics tool | 60 | 50 | 63 | 62 |
| 12 | [MotherDuck](motherduck/index.md) | Data platform | 59 | 36 | 83 | 74 |
| 13 | [Mode](mode/index.md) | BI and analytics tool | 44 | 18 | 57 | 65 |
| 14 | [Redshift](redshift/index.md) | Data platform | 37 | 23 | 41 | 41 |
| 15 | [Streamlit](streamlit/index.md) | BI and analytics tool | 6 | 1 | 17 | 6 |

Three AI models (Claude Opus 5.5, GPT-6.1 Sol and Gemini 3.8 Flash, all at high reasoning effort) read the official public documentation of all 15 tools, 28,214 pages, and answered the same 82 questions, quoting the page behind every answer that finds something. Each worked on its own. Each was then shown what the others found across all the tools and asked to re-check any answer it had marked nothing found. Only those answers could change. A tool’s score is the median of the three models’ scores.

Subscores

- Built-in AI (42 questions): what the tool’s own assistant and agents can do.
- External AI (23): what your own agent, such as Claude or ChatGPT, can do through the tool’s MCP server, CLI, API or agent skills.
- Other (17): business context, data handling and residency, and shared-definition and sharing questions.

Scoring

- Yes earns full credit, partly half, no or nothing found none.
- The score averages four equally weighted areas (analysis, building and maintaining assets, context and connections, reliability and controls), so the three subscores do not add up to it.
- A feature asked about both ways earns 85% of its points from the better route and 15% from the other.
- Only what a tool’s documentation says counts, including pages it links to. Code a vendor publishes elsewhere, such as on GitHub, does not count unless the docs point to it.
- Public preview features count the same as generally available ones, except for the MCP server question, where a preview earns partly. Private previews and roadmap items do not count.

## The 82 questions

### Ask and analyze

- **I2**: Can you ask the built-in assistant a question in plain English? _[Built-in AI]_ (area: Analysis)
  - What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.
- **I3**: Can you refine the answer by carrying on the conversation? _[Built-in AI]_ (area: Analysis)
  - What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.
- **V3**: Does the answer expose the query or analytical steps used to derive it? _[Built-in AI]_ (area: Analysis)
  - What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.
- **FIELDCITE**: Does the answer say which specific tables, columns or metrics it was built from? _[Built-in AI]_ (area: Analysis)
  - What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.
- **FILEUPLOAD**: Can the AI analyze a CSV or spreadsheet a user uploads? _[Built-in AI]_ (area: Analysis)
  - What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.
- **DATACLEAN**: Can the AI clean or reshape data while leaving inspectable transformation logic? _[Built-in AI]_ (area: Analysis)
  - What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.
- **MULTISOURCE**: Can the AI combine two or more data sources in one analysis? _[Built-in AI]_ (area: Analysis)
  - What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.
- **VIZCHOOSE**: Can the AI select and create a visualization suited to the analytical question? _[Built-in AI]_ (area: Analysis)
  - What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.
- **INVESTIGATE**: Can the AI identify what contributed to a change, with calculations a person can check? _[Built-in AI]_ (area: Analysis)
  - What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.
- **FORECAST**: Can the AI produce a forecast and expose the assumptions behind it? _[Built-in AI]_ (area: Analysis)
  - What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.
- **SCENARIO**: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated? _[Built-in AI]_ (area: Analysis)
  - What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.
- **FRESHNESS**: Does the answer expose data freshness or staleness to the user? _[Built-in AI]_ (area: Analysis)
  - What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

### Chart logic

- **E_IR**: Can the built-in assistant read the calculation behind a chart or table in BI content? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.
- **E_IW**: Can the built-in assistant write the calculation behind a chart or table in BI content? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.
- **E_OR**: Can an outside coding agent read the calculation behind a specific chart or table in BI content? _[External AI]_ (area: Building and maintaining assets)
  - What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.
- **E_OW**: Can an outside coding agent write the calculation behind a specific chart or table in BI content? _[External AI]_ (area: Building and maintaining assets)
  - What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

### Saved content, sharing & reuse

- **D_IR**: Can the built-in assistant open and work from existing BI content? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.
- **D_IW**: Can the built-in assistant build persistent, governed BI content? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.
- **D_OR**: Can an outside coding agent read the contents of existing BI content? _[External AI]_ (area: Building and maintaining assets)
  - What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.
- **D_OW**: Can an outside coding agent build BI content? _[External AI]_ (area: Building and maintaining assets)
  - What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.
- **SHAREASSET**: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow? (area: Building and maintaining assets)
  - What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.
- **DISCOVERASSET**: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search? (area: Building and maintaining assets)
  - What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

### Built-in agents

- **I5**: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it? _[Built-in AI]_ (area: Analysis)
  - What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.
- **AGENTSCHED**: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert? _[Built-in AI]_ (area: Analysis)
  - What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.
- **AGENTACT**: Can an agent do something beyond answering, write back, notify, call another system? _[Built-in AI]_ (area: Analysis)
  - What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.
- **AGENTESC**: Does the documentation describe how an agent hands a task back to a person when it cannot proceed? _[Built-in AI]_ (area: Analysis)
  - What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.
- **AGENTCHAIN**: Can a customer configure one agent to delegate a bounded analytical task to another named agent? _[Built-in AI]_ (area: Analysis)
  - What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.
- **MCPCLIENT**: Can the built-in assistant connect out to external tools or MCP servers you configure? _[Built-in AI]_ (area: Context and connections)
  - What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.
- **CONTENTFIX**: Can the product's AI find and fix BI content affected by a change in the data or its definitions? _[Built-in AI]_ (area: Analysis)
  - What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

### Generated apps

- **A_IR**: Can the built-in assistant read a generated app? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: The assistant can see the app that exists, its code, its layout, what it renders.
- **A_IW**: Can the built-in assistant build a persistent governed app backed by live data? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.
- **A_OR**: Can an outside coding agent read a generated app? _[External AI]_ (area: Building and maintaining assets)
  - What counts: Claude Code or a script can pull the app's definition out through an API.
- **A_OW**: Can an outside coding agent build a generated app? _[External AI]_ (area: Building and maintaining assets)
  - What counts: The same interface, authored from outside the product.

### Evaluation & correctness

- **EVALS**: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.
- **MODELPIN**: Can you pin which model version the built-in assistant uses? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.
- **DETERM**: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.
- **CORRECT**: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.
- **CERTMATCH**: Does the built-in assistant answer consistently with the product's certified or governed content? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

### Administration & observability

- **SPEND**: Can you cap what the built-in AI spends? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.
- **LATENCY**: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.
- **AICONSUME**: Can you see built-in AI consumption broken down by user, team or workspace? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.
- **AIAUDIT**: Are the built-in assistant’s actions logged with the user and the analytical objects affected? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.
- **AIROLLOUT**: Can an administrator enable or disable AI features for particular users, groups or workspaces? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.
- **AIAPPROVE**: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

### Data handling & AI governance

- **KEY**: Can the customer control where model inference occurs? (area: Reliability and controls)
  - What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.
- **GOVBIND**: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.
- **AIDATAFLOW**: Does the product documentation say which services receive AI prompts or data, and what they receive? (area: Reliability and controls)
  - What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.
- **AIRESIDENCY**: Does the product documentation say where AI requests are processed and stored? (area: Reliability and controls)
  - What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.
- **NOTRAIN**: Does the vendor state your data is not used to train AI models, by default? (area: Reliability and controls)
  - What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.
- **AIRESTRICT**: Can an administrator restrict which data the assistant may use, separately from user permissions? _[Built-in AI]_ (area: Reliability and controls)
  - What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

### Agent access

- **GOVPERMS**: Can an outside agent act under an identity or token scoped narrower than the human's own access? _[External AI]_ (area: Reliability and controls)
  - What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.
- **LINEAGE**: Can an outside agent traverse the upstream sources and transformations behind a number? _[External AI]_ (area: Context and connections)
  - What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.
- **AGENTAUDIT**: Are an outside agent’s actions logged with its identity and the analytical objects affected? _[External AI]_ (area: Reliability and controls)
  - What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.
- **APPROVE**: Can an outside agent’s change to a governed analytical asset be held for human approval? _[External AI]_ (area: Reliability and controls)
  - What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.
- **AGENTDIFF**: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset? _[External AI]_ (area: Reliability and controls)
  - What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.
- **AGENTUNDO**: Can an outside agent’s change to a governed analytical asset be rolled back? _[External AI]_ (area: Reliability and controls)
  - What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.
- **MCPSERVER**: Does the vendor support an MCP server with documented authentication for outside agents? _[External AI]_ (area: Context and connections)
  - What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.
- **AGENTDISCOVER**: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for? _[External AI]_ (area: Context and connections)
  - What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.
- **AGENTAUTH**: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user? _[External AI]_ (area: Context and connections)
  - What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.
- **AGENTSKILL**: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product? _[External AI]_ (area: Context and connections)
  - What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.
- **AGENTCLI**: Is there a command-line tool documented for use by outside agents? _[External AI]_ (area: Context and connections)
  - What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.
- **AGENTROLLOUT**: Can an administrator allow or block outside-agent access for particular users, groups or workspaces? _[External AI]_ (area: Reliability and controls)
  - What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.
- **AGENTLIMIT**: Can you cap or rate-limit what outside agents can consume? _[External AI]_ (area: Reliability and controls)
  - What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

### Business context

- **C4**: Can you teach the AI about your business? (area: Context and connections)
  - What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.
- **C5**: Can the business context you give the AI live in version control? (area: Context and connections)
  - What counts: The business context lives in files you can diff, review and roll back.
- **CTXSCOPE**: Can different teams get different business context for the AI, rather than one global set? (area: Context and connections)
  - What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.
- **CTXTEST**: Is there a way to validate business context before it affects the AI’s answers? (area: Context and connections)
  - What counts: A named validation, preview, staging or test step for context. Version control alone is C5.
- **CTXSHOWN**: Does an answer say which piece of business context shaped it? (area: Context and connections)
  - What counts: The specific instruction, description or rule surfaced with the answer.
- **CTXINHERIT**: Can the AI use column descriptions, dbt docs or warehouse comments as context? (area: Context and connections)
  - What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.
- **CTXNEG**: Can you mark a table, field or answer as deprecated or off-limits to the AI? (area: Context and connections)
  - What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.
- **CTXOWNER**: Is there a documented owner or approval workflow for business context? (area: Context and connections)
  - What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

### Warehouse logic

- **W_IR**: Can the built-in assistant read logic that lives in your warehouse? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.
- **W_IW**: Can the built-in assistant write logic into your warehouse? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.
- **W_OR**: Can an outside coding agent read logic in your warehouse? _[External AI]_ (area: Building and maintaining assets)
  - What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.
- **W_OW**: Can an outside coding agent write logic into your warehouse? _[External AI]_ (area: Building and maintaining assets)
  - What counts: An agent outside the product can author warehouse logic through it.
- **WHIMPORT**: Can it use metric definitions you already maintain outside the tool? (area: Context and connections)
  - What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

### Shared definitions

- **M_IR**: Can the built-in assistant read your shared definitions? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.
- **M_IW**: Can the built-in assistant change your shared definitions? _[Built-in AI]_ (area: Building and maintaining assets)
  - What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.
- **M_OR**: Can an outside coding agent read your shared definitions? _[External AI]_ (area: Building and maintaining assets)
  - What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.
- **M_OW**: Can an outside coding agent change your shared definitions? _[External AI]_ (area: Building and maintaining assets)
  - What counts: The semantic layer is writable from outside the product.
- **WHPUSH**: Can definitions written in the tool be pushed back down to the warehouse? (area: Building and maintaining assets)
  - What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.
- **PROMOTE**: Can a one-off calculation be turned into a maintained shared definition the whole team reuses? (area: Building and maintaining assets)
  - What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

