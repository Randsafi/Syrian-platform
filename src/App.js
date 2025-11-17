import './App.css';
import { Button, createTheme, ThemeProvider } from '@mui/material';

import { Routes,Route, Link } from 'react-router-dom';

import LogIn from './component.js/LogIn';
import Signup from './component.js/Signup';
import Password from './component.js/Password';
import RePassword from './component.js/RePassword';


function App() {
  const appTheme  = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#1976d2', 
    },
    secondary: {
      main: '#fd79a8', // وردي
    },
    background: {
      default: '#d7e1f3',
    },
  },
  components: {
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          backgroundColor: '#ffffff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#050507ff',
          },
          '&.Mui-focused': {
            boxShadow: '0 4px 16px rgba(13, 15, 15, 0.2)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#d7e1f3',
            borderWidth: '2px',
          },
        },
        input: {
          padding: '14px 20px',
          fontSize: '16px',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          '&.Mui-focused': {
            color: '#c9d3e7ff',
            fontWeight: 'bold',
          },
        },
      },
    },
  },
});
  
  return (
    <div className="App" dir="rtl" style={{margin:"20px" ,direction:"rtl"}}>
      <ThemeProvider Provider theme={appTheme }>
        <Link to={"/login"}> <Button> login</Button> </Link>
        <Link to={"/register"}> <Button> Sign up</Button> </Link>
        
      </ThemeProvider>
      <Routes >
        <Route path='/login' element={<LogIn/>} />
        <Route path='/register' element={<Signup/>} />
        <Route path='/forgot-password' element={<Password/>} />
        <Route path='/new-password' element={<RePassword/>} />
      </Routes>
    </div>
  );
}

export default App;
