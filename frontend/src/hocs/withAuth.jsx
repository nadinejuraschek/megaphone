import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const withAuth = ComponentToBeRendered => {
  const Authenticate = props => {
    const { isAuthenticated } = props;

    const history = useHistory();

    useEffect(() => {
      if (isAuthenticated === false) {
        history.push('/signin');
      }
    }, [history, isAuthenticated]);

    return <ComponentToBeRendered {...props} />;
  };

  const mapStateToProps = state => {
    return {
      isAuthenticated: state.currentUser.isAuthenticated,
    };
  };

  return connect(mapStateToProps)(Authenticate);
};

export default withAuth;
