import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

const GuideLine = () => {
  const location = useLocation();
  const [menuName, setMenuName] = useState("");
  useEffect(() => {
    switch (location.pathname) {
      case "/community/missing":
        setMenuName("전체게시판");
        break;
      case "/community/missing/find":
        setMenuName("찾아요 게시판");
        break;
      case "/community/missing/sighting":
        setMenuName("목격했어요 게시판");
        break;
      case "/community/missing/protect":
        setMenuName("보호중이에요 게시판");
        break;
      case "/community/missing/review":
        setMenuName("후기 게시판");
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <GuideLineDiv>
      <div></div>
      <GuideLineSpanDiv>
        <span>실종동물</span>
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
