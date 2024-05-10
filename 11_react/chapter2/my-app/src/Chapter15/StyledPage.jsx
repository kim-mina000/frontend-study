// 0. styled-components 설치하기
// npm install styled-components

import styled from "styled-components";

// CSS in JS 란?
// JS안에 CSS를 작성하는 것

// styled-components란?
// CSS 문법을 그대로 사용하면서 결과물로 스타일링된 컴포넌트를 만들어주는 라이브러리
// 컴포넌트 개념을 사용하기 때문에 리액트와 궁합이 잘 맞음
// 백틱을 사용하여 구성요소의 스타일을 지정

// 다양한 문법은 공식 문서 참고
// https://styled-components.com/docs

// 1. 기본적인 사용법
const Wrapper = styled.div`
  padding: 1rem;
  background: pink;
`;

// vscode-styled-components 익스텐션 설치하기

const Title = styled.h1`
  font-size: 1.5rem;
  color: white;
  text-align: center;
`

// 2. props 사용하기
// 컴포넌트 형태라 props 사용이 가능(최고 장점 중 하나)

const Button = styled.button`
  width: ${(props) => props.width || '100px'};
  height: ${(props) => props.height || '40px'};
  background: ${props => props.$dark ? 'black' : 'pink'};
  color: ${props => props.$dark ? 'gray' : 'black'};
  border: 2px solid gray;
  cursor: pointer;
  border-radius: 3rem;
  display: block;
  margin: auto;

  margin-top: 20px;

/* 3. &(parent selector)를 사용하여 바깥쪽 선택자 참조 가능 (like Sass) */
/* 여기서는 Button 자기 자신을 참조 */

  &:hover {
    background: rgba(255,255,255,0.7);
  }
  /* 자식선택자 선택할때도 & > span 이런식으로 선택 */
  
`;



function StyledPage() {
  return (
    <Wrapper>
      <Title>🐾💗♥ 시리야 사랑해 ♥💗🐾</Title>
      <Button width='150px' height='40px'>LOVE</Button>
      {/* dark 하나만 쓰는것과 dark={true}로 쓰는 것은 동일, 값만 적어주면 true로 넘어감 */}
      {/* $는 스타일 지정만을 위한 prop이 DOM요소로 렌더링 되는 것을 방지하기 위해 붙여 임시 prop으로 전환할 수 있다 */}
      <Button $dark={true}>LUCK</Button> 
    </Wrapper>
  );
};

export default StyledPage;