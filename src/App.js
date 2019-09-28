import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import lightTheme from "./theme/light";
import darkTheme from "./theme/dark";
import Container from "./theme/components/Container"
import { ThemeProvider } from "styled-components";
import { darkModeAction } from './actions/config_action';

import { useSelector, useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const config = useSelector(state => state.config)

  useEffect(() => {
    if (!config.darkMode) {
      dispatch(darkModeAction(window.localStorage.getItem('theme')))
    }
  }, [config.darkMode, dispatch])

  const themeChange = (value) => {
    window.localStorage.setItem('theme', value)
    dispatch(darkModeAction(value))
  }

  return (
    <ThemeProvider theme={config.darkMode === "light" ? lightTheme : darkTheme}>
      <nav style={{ width: '100%', padding: '2rem 0 ', backgroundColor: 'gray', textAlign: 'center' }}>
        <button onClick={() => themeChange('dark')}>Dark Mode</button>
        <button onClick={() => themeChange('light')}>Light Mode</button>
      </nav>

      <Container >
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Container>
    </ThemeProvider>
  );
}

export default App;
