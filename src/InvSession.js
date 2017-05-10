import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class InvSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invSession: []
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/inv_line_items/from/${this.props.match.params.session}`)
    .then(res => {
      let itemArray = []
      res.data.forEach(item => {
        item.product.quantity = item.quantity
        itemArray.push(item.product)
      })
      this.setState({ invSession: itemArray })
    })
  }

  render() {
    let products = this.state.invSession
    return (
      <div className="container">
        <BootstrapTable data={products} striped={ true } hover={ true } condensed={ true }>
            <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataField='upc_code'>UPC Code</TableHeaderColumn>
            <TableHeaderColumn dataField='price'>Price</TableHeaderColumn>
            <TableHeaderColumn dataField='measure'>Measure</TableHeaderColumn>
            <TableHeaderColumn dataField='quantity'>QTY/Weight</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default InvSession;
