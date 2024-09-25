# Confluence Copilot
**Your AI-Powered Confluence tool**

## What is Confluence Copilot?
Confluence Copilot is an AI-powered Confluence tool serving as a Proof of Concept (POC) to demonstrate how GenAI can significantly boost team productivity when working with Confluence.

## Technology Stack
Confluence Copilot is developed using the Atlassian Forge framework, utilizing NodeJs for the backend and React for the frontend. This integration ensures a seamless experience within the Confluence environment. For Generative AI services, Confluence Copilot supports both OpenAI and AzureOpenAI APIs, providing flexibility in choosing the AI infrastructure that best suits an organization's needs.

## Requirements
See [Set up Forge](https://developer.atlassian.com/platform/forge/set-up-forge/) for instructions to get set up.

## Instructions:
- Clone the source code:
```bash
git clone https://github.com/skydockAI/confluence_copilot.git
```
- Open [config.js](/src/resolvers/config.js) file and configure your OpenAI or AzureOpenAPI keys

- Install required libraries:
```bash
npm install
```
- Register the app (assuming that you have successfully setup Forge and login):
```bash
forge register
```

- Build and deploy the app:
```bash
forge deploy
```

- Install the app to your Atlassian site:
```bash
forge install
```

## Features:
### Document Summarization: 
Get a detailed summary of the Confluence page's content. While Confluence offers a summarization feature, it's part of the paid Atlassian Intelligence package. Confluence Copilot provides this feature as part of its core capabilities.
<img src="/images/summarize.png" alt="Document Summarization"></img>

### Key Highlights Extraction: 
Extract essential tasks, decisions, or deadlines from the Confluence page, ensuring that important details don't get lost in lengthy documents.
<img src="/images/highlight.png" alt="Key Highlights Extraction"></img>

### Chat with Confluence Page: 
Engage in a conversational interface where you can ask questions and get specific answers based on the content of the Confluence page.
<img src="/images/question.png" alt="Chat with Confluence Page"></img>

### Technical Term Explanation: 
Simply select a technical term, and the AI model will provide a clear and concise explanation, making complex terminology more accessible.
<img src="/images/explain.png" alt="Technical Term Explanation"></img>

### Polish Content: 
Select a phrase, sentence, or paragraph, and the AI model will refine and improve the writing for better clarity and style.
<img src="/images/polish.png" alt="Polish Content"></img>

### Language Translation: 
Choose a piece of text and translate it into another language effortlessly.
<img src="/images/translate.png" alt="Language Translation"></img>

### Multi-Module Support:
- **Macro Module**: Supports features like Summarize, Highlight, and Chat with Confluence pages.
<img src="/images/macro.png" alt="Macro Module"></img>

- **Content Action Module**: Offers the Summarization feature.
<img src="/images/content_action.png" alt="Content Action Module"></img>

- **Context Menu Module**: Provides Explain, Polish, and Translate functionalities.
<img src="/images/context_menu.png" alt="Context Menu Module"></img>

## License:
**Confluence Copilot** is open-source and licensed under the [GPL-3.0](LICENSE) license.