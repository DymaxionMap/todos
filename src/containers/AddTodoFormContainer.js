import { connect } from 'react-redux';
import { addTodo } from '../actions';
import AddTodoForm from '../components/AddTodoForm';

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
});

export default connect(null, mapDispatchToProps)(AddTodoForm);
