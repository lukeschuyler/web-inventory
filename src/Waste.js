/* eslint-disable */

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import WasteSession from './WasteSession.js'


class Waste extends Component {
  constructor(props) {
    super();
    this.state = {
      wasteSessions: props.sessions
    }
    this.colFormatter = this.colFormatter.bind(this)
    this.dateFormatter = this.dateFormatter.bind(this)
  }

  componentWillUpdate(nextProps, nextState) {
      nextState.wasteSessions = nextProps.sessions;
  }


  colFormatter(cell, row) {
    return (
      <div>
        <Link to={`${this.props.match.url}/${row.id}`}>
          View
        </Link>
      </div>
    )
  }

  dateFormatter(cell, row) {
    cell = new Date(cell)
    return `${('0' + (cell.getMonth() + 1)).slice(-2)}/${('0' + cell.getDate()).slice(-2)}/${cell.getFullYear()}`;
  }


  render() {
    let wasteSessions = this.state.wasteSessions
    return (
      <div>
        <Route exact path={this.props.match.url} render={(props) => (
          <div className="container">
            <h1>Waste Sessions</h1>
            <hr />
            <BootstrapTable className="table" exportCSV data={wasteSessions} striped={ true } hover={ true } >
                <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
                <TableHeaderColumn dataFormat={ this.dateFormatter } dataSort={true} filter={ { type: 'RegexFilter' } } dataField='date'>Session Date</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } } dataField='username'>User</TableHeaderColumn>
                <TableHeaderColumn dataSort={true} dataField dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
            </BootstrapTable>
          </div>
        )}/>
        <Route path={`${this.props.match.url}/:session`} component={WasteSession} />
      </div>
      )
  }
}

export default Waste;
