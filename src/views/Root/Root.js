import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'theme/MainTheme';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Button>Hello</Button>
        <Button secondary>Hello</Button>
      </>
    </ThemeProvider>
  </div>
);

export default App;
