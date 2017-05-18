import React from 'react';


const EditProduct = ({ name, price, image, code, description, done, changePrice, changeName, changeDesc }) =>
   (
      <div className="col-xs-4 product-card">
        <div className="product-image-container"><img alt="" className="product-image rounded" src={image} /></div>
        <icon onClick={done} 
          className="btn btn-sm glyphicon edit-btn glyphicon-ok"></icon>
        <hr />
        <input onSubmit={done} 
          className="form-control edit-p-input" 
          onChange={changeName} 
          type="text" value={name} />
        <span><input 
                onSubmit={done} 
                className="form-control edit-p-input" 
                onChange={changePrice} 
                type="text" value={price} />
        </span>
        <span>{code}</span>
        <textarea onSubmit={done} onChange={changeDesc} value={description} className="product-description-edit"></textarea>
      </div>
    );


export default EditProduct;
