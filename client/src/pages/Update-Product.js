import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

class UpdateProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      price: '',
      image: null,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleFileChange(e) {
    this.setState({ image: e.target.files[0] });
  }

  componentDidMount() {
    let { id } = this.props.params;
    console.log('id prop:', id);
    fetch(`http://localhost:8080/api/product/get/${id}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          name: data.name,
          price: data.price,
        });
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  handleSubmit(e) {
    let { id } = this.props.params;
    e.preventDefault();
    const { name, price, image } = this.state;
    console.log(name, price, image);

    const formData = new FormData();
    formData.append('name', name);
    formData.append('price', price);
    formData.append('image', image);

    fetch(`http://localhost:8080/api/product/update/${id}`, {
      method: 'PUT',
      crossDomain: true,
      headers: {
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        alert(res.message);
        if (res.message === 'Product was updated successfully.') {
          window.location.href = '/admin';
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
                      <h5>Update product</h5>
                      <form onSubmit={this.handleSubmit}>
                        <input
                          type="text"
                          value={this.state.name}
                          onChange={(event) =>
                            this.setState({ name: event.target.value })
                          }
                        />
                        <input
                          type="text"
                          step="0.01"
                          value={this.state.price}
                          onChange={(event) =>
                            this.setState({ price: event.target.value })
                          }
                        />
                        <label>
                          Image:
                          <input
                            type="file"
                            onChange={(event) =>
                              this.setState({ image: event.target.files[0] })
                            }
                          />
                        </label>
                        <button type="submit" className="site-btn">
                          Update
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

export default withParams(UpdateProduct);
