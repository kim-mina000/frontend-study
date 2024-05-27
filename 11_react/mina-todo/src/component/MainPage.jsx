import styled from "styled-components";
import Feed from "./Feed";
import Scheduler from "./Scheduler";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";



const theme ={
  blue : '#93B5C6',
  blueGrey : '#C9CCD5',
  grey : '#DDDDDD',
  greyPink : '#E4D8DC',
  pink: '#FFE3E3'
};
// https://colorate.azurewebsites.net/ko/Color/4491DB 컬러참고


const Wrapper = styled.div`
  user-select: none;
  width: 80%;
  height: 750px;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'notosanskr';
  text-decoration: none;
  border-radius: 5rem;
  padding: 15px;
`;

let uuid = uuidv4().substring(1,8);

function MainPage() {
  const [todoList, setTodoList] = useState([]);
  const [isTaskDays, setIsTaskDays] = useState(["2024-05-27","2024-05-06"]); 

  const today = new Date();
  const [date, setDate] = useState(today);

  // 로컬스토리지
  useEffect(()=>{
    const dbTodos = JSON.parse(localStorage.getItem('todoList'))||[] ; 
    // 만약 가져온 값이 null일때는 빈 배열을 넣어줌
    // todos가 없으면 null을 반환
    setTodoList(dbTodos);
  },[])

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  },[todoList]);


  const [inputValue, setInputValue] = useState('');


  const handleClick = () =>{
    uuid = uuidv4().substring(1,8);
    setTodoList([...todoList,{text:inputValue, id:uuid, date:date.toISOString().substring(0,10)}]);
    setIsTaskDays([...isTaskDays,date.toISOString().substring(0,10)]); 
    console.log(date.toISOString().substring(0,10));
    // 여기서부터 이어서하기! 할일이 있는 날을 useState로 따로 관리 
    setInputValue('');
  }

  return (
    <Wrapper theme={theme}>
      <Scheduler theme={theme} today={today} date={date} setDate={setDate} todoList={todoList} isTaskDays={isTaskDays}>  

      </Scheduler>
      <Feed theme={theme} todoList={todoList} setTodoList={setTodoList} handleClick={handleClick} inputValue={inputValue} setInputValue={setInputValue}
        date={date} setIsTaskDays={setIsTaskDays}
      >

      </Feed>
    </Wrapper>
  );
};

export default MainPage;