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
  // 질문1) 
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const inputRef = useRef('');
  const handleInput = (e)=>{
    // inputRef.current = e.target.value;
    setInputValue(e.target.value);
    setIsButtonDisabled(e.target.value === '');
  };

  const handleEdit = (e) =>{
    console.log(e.localStorage);  
  };
  // console.log(Object(isTaskDays).length);

  const handleRemove = (id,date)=>{
    setTodoList(todoList.filter(e => e.id !== id));
    // 이거 오류수정하기~ isTaskDays에서 날짜가 하나씩 빠져야하는데 한번에 빠짐(filter) 다른 방향으로 생각해보기!
    setIsTaskDays();
  };
  return (
    <Wrapper>
      <Title theme={theme}>FEED</Title>
      <InputArea>
        <InputStyled theme={theme} value={inputValue} placeholder="할일 추가하기"
          type="text"
          // ref={inputRef}
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