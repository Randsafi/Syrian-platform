import { createTheme } from "@mui/material";

export const appTheme = createTheme({
  direction: 'rtl',
  palette: {
    primary: {
      main: '#6DCDE5', 
    },
    secondary: {
      main: '#fd79a8', // وردي
    },
    background: {
      default: 'linear-gradient(135deg, #d4fafd 0%, #e1e7f1ff 50%, #d4fafd 100%)',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          background: 'linear-gradient(135deg, #d4fafd 0%, #dde5e6ff 50%, #d4fafd 100%)',
          backgroundAttachment: 'fixed',
          minHeight: '100vh',
          margin: 0,
          padding: 0,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        },
      },
    },
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
            boxShadow: '0 4px 16px rgba(13,15,15,0.2)',
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
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          backdropFilter: 'blur(10px)',
        },
      },
    },
  },
});