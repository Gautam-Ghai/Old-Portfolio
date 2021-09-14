import React from 'react';
import Main from './pages/Main';
import { useDarkMode } from './utils/useDarkMode';
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "./utils/theme"
import { GlobalStyles } from './utils/global';

function App() {

  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />
  };

  return (
  <ThemeProvider theme={themeMode}>
        <GlobalStyles />
        <Main theme={theme} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
