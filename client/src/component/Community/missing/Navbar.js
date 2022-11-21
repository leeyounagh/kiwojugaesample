import React from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  return (
    <Nav>
      <Navbardiv>
        <Link
          to="/community/missing"
          className={location.pathname === "/community/missing" ? "active" : ""}
        >
          전체
        </Link>
        <NavLink to="/community/missing/find" activeclassname="active">
          찾아요
        </NavLink>
        <NavLink to="/community/missing/sighting" activeclassname="active">
          목격했어요
        </NavLink>
        <NavLink to="/community/missing/protect" activeclassname="active">
          보호중이에요
        </NavLink>
        <NavLink to="/community/missing/review" activeclassname="active">
          후기
        </NavLink>
      </Navbardiv>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
`;
const Navbardiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 1440px;
  background: rgba(78, 155, 0, 0.61);
  box-shadow: inset 0px 25px 24px -32px rgba(0, 0, 0, 0.75);
  a {
    padding: 15px 10px;
    font-size: 1.1rem;
    color: white;
    text-decoration: none;
    &:hover {
      font-weight: bold;
      color: yellow;
    }
  }
  .active {
    font-weight: bold;
    color: yellow;
  }
`;

export default Navbar;
