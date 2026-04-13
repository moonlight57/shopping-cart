import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { CartContext } from "../store/shopping-cart-context.jsx";
import Cart from "./Cart.jsx";

const CartModal = forwardRef(function Modal({ title }, ref) {
  const dialog = useRef();
  const [isCheckout, setIsCheckout] = useState(false);
  const { clearCart } = useContext(CartContext);

  const modalRoots = document.getElementById("modal");

  if (!modalRoots) {
    return null;
  }

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        setIsCheckout(false);
        dialog.current.showModal();
      },
    };
  });

  function handleCheckout() {
    setIsCheckout(true);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries());
    const order = {
      items: [],
      customer: customerData,
    };
    alert(JSON.stringify(order, null, 2));
    clearCart();
    dialog.current.close();
  }

  function handleClose() {
    setIsCheckout(false);
    dialog.current.close();
  }

  return createPortal(
    <dialog
      className="w-[30%] bg-modal-bg border-none rounded-lg shadow-2xl animate-fade-top"
      ref={dialog}
    >
      <h2 className="text-2xl uppercase text-checkout-dark m-0 p-4 font-bold">
        {title}
      </h2>
      {!isCheckout && <Cart />}
      {isCheckout && (
        <form onSubmit={handleSubmit} className="animate-fade-right p-4">
          <label className="block mb-2 font-medium" htmlFor="name">
            Name
          </label>
          <input
            className="w-full p-2 rounded-md border-none mb-4"
            id="name"
            name="name"
            type="text"
            required
          />
          <label className="block mb-2 font-medium" htmlFor="email">
            Email
          </label>
          <input
            className="w-full p-2 rounded-md border-none mb-4"
            id="email"
            name="email"
            type="email"
            required
          />
          <div className="flex gap-4 justify-end">
            <button
              type="button"
              className="text-dark-brown hover:text-checkout-dark px-4 py-2 rounded-md transition-colors"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button className="bg-checkout-dark hover:bg-bg-secondary text-text-primary px-6 py-2 rounded-md font-bold cursor-pointer transition-colors">
              Place Order
            </button>
          </div>
        </form>
      )}
      {!isCheckout && (
        <form
          className="flex gap-4 justify-end items-center p-4"
          method="dialog"
        >
          <button
            type="button"
            className="text-dark-brown hover:text-checkout-dark px-4 py-2 rounded-md transition-colors text-xl cursor-pointer font-bold"
            onClick={handleClose}
          >
            Close
          </button>

          <button
            type="button"
            className="bg-checkout-dark hover:bg-bg-secondary text-text-primary px-6 py-2 rounded-md font-bold cursor-pointer transition-colors"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </form>
      )}
    </dialog>,
    modalRoots,
  );
});

export default CartModal;
