'use server';

import OpenAI from 'openai';

const OPENAI_API_KEY = process.env.OPEN_AI_API_KEY;

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});


export const openAIEmbeddingDemo = async (input: string) => {
  try {
    const embedding = await openai.embeddings.create({
      model: "text-embedding-ada-002",
      input: input, // "The quick brown fox jumped over the lazy dog"
      encoding_format: "float",
    });
    return embedding;

  } catch (e) {
    console.log(e);
    return e;
  }
}
