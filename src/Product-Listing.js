import React from "react";
import { useCart } from "./cart-context";

export default function ProductListing() {
  const { addToCart } = useCart();

  return ["1", "2", "3", "4"].map((item) => (
    <div>
      <h2 key={item}>Product {item}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  ));
}
