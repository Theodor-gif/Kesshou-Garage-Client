import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useEffect } from "react";
import { contextData } from "../context/ContextApi.jsx";

function Favorites() {
  const { parts, fav } = useContext(contextData);

  return (
    <>
      <NavBar />
      {fav.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        fav.map((element) => (
          <div key={element._id}>
            <h1>{element.brand}</h1>
          </div>
        ))
      )}
      <Footer />
    </>
  );
}

export default Favorites;
