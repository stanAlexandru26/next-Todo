import { useState } from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/layout/Seo';

export default function HomePage() {
  const [todo, setTodo] = useState('');

  return (
    <Layout>
      <Seo />
      <div className='flex flex-col  '>
        <input aria-label='input' onChange={(e) => setTodo(e.target.value)} />
        <button type='button' onClick={() => setTodo('')}>
          Clear
        </button>
        <div>{todo}</div>
      </div>
    </Layout>
  );
}
