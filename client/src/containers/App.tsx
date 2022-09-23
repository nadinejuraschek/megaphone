import { setAuthorizationToken, setCurrentUser } from '../store/actions/auth';

import Footer from './Footer';
import Main from './Main';
import Navbar from './Navbar';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { configureStore } from '../store';
import jwtDecode from 'jwt-decode';

const store = configureStore();

if (localStorage.jwtToken) {
  setAuthorizationToken(localStorage.jwtToken);
  try {
    // prevent manual tempering with jwtToken key in localStorage
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
  }
}

const App = (): JSX.Element => (
  <Provider store={store}>
    <Router>
      <div className='onboarding'>
        <Navbar />
        <Main />
        <Footer />
      </div>
    </Router>
  </Provider>
);

export default App;
