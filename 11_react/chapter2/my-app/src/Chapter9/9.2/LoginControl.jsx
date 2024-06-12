import React, { useState } from 'react';
import Greeting from '../9.1/Greeting';

function LoginButton(props) {
  return (
    <button type='button' onClick={props.onClick}>로그인</button>
  );
}

function LogoutButton(props) {
  return (
    <button type='button' onClick={props.onClick}>로그아웃</button>
  );
}

function LoginControl(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  const handelLogin = () => {
    setIsLoggedIn(true);

  };
  const handelLogout = () => {
    setIsLoggedIn(false);
  };
  
  let button;
  if (isLoggedIn) {
    button = <LogoutButton onClick={handelLogout}/>
  } else {
    button = <LoginButton onClick={handelLogin}/>
  }
  // 2단계: if문 사용 + button 변수에 컴포넌트를 대입 
  // (참고) JSX 내부에서 조건부 렌더링 해도 됨, 근데 JSX 내부에서는 if문 사용 불가
  // => 삼항 연산자 또는 논리 연산자로 대체 가능
  return (
    <>
      <Greeting IsLoggedIn={isLoggedIn} />
      {button}
    </>
  );
}

export default LoginControl;
