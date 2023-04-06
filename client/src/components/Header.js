import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header__top">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="header__top__inner">
                <div className="header__logo">
                  <a href="./">
                    <img src="assets/img/logo.png" alt="" />
                  </a>
                </div>
                <div className="header__top__right">
                  <div className="header__top__right__cart">
                    <a href="#">
                      <img src="assets/img/icon/cart.png" alt="" />
                      <span>0</span>
                    </a>
                    <div className="cart__price">
                      Cart: <span>$0.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="canvas__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="header__menu mobile-menu">
              <ul>
                <li className="active">
                  <a href="./">Home</a>
                </li>
                <li>
                  <a href="./shop">Shop</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="dropdown">
                    <li>
                      <a href="./shop_detail">Shop Details</a>
                    </li>
                    <li>
                      <a href="./shoping-cart.html">Shoping Cart</a>
                    </li>
                    <li>
                      <a href="./checkout.html">Check Out</a>
                    </li>
                    <li>
                      <a href="./wisslist.html">Wisslist</a>
                    </li>
                    <li>
                      <a href="./Class.html">Class</a>
                    </li>
                    <li>
                      <a href="./blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="./blog.html">Blog</a>
                </li>
                <li>
                  <a href="./contact.html">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
