'use client';

import { useState } from 'react';
import { dataStaxDemo } from '@/actions/datastax-demo';
import { useQuery } from '@tanstack/react-query';

export const DataStaxDemo = () => {

  // const [input, setInput] = useState('And before we knew, we left the ground.');
  const [input, setInput] = useState('Apple');

  const response = useQuery({
    queryKey: ['openai', input],
    queryFn: () => dataStaxDemo()
  });

  console.log(response.data);

  return (
    <>
      <p>See console</p>
    </>
  )
};
