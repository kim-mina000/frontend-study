import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList:[],
  name:null,

}

const todoSlice = createSlice(
  {
    name: 'todoSlice',

    initialState,

    reducers:{

      removeTodo(state, action){
        state.todoList = state.todoList.filter(todo => {
          return todo.id !== action.payload;
        })
      },

      editTodo(state, action){
        // id랑 content를 둘다 받아와야함
        state.todoList = state.todoList.map(todo => {
          if (todo.id === action.payload.id){
            todo.todoContents = action.payload.inputValue;
          }
          return todo;
        });
      },

      addTodo(state, action){
        state.todoList.push(action.payload);
        localStorage.setItem("todoList", JSON.stringify(state.todoList));
      },

      changeDone(state, {payload :{id, isDone}}){
        // id와 isDone 받아오기
        const target = state.todoList.find(item => item.id === id);
        target.done = !isDone;
      },

      changeName(state, {payload : newName}){
        state.name = newName;
      },

    }
  }
);

export default todoSlice.reducer;
export const {removeTodo,editTodo,addTodo,changeDone,changeName} = todoSlice.actions;
