var React = require( 'react' ),
	Icon = require( '../icon' );

require( './style.scss' );

let Modal = React.createClass( {
	
	propTypes: {
		style: React.PropTypes.oneOf( ['wide', 'medium', 'narrow'] ),
	},

	getDefaultProps: function() {
		return {
			style: 'narrow'
		};
	},

	componentDidMount: function() {
		jQuery( 'body' ).addClass( 'dops-modal-showing' );
	},

	componentWillUnmount: function() {
		jQuery( 'body' ).removeClass( 'dops-modal-showing' );
	},

	render: function() {
		var containerStyle;

		switch ( this.props.style ) {
		case 'wide':
			containerStyle = { maxWidth: 'inherit' };
			break;
		case 'medium':
			containerStyle = { maxWidth: 1050 };
			break;
		default:
			containerStyle = null;
		}
		return (
			<div>
				<div className="dops-modal-overlay"></div>
				<div className="dops-modal" style={containerStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
} );

module.exports = Modal;
