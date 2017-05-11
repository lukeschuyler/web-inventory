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
            <Product 
              price={p.price}
              image={p.image}
              name={p.name}
              code={p.upc_code}
              description={p.description}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Products;
