import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Administration from './administration';

const Home = (): JSX.Element => {
  return (
    <Router>
      <Route exact path="/" component={Administration} />
    </Router>
  );
};

export default Home;
