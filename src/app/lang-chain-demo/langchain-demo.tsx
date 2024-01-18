'use client';

import { useState } from 'react';
import { langChainDemo } from '@/actions/langchain-demo';
import { useQuery } from '@tanstack/react-query';

export const LangChainDemo = () => {

  // const [input, setInput] = useState('And before we knew, we left the ground.');
  const [input, setInput] = useState('Apple');

  const response = useQuery({
    queryKey: ['openai', input],
    queryFn: () => langChainDemo()
  });

  console.log(response.data);

  return (
    <>
      <p>See console</p>
    </>
  )
};
