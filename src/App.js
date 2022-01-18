import React from "react";
import { Header } from "./components/header/Header";
import { Carousel } from "./components/carousel/Carousel";
import GlobalStyle from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <Header></Header>
      <Carousel></Carousel>
    </>
  );
}

export default App;
