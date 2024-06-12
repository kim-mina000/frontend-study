import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList:[],

};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addToProductList: (state, {payload:productName})=>{
      // console.log(action);
      // state.productList.push(action.payload);
      state.productList.push(productName);
    },
  }
});
console.log(productSlice);

export const {addToProductList} = productSlice.actions;
export const selectProductList = state => {
  console.log(state);
  return state.product.productList};
export default productSlice.reducer;