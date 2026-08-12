import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const contextData = createContext();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default function ContextProvider({ children }) {
  const [registration, setRegistration] = useState(true);
  const [login, setLogin] = useState(false);
  const [cars, setCars] = useState([]);
  const [parts, setParts] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let data;

  function registrationHandle() {
    setRegistration(false);
    setLogin(true);
  }

  function loginHandle() {
    setRegistration(true);
    setLogin(false);
  }

  async function registerUser() {
    try {
      const response = await api.post("/user/register", {
        firstname,
        surname,
        email,
        password,
      });
      console.log(response.data);
      registrationHandle();
    } catch (error) {
      console.log(error);
    }
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
        firstname,
        setFirstname,
        surname,
        setSurname,
        email,
        setEmail,
        password,
        setPassword,
        registerUser,
      }}
    >
      {children}
    </contextData.Provider>
  );
}
