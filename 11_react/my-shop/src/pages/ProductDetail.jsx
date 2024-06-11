import axios from "axios";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../features/product/productSlice";
import { useEffect } from "react";

function ProductDetail() {
  const {id} = useParams();

  const dispatch = useDispatch();
  
  // 처음 마운트 됐을 때 서버에 상품 id를 이용하여 데이터를 요청하고
  // 그 결과를 리덕스 스토어에 저장
  useEffect(() => {
    // 서버에 특정 상품의 데이터 요청
    // axios.get(`https://my-json-server.typicode.com/kim-mina000/MyJsonServer-shop/products/${id}`)
    // .then(res => dispatch(getDetailProduct(res.data)))
    // .catch((err)=>{
    //   console.error(err);
    // });

    // async await 사용
    const fetchProductByID = async ()=> {
      try {
        const response = await axios.get(`https://my-json-server.typicode.com/kim-mina000/MyJsonServer-shop/products/${id}`);
        dispatch(getDetailProduct(response.data));
      } catch (error) {
        console.error(error);
      }
    };
    fetchProductByID();
  }, []);
  const formatter = new Intl.NumberFormat('ko-KR', {
    style:'currency',
    currency: 'KRW'
  });
  
  const productDetail = useSelector(state => state.product.detailProduct);
  console.log(useSelector(state => state.product.detailProduct));


  return (
    <Container className="pt-3">
      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={productDetail.imagePath} width={"80%"}/>
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{productDetail.title}</h4>
          <p>{productDetail.content}</p>
          <p>{formatter.format(productDetail.price)}원</p>
          <Button variant="primary">주문하기</Button>
        </Col>
        {/* <Col md={6}>
          <img src={productDetail.imagePath} width={"80%"}/>
        </Col>
        <Col md={6}>
          <h4 className="pt-5">{productDetail.title}</h4>
          <p>{productDetail.content}</p>
          <p>{formatter.format(productDetail.price)}원</p>
          <Button variant="primary">주문하기</Button>
        </Col> */}
      </Row>
    </Container>
  );
};

export default ProductDetail;