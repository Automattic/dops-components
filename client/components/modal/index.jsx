var React = require( 'react' ),
	Icon = require( '../icon' ),
	classNames = require( 'classnames' ),
	assign = require( 'lodash/object/assign' );

var focusTrap = require('focus-trap');

require( './style.scss' );

let Modal = React.createClass( {

	propTypes: {
		style: React.PropTypes.object,
		width: React.PropTypes.oneOf( ['wide', 'medium', 'narrow'] ),
		className: React.PropTypes.string,
		title: React.PropTypes.string,
		initialFocus: React.PropTypes.string,
		onRequestClose: React.PropTypes.func
	},

	getDefaultProps: function() {
		return {
			style: {}
		};
	},

	activateTrap: function() {
		focusTrap.activate(this.getDOMNode(), {
			onDeactivate: this.props.onRequestClose,
			initialFocus: this.props.initialFocus,
		});
	},

	componentDidMount: function() {
		jQuery( 'body' ).addClass( 'dops-modal-showing' );
		jQuery( document ).keyup( this.handleEscapeKey );
		this.activateTrap();
	},

	componentWillUnmount: function() {
		jQuery( 'body' ).removeClass( 'dops-modal-showing' );
		jQuery( document ).unbind( 'keyup', this.handleEscapeKey );
		focusTrap.deactivate();
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
	
	render: function() {
		var containerStyle, combinedStyle;

		var { style, className, width, title, ...other } = this.props;

		switch ( width ) {
		case 'wide':
			containerStyle = { maxWidth: 'inherit' };
			break;
		case 'medium':
			containerStyle = { maxWidth: 1050 };
			break;
		default:
			containerStyle = {};
		}

		combinedStyle = assign({}, style, containerStyle);

		return (
			<div className="dops-modal-wrapper" onClick={this.handleClickOverlay}>
				<div className={classNames( 'dops-modal', className )} 
					style={combinedStyle} 
					onClick={this.handleClickModal} 
					role="dialog"
					aria-label={title}
					{ ...other }>
					{this.props.children}
				</div>
			</div>
		);
	}
} );

module.exports = Modal;
