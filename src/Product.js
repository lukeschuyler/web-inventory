import React, { Component } from 'react';
import axios from 'axios'
import EditProduct from './EditProduct.js'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p: this.props.product
    }
  }

  edit() {

  }

  render() {
   let p = this.state.p
    return (
      <div className="col-xs-4 product-card">
        <img className="product-image rounded" src={p.image}/>
        <icon onClick={this.edit} className="btn btn-sm glyphicon edit-btn glyphicon-pencil"></icon>
        <h4>{p.name}</h4>
        <span>${p.price}</span><br />
        <span>{p.upc_code}</span>
        <div className="product-description"><p>{p.description}</p></div>
      </div>
    );
  }
}

export default Product;
