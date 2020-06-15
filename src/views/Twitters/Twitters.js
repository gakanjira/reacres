import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Twitters = ({ twitters }) => (
  <>
    <GridTemplate cardType="twitters">
      {twitters.map((twitter) => (
        <Card
          cardType="twitters"
          id={twitter.id}
          title={twitter.title}
          content={twitter.content}
          twitterName={twitter.twitterName}
          created={twitter.created}
          key={twitter.id}
        />
      ))}
    </GridTemplate>
  </>
);

Twitters.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      twitterName: PropTypes.string,
      created: PropTypes.string,
    }),
  ),
};

Twitters.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({
  twitters,
});

export default connect(mapStateToProps)(Twitters);
