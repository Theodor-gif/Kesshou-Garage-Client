import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useState, useEffect } from "react";
import { contextData } from "../context/ContextApi.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "../css/partsdetail.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useParams, Link } from "react-router-dom";

function PartsDetail() {
  const { parts, addToCart, text, setText, reviewSend, commentEach, comments } =
    useContext(contextData);
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // start at 1, not 0
  const visibleCount = 3;

  const { id } = useParams();

  useEffect(() => {
    commentEach(id);
  }, [id]);

  useEffect(() => {
    commentEach(id);
  }, [comments]);

  if (!parts || parts.length === 0) {
    return <h1>Loading...</h1>;
  }

  const part = parts.find((c) => c._id === id);

  if (!part) {
    return <h1>Product not found</h1>;
  }

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

  function decreaseQuantity() {
    setQuantity((prev) => Math.max(prev - 1, 1)); // never go below 1
  }

  function increaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  const visibleParts = restParts.slice(index, index + visibleCount);

  return (
    <>
      <NavBar />
      <section className={style.partsDetailMain}>
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
                    <button
                      className={style.partsDetailMin}
                      type="button"
                      onClick={decreaseQuantity}
                    >
                      -
                    </button>
                    <p className={style.partsDetailView}>{quantity}</p>
                    <button
                      className={style.partsDetailPlus}
                      type="button"
                      onClick={increaseQuantity}
                    >
                      +
                    </button>
                  </div>
                  <button
                    type="button"
                    className={style.partsDetailAdd}
                    onClick={() => addToCart(part._id, quantity)}
                  >
                    <ShoppingCartIcon
                      className={style.partsDetailIcon}
                      sx={{ fontSize: 30 }}
                    />
                    <p className={style.partsDetatilCart}>ADD TO CART</p>
                  </button>
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
                <ArrowBackIosIcon sx={{ fontSize: 75 }} />
              </button>
            </div>
            {visibleParts.map((element) => (
              <Link
                key={element._id}
                to={`/partsdetail/${element._id}`}
                className={style.partsSimilarSlide}
              >
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
              </Link>
            ))}
            <div className={style.partsDetailbtnContainer}>
              <button
                type="button"
                className={style.partsDetailbtn}
                onClick={handleRight}
                disabled={index >= restParts.length - visibleCount}
              >
                <ArrowForwardIosIcon sx={{ fontSize: 75 }} />
              </button>
            </div>
          </div>
        </section>
        <section>
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>INFORMATION</h2>
            </div>
          </div>
          {/* DESCRIPTION */}
          <div className={style.partsDetatilSectionTwo}>
            <h2>DESCRIPTION</h2>
          </div>
          <div className={style.partsDetailMoreContainer}>
            <p className={style.partsDetailMoreIn}>{part.description}</p>
          </div>
          {/* COMPATIBLE WITH */}
          <div className={style.partsDetatilSectionTwo}>
            <h2>COMPATIBLE MODELS</h2>
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
          {/* SPECS */}
          <div className={style.partsDetatilSectionTwo}>
            <h2>SPECS</h2>
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
          {/* WHAT IS IN THE BOX */}
          <div className={style.partsDetatilSectionTwo}>
            <h2>WHAT IS IN THE BOX</h2>
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
          {/* KIT FEATURES */}
          <div className={style.partsDetatilSectionTwo}>
            <h2>KIT FEATURES</h2>
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
          {/* REVIEWS */}
          <div className={style.partsDetailSimilarContainer}>
            <div className={style.partsDetatilSection}>
              <h2 className={style.partsDetailSectionTitle}>REVIEWS</h2>
            </div>
          </div>
          {comments && comments.length > 0 ? (
            <ul>
              {comments.map((comment) => (
                <li key={comment._id}>
                  <p>{comment.text}</p>
                  <p>{comment.author.firstname}</p>
                </li>
              ))}
            </ul>
          ) : (
            <>
              <p>
                <span>-</span> No reviews collected for this product yet{" "}
                <span>-</span>
              </p>
              <p>Be the first to write a review</p>
            </>
          )}
          <form onSubmit={(e) => reviewSend(e, part._id)}>
            <textarea
              placeholder="Write your review..."
              rows={4}
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
            <button type="submit">SEND</button>
          </form>
        </section>
      </section>
      <Footer />
    </>
  );
}

export default PartsDetail;
