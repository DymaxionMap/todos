import React from 'react';
import { connect } from 'react-redux';
import Todo from './Todo';

const mapStateToProps = state => ({
  todos: state.todos,
});

const TodoList = ({ todos }) => (
  todos.map(todo => <Todo text={todo} />)
);

export default connect(mapStateToProps)(TodoList);
