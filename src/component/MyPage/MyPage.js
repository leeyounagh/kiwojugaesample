import React from 'react';
import styled from 'styled-components'

const MyPage = () => {
    return (
        <div>
            <MyPageContents>
            <h2>MyPage</h2>
            </MyPageContents>
           <MyPageContents>
           <h3>유저이름</h3>
           </MyPageContents>
            <MyPageContents>
            <h3>등록한글보기</h3>
            </MyPageContents>
            <MyPageContents>
            <h3>분양등록페이지 바로가기 a태그</h3>
            </MyPageContents>
           <MyPageContents>
           <h3>분양신청페이지 바로가기 a태그</h3>
           </MyPageContents>
           
        </div>
    );
};

const MyPageContents =styled.div`
display:flex;
justify-content:center;

`

export default MyPage;