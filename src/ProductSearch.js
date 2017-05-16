import React, { Component } from 'react';
import axios from 'axios'
import ProductCardSearch from './ProductCardSearch.js'


class ProductSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      products: [],
      notFound: false,
      searchType: 'Product Name'
    }
  }

  search(e) {
    e.preventDefault()
    axios.post(`https://inventory-manager-ls.herokuapp.com/api/v1/search`, { query: this.state.query })
    .then(res => {
      console.log(res)
      this.setState({ products: res.data, notFound: false })
    })
    .catch(err => {
      console.log(err.message)
      this.setState({notFound:true, products: []})
    })
  }

  render() {
    let notFound = this.state.notFound ? <h3>Item Not Found</h3> : ''
    return (
      <div>
        <div className="container">
          <form>
            <input value={this.state.query} onChange={(e) => { this.setState({query: e.target.value}) }  }  placeholder="Search" className="amazon-search form-control"/>
            <button onClick={(e) => { this.search(e) } } className="btn btn-primary">Search</button>
          </form>
        </div>
        <div className="container product-list-container">
          <hr />
          {notFound}
          <div className="row">
            {this.state.products.map((p, i) => 
              <ProductCardSearch 
                key={p.ASIN}
                price={p.price}
                image={p.image === 'No Image Available' ? 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/300px-No_image_available.svg.png' : p.image}
                name={p.name}
                code={p.UPC}
                description={p.description ? p.description : null}
              />
            )}
          </div>
        </div>
      </div>
    );      
  }
}

export default ProductSearch;
