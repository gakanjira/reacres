import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const App = () => (
  <div>
    <GlobalStyle />
    <Button>Hello</Button>
    <Button secondary>Hello</Button>
  </div>
);

export default App;
