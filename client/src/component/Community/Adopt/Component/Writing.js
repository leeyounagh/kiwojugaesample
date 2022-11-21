import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Writing = () => {
  const [animalTypeList, setAnimalTypeList] = useState();
  //처음 강아지 품종 api 받아오기
  useEffect(() => {
    axios
      .get(
        `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?serviceKey=ogOXawrNeeKckedJw7whjeVYQ0PVA6GIJOkVCNTMTEM%2F9C37ZlRjaoDgkHDsmki2MCJlxZSCG9p9I1pe6pcwOA%3D%3D&up_kind_cd=417000&_type=json`
      )
      .then((data) => {
        setAnimalTypeList(data.data.response.body.items.item);
      });
  }, []);
  //동물 종류 선택에 따른 품종 리스트 변화
  const AnimalOnChange = (value) => {
    console.log(value.target.value);
    if (value.target.value === "고양이") {
      axios
        .get(
          `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?serviceKey=ogOXawrNeeKckedJw7whjeVYQ0PVA6GIJOkVCNTMTEM%2F9C37ZlRjaoDgkHDsmki2MCJlxZSCG9p9I1pe6pcwOA%3D%3D&up_kind_cd=422400&_type=json`
        )
        .then((data) => {
          setAnimalTypeList(data.data.response.body.items.item);
        });
    } else {
      axios
        .get(
          `http://apis.data.go.kr/1543061/abandonmentPublicSrvc/kind?serviceKey=ogOXawrNeeKckedJw7whjeVYQ0PVA6GIJOkVCNTMTEM%2F9C37ZlRjaoDgkHDsmki2MCJlxZSCG9p9I1pe6pcwOA%3D%3D&up_kind_cd=417000&_type=json`
        )
        .then((data) => {
          setAnimalTypeList(data.data.response.body.items.item);
        });
    }
  };

  const [imgFile, setImgFile] = useState();
  //이미지 파일 프리뷰와 백엔드에 넘기기 전 인코딩
  const imgOnChange = (e) => {
    let reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onloadend = () => {
      const previewImgUrl = reader.result;
      if (previewImgUrl) {
        setImgFile(previewImgUrl);
      }
    };
  };

  const [text, setText] = useState("");
  const textOnChange = (text) => {
    setText(text.target.value);
  };

  return (
    <WritingDiv>
      <Title>
        입양 게시글 작성
        <img
          src="https://i.pinimg.com/564x/ab/28/78/ab28783f7c011ce1e1aecf4ceda8b61c.jpg"
          alt="1"
        />
      </Title>
      <TitleInputDiv>
        <span>제목</span>
        <TitleInput />
      </TitleInputDiv>
      <AnimalSelectDiv>
        <span>동물 종류</span>
        <select onChange={(value) => AnimalOnChange(value)}>
          <option>강아지</option>
          <option>고양이</option>
          <option>기타</option>
        </select>
      </AnimalSelectDiv>
      <AnimalTypeDiv>
        <span>품종</span>
        {animalTypeList && (
          <select>
            {animalTypeList.map((list) => (
              <option key={list.kindCd}>{list.knm}</option>
            ))}
          </select>
        )}
      </AnimalTypeDiv>
      <YearMonthDiv>
        <span>개월 수</span>
        <AgeDiv>
          <AgeInput type="number" />년
        </AgeDiv>
        <MonthDiv>
          <MonthInput type="number" />
          개월
        </MonthDiv>
      </YearMonthDiv>
      <NeuteredDiv>
        <span>중성화 여부</span>
        <input type={"radio"} name="neutered" />예
        <input type={"radio"} name="neutered" />
        아니요
      </NeuteredDiv>
      <ImgFileDiv>
        <span>사진 선택</span>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => imgOnChange(e)}
        />
      </ImgFileDiv>
      <ContentsTextDiv>
        <span>내용</span>
        <ContentsTextInput
          value={text}
          onChange={(text) => textOnChange(text)}
        />
      </ContentsTextDiv>
      <PreviewDiv>
        <h2>미리 보기</h2>
      </PreviewDiv>
      <WriteBtn>등록하기</WriteBtn>
      {imgFile && <img src={imgFile} alt={imgFile}></img>}
    </WritingDiv>
  );
};

const WritingDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 900px;
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  margin: -18px 0 0 0;
  img {
    width: 130px;
    height: 100px;
  }
`;

const TitleInputDiv = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 10px;
  border-bottom: 2px solid #c2c2c2;
  span {
    width: 90px;
    margin-right: 30px;
  }
`;
const TitleInput = styled.input`
  padding: 5px;
  width: 40%;
  border: none;
  border-bottom: 1px solid black;
  font-size: 1rem;
  outline: none;
`;

const AnimalSelectDiv = styled(TitleInputDiv)`
  select {
    padding: 5px;
    font-size: 1rem;
    outline: none;
    cursor: pointer;
  }
`;

const AnimalTypeDiv = styled(AnimalSelectDiv)``;

const YearMonthDiv = styled(TitleInputDiv)``;
const AgeDiv = styled.div`
  margin-right: 20px;
`;
const AgeInput = styled(TitleInput)`
  padding: 0;
  width: 40px;
  text-align: center;
`;
const MonthDiv = styled(AgeDiv)``;
const MonthInput = styled(AgeInput)``;

const NeuteredDiv = styled(TitleInputDiv)`
  input {
    cursor: pointer;
    &:nth-child(3) {
      margin-left: 40px;
    }
  }
`;

const ImgFileDiv = styled(TitleInputDiv)``;

const ContentsTextDiv = styled(TitleInputDiv)``;
const ContentsTextInput = styled.textarea`
  padding: 10px;
  width: 80%;
  height: 450px;
  border: none;
  outline: none;
  box-shadow: inset 10px 10px 10px -11px rgba(0, 0, 0, 0.75),
    10px 10px 10px -11px rgba(0, 0, 0, 0.75);
  font-size: 1rem;
`;

const PreviewDiv = styled(TitleInputDiv)`
  h2 {
    margin: 0 auto;
  }
`;

const WriteBtn = styled.button`
  margin: 20px auto;
  width: 150px;
  height: 60px;
  background: none;
  border: 2px solid #E1E1E1;
  font-size:1rem;
  cursor: pointer;
`;

export default Writing;
