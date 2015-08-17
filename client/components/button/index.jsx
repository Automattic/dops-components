var React = require( 'react' );

require( './style.scss' );

let Button = React.createClass( {

	propTypes: {
		size: React.PropTypes.oneOf( ['tiny', 'normal', 'big'] ),
		color: React.PropTypes.oneOf( ['gray', 'blue', 'green'] ),
		theme: React.PropTypes.oneOf( ['wp', 'jetpack'] ),
		inline: React.PropTypes.bool,
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
		var { size, color, inline, onClick, theme, href, disabled, ...other } = this.props;

		var callback;

		var className = 'dops-btn dops-btn-color-'+color+' dops-btn-theme-'+theme+' dops-btn-size-'+size;

		if ( disabled ) {
			className += ' dops-btn-disabled';
		}

		if ( inline ) {
			className += ' dops-btn-inline';	
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
