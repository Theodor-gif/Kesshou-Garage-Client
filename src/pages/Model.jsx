import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext } from "react";
import { contextData } from "../context/ContextApi.jsx";
import style from "../css/model.module.css";
import logo from "../assets/kessho-icon.png";
import { useParams } from "react-router-dom";

function Model() {
  const { cars } = useContext(contextData);
  const { id } = useParams();

  if (!cars || cars.length === 0) {
    return <h1>Loading...</h1>;
  }

  const car = cars.find((c) => c._id === id);

  if (!car) {
    return <h1>Car not found</h1>;
  }

  const bgHero = car.photos[0].url;
  const brand = car.brand;
  const model = car.model;
  const categoryTitleOne = car.spotlight[0].category;
  const categoryTiOne = car.spotlight[0].title;
  const categoryDeOne = car.spotlight[0].text;
  const categoryTitleTwo = car.spotlight[1].category;
  const categoryTiTwo = car.spotlight[1].title;
  const categoryDeTwo = car.spotlight[1].text;
  const categoryTitleThree = car.spotlight[2].category;
  const categoryTiThree = car.spotlight[2].title;
  const categoryDeThree = car.spotlight[2].text;
  const tagline = car.tagline;
  const description = car.description;
  const bgOverview = car.photos[1].url;
  const partPhotoOne = car.photos[2].url;
  const partPhotoTwo = car.photos[3].url;
  const partPhotoThree = car.photos[4].url;
  const partPhotoFour = car.photos[5].url;
  const partPhotoFive = car.photos[6].url;
  const partPhotoSix = car.photos[7].url;

  return (
    <>
      <NavBar />
      <section className={style.modelmain}>
        <section
          className={style.modelhero}
          style={{
            backgroundImage: `url(${bgHero})`,
          }}
        >
          <div className={style.modelNameCar}>
            <h1 className={style.modelBrand}>{brand}</h1>
            <p className={style.modelModel}>{model}</p>
          </div>
        </section>
        <section className={style.modelNavBasic}>
          <ul className={style.modelNavList}>
            <li className={style.modelNavItem}>
              <a className={style.modeAnchor} href="#overview">
                OVERVIEW
              </a>
            </li>
            <li className={style.modelNavItem}>
              <a className={style.modeAnchor} href="#overviewOne">
                {categoryTitleOne.toUpperCase()}
              </a>
            </li>
            <li className={style.modelNavItem}>
              <a className={style.modeAnchor} href="#overviewTwo">
                {categoryTitleTwo.toUpperCase()}
              </a>
            </li>
            <li className={style.modelNavItem}>
              <a className={style.modeAnchor} href="#overviewThree">
                {categoryTitleThree.toUpperCase()}
              </a>
            </li>
          </ul>
        </section>
        <section className={style.modelSectionOne}>
          <div className={style.modelSectionPart}>
            <img className={style.modelSectionLogo} src={logo} />
            <h3 id="overview" className={style.modelSectionTitle}>
              OVERVIEW
            </h3>
          </div>
        </section>
        <section className={style.modelReasonOne}>
          <div className={style.modelInfoOne}>
            <div className={style.modelContainerOne}>
              <h2 className={style.modelTagLine}>{tagline}</h2>
            </div>
            <div className={style.modelContainerTwo}>
              <p className={style.modelDescription}>{description}</p>
            </div>
          </div>
          <div
            className={style.modelHeroTwo}
            style={{
              backgroundImage: `url(${bgOverview})`,
            }}
          ></div>
        </section>
        <section className={style.modelSectionOne}>
          <div className={style.modelSectionPart}>
            <img className={style.modelSectionLogo} src={logo} />
            <h3 id="overviewOne" className={style.modelSectionTitle}>
              {categoryTitleOne.toUpperCase()}
            </h3>
          </div>
        </section>
        <section className={style.modelDeOne}>
          <div className={style.modelDePartOne}>
            <div className={style.modelDeInfo}>
              <h2 className={style.modelDeTitle}>{categoryTiOne}</h2>
              <p className={style.modelDePar}>{categoryDeOne}</p>
            </div>
            <div className={style.modelDeImg}>
              <img src={partPhotoOne} width="250" />
            </div>
          </div>
          <div className={style.modelDePartTwo}>
            <img className={style.modelImgTwo} src={partPhotoTwo} />
          </div>
        </section>
        <section className={style.modelSectionOne}>
          <div className={style.modelSectionPart}>
            <img className={style.modelSectionLogo} src={logo} />
            <h3 id="overviewTwo" className={style.modelSectionTitle}>
              {categoryTitleTwo.toUpperCase()}
            </h3>
          </div>
        </section>
        <section className={style.modelSeperate}>
          <div className={style.modelSepContainer}>
            <h2 className={style.modelSepTag}>{categoryTiTwo}</h2>
            <p className={style.modelSepPar}>{categoryDeTwo}</p>
            <img
              className={style.modelSepImgOne}
              src={partPhotoThree}
              width="200"
            />
            <img
              className={style.modelSepImgTwo}
              src={partPhotoFour}
              width="300"
            />
          </div>
        </section>
        <section className={style.modelSectionOne}>
          <div className={style.modelSectionPart}>
            <img className={style.modelSectionLogo} src={logo} />
            <h3 id="overviewThree" className={style.modelSectionTitle}>
              {categoryTitleThree.toUpperCase()}
            </h3>
          </div>
        </section>
        <section className={style.modelDeOne}>
          <div className={style.modelDePartOne}>
            <div className={style.modelDeInfo}>
              <h2 className={style.modelDeTitle}>{categoryTiThree}</h2>
              <p className={style.modelDePar}>{categoryDeThree}</p>
            </div>
            <div className={style.modelDeImg}>
              <img src={partPhotoFive} width="300" />
            </div>
          </div>
          <div className={style.modelDePartTwo}>
            <img className={style.modelImgTwo} src={partPhotoSix} />
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default Model;
