import { createSlice, current } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import productSlice from "../product/productSlice";
// 장바구니 정보를 담을 slice 만들기

const initialState = {
  cartList :[
    {
      id:'1',
      title:'Arcsabar 11 Pro',
      price:299000,
      count: 2
    },
    {
      id:'2',
      title:'Aerus Z',
      price:199000,
      count: 1
    },

  ],

}

// proxy 안의 객체를 읽고싶으면 current 함수를 쓰기! current(state) 처럼!
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers:{
    addCartList :(state, action)=>{
      const newItem = {...action.payload.productDetail, count:action.payload.orderCount, price:action.payload.orderCount*action.payload.productDetail.price};
      const selectedItem = state.cartList.find((item)=>item.id === newItem.id);
      
      if (selectedItem === undefined) {
        state.cartList.push(newItem);
      } else {
        state.cartList.forEach((listItme)=>{
          if (listItme.id === newItem.id) {
            listItme.count += newItem.count;
          }
        });
      }
    },
    // 수량을 변경하는 리듀서 만들기
    // Quiz 전달받은 상품의 id 값으로 cartList에서 해당 상품을 찾아 수량을 1씩 증가/감소
    increaseCount: (state,{payload : productId})=>{
      const selectedItem = state.cartList.find((item)=>item.id === productId);
      selectedItem.count++;
    },
    decreaseCount: (state, action)=>{
      const selectedItem = state.cartList.find((item)=>item.id === action.payload);
      if (selectedItem.count < 1) {
        selectedItem.count = 0;
        } else {
          selectedItem.count--;
        }
    }


  }

})

export default cartSlice.reducer;
export const selectCartList = state => state.cart.cartList;
export const {addCartList,increaseCount,decreaseCount} = cartSlice.actions;