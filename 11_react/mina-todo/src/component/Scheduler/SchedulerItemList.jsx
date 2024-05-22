import { useState } from 'react';
import styled from "styled-components";
import SchedulerItem from "./SchedulerItem";
import Calendar from "react-calendar";
import moment from "moment";

// https://velog.io/@hyerani/React-%EC%BA%98%EB%A6%B0%EB%8D%94-%EB%A7%8C%EB%93%A4%EA%B8%B0-react-calendar 뽀뽀



const Wrapper = styled.div`
  padding-top: 35px;
  background: #333;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
`;

const StyledCalendar = styled(Calendar)`
  width: 80%;
  display: flex;
  flex-direction: column;
  

  & .react-calendar__navigation {
    padding-bottom: 20px;
  }

  & .react-calendar__viewContainer .react-calendar__month-view__weekdays .react-calendar__month-view__weekdays__weekday{
    text-align: center;
    margin: 10px 0 10px;
  }

  & .react-calendar__month-view__days .react-calendar__tile.react-calendar__month-view__days__day {
    background: transparent;
    border: 1px solid #fff;
    padding: 50px 0 5px;
  }

   /* 일요일에만 빨간 폰트 */
  & .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color: ${(props) => props.theme.red_1};
  }
`;

const StyledDate = styled.div`
  position: absolute;
  right :10%;
  /* top: 7%; */
  background-color: ${(props) => props.theme.primary_3};
  color: ${(props) => props.theme.yellow_2};
  width: 10%;
  min-width: fit-content;
  height: 1.5rem;
  text-align: center;
  margin: 0 auto;
  line-height: 1.6rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 800;
  cursor: pointer;
`;

function SchedulerItemList() {
  const [value, onChange] = useState(new Date());
  

  const today = new Date();
  const [date, setDate] = useState(today);
  const [activeStartDate, setActiveStartDate] = useState(
    new Date()
  );
  const attendDay = ["2023-12-03", "2023-12-13"]; // 출석한 날짜 예시
  
    // const handleDateChange = (newDate: Value) => {
    //   setDate(newDate);
    // };
  
  
  
  const handleTodayClick = () =>{
    const today = new Date();
    setActiveStartDate(today);
    setDate(today);
  };
  return (
    <Wrapper>
      <StyledCalendar onChange={onChange} value={value}
        formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
        formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
        // calendarType="gregory" // 일요일 부터 시작
        showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
        next2Label={null} // +1년 & +10년 이동 버튼 숨기기
        prev2Label={null} // -1년 & -10년 이동 버튼 숨기기
        minDetail="year" // 10년단위 년도 숨기기
         // 오늘 날짜로 돌아오는 기능을 위해 필요한 옵션 설정
        activeStartDate={
          activeStartDate === null ? undefined : activeStartDate
        }
        onActiveStartDateChange={({ activeStartDate }) =>
          setActiveStartDate(activeStartDate)
        }
      />
      <StyledDate onClick={handleTodayClick}>TODAY</StyledDate>
    </Wrapper>
  );
};

export default SchedulerItemList;