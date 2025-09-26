import React from "react";
import "./style.css";

export default function Products() {
  return (
    <div className="products-container">
      <div className="products-header">
        <h2>Наша продукция</h2>
        <span className="all-products">Вся продукция</span>
      </div>

      <div className="products-grid">
        <div className="product-card">
          <img src="/images/shoelace1.png" alt="Шнурки, повседневные" className="product-image" />
          <p className="product-title">Шнурки, повседневные</p>
        </div>

        <div className="product-card">
          <img src="/images/elastic1.png" alt="Вязанная резинка" className="product-image" />
          <p className="product-title">Вязанная резинка</p>
        </div>

        <div className="product-card">
          <img src="/images/shoelace2.png" alt="Шнурки, повседневные" className="product-image" />
          <p className="product-title">Шнурки, повседневные</p>
        </div>

        <div className="product-card">
          <img src="/images/shoelace3.png" alt="Шнурки, повседневные" className="product-image" />
          <p className="product-title">Шнурки, повседневные</p>
        </div>

        <div className="product-card">
          <img src="/images/elastic2.png" alt="Ткацкая резинка" className="product-image" />
          <p className="product-title">Ткацкая резинка</p>
        </div>

        <div className="product-card">
          <img src="/images/shoelace4.png" alt="Шнурки, повседневные" className="product-image" />
          <p className="product-title">Шнурки, повседневные</p>
        </div>

        <div className="product-card">
          <img src="/images/elastic3.png" alt="Ткацкая резинка" className="product-image" />
          <p className="product-title">Ткацкая резинка</p>
        </div>

        <div className="product-card">
          <img src="/images/elastic4.png" alt="Жаккардовая резинка" className="product-image" />
          <p className="product-title">Жаккардовая резинка</p>
        </div>
      </div>
    </div>
  );
}
