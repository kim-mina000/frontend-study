import { configureStore } from "@reduxjs/toolkit";
import todoDateReducer from "./slice/todoDate";

export const store = configureStore({
  
  reducer: {
    todoDate : todoDateReducer,
  }

});