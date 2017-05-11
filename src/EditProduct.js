import React, { Component } from 'react';


const EditProduct = ({ name, price, image, code, description, done, changePrice, changeName, changeDesc }) =>
   (
      <div className="col-xs-4 product-card">
        <img className="product-image rounded" src={image} />
        <icon onClick={done} className="btn btn-sm glyphicon edit-btn glyphicon-ok"></icon>
        <input onSubmit={done} className="form-control edit-p-input" onChange={changeName} type="text" value={name} />
        <span><input onSubmit={done} className="form-control edit-p-input" onChange={changePrice} type="text" value={price} /></span>
        <span>{code}</span>
        <textarea onSubmit={done} className="input-group form-control" onChange={changeDesc} value={description} className="product-description-edit"></textarea>
      </div>
    );


export default EditProduct;
