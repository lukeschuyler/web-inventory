import React, { Component } from 'react';
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import SalesSession from 'SalesSession.js'
import Sales from './Sales.js'
import Receiving from './Receiving.js'
import RecSession from 'RecSession.js'
import Inventory from './Inventory'
import Waste from './Waste'
import InvSession from './InvSession'
import WasteSession from './WasteSession'

class Sessions extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let products = this.state.recSession
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

export default Sessions;
