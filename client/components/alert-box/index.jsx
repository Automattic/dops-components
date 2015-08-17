var React = require( 'react' ),
	m = require( '../../utils/m' );

var AlertBox = React.createClass( {

	propTypes: {
		title: React.PropTypes.any,
		status: React.PropTypes.string,
		style: React.PropTypes.object
	},

	styles: {
		alertBox: {
			padding: '15px 20px',
			position: 'relative'
		},
		error: {
			backgroundColor: '#ee6c5b',
			color: '#fff'
		},
		title: {
			borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
			color: '#fff',
			paddingBottom: 15,
			marginBottom: 15
		}
	},

	render: function() {
		var isError = this.props.status === "error";
		return (
			<div style={m( this.styles.alertBox, isError && this.styles.error, this.props.style )}>
				{this.props.title && ( <h2 style={this.styles.title}>{this.props.title}</h2> )}
				{this.props.children}
			</div>
		);
	}
} );

module.exports = AlertBox;
