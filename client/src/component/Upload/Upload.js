import React from "react";
import styled from "styled-components";

const Upload = () => {
  return (
    <UploadContainer>
      <UploadContentsContainer>
        <h2>분양 등록</h2>
      </UploadContentsContainer>
      <UploadContentsContainer>
        <UploadTitle placeholder="제목을 입력하세요" />
      </UploadContentsContainer>
      <UploadContentsContainer>
        <TextArea placeholder="내용을 적으세요"></TextArea>
      </UploadContentsContainer>
      <UploadContentsContainer>
        <button>업로드</button>
      </UploadContentsContainer>
    </UploadContainer>
  );
};

const UploadContainer = styled.div``;
const UploadContentsContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;
const UploadTitle = styled.input`
  width: 40vw;
  height: 5vh;
`;

const TextArea = styled.textarea`
  width: 40vw;
  height: 40vh;
`;

export default Upload;
