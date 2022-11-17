import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import Slider from "react-slick";

const mainUrl = `http://api.visitjeju.net/vsjApi/contents/searchList?apiKey=sbrr93ynwcggx6br&locale=kr&category=c3`;

function Main() {
  // 테스트 데이터 정의
  const [mainData, setMainData] = useState([]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    axios
      .get(mainUrl)
      .then((response) => {
        setMainData(response.data.items);
        console.log(mainData[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <MainContainer>
      <MainCarouselDiv>
        <Slider {...settings}>
          <MainCarouselImgDiv>
            <img
              src="https://i.pinimg.com/564x/56/70/25/567025f65043b80f34be3d862229e7e3.jpg"
              alt="강아지"
            ></img>
          </MainCarouselImgDiv>
          <MainCarouselImgDiv>
            <img src="고양이들.jpg" alt="고양이"></img>
          </MainCarouselImgDiv>
        </Slider>
      </MainCarouselDiv>
      <MainSearchDiv>
        <RadioinnerDiv>
          <RadioDiv>
            <UploadedAnimalRadioDiv
              type="radio"
              name="contact"
              value="publicAnimal"
              checked
            />
            <MainRadioSpan>국내 공식 입양등록 Animal</MainRadioSpan>
          </RadioDiv>
          <RadioDiv>
            <UploadedAnimalRadioDiv
              type="radio"
              name="contact"
              value="userAnimal"
            />
            <MainRadioSpan>유저 입양등록 Animal</MainRadioSpan>
          </RadioDiv>
        </RadioinnerDiv>

        <RadioDiv>
          <MainSearchInput type="text" placeholder="🍳"></MainSearchInput>
        </RadioDiv>
      </MainSearchDiv>

      <MainContentsContainer>
        {mainData.map((item, index) => {
          return (
            <>
              <img
                key={index}
                alt={item.title}
                src={item.repPhoto.photoid.thumbnailpath}
                width="290px"
                height="290px"
                style={{ marginRight: "30px" }}
              ></img>
            </>
          );
        })}
      </MainContentsContainer>
    </MainContainer>
  );
}
const MainSearchInput = styled.input`
  width: 16vw;
  height: 5vh;
  font-size: 15px;
  border-radius: 20px;
  padding-left: 10px;
  outline: 1px solid gray;
  font-weight: 600;
`;
const RadioinnerDiv = styled.div`
  display: flex;
`;
const RadioDiv = styled.div`
  width: 16vw;
`;
const MainRadioSpan = styled.span`
  font-size: 1.2rem;
`;
const UploadedAnimalRadioDiv = styled.input``;
const MainCarouselImgDiv = styled.div`
  img {
    width: 80vw;
    height: 80vh;
  }
`;
const MainSearchDiv = styled.div`
  padding-top: 30px;

  font-family: "GangwonEduPowerExtraBoldA";
  width: 80vw;
  height: 10vh;
  margin-left: 10vw;
  display: flex;
  justify-content: space-between;
  padding-right: 10vw;
  input[type="radio"] {
    accent-color: black;
  }
`;
const MainContainer = styled.div`
  width: 100%;
  margin-top: 50px;
`;
const MainCarouselDiv = styled.div`
  width: 80vw;
  height: 80vh;
  margin-left: 10vw;
  margin-bottom: 100px;
`;
const MainContentsContainer = styled.div`
  margin-left: 10vw;
`;

export default Main;
