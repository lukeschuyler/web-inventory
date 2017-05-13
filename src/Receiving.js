/* eslint-disable */

import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import RecSession from './RecSession.js'


class Receiving extends Component {
  constructor(props) {
    super();
    this.state = {
      recSessions: props.sessions
    }
    this.colFormatter = this.colFormatter.bind(this)
    this.dateFormatter = this.dateFormatter.bind(this)
  }

    componentWillUpdate(nextProps, nextState) {
      nextState.recSessions = nextProps.sessions;  
    }


  // componentWillMount() {
  //   axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/rec_sessions`)
  //   .then(res => {
  //     res.data.forEach(session => {
  //       let date = new Date(session.date)
  //       let newDate = date.getMonth() + 1 + '/' + date.getDate() + '/' +  date.getFullYear()
  //       let hours = date.getHours()
  //       let minutes = date.getMinutes()
  //       minutes < 10 ? minutes = '0' + minutes : minutes = minutes
  //       let time;
  //       if (date.getHours() < 12) {
  //        time = hours + ':' + minutes + ' AM' 
  //       } else {
  //        time = hours - 12 + ':' + minutes + ' PM'
  //       }
  //       session.date = '0' + newDate 
  //       session.time = time
  //     })
  //     this.setState({recSessions: res.data})
  //   })
  // }

colFormatter(cell, row) {
    return (
      <Link to={`${this.props.match.url}/${row.id}`}>
        View
      </Link>
    )
  }

  dateFormatter(cell, row) {
    cell = new Date(cell)
    return `${('0' + (cell.getMonth() + 1)).slice(-2)}/${('0' + cell.getDate()).slice(-2)}/${cell.getFullYear()}`;
  }


  render() {
    let recSessions = this.state.recSessions
    return (
    <div>
      <Route exact path={this.props.match.url} render={(props) => (
      <div className="container">
        <h1>Receiving Sessions</h1>
        <hr />
        <BootstrapTable data={recSessions} striped={ true } hover={ true } multiColumnSearch={ true }>
            <TableHeaderColumn dataSort={true} width="100" isKey dataField='id'>Session ID</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataFormat={ this.dateFormatter } filter={ { type: 'DateFilter' } }  dataField='date'>Session Date</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} filter={ { type: 'RegexFilter', delay: 200 } }  dataField='username'>User</TableHeaderColumn>
            <TableHeaderColumn dataSort={true} dataFormat={ this.colFormatter }>View Session</TableHeaderColumn>
        </BootstrapTable>
      </div>
      )}/>
    <Route path={`${this.props.match.url}/:session`} component={RecSession} />
    </div>
    );
  }
}

export default Receiving;
