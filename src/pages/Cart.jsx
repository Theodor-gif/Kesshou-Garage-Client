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

  // Hook handles base initialization tasks cleanly on page load
  useEffect(() => {
    getCart();
  }, []);

  // 1. Condition: User is not authenticated/logged in
  if (!userName || userName.length === 0) {
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

  // 🛠️ FIX 1: Create a safe array lookup wrapper BEFORE checking lengths.
  // If the backend returns null or an uninitialized object, this defaults cleanly to an empty array.
  const safeItems = cart?.items || cart?.products || [];

  // 2. Condition: The user is logged in, but the backend record has no items yet (New User)
  if (!cart || safeItems.length === 0) {
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

  // 3. Condition: Cart loaded successfully with products
  return (
    <>
      <NavBar />
      <main className={style.mainCartExistUser}>
        <h1 className={style.cartTitle}>
          Your shopping cart has {safeItems.length} product
          {safeItems.length > 1 ? "s" : ""}
        </h1>
        <ul className={style.cartListContainer}>
          {safeItems.map((item) => {
            const productData = item.part || item.product || {};
            const productName = productData.name || "Vehicle Part";
            const productImage = productData.image || "";

            return (
              <li key={item._id} className={style.cartListItem}>
                <picture className={style.cartItemPicContainer}>
                  <img src={productImage} alt={productName} width="150" />
                </picture>
                <section className={style.cartItemInfo}>
                  <p>{productName}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Price: {item.price || productData.price} &euro;</p>
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
            );
          })}
        </ul>
        <section className={style.cartTotalContainer}>
          <div className={style.cartLine}></div>
          <section className={style.cartTotal}>
            <p>Total</p>
            <p>{cart?.total > 0 ? `${cart.total}` : "0"} &euro;</p>
          </section>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Cart;
