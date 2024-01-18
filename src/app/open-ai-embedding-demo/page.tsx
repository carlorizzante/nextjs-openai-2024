'use server';

import { OpenAIEmbeddingDemo } from './openai-embedding-demo';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <OpenAIEmbeddingDemo />
    </main>
  )
}
