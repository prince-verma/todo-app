import createReducer from '../utils/create-reducer';
import { getUniqueId } from '../utils/strings';
import Types from './types';

/**
 * {
 *    list: [
 *       {
 *          id: string,
 *          isCompleted: boolean,
 *          text: boolean,
 *       }
 *    ],
 *    filter: {
 *       text: string
 *    }
 * }
 */
const initialState = {
  list: [],
  filter: {
    text: null,
  },
};

const handleAddTodo = (state, action) => {
  const { list } = state;
  const { payload } = action;
  const { text } = payload;
  const id = getUniqueId();

  return {
    ...state,
    list: [
      {
        ...payload,
        id,
        isCompleted: false,
        text,
      },
      ...list,
    ],
  };
};

const handleRemoveTodo = (state, action) => {
  const { id } = action?.payload || {};
  const { list } = state;
  const todoItemIndex = list.findIndex((item) => item.id === id);
  list.splice(todoItemIndex, 1);

  return {
    ...state,
    list: [...(list || [])],
  };
};

const handleToggleComplete = (state, action) => {
  const { list } = state;
  const { id } = action?.payload || {};
  const todoItemIndex = list.findIndex((item) => item.id === id);
  const todoItem = list[todoItemIndex];
  list.splice(todoItemIndex, 1, {
    ...todoItem,
    isCompleted: !todoItem.isCompleted,
  });

  return {
    ...state,
    list: [...list],
  };
};

const handleApplyTextFilter = (state, action) => {
  const { text } = action?.payload || {};

  return {
    ...state,
    filter: {
      ...state.filter,
      text,
    },
  };
};

const actionHandlers = {
  [Types.ADD_TODO]: handleAddTodo,
  [Types.REMOVE_TODO]: handleRemoveTodo,
  [Types.TOGGLE_COMPLETE]: handleToggleComplete,
  [Types.APPLY_TEXT_FILTER]: handleApplyTextFilter,
};

export default createReducer(initialState, actionHandlers);
