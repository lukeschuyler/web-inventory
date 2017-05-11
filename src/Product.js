import React, { Component } from 'react';
import axios from 'axios'
import EditProduct from './EditProduct.js'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: this.props.price,
      image: this.props.image,
      name: this.props.name,
      code: this.props.upc_code,
      description: this.props.description,
      editing: false,

    }
    this.edit = this.edit.bind(this)
  }

  edit() {
    this.setState({editing: !this.state.editing})
  }

  render() {
   if(!this.state.editing) {
    return (
      <div className="col-xs-4 product-card">
        <img className="product-image rounded" src={this.state.image}/>
        <icon onClick={this.edit} className="btn glyphicon edit-btn glyphicon-edit"></icon>
        <h4>{this.state.name}</h4>
        <span>${this.state.price}</span><br />
        <span>{this.state.code}</span>
        <div className="product-description"><p>{this.state.description}</p></div>
      </div>
    );   
   } else { 
    return (
      <EditProduct 
        name={this.state.name}
        price={this.state.price}
        image={this.state.image}
        code={this.state.code}
        description={this.state.description}
        done={this.edit}
        changePrice={(e) => { this.setState({price: e.target.value}) }}
        changeDesc={(e) => { this.setState({description: e.target.value}) }}
        changeName={(e) => { this.setState({name: e.target.value}) }}
      />
    )
   }
  }
}

export default Product;
