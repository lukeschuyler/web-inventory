import React, { Component } from 'react';
import axios from 'axios'


const EditProduct = ({  })
   (
      <div className="col-xs-4 product-card">
        <img className="product-image rounded" src={image}/>
        <h4>{p.name}</h4>
        <input type="text" />
        <span>${p.price}</span><icon onClick={this.editPrice} className="btn btn-sm glyphicon glyphicon-pencil"></icon>
        <span>{p.upc_code}</span>
        <div className="product-description"><p>{p.description}</p></div>
      </div>
    );


export default Product;
