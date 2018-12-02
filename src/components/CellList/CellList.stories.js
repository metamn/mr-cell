import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import CellList from './CellList';

storiesOf('CellList', module)
  .add('empty', () => <CellList width={'10vw'} />)
  .add('loading', () => <CellList width={'10vw'} numberOfElements={5} loading={true} />)
  .add('single line - horizontal', () => <CellList width={'90vw'} numberOfElements={5} />)
  .add('single line - vertical', () => <CellList height={'90vh'} numberOfElements={15} />)
  .add('single line - horizontal 2', () => <CellList width={'90vw'} height={'20vh'} numberOfElements={5} />)
  .add('single line - vertical 2', () => <CellList width={'29vw'} height={'80vh'} numberOfElements={12} />)
  .add('square', () => <CellList width={'30vw'} height={'30vh'} numberOfElements={15} />)
  .add('rectangle - horizontal', () => <CellList width={'90vw'} height={'20vh'} numberOfElements={100} />)
  .add('rectangle - vertical', () => <CellList width={'30vw'} height={'80vh'} numberOfElements={120} />)
