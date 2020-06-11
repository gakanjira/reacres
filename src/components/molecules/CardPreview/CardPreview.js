import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';

const CardPreviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 60vh;
  padding: 50px;
`;

const CardPreviewLink = styled.a`
  color: black;
  margin-bottom: 50px;
`;

const CardPreviewParagraph = styled(Paragraph)`
  margin-bottom: 75px;
`;

const CardPreviewHeading = styled(Heading)`
  margin-bottom: 10px;
`;

const CardPreviewButton = styled(Button)`
  margin-top: 50px;
`;

const CardPreviewImage = styled.img`
  position: absolute;
  right: 50px;
  top: 50px;
  border-radius: 50%;
  width: 125px;
  height: 125spx;
`;

const CardPreview = ({ cardType }) => (
  <CardPreviewWrapper>
    {cardType === 'twitters' ? <CardPreviewImage src="http://twivatar.glitch.me/perkz" /> : null}
    <CardPreviewHeading big>Card Name</CardPreviewHeading>
    <CardPreviewParagraph>Created at - 2010.01.02</CardPreviewParagraph>
    <Paragraph>
      Card content Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora mollitia quam
      ipsa quisquam ducimus deleniti explicabo impedit tempore, animi error, incidunt beatae quae
      rem, ea expedita atque? At, nobis iste.
    </Paragraph>
    {cardType === 'notes' ? null : <CardPreviewLink href="#">link to</CardPreviewLink>}
    <CardPreviewButton>CLOSE/SAVE</CardPreviewButton>
  </CardPreviewWrapper>
);

CardPreview.propTypes = {
  cardType: PropTypes.string,
};

CardPreview.defaultProps = {
  cardType: 'notes',
};

export default CardPreview;
