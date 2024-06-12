import axios from "axios";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import styled, {keyframes} from "styled-components";

import { clearSelectedProduct, getDetailProduct, selectGetDetailProduct } from "../features/product/productSlice";
import { toast } from "react-toastify";


// styled component를 이용한 애니메이션 속성 적용
const highlight = keyframes`
  from { background-color: #cff4fc; }
  50% { background-color: #f2fafc; }
  to { background-color: #cff4fc; }
`;

const StyledAlert = styled(Alert)`
  animation: ${highlight} 0.8s linear infinite;
`;




function ProductDetail() {
  const {id} = useParams();

  const dispatch = useDispatch();
  const [timeOut, setTimeOut] = useState(true);
  const [orderCount, setOrderCount] = useState(1);

  const handleChangeOrderCount = (e) =>{
    // 숫자 외 입력시 유효성 검사 후 경고 토스트 띄우기
    if (isNaN(e.target.value)) {
      toast('✋숫자만 입력하세요!');
      return;
    } else {
      setOrderCount(Number(e.target.value));
    }
  }
  
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
    
    // 상품 상세 페이지가 언마운트 될 때 전역 상태 초기화
    return () =>{
      dispatch(clearSelectedProduct());
      };
      }, []);
      
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeOut(false);
    }, 3000);
    // 불필요하게 타이머가 계속 쌓이는 것을 정리
    return () =>{
      clearTimeout(timer);
    }
  }, []);
  const randomNum = Math.floor(Math.random()*1000%100);
  
  const formatter = new Intl.NumberFormat('ko-KR', {
    style:'currency',
    currency: 'KRW'
  });
  
  const productDetail = useSelector(selectGetDetailProduct);

  

  return (
    <Container className="pt-3">
      {/* alert 을 띄우고 3초 뒤에 사라지게 만들기 */}
      {/* 힌트: 처음 렌더링 됐을 때 setTimeout으로 타이머 설정 + 조건부 렌더링 */}
      {timeOut && <StyledAlert variant="info" onClose={() => setTimeOut(false)} dismissible>현재 {randomNum}명이 이 상품을 보고 있습니다</StyledAlert>}

      <Row>
        {/* Quiz: 데이터 바인딩 작업 */}
        <Col md={6}>
          <img src={productDetail?.imagePath} width={"80%"}/>
        </Col>

        <Col md={6}>
          <h4 className="pt-5">{productDetail?.title}</h4>
          <p>{productDetail?.content}</p>
          <p>{formatter.format(productDetail?.price)}원</p>

          <Col md={4} className="m-auto mb-3" >
          {/* Quiz: text input을 제어 컴포넌트로 만들기 */}
            <Form.Control type="text" onChange={handleChangeOrderCount} value={orderCount} />
          </Col>

          <Button variant="primary">주문하기</Button>
        </Col>
        {/* 
        기존의 데이터 초기값이 null이기 때문에 오류가 났던것!
        해결하기 위해 여러가지 방법이 있는데 if문 써주거나 내려받은 값이 null이면 아예화면을 로딩하지 않거나
        ? <옵셔널 체이닝을 통해 해결 가능 하다
        */}
      </Row>
    </Container>
  );
};

export default ProductDetail;