import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      this.setState({ isLoggedIn: true });
      fetch('http://localhost:8080/api/product/getall', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-access-token': user.accessToken,
        },
      })
        .then((response) => response.json())
        .then((products) => {
          this.setState({ products });
          console.log('products:', this.state.products);
        });
    }
  }
  render() {
    const { products, isLoggedIn } = this.state;

    if (!isLoggedIn) {
      return (
        <section className="hero">
          <div
            className="hero__slider "
            style={{
              backgroundImage: "url('assets/img/hero/hero-1.jpg')",
            }}
          >
            <div className="hero__item set-bg">
              <div className="container">
                <div className="row d-flex justify-content-center">
                  <div className="col-lg-8">
                    <div className="hero__text">
                      <h2>Please log in</h2>
                      <button href="./" className="primary-btn">
                        Go back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
    return (
      <>
        <div class="breadcrumb-option">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="breadcrumb__text">
                  <h2>Shop</h2>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6">
                <div class="breadcrumb__links">
                  <a href="./index.html">Home</a>
                  <span>Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section class="shop spad">
          <div class="container">
            <div class="row">
              {products.map((product) => {
                return (
                  <div class="col-lg-3 col-md-6 col-sm-6">
                    <div class="product__item">
                      <div
                        class="product__item__pic set-bg"
                        style={{
                          backgroundImage: `url(http://localhost:8080/uploads/${product.image})`,
                        }}
                      >
                        <div class="product__label">
                          <span>Cupcake</span>
                        </div>
                      </div>
                      <div class="product__item__text">
                        <h6>
                          <a>{product.name}</a>
                        </h6>
                        <div class="product__item__price">${product.price}</div>
                        <div class="cart_add">
                          <Link to={`/shop/${product._id}`}>
                            View Product Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    );
  }
}
