import Resolver from '@forge/resolver';
import api, { route, storage } from "@forge/api";
import OpenAI, { AzureOpenAI } from "openai";
import * as Config from './config'

// Use OpenAI if OPENAI_KEY is valid, otherwise use AzureOpenAI
const ai_client = Config.OPENAI_KEY && Config.OPENAI_KEY.trim() !== ''
  ? new OpenAI({ apiKey: Config.OPENAI_KEY })
  : new AzureOpenAI({
      apiKey: Config.AZURE_OPENAI_KEY, 
      endpoint: Config.AZURE_OPENAI_ENDPOINT, 
      apiVersion: Config.AZURE_OPENAI_VERSION
    });

const resolver = new Resolver();

resolver.define('callFeature', async (req) => {
  console.log(req);
  const pageId = req.context.extension.content.id;
  const response = await api.asUser().requestConfluence(route`/wiki/api/v2/pages/${pageId}?body-format=view`, {
    headers: {
      'Accept': 'application/json'
    }
  });
  const pageView = await response.json();
  const pageContent = pageView.body.view.value;
  const feature = req.payload.feature_code;
  var prompt = "";
  switch(feature){
    case "summarize":
      prompt = Config.SUMMARIZE_PROMPT;
      break;
    case "highlight":
      prompt = Config.HIGHLIGHT_PROMPT;
      break;
    case "qAndA":
      prompt = req.payload.question;
      break;
    default:
      return '[ERROR] Unknown feature';
  }
  const systemPrompt = `${Config.SYSTEM_PROMPT}${pageContent}`;
  const chatCompletion = await ai_client.chat.completions.create({
    messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: prompt }],
    model: Config.OPENAI_MODEL
  });
  const responseMessage = chatCompletion.choices[0].message.content;
  return responseMessage;
});

resolver.define('contextMenu', async (req) => {
  console.log(req);
  const selectedText = req.context.extension.selectedText;
  const moduleKey = req.context.moduleKey;
  var prompt = "";
  switch(moduleKey){
    case "confluence-copilot-context-menu-polish":
      prompt = `${Config.POLISH_PROMPT}\n${selectedText}`;
      break;
    case "confluence-copilot-context-menu-translate":
      prompt = `${Config.TRANSLATE_PROMPT}\n${selectedText}`;
      break;
    default:
      return '[ERROR] Unknown menu action';
  }
  const chatCompletion = await ai_client.chat.completions.create({
    messages: [{ role: 'user', content: prompt }],
    model: Config.OPENAI_MODEL
  });
  const responseMessage = chatCompletion.choices[0].message.content;
  return responseMessage;
});

export const handler = resolver.getDefinitions();
