import { useCart } from "./cart-context";

export default function Cart() {
  const { items, cartLogger } = useCart();
  return (
    <div>
      <h1> Items in cart {items} </h1>
      <button onClick={cartLogger}>Click Me</button>
    </div>
  );
}
