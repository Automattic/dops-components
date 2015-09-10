var React = require( 'react' ),
	Icon = require( '../icon' ),
	classNames = require( 'classnames' );

require( './style.scss' );

let Modal = React.createClass( {
	
	propTypes: {
		style: React.PropTypes.oneOf( ['wide', 'medium', 'narrow'] ),
		className: React.PropTypes.string,
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
		if ( e.keyCode === 27 ) { // escape key maps to keycode `27`
			if ( this.props.onRequestClose ) {
				this.props.onRequestClose();
			}
		}
	},

	handleClickOverlay: function( e ) {
		e.preventDefault();
		e.stopPropagation();
		if ( this.props.onRequestClose ) {
			this.props.onRequestClose();
		}
	},

	// prevent clicks from propagating to background
	handleClickModal: function( e ) {
		e.stopPropagation(); 
	},

	componentWillUnmount: function() {
		jQuery( 'body' ).removeClass( 'dops-modal-showing' );
		jQuery( document ).unbind( 'keyup', this.handleEscapeKey );
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
			<div className={classNames( "dops-modal-wrapper", this.props.className )} onClick={this.handleClickOverlay}>
				<div className="dops-modal" style={containerStyle} onClick={this.handleClickModal}>
					{this.props.children}
				</div>
			</div>
		);
	}
} );

module.exports = Modal;
