import React from 'react';
import { addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme/MainTheme';
import { MemoryRouter } from 'react-router';

addDecorator((story) => <ThemeProvider theme={theme}>{story()}</ThemeProvider>);
addDecorator((story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>);
