import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Landing from './pages/Landing';
import Home from './pages/Home';
import Header from './components/Header';


function App() {
  return (

    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
