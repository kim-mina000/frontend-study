import React, { useState } from 'react';

function ListKey() {
  const [list, setList] = useState(['과제하기','복습하기']);
  const [value, setValue] = useState('');
  const addToList = ()=>{
    // 잘못된 코드
    // 1) 직접 변경 -> 재랜더링이 안일어남
    // list.unshift(value);
    // 2) set함수 이용 + 변경된 기존 배열 넣기
    // setList(list); // set함수를 쓴다고 하더라도 기존 배열을 넣어주면 값의 변경을 감지하지 못함
    // 올바른방법
    setList([value,...list]);
    setValue('');
  }

  // 리스트 아이템 추가할 때마다 DOM에 무슨일이 일어나는지 개발자 도구로 확인해보기
  // 키 값이 없으면 추가된 아이템 뿐만아니라 전체가 다 DOM에 업데이트 함(비효율적)
  // 각 아이템에 키를 추가하지 않았기 때문에 리액트는 어떤 항복이 업데이트 됐는지 알지 못함 

  const handleChange = () => {
    
  }
  
  return (
    <>
      <input type="text" value={value} onChange={(e)=>{ setValue(e.target.value); 
        // if(e.key === 'Enter') addToList();  
      }} 
      onKeyDown={(e)=>{if(e.key=='Enter') addToList()}} 
      />
      <button type="button" onClick={addToList}>추가</button>
      <ul>
        {list.map((e,index)=>{
          // return <li>{e}</li>
          // return <li key={item}>{e}</li>
          // index를 키 값으로 사용하면 고유하지 않고 바뀔 수도 있음
          return <li key={index}>{e}</li>;})} 
      </ul>
    </>
  );
};

export default ListKey;