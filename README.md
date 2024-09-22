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

## License:
**Slides Assistant** is open-source and licensed under the [GPL-3.0](LICENSE) license.