import { createSlice } from "@reduxjs/toolkit";

// 상품 정보를 담을 slice 만들기
const initialState = {
  productList: [],
  detailProduct: {},
}
const productSlice = createSlice({

  name: 'product',
  initialState,
  reducers:{
    getAllProducts: (state,action) => {
      state.productList = action.payload;
    },
    getDetailProduct: (state,action) => {
      state.detailProduct = action.payload;
    }
  }

});

// 리듀서 함수들
export default productSlice.reducer;

// 액션 생성 함수
export const {getAllProducts, getDetailProduct} = productSlice.actions;

// 선택자 함수
export const selectProductList = state => state.product.productList;