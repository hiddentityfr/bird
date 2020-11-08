import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Administration from './administration';
import CreationOffre from './creation-offre';
import Offres from './offres';
import Candidats from './candidats';

const Home = (): JSX.Element => {
  return (
    <Router>
      <Route exact path="/" component={Administration} />
      <Route exact path="/creation-offre" component={CreationOffre} />
      <Route exact path="/offres" component={Offres} />
      <Route exact path="/candidats" component={Candidats} />
    </Router>
  );
};

export default Home;
