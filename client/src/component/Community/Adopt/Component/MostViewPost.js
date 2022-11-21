import React from "react";
import styled from "styled-components";
import { CiViewList } from "react-icons/ci";
import { Link } from "react-router-dom";

const MostViewPost = () => {
  return (
    <MostViewedPostsDiv>
      <Title>
        가장 많이 본 글<CiViewList />
      </Title>
      <PostUl>
        <PostLi>
          <Link>
            <span>1</span>
            <p>세상 예쁜 동글동글 크림푸들 ...</p>
          </Link>
        </PostLi>
        <PostLi>
          <Link>
            <span>2</span>
            <p>비숑 분양합니다</p>
          </Link>
        </PostLi>
        <PostLi>
          <Link>
            <span>3</span> <p> 안녕하세요 우리 이쁜 귀요미 ...</p>
          </Link>
        </PostLi>
        <PostLi>
          <Link>
            <span>4</span>
            <p>예쁜 포메라니안 아기천사 소...</p>
          </Link>
        </PostLi>
        <PostLi>
          <Link>
            <span>5</span>
            <p>푸들 아무데서나 분양받지말고...</p>
          </Link>
        </PostLi>
        <PostLi>
          <Link>
            <span>6</span>
            <p>미니 비숑 좋은주인님 찾는중...</p>
          </Link>
        </PostLi>
        <PostLi>
          <Link>
            <span>7</span> <p>포메라니안 2개월되서 가족찾...</p>
          </Link>
        </PostLi>
      </PostUl>
    </MostViewedPostsDiv>
  );
};

const MostViewedPostsDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  width: 380px;
  height: 300px;
  background-color: #ededed;
`;
const Title = styled.h2`
  display: flex;
  align-items: center;
  margin: 0;
  svg {
    font-size: 30px;
  }
`;
const PostUl = styled.ul`
  margin: 0;
  padding: 0 30px;
  list-style: none;
`;
const PostLi = styled.li`
  margin: 13px 0;
  a {
    display: flex;
    align-items: center;
    color: black;
    text-decoration: none;
    span {
      margin-right: 15px;
      font-size: 1.1rem;
      font-weight: bold;
    }
    p {
      margin: 0;
      font-size: 14px;
    }
  }
`;

export default MostViewPost;
