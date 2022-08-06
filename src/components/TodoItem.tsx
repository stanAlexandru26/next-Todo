import * as React from 'react';

import clsxm from '@/lib/clsxm';

function TodoItem() {
  return (
    <form className='flex flex-row items-center gap-5 focus:ring-0'>
      <input
        aria-label='todo-checkbox'
        type='checkbox'
        className={clsxm(
          ' h-6 w-6 rounded-full border from-gradientCyan to-gradientPurple   '
        )}
      ></input>
      <input
        type='text'
        aria-label='todo-input'
        placeholder='Create a new todo...'
        className={clsxm(
          'w-full p-4',
          'bg-white dark:bg-dark_veryDarkDesaturatedBlue',
          'rounded border-0 focus:ring-0',
          'text-light_veryDarkGreyBlue dark:text-dark_lightGreyBlue',
          'placeholder-light_veryDarkGreyBlue dark:placeholder-dark_lightGreyBlue'
        )}
      ></input>
    </form>
  );
}

export default TodoItem;
