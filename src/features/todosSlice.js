import shortid from 'shortid';
import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: [
    {
      id: 0,
      title: 'text',
      desc: 'this is test...',
      done: true,
    },
  ],
  reducers: {
    // addTodo(state, action) {
    //   const { title, desc } = action.payload;
    //   const todo = { id: shortid.generate(), title, desc, done: false };
    //   state.unshift(todo);
    // },
    addTodo: {
      reducer(state, action) {
        state.unshift(action.payload);
      },
      prepare({ title, desc }) {
        return {
          payload: { id: shortid.generate(), title, desc, done: false },
        };
      },
    },
    toggleTodo(state, action) {
      const targetTodo = state.find(todo => todo.id === action.payload.id); // M: payload를 항상 객체로 유지
      targetTodo.done = !targetTodo.done;
    },
  },
});

export const { addTodo, toggleTodo } = todosSlice.actions;
// 아래와 같은 액션 객체를 반환한다. {type: "todos/addTodo", payload} {type: "todos/toggleTodo", payload}
export default todosSlice.reducer;

/* M: createSlice 가 생성하는 객체는 다음과 같다.
{
  name: "todos",
  reducer: (state, action) => newState,
  actions: {
    addTodo: (payload) => ({type: "todos/addTodo", payload}),
    toggleTodo: (payload) => ({type: "todos/toggleTodo", payload})
  },
  caseReducers: {
    addTodo: (state, action) => newState,
    toggleTodo: (state, action) => newState,
  }
}



*/
