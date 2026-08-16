import { useContext, useEffect } from "react";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { contextData } from "../context/ContextApi.jsx";
import ShopCartIcon from "../assets/ShopCart-icon.png";
import style from "../css/cart.module.css";
import { Link } from "react-router-dom";
import CartBinIcon from "../assets/CartBin-icon.png";

function Cart() {
  const { cart, getCart, userName, deleteCartItem } = useContext(contextData);

  // Only fetch the cart once we know a user is logged in.
  // userName starts empty and gets set asynchronously (after the token-decode
  // effect in ContextApi runs), so this re-runs once that happens.
  useEffect(() => {
    if (userName) {
      getCart();
    }
  }, [userName]);

  // No logged-in user — show the "log in to see your cart" state.
  // This never touches `cart`, so it doesn't matter that it hasn't been fetched.
  if (userName.length === 0) {
    return (
      <>
        <NavBar />
        <main className={style.mainCartExistUser}>
          <picture className={style.cartPictureContainer}>
            <img src={ShopCartIcon} alt="" width="150" />
          </picture>
          <h1 className={style.cartTitle}>Your shopping cart is empty</h1>
          <p className={style.cartParagraph}>
            Discover all Kessho Garage products and get the most for your
            vehicle.
          </p>
          <Link to="/account" className={style.cartBtn}>
            Register / Log in to add products
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  // Logged in, but the cart hasn't come back from getCart() yet.
  if (!cart) {
    return null; // or a loading spinner/skeleton if you want something visible here
  }

  // Logged in, cart loaded, but it's empty.
  if (cart.items.length === 0) {
    return (
      <>
        <NavBar />
        <main className={style.mainCartExistUser}>
          <picture className={style.cartPictureContainer}>
            <img src={ShopCartIcon} alt="" width="150" />
          </picture>
          <h1 className={style.cartTitle}>Your shopping cart is empty</h1>
          <p className={style.cartParagraph}>
            Discover all Kessho Garage products and get the most for your
            vehicle.
          </p>
          <Link to="/parts" className={style.cartBtn}>
            Discover products
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <main className={style.mainCartExistUser}>
        <h1 className={style.cartTitle}>
          Your shopping cart has {cart.items.length} product
          {cart.items.length > 1 ? "s" : ""}
        </h1>
        <ul className={style.cartListContainer}>
          {cart.items.map((item) => (
            <li key={item._id} className={style.cartListItem}>
              <picture className={style.cartItemPicContainer}>
                <img src={item.part.image} alt={item.part.name} width="150" />
              </picture>
              <section className={style.cartItemInfo}>
                <p>{item.part.name}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price} &euro;</p>
              </section>
              <section className={style.cartItemContainerBin}>
                <button
                  className={style.cartItemBinBtn}
                  onClick={() => deleteCartItem(item._id)}
                >
                  <img src={CartBinIcon} alt="" width="25" />
                </button>
              </section>
            </li>
          ))}
        </ul>
        <section className={style.cartTotalContainer}>
          <div className={style.cartLine}></div>
          <section className={style.cartTotal}>
            <p>Total</p>
            <p>{cart.total > "0" ? `${cart.total}` : "0"} &euro;</p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
