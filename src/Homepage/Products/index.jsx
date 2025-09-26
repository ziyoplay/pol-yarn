import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default function Products() {
  return (
    <div className="products container">
      <div className="top">
        <h3>Наша продукция</h3>
        <Link to='/'>Вся продукция</Link>
      </div>
      <div className="wrap">
        <div className="item">
          <img src="./images/Rectangle 11.png" alt="" />
          <p>Вся продукция</p>
        </div>
        <div className="item">
          <img src="./images/Rectangle 11.png" alt="" />
          <p>Вся продукция</p>
        </div>
        <div className="item">
          <img src="./images/Rectangle 11.png" alt="" />
          <p>Вся продукция</p>
        </div>
        <div className="item">
          <img src="./images/Rectangle 11.png" alt="" />
          <p>Вся продукция</p>
        </div>
        <div className="item">
          <img src="./images/Rectangle 11.png" alt="" />
          <p>Вся продукция</p>
        </div>
        <div className="item">
          <img src="./images/Rectangle 11.png" alt="" />
          <p>Вся продукция</p>
        </div>
        <div className="item">
          <img src="./images/Rectangle 11.png" alt="" />
          <p>Вся продукция</p>
        </div>
        <div className="item">
          <img src="./images/Rectangle 11.png" alt="" />
          <p>Вся продукция</p>
        </div>
        
      </div>
    </div>
  );
}
