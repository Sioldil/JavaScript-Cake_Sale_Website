import React, { Component } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      isLoggedIn: false,
    };
  }
  componentDidMount() {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.accessToken) {
      this.setState({ isLoggedIn: true });
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
        fetchData('http://localhost:8080/api/product/getall', 'GET'),
      ])
        .then(([adminResponse, userResponse, productResponse]) => {
          console.log('Admin Data:', adminResponse);
          console.log('Users Data:', userResponse);
          console.log('Product Data:', productResponse);
          this.setState({
            data: userResponse,
            content: adminResponse.message,
            data1: productResponse,
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

  deleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      const user = JSON.parse(localStorage.getItem('user'));

      fetch(`http://localhost:8080/api/product/delete/${id}`, {
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
          } else {
            console.log(`Error deleting product with id=${id}`);
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  render() {
    const { content, data, data1, isLoggedIn } = this.state;
    const handleUpdateProduct = (id) => {
      window.location.href = `/update-product/${id}`;
    };
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
                        <hr></hr>
                        <h6 style={{ textAlign: 'center' }}>User Table</h6>
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
                        <hr></hr>
                        <h6 style={{ textAlign: 'center' }}>Product Table</h6>
                        <table
                          style={{
                            width: 600,
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
                                Price
                              </th>
                              <th
                                style={{
                                  border: '1px solid black',
                                  textAlign: 'center',
                                }}
                              >
                                Image
                              </th>
                              <th
                                style={{
                                  border: '1px solid black',
                                  textAlign: 'center',
                                }}
                              >
                                Modify
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
                            {console.log(data1)}
                            {data1.map((item) => (
                              <tr key={item.username}>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  {item.name}
                                </td>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  {item.price}
                                </td>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  <img
                                    style={{ width: '30px', height: '30px' }}
                                    className="big_img"
                                    src={`http://localhost:8080/uploads/${item.image}`}
                                    alt=""
                                  />
                                </td>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faGear}
                                    onClick={() =>
                                      handleUpdateProduct(item._id)
                                    }
                                  />
                                </td>
                                <td
                                  style={{
                                    border: '1px solid black',
                                    textAlign: 'center',
                                  }}
                                >
                                  <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => this.deleteProduct(item._id)}
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
