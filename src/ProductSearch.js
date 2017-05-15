import React, { Component } from 'react';
import axios from 'axios'
const amazon = require('amazon-product-api');
var client = amazon.createClient({
  awsId: "AKIAIERMF5H4LDOOQX4A",
  awsSecret: "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",
  awsTag: "fridge12-20"
});

class ProductSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ''
    }
  }

  search(e) {
    e.preventDefault()
    client.itemSearch({
      Keywords: this.state.query,
      ResponseGroup: 'Images, ItemAttributes'
    }).then(function(results){
      console.log(results);
    }).catch(function(err){
      console.log(err);
    });
  }

  render() {
    return (
      <div className="container">
        <form>
          <input onChange={(e) => { this.setState({query: e.target.value}) }}  placeholder="Search For New Products!" className="form-control"/>
          <button onClick={(e) => { this.search(e) } } className="btn btn-primary">Search</button>
        </form>
      </div>
    );
  }
}

export default ProductSearch;
