import React from 'react';
import styled from 'styled-components';


function Register() {
  return (
          <RegisterContainer>
           <RegisterItems>
           <h2>
             회원가입 
            </h2>
           </RegisterItems>
          <RegisterItems>
          <input placeholder='아이디를 입력하세요'></input>
            <button>아이디 중복체크</button> 
          </RegisterItems>
        
            {/* 아이디 중복체크는 react hookform을 이용하면 좋을것같음 */}
            <RegisterItems>
            <input placeholder='비밀번호를 입력하세요'></input>
          
            </RegisterItems>
            <RegisterItems>
              <input placeholder='유저이름을 적어주세요'></input>
            </RegisterItems>
            <RegisterItems>
            <input placeholder='비밀번호 확인'></input>       
            </RegisterItems>
           
           <RegisterItems>
            <h2>sns 연동 회원가입</h2>
           </RegisterItems>

          </RegisterContainer>
    
  )
}

const RegisterContainer = styled.div`
padding:20vh;

`
const RegisterItems =styled.div`
display:flex;
justify-content:center;
margin-top:10px;
`

export default Register