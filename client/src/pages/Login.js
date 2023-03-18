import React from 'react';

const Login = () => {
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
                  <div class="class__sidebar">
                    <h5>Login</h5>
                    <form action="#">
                      <input
                        type="text"
                        placeholder="Enter your email"
                        name="Email"
                      />
                      <input
                        type="password"
                        placeholder="*******"
                        name="Password"
                      />
                      <button type="submit" class="site-btn">
                        Login
                      </button>
                    </form>
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

export default Login;
