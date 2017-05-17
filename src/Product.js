import React, { Component } from 'react';
import axios from 'axios'
import EditProduct from './EditProduct.js'
import { Modal, Button } from 'react-bootstrap'

class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      price: this.props.price,
      image: this.props.image,
      name: this.props.name,
      code: this.props.upc_code,
      description: this.props.description,
      id: this.props.id,
      editing: false,
      show: false
    }
    this.edit = this.edit.bind(this)
    this.delete = this.delete.bind(this)
  }

  edit() {
    this.setState({editing: true})
  }

  showModal() {
    this.setState({ show: true})
  }

  delete(id) {
    axios.delete(`https://inventory-manager-ls.herokuapp.com/api/v1/products/${id}`)
    .then(res => {
      this.props.deleteItem()
      this.setState({show: false})
    })
  }

  update(e, id, name, price, description) {
    e.preventDefault()
    const data = { id, name, price, description }
    axios.patch(`https://inventory-manager-ls.herokuapp.com/api/v1/products`, data)
    .then(res => {
      console.log(res)
      this.setState({editing: false})
    })
  }

  render() {
  let close = () => this.setState({ show: false});
   if(!this.state.editing) {
    return (
      <div className="product-card col-xs-4">
          <div className="product-image-container"><img alt="" className="product-image rounded" src={this.state.image}/></div>
            <icon onClick={this.edit} className="btn glyphicon edit-btn glyphicon-edit"></icon>
            <icon onClick={() => { this.showModal(this.state.id) } } className="btn glyphicon delete-btn glyphicon-remove"></icon>
         <hr />
          <div className="half-card">
            <h4>{this.state.name}</h4>
            <span>${this.state.price}</span><br />
            <span>UPC Code: {this.state.code}</span>
            <div className="product-description"><p>{this.state.description}</p></div>
          </div>
          <div className="modal-container">
            <Modal
              show={this.state.show}
              onHide={close}
              container={this}
              aria-labelledby="contained-modal-title"
            >
            <Modal.Body>
              Are You sure you want to remove {this.state.name} from your product list?
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={close}>Close</Button>
              <Button onClick={() => { this.delete(this.state.id) }}>Delete</Button>
            </Modal.Footer>
          </Modal>
        </div>
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
        done={ (e) => { this.update(e, this.state.id, this.state.name, this.state.price, this.state.description ) } }
        changePrice={(e) => { this.setState({price: e.target.value}) }}
        changeDesc={(e) => { this.setState({description: e.target.value}) }}
        changeName={(e) => { this.setState({name: e.target.value}) }}
      />
    )
   }
  }
}

export default Product;
