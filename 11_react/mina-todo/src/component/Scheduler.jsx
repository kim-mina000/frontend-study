import styled from "styled-components";
import SchedulerItemList from "./Scheduler/SchedulerItemList";

const Wrapper = styled.div`
  background: #888;
  width: 60%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: left;
  margin-left: 10px;
  width: 100%;
`;

const NextDayContainer = styled.div`
  background: #333;
  width: 100%;
`;


function Scheduler() {
  return (
    <Wrapper>
      <Title>
      스케줄
      </Title>
      <NextDayContainer>
        날짜입력
        다음 입력
      </NextDayContainer>
      {/* <SchedulerItemList>

      </SchedulerItemList> */}
    </Wrapper>
  );
};

export default Scheduler;