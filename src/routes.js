import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home/index.jsx';
import Purchase from './pages/Purchase/index.jsx';

export default function Routes () {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/purchase" component={Purchase} />
    </Router>  
  )
}