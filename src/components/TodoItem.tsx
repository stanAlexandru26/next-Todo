import { useCallback, useMemo } from 'react';
import { useRecoilValue } from 'recoil';

import clsxm from '@/lib/clsxm';

import { TodoItemType, todoListState, useTodoList } from '@/state/todo-state';

function TodoItem({ item }: { item: TodoItemType }) {
  const todoList = useRecoilValue(todoListState);
  const { deleteItemAtIndex, toggleItemCompletionAtIndex } = useTodoList();
  const index = useMemo(
    () => todoList.findIndex((listItem) => listItem === item),
    [item, todoList]
  );

  const toggleItemCompletion = useCallback(() => {
    toggleItemCompletionAtIndex(index, item);
  }, [index, item, toggleItemCompletionAtIndex]);
  const deleteItem = useCallback(() => {
    deleteItemAtIndex(index);
  }, [deleteItemAtIndex, index]);
  return (
    <div
      className={clsxm(
        'flex items-center justify-between p-4 first:rounded-t  last:rounded-b ',
        'bg-white dark:bg-dark_veryDarkDesaturatedBlue',
        'text-light_veryDarkGreyBlue dark:text-dark_lightGreyBlue',
        'group',
        'border-y border-dark_lightGreyBlue first:border-t-0 last:border-b-0 dark:border-dark_veryDarkGreyBlue'
      )}
    >
      <div
        className='flex w-full cursor-pointer items-center gap-4'
        onClick={toggleItemCompletion}
      >
        <button
          aria-label='Complete Todo'
          className={clsxm(
            'flex h-6 w-6 shrink-0 appearance-none items-center justify-center rounded-full border',
            'dark:border-dark_veryDarkGreyBlue dark:bg-dark_veryDarkDesaturatedBlue',
            'hover:border-light_veryDarkGreyBlue dark:hover:border-dark_lightGreyBlue',
            'transition ease-linear',
            item.isComplete
              ? 'bg-gradient-to-br from-gradientCyan to-gradientPurple '
              : ' '
          )}
        >
          {item.isComplete && <TodoItemSVG />}
        </button>
        <p
          className={clsxm(
            item.isComplete
              ? 'text-light_lightGreyBlue line-through dark:text-dark_darkGreyBlue'
              : ''
          )}
        >
          {item.text}
        </p>
      </div>

      <button
        aria-label='Delete Todo'
        onClick={deleteItem}
        className={clsxm('group-hover:inline-block sm:hidden')}
      >
        <CloseIconSVG />
      </button>
    </div>
  );
}

const CloseIconSVG = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    width='.75em'
    height='1em'
    viewBox='0 0 384 512'
  >
    <path
      fill='currentColor'
      d='M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06a31.894 31.894 0 0 1-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1 56.6 467.6c-6.328 7.594-15.42 11.52-24.59 11.52a31.907 31.907 0 0 1-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206 327.4 43.5c11.3-13.58 31.48-15.42 45.06-4.094 13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z'
    />
  </svg>
);

const TodoItemSVG = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    aria-hidden='true'
    width='14'
    height='10'
    viewBox='0 0 512 512'
  >
    <path
      fill='#fff'
      d='m173.898 439.404-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'
    />
  </svg>
);

export default TodoItem;
