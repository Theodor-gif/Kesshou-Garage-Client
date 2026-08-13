import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useState } from "react";
import { contextData } from "../context/ContextApi.jsx";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "../css/partsdetail.module.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useParams, Link } from "react-router-dom";

function PartsDetail() {
  const { parts, addToCart } = useContext(contextData);
  const [index, setIndex] = useState(0);
  const [quantity, setQuantity] = useState(1); // start at 1, not 0
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

        {/* ...rest of your sections stay exactly the same... */}
      </section>
      <Footer />
    </>
  );
}

export default PartsDetail;
