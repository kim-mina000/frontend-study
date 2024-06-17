import React, { useEffect, useRef, useState } from 'react';
import * as css from '../style/TodoCss';
import { FaRegSquareCheck } from "react-icons/fa6";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { BiSolidPencil } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { changeDone, editTodo, removeTodo } from '../features/slice/todoSlice';



const Todo = ({id,done,todoContents}) => {
  const dispatch = useDispatch();

  const [doEdit, setDoEdit] = useState(false);
  const [isDone, setIsDone] = useState(false);
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
    <css.Wrap done={isDone}>

      <css.StyledDone onClick={handleDone}>
        {isDone? <FaRegSquareCheck /> : <MdCheckBoxOutlineBlank />}
      </css.StyledDone>

      <p>
        {doEdit? <css.StyledInput
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

    </css.Wrap>
  );
}

export default Todo;
