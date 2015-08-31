/**
 * External dependencies
 */
var React = require( 'react/addons' ),
	joinClasses = require( 'react/lib/joinClasses' );

require( './style.scss' );

module.exports = React.createClass( {
	displayName: 'Notice',

	propTypes: {
		status: React.PropTypes.oneOf( ['info', 'is-info', 'is-success', 'is-error', 'is-warning'] ),
		text: React.PropTypes.string,
		duration: React.PropTypes.number,
		showDismiss: React.PropTypes.bool,
		className: React.PropTypes.string,
		onRemoveCallback: React.PropTypes.func,
		onClick: React.PropTypes.func,
		button: React.PropTypes.string
	},

	getDefaultProps: function() {
		return {
			status: 'info',
			text: 'Some text here, please.',
			duration: 0,
			showDismiss: true,
			className: ''
		};
	},

	componentDidMount: function() {
		if ( this.props.duration > 0 ) {
			setTimeout( this.removeNotice, this.props.duration );
		}
	},

	removeNotice: function( event ) {
		if ( this.props.raw.onRemoveCallback ) {
			this.props.raw.onRemoveCallback( event );
		}
	},

	handleClick: function( event ) {
		if ( this.props.onClick ) {
			this.props.onClick( event, this.removeNotice );
		}
	},

	render: function() {
		var alertClass, button, text, dismiss;

		// The class determines the nature of a notice
		// and its status.
		alertClass = 'notice ' + this.props.status;
		if ( this.props.isCompact ) {
			alertClass += ' is-compact';
		}

		// If provided with a link or click handler,
		// generate a button element.
		if ( this.props.button ) {
			button = ( <a className="notice__button" href={ this.props.href } onClick={ this.handleClick }>{ this.props.button }</a> );
		}

		if ( this.props.textAsHTML ) {
			text = ( <span dangerouslySetInnerHTML={ { __html: this.props.text } } /> );
		} else {
			text = ( <span>{ this.props.text }</span> );
		}

		// By default, a dismiss button is rendered to
		// allow the user to hide the notice
		if ( this.props.showDismiss ) {
			alertClass += ' is-dismissable';
			dismiss = (
				<span tabIndex="0" className="notice__dismiss noticon noticon-close-alt" onClick={ this.removeNotice } >
					<span className="screen-reader-text">{ this.translate( 'Dismiss' ) }</span>
				</span>
				);
		}

		return (
			<div className={ joinClasses( this.props.className, alertClass ) }>
				{ text }
				{ button }
				{ dismiss }
			</div>
		);
	}

} );