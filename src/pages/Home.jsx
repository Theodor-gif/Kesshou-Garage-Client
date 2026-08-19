import NavBar from "../components/Navbar.jsx";
import Hero from "../components/HomeHero.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useState } from "react";
import { contextData } from "../context/ContextApi.jsx";
import { Link } from "react-router-dom";
import style from "../css/home.module.css";
import arrow from "../assets/arrow-18-512.png";
import BcImage from "../assets/brands/Bc-image.png";
import BremboImage from "../assets/brands/Brembo-image.png";
import EnkeiImage from "../assets/brands/Enkei-image.png";
import MorimotoImage from "../assets/brands/Morimoto-image.png";
import RaysImage from "../assets/brands/Rays-image.png";
import TeinImage from "../assets/brands/Tein-image.png";
import WhitelineImage from "../assets/brands/Whiteline-image.png";
import WilwoodImage from "../assets/brands/Wilwood-image.png";
import BrakingImage from "../assets/Category-images/Braking-image.png";
import ClutchImage from "../assets/Category-images/Clutch-image.png";
import CoiloversImage from "../assets/Category-images/Coilovers-image.png";
import LightingImage from "../assets/Category-images/Lighting-image.png";
import SteeringImage from "../assets/Category-images/Steering-image.png";
import WheelImage from "../assets/Category-images/Wheel-image.png";
import Logo from "../assets/kessho-icon.png";

function Home() {
  const { cars } = useContext(contextData);

  const [brands, setBrands] = useState([
    BcImage,
    BremboImage,
    EnkeiImage,
    MorimotoImage,
    RaysImage,
    TeinImage,
    WhitelineImage,
    WilwoodImage,
  ]);

  const [categoryIcons, setCategoryIcons] = useState([
    BrakingImage,
    ClutchImage,
    CoiloversImage,
    LightingImage,
    SteeringImage,
    WheelImage,
  ]);

  const categoryNames = [
    "BRAKING SYSTEM",
    "CLUTCH",
    "COILOVERS",
    "LIGHTS",
    "STEERING",
    "WHEELS",
  ];

  if (!cars || cars.length < 5) {
    return <h1>Loading...</h1>;
  }

  const brandFour = cars[3].brand;
  const modelFour = cars[3].model;
  const idFour = cars[3]._id;
  const tagLineFour = cars[3].tagline;
  const descriptionFour = cars[3].description;
  const bgFour = cars[3].photos[0].url;
  const imgOne = cars[3].photos[3].url;
  const imgTwo = cars[3].photos[2].url;
  const imgThree = cars[3].photos[5].url;

  const brandFive = cars[4].brand;
  const modelFive = cars[4].model;
  const idFive = cars[4]._id;
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
          <Link to={`/models/${idFour}`} className={style.homeContBtn}>
            DISCOVER
          </Link>
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
            <Link to={`/models/${idFour}`} className={style.homeDeBtn}>
              DISCOVER
            </Link>
            <img
              className={style.homeArrow2}
              src={arrow}
              height="30"
              width="150"
            />
          </div>
        </div>
      </section>
      <section className={style.homeCategorySection}>
        <div className={style.homeBgTitle}>
          <div className={style.homeSectionPart}>
            <img className={style.homeSectionLogo} src={Logo} />
            <h2 className={style.homeSectionTitle}>SHOP BY CATEGORY</h2>
          </div>
        </div>
        <div className={style.homeCategoryFigure}>
          {categoryIcons.map((icon, index) => (
            <figure className={style.homeFigure} key={index}>
              <img src={icon} width="auto" height="150px" />
              <figcaption className={style.homeFigcaption}>
                {categoryNames[index]}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
      <section className={style.homeBrandsContainer}>
        <div className={style.homeBgTitle}>
          <div className={style.homeSectionPart}>
            <img className={style.homeSectionLogo} src={Logo} />
            <h2 className={style.homeSectionTitle}>BRANDS</h2>
          </div>
        </div>
        <div className={style.homeBrands}>
          {brands.map((brandLogo, index) => (
            <img key={index} src={brandLogo} width="200" alt="" />
          ))}
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
            <Link to={`/models/${idFive}`} className={style.homeDeBtn}>
              DISCOVER
            </Link>
            <img
              className={style.homeArrow2}
              src={arrow}
              height="30"
              width="150"
            />
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
          <Link to={`/models/${idFive}`} className={style.homeContBtn}>
            DISCOVER
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
