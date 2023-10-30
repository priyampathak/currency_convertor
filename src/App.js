import logo from './logo.svg';
import './App.css';
import React from 'react';
import FF from './components/FF';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './components/style.css'
import CssBaseline from '@mui/material/CssBaseline';

const theme = createTheme({
  palette: {
    background: {
      default: '#e1eaef', // Set your desired background color here
    },
  },
});


function App() {
  return (
    <>
    <FF />
    </>
  );
}

export default App;
