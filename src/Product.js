import React, { Component } from 'react';
import axios from 'axios'


class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p: this.props.product
    }
  }

  editPrice() {
    
  }

  render() {
   let p = this.state.p
    return (
      <div className="col-xs-4 product-card">
        <img className="product-image rounded" src={p.image}/>
        <h4>{p.name}</h4>
        <span>${p.price}</span><icon onClick={this.editPrice} className="btn btn-sm glyphicon glyphicon-pencil"></icon>
        <span>{p.upc_code}</span>
        <div className="product-description"><p>{p.description}</p></div>
      </div>
    );
  }
}

export default Product;
