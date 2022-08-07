import { useCallback } from 'react';
import { atom, useSetRecoilState } from 'recoil';

export const FilterValue = {
  SHOW_ALL: 'All',
  SHOW_COMPLETED: 'Completed',
  SHOW_UNCOMPLETED: 'Uncompleted',
};
export type FilterType = typeof FilterValue[keyof typeof FilterValue];
export const todoListFilterState = atom<FilterType>({
  key: 'todoListFilterState',
  default: FilterValue.SHOW_ALL,
});
export const useFilter = () => {
  const setFilter = useSetRecoilState(todoListFilterState);
  const setListFilter = useCallback(
    (filter: FilterType) => {
      setFilter(filter);
    },
    [setFilter]
  );
  return { setListFilter };
};
