import { useState } from 'react';
import styled from "styled-components";
import SchedulerItem from "./SchedulerItem";
import Calendar from "react-calendar";
import moment from "moment";
import { TbCloud } from "react-icons/tb";
import { IoCloudy } from "react-icons/io5";

// https://velog.io/@hyerani/React-%EC%BA%98%EB%A6%B0%EB%8D%94-%EB%A7%8C%EB%93%A4%EA%B8%B0-react-calendar 뽀뽀



const Wrapper = styled.div`
  padding-top: 35px;
  width: 100%;
  height: 100%; // 질문 이쒜끼가 제말을 안들어요 height:100% 하면 왜 넘칠까요 ,,
  display: flex;
  justify-content: center;
  align-items: baseline;
  position: relative;
`;

const StyledCalendar = styled(Calendar)`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* background: #999; */
  

  & .react-calendar__navigation {
    padding-bottom: 20px;
  }

  & .react-calendar__viewContainer .react-calendar__month-view__weekdays .react-calendar__month-view__weekdays__weekday{
    text-align: center;
    margin: 10px 0 10px;
  }

  & .react-calendar__month-view__days .react-calendar__tile.react-calendar__month-view__days__day {
    background: transparent;
    /* border: 1px solid #fff; */
    border: 0;
  }

   /* 일요일에만 빨간 폰트 */
  & .react-calendar__month-view__weekdays__weekday--weekend abbr[title="일요일"] {
    color:#DB4455;

  }
  & .react-calendar__month-view__weekdays__weekday--weekend abbr[title="토요일"] {
    color: #4491DB;
  }

  /* 달력안에 구름넣기 */
  & .react-calendar__tile.react-calendar__month-view__days__day{
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    padding: 0;

    color: ${props => props.isTask? props.theme.blue : props.theme.grey};
  }
  & .react-calendar__tile.react-calendar__tile--active abbr{
    color: black;
    text-decoration: underline;
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

const DateView = styled.div`
  font-family: 'RixInooAriDuriR';
  width: 100%;
  position: absolute;
  z-index: 10;
  right: -28%;
  bottom: 20%;
  padding: 0;
  margin: 0;
  color: ${props => props.theme.blue};
  font-size: 45px;
  text-align: right;
`;

const TaskNum = styled.span`
  position: absolute;
`;


function SchedulerItemList({theme, today, date, setDate, todoList}) {
  const [value, onChange] = useState(new Date());
  
  const [activeStartDate, setActiveStartDate] = useState(new Date());
  
  const handleTodayClick = () =>{
    const today = new Date();
    setActiveStartDate(today);
    setDate(today);

    // today 버튼을 누르면 

    // // 기존 클래스
    // react-calendar__tile react-calendar__month-view__days__day

    // // 클릭됐을때 클래스
    // react-calendar__tile react-calendar__tile--active react-calendar__tile--range react-calendar__tile--rangeStart react-calendar__tile--rangeEnd react-calendar__tile--rangeBothEnds react-calendar__month-view__days__day
  };



  return (
    <Wrapper>
      <StyledCalendar onChange={onChange} value={value} theme={theme}
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
        onClickDay={(e)=>{
          setDate(e); 
          // console.log(e);
        }}
          tileContent={()=>{ return <IoCloudy style={{fontSize:'60px'}}/>}}
        
        
      ><TbCloud /></StyledCalendar>
      <StyledDate onClick={handleTodayClick}>TODAY</StyledDate>
      <DateView theme={theme}>
        {moment(date).format("MM.DD.YYYY")}
      </DateView>
    </Wrapper>
  );
};

export default SchedulerItemList;