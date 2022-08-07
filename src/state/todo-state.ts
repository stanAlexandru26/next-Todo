import { nanoid } from 'nanoid';
import { useCallback } from 'react';
import { atom, useRecoilState } from 'recoil';

export type TodoItemType = {
  id: string;
  text: string;
  isComplete: boolean;
};
export const todoListState = atom<TodoItemType[]>({
  key: 'todoListState',
  default: [],
});

function replaceItemAtIndex(
  arr: TodoItemType[],
  index: number,
  newValue: TodoItemType
) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}
function removeItemAtIndex(arr: TodoItemType[], index: number) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}
export const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const addListItem = useCallback(
    (text: string) => {
      setTodoList((oldTodoList) => [
        {
          id: nanoid(),
          text,
          isComplete: false,
        },
        ...oldTodoList,
      ]);
    },
    [setTodoList]
  );

  const toggleItemCompletionAtIndex = useCallback(
    (index: number, item: TodoItemType) => {
      const newList = replaceItemAtIndex(todoList, index, {
        ...item,
        isComplete: !item.isComplete,
      });
      setTodoList(newList);
    },
    [setTodoList, todoList]
  );
  const deleteItemAtIndex = useCallback(
    (index: number) => {
      const newList = removeItemAtIndex(todoList, index);
      setTodoList(newList);
    },
    [setTodoList, todoList]
  );

  const clearCompletedItems = useCallback(() => {
    const newList = todoList.filter((item) => !item.isComplete);
    setTodoList(newList);
  }, [setTodoList, todoList]);

  return {
    addListItem,
    deleteItemAtIndex,
    toggleItemCompletionAtIndex,
    clearCompletedItems,
  };
};
