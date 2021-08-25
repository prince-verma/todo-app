import { combineReducers } from 'redux';

import todoListReducer from './todo-list/reducers';

export default combineReducers({
  todos: todoListReducer,
});
