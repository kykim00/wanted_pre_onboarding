import React from "react";
import { Badge } from "./Badge";
import styled from "styled-components";
export const Profile = () => {
  return (
    <button>
      <ProfileImage src="./images/unnamed.png" alt="" />
      <Badge></Badge>
    </button>
  );
};

const ProfileImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  @media (max-width: 992px) {
    display: none;
  }
`;
