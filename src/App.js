import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import StatsPage from './pages/StatsPage';
import AddPlayerPage from './pages/AddPlayerPage';
import DetailsPage from "./pages/DetailsPage"


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <StatsPage />
        </Route>
        <Route exact path="/add">
          <AddPlayerPage/>
        </Route>
        <Route exact path ="/player/:id">
          <DetailsPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
