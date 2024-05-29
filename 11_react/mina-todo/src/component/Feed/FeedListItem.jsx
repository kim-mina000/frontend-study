import styled, {css} from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from "react-icons/md";
import { LuDelete } from "react-icons/lu";
import { TbPencil } from "react-icons/tb";
import { useEffect, useRef, useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 3rem;
  font-size: 23px;
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
  width: 10%;
  display: flex;
  `;

const InputArea =styled.div`
  flex:1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  ${ props => props.done &&
  css`
    text-decoration: line-through;
    opacity: 60%;
  `}
`;

const TextTodo = styled.span`
  width: 190px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const EditInput = styled.input`
    width: 90%;
`;

function FeedListItem({todo:{id, text, date, done},handleDone,todoList, setTodoList, editTodo, handleDelete, theme}) {
  const iconStyled = {
    padding: '5px',
  };
  
  // 수정하기 기능구현
  const [editBoolean, setEditBoolean] = useState(false);
  // const [editValue, setEditValue] = useState(text);
  const copyDate = date;


  const inputRef = useRef(null);
  
  useEffect(() => {
    if (editBoolean) {
      inputRef.current.focus();
    }
  }, [editBoolean]);

  return (
    <Wrapper>
      <CheckDone>
        { done ? <MdCheckBox onClick={()=>handleDone(id)} done={done} />  
        : <MdCheckBoxOutlineBlank onClick={()=>handleDone(id)} done={done}/>}
      </CheckDone>
      <InputArea  onClick={()=>{setEditBoolean(!editBoolean);}} done={done}>
        { editBoolean ? 
        <EditInput ref={inputRef} type="text" value={text} onChange={(e)=>editTodo(e.target.value,id,copyDate,done)} 
        onKeyDown={(e)=>{
          if (e.key === 'Enter') {
            editTodo(text,id,copyDate,done);
            setEditBoolean(!editBoolean);
          }
        }}
        />
        :<TextTodo>{text}</TextTodo>}
      </InputArea>
      <TbPencil style={iconStyled} onClick={()=>{setEditBoolean(!editBoolean)}} />
      <LuDelete style={iconStyled} onClick={()=>{handleDelete(id,date)}} />
    </Wrapper>
  );
};

export default FeedListItem;