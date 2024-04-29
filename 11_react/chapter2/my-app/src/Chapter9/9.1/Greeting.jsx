import React from 'react';
function UserGreeting(){
  return <h1>환영합니다. 고객님!</h1>
}
function GuestGreeting(){
  return <h1>로그인이 필요합니다.</h1>
}
function Greeting(props) {
  const lsLoggedIn = props.IsLoggedIn;

  // 로그인 여부에 따라 두 개의 컴포넌트를 선택적으로 보여줌
  if (lsLoggedIn){
    return <UserGreeting />
  } // 불필요한 else문은 굳이 쓰지 않음
  return <GuestGreeting />
  // 1단계: if문만 사용해서 처리
}

export default Greeting;