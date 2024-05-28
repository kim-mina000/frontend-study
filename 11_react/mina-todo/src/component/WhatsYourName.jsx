import React, { useState } from "react";
import { IoCloudy } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`

  width: 100%;
  height: 100%;
margin-top: 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;
`;
const InputName = styled.span`
  font-family: 'notosanskr';
  display: inline-block;
  max-width: calc(100% - 32px);
  font-weight: lighter;
  border-bottom: 1px solid #232323;
  font-size: 34px;
  max-width: calc(100% - 32px);
  min-width: 50px;
  cursor: pointer;

  &:empty:before {
    content: attr(placeholder);
    color: grey;
    display: inline-block;
  };

&:focus{
  outline: none;
}
`;
const InputButton = styled.button`
  background: #222;
  color: #fff;
  font-family: 'RixInooAriDuriR';
  border-radius: 10px;
  padding: 10px 20px;
  cursor: pointer;
  border: 0px;
  margin-top: 35px;
  cursor: pointer;

  &:hover{
    background: #93B5C6;
  }

`;

const IoCloudyDiv = styled.div`
  width: 15%;
  font-size: 62px;
  overflow: hidden;
  `;

const StyledIoCloudy = styled(IoCloudy)`
&+& {
  margin-left: 30px;
}
`;
const CloudAnimation = styled.div`
animation: cloud 5s linear infinite;


@keyframes cloud {
from { transform: translateX(-100%);}
to { transform: translateX(100%);}
};

`;

function WhatsYourName({name, setName}) {


  // 참고해서 완성하기~
  // https://chaewonkong.github.io/posts/auto-width-text-input.html


  const [editable, setEditable] = useState(true);
  const MAX_LENGTH = 10;
  const handleInputEvent = (e) => {
    const newValue = e.target.innerText;
    if (newValue.length >= MAX_LENGTH) {
      setEditable(false);
    }
    setName(newValue);
  };

  const nevigate = useNavigate();

    // 로컬스토리지에 이름올리기
  localStorage.setItem('name', name);

  return (
    <Wrapper>
      <IoCloudyDiv>
        <CloudAnimation>
          <StyledIoCloudy/>
          <StyledIoCloudy/>
          <StyledIoCloudy/>
        </CloudAnimation>
      </IoCloudyDiv>
      <p style={{ fontFamily: 'notosanskr'}}>Please Enter your name</p>
      <InputName onChange={(e)=> setName(e)} value={name} placeholder="이름을 넣어주세요!"
        spellCheck={ false }
        contentEditable = {editable}
        onInput={handleInputEvent}
        onClick={()=>{setEditable(true)}}
        />
      <InputButton onClick={()=>nevigate('/scheduler')}>Enter</InputButton>
    </Wrapper>
  );
};

export default WhatsYourName;