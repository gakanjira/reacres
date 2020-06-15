import React from 'react';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'hoc/withContext';

const StyledWrapper = styled.div`
  border-left: 5px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 999;
  position: fixed;
  display: flex;
  padding: 100px 50px;
  justify-content: space-evenly;
  flex-direction: column;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  background-color: #fff;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.3);
  transform: translate(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
`;

const StyledTextArea = styled(Input)`
  margin: 30px 0 100px;
  border-radius: 20px;
  height: 30vh;
`;

const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper activeColor={pageContext} isVisible={isVisible}>
    <Heading big>Create new {pageContext} </Heading>
    <Input placeholder="title" />
    {pageContext === 'articles' ? <Input placeholder="link" /> : null}
    <StyledTextArea as="textarea" placeholder="content" />
    <Button onClick={() => addItem()}>Add note</Button>
  </StyledWrapper>
);

NewItemBar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
  addItem: PropTypes.func.isRequired,
  isVisible: PropTypes.bool,
};

NewItemBar.defaultProps = {
  pageContext: 'notes',
  isVisible: false,
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (id, content) => dispatch(addItemAction(id, content)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
