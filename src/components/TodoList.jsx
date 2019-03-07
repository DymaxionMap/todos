import React, { useEffect } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    todos.map(todo => <Todo text={todo} />)
  );
};

export default TodoList;
