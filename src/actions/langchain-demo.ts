'use server';

import { HumanMessage } from '@langchain/core/messages';
import {
  ChatOpenAI,
  OpenAI,
} from '@langchain/openai';

const OPENAI_API_KEY = process.env.OPEN_AI_API_KEY;

const llm = new OpenAI({
  // modelName: 'gpt-3.5-turbo-instruct',
  openAIApiKey: OPENAI_API_KEY
});

const chatModel = new ChatOpenAI({
  // modelName: 'gpt-3.5-turbo',
  openAIApiKey: OPENAI_API_KEY
});

const text = 'What would be a good company name for a company that makes colorful socks?';
const messages = [new HumanMessage(text)]

export const langChainDemo = async () => {
  try {
    const llmResponse = await llm.invoke(text);
    console.log('llmResponse');
    console.log(llmResponse);
    console.log('\n-----\n');

    const chatModelResponse = await chatModel.invoke(messages);
    console.log('chatModelResponse');
    console.log(chatModelResponse);
    console.log('\n-----\n');

    return {
      llmResponse,
      chatModelResponse,
    }

  } catch (e) {
    console.log(e);
    return e;
  }
}
