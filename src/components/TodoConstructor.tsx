import { ChangeEventHandler, useCallback, useState } from 'react';

import clsxm from '@/lib/clsxm';

import { useTodoList } from '@/state/todo-state';

function TodoConstructor() {
  const [inputValue, setInputValue] = useState('');
  const { addListItem } = useTodoList();
  const addItem = useCallback(() => {
    if (inputValue) {
      addListItem(inputValue);
      setInputValue('');
    }
  }, [addListItem, inputValue]);
  const onChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target: { value } }) => {
      setInputValue(value);
    },
    []
  );

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      addItem();
    }
  };
  return (
    <div
      className={clsxm(
        'flex items-center rounded',
        'bg-white dark:bg-dark_veryDarkDesaturatedBlue',
        'text-light_veryDarkGreyBlue dark:text-dark_lightGreyBlue'
      )}
    >
      <input
        value={inputValue}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        type='text'
        aria-label='todo-input'
        placeholder='Create a new todo...'
        className={clsxm(
          'w-full border-0 p-4 focus:ring-0',
          'bg-inherit',
          'rounded',
          'placeholder-light_veryDarkGreyBlue dark:placeholder-dark_lightGreyBlue'
        )}
      ></input>
      <button
        onClick={addItem}
        className={clsxm(
          'p-4',
          'text-light_darkGreyBlue hover:text-light_veryDarkGreyBlue dark:text-dark_darkGreyBlue dark:hover:text-dark_lightGreyBlue'
        )}
      >
        Add
      </button>
    </div>
  );
}

export default TodoConstructor;
