/* eslint-disable */

import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


class WasteSession extends Component {


  render() {
    return (
      <div className="container">
        <div>
          <h2>Waste Session  {this.props.match.params.session}</h2>
        </div>
      </div>
    );
  }
}

export default WasteSession;
