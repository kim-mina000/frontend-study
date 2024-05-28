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
  // 네비게이션 버튼 스타일
  & .react-calendar__navigation__label{
    border: 0px;
    background: #fff;
    font-size: 15px;
    font-family: 'notosanskr';
    
  }
  & .react-calendar__navigation__next-button, .react-calendar__navigation__prev-button{
    border: 0px;
    background: #fff;
    font-size: 20px;
    cursor: pointer;
  }

  & .react-calendar__tile.react-calendar__year-view__months__month{
    font-family: 'notosanskr';
    border: 0px;
    padding: 10px;
    border-radius: 2rem;
    cursor: pointer;
  }
  & .react-calendar__tile.react-calendar__year-view__months__month>div>svg{
    color: #fff;
  }
  & .react-calendar__tile.react-calendar__year-view__months__month:hover>div>svg{
    color: ${props => props.theme.blue}
  }

  & abbr {
    text-decoration: none;
  }

  // 구름안에 남은 태스크 갯수 넣기
  & .react-calendar__tile>div{
    position: relative;
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

  // 구름안에 남은 태스크 갯수 넣기
const TaskNum = styled.span`
  position: absolute;
  color: red;
  right: 42%;
  top: 42%;
  font-family: 'RixInooAriDuriR';
  color: #fff;
  text-align: center;
`;

const Red =styled.div`
  color:red;
`;

function SchedulerItemList({theme, today, date, setDate, todoList, isTaskDays}) {
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

  // 테스크 몇개 넣었는지 숫자
  const howManyTask = (date) =>{
    let num = 0;
    for(let i = 0; i < Object(isTaskDays).length; i++){
      if(isTaskDays[i] === moment(date).format("YYYY-MM-DD")){
        num++;
      }
    }
    return num;
  }


  return (

    <Wrapper>
      <StyledCalendar onChange={onChange} value={value} theme={theme}
        formatDay={(locale, date) => moment(date).format("D")} // 일 제거 숫자만 보이게
        formatYear={(locale, date) => moment(date).format("YYYY")} // 네비게이션 눌렀을때 숫자 년도만 보이게
        formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 네비게이션에서 2023. 12 이렇게 보이도록 설정
        calendarType="gregory" // 일요일 부터 시작
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
        }}
        tileContent={(date, view)=>{ 
          let html = [];

          if(isTaskDays.find((e)=> {
            return e === moment(date.date).format("YYYY-MM-DD")})){
            html.push(<IoCloudy style={{fontSize:'60px', color:'#93B5C6'}}/>,<TaskNum>{howManyTask(date.date)}</TaskNum>);
          } else {
            html.push(<IoCloudy style={{fontSize:'60px'}}/>);
          }
          return <div key={date}>{html}</div>
        }}
        
      ><TbCloud /></StyledCalendar>
      <StyledDate onClick={handleTodayClick}>TODAY</StyledDate>
      <DateView theme={theme}>
        { moment(today).format("YYYY-MM-DD") === moment(date).format("YYYY-MM-DD") && "TODAY"}<br/>
        {moment(date).format("MM.DD.YYYY")}
      </DateView>
    </Wrapper>
  );
};

export default SchedulerItemList;