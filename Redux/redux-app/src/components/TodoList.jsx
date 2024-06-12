import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import Todo from './Todo';

const TodoList = () => {
  const todoList = useSelector(state => state.todoSlice.todoList);

  // todoList 변화가 있을때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("todoList",JSON.stringify(todoList));
  }, [todoList]);

  return (
    <>
      {todoList.map((todo)=>{ 
        return <Todo key={todo.id} id={todo.id} done={todo.done} todoContents={todo.todoContents} />
      })}
    </>
  );
}

export default TodoList;
