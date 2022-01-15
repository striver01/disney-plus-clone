import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background src="/images/detail-bg.jpg" alt="bg" />
      <ImgTitle>
        <img src="/images/bau_logo.png" alt="imgtitle" />
      </ImgTitle>
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" alt="imgtitle" />
          <span>PLAY</span>
        </PlayButton>
        <Trailerbutton>
          <img src="/images/play-icon-white.png" alt="imgtitle" />
          <span>TRAILER</span>
        </Trailerbutton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupButton>
          <img src="/images/group-icon.png" alt="imgtitle" />
        </GroupButton>
      </Controls>
      <SubTitle>2018 * 7m * Family, Fantasy, Kids, Animation</SubTitle>
      <Description>
        lskdnfndfnsdlnflsndlcnlkon ppw pofjwenf poewjr jpio jwpioef piojpowjlf
        wpjflskaiurgtdibnsklf;ioasn o wio;rufh owihoweh ;iowhoithw;orhoasdijf
        ;ai htorhe klfheohwrio io owih oiwe h o o
      </Description>
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
  align-items: center;
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

const AddButton = styled.button`
  margin-right: 16px;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const GroupButton = styled(AddButton)``;

const SubTitle = styled.div`
  font-size: 15px;
  color: rgb(249, 249, 249);
  min-height: 20px;
  margin-top: 26px;
`;

const Description = styled.div`
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 750px;
`;
