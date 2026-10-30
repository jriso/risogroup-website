# Streamlit: AI Feature Score

Riso Group, version 1, Oct 2026. Last updated Oct 30, 2026. Documentation as of Oct 26, 2026. Web version: https://risogroup.co/projects/ai-analytics-scorecard/streamlit/

AI Feature Score **6**, #15 of 15 (BI and analytics tool). Built-in AI 1, external AI 17, other 6. Analysis 0, Building and maintaining assets 16, Context and connections 7, Reliability and controls 3. By model: Claude Opus 5.5 6, GPT-6.1 Sol 9, Gemini 3.8 Flash 6.

## Score breakdown

Four areas, 25 points each. Shown for Gemini 3.8 Flash, the median scorer. The score is that model’s total. The results below combine all three models, so they can add up to a slightly different number.

- Analysis: 0.0 of 25
- Building and maintaining assets: 4.1 of 25
- Context and connections: 1.7 of 25
- Reliability and controls: 0.7 of 25

**Strengths**

- It has a CLI built for agents

**Not found in the docs**

- Ask in plain English
- An admin can switch the AI on and off
- AI data flow is documented

Each question below shows the agreed result (the median of the three models), then each model’s own answer with the quote and page it relied on. Yes = full credit, Partly = half, No or Not found = none. Scorecard and method: https://risogroup.co/projects/ai-analytics-scorecard/index.md

## Ask and analyze

### I2: Can you ask the built-in assistant a question in plain English?

**Result: Not found** · route: Built-in AI

What counts: Someone types a question the way they would say it out loud and the built-in assistant returns an answer or a working query against your data, without needing SQL or a dashboard someone built first. An assistant that only suggests or completes SQL the user is already writing is `partly`; one that writes the query from a plain-English description is `yes`, including inside a code editor.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Streamlit ships no built-in assistant. The only AI items in the corpus are the `streamlit skills` agent skills for outside coding agents and tutorials that show customers how to build their own OpenAI/LangChain chat apps (customer-built). 'Ask AI' is only a docs-site forum footer.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The chat and LLM documentation describes chat elements and developer-built chat apps, not a first-party assistant answering natural-language questions against customer data.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit is an application framework and cloud platform without a vendor-provided built-in assistant that answers plain-English analytical questions against data.

### I3: Can you refine the answer by carrying on the conversation?

**Result: No** · route: Built-in AI

What counts: The assistant holds the thread, so you can say “now split that by region” and it knows what you are referring to.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant, so there is no conversation to carry on. The st.chat_message and st.chat_input elements are building blocks for customer-built chat apps.
- **GPT-6.1 Sol**: no
  - Quote: "- Finally, we'll Build a ChatGPT-like app that leverages session state to remember conversational context, all within less than 50 lines of code."
  - Source: https://docs.streamlit.io/develop/tutorials/chat-and-llm-apps/build-conversational-apps (checked 2026-10-26)
  - Reasoning: Conversational memory is explicitly implemented by the customer building a ChatGPT-like app with Session State and OpenAI. The documented capability is customer-built, which the verdict rules score no for a built-in-assistant row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not provide a built-in assistant that maintains multi-turn conversation threads for refining data analyses.

### V3: Does the answer expose the query or analytical steps used to derive it?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the query or analytical steps used to derive it. Named fields belong to field citation; upstream dependencies belong to lineage.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in assistant produces answers, so no generated query or analytical steps are exposed.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented built-in assistant answer exposes its generated query or analytical steps; code-display and status widgets require app authors to supply their contents.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant to expose underlying analytical queries or derivation steps.

### FIELDCITE: Does the answer say which specific tables, columns or metrics it was built from?

**Result: Not found** · route: Built-in AI

What counts: Named tables, columns or metrics attached to the answer, such as a field list or a citation shown with it. The text of a generated query is credited to the analytical-steps row, not this one, even though it names tables. Naming only the dataset does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in assistant answers, so no table, column or metric citations are attached to answers.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented built-in assistant attaches specific source tables, columns or metrics to its answers; ordinary table display does not establish answer citations.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant and does not provide answers accompanied by citations of specific tables, columns, or metrics.

### FILEUPLOAD: Can the AI analyze a CSV or spreadsheet a user uploads?

**Result: Not found** · route: Built-in AI

What counts: A user can give the product a CSV or spreadsheet and use the AI to analyze its contents.

- **Claude Opus 5.5**: nothing found
  - Reasoning: st.file_uploader is a widget for customer-built apps. No Streamlit AI analyzes an uploaded CSV or spreadsheet.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Upload widgets accept files, but no first-party assistant is documented analyzing an uploaded CSV or spreadsheet; a developer implementing that analysis is outside this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides an st.file_uploader widget for application developers to handle files in custom code, but has no vendor-provided built-in AI assistant that analyzes uploaded CSVs or spreadsheets.

### DATACLEAN: Can the AI clean or reshape data while leaving inspectable transformation logic?

**Result: Not found** · route: Built-in AI

What counts: The AI can clean or reshape data and leaves transformation steps, code or another inspectable artifact behind.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No product AI is documented cleaning or reshaping data.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Dataframe transformations and Python examples are developer-authored; no built-in assistant is documented cleaning data and preserving its transformation logic.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI capability that cleans or reshapes data while leaving inspectable transformation logic behind.

### MULTISOURCE: Can the AI combine two or more data sources in one analysis?

**Result: Not found** · route: Built-in AI

What counts: The AI joins or blends at least two sources, for example two databases or a database and an uploaded file. Tables in one database are one source, and analyzing an uploaded file on its own is the file-upload row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: st.connection covers many data sources, but no Streamlit AI is documented joining or blending them.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Connection tutorials and developer-written joins do not establish a built-in assistant combining distinct sources in one analysis.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI assistant that autonomously combines, joins, or blends multiple data sources in an analysis.

### VIZCHOOSE: Can the AI select and create a visualization suited to the analytical question?

**Result: Not found** · route: Built-in AI

What counts: The AI selects and creates a chart or table suited to the question, rather than only changing a visualization the user chose.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Chart elements (st.line_chart, st.altair_chart and so on) are chosen by the developer in code. No product AI selects a visualization.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Chart APIs and chat containers let developers supply visualizations; no built-in assistant is documented selecting and creating a visualization for a question.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant that autonomously selects and creates visualizations suited to analytical questions.

### INVESTIGATE: Can the AI identify what contributed to a change, with calculations a person can check?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant breaks a change down into contributing segments or factors and shows the contribution of each, with the calculation a person can check, for example a table of segments with their share of the change. A key-driver function the assistant is documented to use counts; one only a user calls in SQL does not. Naming likely causes, or describing that a number rose or fell, without contributions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in assistant performs key-driver or contribution analysis.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant is documented calculating segment or factor contributions to a change; general Python analytics and chart examples do not establish that behavior.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI assistant capable of breaking down metric changes into contributing factors with checkable calculations.

### FORECAST: Can the AI produce a forecast and expose the assumptions behind it?

**Result: Not found** · route: Built-in AI

What counts: The AI creates a forecast and exposes its horizon, inputs and assumptions so the result can be challenged. A forecast that does not expose its assumptions is `partly`. The AI itself must produce the forecast, so a classic forecasting feature it does not drive does not count, and a horizon with a confidence range but no stated inputs is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No product AI produces forecasts.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented built-in assistant produces a forecast with its horizon, inputs and assumptions; general model execution would be customer-written analysis.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI feature that generates forecasts and exposes underlying inputs, horizons, and assumptions.

### SCENARIO: Can the AI calculate and compare what-if scenarios, each with its changed assumptions stated?

**Result: Not found** · route: Built-in AI

What counts: A user can define more than one what-if scenario with the AI, the changed assumptions of each scenario are stated explicitly, and the AI calculates results for each that can be compared side by side. A single what-if answer, or scenarios without stated assumptions or calculated results, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No product AI calculates what-if scenarios.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant is documented calculating and comparing multiple scenarios with their changed assumptions stated.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI that computes and compares side-by-side what-if scenarios with explicit stated assumptions.

### FRESHNESS: Does the answer expose data freshness or staleness to the user?

**Result: Not found** · route: Built-in AI

What counts: The answer exposes the age or last-refresh time of the data it used, so stale output is visible at the point of use. Freshness shown with the answer through the data source's own indicator, for example a "last refreshed" badge on the dataset the answer used, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Caching TTL controls exist for developers, but no AI answer exposes data freshness because there is no built-in AI.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Caching TTL and stale connection-result guidance concern developer-managed application data, not freshness exposed with a built-in assistant answer.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not have an AI assistant that exposes data freshness, staleness timestamps, or last-refresh indicators with analytical answers.

## Chart logic

### E_IR: Can the built-in assistant read the calculation behind a chart or table in BI content?

**Result: Not found** · route: Built-in AI

What counts: The assistant can read the calculation behind a chart or table in BI content: its formula, measure or the query that feeds it. Reading SQL in an editor, worksheet or notebook cell that no chart in BI content uses is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to read chart calculations.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant is documented reading a BI chart's calculation, or even reading SQL in a first-party analyst editor; displaying developer-provided code is not assistant reading.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant that inspects or reads the calculations, measures, or queries feeding charts in BI content.

### E_IW: Can the built-in assistant write the calculation behind a chart or table in BI content?

**Result: Not found** · route: Built-in AI

What counts: The assistant writes or changes the calculation behind a chart or table in BI content. Writing SQL in an editor, worksheet or notebook cell is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to write chart calculations.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Official outside coding-agent skills are not a built-in assistant; no built-in assistant writes calculations behind BI content or SQL in an analyst editor.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant that authors or modifies the calculations or queries feeding charts in BI content.

### E_OR: Can an outside coding agent read the calculation behind a specific chart or table in BI content?

**Result: Not found** · route: External AI

What counts: An outside agent can retrieve, through the vendor's API, CLI, MCP server or skills, the calculation behind a specific chart or table in BI content. Downloading a whole file or workbook it must then parse is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor API returns the calculation behind a specific chart in a deployed app. AppTest exposes rendered element values, not the logic feeding a chart.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No interface retrieves the calculation behind a specific BI chart for an outside agent; AppTest inspects app elements from supplied local code, rather than retrieving a deployed chart's calculation.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not provide an API, CLI, or MCP endpoint for outside agents to retrieve the calculation or query behind a specific chart in deployed BI content.

### E_OW: Can an outside coding agent write the calculation behind a specific chart or table in BI content?

**Result: Not found** · route: External AI

What counts: An outside agent can change the calculation behind a specific chart or table in BI content through the vendor's interface. Styling need not be writable. Replacing a whole file or workbook is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No vendor interface writes a specific chart's calculation.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Outside coding skills help author Streamlit app code, but no documented interface changes the calculation behind a specific existing BI chart, or replaces a retrieved workbook or asset definition.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documents no vendor interface for outside agents to modify the specific calculation feeding a chart in deployed BI content without replacing the app.

## Saved content, sharing & reuse

### D_IR: Can the built-in assistant open and work from existing BI content?

**Result: Not found** · route: Built-in AI

What counts: The assistant can open existing BI content and work from what it shows. Analyst work only (a notebook, SQL worksheet or SQL file that people edit rather than view) is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to open existing apps.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The official coding skills address outside agents and the chat tutorials build customer apps; no built-in assistant opens and works from existing BI content or analyst work.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant capable of opening existing BI content or apps and working from what they display.

### D_IW: Can the built-in assistant build persistent, governed BI content?

**Result: Not found** · route: Built-in AI

What counts: The assistant builds persistent BI content with an owner, permissions and a live governed data source. Analyst work only (a notebook, a SQL file) is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to build BI content.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Official skills help outside coding agents build apps; no built-in assistant is documented creating persistent governed BI content or analyst work.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant that creates persistent, governed BI content with ownership and permissions.

### D_OR: Can an outside coding agent read the contents of existing BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can read the contents of existing BI content (its charts, queries and filters) through the vendor's interface. Analyst work only is `partly`. Listing what exists is the agent-discovery row.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "The provided class, AppTest, simulates a running app and provides methods to set up, manipulate, and inspect the app contents via API instead of a browser UI."
  - Source: https://docs.streamlit.io/develop/api-reference/app-testing (checked 2026-10-26)
  - Reasoning: AppTest is Streamlit's own Python API. A script or outside agent can use it to load an app and inspect its rendered contents (titles, dataframes, widget values) without a browser. It works on the app's source file, which is a code project people edit (analyst work), run as a local simulation. It does not read the deployed app viewers open, and it is not documented for agents. That is partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "The provided class, AppTest, simulates a running app and provides methods to set up, manipulate, and inspect the app contents via API instead of a browser UI."
  - Source: https://docs.streamlit.io/develop/concepts/app-testing (checked 2026-10-26)
  - Reasoning: An outside script or coding agent can use the first-party AppTest API to read rendered elements and widget/filter state of an existing analytical app whose source it has. This is limited to a local simulated app; it does not retrieve a deployed app's full charts, underlying queries, and filters through a hosted content API.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "The provided class, AppTest, simulates a running app and provides methods to set up, manipulate, and inspect the app contents via API instead of a browser UI."
  - Source: https://docs.streamlit.io/develop/concepts/app-testing (checked 2026-10-26)
  - Reasoning: Streamlit's native AppTest API allows an outside script or coding agent to inspect the contents, rendered elements, and widget states of a local Streamlit app via API without requiring a browser UI. However, this is limited to simulating local app source files (analyst work) rather than retrieving deployed BI content from the cloud, earning partial credit (partly).

### D_OW: Can an outside coding agent build BI content?

**Result: Partly** · route: External AI

What counts: An outside agent can create BI content through the vendor's interface, the way it would open a pull request. Analyst work only is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: The vendor-published agent skills are documented for outside coding agents to build Streamlit apps. What the agent writes is the app's code project in the developer's repo, which is analyst work; publishing it as viewable BI content happens separately through deployment, not through an agent interface. That makes this partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: The first-party skills explicitly support outside AI agents authoring Streamlit apps, which are BI content under the supplied published-app definition. Streamlit's native app source, CLI, and Community Cloud publishing path make this an external app-authoring route; the agent's model remains outside Streamlit.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: Streamlit provides the streamlit skills command to install official AI-agent skills enabling outside coding agents to build Streamlit apps. Because the agent creates and modifies the application's code files in a repository (analyst work) rather than directly publishing or managing governed BI content through the vendor's cloud platform interface, this earns partial credit (partly).

### SHAREASSET: Can a user share AI-created BI content with named users or groups, with each viewer seeing only what their own permissions allow?

**Result: Partly**

What counts: `yes`: AI-created BI content can be shared with named users or groups and each viewer sees only the data their own permissions allow (results evaluated as the viewer). Sharing that shows the author's results to everyone is `partly`. An asset counts as AI-created only if the AI built it, not if a person pasted AI-generated SQL into it.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "Once you have added someone's email address to your app's viewer list, that person will be able to sign in and view your private app."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app (checked 2026-10-26)
  - Reasoning: Streamlit documents AI-agent-built apps: its first-party `streamlit skills` exist 'to help AI agents build better Streamlit apps' (https://docs.streamlit.io/develop/api-reference/cli/skills). A deployed Community Cloud app, which is a published app viewers open, can be shared with named viewers by email. Nothing documents that the app's data is evaluated under each viewer's own permissions. The app runs with the developer's code and secrets, so this is sharing at the app-access level only: partly.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Once you have added someone's email address to your app's viewer list, that person will be able to sign in and view your private app."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app (checked 2026-10-26)
  - Reasoning: Community Cloud shares persistent apps with named viewers, including apps an outside AI creates using the official skills. This establishes named-user app access, but not that analytical results are evaluated under each viewer's data permissions; the Snowflake connection can run with the app owner's role.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Once you have added someone's email address to your app's viewer list, that person will be able to sign in and view your private app."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/share-your-app (checked 2026-10-26)
  - Reasoning: Streamlit Community Cloud allows persistent apps (including apps authored by outside AI agents using official skills) to be shared with named viewers via email. However, sharing controls access at the application viewer level rather than evaluating underlying data queries under each individual viewer's database permissions, earning partial credit (partly).

### DISCOVERASSET: Can permitted users find colleagues' saved analytical assets through workspace-wide browse or search?

**Result: Partly**

What counts: Permitted users can browse or search across the workspace for saved analytical assets created by colleagues, including AI-created work.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "If you are joining someone else's workspace you may already see some apps."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/get-started/explore-your-workspace (checked 2026-10-26)
  - Reasoning: Community Cloud workspaces (permissions inherited from GitHub) let permitted colleagues browse apps deployed by others in the shared workspace. No workspace-wide search is documented (the Explore search covers the public community gallery), and there is no AI-created work, so the row is only partly met.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If you are joining someone else's workspace you may already see some apps."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/get-started/explore-your-workspace (checked 2026-10-26)
  - Reasoning: The workspace provides a My apps browse area and automatically exposes shared workspaces according to GitHub or viewer permissions. This lets permitted colleagues discover saved analytical apps, including the same app type authored through official AI-agent skills.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "When others sign in to Community Cloud, they will automatically see the workspaces they share with you."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/get-started/explore-your-workspace (checked 2026-10-26)
  - Reasoning: Streamlit Community Cloud workspaces allow permitted colleagues sharing a GitHub repository or organization to see shared workspaces and browse the deployed apps created by colleagues within that workspace. No workspace-wide search across analytical assets is documented (the Explore search covers the public community gallery), earning partial credit (partly).

## Built-in agents

### I5: Can you save a built-in assistant with its own instructions, data and permissions, and let colleagues reuse it?

**Result: Not found** · route: Built-in AI

What counts: An assistant someone configures once, with its own instructions, data and permissions, that colleagues can then reuse.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No configurable, shareable built-in assistant or agent is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Official coding-agent skills are instructions for outside agents, while reusable chat apps require developer implementation; neither documents a reusable built-in assistant with its own instructions, data and permissions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not provide a feature to configure, save, and share a built-in assistant with custom instructions, data, and permissions.

### AGENTSCHED: Can the product’s AI or an agent rerun a defined analysis on a schedule or trigger and deliver a fresh result or alert?

**Result: Not found** · route: Built-in AI

What counts: The product’s AI or an agent can rerun a defined analytical task on a schedule or trigger and deliver a fresh result or alert without a person present. An ordinary report or dashboard schedule that the AI or an agent does not run does not count, and an AI that only sets up such a schedule is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No product AI or agent reruns analyses on a schedule.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Fragment reruns and application execution controls do not document a built-in AI agent rerunning an analytical task unattended and delivering a fresh result or alert.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documentation contains no built-in AI or agent that reruns analytical tasks on a schedule or trigger and delivers fresh results or alerts without a human present.

### AGENTACT: Can an agent do something beyond answering, write back, notify, call another system?

**Result: Not found** · route: Built-in AI

What counts: `yes`: a built-in agent can, on its own, cause a named side effect outside the analytics content: send a message or notification, call a webhook or another system, or write data to a destination. Writing to the product's own dashboards or notebooks does not count. Generating code a person must then run is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in agent exists to send messages, call systems or write data.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Notification widgets, custom Python and external API calls are application-building tools; no built-in agent is documented independently causing an external side effect.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not have a built-in assistant or built-in agents capable of taking autonomous side-effects such as writing data back to destinations, calling webhooks, or sending notifications.

### AGENTESC: Does the documentation describe how an agent hands a task back to a person when it cannot proceed?

**Result: Not found** · route: Built-in AI

What counts: `yes`: a built-in agent that cannot finish a task stops and hands it to a person, with the hand-off documented (a notification, a review queue, a pause awaiting a decision). Asking the user a clarifying question during a conversation is `partly`. Silence is `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in agent exists, so no hand-off is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in agent has a documented inability-to-proceed hand-off or clarifying pause; tutorials requiring a user to review simulated chat output are customer-built flows.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in agent with a documented escalation or hand-off mechanism to a human reviewer when it cannot proceed.

### AGENTCHAIN: Can a customer configure one agent to delegate a bounded analytical task to another named agent?

**Result: Not found** · route: Built-in AI

What counts: A customer can configure one agent to delegate a bounded analytical task to another named agent with explicit tools and permissions. Hidden implementation subagents do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No agents are documented that can delegate to other named agents.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No first-party configurable agent-to-agent delegation is documented; installing skills for an external coding agent does not establish a built-in delegation system.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in agent orchestration system allowing customers to configure one agent to delegate bounded analytical tasks to another named agent.

### MCPCLIENT: Can the built-in assistant connect out to external tools or MCP servers you configure?

**Result: Not found** · route: Built-in AI

What counts: The vendor documents attaching an outside capability to its own AI. Shipping an MCP server is the opposite direction and a different row.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to attach MCP servers or tools to. MCP is not mentioned anywhere in the corpus.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented built-in assistant accepts configured external tools or MCP servers; chat UI and custom integration code are not a built-in MCP client.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant to which customers can attach outside tools or external MCP servers.

### CONTENTFIX: Can the product's AI find and fix BI content affected by a change in the data or its definitions?

**Result: Not found** · route: Built-in AI

What counts: When a column is renamed, a table changes or a shared definition is edited, the product's AI or a built-in agent identifies the BI content affected and repairs it or flags it for an owner. `yes`: both finding the affected content and repairing or flagging it are documented for the AI. Impact analysis a person runs, with no AI involvement, does not count; the AI fixing one broken chart a user points it at is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No product AI finds or repairs affected content.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Coding-agent skills and local error reporting do not document product AI discovering BI content affected by schema changes and repairing it or flagging it to an owner.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI that scans, identifies, or repairs BI content affected by schema or definition changes.

## Generated apps

### A_IR: Can the built-in assistant read a generated app?

**Result: Not found** · route: Built-in AI

What counts: The assistant can see the app that exists, its code, its layout, what it renders.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to read apps.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The documented coding agents are external, and chat apps are developer-built; no built-in assistant is documented reading an existing app's code, layout or rendered output.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant capable of inspecting or reading the code, layout, or rendered output of an existing app.

### A_IW: Can the built-in assistant build a persistent governed app backed by live data?

**Result: Not found** · route: Built-in AI

What counts: The assistant creates a persistent first-class app with an owner, permissions and a live governed data source. Disposable generated HTML does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to generate apps. App building with AI is done by outside agents using skills.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Outside coding-agent skills and Python app deployment do not document a first-party assistant generating persistent governed apps backed by live data.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI assistant that creates persistent, governed apps backed by live data.

### A_OR: Can an outside coding agent read a generated app?

**Result: Not found** · route: External AI

What counts: Claude Code or a script can pull the app's definition out through an API.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Streamlit API pulls a deployed app's definition out. The source lives in the customer's GitHub repo. AppTest needs the source file already and exposes only rendered elements.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No vendor interface is documented pulling a generated app's definition out for an outside agent; AppTest takes existing local code as input, while repository access is through GitHub rather than a Streamlit export interface.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documents no vendor API or endpoint allowing an outside agent to retrieve or pull the full definition of a deployed app from Community Cloud.

### A_OW: Can an outside coding agent build a generated app?

**Result: Partly** · route: External AI

What counts: The same interface, authored from outside the product.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: Vendor-published skills are documented for outside coding agents to author Streamlit apps, the product's app object. But the documented agent route only covers writing app code. No agent interface is documented that creates the persistent deployed app with an owner, permissions and governed data source, so this is partly.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: Outside coding agents are expressly supported in building Streamlit apps through official packaged skills and native APIs. The CLI creates and runs persistent Python app files, and Community Cloud deploys the same source, satisfying outside authorship of an app.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: Streamlit provides vendor-published official AI-agent skills (via the streamlit skills CLI command) that outside coding agents use to build Streamlit apps. However, the documented agent route only covers writing app code in the user's project files rather than creating and deploying the persistent governed app with an owner and permissions through the cloud platform interface, earning partial credit (partly).

## Evaluation & correctness

### EVALS: Can you test whether the built-in assistant's answers are right, a saved set of cases, a rubric, or a judge?

**Result: No** · route: Built-in AI

What counts: A saved set of questions with expected answers, a rubric, a model judging the output, or a run you can repeat after a change, applied to the built-in assistant's answers. A thumbs-up button collects opinions and does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: AppTest tests app code, not a built-in assistant's answers. The chat-feedback tutorial is a customer-built thumbs rating. No evals for a vendor assistant exist.
- **GPT-6.1 Sol**: no
  - Quote: "When the simulated chat assistant responds, a function validates the response and highlights possible "errors" for the user to review."
  - Source: https://docs.streamlit.io/develop/tutorials/chat-and-llm-apps/validate-and-edit-chat-responses (checked 2026-10-26)
  - Reasoning: The only documented response-validation example is customer-authored code evaluating a simulated chat assistant. The rules exclude customer-built capabilities; this is not an evaluation facility for a Streamlit built-in analytical assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no evaluation framework, benchmark test suites, rubrics, or LLM-judge tools for built-in assistant answers.

### MODELPIN: Can you pin which model version the built-in assistant uses?

**Result: Not found** · route: Built-in AI

What counts: `yes`: an admin or user can choose a specific named model version for the built-in assistant and it stays on that version until changed. Choosing among models or providers without a fixed version is `partly`. The vendor managing the model with no customer choice is `no`. Provider choice for data location belongs to KEY, not this. Identical answers are not required.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant model to pin.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Model names in developer-written chat examples configure a customer-built app; no customer control over a built-in assistant's model or fixed model version is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no built-in assistant and consequently no administrative setting to pin a model version.

### DETERM: Can you preserve the inputs, configuration and logic needed to reproduce or audit a built-in assistant answer?

**Result: Not found** · route: Built-in AI

What counts: The product preserves the inputs, configuration, model and analytical logic needed to reproduce or audit an answer. Byte-for-byte model determinism is not required. Kept chat history with the generated query is `partly`; `yes` needs the inputs, configuration, model and logic. A record that keeps the model, the prompt and the generated query but not the data snapshot or configuration is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in assistant answers are recorded.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Chat-history examples use app-authored Session State; no first-party assistant preserves answer inputs, configuration, model and analytical logic, or a built-in chat history with generated queries.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant and no mechanism to preserve prompts, configurations, model versions, and data snapshots to reproduce answers.

### CORRECT: Does a person’s correction to a built-in assistant answer change its later answers, and does the documentation say how far that reaches?

**Result: Not found** · route: Built-in AI

What counts: The documentation says a correction a person makes to a built-in assistant answer changes the assistant’s later answers, and says how far it reaches (that user, a team, everyone using the data). A correction documented to affect later answers with no stated reach is `partly`. A feedback thumb that only rates an answer or files a ticket is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The 'Validate and edit chat responses' tutorial is a customer-built app pattern, not a correction mechanism for a vendor assistant.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Feedback and response-editing tutorials collect or edit messages in customer-written apps; no documented correction changes a built-in assistant's subsequent answers with a stated reach.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant where human corrections modify future answers across a defined reach.

### CERTMATCH: Does the built-in assistant answer consistently with the product's certified or governed content?

**Result: Not found** · route: Built-in AI

What counts: When a question is already answered by certified BI content or a governed metric, the product makes the assistant use that same definition, or tells the user when its answer departs from it. `yes`: the documentation says the assistant is bound to or checked against certified content or governed metrics, and that a mismatch is prevented or flagged. Using the semantic layer when one exists, with no statement about certified content or mismatches, is `partly` (that alone is the shared-definitions read row, M_IR). A "verified" badge on some answers with no rule tying answers to certified definitions is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant and no certified-content mechanism.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant is documented using certified content or governed metrics, or preventing or flagging mismatches with their definitions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not maintain certified or governed BI definitions and has no assistant checked against or bound to certified content.

## Administration & observability

### SPEND: Can you cap what the built-in AI spends?

**Result: Not found** · route: Built-in AI

What counts: A limit that actually blocks the built-in AI's usage once it is reached. Reporting on spend without blocking anything does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in AI spend to cap. Community Cloud resource limits are not AI limits.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: General hosting-resource limits and developer-managed LLM calls do not establish a blocking spend cap for a built-in AI service.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI features and documents no spending limits or usage caps that block AI usage.

### LATENCY: Can customers measure the built-in AI’s response time on their own workload by agent, model or evaluation run?

**Result: Not found** · route: Built-in AI

What counts: Customers can measure response time on their own workload by agent, model or evaluation run. Marketing estimates and generic timeouts do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No built-in AI response-time metrics are documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: General app performance, runtime indicators and app tests do not document measuring a built-in assistant's response time by agent, model or evaluation run.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documents no observability tools for customers to measure built-in AI response times by agent, model, or evaluation run.

### AICONSUME: Can you see built-in AI consumption broken down by user, team or workspace?

**Result: Not found** · route: Built-in AI

What counts: Per-user or per-team attribution of AI usage. A single tenant-wide total is not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: App analytics counts viewers, not AI usage. No built-in AI consumption is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: App analytics and hosting-resource reporting are not consumption attribution for a built-in AI by user, team or workspace.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in AI features and documents no breakdown of AI consumption by user, team, or workspace.

### AIAUDIT: Are the built-in assistant’s actions logged with the user and the analytical objects affected?

**Result: Not found** · route: Built-in AI

What counts: The product records what the built-in assistant did, the prompt or query it ran and the objects it touched, attributable to the user who asked. A general product audit log that does not distinguish assistant activity is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant and no assistant audit log.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Application logs and coding-agent visibility of errors do not document a built-in assistant action log with the asking user and affected analytical objects.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant and consequently no logging of assistant actions with the user and analytical objects affected.

### AIROLLOUT: Can an administrator enable or disable AI features for particular users, groups or workspaces?

**Result: Not found** · route: Built-in AI

What counts: A documented control that turns AI features on or off for a subset of the tenant. An account-wide on/off with no granularity is partly; a setting that only governs which model is used is MODELPIN, not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There are no AI features to enable or disable per user or workspace.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented administrator control enables or disables built-in AI for selected users, groups or workspaces; app permissions are not AI rollout controls.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no administrative toggle to enable or disable AI features for particular users, groups, or workspaces.

### AIAPPROVE: Can the built-in assistant’s change to a governed analytical asset be held for human approval before it takes effect?

**Result: Partly** · route: Built-in AI

What counts: `yes`: the built-in assistant's change to governed BI content or shared definitions is held until a named person or role approves it, or a policy routes the assistant's write to an approver who is a different person or role from whoever asked. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general publishing workflow the assistant is not documented to enter, is `partly`. A user accepting or rejecting the assistant's suggestion to their own work is not approval.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Streamlit has no built-in assistant, so no assistant change can be held for approval. The edit-your-app page says Codespaces edits do not reach the deployed app until committed. That describes a human developer's editing workflow and names no assistant or approver, so it does not settle this row.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Your edits do not affect your repository or deployed app until you commit those changes, which is explained in a later step."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/manage-your-app/edit-your-app (checked 2026-10-26)
  - Reasoning: The documented general app publishing workflow holds local edits until the same developer commits and pushes them. Under the grading standard this earns partial credit for a general publishing workflow, but it neither routes changes from a built-in assistant to a different approver nor names a required approving role.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Your edits do not affect your repository or deployed app until you commit those changes, which is explained in a later step."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/manage-your-app/edit-your-app (checked 2026-10-26)
  - Reasoning: Streamlit Community Cloud documents a general publishing workflow where code edits made in a development environment or Codespace are held locally and do not affect the deployed app until committed and pushed to the repository. A general publishing workflow that the documentation does not connect to AI changes earns partial credit (partly).

## Data handling & AI governance

### KEY: Can the customer control where model inference occurs?

**Result: Not found**

What counts: The customer controls where inference occurs. A model running in the customer's cloud, warehouse or tenant earns yes; a documented choice of region or provider endpoint, or a bring-your-own-key path where the documentation says where the provider processes the request, earns partly. Vendor-hosted inference that the documentation says the customer cannot choose or move earns no. Supplying a key does not by itself say where inference runs, and documentation that only states where processing happens, with no customer choice, belongs to the residency row. A choice that applies to only some of the product's AI features is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no vendor AI inference to locate.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: LLM-key and model examples are configuration of customer-written apps; no first-party AI inference-location or endpoint control is documented for Streamlit's own assistant.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no vendor-hosted AI inference service and thus no customer controls over model inference locations or endpoints.

### GOVBIND: Do your existing row-level security and column permissions apply to what the BUILT-IN assistant returns?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the documentation states that the built-in assistant answers under the asking user's identity, so existing row-level and column-level rules apply. Dataset-level or object-level permissions only, or row and column rules that some AI surfaces documentedly bypass, are `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant whose answers RLS could govern.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Application authentication and connection credentials are not a documented built-in assistant answering under the asking user's identity with row and column rules applied.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant answering questions under user identity with binding row-level or column-level security.

### AIDATAFLOW: Does the product documentation say which services receive AI prompts or data, and what they receive?

**Result: Not found**

What counts: `yes`: names the services that receive AI prompts or data, what they receive, and how long it is kept. Missing any one of the three is `partly`. A subprocessor list is not required; one published only on a separate trust or legal site is outside this documentation, so its absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No product AI data flows are documented. The trust-and-security page covers Community Cloud hosting, not AI.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: An LLM tutorial sends prompts through customer-written code; it does not establish a first-party AI data-flow policy specifying recipient services, payloads and retention.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no vendor-hosted built-in AI assistant and therefore no documentation specifying services receiving AI prompts, data payloads, and retention periods.

### AIRESIDENCY: Does the product documentation say where AI requests are processed and stored?

**Result: Not found**

What counts: `yes`: the product documentation states the regions where AI requests are processed and where AI data is stored, for all of the product's AI features. A subprocessor or trust page counts if it is part of the product documentation. Regions for some AI features only, or processing without storage, is `partly`. Terms published only on a separate trust or legal site outside this documentation are not evidence, so their absence here is `nothing found`, not `no`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI processing or storage regions are documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: General app hosting and developer-chosen model services do not document processing and storage regions for first-party AI requests.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no built-in AI features and does not document geographic regions where AI requests are processed and stored.

### NOTRAIN: Does the vendor state your data is not used to train AI models, by default?

**Result: Not found**

What counts: A statement that customer data is not used to train AI models by default. An opt-out you have to find is weaker and should be `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No statement about training AI models on customer data was found. The only 'train' hits are a customer-built chat tutorial and an example app name.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documentation statement settles whether customer data is excluded from training AI models by default; general security safeguards and custom LLM examples do not settle training use.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not offer vendor-managed AI model services and publishes no statement regarding customer data training exclusions for built-in models.

### AIRESTRICT: Can an administrator restrict which data the assistant may use, separately from user permissions?

**Result: Not found** · route: Built-in AI

What counts: `yes`: an administrator can enforce, across the workspace or tenant, a limit on which data the assistant may use, separate from user permissions. A scope the author of each agent sets, or a scope the documentation says is not a security boundary, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no assistant, and no admin control limiting assistant data.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No enforced workspace or tenant control separately restricts data available to a built-in assistant; ordinary application and database permissions do not establish that mechanism.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not provide an administrator control to restrict which data a built-in assistant may access separately from user permissions.

## Agent access

### GOVPERMS: Can an outside agent act under an identity or token scoped narrower than the human's own access?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can act under an identity or token scoped narrower than the human's own access (read-only, limited objects or limited tools). Acting as the full human identity is `partly`. Shared broad credentials do not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No outside-agent identity or scoped token for Streamlit is documented. Service-account and PAT hits are third-party credentials in database tutorials.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Service accounts in database-connection tutorials authenticate the customer's app to another service; they are not documented scoped identities or tokens for outside agents accessing Streamlit analytical objects.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not provide programmatic credentials or tokens allowing outside agents to act under permissions scoped narrower than the human user.

### LINEAGE: Can an outside agent traverse the upstream sources and transformations behind a number?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can follow a number to its upstream sources and transformations through a documented lineage interface. Reading the SQL of a view or model and inferring its sources is `partly`. A link from an answer back to its underlying source is `partly`. A description that names no upstream source or transformation does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No lineage interface is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No lineage interface for an outside agent to traverse a number's upstream sources and transformations is documented; ordinary data access and Python source code do not establish one.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no data lineage interface allowing outside agents to traverse upstream sources and transformations behind metrics.

### AGENTAUDIT: Are an outside agent’s actions logged with its identity and the analytical objects affected?

**Result: Not found** · route: External AI

What counts: The product records actions taken by an outside agent, tied to its delegated identity and affected analytical objects. A general user activity log is insufficient.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No log of outside-agent actions is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No log is documented that ties an outside agent's actions to both its identity and affected analytical objects; generic app logs do not settle this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no audit logging capturing outside agent actions, identities, and affected analytical objects.

### APPROVE: Can an outside agent’s change to a governed analytical asset be held for human approval?

**Result: Partly** · route: External AI

What counts: `yes`: an outside agent's change to governed BI content or shared definitions is held until a named person or role approves it, or an MCP or agent policy routes the agent's write to an approver who is a different person or role from whoever started the agent. A prompt shown only to the requester is `partly`. A draft the same user later publishes, or a general Git pull-request workflow not documented for agent changes, is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: The edit-your-app page another reader cited describes a human developer's Codespaces edits being held until they commit. It names no outside agent and no approver, and it states that committed changes go live immediately. Under the grading standard it is not evidence about an outside agent's change. No other approval workflow exists in the corpus.
- **GPT-6.1 Sol**: partly, generally available
  - Quote: "Your edits do not affect your repository or deployed app until you commit those changes, which is explained in a later step."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/manage-your-app/edit-your-app (checked 2026-10-26)
  - Reasoning: The documented general app publishing workflow holds local edits until the same developer commits and pushes them. Under the grading standard this earns partial credit for a general publishing workflow, but it neither routes changes from an outside agent to a different approver nor names a required approving role.
- **Gemini 3.8 Flash**: partly, generally available
  - Quote: "Your edits do not affect your repository or deployed app until you commit those changes, which is explained in a later step."
  - Source: https://docs.streamlit.io/deploy/streamlit-community-cloud/manage-your-app/edit-your-app (checked 2026-10-26)
  - Reasoning: In Streamlit Community Cloud, changes to an app do not affect the deployed application until explicitly committed and pushed to the repository. A general publishing or code-review workflow not specifically documented for outside agent changes earns partial credit (partly), holding edits until published but not routing agent changes to an independent human approver.

### AGENTDIFF: Can a reviewer see a diff of what an outside agent changed in a governed analytical asset?

**Result: Not found** · route: External AI

What counts: A reviewer can see a before/after diff of changes an outside agent made to a governed analytical asset. A generic publish or change diff is `partly`; `yes` needs the documentation to show it covers changes made by an outside agent.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Streamlit documents no diff view. Diffs live in GitHub, which is outside the product.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The app-editing page documents committing code, but no documented asset-change diff establishes reviewer visibility of outside-agent changes; instructional code diffs are not a product review interface.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documentation does not describe a reviewer diff interface for changes made by outside agents to governed analytical assets.

### AGENTUNDO: Can an outside agent’s change to a governed analytical asset be rolled back?

**Result: Not found** · route: External AI

What counts: A change made by an outside agent to a governed analytical asset can be reverted or restored.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No version restore or rollback of apps is documented in Streamlit. The only 'revert' hit is about restoring repo settings after a rename.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Troubleshooting renamed app coordinates and resetting widget state do not document restoring a governed analytical asset changed by an outside agent.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documentation does not provide a rollback or revert mechanism specifically documented for outside agent modifications to governed analytical assets.

### MCPSERVER: Does the vendor support an MCP server with documented authentication for outside agents?

**Result: Not found** · route: External AI

What counts: A vendor-supported MCP server gives outside agents access to the customer’s analytical objects or data, with documented authentication and no customer-built middleware. A vendor-supported server the customer operates, or one in preview, earns partly. A server built by the community or by customers, or one that only searches documentation, does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No Streamlit MCP server is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No vendor-supported MCP server exposing Streamlit customer analytical objects with documented authentication is found; official coding-agent skills are a different interface.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not publish or operate a vendor-supported Model Context Protocol (MCP) server for external agents.

### AGENTDISCOVER: Can an outside agent list what exists, dashboards, metrics, tables, without being told what to look for?

**Result: Not found** · route: External AI

What counts: A documented way to enumerate objects, not just fetch one by id. Reading a named dashboard is a different row; this is finding out the dashboard is there.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No API, CLI or MCP route for agents to enumerate apps or objects is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: The browser workspace lists apps, but no documented agent API, CLI or skill enumerates customer analytical objects; local run and skill-install commands do not perform discovery.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documents no programmatic API, CLI, or MCP endpoint for outside agents to enumerate or discover deployed apps, dashboards, or tables without being told what to look for.

### AGENTAUTH: Does the vendor document how an outside agent authenticates, a service account, a token, or acting on behalf of a user?

**Result: Not found** · route: External AI

What counts: A named credential type for programmatic access. Whose permissions apply is a different row; this is how the agent gets in at all.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No credential type for an outside agent to access Streamlit (Community Cloud API token, service account) is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented credential flow authenticates an outside agent to Streamlit analytical objects; GitHub sign-in for app management and outbound database credentials concern different actors and interfaces.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not document a dedicated outside agent authentication mechanism, service principal, or programmatic credential type for agent access.

### AGENTSKILL: Does the vendor publish skills or packaged instructions that teach an outside agent to use the product?

**Result: Yes** · route: External AI

What counts: A vendor-published skill, plugin or instruction pack (for example a SKILL.md or an agent plugin) that an outside coding agent loads to use the product well. Documentation of an MCP server alone is the MCP server row, not this.

- **Claude Opus 5.5**: yes, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: Streamlit publishes official agent skills bundled in the pip package; streamlit skills symlinks them into .agents/skills/ and .claude/skills/ so outside coding agents load them. Vendor-published skill pack, no beta label.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: Streamlit ships official skills with the Python package and installs them into .agents/skills and .claude/skills for outside coding agents. This directly establishes vendor-published instruction packs.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: Streamlit publishes official AI-agent skills installed via the 'streamlit skills' command, creating symlinks in .agents/skills/ and .claude/skills/ to teach AI agents how to build Streamlit apps following current APIs.

### AGENTCLI: Is there a command-line tool documented for use by outside agents?

**Result: Yes** · route: External AI

What counts: A vendor-supported command-line tool whose documentation addresses use by AI or coding agents, including non-interactive authentication. A general CLI with no agent guidance is `partly`.

- **Claude Opus 5.5**: partly, generally available
  - Quote: "This command installs Streamlit AI-agent skills to help AI agents build better Streamlit apps."
  - Source: https://docs.streamlit.io/develop/api-reference/cli/skills (checked 2026-10-26)
  - Reasoning: The vendor-supported streamlit CLI documents agent use (skills install, plus a -y non-interactive option), but no non-interactive authentication is documented, which the row requires for yes.
- **GPT-6.1 Sol**: yes, generally available
  - Quote: "If you use an AI coding agent, run `streamlit skills` to install Streamlit's official agent skills."
  - Source: https://docs.streamlit.io/develop/api-reference/cli (checked 2026-10-26)
  - Reasoning: The vendor explicitly documents its CLI for AI coding agents. The skills command documents --yes/-y for non-interactive installation; these are local package and app-development commands rather than an authenticated hosted analytical API.
- **Gemini 3.8 Flash**: yes, generally available
  - Quote: "If you use an AI coding agent, run `streamlit skills` to install Streamlit's official agent skills."
  - Source: https://docs.streamlit.io/develop/api-reference/cli (checked 2026-10-26)
  - Reasoning: Streamlit's command-line interface documentation explicitly addresses AI coding agents, directing them to use 'streamlit skills' to install official agent skills, with non-interactive support via the -y/--yes option.

### AGENTROLLOUT: Can an administrator allow or block outside-agent access for particular users, groups or workspaces?

**Result: Not found** · route: External AI

What counts: A documented admin control over agent or MCP access, separate from ordinary user permissions. An account-wide on/off is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No admin control over agent or MCP access is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No agent-specific access control is documented for selected users, groups or workspaces; ordinary app and GitHub permissions are not separate outside-agent rollout controls.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no administrator control to enable or block outside-agent access for particular users, groups, or workspaces.

### AGENTLIMIT: Can you cap or rate-limit what outside agents can consume?

**Result: Not found** · route: External AI

What counts: A limit on agent-driven usage (rate limit, quota, spend or compute cap) documented for the agent interface and separate from ordinary user limits. A general API rate limit that applies to agents is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No agent-interface limit is documented. The Community Cloud limit on GitHub app updates is not an agent API limit.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Hosting limits and GitHub-to-app update throttling are not a documented quota or rate limit on an outside-agent interface; the coding-agent skills do not document one.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documentation specifies no agent-specific quotas, spend caps, or rate limits for outside agents.

## Business context

### C4: Can you teach the AI about your business?

**Result: Not found**

What counts: Somewhere to write down what the schema does not say: which customers count as active, which of the three revenue tables is authoritative, what finance means by bookings. The AI reads it before answering.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Streamlit's agent skills teach outside agents the Streamlit APIs, not business context. No place to record business definitions for an AI is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Official outside-agent skills teach Streamlit APIs, while chat examples build custom apps; neither documents product-supported business context that an AI reads before analyzing data through Streamlit.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no business context layer or mechanism to provide business rules, definitions, or domain semantics to a built-in AI.

### C5: Can the business context you give the AI live in version control?

**Result: Not found**

What counts: The business context lives in files you can diff, review and roll back.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No business context for AI is documented, so none is in version control.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Apps and official coding skills are files, but no documented business-context feature for data-analysis AI is stored in version-controlled files; version-controlled app source alone is insufficient.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no business context files or version-controlled repository assets designed for AI grounding.

### CTXSCOPE: Can different teams get different business context for the AI, rather than one global set?

**Result: Not found**

What counts: Context attached to a workspace, team, audience or model rather than the whole tenant.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No business context for AI exists, scoped or otherwise.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: Project versus global installation of coding skills scopes API guidance, not business context for data-analysis AI; no team- or model-scoped business context is documented.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no AI context system allowing scoped business context per team, audience, or workspace.

### CTXTEST: Is there a way to validate business context before it affects the AI’s answers?

**Result: Not found**

What counts: A named validation, preview, staging or test step for context. Version control alone is C5.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No validation step for AI business context is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: App testing and sandboxed app previews validate developer applications, not a documented business-context staging or validation step before AI answers are affected.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no testing, staging, or validation step for AI business context before it affects answers.

### CTXSHOWN: Does an answer say which piece of business context shaped it?

**Result: Not found**

What counts: The specific instruction, description or rule surfaced with the answer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI answers exist, so none surfaces business context.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No answer is documented surfacing the specific business instruction, rule or description used by built-in or connected analysis AI; rendering arbitrary text requires application code.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant and no capability to surface the specific business context rules that shaped an answer.

### CTXINHERIT: Can the AI use column descriptions, dbt docs or warehouse comments as context?

**Result: Not found**

What counts: Context ingested from the warehouse or a modelling tool, not retyped in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI ingests warehouse comments or dbt docs.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented AI context ingestion reads warehouse comments, column descriptions or modeling-tool documentation through Streamlit; connection APIs alone do not establish inherited context.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no AI assistant that inherits or ingests column descriptions, dbt documentation, or warehouse comments as context.

### CTXNEG: Can you mark a table, field or answer as deprecated or off-limits to the AI?

**Result: Not found**

What counts: `yes`: a product setting that removes a table, field or answer from the AI's reach, or marks it deprecated so the AI avoids it, specific to the AI. An instruction in the AI's context telling it not to use something is `partly`. Ordinary data permissions are AIRESTRICT or GOVBIND, not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No AI-specific off-limits or deprecated setting is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: API deprecation notices and display badges are not AI-specific exclusion or deprecation of data; no documented context instruction or enforced AI data exclusion settles this row.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documents no setting or flag to mark tables, columns, or answers as deprecated or off-limits to an AI.

### CTXOWNER: Is there a documented owner or approval workflow for business context?

**Result: Not found**

What counts: `yes`: the documentation names who owns or approves business context (a role or person) and describes a review or approval step for changes to it. A named owner role with no review step, or a review workflow with no named owner, is `partly`. Edit permissions alone are not this.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No owner or approval workflow for AI context is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No business-context owner role or review workflow is documented for analysis AI; GitHub repository write permissions and app publishing do not identify such a context workflow.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit documents no business context ownership roles or approval workflows for context changes.

## Warehouse logic

### W_IR: Can the built-in assistant read logic that lives in your warehouse?

**Result: Not found** · route: Built-in AI

What counts: When your definitions live in dbt or a warehouse semantic view, the assistant uses them.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to read warehouse logic.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant is documented reading dbt, semantic views or other warehouse definitions; database connection examples are developer-authored reads.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant that reads warehouse-level logic, dbt models, or warehouse semantic views.

### W_IW: Can the built-in assistant write logic into your warehouse?

**Result: Not found** · route: Built-in AI

What counts: The assistant authors something that lands below the BI tool, a transform, a model, a view.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no built-in assistant to write warehouse logic.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant is documented authoring warehouse transforms, models or views; executing Python or SQL written by the app author does not establish assistant authorship.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no built-in assistant that writes warehouse transformations, views, or DDL pipelines.

### W_OR: Can an outside coding agent read logic in your warehouse?

**Result: Not found** · route: External AI

What counts: `yes`: an outside agent can read warehouse-level logic (view definitions, dbt models, semantic views) through the product. Table and column names or types alone are not logic and earn `nothing found`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No interface through Streamlit lets an outside agent read view definitions or dbt models. st.connection runs the customer's own queries.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No agent-facing interface retrieves warehouse-level logic through Streamlit; generic SQL connections do not specifically document reading view definitions or modeling logic for an outside agent.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no interface for outside coding agents to inspect or traverse warehouse view definitions or dbt models.

### W_OW: Can an outside coding agent write logic into your warehouse?

**Result: Not found** · route: External AI

What counts: An agent outside the product can author warehouse logic through it.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No agent interface for authoring warehouse logic through Streamlit is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: SQL execution and developer-built database apps do not document an outside-agent interface authoring warehouse transforms, models or views through Streamlit.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no documented agent interface for outside coding agents to author warehouse logic or DDL through the product.

### WHIMPORT: Can it use metric definitions you already maintain outside the tool?

**Result: Not found**

What counts: The product consumes definitions you already maintain in dbt, Cube or Snowflake semantic views, instead of requiring you to rebuild them here.

- **Claude Opus 5.5**: nothing found
  - Reasoning: Streamlit has no metric layer that imports dbt, Cube or semantic-view definitions.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No import or direct consumption of externally maintained metric definitions is documented; reading ordinary database rows through a connection does not establish metric-definition reuse.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not import or synchronize metric definitions maintained in external tools like dbt, Cube, or Snowflake semantic views.

## Shared definitions

### M_IR: Can the built-in assistant read your shared definitions?

**Result: Not found** · route: Built-in AI

What counts: The assistant answers using the metrics, dimensions and joins your team defined in the shared layer.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no shared definition layer and no assistant.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant is documented answering from a shared layer of maintained metrics, dimensions and joins; Python chart and metric-display APIs are not that layer.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not provide a built-in semantic definition layer, and has no assistant that reads shared metrics, dimensions, or joins.

### M_IW: Can the built-in assistant change your shared definitions?

**Result: Not found** · route: Built-in AI

What counts: `yes`: the built-in assistant can create or edit metrics, dimensions or joins in the shared definition layer. Writing descriptions or documentation for existing definitions only is `partly`.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no shared definition layer and no assistant.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No built-in assistant is documented creating or editing shared metrics, dimensions, joins or their documentation; developer-written app calculations do not establish this capability.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no shared semantic modeling layer and no assistant capable of creating or editing shared metric definitions.

### M_OR: Can an outside coding agent read your shared definitions?

**Result: Not found** · route: External AI

What counts: An agent can see what a field means, its description and business definition, rather than guessing from a column called REV_AMT.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no shared definition layer for outside agents to read.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No outside-agent interface is documented reading shared fields' descriptions and business definitions; coding skills about Streamlit APIs do not supply customer semantic definitions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not provide an interface for outside agents to inspect business definitions or semantic metrics.

### M_OW: Can an outside coding agent change your shared definitions?

**Result: Not found** · route: External AI

What counts: The semantic layer is writable from outside the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: There is no shared definition layer for outside agents to write.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented outside-agent interface writes a maintained semantic layer; general Python application editing does not establish changes to shared metric, dimension or join definitions.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit has no semantic layer writable by external agents.

### WHPUSH: Can definitions written in the tool be pushed back down to the warehouse?

**Result: Not found**

What counts: Work modelled in the BI tool can be written back out so it lives in the warehouse rather than in the product.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No definitions modelled in Streamlit are pushed to the warehouse.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No path pushes definitions modeled in Streamlit into warehouse models or views; application-authored database operations do not establish a product modeling-and-export workflow.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit does not support pushing analytical definitions created within the tool down into the warehouse as views or models.

### PROMOTE: Can a one-off calculation be turned into a maintained shared definition the whole team reuses?

**Result: Not found**

What counts: `yes`: the product documents a direct path from a calculation written for one chart or analysis to a maintained shared definition, without a developer rewriting it. A path that needs the calculation re-expressed by a developer (for example in a modeling language) is `partly`. Reusing logic that already exists as a shared definition, macro or snippet does not count.

- **Claude Opus 5.5**: nothing found
  - Reasoning: No path from a one-off calculation to a shared definition is documented.
- **GPT-6.1 Sol**: nothing found
  - Reasoning: No documented direct conversion promotes a chart or analysis calculation into a maintained shared definition; ordinary Python function reuse requires developer authorship and is not the specified promotion path.
- **Gemini 3.8 Flash**: nothing found
  - Reasoning: Streamlit provides no mechanism to promote a calculation written in an app directly into a maintained shared semantic definition.

