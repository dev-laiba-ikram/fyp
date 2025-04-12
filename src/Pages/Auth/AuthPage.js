import React, { useState } from "react";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import "./AuthPage.css";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login toggleMode={toggleMode} />
      ) : (
        <SignUp toggleMode={toggleMode} />
      )}
    </div>
  );
};

export default AuthPage;
