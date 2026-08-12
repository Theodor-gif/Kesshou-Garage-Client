import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useState } from "react";
import { contextData } from "../context/ContextApi.jsx";
import { Link } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "../css/partsdetail.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { fontSize } from "@mui/system";
import { useParams } from "react-router-dom";

function PartsDetail() {
  const { parts } = useContext(contextData);
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const { id } = useParams();

  if (!parts || parts.length === 0) {
    return <h1>Loading...</h1>;
  }

  const part = parts.find((c) => c._id === id);

  let similarParts = parts.filter(
    (element) => element.categoryName === part.categoryName,
  );
  let restParts = similarParts.filter((element) => element._id !== part._id);

  function handleLeft() {
    setIndex((prev) => Math.max(prev - 1, 0));
  }

  function handleRight() {
    setIndex((prev) => Math.min(prev + 1, restParts.length - visibleCount));
  }

  const visibleParts = restParts.slice(index, index + visibleCount);

  return (
    <>
      <NavBar />
      <section className={style.partsDetailMain}>
        {/* MAIN PART INFO*/}
        <section className={style.partDetailInfo}>
          <div className={style.partDetailContInfo}>
            <div className={style.partsDe}>
              <div
                className={style.partsDetailInfoOne}
                style={{
                  backgroundImage: `url(${part.image})`,
                  backgroundSize: "contain",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className={style.partsDetailInfoTwo}>
              <div>
                <div className={style.partsDetail}>
                  <img src={part.brandImage} width="100%" />
                </div>
                <h2 className={style.partsDetailTitle}>{part.name}</h2>
                <p className={style.partsDetailPrice}>{part.price} &euro;</p>
                <div className={style.partsDetailOrder}>
                  <div className={style.partsDetailAmount}>
                    <button className={style.partsDetailMin} type="button">
                      -
                    </button>
                    <p className={style.partsDetailView}>0</p>
                    <button className={style.partsDetailPlus} type="button">
                      +
                    </button>
                  </div>
                  <Link className={style.partsDetailAdd}>
                    <ShoppingCartIcon
                      className={style.partsDetailIcon}
                      sx={{ fontSize: 30 }}
                    />
                    <p className={style.partsDetatilCart}>ADD TO CART</p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* SIMILAR PRODUCTS */}
        <section>
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>
                SIMILAR PRODUCTS
              </h2>
            </div>
          </div>
          <div className={style.partsSimilar}>
            <div className={style.partsDetailbtnContainer}>
              <button
                type="button"
                className={style.partsDetailbtn}
                onClick={handleLeft}
                disabled={index === 0}
              >
                <ArrowBackIosIcon
                  sx={{
                    fontSize: 75,
                  }}
                />
              </button>
            </div>
            {visibleParts.map((element) => (
              <Link key={element._id} to={`/partsdetail/${element._id}`}>
                <div className={style.partsSimilarSlide}>
                  <div
                    className={style.partsDetailImage}
                    style={{
                      backgroundImage: `url(${element.image})`,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      width: "250px",
                      height: "250px",
                    }}
                  ></div>
                  <div>
                    <h3 className={style.partsDetailSectionName}>
                      {element.name}
                    </h3>
                    <p className={style.partsDetailSectionPrice}>
                      {element.price} &euro;
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            <div className={style.partsDetailbtnContainer}>
              <button
                type="button"
                className={style.partsDetailbtn}
                onClick={handleRight}
                disabled={index >= restParts.length - visibleCount}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: 75,
                  }}
                />
              </button>
            </div>
          </div>
        </section>
        {/* DESCRIPTION */}
        <section>
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>DESCRIPTION</h2>
            </div>
          </div>
          <div className={style.partsDetailMoreContainer}>
            <p className={style.partsDetailMoreIn}>{part.description}</p>
          </div>
        </section>
        {/* COMPATIBLE WITH */}
        <section>
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>
                COMPATIBLE MODELS
              </h2>
            </div>
          </div>
          <div className={style.partsDetailMoreContainer}>
            <ul>
              {part.compatibleWith.map((element, index) => (
                <li className={style.partsDetailMoreIn} key={index}>
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* SPECS */}
        <section>
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>SPECS</h2>
            </div>
          </div>
          <div className={style.partsDetailMoreContainer}>
            <ul>
              {Object.entries(part.specs).map(([specName, specValue]) => (
                <li className={style.partsDetailMoreIn} key={specName}>
                  <strong>
                    {specName.charAt(0).toUpperCase() + specName.slice(1)}:
                  </strong>{" "}
                  {specValue}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* WHAT IS IN THE BOX */}
        <section>
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>
                WHAT IS IN THE BOX
              </h2>
            </div>
          </div>
          <div className={style.partsDetailMoreContainer}>
            <ul>
              {part.whatsInTheBox.map((item, index) => (
                <li className={style.partsDetailMoreIn} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* KIT FEATURES */}
        <section>
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>KIT FEATURES</h2>
            </div>
          </div>
          <div className={style.partsDetailMoreContainer}>
            <ul>
              {part.kitFeatures.map((element, index) => (
                <li className={style.partsDetailMoreIn} key={index}>
                  {element}
                </li>
              ))}
            </ul>
          </div>
        </section>
        {/* REVIEWS */}
        <section>
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>REVIEWS</h2>
            </div>
          </div>
          <p>
            <span>-</span> No reviews collected for this product yet{" "}
            <span>-</span>
          </p>
          <p>Be the first to write a review</p>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default PartsDetail;
