import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsCheckLg } from "react-icons/bs";
import Kakao from "../sns/Kakao";
import Naver from "../sns/Naver";
import Google from "../sns/Google";

function Register() {
  return (
    <RegisterDiv>
      <RegisterSubDiv>
        <TitleDiv>
          <Title>회원가입</Title>
          <img src="강아지점프.jpg" alt="강아지" />
        </TitleDiv>
        <NameDiv>
          <InputTitle>이름</InputTitle>
          <NameInput placeholder="이름을 입력해주세요" />
        </NameDiv>
        {/* 아이디 중복체크는 react hookform을 이용하면 좋을것같음 */}
        <IdDiv>
          <InputTitle>
            아이디<span>(e-mail)</span>
          </InputTitle>
          <IdInput placeholder="E-mail을 입려해주세요" />
          <IdButton>전송</IdButton>
        </IdDiv>
        <ConfirmNumberDiv>
          <ConfirmNumberInput placeholder="인증번호를 입력해주세요" />
          <ConfirmNumberButton>인증</ConfirmNumberButton>
        </ConfirmNumberDiv>
        <PwDiv>
          <InputTitle>비밀번호</InputTitle>
          <PwInput placeholder="비밀번호를 입력해주세요" />
        </PwDiv>
        <PwConfirmDiv>
          <InputTitle>비밀번호 재확인</InputTitle>
          <PwConfirmInput placeholder="비밀번호를 확인해주세요" />
          <BsCheckLg />
        </PwConfirmDiv>
        <PhoneDiv>
          <InputTitle>휴대전화</InputTitle>
          <PhoneInput placeholder="전화번호를 입력해주세요" />
        </PhoneDiv>
        <RegisterButtonDiv>
          <RegisterButton>가입하기</RegisterButton>
        </RegisterButtonDiv>
        <LoginBtnDiv>
          <Link to="/login">이미 가입 하셨나요?</Link>
        </LoginBtnDiv>
        <SnsDiv>
          <Kakao />
          <Naver />
          <Google />
        </SnsDiv>
      </RegisterSubDiv>
    </RegisterDiv>
  );
}

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const RegisterSubDiv = styled.div``;

const TitleDiv = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(190%, -50%);
    width: 80px;
    height: 70px;
  }
`;
const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 50px 0;
`;
const InputTitle = styled.h4`
  margin: 0 0 5px 0;
  span {
    font-size: 14px;
  }
`;

const NameDiv = styled.div`
  margin-bottom: 25px;
`;
const NameInput = styled.input`
  width: 500px;
  height: 40px;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
  outline: none;
`;

const IdDiv = styled(NameDiv)``;
const IdInput = styled(NameInput)``;
const IdButton = styled.button`
  margin-left: -50px;
  padding: 0;
  width: 50px;
  height: 40px;
  background-color: transparent;
  border-radius: 7px;
  cursor: pointer;
  &:hover {
    background-color: #363636;
    color: white;
  }
`;

const ConfirmNumberDiv = styled(NameDiv)``;
const ConfirmNumberInput = styled(NameInput)``;
const ConfirmNumberButton = styled(IdButton)``;

const PwDiv = styled(NameDiv)``;
const PwInput = styled(NameInput)``;

const PwConfirmDiv = styled(NameDiv)`
  svg {
    margin-left: -17px;
  }
`;
const PwConfirmInput = styled(NameInput)``;

const PhoneDiv = styled(NameDiv)``;
const PhoneInput = styled(NameInput)``;

const RegisterButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const RegisterButton = styled.button`
  width: 400px;
  height: 50px;
  background-color: transparent;
  border: 2px solid black;
  border-radius: 10px;
  font-size: 1.3rem;
  cursor: pointer;
  &:hover {
    background-color: black;
    color: white;
  }
`;

const LoginBtnDiv = styled.div`
  margin: 20px 0;
  a {
    color: black;
  }
`;

const SnsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  a {
    margin: 5px 0;
  }
`;
export default Register;
