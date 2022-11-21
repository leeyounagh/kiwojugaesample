import styled from "styled-components";
import GuideLine from "./Component/GuideLine";
import Navbar from "./Component/Navbar";
import { Outlet } from "react-router-dom";
import BoardSection from "./Component/BoardSection";

const Community = () => {
  return (
    <CommunityDiv>
      <Navbar />
      <GuideLine />
      <BoardSection></BoardSection>
      <Outlet />
    </CommunityDiv>
  );
};

const CommunityDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 1440px;
`;

export default Community;
