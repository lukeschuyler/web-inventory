import React, { Component } from 'react';
import axios from 'axios'


const EditProduct = ({ name, price, image, code, description }) =>
   (
      <div className="col-xs-4 product-card">
        <img className="product-image rounded" src={image} />
        <input type="text" value={name} />
        <span><input type="text" value={price} /></span>
        <span>{code}</span>
        <textarea value={description} className="product-description"></textarea>
      </div>
    );


export default EditProduct;
