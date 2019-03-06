import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AddTodoForm from './AddTodoForm';
import TodoList from './TodoList';
import { fetchTodos } from '../actions';

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
});

const App = ({ fetchTodos }) => {
  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Fragment>
      <AddTodoForm />
      <TodoList />
    </Fragment>
  );
};

App.propTypes = {
  fetchTodos: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
