import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 85px;
`;

const StyledPageHeader = styled.div`
  margin: 0 0 5px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const GridTemplate = ({ cardType, children }) => (
  <UserPageTemplate cardType={cardType}>
    <StyledWrapper>
      <StyledPageHeader>
        <Input search placeholder="search" />
        <StyledHeading big>{cardType}s</StyledHeading>
        <Paragraph># {cardType}s</Paragraph>
      </StyledPageHeader>
      <GridWrapper>{children}</GridWrapper>
    </StyledWrapper>
  </UserPageTemplate>
);

GridTemplate.propTypes = {
  cardType: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  children: PropTypes.arrayOf(PropTypes.Object).isRequired,
};

GridTemplate.defaultProps = {
  cardType: 'notes',
};

export default GridTemplate;
