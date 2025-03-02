import { useState } from "react";
import productMobile from "./images/image-product-mobile.jpg";
import productDesktop from "./images/image-product-desktop.jpg";
import cart from "./images/icon-cart.svg";
import "./App.css";

export default function App() {
  let [isDesktop, setIsDesktop] = useState(false);

  function toggleIsDesktop() {
    if (window.innerWidth >= 768) {
      return setIsDesktop(currentState => !currentState);
    } else {
      return isDesktop;
    }
  }
  
  return (
    <div className="device">
      <div className="app">
        <div className="product-image-container">
          <img
            className="product-image"
            src={isDesktop ? productDesktop : productMobile}
            alt="perfum product photo"
          />
          {/* <img
            className="product-image"
            src={productMobile}
            srcSet={`${productMobile} 375w, ${productDesktop} 768w`}
            sizes="(max-width: 375px) 375px, (max-width: 768px) 768px"
            alt="perfum product photo"
          /> */}
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
