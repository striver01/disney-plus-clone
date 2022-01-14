import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background src="/images/detail-bg.jpg" />
      <ImgTitle>
        <img src="/images/bau_logo.png" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>PLAY</span>
        </PlayButton>
        <Trailerbutton>
          <img src="/images/play-icon-white.png" />
          <span>TRAILER</span>
        </Trailerbutton>
        <AddButton></AddButton>
        <GroupButton></GroupButton>
      </Controls>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.img`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImgTitle = styled.div`
  height: 30vh;
  width: 35vw;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Controls = styled.div`
  display: flex;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  font-size: 15px;
  display: flex;
  align-items: center;
  height: 56px;
  background: rgb(249, 249, 249);
  border: none;
  margin-right: 22px;
  letter-spacing: 1.8px;
  cursor: pointer;
  padding: 0 15px;
  &:hover {
    background: rgb(198, 198, 198);
  }
`;

const Trailerbutton = styled(PlayButton)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddButton = styled.button``;

const GroupButton = styled.button``;
