import React from 'react';
import { storiesOf } from '@storybook/react';
import Card from './Card';

storiesOf('Card', module)
  .add('Primary', () => <Card />)
  .add('secondary', () => <Card cardType="twitter" />)
  .add('tertiary', () => <Card cardType="article" />);
