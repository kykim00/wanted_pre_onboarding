import React from "react";
import styled from "styled-components";

export const Logo = () => {
  return (
    <MainLogo>
      <img src="./images/icon-menu.png" alt=""></img>
      <h1>wanted</h1>
    </MainLogo>
  );
};

const MainLogo = styled.header`
  font-size: 23px;
  display: flex;
  align-items: center;
  img {
    width: 17px;
    height: 14px;
  }
  h1 {
    font-weight: bold;
    margin-left: 15px;
  }
  @media (max-width: 992px) {
    width: 100%;
    flex-grow: 1;
    padding: 15px 20px;
  }
`;
