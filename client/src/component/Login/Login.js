import React from "react";
import styled from "styled-components";
import { RiKakaoTalkFill } from "react-icons/ri";
import { SiNaver } from "react-icons/si";
import { FcGoogle } from "react-icons/fc";

function Login() {
  return (
    <LoginContainer>
      <LoginInnerLeftDiv>
        <LoginContents>
          <LoginText>
            <h3>Login</h3>
          </LoginText>
        </LoginContents>
        <LoginContents>
          <LoginIdInput placeholder="E-mail"></LoginIdInput>
        </LoginContents>
        <LoginContents>
          <PasswordInput placeholder="Password"></PasswordInput>
        </LoginContents>
        <LoginContents>
          <LoginButton>Login</LoginButton>
        </LoginContents>
      </LoginInnerLeftDiv>
      {/* 로그인 내부 왼쪽 ui */}

      <LoginInnerRightDiv>
        <CatDiv>
          <img src="귀여워.png" alt="고양이" width="200px" height="200px"></img>
        </CatDiv>
        <LoginRightRegisterDiv>
          <RegisterText>계정이 없으신가요?</RegisterText>

          <RegisterButton>Register</RegisterButton>
        </LoginRightRegisterDiv>
        <SearchDiv>
          <a href="/finduser">아이디를 잊으셨나요?</a>
          <a href="findpassword">비밀번호를 잊으셨나요?</a>
        </SearchDiv>
        <SnsTextDiv>소셜 로그인</SnsTextDiv>

        <SnsDiv>
          <SnsInnerDiv>
            <RiKakaoTalkFill size={30} />
          </SnsInnerDiv>
          <SnsInnerDiv>
            <SiNaver size={30} />
          </SnsInnerDiv>
          <SnsInnerDiv>
            <FcGoogle size={30} />
          </SnsInnerDiv>
        </SnsDiv>
      </LoginInnerRightDiv>

      {/* 로그인  오른쪽 ui*/}
    </LoginContainer>
  );
}
const LoginContainer = styled.div`
  width: 70%;
  margin-top: 50px;
  border-radius: 10px;
  padding: 50px;
  background-color: #bee9b4;
  height: 75vh;
  margin-left: 15vw;
  font-family: "GangwonEduPowerExtraBoldA";
`;
const RegisterText = styled.div`
  font-size: 1.5rem;
`;
const SnsTextDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
const SnsInnerDiv = styled.div`
  margin-right: 5px;
`;
const SnsDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const CatDiv = styled.div`
  display: flex;
  justify-content: center;
  // margin-top: 7vh;
`;
const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 15px;
  height: 30px;

  a {
    text-decoration: none;
    color: black;
    margin-right: 5px;
  }
`;

const LoginText = styled.h1``;
const LoginRightRegisterDiv = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;
  height: 50px;
`;
const LoginIdInput = styled.input`
  border: none;
  width: 15vw;
  border-bottom: 1px solid gray;
  height: 4vh;
`;
const LoginButton = styled.button`
  border-radius: 50px;
  width: 10vw;
  height: 5vh;
  margin-top: 3vh;
  font-size: 25px;
  background-color: white;
  color: black;
  border: 3px solid black;
  border-radius: 30px;
  text-transform: uppercase;
  latter-spacing: 4px;
  padding-top: 1vh;
  font-family: "GangwonEduPowerExtraBoldA";
  text-align: center;
  font-size: 15px;

  h3 {
    margin-bottom: 5px;
  }
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;

const RegisterButton = styled.button`
  width: 6vw;
  height: 5vh;
  background-color: white;
  border-radius: 50px;
  margin-bottom: 15px;
  margin-left: 1vw;
  font-family: "GangwonEduPowerExtraBoldA";
  padding-top: 1vh;
  font-size: rem;
  &:focus {
    outline: none;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;
const PasswordInput = styled.input`
  border: none;
  width: 15vw;
  border-bottom: 1px solid gray;
  height: 4vh;
`;
const LoginInnerRightDiv = styled.div`
  float: right;
  padding-top: 30px;
  img {
    opacity: 0.8;
  }
`;
const LoginInnerLeftDiv = styled.div`
  width: 38vw;
  height: 60vh;
  background-color: white;
  border-radius: 10px;
  float: left;
  padding-top: 15vh;
`;

const LoginContents = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export default Login;
