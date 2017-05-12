import React, { Component } from 'react';
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class SalesSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
      salesSession: []
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/sales_line_items/from/${this.props.match.params.session}`)
    .then(res => {
      console.log(res)
      let itemArray = []
      res.data.forEach(item => {
        item.product.quantity = item.quantity
        itemArray.push(item.product)
      })
      this.setState({ salesSession: itemArray })
    })
  }

  render() {
    let products = this.state.salesSession
    return (
      <div className="container">
        <BootstrapTable data={products} striped={ true } hover={ true } condensed={ true }>
            <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='upc_code'>UPC Code</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='price'>Price</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='measure'>Measure</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='quantity'>QTY/Weight</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default SalesSession;