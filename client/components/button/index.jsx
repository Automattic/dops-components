/**
 * External dependencies
 */
import React from 'react';
import assign from 'lodash/object/assign';
import classNames from 'classnames';
import noop from 'lodash/utility/noop';

var style = require( './style.scss' );

function getClass(name) {
	return style[name];
}

export default React.createClass( {

	displayName: 'Button',

	propTypes: {
		disabled: React.PropTypes.bool,
		compact: React.PropTypes.bool,
		primary: React.PropTypes.bool,
		scary: React.PropTypes.bool,
		type: React.PropTypes.string,
		href: React.PropTypes.string,
		onClick: React.PropTypes.func
	},

	getDefaultProps() {
		return {
			disabled: false,
			type: 'button',
			onClick: noop
		};
	},

	render() {
		const element = this.props.href ? 'a' : 'button';

		let buttonClasses = {};
		buttonClasses[ getClass( 'button' ) ] = true;
		buttonClasses[ getClass( 'is-compact' ) ] = this.props.compact;
		buttonClasses[ getClass( 'is-primary' ) ] = this.props.primary;
		buttonClasses[ getClass( 'is-scary' ) ] = this.props.scary;

		const props = assign( {}, this.props, {
			className: classNames( this.props.className, buttonClasses )
		} );

		return React.createElement( element, props, this.props.children );
	}
} );
