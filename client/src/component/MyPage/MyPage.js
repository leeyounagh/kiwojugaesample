import React from "react";
import styled from "styled-components";
import { BsPersonFill } from "react-icons/bs";
import { FaDog } from "react-icons/fa";
import { FaCat } from "react-icons/fa";
import { GiDogHouse } from "react-icons/gi";

const MyPage = () => {
  return (
    <div>
      <MyPageTitleDiv>
        <h2>MyPage</h2>
      </MyPageTitleDiv>
      <MyPageMainDiv>
        <MyPageMainInnerDiv>
          <BsPersonFill size={60}></BsPersonFill>
          <h3>정보수정</h3>
        </MyPageMainInnerDiv>
        <MyPageMainInnerDiv>
          <FaDog size={60}></FaDog>
          <h3>내 입양 등록보기</h3>
        </MyPageMainInnerDiv>
        <MyPageMainInnerDiv>
          <FaCat size={60}></FaCat>
          <h3>내 입양 신청 보기</h3>
        </MyPageMainInnerDiv>
        <MyPageMainInnerDiv>
          <GiDogHouse size={60}></GiDogHouse>
          <h3>내 후기 보기</h3>
        </MyPageMainInnerDiv>
      </MyPageMainDiv>
    </div>
  );
};

const MyPageTitleDiv = styled.div`
  padding-left: 10vw;
  font-size: 1.5rem;
  margin-top: 14vh;
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
`;

export default MyPage;
