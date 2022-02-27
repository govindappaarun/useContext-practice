import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./cart-context";
import App from "./App";
import { ThemeProvider } from "./theme-context";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ThemeProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ThemeProvider>
  </StrictMode>,
  rootElement
);
