import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const contextData = createContext();

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export default function ContextProvider({ children }) {
  return <contextData.Provider value={{}}>{children}</contextData.Provider>;
}
