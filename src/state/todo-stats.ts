import { selector } from 'recoil';

import { todoListState } from './todo-state';

type TodoStatsType = {
  totalNum: number;
  totalCompletedNum: number;
  totalUncompletedNum: number;
};
export const todoListStatsState = selector<TodoStatsType>({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;
    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});
