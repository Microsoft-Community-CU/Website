import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// importing pages 
import Index from './pages/index'

const App = props => {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/" component={Index} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
