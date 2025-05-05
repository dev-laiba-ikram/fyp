import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import SignUp from "../Signup/SignUp";
import "./AuthPage.css";

const AuthPage = ({ isLogin: initialLogin, closeAuth }) => {
  const [isLogin, setIsLogin] = useState(initialLogin);

  useEffect(() => {
    setIsLogin(initialLogin);
  }, [initialLogin]);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="auth-container">
      {isLogin ? (
        <Login toggleMode={toggleMode} closeAuth={closeAuth} />
      ) : (
        <SignUp toggleMode={toggleMode} closeAuth={closeAuth} />
      )}
    </div>
  );
};

export default AuthPage;
