import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';
import withContext from 'hoc/withContext';

const LinkButton = styled(Button)`
  margin: 50px 20px;
  padding: 10px;
  text-decoration: none;
`;

const CardDetailsTemplate = ({ children, pageType }) => (
  <UserPageTemplate pageType={pageType}>
    {children}
    <LinkButton secondary as={Link} to={`/${pageType}`}>
      go back
    </LinkButton>
  </UserPageTemplate>
);

CardDetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.string.isRequired,
};

export default withContext(CardDetailsTemplate);
