import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount, removeItemFromCart, selectCartList } from "../features/cart/cartSlice";

function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector(selectCartList);
  const formatter = new Intl.NumberFormat('ko-KR', {
    currency: 'KRW'
  });

  return (
    <>
      <h1>+‥ユ댄,LH맘,알기나,할까요ε♥з?¿‥+</h1>
      {/* 표 레이아웃 */}
      <Table hover>
      <thead>
        <tr>
          <th>No</th>
          <th>상품명</th>
          <th>수량</th>
          <th>가격</th>
        </tr>
      </thead>
      <tbody>
        
        {cartList.map((item,index)=>{
          return (
          <tr key={item.id}>
            <td>{index+1}</td>
            <td>{item.title}</td>
            <td>
              <button onClick={()=>{dispatch(decreaseCount(item.id))}}>-</button>
              {item.count}
              <button onClick={()=>{dispatch(increaseCount(item.id))}}>+</button>
            </td>
            <td>{formatter.format(item.price * item.count)}원</td>
            <button onClick={()=>{dispatch(removeItemFromCart(item.id))}}>x</button>
          </tr>
          )
        })}
      </tbody>
    </Table>
    </>
  );
};

export default Cart;