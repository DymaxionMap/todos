import React, { Fragment } from 'react';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';

const App = () => (
  <Fragment>
    <AddTodoForm />
    <TodoList />
  </Fragment>
);

export default App;
