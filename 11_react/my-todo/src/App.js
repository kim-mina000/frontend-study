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
import { useEffect } from 'react';
import { v4 as uuidv4 } from "uuid";
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
    // {
    //   id: 1,
    //   text: '시리 저녁 챙겨주기',
    //   done: true
    // },
    // {
    //   id: 2,
    //   text: '원석이랑 놀러가기',
    //   done: true
    // },
    // {
    //   id: 3,
    //   text: '마라샹궈 먹기',
    //   done: false
    // }
  ]);
  
  // 로컬 스토리지에서 가져오기
  useEffect(()=>{
    const dbTodos = JSON.parse(localStorage.getItem('todos'))||[] ; // 만약 가져온 값이 null일때는 빈 배열을 넣어줌
    // todos가 없으면 null을 반환
    setTodos(dbTodos);
  },[])

  // 로컬 스토리지에 저장하기
  // (주의! DB가 아니기 때문에 DB처럼 쓰면 안됨, 모든 정보를 모두 저장하는 등의 행위는 금물)
  // 추가, 수정, 삭제 각 함수에 로직을 넣어도 되지만, 비효율적이기 때문에 useEffect()를 활용하면 한번에 처리 가능!
  // todos가 변경될 때마다 실행해라! <-라고 시킬 수 있음
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  // todos 배열에 새 할일 객체를 추가하기 위한 함수
  // 화면과 관련 없는 변수를 만들 때 useReference 사용
  // 새 객체를 만들 때마다 id값에 1씩 더해줘야하는데, id값은 렌더링되는 정보가 아님 (화면에 보이지 않고 단순히 새로운 항목을 만들 때 참조되는 값임)
  // 이 데이터로 인해 화면이 바뀐다? 무조건 state로 만들어야 하지만
  // 화면이 바뀌지 않는다? useRef사용 (일반 변수와 다른 점: 값이 저장됨, 초기화 되면서 같은 값을 넣어줌)
  // useRef()를 사용하여 변수 생성
  const nextId = useRef(4);

  const handleInsert = (text) => {
    const todo = {
      // id: nextId.current,
      id: uuidv4(),
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

  // todos 배열의 특정 요소를 수정하기 위한 함수
  const handleToggle = (id) => {
    // 방법 1
    // const copyTodos = [...todos];
    // const targetIndex = todos.findIndex((todo) => todo.id === id);
    
    // copyTodos[targetIndex].done = !copyTodos[targetIndex].done;
    // setTodos(copyTodos);


    // 방법 2 - 배열의 내장 함수 이용
    setTodos(todos.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo ));
    
  };

  return (
    <>
      <Reset />
      <GlobalStyle />
      <TodoTemplate>
        <TodoInsert onInsert={handleInsert}/>
        <TodoList todos={todos} onRemove={handleRemove} onToggle={handleToggle}/>
      </TodoTemplate>
    </>
  );
}

export default App;


// HTML 웹 스토리지란?
// 브라우저에서 제공하는 데이터 저장소
// 사용자의 브라우저 내에 로컬로 데이터를 저장할 수 있음 
// 프론트에 저장하는 것, 개인정보 등은 저장하면 x
// key-value 형태로 저장
// 최대 5MB까지 문자만 저장 가능
// 콘솔 창에서 연습해보기

// 웹 스토리지는 origin(도메인 및 프로토콜)당입니다. 
// 같은 출처의 모든 페이지는 동일한 데이터를 저장하고 액세스할 수 있습니다.

// HTML 웹 스토리지 객체
// HTML 웹 스토리지는 클라이언트에 데이터를 저장하기 위한 두 가지 객체를 제공합니다.
// window.localStorage - 만료 날짜 없이 데이터를 저장
// window.sessionStorage - 한 세션에 대한 데이터 저장(브라우저 탭을 닫으면 데이터가 손실됨)