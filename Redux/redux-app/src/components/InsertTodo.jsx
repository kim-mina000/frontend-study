import React, { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { v4 } from 'uuid';

import { addTodo } from '../features/slice/todoSlice';


const Wrap = styled.div`
  border-bottom: 15px solid #111;
  display: flex;
`;

const StyledButton = styled.button`
  font-family: 'Dongle-Regular';
  font-size: 30px;
  font-weight: 800;
  padding: 0px 10px 0px;
  border: 0px;
  background-color: #fff;

  &:hover{
    color: #888;
    cursor: pointer;
  }
`;

const StyledInput = styled.input`
  min-width: 0%;
  flex:1;
  font-family: 'Dongle-Regular';
  font-size: 30px;
  padding-left: 10px;
  border: 0px;
`;
const InsertTodo = () => {
  const dispatch = useDispatch();
  const [todoContents, setTodoContents] = useState('');
  

  const handleButtonClick = () => {
    dispatch(addTodo({
      id: v4().substring(0,5),
      done: false,
      todoContents: todoContents,
    }));
    setTodoContents('');
  }

  // 화면이 렌더링 되면 바로 input에 포커스
  const ref = useRef();
  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Wrap>
      <StyledInput 
        ref={ref}
        placeholder="What' your plan?"
        value={todoContents}
        onChange={(e)=>{
          setTodoContents(e.target.value);
        }}
        onKeyDown={(e)=>{
          if (e.key === 'Enter') {
            handleButtonClick();
          }
        }}
      />
      <StyledButton
        onClick={handleButtonClick}
        disabled = {!todoContents}
      >Enter</StyledButton>
    </Wrap>
  );
}

export default InsertTodo;
