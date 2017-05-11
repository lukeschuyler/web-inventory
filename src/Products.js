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
              product={p}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Products;

            // <div className="col-xs-4 product-card">
            //     <img className="product-image rounded" src={p.image}/>
            //     <h4>{p.name}</h4>
            //     <span>${p.price}</span><icon className="btn btn-sm glyphicon glyphicon-pencil"></icon>
            //     <span>{p.upc_code}</span>
            //     <div className="product-description"><p>{p.description}</p></div>
            //   </div>
