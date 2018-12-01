import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/**
 * The cell container
 */
const Container = styled.div`
`;

/**
 * A loading container
 */
const Loading = styled.div``;


/**
 * The main class
 */
export default class Cell extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: this.isLoading(),
			content: this.props.content,
		};
	}

	isLoading() {
		return this.props.loading;
	}

	render() {
		const loading = this.state.loading;
		const content = this.state.content;
		const className = this.props.className;

		if (loading) {
			return (
				<Loading className={className}>Loading ...</Loading>
			)
		}

		return (
			<Container className={className}>{content}</Container>
		)
	}
}
