import { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

// 📦 Re-exported so your existing files can read it without changing a single line!
export const contextData = createContext();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

function ContextProvider({ children }) {
  const [registration, setRegistration] = useState(true);
  const [login, setLogin] = useState(false);
  const [cars, setCars] = useState([]);
  const [parts, setParts] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const [emailLog, setEmailLog] = useState("");
  const [passwordLog, setPasswordLog] = useState("");
  const [cart, setCart] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [text, setText] = useState("");
  const [comments, setComments] = useState([]);

  function registrationHandle() {
    setRegistration(false);
    setLogin(true);
  }

  function loginHandle() {
    setRegistration(true);
    setLogin(false);
  }

  async function registerUser(e) {
    e.preventDefault();
    try {
      setError("");
      const response = await api.post("/user/register", {
        firstname,
        surname,
        email,
        password,
      });
      console.log(response.data);

      registrationHandle();
    } catch (error) {
      setError(error.response?.data?.message || "Something went wrong");
    }
  }

  async function logUser(e) {
    e.preventDefault();
    try {
      const response = await api.post("/user/login", {
        email: emailLog,
        password: passwordLog,
      });
      localStorage.setItem("token", response.data.token);
      setUserName(response.data.user.firstname.slice(0, 2).toUpperCase());
      setEmailLog("");
      setPasswordLog("");
      getCart();
      navigate("/");
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

  async function addToCart(partId, quantity) {
    try {
      const currentToken = localStorage.getItem("token");
      const response = await api.post(
        "/cart/add",
        {
          product: {
            product: partId,
            quantity: quantity,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        },
      );
      console.log(response.data);
      setCart(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  }

  async function getCart() {
    try {
      const currentToken = localStorage.getItem("token");
      if (!currentToken) return;
      const response = await api.get("/cart", {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });

      setCart(response.data);
    } catch (error) {
      console.log(error);
      setCart(null);
    }
  }

  function logoutUser() {
    localStorage.removeItem("token");
    setCart(null);
    setUserName("");
    navigate("/");
  }

  const commentEach = useCallback(async (partId) => {
    try {
      const response = await api.get(`/comment/parts/${partId}/comments`);
      setComments(response.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function deleteCartItem(id) {
    try {
      const currentToken = localStorage.getItem("token");
      const response = await api.delete(`/cart/${id}`, {
        headers: {
          Authorization: `Bearer ${currentToken}`,
        },
      });

      setCart(response.data.cart);
    } catch (error) {
      console.log(error);
    }
  }

  async function reviewSend(e, partId) {
    e.preventDefault();
    try {
      const currentToken = localStorage.getItem("token");

      // 1. Submit the new comment to the backend
      await api.post(
        `/comment/parts/${partId}/comments`,
        { text },
        {
          headers: {
            Authorization: `Bearer ${currentToken}`,
          },
        },
      );

      // 2. Fetch the updated array from the server immediately
      await commentEach(partId);

      // 3. Clear the input text box
      setText("");
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    const savedToken = localStorage.getItem("token");

    if (savedToken) {
      try {
        const decoded = jwtDecode(savedToken);
        const isExpired = decoded.exp * 1000 < Date.now();

        if (isExpired) {
          localStorage.removeItem("token");
        } else {
          setUserName(decoded.firstname.slice(0, 2).toUpperCase());
          getCart();
        }
      } catch (error) {
        console.log(error);
        localStorage.removeItem("token");
      }
    }

    getCars();
    getParts();
  }, []);

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
        error,
        userName,
        emailLog,
        setEmailLog,
        passwordLog,
        setPasswordLog,
        logUser,
        addToCart,
        cart,
        getCart,
        logoutUser,
        deleteCartItem,
        text,
        setText,
        reviewSend,
        commentEach,
        comments,
      }}
    >
      {children}
    </contextData.Provider>
  );
}

// 🛠️ THE CRITICAL COMPLIANCE FIX:
// Naming the component clearly before exporting tells Vite exactly how to track it.
export default ContextProvider;
