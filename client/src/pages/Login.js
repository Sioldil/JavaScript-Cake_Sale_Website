import React, { Component } from 'react';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      message: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    console.log(username, password);
    fetch('http://localhost:8080/api/auth/signin', {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.message == 'ok' && res.roles == 'ROLE_USER') {
          alert('login successful');
          window.localStorage.setItem('user', JSON.stringify(res));
          window.location.href = './';
        } else if (res.message == 'ok' && res.roles == 'ROLE_ADMIN') {
          alert('login successful');
          window.localStorage.setItem('user', JSON.stringify(res));
          window.location.href = './admin';
        } else {
          alert(res.message);
        }
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
                      <h5>Login</h5>
                      <form onSubmit={this.handleSubmit}>
                        <input
                          type="text"
                          placeholder="Enter your username"
                          name="username"
                          required
                          onChange={(e) =>
                            this.setState({ username: e.target.value })
                          }
                        />
                        <input
                          type="password"
                          placeholder="*******"
                          name="Password"
                          required
                          onChange={(e) =>
                            this.setState({ password: e.target.value })
                          }
                        />
                        <button type="submit" className="site-btn">
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
  }
}
