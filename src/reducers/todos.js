import shortid from 'shortid';

const initialState = [
  {
    id: 0,
    title: 'text',
    desc: 'this is test...',
    done: true,
  },
];

const ADD_TODO = 'todos/add';
const TOGGLE_TODO = 'todos/toggle';

export default function reduce(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [action.payload, ...state];
    case TOGGLE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}

export const addTodo = ({ title, desc }) => ({
  type: ADD_TODO,
  payload: { id: shortid.generate(), title, desc, done: false },
});

export const toggleTodo = id => ({ type: TOGGLE_TODO, id });
