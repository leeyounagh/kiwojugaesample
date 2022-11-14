import React from 'react';
import styled from 'styled-components';


function Login() {
  return (
    <LoginContainer>
      <LoginContents>
      <h1>로그인</h1>
      </LoginContents>
      <LoginContents>
      <input placeholder='아이디를 입력하세요'></input>
      </LoginContents>
    <LoginContents>
    <input placeholder='비밀번호를 입력하세요'></input>
    </LoginContents>
   <LoginContents>
   <button>로그인</button>
   </LoginContents>
    <LoginContents>
      <h2>소셜로그인자리</h2>
    </LoginContents>
    <LoginContents>
      <a href='/finduser'>아이디 찾기</a>
    </LoginContents>

    </LoginContainer>
  )
}
const LoginContainer =styled.div`
  margin-top:100px;
`
const LoginContents =styled.div`
  display:flex;
  justify-content:center;
  margin-bottom:20px;
`

export default Login