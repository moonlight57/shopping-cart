import { useRef, useContext } from "react";

import { CartContext } from "../store/shopping-cart-context.jsx";
import CartModal from "./CartModal.jsx";

export default function Header() {
  const modal = useRef();
  const { items } = useContext(CartContext);

  const cartQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  function handleOpenCartClick() {
    modal.current.open();
  }

  return (
    <>
      <CartModal ref={modal} title="Your Cart" />
      <header className="flex justify-between items-center px-[15%] py-12">
        <div className="flex items-center">
          <img src="/logo.png" alt="Elegant model" className="w-20 mr-6" />
          <h1 className="uppercase text-accent-gold text-5xl drop-shadow-lg text-center font-bold m-0 font-merriweather">
            Elegant Context
          </h1>
        </div>
        <p>
          <button
            className="bg-accent-gold hover:bg-accent-orange text-dark-brown text-xl px-6 py-2 rounded-md font-bold no-underline cursor-pointer transition-colors"
            onClick={handleOpenCartClick}
          >
            Cart ({cartQuantity})
          </button>
        </p>
      </header>
    </>
  );
}
