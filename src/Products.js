import React, { Component } from 'react';
import axios from 'axios'
import Product from './Product.js'


class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }

  componentWillMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/products`)
    .then(res => {
      this.setState({products: res.data})
    })
  }

  render() {
    return (
      <div className="container product-list-container">
        <h1>Product List</h1>
        <hr />
        <div className="row">
          {this.state.products.map((p, i) => 
            <Product 
              price={p.price}
              image={p.image}
              name={p.name}
              code={p.upc_code}
              description={p.description}
              id={p.id}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Products;
