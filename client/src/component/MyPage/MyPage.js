import React from "react";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";

const MyPage = () => {
  return (
    <div>
      <MyPageTitleDiv>MyPage</MyPageTitleDiv>
      <MyPageMainDiv>
        <MyPageMainInnerDiv>
          <BsPersonFill size={60}></BsPersonFill>
          <h5>정보수정</h5>
        </MyPageMainInnerDiv>
        <MyPageMainInnerDiv>
          <FaDog size={60}></FaDog>
          <h5>내 입양 등록보기</h5>
        </MyPageMainInnerDiv>
        <MyPageMainInnerDiv>
          <FaCat size={60}></FaCat>
          <h5>내 입양 신청 보기</h5>
        </MyPageMainInnerDiv>
        <MyPageMainInnerDiv>
          <GiDogHouse size={60}></GiDogHouse>
          <h5>내 후기 보기</h5>
        </MyPageMainInnerDiv>
      </MyPageMainDiv>
    </div>
  );
};

const MyPageTitleDiv = styled.div`
  padding-left: 10vw;
  font-size: 2rem;
  margin-top: 14vh;
  font-weight: 600;
  margin-bottom: 10px;
`;
const MyPageMainInnerDiv = styled.div`
  width: 20vw;
  text-align: center;
  padding-top: 8vh;
`;

const MyPageMainDiv = styled.div`
  width: 80vw;
  border: 1px solid gray;
  height: 30vh;
  margin-left: 10vw;
  background: #fcfcfc;
  display: flex;
  font-family: "GangwonEduPowerExtraBoldA";
  h5 {
    margin-top: 15px;
  }
`;

export default MyPage;
