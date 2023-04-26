import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  todosArr: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: intialState,
  reducers: {
   changeTodoState : (state, action) => {
    state.todosArr = [...action.payload]
   }
  }
});

export const { changeTodoState } = todoSlice.actions;
export const todoSelector = state => state.todo.todosArr

export default todoSlice.reducer;
