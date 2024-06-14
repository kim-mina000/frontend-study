import React, { useEffect, useRef, useState } from 'react';
import styled, {css} from 'styled-components';
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { changeDone, editTodo, removeTodo } from '../features/slice/todoSlice';

const Wrap = styled.div`
  font-family: 'Dongle-Regular';
  font-size: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  overflow-x: hidden;

  &>p{
    flex: 1;
    padding: 3px 0px 0px 5px;

    ${props => (props.done &&
      css`
        color: #888;
        text-decoration: line-through;
      `)}
  };
  &>svg{
    margin: 5px;
    cursor: pointer;
  };
  &>svg:hover{
    color: #888;
    cursor: pointer;
  };

`;

const StyledInput = styled.input`
  font-family: 'Dongle-Regular';
  font-size:30px;
  width: 95%;
  height: 27px;

  border: none;
  outline: none;
  background-color: #999;
  border-radius: 5px;
  display: block;
  &:focus {
    border: none;
    outline: none;
  }
`;

const StyledDone = styled.span`
  cursor: pointer;
  display: flex;
  align-items:center;
  & svg{
    font-size:30px; 
  }
`;



const Todo = ({id,done,todoContents}) => {
  const dispatch = useDispatch();

  const [doEdit, setDoEdit] = useState(false);
  const [isDone, setIsDone] = useState(done);
  const [inputValue, setInputValue] = useState(todoContents);
  const ref = useRef();

  const handleDeleteClick = () => {
    dispatch(removeTodo(id));
  };

  const handleEdit = () => {
    setDoEdit(!doEdit);
    dispatch(editTodo({id,inputValue}));
  };

  
  const handleDone = () => {
    setIsDone(!isDone);
    dispatch(changeDone({id,isDone}));
  }
  
  useEffect(() => {
    if (doEdit) {
      ref.current.focus();
    }
  }, [doEdit]);

  return (
    <Wrap done={isDone}>

      <StyledDone onClick={handleDone}>
        {isDone? <FaRegSquareCheck /> : <MdCheckBoxOutlineBlank />}
      </StyledDone>

      <p>
        {doEdit? <StyledInput
        ref={ref}
        value={inputValue}
        onChange={ e => setInputValue(e.target.value)}
        onKeyDown={(e)=>{
          if (e.key === 'Enter') {
            handleEdit();
          }
        }}
        /> : todoContents}
      </p>
      
      <BiSolidPencil onClick={handleEdit} />
      <MdDelete onClick={handleDeleteClick} />

    </Wrap>
  );
}

export default Todo;
