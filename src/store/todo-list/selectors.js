import { createSelector } from 'reselect';

import { NAME_SPACE } from './types';

export const getRootState = (state) => state[NAME_SPACE];

export const todoListSelector = createSelector(getRootState, (todos) => {
  const { list, filter } = todos;
  let items = list;
  const completedCount = list.reduce(
    (acc, item) => acc + (item.isCompleted ? 1 : 0),
    0,
  );

  if (filter?.text) {
    const filterText = filter?.text;
    items = items.filter((item) => item.text.includes(filterText));
  }

  return {
    completedCount,
    items,
    totalCount: list.length,
    isEmpty: items.length === 0,
  };
});
