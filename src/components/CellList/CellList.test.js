import React from 'react';

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import CellList from './CellList';

describe('CellList container', function() {
	it('should not overflow', () => {
		const wrapper = renderer.create(<CellList height={'300px'} numberOfElements={5} />).toJSON();
		expect(wrapper).toHaveStyleRule('overflow', 'hidden');
	});

	it('should support mixed units like `%` for width, `px` for height', () => {
		const wrapper = renderer.create(<CellList width={'30%'} height={'300px'} numberOfElements={5} />).toJSON();
		expect(wrapper).toHaveStyleRule('height', '300px');
		expect(wrapper).toHaveStyleRule('width', '30%');
	});

	it('should support `px` units', () => {
		const wrapper = renderer.create(<CellList height={'300px'} numberOfElements={5} />).toJSON();
		expect(wrapper).toHaveStyleRule('height', '300px');
	});

	it('should support `%` units', () => {
		const wrapper = renderer.create(<CellList height={'10%'} numberOfElements={5} />).toJSON();
		expect(wrapper).toHaveStyleRule('height', '10%');
	});

	it('should support `vh` units', () => {
		const wrapper = renderer.create(<CellList height={'10vh'} numberOfElements={5} />).toJSON();
		expect(wrapper).toHaveStyleRule('height', '10vh');
	});

	it('should support `vh` units', () => {
		const wrapper = renderer.create(<CellList height={'10vh'} numberOfElements={5} />).toJSON();
		expect(wrapper).toHaveStyleRule('height', '10vh');
	});

	it('should support `em` units', () => {
		const wrapper = renderer.create(<CellList width={'10em'} numberOfElements={5} />).toJSON();
		expect(wrapper).toHaveStyleRule('width', '10em');
	});
});
