// import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { ROUTE_CONFIG } from "../../constant/Constant";
import { useCallback, useEffect } from "react";
import { getSessionData } from "../../Helper/authHelper";
import AuthView from "./AuthView";

const AuthContainer = () => {
  const navigate = useNavigate();

  const onFinishLogIn = useCallback(
    (values) => {
      if (values?.email === "admin123@gmail.com" && values?.password === "123") {
        localStorage.setItem("authCredentials", JSON.stringify(values?.email));
        localStorage.setItem("token", true);
        navigate(ROUTE_CONFIG?.DASHBOARD);
      }
    },
    [navigate]
  );

  useEffect(() => {
    const isTokenSet = JSON.parse(localStorage.getItem("token"));
    if (isTokenSet) {
      navigate(-1);
    } else {
      navigate(ROUTE_CONFIG?.LOGIN);
    }
  });

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  if (getSessionData()) {
    <Navigate to="/" />;
    // navigate(-1)
  }

  return <AuthView {...{ onFinishLogIn, onFinishFailed }} />;
};

export default AuthContainer;
