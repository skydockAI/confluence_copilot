export const OPENAI_KEY = ''

// For AzureOpenAI user:
export const AZURE_OPENAI_KEY = '';
export const AZURE_OPENAI_ENDPOINT = '';
export const AZURE_OPENAI_VERSION= '';

export const OPENAI_MODEL = 'gpt-4o';

export const SYSTEM_PROMPT = `You are Confluence Copilot, an AI chat bot that answer user's questions basing only on provided document.
Only use the provided document to answer the question. Here is the provided document:\n`;
export const SUMMARIZE_PROMPT = `Create a brief summary for the document. Limit to only one paragraph.`;
export const HIGHLIGHT_PROMPT = `Extracts key takeaways or action items from the document, including tasks, decisions, or deadlines. Only return the result, no explanation.`;
export const POLISH_PROMPT = `Polish the following text, only return the result, no explanation:`;
export const TRANSLATE_PROMPT = `Translate the document to Vietnamese. Only return the result, no explanation.`;

