import * as React from 'react';

import clsxm from '@/lib/clsxm';

function TodoConstructor() {
  return (
    <form>
      <input
        type='text'
        aria-label='todo-input'
        placeholder='Create a new todo...'
        className={clsxm(
          'w-full border-0 p-4 focus:ring-0',
          'bg-white dark:bg-dark_veryDarkDesaturatedBlue',
          'rounded  ',
          'text-light_veryDarkGreyBlue dark:text-dark_lightGreyBlue',
          'placeholder-light_veryDarkGreyBlue dark:placeholder-dark_lightGreyBlue'
        )}
      ></input>
    </form>
  );
}

export default TodoConstructor;
