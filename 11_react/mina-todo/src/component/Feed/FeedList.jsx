import styled from "styled-components";
import FeedListItem from "./FeedListItem";
import moment from "moment";
import { useState } from "react";



const Wrapper = styled.div`
  width: calc(100% - 30px);
  height: 75%;
  margin-top:20px;

`;

function FeedList({todoList, setTodoList, handleEdit, handleDelete, theme, date, handleDone}) {



  const editTodo = (e, id)=>{
    const copyTodo = {id:id, date:moment(new Date()).format("YYYY-MM-DD"), text:e, done:false};
    const copyTodoList = [...todoList];
    const index = copyTodoList.findIndex((todo)=>todo.id === copyTodo.id);
    copyTodoList[index] = copyTodo;
    setTodoList(copyTodoList);
  }; // 나중에 코드 더 간소화 하게 할 수 있으면 좋겠음!
  return (
    <Wrapper>
      {todoList.map((todo)=>{ 
        return todo.date === moment(date).format("YYYY-MM-DD") 
        && <FeedListItem key={todo.id} theme={theme} todo={todo} todoList={todoList} setTodoList={setTodoList} 
        handleEdit={handleEdit} handleDelete={handleDelete} editTodo={editTodo} handleDone={handleDone}/>
      })}
    </Wrapper>
  );
};

export default FeedList;