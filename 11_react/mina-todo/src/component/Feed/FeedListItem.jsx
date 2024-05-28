import styled, {css} from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { LuDelete } from "react-icons/lu";
import { TbPencil } from "react-icons/tb";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 2rem;
  font-size: 20px;
  color: ${props => props.theme.blue};
  display: flex;
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 1.5rem;
  }
`;

const CheckDone =styled.div`
  width: 80%;
  display: flex;
  ${ props => props.done &&
  css`
    text-decoration: line-through;
    opacity: 60%;
  `}
`;

const TextTodo = styled.span`
  /* width: 170px; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EditInput = styled.input`
    width: 80%;
`;

function FeedListItem({todo:{id, text, date, done},handleDone,todoList, setTodoList, editTodo, handleDelete, theme}) {
  const mdCheckStyled = {
    padding: '5px 10px 5px',
  };
  const iconStyled = {
    padding: '5px',
  };
  
  // 수정하기 기능구현
  const [editBoolean, setEditBoolean] = useState(false);
  // const [editValue, setEditValue] = useState(text);
  const copyDate = date;



  return (
    <Wrapper>
      <CheckDone onClick={()=>handleDone(id)} done={done}>
        { done ? <MdCheckBox style={mdCheckStyled} />  : <MdCheckBoxOutlineBlank style={mdCheckStyled}/>}
        { editBoolean ? 
        <EditInput type="text" value={text} onClick={(e)=>{e.preventDefault()}} onChange={(e)=>editTodo(e.target.value,id,copyDate,done)} 
        onKeyDown={(e)=>{
          if (e.key === 'Enter') {
            editTodo(text,id,copyDate,done);
            setEditBoolean(!editBoolean);
          }
        }} />
        :<TextTodo>{text}</TextTodo>}
      </CheckDone>
      <TbPencil style={iconStyled} onClick={()=>{setEditBoolean(!editBoolean)}} />
      <LuDelete style={iconStyled} onClick={()=>{handleDelete(id,date)}} />
    </Wrapper>
  );
};

export default FeedListItem;