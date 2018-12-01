import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

/**
 * An empty container
 */
const Empty = styled.div``;


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
		const width = this.props.width;
		const height = this.props.height;

		return (!width && !height);
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
				<Empty className='empty'>The list is loading ...</Empty>
			)
		}

		return (
			'CellList'
		)
	}
}
