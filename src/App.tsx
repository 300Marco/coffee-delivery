import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaults';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
