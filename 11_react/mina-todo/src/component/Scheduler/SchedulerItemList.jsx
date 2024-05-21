import { useState } from 'react';
import styled from "styled-components";
import SchedulerItem from "./SchedulerItem";
import Calendar from "react-calendar";

// https://velog.io/@hyerani/React-%EC%BA%98%EB%A6%B0%EB%8D%94-%EB%A7%8C%EB%93%A4%EA%B8%B0-react-calendar 뽀뽀



const Wrapper = styled.div`
  background: #333;
  width: 100%;
  height: 100%;
`;

const WeekDay = styled.div`
  background: #444;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > p {
    flex: 1;
    text-align: center;
  }
`;

const MonthDay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  & > .SchedulerItem {
    flex: 1;
    text-align: center;
  }
`;

const StyledCalendar = styled(Calendar)``;

// type ValuePiece = Date | null;
// type Value = ValuePiece | [ValuePiece, ValuePiece];

function SchedulerItemList() {
  const [value, onChange] = useState<Value>(new Date());
  return (
    <Wrapper>
      <WeekDay>
        <p>월</p>
        <p>화</p>
        <p>수</p>
        <p>목</p>
        <p>금</p>
        <p>토</p>
        <p>일</p>
      </WeekDay>
      <StyledCalendar onChange={onChange} value={value}>
      </StyledCalendar>
    </Wrapper>
  );
};

export default SchedulerItemList;