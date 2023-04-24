import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaults';
import { GlobalStyle } from './styles/global';
import { Router } from './Router';

import { CoffeesContextProvider } from './contexts/CoffeesContext';
import { DeliveryContextProvider } from './contexts/DeliveryContext';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CoffeesContextProvider>
          <DeliveryContextProvider>
            <Router />
          </DeliveryContextProvider>
        </CoffeesContextProvider>
      </BrowserRouter>

      <GlobalStyle />
    </ThemeProvider>
  );
}
