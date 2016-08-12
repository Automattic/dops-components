/**
 * External dependencies
 */
import React from 'react';
import assign from 'lodash/assign';
import classNames from 'classnames';
import noop from 'lodash/noop';

require( './style.scss' );

export default React.createClass( {

	displayName: 'Button',

	propTypes: {
		disabled: React.PropTypes.bool,
		compact: React.PropTypes.bool,
		primary: React.PropTypes.bool,
		scary: React.PropTypes.bool,
		type: React.PropTypes.string,
		href: React.PropTypes.string,
		onClick: React.PropTypes.func,
		borderless: React.PropTypes.bool
	},

	getDefaultProps() {
		return {
			disabled: false,
			type: 'button',
			onClick: noop,
			borderless: false
		};
	},

	render() {
		const element = this.props.href ? 'a' : 'button';
		const buttonClasses = classNames( {
			'dops-button': true,
			'is-compact': this.props.compact,
			'is-primary': this.props.primary,
			'is-scary': this.props.scary,
			'is-borderless': this.props.borderless
		} );
		// Extract properties that don't apply to the HTML element
		const { isSubmitting, isPrimary, primary, borderless, compact, ...other } = this.props;

		const props = assign( {}, other, {
			className: classNames( this.props.className, buttonClasses )
		} );

		return React.createElement( element, props, this.props.children );
	}
} );
