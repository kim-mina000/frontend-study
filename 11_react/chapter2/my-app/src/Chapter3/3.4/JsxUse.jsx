// 컴포넌트 명과 파일 명을 동일하게 맞춰주기!
// 컴포넌트를 만든다 = 함수를 만든다 동일하게 생각!
// 리턴을 해줘야 화면에 무언가 표시됨~!

import React from "react";
import './JsxUse.css';

function JsxUse(){
  // JSX의 사용법(문법)
  // 1. 꼭 닫혀야 하는 태그

  // const element = (
  //   <div>
  //     {/* <div> */}
  //     {/* <input type="text"> */}
  //     {/* <br> */}

  //     {/* HTML에서는 태그를 닫지 않고 사용 가능
  //     리액트에서는 태그를 열었으면 무조건 닫아야 함 */}
  //     <div></div>
  //     <input type="text" name="" id="" />
  //     <br></br>
  //   </div>
  // );

  // 2. 꼭 감싸져야만 하는 태그
  // 두개 이상의 태그는 무조건 하나의 태그로 감싸져있어야 함
  // const element = (
  //   // 반드시 하나의 부모 태그로 감싸져야 함
    // <div>
    //   <div>안녕하세요.</div>
    //   <div>안녕히계세요.</div>
    // </div>
  
  // 이렇게 단순히 감싸기 위해서 불필요한 div로 감싸는게 별로 좋지 않을 수 있음
  // HTML 중첩 구조가 복잡해지며 그에 따른 스타일 설정을 할 때도 복잡해짐
  // 이때 사용하는 것이 React Fragment
  //   <React.Fragment>
  //     <div>안녕하세요.</div>
  //     <div>안녕히계세요.</div>
  //   </React.Fragment>

    //React Fragment 는 생략 가능
    // <>
    //   <div>안녕하세요.</div>
    //   <div>안녕히계세요.</div>
    // </>
    // );
    
    // 3. JSX 안에 자바스크립트 값 또는 표현식 사용하기
    // 자바스크립트 변수(또는 함수)를 사용할 때는 {} 사용
    const name = 'react';

    const user = {
      firstName: 'mina',
      lastName: 'kim'
    };

    const formatName = (user) => {
      return `${user.firstName} ${user.lastName}`;
    };
    // 위는 js
    // const element = (
    //   <>
    //     <div>{name} 배우기</div> // JSX안에서 사용하려면 중괄호로 감싸야함
    //     <h1>Hello, {formatName(user)}</h1>
    //   </>
    // );

    // 아래도 js


    // 0424
    // 4. style과 className
    // 인라인 스타일은 객체 형태로 작성하는데 background-color 처럼 -로 구분되어 있는 이름은 camelCase 형태로 네이밍

    // const style = {
    //   backgroundColor: 'pink',
    //   color: 'white',
    //   fontSize: 24, // 기본단위 px
    //   padding: '1rem', // 다른 단위 사용 시 문자열로 설정
    //   fontWeight : 700
    // };
    // const element = (
    //   <>
    //     <div style={style}> 리액트 공부하기 </div>
    //     <div className="gray-box"></div>
    //   </>
    // );

    // 5. Jsx 주석 (cltr + /)
    // const a =1 ; // js 주석
    const element = (
      <>
        {/* 주석 모양 귀엽땅 (∗'ര ᎑ ര`∗)*/}
        // 주석은 화면에 보이지 않습니다
        /* 주석은 화면에 보이지 않습니다 */

        <div // 열리는 태그 내부에서는 이렇게 주석 작성..!
        >
          주석 테스트
        </div>
      </>
    );

    return element;
} 

export default JsxUse; // JsxUse 함수 컨포넌트 내보내기
// export를 해줘야 다른 곳에서 import 해서 사용 가능
