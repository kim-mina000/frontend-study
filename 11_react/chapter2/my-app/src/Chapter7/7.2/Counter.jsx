import React, { useState } from 'react';

function Counter(props) {
// state를 사용해서 값이 바뀔때마다 재렌더링이 되도록 하기
  let [count, setCount] = useState(0); // 초기값 입력 0
  console.log(useState(0)); // [0, ƒ]
  // useState()의 결과로 배열이 반환됨 -> [초기값, 상태변경함수]
  // 배열의 구조 분해 할당을 사용하여 변수 선언 및 할당
  const [a, setA] = useState('냥,,');

  // state 미사용 시
  let wrongCount = 0;
  let [colorName, setColorName] = useState(`rgb(0,0,0)`);
  const [subscribe, setsubscribe] = useState(false);
  return (
    <>
      <p>총 {count}번 클릭 했습니다.</p>

      {/* 1. State 직접 수정 */}
      {/* 직접 count state를 증가시키면 값은 증가되지만 재 렌더링이 일어나지 않음! */}
      <button type="button" onClick={()=>{
        count++;
        console.log(count);
      }}>
        클릭 (잘못된 방법)
        </button>

      {/* 2. State 변경 함수를 이용한 수정 */}
      <button type="button" onClick={()=>{
        setCount(count +1);
        console.log(count);
      }}>
        클릭 (◖⚆ᴥ⚆◗)
        </button>

        {/* 3. state 미사용 */}
        {/* 값은 증가되지만 재 렌더링이 일어나지 않음
        다른 이유로 재 렌더링 발생 시, 값이 초기회 됨 */}
        <p>총 {wrongCount}번 클릭 했습니다</p>
        <button type="button" 
        onClick={()=>{
          wrongCount ++;
          console.log(wrongCount);
        }}>
        🐟·´¯`·. (잘못된 방법)
        </button>
        <p>{a}</p>
        <button type='button' onClick={()=>{
          setA(a + '🐟·´¯`·.');
        }}>이거맞아..?</button>

        <hr />

        {/* Quiz: 글자색 바꾸기, 버튼 내용 바꾸기 */}
        <p style={{color : colorName}}>현재 글자색 :</p>
        <button onClick={()=>{
          // colorName == 'red'? setColorName('pink') : setColorName('red')
          let r = Math.ceil((Math.random()*1000)) % 255;
          let g = Math.ceil((Math.random()*1000)) % 255;
          let b = Math.ceil((Math.random()*1000)) % 255;
          setColorName(`rgb(${r},${g},${b})`);  
        }}>글자색 변경</button>

        <p>버튼 내용 바꾸기</p>
        <button onClick={()=>{setsubscribe(!subscribe)}}>{subscribe? '구독완료' : '구독'}</button>
    </>
  )
}
export default Counter;