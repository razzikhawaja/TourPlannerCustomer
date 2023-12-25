import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css'; // Import your global styles
import Home from './views/Home'; // Import your Home view
import CustomerDashboard from './views/CustomerDashboard'; // Import your CustomerDashboard view
import TourDetailsView from './views/TourDetails'; // Import your TourDetails view

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/dashboard" component={CustomerDashboard} />
          <Route path="/tour/:tourId" component={TourDetailsView} />
          {/* Add more routes for different views */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
