import logo from './logo.svg';
import './App.css';
import TextInput from './component/ui/TextInput';
import Button from './component/ui/Button';
import MainPage from './component/page/MainPage';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import PostViewPage from './component/page/PostViewPage';

// https://colorhunt.co/palette/fefcf3f5ebe0f0dbdbdba39a
// #FEFCF3 #F5EBE0 #F0DBDB #DBA39A

const MainTitleText = styled.p`
  font-size: 60px;
  padding: 0;
  margin: 0;
  font-weight: bold;
  text-align: center;
  font-family: 'MoiraiOne-Regular';
  color: #DBA39A;

  @font-face {
    font-family: 'MoiraiOne-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_JAMO@1.0/MoiraiOne-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
`;
// 일반적으로 라우팅은 APP 컴포넌트에 구현하게 되는데
// APP 컴포넌트가 가장 처음으로 렌더링 되는 최상위 컴포넌트이기 때문
function App() {
  
  return (    
    <BrowserRouter>
      <MainTitleText>미니 블로그</ MainTitleText>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/post/:postId' element={<PostViewPage />} />
        {/* 여기서 :postId는 동적으로 변하는 파라미터를 위한 값 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
