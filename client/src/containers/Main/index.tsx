import { Errors, ICurrentUser } from '../../types';
import { Route, Switch, withRouter } from 'react-router-dom';

import AuthForm from '../../components/AuthForm';
import Home from '../../components/Home';
import MessageForm from '../MessageForm';
import { authUser } from '../../store/actions/auth';
import { connect } from 'react-redux';
import { removeError } from '../../store/actions/errors';
import styles from './main.module.css';
import withAuth from '../../hocs/withAuth';

export interface IMain {
  authUser: () => void;
  currentUser: ICurrentUser;
  errors: Errors;
  removeError: () => void;
}

const Main = ({
  authUser,
  currentUser,
  errors,
  removeError,
}: IMain): JSX.Element => (
  <main className={styles.main}>
    <Switch>
      <Route
        exact
        path='/'
        render={props => <Home currentUser={currentUser} {...props} />}
      />

      <Route
        exact
        path='/signin'
        render={props => {
          return (
            <div className={styles.container}>
              <AuthForm
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='Sign In'
                heading='Welcome Back!'
                {...props}
              />
            </div>
          );
        }}
      />
      <Route
        exact
        path='/register'
        render={props => {
          return (
            <div className={styles.container}>
              <AuthForm
                register
                removeError={removeError}
                errors={errors}
                onAuth={authUser}
                buttonText='Sign Me Up!'
                heading='Join Megaphone today.'
                {...props}
              />
            </div>
          );
        }}
      />
      <Route
        exact
        path='/users/:id/messages/new'
        component={withAuth(MessageForm)}
      />
    </Switch>
  </main>
);

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    errors: state.errors,
  };
}

export default withRouter(
  connect(mapStateToProps, { authUser, removeError })(Main)
);
