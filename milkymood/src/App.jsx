import React from 'react';
import { GlobalStyle } from './styles';
import Header from "./components/Header"

const App = () => {
  const message = (name) => {
    return `${name} is enjoying React a lot!`;
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Header />
    </div>
  );
};

export default App;
