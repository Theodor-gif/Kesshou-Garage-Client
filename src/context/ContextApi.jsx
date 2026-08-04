import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const contextData = createContext();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default function ContextProvider({ children }) {
  const [registration, setRegistration] = useState(true);
  const [login, setLogin] = useState(false);

  function registrationHandle() {
    setRegistration(false);
    setLogin(true);
  }

  function loginHandle() {
    setRegistration(true);
    setLogin(false);
  }
  return (
    <contextData.Provider
      value={{
        registration,
        setRegistration,
        login,
        setLogin,
        registrationHandle,
        loginHandle,
      }}
    >
      {children}
    </contextData.Provider>
  );
}
