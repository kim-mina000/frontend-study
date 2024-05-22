import styled, {css} from "styled-components";
import { MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 2rem;
  font-size: 20px;
  background: #111;
  color: #fff;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  cursor: pointer;

  & + & {
    margin-top: 1rem;
  }
`;

const Text = styled.div`
  /* text-decoration: ${props => props.done && 'line-through'}; */
  ${ props => props.done &&
  css`
    text-decoration: line-through;
    opacity: 60%;
  `}
`;

function FeedListItem({todo}) {
  const mdCheckStyled = {
    padding: '10px',
  };

  const [done, setDone] = useState(false);
  return (
    <Wrapper onClick={()=> setDone(!done)}>
      { done ? <MdCheckBox style={mdCheckStyled} />  : <MdCheckBoxOutlineBlank style={mdCheckStyled}/>}
      <Text done={done}>{todo}</Text>
    </Wrapper>
  );
};

export default FeedListItem;