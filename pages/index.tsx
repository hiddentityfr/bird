import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Administration from './administration';
import Candidats from './candidats';
import Accueil from './accueil';
import NouvelleOffre from './nouvelle-offre';
import Offres from './offres';

const Home = (): JSX.Element => {
  return (
    <Router>
      <Route exact path="/" component={Administration} />
      <Route exact path="/nouvelle-offre" component={NouvelleOffre} />
      <Route exact path="/offres" component={Offres} />
      <Route exact path="/candidats" component={Candidats} />
      <Route exact path="/accueil" component={Accueil} />
    </Router>
  );
};

export default Home;
