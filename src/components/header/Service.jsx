import React from "react";
import styled from "styled-components";

export const Service = () => {
  return (
    <Container>
      {window.innerWidth >= 992 ? (
        <Button>기업 서비스</Button>
      ) : (
        <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <path
              d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
              id="a"
            ></path>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <mask id="b" fill="#fff">
              <use href="#a"></use>
            </mask>
            <use fill="#333" href="#a"></use>
            <g mask="url(#b)" fill="#333">
              <path d="M0 0h18v18H0z"></path>
            </g>
          </g>
        </svg>
      )}
    </Container>
  );
};

const Container = styled.div`
  &:before {
    display: inline-block;
    content: "";
    width: 1px;
    height: 10px;
    background-color: #e1e2e3;
    margin: 0 10px;
  }
  @media (max-width: 992px) {
    &:before {
      display: none;
    }
  }
`;
const Button = styled.a`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 30px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 5px 10px;
  margin-left: 15px;
  font-weight: 400;
`;
