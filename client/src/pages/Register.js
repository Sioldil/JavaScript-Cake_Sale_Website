import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, email, password } = this.state;
    console.log(username, email, password);
  }
  render() {
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
                      <h5>Register</h5>
                      <form onSubmit={this.handleSubmit}>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          name="username"
                          required="true"
                          onChange={(e) =>
                            this.setState({ username: e.target.value })
                          }
                        />
                        <input
                          type="text"
                          placeholder="Enter your email"
                          name="email"
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                        />
                        <input
                          type="password"
                          placeholder="*******"
                          name="password"
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                        <button type="submit" class="site-btn">
                          Register
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
  }
}
