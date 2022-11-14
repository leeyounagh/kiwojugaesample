import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import axios from 'axios';

const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&category=c3`



function Main() {
    // 테스트 데이터 정의
    const [mainData,setMainData] =useState([]);

    useEffect(()=>{
      axios.get(mainUrl)
      .then((response)=>{
        setMainData(response.data.items);
        console.log(mainData[0]);
      })
      .catch(
        (err)=>{
            console.log(err);
        }
      )
    },[]);

  
  return (
    <MainContainer >
        <MainTitleContainer>
            키워주개
        </MainTitleContainer>

        <MainRadioBoxContainer>
        <MainRadioBoxLabel>
        <input type="radio" name="contact" value="dog" checked />
         <span>강아지</span>
       
        </MainRadioBoxLabel>
        <MainRadioBoxLabel>
        <input type="radio" name="contact" value="cat"  />
         <span>고양이</span>
       
        </MainRadioBoxLabel>


        </MainRadioBoxContainer>
   
        <MainContentsContainer>
        {
            mainData.map((item,index)=>{
                return(
                    <>
                    <img key={index} alt={item.title}src={item.repPhoto.photoid.thumbnailpath} 
                      width="300px" height="300px" style={{marginRight:"30px"}}></img>
                  
                    </>
                )
            })
        }

        </MainContentsContainer>
    
 


         
    </MainContainer>
  )


}
const MainContainer = styled.div`
 width:100%;
 margin-top:50px;
 

`
const MainTitleContainer =styled.div`
  display:flex;
  justify-content:center;
  width:100%;
  height:30vh;
  font-size:5rem;
`
const MainRadioBoxContainer =styled.div`
margin-left:10vw;
margin-bottom:5vh;
`
const MainRadioBoxLabel = styled.label`

`
const MainContentsContainer = styled.div`
  margin-left:10vw;
`


export default Main