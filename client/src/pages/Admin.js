import React, { Component } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));

    const fetchData = (url, method) => {
      return fetch(url, {
        method,
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-access-token': user.accessToken,
        },
      }).then((response) => response.json());
    };

    Promise.all([
      fetchData('http://localhost:8080/api/test/admin', 'POST'),
      fetchData('http://localhost:8080/api/auth/getalluser', 'GET'),
    ])
      .then(([adminResponse, userResponse]) => {
        console.log('Admin Data:', adminResponse);
        console.log('Users Data:', userResponse);
        this.setState({
          data: userResponse,
          content: adminResponse.message,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString(),
        });
      });
  }

  logOut = () => {
    window.localStorage.clear();
    window.location.href = './login';
  };

  deleteUser = (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      const user = JSON.parse(localStorage.getItem('user'));

      fetch(`http://localhost:8080/api/auth/deleteuser/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          'x-access-token': user.accessToken,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.message) {
            console.log(data.message);
            if (data.message === 'User was deleted successfully!') {
              // update the state to remove the deleted user from the data array
              this.setState((prevState) => {
                console.log(prevState);
                return {
                  data: prevState.data.filter((item) => item.id !== id),
                };
              });
            }
          } else {
            console.log(`Error deleting user with id=${id}`);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  render() {
    const { content, data } = this.state;

    return (
      <>
        {content !== 'Admin Content.' && (
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
                        <h2>{content}</h2>
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
        )}
        {content === 'Admin Content.' && (
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
                      <div className="cart__total">
                        <h6 style={{ textAlign: 'center' }}>Hello Admin</h6>
                        <table
                          style={{
                            width: 500,
                            marginLeft: 'auto',
                            marginRight: 'auto',
                          }}
                        >
                          <thead>
                            <tr>
                              <th
                                style={{
                                  border: '1px solid black',
                                  textAlign: 'center',
                                }}
                              >
                                Name
                              </th>
                              <th
                                style={{
                                  border: '1px solid black',
                                  textAlign: 'center',
                                }}
                              >
                                Email
                              </th>
                              <th
                                style={{
                                  border: '1px solid black',
                                  textAlign: 'center',
                                }}
                              >
                                Role
                              </th>
                              <th
                                style={{
                                  border: '1px solid black',
                                  textAlign: 'center',
                                }}
                              >
                                Delete
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {console.log(data)}
                            {data.map((item) => (
                              <tr key={item.username}>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  {item.username}
                                </td>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  {item.email}
                                </td>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  {item.roles[0].name}
                                </td>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => this.deleteUser(item._id)}
                                  />
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                        <button
                          style={{
                            marginTop: '10px',
                            marginRight: 'auto',
                            marginLeft: 'auto',
                          }}
                          onClick={this.logOut}
                          className="primary-btn"
                        >
                          Log out
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
}
