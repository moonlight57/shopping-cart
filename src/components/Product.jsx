import { useContext } from "react";

import { CartContext } from "../store/shopping-cart-context";

export default function Product({ id, image, title, price, description }) {
  const { addItemToCart } = useContext(CartContext);

  return (
    <article className="h-full bg-card-bg rounded-lg flex flex-col shadow-2xl">
      <img src={image} alt={title} className="w-full rounded-t-lg" />
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-xl text-product-gold mb-1 font-bold">{title}</h3>
          <p className="text-lg text-text-muted m-0">${price}</p>
          <p className="mt-2 text-text-primary">{description}</p>
        </div>
        <p className="text-right mt-auto">
          <button
            className="bg-accent-orange hover:bg-accent-orange/75 text-dark-brown text-base px-4 py-2 rounded-md font-bold cursor-pointer transition-all w-full"
            onClick={() => addItemToCart(id)}
          >
            Add to Cart
          </button>
        </p>
      </div>
    </article>
  );
}
