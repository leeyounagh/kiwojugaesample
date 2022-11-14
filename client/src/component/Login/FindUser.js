import React from 'react';
import styled from 'styled-components';

const FindUser = () => {
    return (
        <div>
            <FindUserContainer>
            이메일에 비밀번호를 전송하는식으로 하면 좋을것같습니다.
            </FindUserContainer>
            <FindUserContainer>
            <h1>Id/PassWord 찾기</h1>
            </FindUserContainer>
           <FindUserContainer>
           <input placeholder='유저네임을 입력하세요'></input>
           </FindUserContainer>
          <FindUserContainer>
          <input placeholder='등록된 이메일을 입력하세요..'></input>
          </FindUserContainer>
       <FindUserContainer>
       <button>비밀번호 찾기</button>
       </FindUserContainer>
       
        </div>
    );
};

const FindUserContainer = styled.div`
display:flex;
justify-content:center;
margin-bottom:10px;

`


export default FindUser;