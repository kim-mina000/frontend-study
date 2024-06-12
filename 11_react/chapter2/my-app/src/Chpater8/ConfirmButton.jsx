import React, { useState } from 'react';

function ConfirmButton(props) {
  const [userConfirm, setUserConfrim] = useState(false);

  const handleConfirm = () =>{
    setUserConfrim(!userConfirm);

    // set 함수는 비동기로 처리됨 (=비동기함수)
    // 비동기 함수를 동기형 함수로 쓰고싶을때는 함수처리해주면 됨
    // setUserConfrim(userConfirm => !userConfirm)
    // 요런식~!
    console.log(userConfirm);
  }

  return (
    // <button type='button' onClick={(e)=>{
    //   setUserConfrim(true);
    //   // e.target.readonly = true;
    //   }} disabled = {userConfirm}>
    //   {userConfirm? '확인됨' : '확인하기'}
    // </button>
      <button type='button' onClick={handleConfirm} disabled = {userConfirm}>
        {userConfirm? '확인됨' : '확인하기'}
      </button>
  );
}

export default ConfirmButton;

// Quiz 사용자에게 확인을 요구하는 버튼 컴포넌트
// 버튼을 누르면 '확인하기'가 확인됨으로 변경되면서 버튼 비활성화 처리 해보기

// 1) isConfirmed 라는 state 만들기
// 2) 버튼을 클릭하면 isConfirmed 상태를 바꾸는 handleConfirm() 이벤트 핸들러 만들기
// 3) 삼항 연산자를 사용하여 버튼의 내용을 '확인하기' -> '확인됨'으로 바꾸기
// 4) 버튼 비활성화 처리