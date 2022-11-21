import React from "react";
import styled from "styled-components";
import MostViewPost from "./MostViewPost";
import Post from "./Post";

const BoardSection = () => {
  return (
    <BoardSectionDiv>
      <Post />
      <MostViewPost />
    </BoardSectionDiv>
  );
};

const BoardSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default BoardSection;
