import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/themes/defaults';

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Hello World.</h1>
      </div>
    </ThemeProvider>
  );
}
