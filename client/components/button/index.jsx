var React = require( 'react' ),
	classnames = require( 'classnames' );

var style = require( './style.scss' );

function getClass(name) {
	return style[name];
}

let Button = React.createClass( {

	propTypes: {
		size: React.PropTypes.oneOf( ['small', 'normal', 'large', 'hero'] ),
		color: React.PropTypes.oneOf( ['gray', 'blue', 'green'] ),
		// theme: React.PropTypes.oneOf( ['wp', 'jetpack'] ),
		primary: React.PropTypes.any,
		dangerous: React.PropTypes.any,
		destructive: React.PropTypes.any,
		onClick: React.PropTypes.func,
		disabled: React.PropTypes.any,
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
		var { size, color, onClick, href, primary, dangerous, destructive, ...other } = this.props;

		var callback;

		var buttonClasses = {};

		buttonClasses[getClass('button')] = true;
		// buttonClasses[getClass('is-link')] = !!href;
		buttonClasses[getClass('is-primary')] = primary;
		buttonClasses[getClass(`button-${color}`)] = (color !== 'gray');
		buttonClasses[getClass(`button-${size}`)] = (size !== 'normal');

		var className = classnames(buttonClasses);

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
