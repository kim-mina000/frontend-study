import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import JsxUse from './Chapter3/3.4/JsxUse';
import Library from './Chapter3/Library';
import Clock from './Chapter4/Clock';
import ProsUse from './Chapter5/5.3/ProsUse';
import CommentEx from './Chapter5/5.6/CommentEx';
import Comment from './Chapter5/Comment';
import CommentList from './Chapter5/CommentList';
import Counter from './Chapter7/7.2/Counter';
import Toggle from './Chpater8/8.1/Toggle';
import MyButton from './Chpater8/8.2/MyButton';
import ConfirmButton from './Chpater8/ConfirmButton';
import Greeting from './Chapter9/9.1/Greeting';
import LoginControl from './Chapter9/9.2/LoginControl';

const root = ReactDOM.createRoot(document.getElementById('root'));
// Root DOM Node에 리액트 컴포넌트를 렌더링 하도록 하는 함수(React 엘리먼트를 DOM 엘리먼트로 렌더링하는 역할)
// 처음으로 렌더링할 컴포넌트를 지정하는데 App 컴포넌트가 기본적으로 들어가있음
root.render(
    // <App />

    // 3장 예제
    // <JsxUse />
    // <Library />
    // <ProsUse />
    // <>    
    //     <CommentEx 
    //     user={{
    //         name:'Hello kitty', 
    //         avatarUrl:'http://placekitten.com/200/300'
    //     }} 
    //     text="리액트를 즐기세요" 
    //     date={new Date()} />

    //     <CommentEx 
    //     user={{
    //         name:'Hello puppy', 
    //         avatarUrl:'http://placedog.net/200/300'
    //     }} 
    //     text="강아지를 즐기세요" 
    //     date={new Date()}/>
    // </>
    // <CommentList />
    // <Counter />

    // 8장
    // <Toggle />
    // <MyButton />

    // <ConfirmButton />

    // 9장
    // <Greeting />
    <LoginControl />
);

// 4장 예제
// 1초마다 Clock 컴포넌트를 랜더링 하는 코드
// setInterval(()=>{
//     root.render (<Clock />);
// },1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
