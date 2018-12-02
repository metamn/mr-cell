import React from 'react';
import PropTypes from 'prop-types';
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
	overflow: hidden;
	display: flex;
	flex-wrap: ${props => props.isHorizontal ? 'nowrap' : 'wrap'};
	flex-direction: ${props => props.isVertical ? 'column' : 'row'};
	background-color: ${props => props.isHorizontal ? 'red' : props.isHorizontal ? 'yellow' : 'lightblue'};
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
class CellList extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			loading: this.isLoading(),
			cellsMatrix: this.calculateCellsMatrix(),
		};
	}

	calculateCellsMatrix() {
		const width = this.props.width;
		const height = this.props.height;
		const numberOfElements = this.props.numberOfElements;

		console.log(`w,h,e: ${width}, ${height}, ${numberOfElements}`);

		let ret = {
			x: 1,
			y: 1,
			isVertical: false,
			isHorizontal: false,
		};

		// Single line, horizontal
		if (width && !height) {
			ret.x = numberOfElements;
			ret.isHorizontal = true;
		}

		// Single line, vertical
		if (height && !width) {
			ret.y = numberOfElements;
			ret.isVertical = true;
		}

		if (height && width) {
			const w = width.replace(/[^0-9.]/g, '');
			const h = height.replace(/[^0-9.]/g, '');

			// Square
			if (w === h) {
				ret.x = ret.y = Math.round(Math.sqrt(numberOfElements));
			} else {
				const max = Math.max(w, h);

				// Single line
				if (max >= numberOfElements) {
					ret.x = (max === w) ? numberOfElements : 1;
					ret.y = (max === h) ? numberOfElements : 1;
					ret.isHorizontal = (max === w);
					ret.isVertical = (max === h);
				} else {
					// Rectangle
					const min = Math.min(w, h);
					const smaller = Math.round(numberOfElements / min);
					const larger = Math.ceil(numberOfElements / smaller);

					ret.x = (w > h) ? larger : smaller;
					ret.y = (w > h) ? smaller : larger;
				}
			}
		}

		if (ret.x === 1) ret.isVertical = true;
		if (ret.y === 1) ret.isHorizontal = true;

		return ret;
	}

	renderCell(i, j) {
		const numberOfElements = this.props.numberOfElements;
		const cellsMatrix = this.state.cellsMatrix;

		const key = (i-1)*cellsMatrix.y + j;
		if (key > numberOfElements) return;

		const content = `${key}`;
		const className = `cell cell-${key} cell-column-${i} cell-row-${j}`;

		return (
			<Cell
				key={key}
				className={className}
				content={content}
			>
			</Cell>
		)
	}

	renderSingleLineList() {
		const width = this.props.width;
		const height = this.props.height;
		const cellsMatrix = this.state.cellsMatrix;

		return (
			<Container
				className='cell-list single-line'
				width={width}
				height={height}
				isVertical={cellsMatrix.isVertical}
				isHorizontal={cellsMatrix.isHorizontal}
				>
				<Repeat numberOfTimes={cellsMatrix.x} startAt={1}>
					{(i) =>
						<Repeat key={i} numberOfTimes={cellsMatrix.y} startAt={1}>
							{(j) => this.renderCell(i, j)}
						</Repeat>
					}
				</Repeat>
			</Container>
		)
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
		const width = this.props.width;
		const height = this.props.height;
		const cellsMatrix = this.state.cellsMatrix;

		const empty = this.isEmpty();
		const loading = this.isLoading();

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

		if (cellsMatrix.isVertical || cellsMatrix.isHorizontal) {
			return this.renderSingleLineList(cellsMatrix);
		}

		return (
			<Container
				className='cell-list'
				width={width}
				height={height}
				>
				<Repeat numberOfTimes={cellsMatrix.y} startAt={1}>
					{(i) =>
						<Row
							height={height}
							rows={cellsMatrix.y}
							className='row'
							key={i}
							>
							<Repeat numberOfTimes={cellsMatrix.x} startAt={1}>
								{(j) => this.renderCell(i, j, cellsMatrix.x, cellsMatrix)}
							</Repeat>
						</Row>
					}
				</Repeat>
			</Container>
		)
	}
}

/**
 * The prop types
 */

CellList.propTypes = {
	width: PropTypes.string,
	height: PropTypes.string,
	numberOfElements: PropTypes.number,
};

/**
 * Export the complete class
 */
export default CellList;
