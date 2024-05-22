import styled from "styled-components";
import Feed from "./Feed";
import Scheduler from "./Scheduler";
import { useState } from "react";

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
`;


function MainPage() {

  const [todoList, setTodoList] = useState([]);

  return (
    <Wrapper>
      <Scheduler>

      </Scheduler>
      <Feed todoList={todoList} setTodoList={setTodoList}>

      </Feed>
    </Wrapper>
  );
};

export default MainPage;