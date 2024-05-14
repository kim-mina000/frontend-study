import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoListWrapper =styled.div`
  min-height:320px;
  max-height: 513px; //57px* 9개 항목
  overflow-y: auto;
`;

// props로 todos 배열을 받아와서 map() 함수를 사용해 여러 개의 TodoListItem 컴포넌트로 변환해서 보여줌
function TodoList(props) {
  const { todos, onRemove } = props;

  return (
    <TodoListWrapper>
      {/* <TodoListItem /> */}
      {todos.map((todo)=>{
        return <TodoListItem key={todo.id} id={todo.id} text={todo.text} done={todo.done} onRemove={onRemove} />
      })}
    </TodoListWrapper>
    
  );
};

export default TodoList;