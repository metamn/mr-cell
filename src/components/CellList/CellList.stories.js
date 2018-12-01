import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CellList from './CellList';

storiesOf('CellList', module)
  .add('empty', () => <CellList width={'10vw'} />)
  .add('loading', () => <CellList width={'10vw'} numberOfElements={5} loading={true} />)
  .add('horizontal', () => <CellList width={'10vw'} numberOfElements={5} />)
