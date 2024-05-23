import styled from "styled-components";
import Feed from "./Feed";
import Scheduler from "./Scheduler";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const theme ={
  blue : '#93B5C6',
  blueGrey : '#C9CCD5',
  grey : '#DDDDDD',
  greyPink : '#E4D8DC',
  pink: '#FFE3E3'
};


const Wrapper = styled.div`
  /* width: calc(100% - 32px); */
  user-select: none;
  width: 80%;
  height: 700px;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-family: 'notosanskr';
  text-decoration: none;
`;

let uuid = uuidv4().substring(1,8);

function MainPage() {

  const [inputValue, setInputValue] = useState('');

  const [todoList, setTodoList] = useState([
    {text:"냥뇽녕",
      id: uuid,
      date: new Date().toISOString()
    }
  ]);

  const handleClick = () =>{
    uuid = uuidv4().substring(1,8);
    setTodoList([...todoList,{text:inputValue, id:uuid, date:new Date().toISOString()}]);
    setInputValue('');
  }

  return (
    <Wrapper>
      <Scheduler>

      </Scheduler>
      <Feed todoList={todoList} setTodoList={setTodoList} handleClick={handleClick} inputValue={inputValue} setInputValue={setInputValue}>

      </Feed>
    </Wrapper>
  );
};

export default MainPage;