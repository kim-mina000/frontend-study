import {styled} from "styled-components";
// Tip: as를 사용하여 별칭을 붙여 사용하면 추후 아이콘 바꿀때 한곳만 바꾸면 되서 편함!
import { MdAdd as AddIcon } from "react-icons/md";

// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해서 input의 상태를 관리

const TodoInsertWrapper = styled.form`
  display: flex;
  background: #1F2544;

  @font-face {
    font-family: 'TAEBAEKmilkyway';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2310@1.0/TAEBAEKmilkyway.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
    @font-face {
    font-family: 'HSSanTokki20-Regular';
    src: url('https://fastly.jsdelivr.net/gh/projectnoonnu/2405@1.0/HSSanTokki20-Regular.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
`;

const StyledInput = styled.input`
  /* 기본 스타일 초기화 */
  font-family: 'TAEBAEKmilkyway';
  background: none;
  outline: none;
  border: none;
  padding: 0.5rem;
  font-size: 1.125rem;
  line-height: 1.5;
  color: white;
  flex: 1; // 버튼을 제외한 영역을 모두 차지하기
  font-weight: 700;

  &::placeholder{
    color: #868e96;
  }
`;

const StyledButton = styled.button`
  border: none;
  background: #868e96;
  color: white;
  padding: 0 1rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 0.2s background ease-in;

  &:hover{
    background: #adb5bd;
  }
`;

function TodoInsert() {
  return (
    <TodoInsertWrapper>
      <StyledInput type="text" placeholder="할 일을 입력하세요."/>
      <StyledButton type="submit">
        <AddIcon />
      </StyledButton>

    </TodoInsertWrapper>
  );
};

export default TodoInsert;