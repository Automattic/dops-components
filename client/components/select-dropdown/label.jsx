/** @ssr-ready **/
/* eslint-disable jsx-a11y/onclick-has-role */
/* eslint-disable jsx-a11y/click-events-have-key-events */

/**
 * External Dependencies
 */
import React from 'react'

/**
 * Module variables
 */
const { Component } = React;
const stopPropagation = event => event.stopPropagation();

export default class SelectDropdownLabel extends Component {
	render() {
		return (
			<li
				onClick= { stopPropagation }
				className="dops-select-dropdown__label"
			>
				<label>{ this.props.children }</label>
			</li>
		);
	}
};
