import { createContext, useContext, useState } from "react";

const defaultContextValues = {
  items: 6,
  cartLogger: () => console.log("Carting"),
};

const CartContext = createContext(defaultContextValues);

const CartProvider = ({ children }) => {
  const [items, setItems] = useState(4);
  const addToCart = () => setItems((items) => items + 1);
  return (
    <CartContext.Provider value={{ items, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
