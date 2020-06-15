import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => (
  <>
    <GridTemplate cardType="notes">
      {notes.map((note) => (
        <Card
          cardType="notes"
          id={note.id}
          title={note.title}
          content={note.content}
          created={note.created}
          key={note.id}
        />
      ))}
    </GridTemplate>
  </>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      created: PropTypes.string,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = ({ notes }) => ({ notes });

export default connect(mapStateToProps)(Notes);
