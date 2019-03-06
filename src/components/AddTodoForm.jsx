import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addTodo } from '../actions';

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
});

class AddTodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }

  handleClick() {
    const { addTodo } = this.props;
    const { text } = this.state;
    addTodo(text);
  }

  render() {
    const { text } = this.state;
    return (
      <form>
        <input type="text" value={text} onChange={this.handleChange} />
        <button type="button" onClick={this.handleClick}>Add todo</button>
      </form>
    );
  }
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(AddTodoForm);
