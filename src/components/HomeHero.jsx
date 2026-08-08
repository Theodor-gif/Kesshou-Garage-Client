import { useContext, useState, useEffect } from "react";
import { contextData } from "../context/ContextApi";
import { Link } from "react-router-dom";
import style from "../css/homehero.module.css";
import arrow from "../assets/arrow-18-512.png";

function HomeHero() {
  const { cars } = useContext(contextData);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    if (!cars || cars.length < 3) return;

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
        setFade(true);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [cars]);

  if (!cars || cars.length < 3) {
    return <h1>Loading...</h1>;
  }

  const car = cars[currentIndex];

  return (
    <div
      className={style.homeHero}
      style={{
        backgroundImage: `url(${car.photos[0].url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "40vh",
        transition: "background-image 1s ease-in-out",
      }}
    >
      <div className={style.heroPartOne}>
        <h2 className={style.heroTag}>{car.tagline}</h2>
        <h2 className={style.heroBrand}>{car.brand}</h2>
        <h1 className={style.heroModel}>{car.model}</h1>
        <div className={style.heroContainerPath}>
          <Link className={style.heroArrowTitle} to={`/models/${car._id}`}>
            DISCOVER
          </Link>
          <img src={arrow} height="30" width="150" />
        </div>
      </div>
      <div className={style.heroPartTwo}>
        <ul className={style.heroList}>
          <li className={style.heroItem}>
            <Link className={style.heroPath} to={`/models/${cars[0]._id}`}>
              1
              <img
                className={style.heroHoverImg}
                src={cars[0].photos[0].url}
                alt=""
              />
            </Link>
          </li>
          <li className={style.heroItem}>
            <Link className={style.heroPath} to={`/models/${cars[1]._id}`}>
              2
              <img
                className={style.heroHoverImg}
                src={cars[1].photos[0].url}
                alt=""
              />
            </Link>
          </li>
          <li className={style.heroItem}>
            <Link className={style.heroPath} to={`/models/${cars[2]._id}`}>
              3
              <img
                className={style.heroHoverImg}
                src={cars[2].photos[0].url}
                alt=""
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default HomeHero;
