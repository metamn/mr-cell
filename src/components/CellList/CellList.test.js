import React from 'react';

import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

import CellList from './CellList';

describe('CellList', function() {
	it('should support `em` units', () => {
		const wrapper = renderer.create(
			<CellList width={'10em'} numberOfElements={5} />
		).toJSON();
		expect(wrapper).toHaveStyleRule('width', '10em');
	});
});
