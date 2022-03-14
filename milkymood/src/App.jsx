import React from 'react';
import { GlobalStyle } from './styles';

const App = () => {
  const message = (name) => {
    return `${name} is enjoying React a lot!`;
  };

  return (
    <div className="App">
      <GlobalStyle />
      <h1>React course!</h1>
      <h2>{message`Jorik`}</h2>
    </div>
  );
};

export default App;
