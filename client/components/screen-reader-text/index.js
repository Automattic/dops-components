/**
 * External dependencies
 */
import React from 'react';

var style = require( './style.scss' );

function getClass(name) {
	return style[name];
}

module.exports = React.createClass( {
	displayName: 'ScreenReaderText',

	render: function() {
		return (
			<span className={ getClass('screen-reader-text') }>{ this.props.children }</span>
		);
	}
} );
