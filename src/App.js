import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// importing pages 
import Index from './pages/index'

// importing components
import Navbar from './components/navbar'

const App = props => {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Index />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
