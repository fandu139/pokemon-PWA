import React from "react";
import Flex from "../flex";
import styled from "styled-components";
import Image from "../image";
import './index.css';

const ImageWrapper = styled(Flex)`
  flex: 1;
  position: relative;
`;

function Loading() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageWrapper justifyContent="center" alignItems="center">
          <Image source={"https://www.gambaranimasi.org/data/media/1446/animasi-bergerak-pokemon-0005.gif"} width={"100%"}/>
        </ImageWrapper>
        <p className="App-text">
            Loading. Please Wait ......
        </p>
      </header>
    </div>
  );
}

export default Loading;
