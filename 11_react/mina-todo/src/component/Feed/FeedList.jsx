import styled from "styled-components";
import FeedListItem from "./FeedListItem";
import moment from "moment";



const Wrapper = styled.div`
  width: calc(100% - 30px);
  height: 75%;
  margin-top:20px;

`;

function FeedList({todoList, setTodoList, handleEdit, handleDelete, theme, date}) {

  const editTodo = (e, id)=>{
    const copyTodo = {id:id, date:new Date().toISOString, text:e};
    const copyTodoList = [...todoList];
    const index = copyTodoList.findIndex((todo)=>todo.id === copyTodo.id);
    copyTodoList[index] = copyTodo;
    setTodoList(copyTodoList);
  }; // 나중에 코드 더 간소화 하게 할 수 있으면 좋겠음!
  return (
    <Wrapper>
      {todoList.map((todo)=>{ 
        return todo.date === date.toISOString().substring(0,10) 
        && <FeedListItem key={todo.id} todo={todo} setTodoList={setTodoList} handleEdit={handleEdit} handleDelete={handleDelete} editTodo={editTodo} theme={theme}/>
      })}
    </Wrapper>
  );
};

export default FeedList;