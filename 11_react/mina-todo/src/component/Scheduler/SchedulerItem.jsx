import styled from "styled-components";

const OneDay = styled.div`
  width: 50px;
  height: 50px;

`;

function SchedulerItem({checkDay,oneDay}) {
  return (
    <OneDay>
      {checkDay}
      {oneDay}
    </OneDay>
  );
};

export default SchedulerItem;