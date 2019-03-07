import React, { Fragment } from 'react';
import AddTodoFormContainer from '../containers/AddTodoFormContainer';
import TodoListContainer from '../containers/TodoListContainer';

const App = () => {
  return (
    <Fragment>
      <AddTodoFormContainer />
      <TodoListContainer />
    </Fragment>
  );
};

export default App;
