import React, { Component } from 'react';
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class RecSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
      recSession: []
    }
    console.log(this.props)
  }

  componentWillMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/rec_line_items/from/${this.props.match.params.session}`)
    .then(res => {
      let itemArray = []
      res.data.forEach(item => {
        item.product.quantity = item.quantity
        itemArray.push(item.product)
      })
      this.setState({ recSession: itemArray })
    })
  }

  render() {
    let products = this.state.recSession
    return (
      <div className="container">
        <BootstrapTable data={products} striped={ true } hover={ true } condensed={ true } multiColumnSearch={ true }>
            <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Product ID</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 1000 } }  dataField='name'>Product Name</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='upc_code'>UPC Code</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} filter={ { 
                                                        type: 'NumberFilter', 
                                                        delay: 200, 
                                                        numberComparators: [ '=', '>', '<=' ]
                                                      } } dataField='price'>Price</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='measure'>Measure</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataField='quantity'>QTY/Weight</TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}

export default RecSession;
