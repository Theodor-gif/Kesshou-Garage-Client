import logo from "../../public/images/logo/kessho-icon.png";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge from "@mui/material/Badge";
import MailIcon from "@mui/icons-material/Mail";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import style from "../../public/css/navbar.module.css";

function NavBar() {
  return (
    <nav className={style.navbar}>
      <div className={style.intro}>
        <section className={style.nav1}>
          <img className={style.logo} src={logo} />
        </section>
        <section className={style.nav2}>
          <SearchIcon />
          <Badge badgeContent={2} color="primary">
            <FavoriteIcon />
          </Badge>
          <Avatar src="/broken-image.jpg" alt=""></Avatar>
          <Badge badgeContent={2} color="primary">
            <ShoppingCartIcon />
          </Badge>
        </section>
      </div>
      <section className={style.nav3}>
        <a className={style.navHome} href="" target="_self">
          HOME
        </a>
        <a className={style.navModels} href="" target="_self">
          MODELS
        </a>
        <a className={style.navParts} href="" target="_self">
          PARTS
        </a>
        <a className={style.navAbout} href="" target="_self">
          ABOUT
        </a>
      </section>
    </nav>
  );
}

export default NavBar;
