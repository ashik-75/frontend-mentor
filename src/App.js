import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import C_1 from './screens/c_1/C_1';

const App = () => {
  return (
    <Router>
      <Route path="/" component={C_1} />
    </Router>
  );
};

export default App;
