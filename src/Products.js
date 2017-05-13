import React, { Component } from 'react';
import axios from 'axios'
import Product from './Product.js'


class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }

    this.deleteItem = this.deleteItem.bind(this)
  }

  componentWillMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/products`)
    .then(res => {
      this.setState({products: res.data})
    })
  }

  deleteItem(i) {
    this.state.products.splice(i, 1)
    this.setState({ products: this.state.products })
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
              deleteItem={() => { this.deleteItem(i) } }
            />
          )}
        </div>
      </div>
    );
  }
}

export default Products;
