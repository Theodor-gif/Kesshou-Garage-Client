import style from "../css/navbarPopup.module.css";
import { useContext } from "react";
import { contextData } from "../context/ContextApi";
import { Link } from "react-router-dom";

function NavbarPopup() {
  const { cars, setPopUp } = useContext(contextData);

  if (!cars || cars.length === 0) {
    return <h1>Loading ...</h1>;
  }

  return (
    <div className={style.navbarPopUp}>
      {cars.map((car) => (
        <Link
          key={car._id}
          className={style.navbarPopLink}
          to={`/models/${car._id}`}
          onClick={() => setPopUp((prev) => !prev)}
        >
          <img src={car.photos[0].url} alt="" width="75px" />
          <div className={style.navbarPopDetail}>
            <p>{car.brand}</p>
            <p>{car.model}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default NavbarPopup;
