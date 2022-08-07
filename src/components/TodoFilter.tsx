import { MouseEventHandler, ReactElement, useCallback } from 'react';
import { useRecoilValue } from 'recoil';

import clsxm from '@/lib/clsxm';

import {
  FilterValue,
  todoListFilterState,
  useFilter,
} from '@/state/todo-list-filter-state';
import { useTodoList } from '@/state/todo-state';
import { todoListStatsState } from '@/state/todo-stats';

function TodoFilter(): ReactElement {
  const { totalUncompletedNum } = useRecoilValue(todoListStatsState);
  const filter = useRecoilValue(todoListFilterState);

  const { setListFilter } = useFilter();
  const updateFilter: MouseEventHandler<Element> = useCallback(
    (value) => {
      setListFilter(value);
    },
    [setListFilter]
  );
  const { clearCompletedItems } = useTodoList();
  return (
    <div
      aria-label='filter'
      className={clsxm(
        'flex  justify-around rounded p-4',
        'bg-white dark:bg-dark_veryDarkDesaturatedBlue',
        'text-light_darkGreyBlue dark:text-dark_darkGreyBlue'
      )}
    >
      <div className='text-light_darkGreyBlue dark:text-dark_darkGreyBlue'>
        {totalUncompletedNum} item{totalUncompletedNum === 1 ? '' : 's'} left
      </div>
      <div className='flex gap-1 sm:gap-4 '>
        {Object.entries(FilterValue).map(([key, value]) => (
          <button
            key={key}
            onClick={() => updateFilter(value)}
            className={clsxm(
              ' text-sm font-bold  sm:text-base',
              'hover:text-light_veryDarkGreyBlue dark:hover:text-dark_lightGreyBlue',
              filter === value ? 'text-brightBlue' : ''
            )}
          >
            {value}
          </button>
        ))}
      </div>
      <button
        onClick={clearCompletedItems}
        className={clsxm(
          'hover:text-light_veryDarkGreyBlue dark:hover:text-dark_lightGreyBlue'
        )}
      >
        Clear Completed
      </button>
    </div>
  );
}

export default TodoFilter;
