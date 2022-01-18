import React from "react";
import styled from "styled-components";

const menus = [
  {
    name: "홈",
    route: "",
  },
  {
    name: "채용",
    route: "jobsfeed",
  },
  {
    name: "이벤트",
    route: "events",
  },
  {
    name: "직군별 연봉",
    route: "salary",
  },
  {
    name: "이력서",
    route: "cv/intro",
  },
  {
    name: "커뮤니티",
    route: "community/48",
  },
  {
    name: "프리랜서",
    route: "gigs/experts",
  },
  {
    name: "AI 합격예측",
    route: "aiscore/resume",
  },
];

export const Menu = () => {
  const menuList = menus.map((menu) => (
    <Li href={menu.route} name={menu.name} key={`key-menu-${menu.name}`}>
      {menu.name}
    </Li>
  ));
  return <>{menuList}</>;
};

const Li = styled.a`
  display: ${(props) => (props.name === "홈" ? "none" : "block")};
  padding: 15px;
  font-weight: 700;
  @media (max-width: 768px) {
    display: ${(props) =>
      props.name === "채용" || props.name === "홈" || props.name === "이벤트"
        ? "block"
        : "none"};
  }
  @media (max-width: 320px) {
    font-size: 13px;
  }
`;
