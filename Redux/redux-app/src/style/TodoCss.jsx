import styled, {css} from 'styled-components';

export const Wrap = styled.div`
  font-family: 'Dongle-Regular';
  font-size: 30px;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 5px 10px;
  overflow-x: hidden; 

  &>p{
    flex: 1;
    padding: 3px 0px 0px 5px;
    // 글자 말줄임
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    ${props => (props.done &&
      css`
        color: #888;
        text-decoration: line-through;
      `)}
  };
  &>svg{
    margin: 5px;
    cursor: pointer;
  };
  &>svg:hover{
    color: #888;
    cursor: pointer;
  };

`;

export const StyledInput = styled.input`
  font-family: 'Dongle-Regular';
  font-size:30px;
  width: 95%;
  height: 27px;

  border: none;
  outline: none;
  background-color: #999;
  border-radius: 5px;
  display: block;
  &:focus {
    border: none;
    outline: none;
  }
`;

export const StyledDone = styled.span`
  cursor: pointer;
  display: flex;
  align-items:center;
  & svg{
    font-size:30px; 
  }
`;
