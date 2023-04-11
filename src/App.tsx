import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaults';
import { GlobalStyle } from './styles/global';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Hello World.</h1>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit id veritatis eaque itaque veniam obcaecati similique
          deleniti nisi minus, adipisci laudantium eius. Incidunt harum esse
          omnis sit quaerat dignissimos nesciunt!
        </p>
      </div>

      <GlobalStyle />
    </ThemeProvider>
  );
}
