/* eslint-disable jsx-a11y/mouse-events-have-key-events */

// simple genericon wrapper

var React = require( 'react' ),
	noop = require( 'lodash/noop' );

var Icon = React.createClass( {

	propTypes: {
		name: React.PropTypes.string.isRequired,
		style: React.PropTypes.object,
		onMouseOver: React.PropTypes.func,
		onMouseOut: React.PropTypes.func,
		isPresentation: React.PropTypes.bool,
	},

	getDefaultProps: function() {
		return {
			style: {},
			onMouseOver: noop,
			onMouseOut: noop,
			isPresentation: true,
		};
	},

	render: function() {
		let a11y = {}

		if ( this.props.isPresentation ) {
			a11y = {
				'aria-hidden': true,
				role: 'presentation',
			};
		}

		return (
			<span
				style={ this.props.style }
				onMouseOver={ this.props.onMouseOver }
				onMouseOut={ this.props.onMouseOut }
				className={ 'genericon genericon-' + this.props.name }
				{ ...a11y }>

				{ this.props.children }

			</span>
		);
	}
} );

module.exports = Icon;
