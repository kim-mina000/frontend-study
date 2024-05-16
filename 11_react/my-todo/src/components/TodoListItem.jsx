import { useState } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank, MdEdit, MdRemoveCircleOutline } from "react-icons/md";
import { css, styled } from "styled-components";

const TodoListItemWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  font-family: 'HSSanTokki20-Regular';

  /* 짝수번째 배경색 지정 */
  &:nth-child(even){
    background: #e7e7e9;
  }

  // 아이템 사이에 위쪽 테두리 넣기
  &+&{
    border-top: 1px solid #868e96;
  }
`;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  svg{
    font-size: 1.5rem;
    color: #1F2544;
    color: ${props => props.done && '#474F7A'};

  }
`;

const Text = styled.div`
  margin-left: 0.5rem;
  flex: 1;
  color: #1F2544;

  /* 조건부 스타일링 시 여러 개의 css를 설정할 때는 아래와 같이 사용 */
  ${props => props.done && 
    css`
    color: #81689d88;
    text-decoration: line-through;
    `
  }
`;

const Remove = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #81689D;
  cursor: pointer;

  &:hover {
    color: #5e4b74;
  }
`;

const Edit = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: #81689D;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    color: #5e4b74;
  }
`;

// 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
// todo 객체를 props로 받아와서 상태에 따라 다른 스타일의 ui를 보여줌

function TodoListItem(props) {
  const {id, text, done, onRemove, onToggle} = props;

  const [checkBox, setCheckBox] = useState(done);

  return (
    <TodoListItemWrapper>
      <Checkbox done={done} onClick={() => onToggle(id)}>
        {done? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </Checkbox>
      <Text done={done}>{text}</Text>
      <Edit>
        <MdEdit />
      </Edit>
      <Remove onClick={() => onRemove(id)}>
        <MdRemoveCircleOutline />
      </Remove>
    </TodoListItemWrapper>
  );
};

export default TodoListItem;