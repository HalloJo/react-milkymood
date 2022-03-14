import React from 'react';
import { GlobalStyle, ImageContainer, Wrapper } from './styles';
import Header from "./components/Header"
import Footer from './components/Footer';
import ImageBox from './components/ImageBox';


const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <Wrapper>
        <ImageContainer>
          <ImageBox />
        </ImageContainer>

      </Wrapper>
      <Footer />
    </div>
  );
};

export default App;
