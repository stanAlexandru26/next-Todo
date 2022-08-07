import { useRecoilValue } from 'recoil';

import Layout from '@/components/layout/Layout';
import Seo from '@/components/layout/Seo';
import TodoConstructor from '@/components/TodoConstructor';
import TodoFilter from '@/components/TodoFilter';
import TodoItem from '@/components/TodoItem';

import { filteredTodoListState } from '@/state/todo-filter-state';

export default function HomePage() {
  const todoList = useRecoilValue(filteredTodoListState);

  return (
    <Layout>
      <Seo />
      <div className='flex flex-col gap-8'>
        <TodoConstructor />
        <div>
          {todoList.map((todoItem) => (
            <TodoItem key={todoItem.id} item={todoItem} />
          ))}
        </div>

        <TodoFilter />
      </div>
    </Layout>
  );
}
