import React from 'react';
import styled from 'styled-components';


const MenuItems = [
  {"title":"Home","param":"/"},  {"title":"Register","param":"/register"}, 
  {"title":"Login","param":"/login"}, {"title":"Upload","param":"/upload"},
  {"title":"입양후기","param":"/review"}, {"title":"공지사항","param":"/notice"}
]

function NavBar() {
  return (
    <NavBarContainer >
      {
        MenuItems.map((item,index)=>{
          return(
            <a href={item.param}> <NavBarItem> {item.title}</NavBarItem></a>    
          )
        })
      }
       
       
    </NavBarContainer>
  )
}

    const NavBarContainer = styled.div`
    padding:10px;
    width:100%;
    height:40px;
    display:flex;
    justify-content:space-around;
    border-bottom:1px solid black;
    a{
      text-decoration:none;
      color:black;
    }
    

    `
    const NavBarItem =styled.div`

      width:100px;
      height:40px;
    `

export default NavBar