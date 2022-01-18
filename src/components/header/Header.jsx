import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
import { Menu } from "./Menu";
import { Search } from "./Search";
import { Notice } from "./Notice";
import { Profile } from "./Profile";
import { Service } from "./Service";
export const Header = () => {
  return (
    <HeaderContainer>
      <Logo></Logo>
      <FlexBox>
        <Menu></Menu>
      </FlexBox>
      <FlexBox>
        <Search></Search>
        <Notice></Notice>
        <Profile></Profile>
        <Service></Service>
      </FlexBox>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1060px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 992px) {
    flex-wrap: wrap;
    width: 90%;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  button {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
  @media (max-width: 992px) {
    button:nth-child(3) {
      display: none;
    }
  }
`;
