import React from 'react';
import { Link } from 'react-router-dom';
import UserPageTemplate from 'templates/UserPageTemplate';
import PropTypes from 'prop-types';
import Button from 'components/atoms/Button/Button';
import styled from 'styled-components';

const LinkButton = styled(Button)`
  margin: 50px 20px;
  padding: 10px;
  text-decoration: none;
`;

const CardDetailsTemplate = ({ children, cardType }) => (
  <UserPageTemplate cardType={cardType}>
    {children}
    <LinkButton secondary as={Link} to={`/${cardType}`}>
      go back
    </LinkButton>
  </UserPageTemplate>
);

CardDetailsTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  cardType: PropTypes.string.isRequired,
};

export default CardDetailsTemplate;
