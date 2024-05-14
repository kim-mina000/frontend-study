import logo from './logo.svg';
import './App.css';
import { createGlobalStyle, styled } from "styled-components";
import reset,{ Reset } from "styled-reset";
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoListItem from './components/TodoListItem';
import TodoList from './components/TodoList';
import { useState } from 'react';
import { useRef } from 'react';
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
  // todos 배열 안에 객체 형태로 데이터가 존재
  // id, 할일에 대한 내용, 완료 여부
  // TodoList에 props로 전달
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '시리 저녁 챙겨주기',
      done: true
    },
    {
      id: 2,
      text: '원석이랑 놀러가기',
      done: true
    },
    {
      id: 3,
      text: '마라샹궈 먹기',
      done: false
    }
  ]);

  // todos 배열에 새 할일 객체를 추가하기 위한 함수
  // 화면과 관련 없는 변수를 만들 때 useReference 사용
  // 새 객체를 만들 때마다 id값에 1씩 더해줘야하는데, id값은 렌더링되는 정보가 아님 (화면에 보이지 않고 단순히 새로운 항목을 만들 때 참조되는 값임)
  // 이 데이터로 인해 화면이 바뀐다? 무조건 state로 만들어야 하지만
  // 화면이 바뀌지 않는다? useRef사용 (일반 변수와 다른 점: 값이 저장됨, 초기화 되면서 같은 값을 넣어줌)
  // useRef()를 사용하여 변수 생성
  const nextId = useRef(4);

  const handleInsert = (text) => {
    const todo = {
      id: nextId.current,
      text,
      done:false
    };

    // 방법 1
    const copyTodos = [...todos];
    copyTodos.push(todo);
    setTodos(copyTodos);
    
    // 방법 2 - 배열의 내장 함수 이용
    // setTodos(todos.concat(todo));

    nextId.current++; // nextId에 1씩 더하기
  
  };

  // todos 배열에서 id값으로 항목을 지우기 위한 함수

  const handleRemove = (id) => {

    console.log(id);

    // 방법1
    // const copyTodos = [...todos];
    // const targetIndex = todos.findIndex(todo => todo.id === id);
    // copyTodos.splice(targetIndex,1);

    // 편법 
    // setTodos([...todos, todo]);

    // setTodos(copyTodos);

    // 방법2 - 배열의 내장 함수 이용
    setTodos(todos.filter(todo => todo.id !== id));

  };

  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove}/>
      </TodoTemplate>
    </>
  );
}

export default App;
