import { useDispatch, useSelector } from "react-redux";
import { addToProductList, selectProductList } from "./productSlice";
import { useState } from "react";

function ProductList() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState('');
  const list = useSelector(selectProductList);

  const handleAddProduct = () => {
    dispatch(addToProductList(product));
    setProduct('');
  }
  console.log(list);

  return (
    <>
      <p>
        상품추가:
        <input 
          type="text"
          onChange={(e) => setProduct(e.target.value)}
          value={product}
        />
      </p>
      <button
        type="button"
        onClick={()=>handleAddProduct()}
      >
        추가
      </button>
      <p>상품목록</p>
      <ul>
        {list.map((item, index)=>{
          return <li key={index}>{item}</li>
        })}
      </ul>
    </>
  );
};

export default ProductList;