import React, { useState } from 'react';

function Toggle(props) {
  const [isToggleOn, setIsToggleOn] = useState(true); // [ 초기값, 상태변경함수 ]

  // 방법 1. 함수 선언문 사용
  function handleToggle() {
    setIsToggleOn(!isToggleOn)
  }
  const handleClick = ()=> {

  }
  return (
    <button type = 'button' onClick = {handleToggle}>
      { isToggleOn? '켜짐' : '꺼짐' }
    </button>
  );
}

export default Toggle;