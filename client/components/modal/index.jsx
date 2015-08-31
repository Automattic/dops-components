var React = require( 'react' ),
	Icon = require( '../icon' );

require( './style.scss' );

let Modal = React.createClass( {
	
	propTypes: {
		style: React.PropTypes.oneOf( ['wide', 'medium', 'narrow'] ),
		onRequestClose: React.PropTypes.func
	},

	getDefaultProps: function() {
		return {
			style: 'narrow'
		};
	},

	componentDidMount: function() {
		jQuery( 'body' ).addClass( 'dops-modal-showing' );
		jQuery( document ).keyup( this.handleEscapeKey );
	},

	handleEscapeKey: function( e ) {
		console.log( "hit escape" );
		if ( e.keyCode === 27 ) { // escape key maps to keycode `27`
			if ( this.props.onRequestClose ) {
				this.props.onRequestClose();
			}
		}
	},

	handleClickOverlay: function( e ) {
		e.preventDefault();
		e.stopPropagation();
		console.log( "clicked overlay" );
		if ( this.props.onRequestClose ) {
			this.props.onRequestClose();
		}
	},

	componentWillUnmount: function() {
		jQuery( 'body' ).removeClass( 'dops-modal-showing' );
		jQuery( document ).unbind( "keyup", this.handleEscapeKey );
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
				<div className="dops-modal-overlay" onClick={this.handleClickOverlay}></div>
				<div className="dops-modal" style={containerStyle}>
					{this.props.children}
				</div>
			</div>
		);
	}
} );

module.exports = Modal;
