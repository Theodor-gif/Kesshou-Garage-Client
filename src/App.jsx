import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home.jsx";
import ModelPage from "./pages/Model.jsx";
import PartsPage from "./pages/Parts.jsx";
import CartPage from "./pages/Cart.jsx";
import FavoritePage from "./pages/Favorites.jsx";
import RegisterLoginPage from "./pages/RegisterLogin.jsx";
import PartsDetail from "./pages/PartsDetail.jsx";
import ScrollToTop from "../src/components/ScrollToTop.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import style from "./css/app.module.css";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

function App() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setShowArrow(window.scrollY > 300);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main style={{ position: "relative" }}>
      {showArrow && (
        <ArrowCircleUpIcon
          className={style.scrollTopArrow}
          onClick={scrollToTop}
          sx={{
            color: "#00e5ff",
            fontSize: 50,
          }}
        />
      )}
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/models/:id" element={<ModelPage />}></Route>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/parts" element={<PartsPage />}></Route>
        <Route path="/account" element={<RegisterLoginPage />}></Route>
        <Route path="/favorite" element={<FavoritePage />}></Route>
        <Route path="/partsdetail/:id" element={<PartsDetail />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </main>
  );
}

export default App;
