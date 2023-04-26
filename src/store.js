import {configureStore} from '@reduxjs/toolkit';

import counterReducer from './Redux/counterSlice';
import todoReducer from './Redux/TodoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todo: todoReducer,
  }
});


