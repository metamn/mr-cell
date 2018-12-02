import React from 'react';

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import { shallow, mount, render } from 'enzyme';

import CellList from './CellList';

describe('CellList', function() {
	it('should support `em` units', () => {
		const wrapper = shallow(
			<CellList width={'10em'} numberOfElements={5} />
		);
		expect(wrapper.find('.cell-list').length).toBe(1);
	});
});
