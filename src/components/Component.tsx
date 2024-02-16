import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({ children }: any) => (
  <div>
    {children}
  </div>
);

MyComponent.propTypes = {
  children: PropTypes.node,
};

export default MyComponent;
