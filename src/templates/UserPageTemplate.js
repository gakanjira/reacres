import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ cardType, children }) => (
  <>
    <Sidebar cardType={cardType} />
    {children}
  </>
);

UserPageTemplate.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  children: PropTypes.element.isRequired,
};

UserPageTemplate.defaultProps = {
  cardType: 'note',
};

export default UserPageTemplate;
