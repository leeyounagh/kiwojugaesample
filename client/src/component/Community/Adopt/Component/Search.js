import React from "react";
import styled from "styled-components";
import { ImSearch } from "react-icons/im";
import { FaPen } from "react-icons/fa";
import SearchResults from "./SearchResults";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <>
      <SearchDiv>
        <InputDiv>
          <Input />
          <ImSearch />
        </InputDiv>
        <WritingBtn>
          <Link to="/community/adopt/Writing">
            글쓰기
            <FaPen />
          </Link>
        </WritingBtn>
      </SearchDiv>
      <SearchResults />
    </>
  );
};

const SearchDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputDiv = styled.div`
  position: relative;
  width: 60%;
  svg {
    position: absolute;
    top: 8px;
    right: 0;
    width: 35px;
    height: 70%;
  }
`;
const Input = styled.input`
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 1.1rem;
  outline: none;
`;

const WritingBtn = styled.button`
  width: 100px;
  height: 40px;
  background-color: #e49700;
  border: none;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  a{
    color: white;
    text-decoration: none;
  }
  svg {
    margin-left: 5px;
    color: green;
  }
`;

export default Search;
