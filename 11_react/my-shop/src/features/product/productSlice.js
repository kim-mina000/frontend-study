import { createSlice } from "@reduxjs/toolkit";

// 상품 정보를 담을 slice 만들기
const initialState = {
  productList:[],
  selectedProduct: null,

}
const productSlice = createSlice({

  name: 'product',
  initialState,
  reducers:{
    getAllProducts: (state,action) => {
      state.productList = action.payload;
      console.log(state);
    }
  }

});

// 리듀서 함수들
export default productSlice.reducer;
export const {getAllProducts} = productSlice.actions;
export const selectProductList = state => state.product.productList;