import * as React from 'react';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/layout/Seo';
import TodoConstructor from '@/components/TodoConstruction';
import TodoFilter from '@/components/TodoFilter';
import TodoItem from '@/components/TodoItem';

export default function HomePage() {
  return (
    <Layout>
      <Seo />
      <div className='flex flex-col gap-16'>
        <TodoConstructor />
        <TodoItem />
        <TodoFilter />
      </div>
    </Layout>
  );
}
