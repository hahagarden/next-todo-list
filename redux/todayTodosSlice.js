import { createSlice } from '@reduxjs/toolkit';

const todayTodosSlice = createSlice({
  name: 'todayTodos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.splice(
        state.indexOf((el) => el.id === action.payload.id),
        1
      );
    },
    resetTodo: (state) => [],
  },
});

export const { addTodo, removeTodo, resetTodo } = todayTodosSlice.actions;
export default todayTodosSlice.reducer;
