import React from "react";

const Kakao = () => {
  const CLIENT_ID = process.env.REACT_APP_KAKAO_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&prompt=login&response_type=code`;
  return (
    <>
      <a href={KAKAO_AUTH_URL}>
        <img src="카카오버튼.png" className="kakao_btn" alt="카카오"/>
      </a>
    </>
  );
};

export default Kakao;
