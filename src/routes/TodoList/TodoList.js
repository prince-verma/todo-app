import React, { useState } from 'react';

import { todoList as strings } from '../../locales';
import { todoList as constants } from '../../constants';

import Info from '../../components/Info';
import Header from '../../components/Header';
import InputBox from '../../components/InputBox';

import Footer from './Footer';
import TodoItem from './TodoItem';

export default function TodoList(props) {
  const {
    completedCount,
    isEmpty,
    items,
    totalCount,
    addTodo,
    removeTodo,
    changeStatus,
    search,
  } = props;
  const [value, setValue] = useState('');
  const [todoListMode, setTodoListMode] = useState(constants.MODE_CREATE);
  const isCreateMode = todoListMode === constants.MODE_CREATE;

  const handleTodoItemClick = (item) => {
    changeStatus(item.id);
  };

  const handleTrashIconClick = (item) => {
    removeTodo(item.id);
  };

  const handleTextChange = (text) => setValue(text);

  const handleSearch = (text) => {
    setValue(text);
    search(text);
  };

  const handleEnterPress = () => {
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  const handleModeChange = (mode) => {
    setValue('');
    search(null);
    setTodoListMode(mode);
  };

  const inputBoxProps = isCreateMode
    ? {
        handleChange: handleTextChange,
        onEnterPress: handleEnterPress,
        placeholder: strings.addTodoBox.placeholder,
      }
    : {
        handleChange: handleSearch,
        placeholder: strings.searchTodoBox.placeholder,
      };

  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <Header title={strings.title} />
          <InputBox {...inputBoxProps} value={value} />
          <ul className="list-unstyled todo-list">
            {items.map((item) => (
              <TodoItem
                key={item.id}
                item={item}
                onClick={handleTodoItemClick}
                onDeleteClick={handleTrashIconClick}
              />
            ))}
          </ul>
          <Footer
            isCreateMode={isCreateMode}
            count={totalCount - completedCount}
            totalCount={totalCount}
            changeTodoListMode={handleModeChange}
          />
          {isEmpty && <Info message={strings.noItems} />}
        </div>
      </div>
    </div>
  );
}
