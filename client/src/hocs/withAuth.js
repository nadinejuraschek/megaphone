import React, { useEffect } from 'react';

import { connect } from 'react-redux';

export default function withAuth(ComponentToBeRendered) {
  const Authenticate = props => {
    const { history, isAuthenticated } = props;
    useEffect(() => {
      if (isAuthenticated === false) {
        history.push('/signin');
      };
    }, [ history, isAuthenticated ]);

    return (
      <ComponentToBeRendered {...props} />
    );
  };

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.currentUser.isAuthenticated,
    };
  };

  return connect(mapStateToProps)(Authenticate);
};