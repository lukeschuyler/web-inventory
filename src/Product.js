import React, { Component } from 'react';
import axios from 'axios'
import EditProduct from './EditProduct.js'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      p: this.props.product,
      editing: false
    }
    this.edit = this.edit.bind(this)
  }

  edit() {
    this.setState({editing: !this.state.editing})
  }

  render() {
   let p = this.state.p
   if(!this.state.editing) {
    return (
      <div className="col-xs-4 product-card">
        <img className="product-image rounded" src={p.image}/>
        <icon onClick={this.edit} className="btn glyphicon edit-btn glyphicon-edit"></icon>
        <h4>{p.name}</h4>
        <span>${p.price}</span><br />
        <span>{p.upc_code}</span>
        <div className="product-description"><p>{p.description}</p></div>
      </div>
    );   
   } else { 
    return (
      <EditProduct 
        name={p.name}
        price={p.price}
        image={p.image}
        code={p.upc_code}
        description={p.description}
        done={this.edit}
      />
    )
   }
  }
}

export default Product;
