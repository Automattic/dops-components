var React = require( 'react' ), Button;

require( './style.scss' );

Button = React.createClass( {

	propTypes: {
		size: React.PropTypes.oneOf( ['tiny', 'normal', 'big'] ),
		color: React.PropTypes.oneOf( ['gray', 'blue', 'green'] ),
		theme: React.PropTypes.oneOf( ['wp', 'jetpack'] ),
		inline: React.PropTypes.bool,
		onClick: React.PropTypes.func,
		disabled: React.PropTypes.bool,
		href: React.PropTypes.string
	},

	getDefaultProps: function() {
		return { size: 'normal', inline: true, color: 'gray', theme: 'wp', disabled: false };
	},

	handleCallbackHref: function( e ) {
		e.preventDefault();
		window.location = this.props.href;
	},

	render: function() {
		var { size, color, inline, onClick, theme, href, disabled, ...other } = this.props;

		var callback;

		var className = 'ak-btn ak-btn-color-'+color+' ak-btn-theme-'+theme+' ak-btn-size-'+size;

		if ( disabled ) {
			className += ' ak-btn-disabled';
		}

		if ( inline ) {
			className += ' ak-btn-inline';	
		}

		if ( href && !onClick ) {
			callback = this.handleCallbackHref;
		} else {
			callback = onClick;
		}

		return (
			<button {...other} className={className} style={this.props.style} onClick={callback} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				{this.props.children}
			</button>
		);
	}
} );

module.exports = Button;
