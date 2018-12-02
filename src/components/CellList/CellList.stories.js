import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import '@storybook/addon-console';

import CellList from './CellList';

const stories = storiesOf('Cell List', module);

stories.add('empty', () => <CellList width={'10vw'} />);
stories.add('loading', () => <CellList width={'10vw'} numberOfElements={5} loading={true} />);

stories.add('single line - horizontal', () => {
	const width = '90vw';
	const numberOfElements = 5;
	return (
		<CellList width={width} numberOfElements={numberOfElements} />
	)
});

stories.add('single line - vertical', () => {
	const height = '90vh';
	const numberOfElements = 15;
	return (
		<CellList height={height} numberOfElements={numberOfElements} />
	)
});

stories.add('single line - horizontal 2', () => <CellList width={'90vw'} height={'20vh'} numberOfElements={5} />)
stories.add('single line - vertical 2', () => <CellList width={'29vw'} height={'80vh'} numberOfElements={12} />)
stories.add('square', () => <CellList width={'30vw'} height={'30vh'} numberOfElements={15} />)
stories.add(
	  'rectangle - horizontal',
	  () => <CellList width={'400px'} height={'33vh'} numberOfElements={91} />,
	  {
		  notes: 'To Fix: with `px` things got truncated',
	  }
  	)
stories.add('rectangle - vertical', () => <CellList width={'30%'} height={'80%'} numberOfElements={121} />)
