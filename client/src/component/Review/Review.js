import React from 'react';
import styled from 'styled-components';


function Review() {
  return (
    <div>
    <ReviewContents>
    <h2>입양후기</h2>
    </ReviewContents>
   <ReviewContents>
   입양후기도 게시판으로! 아래느낌으로 하면 좋을것 같습니다.
   </ReviewContents>
      <ReviewContents>
      <img src='게시판.png'></img>
      </ReviewContents>
     
    


</div>
  )
}
const ReviewContents =styled.div`
display:flex;
justify-content:center;
margin-bottom:50px;
`
export default Review