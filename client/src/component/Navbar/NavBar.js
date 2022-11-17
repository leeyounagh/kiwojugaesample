import React from "react";
import styled from "styled-components";
import { SiDatadog } from "react-icons/si";

const MenuItems = [
  { title: "Register", param: "/register" },
  { title: "Login", param: "/login" },
  { title: "입양게시판", param: "/community" },
  { title: "공지사항", param: "/notice" },
  { title: "MyPage", param: "/mypage" },
];

function NavBar() {
  return (
    <NavBarContainer>
      <a href="/">
        <NavbarHomeIconDiv>
          <SiDatadog size={33} /> 키워주개
        </NavbarHomeIconDiv>
      </a>
      {MenuItems.map((item, index) => {
        return (
          <a href={item.param}>
            <NavBarItem> {item.title}</NavBarItem>
          </a>
        );
      })}
    </NavBarContainer>
  );
}

const NavBarContainer = styled.div`
  padding: 10px;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid lightgray;
  background-color: #fff;
  a {
    color: black;
    text-decoration: none;
  }
`;
const NavbarHomeIconDiv = styled.div`
  font-family: "PyeongChangPeace-Bold";
  font-size: 1.7rem;
`;
const NavBarItem = styled.div`
  width: 100px;
  height: 40px;
  font-family: "GangwonEduPowerExtraBoldA";
  font-size: 1.2rem;
  padding-top: 1vh;
`;

export default NavBar;
