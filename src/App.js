import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

import { Routes,Route } from 'react-router-dom';

import LogIn from './component.js/LogIn';
import Signup from './component.js/Signup';
import Password from './component.js/Password';
import RePassword from './component.js/RePassword';
import { appTheme } from './appTeme';


function App() {
  
  return (
    <div className="App" dir="rtl" style={{margin:"20px" ,direction:"rtl"}}>
      <ThemeProvider Provider theme={appTheme }>
        
      </ThemeProvider>
      <Routes >
        <Route path='/' element={<LogIn/>} />
        <Route path='/login' element={<LogIn/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/forgot-password' element={<Password/>} />
        <Route path='/new-password' element={<RePassword/>} />
      </Routes>
    </div>
  );
}

export default App;
