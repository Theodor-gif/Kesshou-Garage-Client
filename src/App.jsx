import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import ModelPage from "./pages/Model.jsx";
import PartsPage from "./pages/Parts.jsx";
import CartPage from "./pages/Cart.jsx";
import FavoritePage from "./pages/Favorites.jsx";
import RegisterLoginPage from "./pages/RegisterLogin.jsx";
import PartsDetail from "./pages/PartsDetail.jsx";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/models/:id" element={<ModelPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/parts" element={<PartsPage />}></Route>
        <Route path="/account" element={<RegisterLoginPage />}></Route>
        <Route path="/favorite" element={<FavoritePage />}></Route>
        <Route path="/partsdetail" element={<PartsDetail />}></Route>
      </Routes>
    </main>
  );
}

export default App;
