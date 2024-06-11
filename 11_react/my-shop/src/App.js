import {createGlobalStyle} from 'styled-components';
import Layout from './pages/Layout';
import {Routes,Route, useParams} from 'react-router-dom';
import Cart from './pages/Cart';
import Main from './pages/Main';
import ProductDetail from './pages/ProductDetail';

// 글로벌(공통) 스타일 설정
const GlobalStyle = createGlobalStyle`

  body {
    box-sizing: border-box;
  }
  
  * {
    box-sizing: inherit;
  }
  
  #root {
    text-align: center;
  }

  .cursor-pointer {
    cursor: pointer;
  }
`;

function App() {


  return (
    <>
      <GlobalStyle />
    {/* 부트스트랩 연습 */}
    {/* 1) 리액트 부트스트랩 */}
    {/* <Button variant="outline-warning">Warning</Button> */}
    {/* 2) 기존 부트스트랩 */}
    {/* <button type="button" className="btn btn-outline-danger">Danger</button> */}
    {/* class => className으로 바꿔주기 */}



    {/* Quiz: 헤더를 Layout 컴포넌트로 추출 및 Nested Route 구성해보기 */}
    	<Routes>
    		<Route path="/" element={<Layout />}>
          {/* index: index route(여기서는 기본 자식 라우트를 의미) */}
          {/* path는 그 주소로 접근해야 보여짐 */}
          {/* <Route index element={<Cart />} /> */}
          <Route index element={<Main />} />
          {/* <Route path='detail' element={<ProductDetail />}/> */}
          {/* Quiz: 상품별 상세페이지 여러 개를 라우팅 하려면? URL 파라미터 사용
            예: /detail/1로 접속하면 productId에 1이 담기도록 설정
          */}
          <Route path='/detail/:id' element={<ProductDetail />}/>

        </Route>
    	</Routes>
  </>
  );
}

export default App;

// 패키지 설치 및 StrictMode 제거
// npm install react-bootstrap bootstrap styled-components react-router-dom @reduxjs/toolkit react-redux axios

// Bootstrap
// 레이아웃을 복사 붙여넣기 식으로 편하게 개발 가능한 css, js 라이브러리
// 리액트 용이 따로 있는데 나는 기존 것이 더 익숙하다 싶으면 기존 Bootstrap을 써도 무관
// https://react-bootstrap.netlify.app/
