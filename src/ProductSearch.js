import React, { Component } from 'react';
import axios from 'axios'
import ProductCardSearch from './ProductCardSearch.js'


class ProductSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      products: [],
      show: false
    }
  }

  search(e) {
    e.preventDefault()
    axios.post(`https://inventory-manager-ls.herokuapp.com/api/v1/search`, { query: this.state.query })
    .then(res => {
      console.log(res.data)
      this.setState({products: res.data})
    })
  }

  addProduct() {

  }

  render() {
    return (
      <div>
        <div className="container">
          <form>
            <input onChange={(e) => { this.setState({query: e.target.value}) }}  placeholder="Search For New Products!" className="form-control"/>
            <button onClick={(e) => { this.search(e) } } className="btn btn-primary">Search</button>
          </form>
        </div>
        <div className="container product-list-container">
          <h1>Product List</h1>
          <hr />
          <div className="row">
            {this.state.products.map((p, i) => 
              <ProductCardSearch 
                key={p.id}
                price={p.price}
                image={p.image}
                name={p.name}
                code={p.upc_code}
                description={p.description}
                id={p.id}
                addProduct={this.addProduct}
                showModal={ () => { this.setState({show: true}) } }
                closeModal={() => { this.setState({ show: false }) }}
                show={this.state.show}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductSearch;
