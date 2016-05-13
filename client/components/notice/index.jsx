/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import classnames from 'classnames';
import noop from 'lodash/noop';
import ScreenReaderText from '../screen-reader-text';
import i18n from 'lib/mixins/i18n';

require( './style.scss' );

/**
 * Internal dependencies
 */
import Gridicon from '../gridicon';

export default React.createClass( {
	mixins: [ i18n.mixin ],
	displayName: 'SimpleNotice',
	dismissTimeout: null,

	getDefaultProps() {
		return {
			duration: 0,
			status: null,
			showDismiss: true,
			className: '',
			onDismissClick: noop
		};
	},

	propTypes: {
		// we should validate the allowed statuses
		status: PropTypes.string,
		showDismiss: PropTypes.bool,
		isCompact: PropTypes.bool,
		duration: React.PropTypes.number,
		text: PropTypes.oneOfType( [
			PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ),
			PropTypes.arrayOf( PropTypes.oneOfType( [ PropTypes.string, PropTypes.node ] ) )
		] ),
		icon: PropTypes.string,
		className: PropTypes.string
	},

	componentDidMount() {
		if ( this.props.duration > 0 ) {
			this.dismissTimeout = setTimeout( this.props.onDismissClick, this.props.duration );
		}
	},

	componentWillUnmount() {
		if ( this.dismissTimeout ) {
			clearTimeout( this.dismissTimeout );
		}
	},

	renderChildren() {
		let content;

		if ( typeof this.props.children === 'string' ) {
			return <span className="notice__text">{ this.props.children }</span>;
		}

		if ( this.props.text ) {
			content = [ this.props.children ];
			content.unshift( <span key="notice_text" className="notice__text">{ this.props.text }</span> );
		} else {
			content = <span key="notice_text" className="notice__text">{ this.props.children }</span>;
		}

		return content;
	},

	getIcon() {
		let icon;

		switch ( this.props.status ) {
			case 'is-info':
				icon = 'info';
				break;
			case 'is-success':
				icon = 'checkmark';
				break;
			case 'is-error':
				icon = 'notice';
				break;
			case 'is-warning':
				icon = 'notice';
				break;
			default:
				icon = 'info';
				break;
		}

		return icon;
	},

	render() {
		let dismiss;

		// The class determines the nature of a notice
		// and its status.
		let noticeClass = classnames( 'notice', this.props.status );

		if ( this.props.isCompact ) {
			noticeClass = classnames( noticeClass, 'is-compact' );
		}

		// By default, a dismiss button is rendered to
		// allow the user to hide the notice
		if ( this.props.showDismiss ) {
			noticeClass = classnames( noticeClass, 'is-dismissable' );
			dismiss = (
				<span tabIndex="0" className="notice__dismiss" onClick={ this.props.onDismissClick } >
					<Gridicon icon="cross" size={ 24 } />
					<ScreenReaderText>{ this.translate( 'Dismiss' ) }</ScreenReaderText>
				</span>
				);
		}

		return (
			<div className={ classnames( this.props.className, noticeClass ) }>
				<Gridicon className="notice__icon" icon={ this.props.icon || this.getIcon() } size={ 24 } />
				<div className="notice__content">
					{ this.renderChildren() }
				</div>
				{ dismiss }
			</div>
		);
	}
} );


// /**
//  * External dependencies
//  */
// var React = require( 'react/addons' ),
// 	joinClasses = require( 'react/lib/joinClasses' ),
// 	noop = require( 'lodash/noop' );

// /**
//  * Internal dependencies
//  */
// var Button = require( '../button' ),
// 	Gridicon = require( '../gridicon' ),
// 	ScreenReaderText = require( '../screen-reader-text' );

// require( './style.scss' );

// module.exports = React.createClass( {
// 	displayName: 'SimpleNotice',

// 	getDefaultProps: function() {
// 		return {
// 			status: 'is-info',
// 			showDismiss: true,
// 			className: '',
// 			onClick: noop
// 		};
// 	},

// 	propTypes: {
// 		// we should validate the allowed statuses
// 		status: React.PropTypes.string,
// 		showDismiss: React.PropTypes.bool,
// 		duration: React.PropTypes.number,
// 		isCompact: React.PropTypes.bool,
// 		text: React.PropTypes.oneOfType( [
// 			React.PropTypes.string,
// 			React.PropTypes.object
// 		] ),
// 		className: React.PropTypes.string
// 	},

// 	componentDidMount: function() {
// 		if ( this.props.duration > 0 ) {
// 			setTimeout( this.props.onClick, this.props.duration );
// 		}
// 	},

// 	renderChildren: function() {
// 		let content;

// 		if ( typeof this.props.children === 'string' ) {
// 			return <span className="notice__text">{ this.props.children }</span>;
// 		}

// 		if ( this.props.text ) {
// 			content = [ this.props.children ];
// 			content.unshift( <span key="notice_text" className="notice__text">{ this.props.text }</span> );
// 		} else {
// 			content = <span key="notice_text" className="notice__text">{ this.props.children }</span>;
// 		}

// 		return content;
// 	},

// 	render: function() {
// 		var noticeClass, dismiss;

// 		// The class determines the nature of a notice
// 		// and its status.
// 		noticeClass = joinClasses( 'notice', this.props.status );

// 		if ( this.props.isCompact ) {
// 			noticeClass = joinClasses( noticeClass, 'is-compact' );
// 		}

// 		// By default, a dismiss button is rendered to
// 		// allow the user to hide the notice
// 		if ( this.props.showDismiss ) {
// 			noticeClass = joinClasses( noticeClass, 'is-dismissable' );
// 			dismiss = (
// 				<Button className="notice__dismiss" onClick={ this.props.onClick } >
// 					<Gridicon icon="cross" size={ 24 } />
// 					<ScreenReaderText>{ this.translate( 'Dismiss' ) }</ScreenReaderText>
// 				</Button>
// 				);
// 		}

// 		return (
// 			<div className={ joinClasses( this.props.className, noticeClass ) }>
// 				{ this.renderChildren() }
// 				{ dismiss }
// 			</div>
// 		);
// 	}

// } );
