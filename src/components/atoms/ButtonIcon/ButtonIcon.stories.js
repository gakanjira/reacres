import React from 'react';
import { storiesOf } from '@storybook/react';
import styled from 'styled-components';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import plusIcon from 'assets/icons/plus.svg';
import magnifierIcon from 'assets/icons/magnifier.svg';
import twitterIcon from 'assets/icons/twitter.svg';

import ButtonIcon from './ButtonIcon';

const YellowBg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  background-color: ${({ theme }) => theme.note};
`;

storiesOf('ButtonIcon', module)
  .addDecorator((story) => <YellowBg>{story()}</YellowBg>)
  .add('BulbIcon', () => <ButtonIcon icon={bulbIcon} />)
  .add('BulbIcon', () => <ButtonIcon icon={bulbIcon} />)
  .add('LogoutIcon', () => <ButtonIcon icon={logoutIcon} />)
  .add('PenIcon', () => <ButtonIcon icon={penIcon} />)
  .add('PlusIcon', () => <ButtonIcon icon={plusIcon} />)
  .add('MagnifierIcon', () => <ButtonIcon icon={magnifierIcon} />)
  .add('TwitterIcon', () => <ButtonIcon icon={twitterIcon} />);
