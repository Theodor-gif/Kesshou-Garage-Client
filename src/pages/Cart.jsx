import { useContext, useEffect } from "react";
import NavBar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import { contextData } from "../context/ContextApi.jsx";

function Cart() {
  const { cart, getCart } = useContext(contextData);

  useEffect(() => {
    getCart();
  }, []);

  if (!cart) {
    return (
      <>
        <NavBar />
        <h1>Loading cart...</h1>
        <Footer />
      </>
    );
  }

  if (cart.items.length === 0) {
    return (
      <>
        <NavBar />
        <h1>Your cart is empty</h1>
        <Footer />
      </>
    );
  }

  return (
    <>
      <NavBar />
      <h1>Cart</h1>
      <ul>
        {cart.items.map((item) => (
          <li key={item._id}>
            <img src={item.part.image} alt={item.part.name} width="80" />
            <p>{item.part.name}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Price: {item.price} &euro;</p>
          </li>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export default Cart;
