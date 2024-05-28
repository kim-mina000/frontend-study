import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './component/MainPage';
import WhatsYourName from './component/WhatsYourName';
import { useEffect, useState } from 'react';


function App() {

  const [name, setName] = useState('');

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<WhatsYourName  name={name} setName={setName} />}/>
        <Route path='/scheduler' element={<MainPage name={name} />}/>
      </Routes>
      
    
    </BrowserRouter>
  );
}

export default App;
