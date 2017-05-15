import React, { Component } from 'react';
import axios from 'axios'
import ProductCardSearch from './ProductCardSearch.js'


class ProductSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      products: [],
      loading: false
    }
  }

  search(e) {
    this.setState({loading: true})
    e.preventDefault()
    // axios.post(`http://localhost:8082/api/v1/search`, { query: this.state.query })
    axios.post(`https://inventory-manager-ls.herokuapp.com/api/v1/search`, { query: this.state.query })
    .then(res => {
      console.log(res.data)
      this.setState({ products: res.data, loading: false })
    })
  }

  render() {
    let loading = this.state.loading
    return (
      <div>
        <div className="container">
          <form>
            <input value={this.state.query} onChange={(e) => { this.setState({query: e.target.value}) }  }  placeholder="Search For New Products!" className="form-control"/>
            <button onClick={(e) => { this.search(e) } } className="btn btn-primary">Search</button>
          </form>
        </div>
        <div className="container product-list-container">
          <h1>Search Products</h1>
          <hr />
          <div className="row">
            {this.state.products.map((p, i) => 
              <ProductCardSearch 
                key={p.ASIN}
                price={p.price}
                image={p.image}
                name={p.name}
                code={p.UPC}
                description={p.description}
              />
            )}
          </div>
        </div>
      </div>
    );      
  }
}

export default ProductSearch;
