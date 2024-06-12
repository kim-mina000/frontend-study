import { useEffect, useState } from "react";

function EffectSummary() {
  // useEffect()가 실행되는 모든 상황을 정리
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  

  // use Effect()공통사항
  // 1) 렌더링 직후에 실행됨
  // 2) 마운트 시에는 무조건 실행됨
  // 3) return 하는 함수는 언마운트 시에 무조건 실행됨

  // 의존성 배열 없이 사용할 때
  // 렌더링 될 때마다(마운트+업데이트) 매번 실행됨
  useEffect(() => {
    console.log('나는 매번 실행 됨');
    return () => {
      // 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  });

  // 마운트+count가 변할 때마다 실행됨
  useEffect(() => {
    // %c컬러바꾸는거
    console.log('%ccount가 변함 . . .','color:red; background:#ffdae0');
    return () => {
      // 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  },[count]);

  // 마운트+name이 변할 때마다 실행됨
  useEffect(() => {
    // %c컬러바꾸는거
    console.log('%cname가 변함 . . .','color:blue; background:#e2d6fd');
    return () => {
      // 해당 effect가 실행되기 전과 언마운트 시 실행됨
    };
  },[name]);

  // 마운트될 때 한 번 실행됨
  useEffect(() => {
    // %c컬러바꾸는거
    console.log('%c마운트 될 때만 실행','color:yellow; background:black');
    return () => {
    };
  },[]);

    // 언마운트될 때 한 번 실행됨
    useEffect(() => {
      return () => {
        console.log('%c언마운트 될 때만 실행','color:red; background:black');
      };
    },[]);



  return (
    <>
      <p>카운트 : {count}</p>
      <button type="button" onClick={()=>{setCount(count+1)}}>카운트 + 1</button>
      <p>이름 : {name}</p>
      <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    </>
  );
};

export default EffectSummary;