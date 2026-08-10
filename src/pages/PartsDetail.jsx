import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { contextData } from "../context/ContextApi.jsx";

function PartsDetail() {
  const { parts } = useContext(contextData);

  return (
    <>
      <NavBar />
      <section></section>
      <Footer />
    </>
  );
}

export default PartsDetail;
