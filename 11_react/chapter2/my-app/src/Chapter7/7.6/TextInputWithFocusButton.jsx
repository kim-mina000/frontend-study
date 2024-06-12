import { useEffect, useRef } from "react";

function TextInputWithFocusButton() {
  const inputEl = useRef(null); // 초기값은 null
  console.log(inputEl); // 레퍼런스 객체가 부르는 일반 자바 스크립트 객체를 반환함

  
  // useEffect에는 두가지 인자를 전달 1.함수, 2.의존성배열(어떤 값을 넣느냐에 따라 랜더링되는 시점이 달라짐)
  // 빈배열을 넣으면 마운트 됐을때 한번!
  // 비동기함수
  useEffect(() => {
    // 마운트 됐을때(렌더링 이후에) 실행되므로 input 엘리먼트가 나옴
    // console.log(inputEl);
    console.log(inputEl);

    // 활용 예: 로그인이나 회원가입 화면이 처음 보여질 때
    inputEl.current.focus();
  }, []);
  
  const handelButtonClick = () => {
    // 여기서 inputEl.current에 text input 객체를 담고 있음
    inputEl.current.focus(); // 강제 포커스 주는 메소드
  };

  return (
    <>
    {/* ref 속성에 inputEl을 넣어주기만 하면 해당 DOM에 접근 가능 */}
      <input ref={inputEl} type="text"></input>
      <button type="button" onClick={handelButtonClick}>Focus the input</button>
    </>
  );
};

export default TextInputWithFocusButton;