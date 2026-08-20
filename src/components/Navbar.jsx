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
import { useState, useContext } from "react";
import { contextData } from "../context/ContextApi.jsx";

function NavBar() {
  const [popUp, setPopUp] = useState(false);
  const { userName, logoutUser, cart } = useContext(contextData);
  const [menu, setMenu] = useState(false);

  const cartItemCount =
    cart?.items?.reduce((sum, item) => sum + item.quantity, 0) || 0;

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
        <Link to="/partsdetail" className={style.navAbout}>
          ABOUT US
        </Link>
        <button onClick={logoutUser} className={style.navLogOut}>
          LOG OUT
        </button>
      </section>
      {popUp && <NavbarPopup />}
      {menu && (
        <section className={style.pop2Main}>
          <Link className={style.pop2Item} to="/">
            HOME
          </Link>
          <Link className={style.pop2Item} to="/parts">
            PARTS
          </Link>
          <Link className={style.pop2Item} to="/partsdetail">
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
