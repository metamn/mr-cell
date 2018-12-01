import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/**
 * An empty container
 */
const Empty = styled.div``;

/**
 * A loading container
 */
const Loading = styled.div``;


/**
 * The main class
 */
export default class CellList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			empty: this.isEmpty(),
			loading: this.isLoading(),
		};
	}

	isLoading() {
		return this.props.loading;
	}

	isEmpty() {
		const numberOfElements = this.props.numberOfElements
		const width = this.props.width;
		const height = this.props.height;

		if (!numberOfElements) return true;
		if (!width && !height) return true;
	}

	render() {
		const empty = this.state.empty;
		const loading = this.state.loading;

		if (empty) {
			return (
				<Empty className='empty'>The list is empty</Empty>
			)
		}

		if (loading) {
			return (
				<Loading className='loading'>The list is loading ...</Loading>
			)
		}

		return (
			'CellList'
		)
	}
}
