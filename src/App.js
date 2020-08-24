import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'

// importing pages 
import Index from './pages/index'
import Coreform from './pages/core.team.form'
import Team from './pages/team'

// importing components
import Navbar from './components/navbar'
import Drawer from './components/drawer'

const App = props => {
  return (
    <div>

      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Index />
          </Route>

          <Route exact path="/form">
            <Coreform />
          </Route>

          <Route exact path="/team">
            <Team />
          </Route>
        </Switch>
        <Drawer />
      </Router>

    </div>
  );
}

export default App;
