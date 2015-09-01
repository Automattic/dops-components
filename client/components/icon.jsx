// simple genericon wrapper

var React = require( 'react' );

var Icon = React.createClass( {
	
	propTypes: {
		name: React.PropTypes.string.isRequired,
		style: React.PropTypes.object,
		onMouseOver: React.PropTypes.func,
		onMouseOut: React.PropTypes.func
	},

	render: function() {
		return (
			<span 
				style={this.props.style} 
				onMouseOver={this.props.onMouseOver} 
				onMouseOut={this.props.onMouseOut} 
				className={'genericon genericon-'+this.props.name}>

				{this.props.children}
				
			</span>
		);
	}
} );

module.exports = Icon;
