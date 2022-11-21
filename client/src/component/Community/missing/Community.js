import React from "react";
import styled from "styled-components";
import GuideLine from "./GuideLine";
import Navbar from "./Navbar";

const Community = () => {
  return (
    <CommunityDiv>
      <Navbar />
      <GuideLine />
      <BoardSectionDiv>

      </BoardSectionDiv>
    </CommunityDiv>
  );
};

const CommunityDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1440px;
`;

const BoardSectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default Community;
