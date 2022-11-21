import React from "react";

const Google = () => {
  const CLIENT_ID=process.env.REACT_APP_GOOGLE_CLIENT_ID;
  const REDIRECT_URI=process.env.REACT_APP_GOOGLE_REDIRECT_URI;
  const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?redirect_uri=${REDIRECT_URI}&response_type=token%20id_token&scope=email%20profile%20openid&openid.realm&include_granted_scopes=true&client_id=${CLIENT_ID}&prompt=login`;
  return (
    <>
      <a href={GOOGLE_AUTH_URL}>
        <img src="구글버튼.png" className="google_btn" alt="구글"></img>
      </a>
    </>
  );
};

export default Google;