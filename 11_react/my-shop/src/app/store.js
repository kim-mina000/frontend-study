import {configureStore} from "@reduxjs/toolkit";
import productSlice from "../features/product/productSlice";

// 전역상태를 보관하는 store만들기
export const store = configureStore({
  
  reducer:{
    product: productSlice,
  }
  });