import React from "react";

const Naver = () => {
  const CLIENT_ID = process.env.REACT_APP_NAVER_CLIENT_ID;
  const REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URI;
  const Naver_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${CLIENT_ID}&state=STATE_STRING&redirect_url=${REDIRECT_URI}`;
  return (
    <>
      <a href={Naver_AUTH_URL}>
        <img src="네이버버튼.png" className="naver_btn" alt="네이버"></img>
      </a>
    </>
  );
};

export default Naver;
