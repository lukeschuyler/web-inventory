import React, { Component } from 'react';
import axios from 'axios'


const EditProduct = ({ name, price, image, code, description, done, changePrice, changeName, changeDesc }) =>
   (
      <div className="col-xs-4 product-card">
        <img className="product-image rounded" src={image} />
        <icon onClick={done} className="btn btn-sm glyphicon edit-btn glyphicon-ok"></icon>
        <input onChange={changeName} type="text" value={name} />
        <span><input onChange={changePrice} type="text" value={price} /></span>
        <span>{code}</span>
        <textarea onChange={changeDesc} value={description} className="product-description-edit"></textarea>
      </div>
    );


export default EditProduct;
