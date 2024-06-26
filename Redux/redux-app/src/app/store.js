import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/slice/todoSlice";

export const store = configureStore({
  reducer: {
    todoSlice : todoSlice,
  }
}
);