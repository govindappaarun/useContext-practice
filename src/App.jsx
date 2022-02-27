import Cart from "./Cart";
import ProductListing from "./Product-Listing";

import "./styles.css";
import { useTheme } from "./theme-context";

const themeWhite = {
  color: "black",
  backgroundColor: "white",
};

const themeDark = {
  color: "white",
  backgroundColor: "black",
};

export default function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className="App" style={theme === "light" ? themeWhite : themeDark}>
      <h1 className="app-header">eCommerce</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div className="app-body">
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
