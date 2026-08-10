import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const contextData = createContext();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default function ContextProvider({ children }) {
  const [registration, setRegistration] = useState(true);
  const [login, setLogin] = useState(false);
  const [cars, setCars] = useState([]);
  const [parts, setParts] = useState([]);

  let data;

  function registrationHandle() {
    setRegistration(false);
    setLogin(true);
  }

  function loginHandle() {
    setRegistration(true);
    setLogin(false);
  }

  async function getCars() {
    try {
      const response = await api.get("/cars");
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getParts() {
    try {
      const response = await api.get("/products");
      setParts(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // setCars((prev) => [...prev, response.data])

  useEffect(() => {
    getCars();
    getParts();
  }, []);

  console.log(cars);
  console.log(parts);
  return (
    <contextData.Provider
      value={{
        registration,
        setRegistration,
        login,
        setLogin,
        registrationHandle,
        loginHandle,
        cars,
        parts,
      }}
    >
      {children}
    </contextData.Provider>
  );
}
