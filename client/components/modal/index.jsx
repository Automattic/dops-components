var React = require( 'react' ),
	Icon = require( '../icon' );

require( './style.scss' );

let Modal = React.createClass( {
	
	propTypes: {
		title: React.PropTypes.any.isRequired,
		subtitle: React.PropTypes.any,
		style: React.PropTypes.oneOf( ['wide', 'medium', 'narrow'] ),
		onRequestClose: React.PropTypes.func
	},

	getDefaultProps: function() {
		return {
			style: 'narrow'
		};
	},

	handleClose: function( e ) {
		e.preventDefault();
		e.stopPropagation();
		this.props.onRequestClose();
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
					<div className="dops-modal-header">
						<h1>{this.props.title}</h1>
						{this.props.subtitle && 
							<h2>{this.props.subtitle}</h2>
						}
					</div>
					<div>
						{this.props.children}
					</div>
					<a href="#" 
						onClick={this.handleClose} 
						className="dops-modal-close">
						<Icon name="close-alt" />
					</a>
				</div>
			</div>
		);
	}
} );

module.exports = Modal;
