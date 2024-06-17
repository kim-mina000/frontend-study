import { useEffect, useRef, useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
import { useDispatch } from 'react-redux';
import {useNavigate}  from 'react-router-dom';

import * as css from '../style/AnimationCss';
import { changeName } from '../features/slice/todoSlice';



function Animation() {
  const [dogAnimation, setDogAnimation] = useState(true);
  const [emptyName, setEmptyName] = useState('');
  const ref = useRef(null);
  const navigate = useNavigate();

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
  const handleClick = () => {
    dispatch(changeName(emptyName));
    navigate('/main');
  }

  return (
    <css.Wrap>
      <css.InputWrap>
        <h4>Nice to meet,</h4>
        <css.Input 
          ref={ref}
          placeholder="이름을 넣어주세요!"    
          spellCheck={ false }
          contentEditable={true}
          onInput={e=>{
            setEmptyName(e.target.innerText);
          }}
          value = {emptyName}
          onKeyDown={e => {
            if (e.key === 'Enter') handleClick();
          }}
        />
        <span>!</span>
        <p>tell me<br/>your schedule <br/>:)</p>
        <css.StyledA emptyName={emptyName} onClick={handleClick}>
          <a href='/main'>goood!<BsArrowRightShort /></a>
        </css.StyledA>
      </css.InputWrap>
      {dogAnimation? <css.AnimationContainer /> : <css.EndAnimationContainer />}
    </css.Wrap>
  );
};

export default Animation;