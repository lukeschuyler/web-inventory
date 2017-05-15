import React from 'react';
import { Modal, Button } from 'react-bootstrap'

class ProductCardSearch extends Component {
  contstructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      show: this.props.show,
      price: this.props.price,
      image: this.props.image,
      description: this.props.description,
      showModal: false
    }
  }

  render() {
    return  (
      <div className="col-xs-4 product-card">
         <div className="product-image-container-search"><img alt="" className="product-image-search rounded" src={image} /></div>
        <icon onClick={showModal} 
          className="btn btn-sm glyphicon edit-btn glyphicon-plus"></icon>
        <h4>{name}</h4>
        <span>List Price: {price}</span><br />
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
        s</div>
      </div>
    );
  }
}

// const ProductCardSearch = ({ name, show, price, image, code, description, container, addProduct, showModal, closeModal }) =>
//  (
//     <div className="col-xs-4 product-card">
//        <div className="product-image-container-search"><img alt="" className="product-image-search rounded" src={image} /></div>
//       <icon onClick={showModal} 
//         className="btn btn-sm glyphicon edit-btn glyphicon-plus"></icon>
//       <h4>{name}</h4>
//       <span>List Price: {price}</span><br />
//       <span>{code}</span>
//       <div className="product-description"><p>{description}</p></div>
//       <div className="modal-container">
//           <Modal
//             show={show}
//             onHide={closeModal}
//             container={container}
//             aria-labelledby="contained-modal-title"
//           >
//           <Modal.Body>
//             Are You sure you want to add {name} to your product list?
//           </Modal.Body>
//           <Modal.Footer>
//             <Button onClick={closeModal}>Close</Button>
//             <Button onClick={addProduct}>Add</Button>
//           </Modal.Footer>
//         </Modal>
//       s</div>
//     </div>
//   );


export default ProductCardSearch;
