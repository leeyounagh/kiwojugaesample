import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const GuideLine = () => {
  const location = useLocation();
  const [menuName, setMenuName] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/community/adopt":
        setMenuName("전체게시판");
        break;
      case "/community/adopt/shelter":
        setMenuName("보호소 게시판");
        break;
      case "/community/adopt/dog":
        setMenuName("애견입양 게시판");
        break;
      case "/community/adopt/cat":
        setMenuName("애묘입양 게시판");
        break;
      case "/community/adopt/etc":
        setMenuName("그외 동물들 게시판");
        break;
      case "/community/adopt/review":
        setMenuName("후기 게시판");
        break;
        case "/community/adopt/Writing":
        setMenuName("글쓰기");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <GuideLineDiv>
      <div></div>
      <GuideLineSpanDiv>
        <span>입양게시판</span>
        <span>▶</span>
        <span>{menuName}</span>
      </GuideLineSpanDiv>
    </GuideLineDiv>
  );
};

const GuideLineDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  width: 1440px;
  div:nth-child(1) {
    width: 80%;
    height: 1px;
    border-bottom: 3px solid #cacaca;
  }
`;
const GuideLineSpanDiv = styled.div`
  span {
    margin: 0 5px;
  }
`;

export default GuideLine;
