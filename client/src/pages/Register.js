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
    fetch('http://localhost:8080/api/auth/signup', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    })
      .then((res) => res.json)
      .then((res) => {
        console.log(res);
      });
  }
  render() {
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
                    <div className="class__sidebar">
                      <h5>Register</h5>
                      <form onSubmit={this.handleSubmit}>
                        <input
                          type="text"
                          placeholder="Enter your name"
                          name="username"
                          required
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
                        <button type="submit" className="site-btn">
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
