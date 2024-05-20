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
import MailBox from './Chapter9/9.3/MailBox';
import LoginControlRefactoring from './Chapter9/9.3/LoginControlRefactoring';
import MainPage from './Chapter9/9.4/MainPage';
import Landingpage from './Chapter9/Landingpage';
import NumberList from './Chahpter10/10.1/NumberList';
import ListKey from './Chahpter10/10.2/ListKey';
import AttendanceBook from './Chahpter10/AttendanceBook';
import NameForm from './Chapter11/11.2/NameForm';
import EssayForm from './Chapter11/11.3/EssayForm';
import FlavorForm from './Chapter11/11.3/FlavorForm';
import Reservation from './Chapter11/11.4/Reservation';
import ReservationRefactoring from './Chapter11/11.4/ReservationRefactoring';
import SignUp from './Chapter11/SignUp';
import TextInputWithFocusButton from './Chapter7/7.6/TextInputWithFocusButton';
import FileInput from './Chapter11/11.3/FileInput';
import UnitCounter from './Chapter12/UnitCounter';
import UnitCalculator from './Chapter12/UnitCalculator';
import FancyBorder from './Chapter13/13.1.1.1/FancyBorder';
import WelcomeDialog from './Chapter13/13.1.1.1/WelcomeDialog';
import SplitPaneSection from './Chapter13/13.1.1.2/SplitPaneSection';
import Dialog from './Chapter13/13.1.2/Dialog';
import DialogContainer from './Chapter13/13.1.2/DialogContainer';
import SignUpDialog from './Chapter13/13.1.3/SignUpDialog';
import Card from './Chapter13/Card';
import ProfileCard from './Chapter13/ProfileCard';
import StyledPage from './Chapter15/StyledPage';
import ThemeApp from './Chapter15/theme/ThemeApp';
import Blocks from './Chapter15/theme/Blocks';
import ComponentVariable from './Chapter7/7.6/ComponentVariable';
import CounterEffect from './Chapter7/7.3/ex1/CounterEffect';
import TimerContainer from './Chapter7/7.3/ex2/TimerContainer';
import EffectSummary from './Chapter7/7.3/ex3/EffectSummary';
import EffectContainer from './Chapter7/7.3/ex3/EffectContainer';
import SimpleRouter from './chapter16/SimpleRouter';

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

    // 7장
    // <TextInputWithFocusButton />
    // <ComponentVariable />
    // <CounterEffect />
    // <TimerContainer />
    // <EffectSummary />
    // <EffectContainer />

    // 8장
    // <Toggle />
    // <MyButton />

    // <ConfirmButton />

    // 9장
    // <Greeting />
    // <LoginControl />
    // <MailBox unReadMessages={['React','Re: React','Re:Re: React']}/>
    // <LoginControlRefactoring />
    // <MainPage />
    // <Landingpage />

    // 10장
    // <NumberList />
    // <ListKey />
    // <AttendanceBook />

    // 11장
    // <NameForm />
    // <EssayForm />
    // <FlavorForm />
    // <Reservation />
    // <ReservationRefactoring />
    // <SignUp />
    // <FileInput />

    // 12장
    // <UnitCounter />
    // <UnitCalculator />

    // 13장
    // <FancyBorder />
    // <WelcomeDialog />
    // <SplitPaneSection />
    // <DialogContainer />
    // <SignUpDialog />
    // <ProfileCard />

    // 15장
    // <StyledPage />
    // <Blocks />
    // <ThemeApp />
    
    // 16 장
    <SimpleRouter />

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
