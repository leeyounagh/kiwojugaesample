import React from 'react';
import styled from 'styled-components';

const SearchPet = () => {
    return (
        <div>
            <SearchPetContents>
            <h2>입양하고싶어요</h2>
            </SearchPetContents>
           <SearchPetContents>
           게시판으로! 아래느낌으로 하면 좋을것 같습니다.
           </SearchPetContents>
              <SearchPetContents>
              <img src='게시판.png'></img>
              </SearchPetContents>
             
            
        

        </div>
    );
};

const SearchPetContents =styled.div`
display:flex;
justify-content:center;
margin-bottom:50px;
`

export default SearchPet;