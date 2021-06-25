import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import {
  Home,
  Characters,
  Episodes,
  Locations,
  Terms,
  Privacy,
} from './pages/index';

const Navbar = lazy(() => import('./components/Navbar.js'));
const Footer = lazy(() => import('./components/Footer.js'));

function App() {
  return (
    <div>
      <Suspense fallback={<p>Loading...</p>}>
        <Navbar />
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
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
