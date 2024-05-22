import styled from "styled-components";
import FeedListItem from "./FeedListItem";


const Wrapper = styled.div`
  background-color: #999;
  width: calc(100% - 30px);
  height: 75%;
  margin-top:20px;

`;


function FeedList({todoList}) {
  return (
    <Wrapper>
      {todoList.map((todo)=>{

        return <FeedListItem todo={todo}/>
      })}
    </Wrapper>
  );
};

export default FeedList;