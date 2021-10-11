import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import C_2 from './screens/c-2/C_2';
import C_1 from './screens/c_1/C_1';
import C_3 from './screens/c_3/C_3';
import C_4 from './screens/c_4/C_4';
import C_5 from './screens/c_5/C_5';
import Test from './screens/tester/Test';

const App = () => {
  return (
    <Router>
      <Route path="/test" component={Test} />
      <Route path="/c-5" component={C_5} />
      <Route path="/c-4" component={C_4} />
      <Route path="/c-3" component={C_3} />
      <Route path="/c-2" component={C_2} />
      <Route path="/c-1" component={C_1} />
    </Router>
  );
};

export default App;
