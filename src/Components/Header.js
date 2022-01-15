import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Nav>
      <Logo src="/images/logo.svg" alt="headerimg" />
      <NavMenu>
        <a href="https://google.com">
          <img src="/images/home-icon.svg" alt="headerimg" />
          <span>HOME</span>
        </a>
        <a href="https://google.com">
          <img src="/images/search-icon.svg" alt="headerimg" />
          <span>SEARCH</span>
        </a>
        <a href="https://google.com">
          <img src="/images/watchlist-icon.svg" alt="headerimg" />
          <span>WATCHLIST</span>
        </a>
        <a href="https://google.com">
          <img src="/images/original-icon.svg" alt="headerimg" />
          <span>Originals</span>
        </a>
        <a href="https://google.com">
          <img src="/images/movie-icon.svg" alt="headerimg" />
          <span>MOVIES</span>
        </a>
        <a href="https://google.com">
          <img src="/images/series-icon.svg" alt="headerimg" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <UserImg src="/images/prof pic.jpg" />
    </Nav>
  );
}

export default Header;

const Nav = styled.nav`
  overflow-x: hidden;
  height: 70px;
  background-color: #090b13;
  display: flex;
  align-items: center;
  padding: 0 36px;
`;

const Logo = styled.img`
  width: 80px;
`;

const NavMenu = styled.div`
  display: flex;
  flex: 1;
  margin-left: 25px;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer;
    color: rgb(249, 249, 249);
    text-decoration: none;
    img {
      height: 20px;
    }
    span {
      font-size: 13px;
      letter-spacing: 1.42px;
      position: relative;
      &:after {
        content: "";
        height: 2px;
        position: absolute;
        background: white;
        left: 0;
        right: 0;
        bottom: -6px;
        opacity: 0;
        transform-origin: center;
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        transform: scaleX(0);
      }
    }
    &:hover {
      span:after {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }
`;

const UserImg = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 100%;
`;
