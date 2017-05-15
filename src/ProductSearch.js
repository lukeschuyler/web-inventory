import React, { Component } from 'react';
import axios from 'axios'
import ProductCardSearch from './ProductCardSearch.js'


class ProductSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      products: [],
      show: false,
      loading: false
    }
  }

  search(e) {
    this.setState({loading: true})
    e.preventDefault()
    axios.post(`https://inventory-manager-ls.herokuapp.com/api/v1/search`, { query: this.state.query })
    .then(res => {
      this.setState({products: res.data, loading: false})
    })
  }

  addProduct() {

  }

  render() {
    let loading = this.state.loading
    if (!loading) {
    return (
        <div>
          <div className="container">
            <form>
              <input onChange={(e) => { this.setState({query: e.target.value}) }}  placeholder="Search For New Products!" className="form-control"/>
              <button onClick={(e) => { this.search(e) } } className="btn btn-primary">Search</button>
            </form>
          </div>
          <div className="container product-list-container">
            <h1>Search Products</h1>
            <hr />
            <div className="row">
              {this.state.products.map((p, i) => 
                <ProductCardSearch 
                  key={p.ASIN[0]}
                  price={p.ItemAttributes[0].ListPrice[0].FormattedPrice[0]}
                  image={p.ImageSets[0].ImageSet[0].MediumImage[0].URL[0]}
                  name={p.ItemAttributes[0].Title[0]}
                  code={p.ItemAttributes[0].UPC[0]}
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
    } else {
      return (
        <div className="container">
          <form>
            <input onChange={(e) => { this.setState({query: e.target.value}) }}  placeholder="Search For New Products!" className="form-control"/>
            <button onClick={(e) => { this.search(e) } } className="btn btn-primary">Search</button>
          </form>
        </div>
      )
    } 
  }
}

export default ProductSearch;
