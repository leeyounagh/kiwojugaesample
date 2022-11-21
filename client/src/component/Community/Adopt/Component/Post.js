import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Search from "./Search";

const Post = () => {
  return (
    <PostDiv>
      <SuggestionPostDiv>
        <SuggestionPostTitle>가족이 되어주세요.</SuggestionPostTitle>
        <SuggestionPostUl>
          <SuggestionPostLi>
            <Link>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ2erdRfCSeJtK97ktXVRWpX7JosioUXheow&usqp=CAU"
                alt="1"
              />
              <span>루루애옹</span>
            </Link>
          </SuggestionPostLi>
          <SuggestionPostLi>
            <Link>
              <img
                src="https://t1.daumcdn.net/cfile/tistory/2250563851AB6B3F27"
                alt="1"
              />
              <span>루루애옹</span>
            </Link>
          </SuggestionPostLi>
          <SuggestionPostLi>
            <Link>
              <img
                src="http://ojsfile.ohmynews.com/STD_IMG_FILE/2015/0206/IE001799174_STD.jpg"
                alt="1"
              />
              <span>루루애옹</span>
            </Link>
          </SuggestionPostLi>
          <SuggestionPostLi>
            <Link>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn8Q0D-OVTt1X87xS7jrlYK4wiD8OELzkSsg&usqp=CAU"
                alt="1"
              />
              <span>루루애옹</span>
            </Link>
          </SuggestionPostLi>
          <SuggestionPostLi>
            <Link>
              <img
                src="http://newsimg.hankookilbo.com/2015/02/25/201502251233375142_2.jpg"
                alt="1"
              />
              <span>루루애옹</span>
            </Link>
          </SuggestionPostLi>
        </SuggestionPostUl>
      </SuggestionPostDiv>
      <Search/>
    </PostDiv>
  );
};

const PostDiv = styled.div`
  width: 1000px;
`;

const SuggestionPostDiv = styled.div`
  margin-bottom:20px;
  width: 100%;
  border: 3px solid green;
  box-sizing: border-box;
`;
const SuggestionPostTitle = styled.h2`
  padding-left: 13px;
`
const SuggestionPostUl = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin:0;
  padding:0 0 10px 0;
`;
const SuggestionPostLi = styled.li`
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;
    text-decoration: none;
    img {
      width: 180px;
      height: 120px;
    }
    span{
      width: 100%;
      text-align: center;
    }
  }
`;

export default Post;
