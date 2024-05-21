import styled from "styled-components";
import Feed from "./Feed";
import Scheduler from "./Scheduler";

const theme ={
  blue : '#93B5C6',
  blueGrey : '#C9CCD5',
  grey : '#DDDDDD',
  greyPink : '#E4D8DC',
  pink: '#FFE3E3'
};


const Wrapper = styled.div`
  padding: 16px;
  /* width: calc(100% - 32px); */
  width: 65%;
  margin: 0 auto;
  margin-top: 2rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  max-width: 720px;
  background: pink;
  display: block;

  & > *:not(:last-child) {
    margin-bottom: 16px;
  }
`;

function MainPage() {
  return (
    <Wrapper>
      <Scheduler>

      </Scheduler>
      <Feed>

      </Feed>
    </Wrapper>
  );
};

export default MainPage;