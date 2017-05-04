import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class Inventory extends Component {
  constructor(props) {
    super();
    this.state = {
      invSessions: []
    }
  }

  componentWillMount() {
    axios.get(`https://inventory-manager-ls.herokuapp.com/api/v1/inv_sessions`)
    .then(res => {
      this.setState({invSessions: res.data})
    })
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Inventory</h2>
        </div>
        <ul>
          {this.state.invSessions.map((session, key) => 
              <li key={key}>
              <h4>{session.name}</h4>
              <h6>{session.date}</h6>
              <Link to={'inventory/' + session.id}>View</Link>
              <p>{session.description}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default Inventory;
