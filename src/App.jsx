import { useState } from "react";
import productMobile from "./images/image-product-mobile.jpg";
import productDesktop from "./images/image-product-desktop.jpg";
import cart from "./images/icon-cart.svg";
import "./App.css";

export default function App() {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  // function

  return (
    <div className="device">
      <div className="app">
        <div className="product-image-container">
          <picture>
            <source srcSet={productDesktop} media="(min-width: 768px)" />
            <img
              className="product-image"
              src={productMobile}
              alt="perfum product photo"
            />
          </picture>
        </div>
        <main className="main">
          <p className="category">Perfume</p>
          <h1>Gabrielle Essence Eau De Parfum</h1>
          <p className="description">
            A floral, solar and voluptuous interpretation composed by Olivier
            Polge, Perfumer-Creator for the House of CHANEL.
          </p>
          <div className="price-container">
            <p className="price">$149.99</p>
            <p className="original-price">$169.99</p>
          </div>
          <a className="cta-btn" href="">
            <img className="cart-icon" src={cart} />
            Add to Cart
          </a>
        </main>
      </div>
    </div>
  );
}
