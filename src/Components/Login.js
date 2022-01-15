import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <Background>
        <img src="/images/login-background.jpg" alt="backgroud" />
      </Background>
      <ContentBox>
        <Logo src="/images/cta-logo-one.svg" />
        <SignUp>GET ALL THERE</SignUp>
        <Description>
          lorem ipsum fednhan iu uweh iuhreh odj ;o oihqoh daoishdohed
          ohd;kheuiofd herdio ahe;o qoi oqi oahfiuskjcbsuifgwkhdiuqwe oiuio
          hoqiehro;iehwf;sa oih sbdficbn hfo ;en jjaijsfkj iowefoi hwfio oiihoif
          hkansfdoohweioa knsdoi eoihfw
        </Description>
        <LoginLogo src="/images/cta-logo-two.png" alt="login" />
      </ContentBox>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  height: calc(100vh-70px);
`;

const Background = styled.div`
  position: relative;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  img {
    position: fixed;
    width: 100%;
    z-index: -1;
    height: 100%;
    no-repeat: fixed;
    object-fit: center;
  }
`;

const ContentBox = styled.div`
  max-width: 650px;
  padding: 80px 40px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Logo = styled.img``;

const SignUp = styled.a`
  background-color: #0063e5;
  width: 100%;
  font-weight: bold;
  padding: 17px 0;
  border-radius: 5px;
  text-align: center;
  color: #f9f9f9;
  cursor: pointer;
  transition: all 250ms;
  margin-top: 8px;
  letter-spacing: 1.5px;
  margin-bottom: 17px;
  &:hover {
    background: #0483ee;
  }
`;

const Description = styled.div``;

const LoginLogo = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 10px;
`;
