import logo from "../assets/kessho-icon.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import style from "../css/navbar.module.css";
import { Link } from "react-router-dom";
import NavbarPopup from "../components/NavbarPopup.jsx";
import { useState } from "react";

function NavBar() {
  const [popUp, setPopUp] = useState(false);

  return (
    <nav className={style.navbar}>
      <div className={style.intro}>
        <section className={style.nav1}>
          <img className={style.logo} src={logo} alt="logo" />
        </section>
        <section className={style.nav2}>
          <SearchIcon
            className={style.SearchIcon}
            sx={{ fontSize: 30, color: "#b8b8b8" }}
          />
          <Link className={style.navRoute} to="/favorite">
            <Badge badgeContent={2} color="primary">
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
              TM
            </Avatar>
          </Link>
          <Link className={style.navRoute} to="/cart">
            <Badge badgeContent={2} color="primary">
              <ShoppingCartIcon
                className={style.CartIcon}
                sx={{ fontSize: 30, color: "#b8b8b8" }}
              />
            </Badge>
          </Link>
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
        <Link to="/partsdetail" className={style.navAbout}>
          ABOUT
        </Link>
      </section>
      {popUp && <NavbarPopup />}
    </nav>
  );
}

export default NavBar;
