import { connect } from 'react-redux';
import TodoList from './TodoList';
import Actions from '../../store/todo-list/actions';
import { todoListSelector } from '../../store/todo-list/selectors';

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch(Actions.add(text)),
    changeStatus: (id) => dispatch(Actions.toggleMarkComplete(id)),
    removeTodo: (id) => dispatch(Actions.remove(id)),
    search: (text) => dispatch(Actions.applyTextFilter(text)),
  };
};

export default connect(todoListSelector, mapDispatchToProps)(TodoList);
