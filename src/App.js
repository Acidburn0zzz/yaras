import 'app.css';

import {
  combineReducers,
  createStore,
} from 'redux';
import {
  Link,
  Route,
  BrowserRouter as Router,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import ConnectedFontWeightTester from 'components/ConnectedFontWeightTester';
import ConnectedTypefaceTester from 'components/ConnectedTypefaceTester';
import Home from 'components/Home';
import logo from 'images/logo.svg';
import React, { Component } from 'react';
import settingsReducer from 'reducers/settings';

const reducer = combineReducers({
  settings: settingsReducer,
});

const store = createStore(
  reducer, {},
  /* eslint-disable no-underscore-dangle */
  /* istanbul ignore next */
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  /* eslint-enable no-underscore-dangle */
);

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="page">
            <div className="primary-nav-container">
              <nav className="primary">
                <Link className="logo-container" to="/">
                  <img className="logo" src={logo} alt="logo" />
                </Link>
                <ul>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/font-weight-tester">Font weight tester</Link></li>
                  <li><Link to="/typeface-tester">Typeface tester</Link></li>
                </ul>
              </nav>
            </div>
            <div className="page-content-container">
              <div className="page-content">
                <Route exact path="/" component={Home} />
                <Route path="/font-weight-tester" component={ConnectedFontWeightTester} />
                <Route path="/typeface-tester" component={ConnectedTypefaceTester} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
