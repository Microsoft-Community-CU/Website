import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider, CssBaseline } from '@material-ui/core'
import theme from './theme'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline>
      <App />
    </CssBaseline>
  </ThemeProvider>,
  document.getElementById('root')
);

