import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import Cell from './../Cell';
import Repeat from './../../framework';


/**
 * An empty container
 */
const Empty = styled.div``;


/**
 * A loading container
 */
const Loading = styled.div``;


/**
 * The main container
 */
const Container = styled.div`
	width: ${props => props.width ? props.width : 'auto'};
	height: ${props => props.height ? props.height : 'auto'};
	display: flex;
	flex-wrap: wrap;
`;

/**
 * The Row container
 */
const Row = styled.div`
	width: 100%;
	height: calc(${props => props.height} / ${props => props.rows});
	display: flex;
	flex-direction: ${props => props.isVertical ? 'column' : 'row'};
	flex-wrap: wrap;
	justify-content: space-between;
`;

/**
 * The main class
 */
export default class CellList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			empty: this.isEmpty(),
			loading: this.isLoading(),
			cellsMatrix: this.calculateCellsMatrix(),
		};
	}

	calculateCellsMatrix() {
		const width = this.props.width;
		const height = this.props.height;
		const numberOfElements = this.props.numberOfElements;

		let ret = {
			x: 1,
			y: 1,
			isVertical: false,
		};

		if (width && !height) {
			ret.x = numberOfElements;
		}

		if (height && !width) {
			ret.y = numberOfElements;
			ret.isVertical = true;
		}

		if (height && width) {
			const w = width.replace(/[^0-9.]/g, '');
			const h = height.replace(/[^0-9.]/g, '');

			if (w > h) {
				ret.x = Math.round(numberOfElements / h);
				ret.y = h;
			}

			if (w < h) {
				ret.x = w;
				ret.y = Math.round(numberOfElements / w);
			}

			if (w == h) {
				ret.x = ret.y = Math.round(Math.sqrt(numberOfElements));
			}
		}

		return ret;
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

	renderCell(i, j) {
		const cellsMatrix = this.state.cellsMatrix;

		const key = (i-1)*cellsMatrix.y + j;
		let className = `cell cell-${key} cell-column-${i} cell-row-${j}`;

		return (
			<Cell
				key={key}
				className={className}
				content={key}
			>
			</Cell>
		)
	}

	render() {
		const empty = this.state.empty;
		const loading = this.state.loading;
		const cellsMatrix = this.state.cellsMatrix;
		const width = this.props.width;
		const height = this.props.height;

		console.log(`x,y: ${cellsMatrix.x}, ${cellsMatrix.y}`);

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
			<Container
				width={width}
				height={height}
				isVertical={cellsMatrix.isVertical}
				>
				<Repeat numberOfTimes={cellsMatrix.x} startAt={1}>
					{(i) =>
						<Row
							height={height}
							rows={cellsMatrix.y}
							isVertical={cellsMatrix.isVertical}
							className="row row-${i}"
							key={i}
							>
							<Repeat numberOfTimes={cellsMatrix.y} startAt={1}>
								{(j) => this.renderCell(i, j)}
							</Repeat>
						</Row>
					}
				</Repeat>
			</Container>
		)
	}
}
