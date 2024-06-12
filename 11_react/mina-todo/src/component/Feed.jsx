import styled from "styled-components";
import FeedList from "./Feed/FeedList";
import { useRef, useState } from "react";


const Wrapper = styled.div`
  width: 25%;
  height: 100%;
  padding-left: 20px;
  font-family: 'notosanskr';
  `;

const Title = styled.h1`
  font-family: 'RixInooAriDuriR';
  font-size: 42px;
  color: ${theme => theme.greyPink};
`;

const InputArea = styled.div`
  width: calc(100% - 30px);
  display:flex;
  justify-content: space-between;
`;
const InputStyled = styled.input`
  width: 75%;
  border-radius: 0.3rem;
  border: 0;
  background: ${props => props.theme.grey};
`;

const ButtonStyled = styled.button`
  width: 3.5rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: 0;
  background: #222;
  color: white;
  cursor: pointer;

  &:hover{
    background: ${props => props.theme.blue};
    color: white;
  }

  &:disabled{
    background: ${props => props.theme.grey};
    color: #777;
  }
`;

function Feed({handleDone, theme,todoList,setTodoList, handleClick, inputValue ,setInputValue, date, setIsTaskDays, isTaskDays}) {

  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInput = (e)=>{
    setInputValue(e.target.value);
    setIsButtonDisabled(e.target.value === '');
  };

  const handleEdit = (e) =>{
    console.log(e.localStorage);  
  };

  // splice 기능 개못해서 함수 만드러쒀요 ,,,,, 왜??? 날 괴롭게해???
  const arrReturn= (arr,index) =>{
    const copy1 = arr.slice(0,index);
    const copy2 = arr.slice(index+1, arr.length);
    return copy1.concat(copy2);
  }
  

  const handleRemove = (id,date)=>{
    setTodoList(todoList.filter(e => e.id !== id));
    setIsTaskDays(arrReturn(isTaskDays, isTaskDays.indexOf(date)));
  };
  return (
    <Wrapper>
      <Title theme={theme}>FEED</Title>
      <InputArea>
        <InputStyled theme={theme} value={inputValue} placeholder="할일 추가하기"
          type="text"
          onChange={handleInput}
          onKeyDown={(e)=>{
            if (e.key === 'Enter' && isButtonDisabled === false) {
              handleClick();
            }
          }}
        />
        <ButtonStyled theme={theme} disabled={isButtonDisabled} onClick={()=>{handleClick()}}>추가</ButtonStyled>
      </InputArea>
      <FeedList todoList={todoList} setTodoList={setTodoList} handleEdit={handleEdit} handleDelete={handleRemove} theme={theme} date={date} handleDone={handleDone} />
    </Wrapper>
  );
};

export default Feed;