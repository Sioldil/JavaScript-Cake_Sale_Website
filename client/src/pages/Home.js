import React from 'react';

const Home = () => {
  return (
    <>
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
                    <h2>Making your life sweeter one bite at a time!</h2>
                    <a href="#" className="primary-btn">
                      Our cakes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="about__text">
                <div className="section-title">
                  <span>About Cake shop</span>
                  <h2>Cakes and bakes from the house of Queens!</h2>
                </div>
                <p>
                  The "Cake Shop" is a Jordanian Brand that started as a small
                  family business. The owners are Dr. Iyad Sultan and Dr. Sereen
                  Sharabati, supported by a staff of 80 employees.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about__bar">
                <div className="about__bar__item">
                  <p>Cake design</p>
                  <div id="bar1" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="95"></span>
                  </div>
                </div>
                <div className="about__bar__item">
                  <p>Cake Class</p>
                  <div id="bar2" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="80"></span>
                  </div>
                </div>
                <div className="about__bar__item">
                  <p>Cake Recipes</p>
                  <div id="bar3" className="barfiller">
                    <div className="tipWrap">
                      <span className="tip"></span>
                    </div>
                    <span className="fill" data-percentage="90"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel">
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span className="flaticon-029-cupcake-3"></span>
                  <h5>Cupcake</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span className="flaticon-034-chocolate-roll"></span>
                  <h5>Butter</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span className="flaticon-005-pancake"></span>
                  <h5>Red Velvet</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span className="flaticon-030-cupcake-2"></span>
                  <h5>Biscuit</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span className="flaticon-006-macarons"></span>
                  <h5>Donut</h5>
                </div>
              </div>
              <div className="categories__item">
                <div className="categories__item__icon">
                  <span className="flaticon-006-macarons"></span>
                  <h5>Cupcake</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Dozen Cupcakes</a>
                  </h6>
                  <div className="product__item__price">$32.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Cookies and Cream</a>
                  </h6>
                  <div className="product__item__price">$30.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Gluten Free Mini Dozen</a>
                  </h6>
                  <div className="product__item__price">$31.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Cookie Dough</a>
                  </h6>
                  <div className="product__item__price">$25.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Vanilla Salted Caramel</a>
                  </h6>
                  <div className="product__item__price">$05.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">German Chocolate</a>
                  </h6>
                  <div className="product__item__price">$14.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Dulce De Leche</a>
                  </h6>
                  <div className="product__item__price">$32.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div className="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div className="product__item__text">
                  <h6>
                    <a href="#">Mississippi Mud</a>
                  </h6>
                  <div className="product__item__price">$08.00</div>
                  <div className="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
