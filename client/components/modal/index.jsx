var React = require( 'react' ),
	Icon = require( '../icon' ),
	styles = require( '../../styles' ),
	Radium = require( 'radium' );

require( './style.scss' );

let Modal = React.createClass( {
	
	propTypes: {
		title: React.PropTypes.any.isRequired,
		subtitle: React.PropTypes.any,
		style: React.PropTypes.oneOf( ['wide', 'medium', 'narrow'] ),
		onRequestClose: React.PropTypes.func
	},

	styles: {
		modalOverlay: {
			position: 'fixed',
			top: 0,
			left: 0,
			zIndex: 100,
			height: '100%',
			width: '100%',
			background: 'rgba( 0, 0, 0, 0.5 )'
		},
		
		modal: {
			position: 'absolute',
			top: 80,
			left: 0,
			right: 0,
			display: 'block',
			padding: 30,
			margin: '0 auto',
			maxWidth: 550,
			width: '90%',
			background: '#fff',
			borderRadius: 2,
			boxShadow: '0 4px 20px rgba( 0, 0, 0, 0.2 )',
			WebkitTransition: 'all 0.5s',
			transition: '0.5s',
			zIndex: 100,
			clear: 'both'
		},

		modalHeader: {
			marginBottom: 30
		},

		modalHeaderH1: {
			fontSize: '2em',
			lineHeight: '1.3',
			margin: 0
		},

		modalHeaderH2: {
			fontSize: '1.2em',
			margin: 0
		},

		modalClose: {
			position: 'absolute',
			top: 0,
			right: 0,
			height: 46,
			padding: 15,
			color: styles.colors.gray,
			':hover': {
				background: styles.colors.offWhite,
				textDecoration: 'none'
			}
		}
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
				<div style={this.styles.modalOverlay}></div>
				<div style={[this.styles.modal, containerStyle]}>
					<div style={this.styles.modalHeader}>
						<h1 style={this.styles.modalHeaderH1}>{this.props.title}</h1>
						{this.props.subtitle && 
							<h2 style={this.styles.modalHeaderH2}>{this.props.subtitle}</h2>
						}
					</div>
					<div>
						{this.props.children}
					</div>
					<a href="#" 
						onClick={this.handleClose} 
						style={this.styles.modalClose}>
						<Icon name="close-alt" />
					</a>
				</div>
			</div>
		);
	}
} );

module.exports = Radium( Modal );
