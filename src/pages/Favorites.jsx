import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { useContext, useEffect, useState } from "react";
import { contextData } from "../context/ContextApi.jsx";
import { Link } from "react-router-dom";
import style from "../css/favorites.module.css";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import ClearIcon from "@mui/icons-material/Clear";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Favorites() {
  const { parts, fav, addToCart, setFav, token } = useContext(contextData);

  const [quantities, setQuantities] = useState({});

  function getQuantity(id) {
    return quantities[id] ?? 1;
  }

  function decreaseQuantity(id) {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max((prev[id] ?? 1) - 1, 1),
    }));
  }

  function increaseQuantity(id) {
    setQuantities((prev) => ({
      ...prev,
      [id]: (prev[id] ?? 1) + 1,
    }));
  }

  function deleteItem(id) {
    setFav((prev) => prev.filter((item) => item._id !== id));
  }

  return (
    <>
      <NavBar />
      <div className={style.favContainer}>
        {fav.length === 0 ? (
          <section className={style.favNoFav}>
            <NotInterestedIcon
              sx={{
                fontSize: 100,
              }}
            />
            <p className={style.favTitle}>No favorites yet</p>
            <p className={style.favParagraph}>
              Discover all Kessho Garage products and save the most for your
              vehicle.
            </p>
            <Link className={style.favBtn} to="/parts">
              Discover products
            </Link>
          </section>
        ) : (
          <section className={style.favHasContainer}>
            <h1 className={style.favTitleTwo}>
              You have {fav.length} favorite product
              {fav.length > 1 ? "s" : ""}
            </h1>
            {fav.map((element) => (
              <div key={element._id} className={style.favMapContainer}>
                <div className={style.favBoxOne}>
                  <img src={element.image} width="150" />
                </div>
                <div className={style.favBoxTwo}>
                  <h1>{element.name}</h1>
                  <p>{element.brand}</p>
                  <p>{element.price} &euro;</p>
                </div>
                <div className={style.favBoxThree}>
                  <div className={style.favSmallBoxOne}>
                    <button
                      className={style.favAdd}
                      type="button"
                      onClick={() => deleteItem(element._id)}
                    >
                      REMOVE ITEM <ClearIcon />
                    </button>
                  </div>
                  <div className={style.favSmallBoxTwo}>
                    <div className={style.favAmount}>
                      <button
                        className={style.favMinus}
                        type="button"
                        onClick={() => decreaseQuantity(element._id)}
                      >
                        -
                      </button>
                      <p className={style.favNumber}>
                        {getQuantity(element._id)}
                      </p>
                      <button
                        className={style.favPlus}
                        type="button"
                        onClick={() => increaseQuantity(element._id)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className={`${style.favAdd} ${style.favAddWide}`}
                      onClick={() =>
                        addToCart(element._id, getQuantity(element._id))
                      }
                    >
                      <ShoppingCartIcon /> ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {!token && (
              <h3>
                <span>*</span> Register or Log in to Add products to Cart
              </h3>
            )}
          </section>
        )}
      </div>

      <Footer />
    </>
  );
}

export default Favorites;
