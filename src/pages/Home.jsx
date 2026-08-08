import NavBar from "../components/Navbar.jsx";
import Hero from "../components/HomeHero.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { contextData } from "../context/ContextApi.jsx";
import { Link } from "react-router-dom";
import style from "../css/home.module.css";
import arrow from "../assets/arrow-18-512.png";

function Home() {
  const { cars } = useContext(contextData);

  if (!cars || cars.length < 5) {
    return <h1>Loading...</h1>;
  }

  const brandFour = cars[3].brand;
  const modelFour = cars[3].model;
  const tagLineFour = cars[3].tagline;
  const descriptionFour = cars[3].description;
  const bgFour = cars[3].photos[0].url;
  const imgOne = cars[3].photos[3].url;
  const imgTwo = cars[3].photos[2].url;
  const imgThree = cars[3].photos[5].url;

  const brandFive = cars[4].brand;
  const modelFive = cars[4].model;
  const tagLineFive = cars[4].tagline;
  const descriptionFive = cars[4].description;
  const bgFive = cars[4].photos[1].url;
  const imgFour = cars[4].photos[3].url;
  const imgFive = cars[4].photos[7].url;
  const imgSix = cars[4].photos[5].url;

  return (
    <>
      <NavBar />
      <Hero />
      <section className={style.homeContainerOne}>
        <div className={style.homeContSmall}>
          <h2 className={style.homeTagLine}>{tagLineFour}</h2>
        </div>
        <div className={style.homeContSmallTwo}>
          <p className={style.homeDescription}>{descriptionFour}</p>
          <Link className={style.homeContBtn}>DISCOVER</Link>
        </div>
      </section>
      <section className={style.homeContainerTwo}>
        <div className={style.homeContainerImg}>
          <img src={imgOne} width="350" />
          <img src={imgTwo} width="350" />
          <img src={imgThree} width="350" />
        </div>
      </section>
      <section
        className={style.homeContainerThree}
        style={{
          backgroundImage: `url(${bgFour})`,
        }}
      >
        <div className={style.homeDetails}>
          <h2 className={style.homeDeBrand}>{brandFour}</h2>
          <h2 className={style.homeDeModel}>{modelFour}</h2>
          <div className={style.homeArrow}>
            <Link className={style.homeDeBtn}>DISCOVER</Link>
            <img src={arrow} height="30" width="150" />
          </div>
        </div>
      </section>
      <section
        className={style.homeContainerThree}
        style={{ backgroundImage: `url(${bgFive})` }}
      >
        <div className={style.homeDetails}>
          <h2 className={style.homeDeBrand}>{brandFive}</h2>
          <h2 className={style.homeDeModel}>{modelFive}</h2>
          <div className={style.homeArrow}>
            <Link className={style.homeDeBtn}>DISCOVER</Link>
            <img src={arrow} height="30" width="150" />
          </div>
        </div>
      </section>
      <section className={style.homeContainerTwo}>
        <div className={style.homeContainerImg}>
          <img src={imgFour} width="350" />
          <img src={imgFive} width="350" />
          <img src={imgSix} width="350" />
        </div>
      </section>
      <section className={style.homeContainerOne}>
        <div className={style.homeContSmall}>
          <h2 className={style.homeTagLine}>{tagLineFive}</h2>
        </div>
        <div className={style.homeContSmallTwo}>
          <p className={style.homeDescription}>{descriptionFive}</p>
          <Link className={style.homeContBtn}>DISCOVER</Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
