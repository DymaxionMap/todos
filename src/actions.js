// Action types
export const ADD_TODO = 'ADD_TODO';
export const INITIALIZE_TODOS = 'INITIALIZE_TODOS';

// Action creators
export const addTodo = text => ({ type: ADD_TODO, text });
export const initializeTodos = todos => ({ type: INITIALIZE_TODOS, todos });

export const fetchTodos = () => (dispatch) => {
  fetch('/todos')
    .then(body => body.json())
    .then(todos => dispatch(initializeTodos(todos)));
};
