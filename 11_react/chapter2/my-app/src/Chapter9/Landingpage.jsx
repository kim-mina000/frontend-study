import React, { useState } from 'react';
import ToolBar from './ToolBar';

function Landingpage(props) {
  // 사용자의 로그인 여부를 상태로 관리
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const handleClickLogin = () => {
    setIsLoggedIn(true);
  };
  
  const handleClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <ToolBar 
        props = {{isLoggedIn, onClickLogin: handleClickLogin, onClickLogout: handleClickLogout}}
      // Quiz: 로그인 상태와 이벤트 핸들러를 툴바 컴포넌트로 넘겨 로그인 여부에 따라 툴바의 렌더링이 바뀌도록 구현
      />
      {/* <ToolBar isLoggedIn={isLoggedIn} onClickLogin={handleClickLogin} onClickLogout={handleClickLogout} /> */}
      
      <div style={{padding :16}}>💻리액트 공부 사이트💫</div>
    </>
  );
}

export default Landingpage;