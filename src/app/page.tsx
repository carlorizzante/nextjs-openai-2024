'use server';

import Link from 'next/link';

const LINKS = [
  { href: '/open-ai-embedding-demo', label: 'OpenAI Embedding Demo' },
  { href: '/data-stax-demo', label: 'DataStack Demo' },
  { href: '/lang-chain-demo', label: 'LangChain Demo' },
]

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <ul>
        {LINKS.map(({ href, label }) => (
          <li key={href}><Link href={href}>{label}</Link></li>
        ))}
      </ul>
    </main>
  )
}
