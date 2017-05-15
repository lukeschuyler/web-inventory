import React from 'react';
import { Modal, Button } from 'react-bootstrap'

const ProductCardSearch = ({ name, show, price, image, code, description, addProduct, showModal, closeModal }) =>
 (
    <div className="col-xs-4 product-card">
      <img alt="" className="product-image rounded" src={image} />
      <icon onClick={showModal} 
        className="btn btn-sm glyphicon edit-btn glyphicon-plus"></icon>
      <h4>{name}</h4>
      <span>List Price: ${price}</span><br />
      <span>{code}</span>
      <div className="product-description"><p>{description}</p></div>
      <div className="modal-container">
      <Modal
        show={show}
        onHide={closeModal}
        container={this}
        aria-labelledby="contained-modal-title"
      >
      <Modal.Body>
        Are You sure you want to add {name} to your product list?
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={closeModal}>Close</Button>
        <Button onClick={addProduct}>Add</Button>
      </Modal.Footer>
    </Modal>
    </div>
    </div>
  );


export default ProductCardSearch;
