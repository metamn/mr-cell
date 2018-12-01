import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import CellList from './components/CellList';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
`;

export default class App extends React.Component {
	render() {
		return (
			<Container>
				<CellList />
			</Container>
		)
	}
}
