import { Route, BrowserRouter  as Router, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Cities from './components/Cities';
import NotFound from './components/NotFound';
import CityDetails from './components/CityDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/cities" component={Cities} />
          <Route exact path="/cities/:id" component={CityDetails} />
          <Route component={NotFound} />
        </Switch>
      </Router>    
    </div>
  );
}

export default App;
