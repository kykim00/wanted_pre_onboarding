import React, { useState, useEffect, useRef } from "react";
import { Card } from "./Card";
import styled from "styled-components";

const TOTAL_CARDS = 11;

function createLeft() {
  return { __html: "<" };
}
function createRight() {
  return { __html: ">" };
}
export const Carousel = () => {
  const [currentCard, setCurrentCard] = useState(1);
  const [mouseDown, setMouseDown] = useState(false);
  const [isMoved, setIsMoved] = useState(false);
  const cardRef = useRef(1);
  const [width, setWidth] = useState(window.innerWidth);

  const handleResize = () => setWidth(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const nextCard = () => {
    if (currentCard >= TOTAL_CARDS - 3) {
      setCurrentCard(1);
    } else {
      setCurrentCard(currentCard + 1);
    }
  };
  const prevCard = () => {
    if (currentCard === 1) {
      setCurrentCard(TOTAL_CARDS);
    } else {
      setCurrentCard(currentCard - 1);
    }
  };
  const onMouseDown = () => {
    setMouseDown(true);
    setIsMoved(false);
  };
  const onMouseLeave = () => {
    setMouseDown(false);
  };
  const onMouseUp = () => {
    if (isMoved) nextCard();
    setMouseDown(false);
  };
  const onMouseMove = (e) => {
    e.preventDefault();
    setIsMoved(true);
  };
  useEffect(() => {
    cardRef.current.style.transition = "all 0.5s ease-in-out";
    if (window.innerWidth >= 1200) {
      cardRef.current.style.transform = `translateX(-${
        currentCard * 10
      }%) translateX(${(width - 1084) / 2}px)`;
    } else {
      cardRef.current.style.transform = `translateX(-${
        currentCard * 10
      }%) translateX(100px)`;
    }
  }, [currentCard, width]);
  return (
    <Container>
      <CardContainer
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        ref={cardRef}
      >
        <Card currentCard={currentCard} />
      </CardContainer>
      {window.innerWidth >= 1200 ? (
        <>
          <Button
            dangerouslySetInnerHTML={createLeft()}
            className="prev"
            onClick={prevCard}
          ></Button>
          <Button
            dangerouslySetInnerHTML={createRight()}
            className="next"
            onClick={nextCard}
          ></Button>
        </>
      ) : (
        ""
      )}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  position: relative;
  padding-top: 25px;
  border-top: 1px solid #e1e2e3;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 135px;
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  background-color: #fff;
  font-size: 16px;
  &.prev {
    left: calc((100% - 1210px) / 2);
  }
  &.next {
    right: calc((100% - 1200px) / 2);
  }
`;
const CardContainer = styled.div`
  width: calc(1084px * 10);
  display: flex;
  justify-content: center;
  max-height: 600px;
  @media (max-width: 1200px) {
    width: calc((100% - 200px) * 10);
    max-height: 300px;
  }
`;
