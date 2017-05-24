/* eslint-disable */

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './Home'
import Sessions from './Sessions.js'
import Products from './Products'
import ProductSearch from './ProductSearch'
import Login from './Login'
import Register from './Register'
import { Route, BrowserRouter } from 'react-router-dom'
import './index.css';
import '../node_modules/react-bootstrap-table/dist/react-bootstrap-table-all.min.css'

ReactDOM.render((
  <BrowserRouter>
    <App>
      <Route exact path="/" component={Home}/>
      <Route path="/sessions" component={Sessions} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route exact path="/products" component={Products} />
      <Route exact path="/products/search" component={ProductSearch} />
    </App>
  </BrowserRouter>
),
  document.getElementById('root')
);
