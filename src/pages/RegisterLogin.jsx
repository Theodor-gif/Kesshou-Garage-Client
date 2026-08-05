import { useState } from "react";
import Registration from "../components/Registration.jsx";
import Login from "../components/LogIn.jsx";
import { useContext } from "react";
import { contextData } from "../context/ContextApi.jsx";
import style from "../css/registerlogin.module.css";
import logo from "../assets/kessho-icon.png";

function RegisterLogin() {
  const { registration, login } = useContext(contextData);
  return (
    <section className={style.registerloginBg}>
      <img className={style.registerloginLogo} src={logo} alt="logo" />
      {registration && <Registration />}
      {login && <Login />}
    </section>
  );
}

export default RegisterLogin;
