import React, { Component } from 'react';
import axios from 'axios'

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/products`)
    .then(res => {
      console.log(res.data)
      this.setState({products: res.data})
    })
  }

  render() {
    return (
      <div className="container product-list-container">
        <div className="row product-list">
          {this.state.products.map((p, i) => 
            <div className="col-xs-4 product-card">
              <img className="product-image rounded" src={p.image}/>
              <h4>{p.name}</h4>
              <span>${p.price}</span><icon className="btn btn-sm glyphicon glyphicon-pencil"></icon>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Products;
