import styled from "styled-components";
import SchedulerItemList from "./Scheduler/SchedulerItemList";

const Wrapper = styled.div`
  width: 80%;
  height: 100%;
  position: relative;
  font-family: 'notosanskr';
`;

const Title = styled.h1`
  text-align: left;
  padding-left: 90px;
  width: 100%;
  font-family: 'RixInooAriDuriR';
  font-size: 42px;
`;




function Scheduler({theme, today, date, setDate, todoList}) {
  return (
    <Wrapper>
      <Title>
      SCHEDULER
      </Title>
      <SchedulerItemList theme={theme} today={today} date={date} setDate={setDate} todoList={todoList}>
      </SchedulerItemList>

    </Wrapper>
    
  );
};

export default Scheduler;