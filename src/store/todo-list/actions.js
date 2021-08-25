import Types from './types';

const Actions = {
  add: (text) => ({
    payload: { text },
    type: Types.ADD_TODO,
  }),
  applyTextFilter: (text) => ({
    payload: { text },
    type: Types.APPLY_TEXT_FILTER,
  }),
  edit: (id, text) => ({
    payload: { id, text },
    type: Types.ADD_TODO,
  }),
  remove: (id) => ({
    payload: { id },
    type: Types.REMOVE_TODO,
  }),
  toggleMarkComplete: (id) => ({
    payload: { id },
    type: Types.TOGGLE_COMPLETE,
  }),
};

export default Actions;
