import { useEffect, useRef, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import styled, { css, keyframes } from 'styled-components';
import { useDispatch } from 'react-redux';
import { changeName } from '../features/slice/todoSlice';



const dogAnimation = keyframes`
  from {
    background-image: url('/images/dog_window_1.png');
  }
  16% {
    background-image: url('/images/dog_window_2.png');
  }
  32% {
    background-image: url('/images/dog_window_3.png');
  }
  48% {
    background-image: url('/images/dog_window_4.png');
  }
  64% {
    background-image: url('/images/dog_window_5.png');
  }
  80% {
    background-image: url('/images/dog_window_6.png');
  }
  90% {
    background-image: url('/images/dog_window_7.png');
  }
  to {
    background-image: url('/images/dog_window_8.png');
  }
`;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  transition: 0.5s;
  background-color: black;
  position: relative;
`;

const AnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  animation: ${dogAnimation} 3s linear;
`;

const EndAnimationContainer = styled.div`
  width: 100%;
  height: 100%;
  background-size: contain;
  background-image: url('/images/dog_window_8.png');
`;

const InputWrap = styled.div`
  font-family: 'Cafe24Meongi-W-v1.0';
  color: #fff;
  position: fixed;
  top: 20%;
  left: 15%;
  font-size: 70px;

  & p {
    margin-top: 3rem;
    font-size: 55px;
  }
  `;

const Input = styled.span`
  font-family: 'Cafe24Meongi-B-v1.0';
  display: inline-block;
  border-bottom: 1px solid #999;
  font-size: 70px;
  max-width: calc(100% - 32px);
  min-width: 50px;
  
  &::placeholder {
    color: #fff;
  }
  &:focus {
    outline: none;
  }
`

const StyledA = styled.div`
  position: relative;
  transition: 2s;
  visibility: hidden;
  opacity: 0;

  ${props => props.emptyName &&
    css`
      visibility: visible;
      opacity: 1;
    `
  }

  & a{
    font-family: 'Cafe24Meongi-B-v1.0';
    font-size: 50px;
    position: absolute;
    right: 0;
  }

  & svg {
    font-size:30px;
    position: relative;
    top: 3px;
    right: 5px;
  }

  &:hover {
    transition: none;
    color: #888;
  }
`;

function Animation() {
  const [dogAnimation, setDogAnimation] = useState(true);
  const [emptyName, setEmptyName] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setDogAnimation(false);
    },2500);

    ref.current.focus();

    return ()=>{
      clearTimeout(timer);
    }
  }, []);

  const dispatch = useDispatch();

  return (
    <Wrap>
      <InputWrap>
        <h4>Nice to meet,</h4>
        <Input 
          ref={ref}
          placeholder="이름을 넣어주세요!"    
          spellCheck={ false }
          contentEditable={true}
          onInput={e=>{
            setEmptyName(e.target.innerText);
          }}
          value = {emptyName}
        />
        <span>!</span>
        <p>tell me<br/>your schedule <br/>:)</p>
        <StyledA emptyName={emptyName} onClick={()=>{
        }}>
          <a href='/main'>goood!<BsArrowRightShort /></a>
        </StyledA>
      </InputWrap>
      {dogAnimation? <AnimationContainer /> : <EndAnimationContainer />}
    </Wrap>
  );
};

export default Animation;