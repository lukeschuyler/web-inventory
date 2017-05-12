/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home'
import Sessions from './Sessions.js'
import Products from './Products'
import ProductSearch from './ProductSearch'
import { Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home}/>
      <Route path="/session" component={Sessions} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/search" component={ProductSearch} />
    </App>
  </BrowserRouter>
),
  document.getElementById('root')
);

      // <Route path="/inventory" component={Inventory} />
      // <Route path="/waste" component={Waste} />
