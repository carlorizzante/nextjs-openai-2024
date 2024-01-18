'use client';

import { useState } from 'react';
import { openAIEmbeddingDemo } from '@/actions/openai-embedding-demo.action';
import { useQuery } from '@tanstack/react-query';

export const OpenAIEmbeddingDemo = () => {

  // const [input, setInput] = useState('And before we knew, we left the ground.');
  const [input, setInput] = useState('Apple');

  const response = useQuery({
    queryKey: ['openai', input],
    queryFn: () => openAIEmbeddingDemo(input)
  });

  console.log(input);
  console.log('total_tokens', response.data?.usage.total_tokens);
  console.log(response.data?.data[0].embedding);

  return (
    <>
      <p>See console</p>
    </>
  )
};
