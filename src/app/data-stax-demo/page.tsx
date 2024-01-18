'use server';

import { DataStaxDemo } from './datastax-demo';

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <DataStaxDemo />
    </main>
  )
}
