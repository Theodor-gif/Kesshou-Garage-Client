import { useState } from "react";
import Registration from "../components/Registration.jsx";
import Login from "../components/LogIn.jsx";
import { useContext } from "react";
import { contextData } from "../context/ContextApi.jsx";

function RegisterLogin() {
  const { registration, login } = useContext(contextData);
  return (
    <section>
      {registration && <Registration />}
      {login && <Login />}
    </section>
  );
}

export default RegisterLogin;
