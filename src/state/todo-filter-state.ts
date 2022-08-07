import { selector } from 'recoil';

import {
  FilterType,
  FilterValue,
  todoListFilterState,
} from './todo-list-filter-state';
import { TodoItemType, todoListState } from './todo-state';

export const filteredTodoListState = selector<TodoItemType[]>({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filter: FilterType = get(todoListFilterState);
    const list = get(todoListState);
    switch (filter) {
      case FilterValue.SHOW_COMPLETED:
        return list.filter((item) => item.isComplete);
      case FilterValue.SHOW_UNCOMPLETED:
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});
