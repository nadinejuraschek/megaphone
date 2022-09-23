import { connect } from 'react-redux';
import { useEffect } from 'react';

const withAuth = ComponentToBeRendered => {
  const Authenticate = props => {
    const { history, isAuthenticated } = props;
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
