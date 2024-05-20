import styled from "styled-components";

const StyledButton = styled.button`
  padding: 8px 16px;
  border: 1px solid gray;
  border-radius: 8px;
  cursor: pointer;
  font-family: 'SUITE-Regular';
  background: #DBA39A;
  color:#F0DBDB;

  &:hover{
    color: #fff;
  }
`;

// 공통 버튼 컴포넌트
function Button(props) {
  const { title, onClick} = props;
  
  return (
    // props로 받아온 title이 있을 때는 title의 값을 보여주고 없으면 기본값 '클릭'
    // 클릭 했을 때 어떤 동작을 할 것이가는 상위 컴포넌트에서 받아옴
    <StyledButton onClick={onClick}>
      {title || '클릭'}
    </StyledButton>
  );
};

export default Button;