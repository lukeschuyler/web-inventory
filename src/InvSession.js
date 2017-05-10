import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class InvSession extends Component {
  constructor(props) {
    super(props)
    this.state = {
      invSession: {}
    }
  }

  componentDidMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/inv_sessions/${this.props.match.params.session}`)
    .then(res => {
      console.log(res.data)
    })
  }

  render() {
    let { products } = this.state.invSession
    return (
      <BootstrapTable data={products} striped={ true } hover={ true } condensed={ true } scrollTop={'Bottom'}>
          <TableHeaderColumn isKey dataField='id'>Product ID</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}

export default InvSession;
