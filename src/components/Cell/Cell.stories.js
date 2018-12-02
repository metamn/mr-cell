import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';

import Cell from './Cell';

storiesOf('Cell', module)
  .add('loading', () => <Cell loading={true} />)
  .add('with content', () => <Cell content={'1'} />)
