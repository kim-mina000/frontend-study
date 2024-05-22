import styled from "styled-components";
import FeedList from "./Feed/FeedList";
import { useRef, useState } from "react";


const Wrapper = styled.div`
  width: 20%;
  height: 100%;
  background: #555;
  padding-left: 30px;
  font-family: 'notosanskr';
  `;

const Title = styled.h1`
  font-family: 'RixInooAriDuriR';
  font-size: 42px;
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
`;

const ButtonStyled = styled.button`
  width: 3.5rem;
  height: 2rem;
  border-radius: 0.3rem;
  border: 0;
  cursor: pointer;

  &:hover{

  }
`;

function Feed({todoList,setTodoList}) {
  // 질문1) 
  const [inputValue, setInputValue] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  // const inputRef = useRef('');
  const handleInput = (e)=>{
    // inputRef.current = e.target.value;
    setInputValue(e.target.value);
    setIsButtonDisabled(e.target.value === '');
  };
  const handleClick = () =>{
    setTodoList([...todoList,inputValue]);
    setInputValue('');
  }
  return (
    <Wrapper>
      <Title>FEED</Title>
      <InputArea>
        <InputStyled value={inputValue} placeholder="할일 추가하기"
          type="text"
          // ref={inputRef}
          onChange={handleInput}
          onKeyDown={(e)=>{
            if (e.key === 'Enter' && isButtonDisabled === false) {
              handleClick();
            }
          }}
        />
        <ButtonStyled disabled={isButtonDisabled} onClick={()=>{handleClick()}}>추가</ButtonStyled>
      </InputArea>
      <FeedList todoList={todoList} />
    </Wrapper>
  );
};

export default Feed;