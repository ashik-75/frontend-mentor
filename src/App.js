import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import C_2 from './screens/c-2/C_2';
import C_1 from './screens/c_1/C_1';
import C_3 from './screens/c_3/C_3';

const App = () => {
  return (
    <Router>
      <Route path="/c-3" component={C_3} />
      <Route path="/c-1" component={C_1} />
      <Route path="/c-2" component={C_2} />
    </Router>
  );
};

export default App;
