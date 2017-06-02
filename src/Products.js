import React, { Component } from 'react';
import axios from 'axios'
import Product from './Product.js'
import { toast } from 'react-toastify';

const DeleteToast = ({message}) => <span className="t-container">{message}</span>

class Products extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
    this.deleteItem = this.deleteItem.bind(this)
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/products`)
    .then(res => {
      this.setState({products: res.data})
    })
  }

  deleteItem(i) {
    let newProducts = this.state.products
    newProducts.splice(i, 1)
    this.setState({ products: newProducts })
    toast(<DeleteToast message='Product Removed Successfully'/>);
  }

  render() {
    return (
      <div className="container product-list-container">
        <h1>Product List</h1>
        <div className="search-container row">
          {this.state.products.map((p, i) => 
            <Product 
              current_qty={p.current_qty}
              key={p.id}
              price={p.price}
              image={p.image}
              name={p.name}
              upc_code={p.upc_code}
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
