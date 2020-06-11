import React from 'react';
import CardDetailsTemplate from 'templates/CardDetailsTemplate';
import PropTypes from 'prop-types';
import CardPreview from 'components/molecules/CardPreview/CardPreview';
import { routes } from 'routes';

class CardDetailPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pageType: 'notes',
    };
  }

  componentDidMount() {
    const { match } = this.props;
    if (routes.article === match.path) {
      this.setState({
        pageType: 'articles',
      });
    } else if (routes.note === match.path) {
      this.setState({
        pageType: 'notes',
      });
    } else if (routes.twitter === match.path) {
      this.setState({
        pageType: 'twitters',
      });
    }
  }

  render() {
    const { pageType } = this.state;

    return (
      <CardDetailsTemplate cardType={pageType}>
        <CardPreview cardType={pageType} />
      </CardDetailsTemplate>
    );
  }
}

CardDetailPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default CardDetailPage;
