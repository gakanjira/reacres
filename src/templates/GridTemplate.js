import React from 'react';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import UserPageTemplate from 'templates/UserPageTemplate';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import plusIcon from 'assets/icons/plus.svg';

const StyledWrapper = styled.div`
  position: relative;
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

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  border-radius: 50%;
  z-index: 999999999;
`;

class GridTemplate extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isNewItemBarVisible: false,
    };
  }

  handleNewItemBarToggle = () => {
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));
  };

  render() {
    const { pageContext, children } = this.props;
    const { isNewItemBarVisible } = this.state;
    return (
      <UserPageTemplate pageContext={pageContext}>
        <StyledWrapper>
          <StyledPageHeader>
            <Input search placeholder="search" />
            <StyledHeading big>{pageContext}s</StyledHeading>
            <Paragraph># {pageContext}s</Paragraph>
          </StyledPageHeader>
          <GridWrapper>{children}</GridWrapper>
          <NewItemBar isVisible={isNewItemBarVisible} />
          <StyledButtonIcon
            activeColor={pageContext}
            icon={plusIcon}
            onClick={this.handleNewItemBarToggle}
          />
        </StyledWrapper>
      </UserPageTemplate>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.Object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
