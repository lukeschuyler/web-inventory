import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap'
import axios from 'axios'

class ProductCardSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      price: this.props.price,
      image: this.props.image,
      description: this.props.description,
      code: this.props.code,
      show: false
    }
    this.closeModal = this.closeModal.bind(this)
    this.showModal = this.showModal.bind(this)
    this.addProduct = this.addProduct.bind(this)
  }

  showModal() {
    this.setState({show:true})
  }

  closeModal() {
    this.setState({show:false})
  }

  addProduct(p, i) {
    const data = { 
      description: this.state.description, 
      image: this.state.image, 
      measure: 'QTY',
      name: this.state.name,
      popularity: 7,
      price: this.state.price.slice(1),
      upc_code: this.state.code
    }
    axios.post(`https://inventory-manager-ls.herokuapp.com/api/v1/products`, data)
    .then(res => {
      console.log(res)
      this.setState({show: false})
    })
  }

  render() {
    return  (
      <div className="col-xs-4 product-card">
         <div className="product-image-container-search"><img alt="" className="product-image-search rounded" src={this.state.image} /></div>
        <icon onClick={this.showModal} 
          className="btn btn-sm glyphicon add-btn glyphicon-plus"></icon>
        <h4>{this.state.name}</h4>
        <span><bold>List</bold> Price: ${this.state.price}</span><br />
        <span><bold>UPC:</bold> {this.state.code}</span>
        <div className="product-description"><p>{this.state.description}</p></div>
        <div className="modal-container">
            <Modal
              show={this.state.show}
              onHide={this.closeModal}
              container={this}
              aria-labelledby="contained-modal-title"
            >
            <Modal.Body>
              Are You sure you want to add {this.state.name} to your product list?
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.closeModal}>Close</Button>
              <Button onClick={this.addProduct}>Add</Button>
            </Modal.Footer>
          </Modal>
        s</div>
      </div>
    );
  }
}

export default ProductCardSearch;
