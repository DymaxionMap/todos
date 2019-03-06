import React from 'react';
import Todo from './Todo';

const TodoList = () => {
  const todos = ['todo1', 'todo2', 'todo3'];
  return (
    todos.map(todo => <Todo text={todo} />)
  );
};

export default TodoList;
