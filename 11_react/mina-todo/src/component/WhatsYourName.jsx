import React, { useState } from "react";
import { IoCloudy } from "react-icons/io5";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  top:0;
  left: 0;
  display: flex;
  flex-direction: column;
  background: pink;
  justify-content: center;
  align-items: center;
`;
const InputName = styled.span`
  font-family: 'notosanskr';
  display: inline-block;
  max-width: calc(100% - 32px);

  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  };
`;
const InputButton = styled.button`
  background: #222;
  color: #fff;
  font-family: 'RixInooAriDuriR';
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  border: 0px;

  &:hover{
    background: #93B5C6;
  }
`;

const IoCloudyDiv = styled.div`
  font-size: 62px;

  & IoCloudy+IoCloudy{
    margin-left: 15px;
  }
`;

const StyledIoCloudy = styled(IoCloudy)`
&+&{
  margin-left: 15px;
}
`;

function WhatsYourName() {


  // 참고해서 완성하기~
  // https://chaewonkong.github.io/posts/auto-width-text-input.html

  const [name, setName] = useState('');
  const [e, setE] = useState('');
  const MAX_LENGTH = 10;
  const handleInputEvent = (e) => {
    const newValue = e.target.innerText;
    if (newValue.length >= MAX_LENGTH) {
      setEditable(false);
    }
    onChange(newValue);
  };

  return (
    <Wrapper>
      <IoCloudyDiv>
        <StyledIoCloudy/>
        <StyledIoCloudy/>
        <StyledIoCloudy/>
      </IoCloudyDiv>
      <p style={{ fontFamily: 'notosanskr'}}>Please Enter your name</p>
      <InputName onChange={(i)=> setE(i)} value={name} placeholder="이름을 넣어주세요!"
        ref={ ref }
        spellCheck={ false }
        contentEditable={editable}
        onInput={ handleInputEvent(e) } />
      <InputButton>Enter</InputButton>
    </Wrapper>
  );
};

export default WhatsYourName;