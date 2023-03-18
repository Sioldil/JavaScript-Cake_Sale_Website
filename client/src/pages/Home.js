import React from 'react';

const Home = () => {
  return (
    <>
      <section class="hero">
        <div
          class="hero__slider "
          style={{
            backgroundImage: "url('assets/img/hero/hero-1.jpg')",
          }}
        >
          <div class="hero__item set-bg">
            <div class="container">
              <div class="row d-flex justify-content-center">
                <div class="col-lg-8">
                  <div class="hero__text">
                    <h2>Making your life sweeter one bite at a time!</h2>
                    <a href="#" class="primary-btn">
                      Our cakes
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="about spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="about__text">
                <div class="section-title">
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
            <div class="col-lg-6 col-md-6">
              <div class="about__bar">
                <div class="about__bar__item">
                  <p>Cake design</p>
                  <div id="bar1" class="barfiller">
                    <div class="tipWrap">
                      <span class="tip"></span>
                    </div>
                    <span class="fill" data-percentage="95"></span>
                  </div>
                </div>
                <div class="about__bar__item">
                  <p>Cake Class</p>
                  <div id="bar2" class="barfiller">
                    <div class="tipWrap">
                      <span class="tip"></span>
                    </div>
                    <span class="fill" data-percentage="80"></span>
                  </div>
                </div>
                <div class="about__bar__item">
                  <p>Cake Recipes</p>
                  <div id="bar3" class="barfiller">
                    <div class="tipWrap">
                      <span class="tip"></span>
                    </div>
                    <span class="fill" data-percentage="90"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="categories">
        <div class="container">
          <div class="row">
            <div class="categories__slider owl-carousel">
              <div class="categories__item">
                <div class="categories__item__icon">
                  <span class="flaticon-029-cupcake-3"></span>
                  <h5>Cupcake</h5>
                </div>
              </div>
              <div class="categories__item">
                <div class="categories__item__icon">
                  <span class="flaticon-034-chocolate-roll"></span>
                  <h5>Butter</h5>
                </div>
              </div>
              <div class="categories__item">
                <div class="categories__item__icon">
                  <span class="flaticon-005-pancake"></span>
                  <h5>Red Velvet</h5>
                </div>
              </div>
              <div class="categories__item">
                <div class="categories__item__icon">
                  <span class="flaticon-030-cupcake-2"></span>
                  <h5>Biscuit</h5>
                </div>
              </div>
              <div class="categories__item">
                <div class="categories__item__icon">
                  <span class="flaticon-006-macarons"></span>
                  <h5>Donut</h5>
                </div>
              </div>
              <div class="categories__item">
                <div class="categories__item__icon">
                  <span class="flaticon-006-macarons"></span>
                  <h5>Cupcake</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="product spad">
        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div class="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Dozen Cupcakes</a>
                  </h6>
                  <div class="product__item__price">$32.00</div>
                  <div class="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div class="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Cookies and Cream</a>
                  </h6>
                  <div class="product__item__price">$30.00</div>
                  <div class="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div class="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Gluten Free Mini Dozen</a>
                  </h6>
                  <div class="product__item__price">$31.00</div>
                  <div class="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div class="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Cookie Dough</a>
                  </h6>
                  <div class="product__item__price">$25.00</div>
                  <div class="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div class="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Vanilla Salted Caramel</a>
                  </h6>
                  <div class="product__item__price">$05.00</div>
                  <div class="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div class="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">German Chocolate</a>
                  </h6>
                  <div class="product__item__price">$14.00</div>
                  <div class="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div class="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Dulce De Leche</a>
                  </h6>
                  <div class="product__item__price">$32.00</div>
                  <div class="cart_add">
                    <a href="#">Add to cart</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-md-6 col-sm-6">
              <div class="product__item">
                <div
                  class="product__item__pic set-bg"
                  style={{
                    backgroundImage: "url('assets/img/shop/product-1.jpg')",
                  }}
                >
                  <div class="product__label">
                    <span>Cupcake</span>
                  </div>
                </div>
                <div class="product__item__text">
                  <h6>
                    <a href="#">Mississippi Mud</a>
                  </h6>
                  <div class="product__item__price">$08.00</div>
                  <div class="cart_add">
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
