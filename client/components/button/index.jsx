var React = require( 'react' );

require( './style.scss' );

let Button = React.createClass( {

	propTypes: {
		size: React.PropTypes.oneOf( ['small', 'normal', 'large', 'hero'] ),
		color: React.PropTypes.oneOf( ['gray', 'blue', 'green'] ),
		// theme: React.PropTypes.oneOf( ['wp', 'jetpack'] ),
		primary: React.PropTypes.any,
		dangerous: React.PropTypes.any,
		destructive: React.PropTypes.any,
		onClick: React.PropTypes.func,
		disabled: React.PropTypes.bool,
		href: React.PropTypes.string,
		style: React.PropTypes.object
	},

	getDefaultProps: function() {
		return { size: 'normal', inline: true, color: 'gray', theme: 'wp', disabled: false };
	},

	handleCallbackHref: function( e ) {
		e.preventDefault();
		window.location = this.props.href;
	},

	render: function() {
		var { size, color, onClick, href, primary, dangerous, destructive, disabled, ...other } = this.props;

		var callback;

		var className = 'button button-'+size;

		if ( href ) {
			className += ' is-link';
		}

		if ( primary ) {
			className += ' is-primary';
		}

		if ( disabled ) {
			className += ' button-disabled';
		}

		if ( href && !onClick ) {
			callback = this.handleCallbackHref;
		} else {
			callback = onClick;
		}

		return (
			<button {...other} className={className} style={this.props.style} onClick={callback}>
				{this.props.children}
			</button>
		);
	}
} );

module.exports = Button;
