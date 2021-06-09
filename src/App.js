import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Home,
  Characters,
  Episodes,
  Locations,
  Terms,
  Privacy,
} from './pages/index';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/characters' component={Characters} />
          <Route path='/episodes' component={Episodes} />
          <Route path='/locations' component={Locations} />
          <Route path='/terms-of-service' component={Terms} />
          <Route path='/privacy-policy' component={Privacy} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
