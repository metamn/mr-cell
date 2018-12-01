import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CellList from './CellList';

storiesOf('CellList', module)
  .add('empty', () => <CellList />)
  .add('loading', () => <CellList width={'10vw'} loading={true} />);
