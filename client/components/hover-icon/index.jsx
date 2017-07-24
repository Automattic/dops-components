var React = require( 'react' ),
	Icon = require( '../icon' );

require( './style.scss' );

let HoverIcon = React.createClass( {

	propTypes: {
		name: React.PropTypes.string.isRequired,
		type: React.PropTypes.oneOf( ['dark', 'transparent', 'light'] )
	},

	getDefaultProps: function() {
		return {
			type: 'dark'
		};
	},

	getInitialState: function() {
		return { hover: false };
	},

	handleMouseOver: function() {
		this.setState( { hover: true } );
	},

	handleMouseOut: function() {
		this.setState( { hover: false } );
	},

	render: function() {
		var className = 'dops-hovericon dops-hovericon-' + this.props.type;
		return (
			<Icon name={this.props.name} style={{position: 'relative'}} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
				<span className={className}>
					{this.props.children}
				</span>
			</Icon>
		);
	}
} );

module.exports = HoverIcon;
