import styled from "styled-components";
import SchedulerItemList from "./Scheduler/SchedulerItemList";

const Wrapper = styled.div`
  background: #888;
  width: 80%;
  height: 100%;
  position: relative;
`;

const Title = styled.h1`
  text-align: left;
  padding-left: 90px;
  width: 100%;
  font-family: 'RixInooAriDuriR';
  font-size: 42px;
`;




function Scheduler() {
  return (
    <Wrapper>
      <Title>
      SCHEDULER
      </Title>
      <SchedulerItemList>
      </SchedulerItemList>

    </Wrapper>
    
  );
};

export default Scheduler;