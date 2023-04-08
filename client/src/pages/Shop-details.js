import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class Shop_details extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log('user:', user);
    console.log('user.accessToken:', user && user.accessToken);

    if (user && user.accessToken) {
      this.setState({ isLoggedIn: true });

      let { id } = this.props.params;
      console.log('id:', id);

      fetch(`http://localhost:8080/api/product/get/${id}`, {
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
          console.log('products:', products);
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
        <div className="breadcrumb-option">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="breadcrumb__text">
                  <h2>Product detail</h2>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6">
                <div className="breadcrumb__links">
                  <a href="./">Home</a>
                  <a href="./shop">Shop</a>
                  <span>{products.name}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="product-details spad">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="product__details__img">
                  <div className="product__details__big__img">
                    <img
                      className="big_img"
                      src={`http://localhost:8080/uploads/${products.image}`}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="product__details__text">
                  <div className="product__label">Cupcake</div>
                  <h4>{products.name}</h4>
                  <h5>${products.price}</h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Quis ipsum suspendisse ultrices gravida
                  </p>
                  <ul>
                    <li>
                      SKU: <span>17</span>
                    </li>
                    <li>
                      Category: <span>Biscuit cake</span>
                    </li>
                    <li>
                      Tags: <span>Gadgets, minimalisstic</span>
                    </li>
                  </ul>
                  <div className="product__details__option">
                    <div className="quantity">
                      <div className="pro-qty">
                        <input type="text" value="2" />
                      </div>
                    </div>
                    <a href="#" className="primary-btn">
                      Add to cart
                    </a>
                    <a href="#" className="heart__btn">
                      <span className="icon_heart_alt"></span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="product__details__tab"></div>
          </div>
        </section>
      </>
    );
  }
}

export default withParams(Shop_details);
