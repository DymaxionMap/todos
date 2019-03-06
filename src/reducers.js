import { combineReducers } from 'redux';
import { ADD_TODO, INITIALIZE_TODOS } from './actions';

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.text];
    case INITIALIZE_TODOS:
      return action.todos;
    default:
      return state;
  }
};

export default combineReducers({
  todos,
});
