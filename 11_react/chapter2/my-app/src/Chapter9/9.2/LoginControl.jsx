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
  return (
    <>
      <Greeting IsLoggedIn={isLoggedIn} />
      {button}
    </>
  );
}

export default LoginControl;
