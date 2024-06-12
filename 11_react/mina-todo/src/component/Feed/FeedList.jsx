import styled from "styled-components";
import FeedListItem from "./FeedListItem";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult
} from 'react-beautiful-dnd';



const Wrapper = styled.div`
  width: calc(100% - 30px);
  height: 75%;
  margin-top:20px;
  overflow-y: auto;

  & ::-webkit-scrollbar{
    background: pink;
  }
`;

function FeedList({todoList, setTodoList, handleEdit, handleDelete, theme, date, handleDone}) {



  const editTodo = (e, id, copyDate, done)=>{
    const copyTodo = {text:e, id:id, date:copyDate ,done:done};
    const copyTodoList = [...todoList];
    const index = copyTodoList.findIndex((todo)=>todo.id === copyTodo.id);
    copyTodoList[index] = copyTodo;
    setTodoList(copyTodoList);
  }; // 나중에 코드 더 간소화 하게 할 수 있으면 좋겠음!


  // * * * * * * DND 구현 코드 * * * * * *
   // --- Mock 데이터
  // const items = [...Array(4)].map((_, i) => ({ id: `${i}${i}${i}`, content: `item-${i}` }));
  const copyTodoList = todoList.filter(todo => todo.date === moment(date).format("YYYY-MM-DD"));
  const otherTodoList = todoList.filter(todo => todo.date !== moment(date).format("YYYY-MM-DD"));

   // --- Draggable이 Droppable로 드래그 되었을 때 실행되는 이벤트
  const onDragEnd = ({ source, destination }) => {
    if (!destination) return;
    console.log('>>> source', source);
    console.log('>>> destination', destination);

    const pickTodo = copyTodoList.splice(source.index, 1);
    copyTodoList.splice(destination.index, 0, ...pickTodo);
    setTodoList([...otherTodoList, ...copyTodoList]);

  };

   // --- requestAnimationFrame 초기화
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const animation = requestAnimationFrame(() => setEnabled(true));

    return () => {
      cancelAnimationFrame(animation);
      setEnabled(false);
    };
  }, []);

  if (!enabled) {
    return null;
  }
   // --- requestAnimationFrame 초기화 END


  return (
    <Wrapper>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {provided.placeholder}
            {/* {todoList.map((todo,index)=>{  */}
            {copyTodoList.map((todo,index)=>{ 
              return todo.date === moment(date).format("YYYY-MM-DD") 
              &&<Draggable key={todo.id} draggableId={todo.id} index={index}>
                {(provided, snapshot) => (
                  <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <FeedListItem key={todo.id} theme={theme} todo={todo} todoList={todoList} setTodoList={setTodoList} 
                    handleEdit={handleEdit} handleDelete={handleDelete} editTodo={editTodo} handleDone={handleDone}/>
                  </div>
                )}
                </Draggable>
            })}
          </div>
        )}
        </Droppable>
      </DragDropContext>
    </Wrapper>
  );
};

export default FeedList;