import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  count: 0
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: intialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrease: (state, action) => {
      state.count -= 1;
    },
    increaseByNum: (state, action) => {
      console.log("action ---> ", action);
      state.count += action.payload;
    }
  }
});

export const { increment, decrease, increaseByNum } = counterSlice.actions;
export const counterSelector = state => state.counter.count

export default counterSlice.reducer;
