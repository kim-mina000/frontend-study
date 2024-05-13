import logo from './logo.svg';
import './App.css';
import { createGlobalStyle, styled } from "styled-components";
import reset,{ Reset } from "styled-reset";
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';
// Reset은 컴포넌트! ${reset}으로 접근해도 되고 {Reset} 컴포넌트로 접근해도 됨

// 패키지 설치
// npm install styled-components styled-reset react-icons

// 글로벌(공통) 스타일 적용과 reset css 적용
// createGlobalStyle을 이용하여 글로벌 스타일 컴포넌트를 만들고 가장 첫번째로 렌더링하면 됨 

const GlobalStyle = createGlobalStyle`
${console.log(reset)}
  /* reset css를 넣고 싶다? */
  ${reset}

  /* 글로벌(공통) 스타일 */
  body {
    background: #e9ecef;
  }
`;



function App() {
  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert />
        <TodoList />
      </TodoTemplate>
    </>
  );
}

export default App;
