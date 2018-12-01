import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/**
 * The cell container
 */
const Container = styled.div``;

export default class Cell extends React.Component {
	render() {
		const className = this.props.className;

		return (
			<Container className={className}>{className}</Container>
		)
	}
}
