import styled from "styled-components";

const slide = [
  {
    id: 1,
    image: "./images/carousel8.jpg",
    title: "개발자 되고싶은 분들!?",
    content: "프론트엔드 무료 교육과정 참여하기",
  },
  {
    id: 2,
    image: "./images/carousel1.jpg",
    title: "UX 디자이너의 커리어설계",
    content: "브랜드 가치를 더하는 디자인",
  },
  {
    id: 3,
    image: "./images/carousel2.jpg",
    title: "성장하는 개발자가 되려면",
    content: "OOO 검색하지 말 것",
  },
  {
    id: 4,
    image: "./images/carousel3.jpg",
    title: "포트폴리오를 부탁해",
    content: "디자이너의 포폴 살펴보기",
  },
  {
    id: 5,
    image: "./images/carousel4.jpg",
    title: "해, 커리어 EP 02 공개",
    content: "마지막 관문 2라운드의 승자는?",
  },
  {
    id: 6,
    image: "./images/carousel5.jpg",
    title: "개발자의 성장 비결 공개",
    content: "Velog, 글 쓰는 개발자들의 이야기",
  },
  {
    id: 7,
    image: "./images/carousel6.jpg",
    title: "마케팅 주니어를 찾습니다",
    content: "기업과제 풀고 취업까지 한번에!",
  },
  {
    id: 8,
    image: "./images/carousel7.jpg",
    title: "성과를 내는 마케팅",
    content: "실제 사례를 공개합니다",
  },
  {
    id: 9,
    image: "./images/carousel8.jpg",
    title: "개발자 되고싶은 분들!?",
    content: "프론트엔드 무료 교육과정 참여하기",
  },
  {
    id: 11,
    image: "./images/carousel1.jpg",
    title: "UX 디자이너의 커리어설계",
    content: "브랜드 가치를 더하는 디자인",
  },
];
export const Card = (props) => {
  return (
    <>
      {slide.map((post) => {
        const { id, image, title, content } = post;
        return (
          <ImageContainer key={id} currentCard={props.currentCard}>
            <Image className="img" src={image} alt="" />
            <ContentContainer>
              <div>
                <H2>{title}</H2>
                <P>{content}</P>
              </div>
              <A href="./">바로가기 </A>
            </ContentContainer>
          </ImageContainer>
        );
      })}
    </>
  );
};

const Image = styled.img`
  width: 100%;
  border-radius: 4px;
  @media (max-width: 1200px) {
    height: 183px;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 1084px;
  padding: 0 12px;
  position: relative;
  &:nth-child(${(props) => props.currentCard + 2}) {
    div {
      opacity: 0;
    }
    opacity: 0.8;
  }
  &:nth-child(${(props) => props.currentCard}) {
    div {
      opacity: 0;
    }
    opacity: 0.8;
  }
  @media (max-width: 1200px) {
    width: calc(100% - 200px);
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  opacity: 1;
  text-align: left;
  left: 34px;
  transition: 0.5s;
  @media (max-width: 1200px) {
    position: relative;
    bottom: 0;
    left: 0;
    width: 100%;
    min-width: 300px;
    text-align: center;
  }
`;

const H2 = styled.h2`
  margin: 20px 20px 0;
  font-size: 20px;
  font-weight: 700;
`;

const P = styled.p`
  padding: 0 20px 20px;
  font-size: 14px;
  border-bottom: 1px solid #ddd;
  @media (max-width: 1200px) {
    border-bottom: none;
    padding: 0;
  }
`;

const A = styled.a`
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #36f;
  padding: 6px 8px;
  margin: 15px 0 0 13px;
  display: block;
`;
