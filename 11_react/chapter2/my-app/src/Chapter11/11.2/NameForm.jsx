import React, { useState } from "react";

function NameForm() {
  const [value, setValue] = useState('');
  // (참고) 리액트에서 submit이벤트를 이용하여 서버에 데이터를 전송하지는 않음
  // submit이벤트 =동기식 = 응답이 올때까지 기다리는게 동기식
  // 비동기식은 응답이 올때까지 기다리지 않음
  // 일반적으로 state에 들어있는 데이터를 ajax로 서버에 전송
  // ajax는 다음에 배울거임
  // ajax 사용방법 = fetch - 함수, axios - 라이브러리

  
  const handleSubmit = () => {
    alert(`입력한 이름: ${value}`);
    //e.preventDefault(); // 해당 이벤트의 기본 동작을 막는다 (submit 되는 순간 페이지가 새로고침 되는것을 막음)
    // 여기서 submit 이벤트의 기본 동작은 폼 데이터를 서버로 전송하고 새로고침
    
  }
  const handleChange = (e) => {
    // e.target.value: 이벤트가 발생한 타겟 (input 객체)에 입력된 값
    setValue(e.target.value);
    // 입력값이 state를 통해 관리되는 이런 방식을 제어 컴포넌트라고 부름


    // 만약 사용자가 입력한 모든 알파벳을 대문자로 변경시켜서 관리하고 싶다면?
    setValue(e.target.value.toUpperCase());
    
    if (e.key === 'Enter'){
      handleSubmit();
  }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          이름 : 
          <input value={value} type="text" onChange={handleChange} />
          {/* <input type="text" onChange={handleChange} /> */}
          {/* state에서 값을 가져다 넣어줌으로써 항상 state에 들어있는 값이 input에 표시됨 */}
        </label>
        <button type="submit">제출</button>
      </form>
    </>
  );
};

export default NameForm;

// (참고) 리액트에서 submit 이벤트(동기식)를 이용하여 서버에 데이터를 전송하지는 않음
// 일반적으로 State에 들어있는 데이터를 ajax로 서버에 전송(이때 사용하는 것이 fetch, axios)