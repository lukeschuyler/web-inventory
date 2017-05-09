import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home'
import Inventory from './Inventory'
import Waste from './Waste'
import InvSession from './InvSession'
import WasteSession from './WasteSession'
import { Route, BrowserRouter } from 'react-router-dom'
import './index.css';

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home}/>
      <Route exact path="/inventory" component={Inventory} />
      <Route exact path="/waste" component={Waste} />
      <Route path="/inventory/:session" component={InvSession} />
      <Route path="/waste/:session" component={WasteSession} />
    </App>
  </BrowserRouter>
),
  document.getElementById('root')
);
