import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './pages/Home';
import Purchase from './pages/Purchase';

export default function Routes () {
  return (
    <Router>
      <Route path="/" exact component={Home} />
      <Route path="/purchase" component={Purchase} />
    </Router>  
  )
}