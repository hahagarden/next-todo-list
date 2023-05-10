import { createSlice } from '@reduxjs/toolkit';

const savedTodosSlice = createSlice({
  name: 'savedTodos',
  initialState: [],
  reducers: {
    addSaving: (state, action) => {
      state.push(action.payload);
    },
    removeSaving: (state, action) => {
      state.splice(
        state.indexOf((el) => el.id === action.payload.id),
        1
      );
    },
    resetSaving: (state) => [],
  },
});

export const { addSaving, removeSaving, resetSaving } = savedTodosSlice.actions;
export default savedTodosSlice.reducer;
