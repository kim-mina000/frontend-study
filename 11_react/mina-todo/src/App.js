import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes } from "react-router-dom";
import MainPage from './component/MainPage';
import WhatsYourName from './component/WhatsYourName';


function App() {
  return (
    <BrowserRouter>
      <WhatsYourName  />
    </BrowserRouter>
  );
}

export default App;
