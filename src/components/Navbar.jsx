import logo from "../assets/kessho-icon.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuIcon from "@mui/icons-material/Menu";
import style from "../css/navbar.module.css";
import { Link } from "react-router-dom";
import NavbarPopup from "../components/NavbarPopup.jsx";
import { useState, useContext, useEffect } from "react";
import { contextData } from "../context/ContextApi.jsx";
import { motion } from "motion/react";

function NavBar() {
  const {
    userName,
    logoutUser,
    cart,
    fav,
    menu,
    setMenu,
    setPopUp,
    popUp,
    parts,
  } = useContext(contextData);

  const [input, setInput] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState("");
  const [filtered, setFiltered] = useState([]);

  const cartItemCount =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  function inputOpen() {
    setInput((prev) => !prev);
    setFiltered([]); // clear stale results when toggling
  }

  function getSearch(e) {
    const item = e.target.value;
    setSearch(item);

    if (item.trim() === "") {
      setFiltered([]); // don't show everything when input is empty
      return;
    }

    const newfilter = parts.filter((elements) =>
      elements.categoryName
        .toLowerCase()
        .trim()
        .includes(item.toLowerCase().trim()),
    );

    setFiltered(newfilter);
  }

  return (
    <nav className={style.navbar}>
      <div className={style.intro}>
        <section className={style.nav1}>
          <img className={style.logo} src={logo} alt="logo" />
        </section>
        <section className={style.nav2}>
          {input && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ amount: "all", once: true }}
              transition={{ duration: 1 }}
              className={style.homeInputContainer}
            >
              <label htmlFor="search"></label>
              <input
                className={style.homeInput}
                id="search"
                type="text"
                name="search"
                value={search}
                onChange={(e) => getSearch(e)}
              />
            </motion.div>
          )}
          {filtered.length > 0 && (
            <div className={style.navAp}>
              {filtered.map((item) => (
                <Link
                  key={item._id}
                  to={`/partsdetail/${item._id}`}
                  className={style.searchResultItem}
                  onClick={() => {
                    setFiltered([]);
                    setSearch("");
                    setInput((prev) => !prev);
                  }}
                >
                  <div className={style.searchDiv}>
                    <img className={style.seaarchImg} src={item.image} alt="" />
                    <p>{item.name}</p>
                    <p>{item.price} &euro;</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
          <SearchIcon
            onClick={() => inputOpen()}
            className={style.SearchIcon}
            sx={{ fontSize: 30, color: "#b8b8b8" }}
          />
          <Link className={style.navRoute} to="/favorite">
            <Badge badgeContent={fav.length} color="primary">
              <FavoriteIcon
                className={style.FavoriteIcon}
                sx={{ fontSize: 30, color: "#b8b8b8" }}
              />
            </Badge>
          </Link>
          <Link className={style.navRoute} to="/account">
            <Avatar
              className={style.AvatarIcon}
              src="/broken-image.jpg"
              alt=""
              sx={{
                width: 30,
                height: 30,
                fontSize: 13,
                bgcolor: "#b8b8b8",
              }}
            >
              {userName}
            </Avatar>
          </Link>
          <Link className={style.navRoute} to="/cart">
            <Badge badgeContent={cartItemCount} color="primary">
              <ShoppingCartIcon
                className={style.CartIcon}
                sx={{ fontSize: 30, color: "#b8b8b8" }}
              />
            </Badge>
          </Link>
          <MenuIcon
            className={style.BurgerIcon}
            sx={{ fontSize: 30, color: "#b8b8b8" }}
            onClick={() => setMenu((prev) => !prev)}
          ></MenuIcon>
        </section>
      </div>
      <section className={style.nav3}>
        <Link to="/" className={style.navHome}>
          HOME
        </Link>
        <button
          type="button"
          onClick={() => setPopUp((prev) => !prev)}
          className={style.navModels}
        >
          MODELS
        </button>
        <Link to="/parts" className={style.navParts}>
          PARTS
        </Link>
        <Link to="/about" className={style.navAbout}>
          ABOUT US
        </Link>
        <button onClick={logoutUser} className={style.navLogOut}>
          LOG OUT
        </button>
      </section>
      {popUp && <NavbarPopup />}
      {menu && (
        <section className={style.pop2Main}>
          <Link
            className={style.pop2Item}
            to="/"
            onClick={() => setMenu((prev) => !prev)}
          >
            HOME
          </Link>
          <Link
            className={style.pop2Item}
            to="/parts"
            onClick={() => setMenu((prev) => !prev)}
          >
            PARTS
          </Link>
          <Link
            className={style.pop2Item}
            to="/about"
            onClick={() => setMenu((prev) => !prev)}
          >
            ABOUT US
          </Link>
          <button className={style.pop2Item} onClick={logoutUser}>
            LOG OUT
          </button>
        </section>
      )}
    </nav>
  );
}

export default NavBar;
