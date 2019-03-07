import { connect } from 'react-redux';
import { fetchTodos } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = state => ({
  todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchTodos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
