import logo from "../assets/kessho-icon-with-kanji.png";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import style from "../css/footer.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { contextData } from "../context/ContextApi";

function Footer() {
  const { cars } = useContext(contextData);

  if (!cars || cars.length < 5) {
    return null; // or a lightweight fallback footer
  }

  const carOne = cars[0]._id;
  const carTwo = cars[1]._id;
  const carTree = cars[2]._id;
  const carFour = cars[3]._id;
  const carFive = cars[4]._id;

  return (
    <footer className={style.footermain}>
      <div className={style.footerMainContainer}>
        <div className={style.footercontainer1}>
          <div className={style.footer1}>
            <h2 className={style.footerTitle}>MODELS</h2>
            <ul className={style.footerList}>
              {cars.slice(0, 5).map((car) => (
                <li className={style.footerItem} key={car._id}>
                  <Link className={style.footerLink} to={`/models/${car._id}`}>
                    {car.brand} {car.model}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={style.footer2}>
            <h2 className={style.footerTitle}>NAVIGATION</h2>
            <ul className={style.footerList}>
              <Link to="/" className={style.footerLink}>
                <li className={style.footerItem}>Home</li>
              </Link>
              <Link to="/favorite" className={style.footerLink}>
                <li className={style.footerItem}>My list</li>
              </Link>
              <Link to="/account" className={style.footerLink}>
                <li className={style.footerItem}>Account</li>
              </Link>
              <Link to="/cart" className={style.footerLink}>
                <li className={style.footerItem}>Shopping cart</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className={style.footerSmall}>
          <img
            className={style.footerLogo2}
            src={logo}
            alt="Logo"
            width="100"
          />
          <div className={style.footerCopy}>
            <small className={style.footerRight}>COOKIE POLICY</small>
            <small className={style.footerRight}>GENDER GAP REPORT</small>
            <small className={style.footerRight}>PRIVACY POLICY</small>
            <small className={style.footerRight}>TERMS AND CONDITIONS</small>
            <small className={style.footerRight}>
              MODERN SLAVERY STATEMENT
            </small>
          </div>
        </div>
      </div>
      <div className={style.footercontainer2}>
        <div>
          <h2 className={style.footerTitle}>CONTACT</h2>
          <ul className={style.footerList}>
            <Link to="/about">
              <li className={style.footerItem}>About us</li>
            </Link>
            <li className={style.footerItem}>Working at Kessho Garage</li>
            <li className={style.footerItem}>Kessho Garage Group</li>
          </ul>
        </div>
        <div className={style.footerSocial}>
          <h2 className={style.footerTitle}>KESSHO SOCIAL</h2>
          <ul className={style.footerListSocial}>
            <li>
              <FacebookIcon
                sx={{
                  width: 30,
                  height: 30,
                  color: "white",
                }}
              />
            </li>
            <li>
              <YouTubeIcon
                sx={{
                  width: 30,
                  height: 30,
                  color: "white",
                }}
              />
            </li>
            <li>
              <XIcon
                sx={{
                  width: 30,
                  height: 30,
                  color: "white",
                }}
              />
            </li>
            <li>
              <InstagramIcon
                sx={{
                  width: 30,
                  height: 30,
                  color: "white",
                }}
              />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
