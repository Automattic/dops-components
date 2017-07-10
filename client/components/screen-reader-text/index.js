/**
 * External dependencies
 */
import React from 'react';
import assign from 'lodash/assign';
import classNames from 'classnames';

var style = require( './style.scss' );

function getClass( name ) {
	return style[name];
}

module.exports = React.createClass( {
	displayName: 'ScreenReaderText',

	render: function() {
		const element = this.props.href ? 'a' : 'span';

		let classes = {}
		classes[ getClass( 'screen-reader-text' ) ] = true;

		const props = assign( {}, this.props, {
			className: classNames( this.props.className, classes )
		} );

		return React.createElement( element, props, this.props.children );
	}
} );
