import React from 'react';
import PageContext from 'context';

const withContext = (Component) => {
  const contextComponent = (props) => {
    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
    );
  };
  return contextComponent;
};

export default withContext;
