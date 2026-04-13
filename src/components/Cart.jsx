import { useContext } from "react";

import { CartContext } from "../store/shopping-cart-context.jsx";

export default function Cart() {
  const { items, updateCartItemQuantity } = useContext(CartContext);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;

  return (
    <div className="space-y-2">
      {items.length === 0 && (
        <p className="text-text-primary">No items in cart!</p>
      )}
      {items.length > 0 && (
        <ul className="flex flex-col gap-2 list-none m-0 p-0">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-product-gold rounded-md text-sm"
              >
                <div className="space-x-2">
                  <span className="font-semibold">{item.name}</span>
                  <span>({formattedPrice})</span>
                </div>
                <div className="flex gap-2 items-center text-lg">
                  <button
                    className="bg-transparent border-none rounded-md text-dark-brown hover:bg-accent-orange p-1 cursor-pointer transition-colors"
                    onClick={() => updateCartItemQuantity(item.id, -1)}
                  >
                    −
                  </button>
                  <span className="font-bold px-2">{item.quantity}</span>
                  <button
                    className="bg-transparent border-none rounded-md text-dark-brown hover:bg-accent-orange p-1 cursor-pointer transition-colors"
                    onClick={() => updateCartItemQuantity(item.id, 1)}
                  >
                    +
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      )}
      <p className="text-right font-bold text-lg">
        Cart Total:{" "}
        <strong className="text-xl text-accent-gold">
          {formattedTotalPrice}
        </strong>
      </p>
    </div>
  );
}
