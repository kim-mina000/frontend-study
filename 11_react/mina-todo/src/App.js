import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import MainPage from './component/MainPage';
// import "react-calendar/dist/Calendar.css";


function App() {
  return (
    <BrowserRouter>
      <MainPage />
    </BrowserRouter>
  );
}

export default App;
