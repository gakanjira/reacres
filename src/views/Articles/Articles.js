import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from 'components/molecules/Card/Card';
import GridTemplate from 'templates/GridTemplate';

const Articles = ({ articles }) => (
  <>
    <GridTemplate cardType="articles">
      {articles.map((article) => (
        <Card
          cardType="articles"
          id={article.id}
          title={article.title}
          content={article.content}
          articleUrl={article.articleUrl}
          created={article.created}
          key={article.id}
        />
      ))}
    </GridTemplate>
  </>
);

Articles.propTypes = {
  articles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      title: PropTypes.string,
      content: PropTypes.string,
      articleUrl: PropTypes.string,
      created: PropTypes.string,
    }),
  ),
};

Articles.defaultProps = {
  articles: [],
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);
