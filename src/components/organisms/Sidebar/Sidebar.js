import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import withContext from 'hoc/withContext';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 150px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, activeColor }) => (activeColor ? theme[activeColor] : theme.note)};
`;

const LogoWrapper = styled.div`
  margin: 50px 0 35px 0;
`;

const IconWrapper = styled.div`
  margin-bottom: auto;
`;

const LogoutIconWrapper = styled.div`
  margin-bottom: 15px;
`;

const NavIcon = styled(ButtonIcon)`
  margin: 25px 0;
`;

const Sidebar = ({ pageContext }) => (
  <SidebarWrapper activeColor={pageContext}>
    <LogoWrapper>
      <h1>logo</h1>
    </LogoWrapper>
    <IconWrapper>
      <NavIcon activeclass="active" as={NavLink} to="/notes" icon={penIcon} />
      <NavIcon activeclass="active" as={NavLink} to="/twitters" icon={twitterIcon} />
      <NavIcon activeclass="active" as={NavLink} to="/articles" icon={bulbIcon} />
    </IconWrapper>
    <LogoutIconWrapper>
      <NavIcon as={NavLink} to="/login" icon={logoutIcon} />
    </LogoutIconWrapper>
  </SidebarWrapper>
);

Sidebar.propTypes = {
  pageContext: PropTypes.oneOf(['notes', 'articles', 'twitters']),
};

Sidebar.defaultProps = {
  pageContext: 'notes',
};

export default withContext(Sidebar);
