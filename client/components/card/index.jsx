var React = require( 'react' ),
	Gridicon = require( '../gridicon' ),
	classnames = require( 'classnames' );

import { assign, omit } from 'lodash';

require( './style.scss' );

let CardSection = React.createClass( {

	propTypes: {
		title: React.PropTypes.any,
		vertical: React.PropTypes.any,
		style: React.PropTypes.object,
		className: React.PropTypes.string,
		device: React.PropTypes.oneOf( ['desktop', 'tablet', 'phone'] )
	},

	getDefaultProps: function() {
		return { vertical: null };
	},

	render: function() {
		return (
			<div className={classnames( 'dops-card-section', this.props.className )} style={this.props.style}>
				{this.props.title ?
					this._renderWithTitle() :
					this.props.children
				}
			</div>
		);
	},

	_renderWithTitle: function() {
		var orientation = this.props.vertical ? 'vertical' : 'horizontal';
		var wrapperClassName = 'dops-card-section-orient-' + orientation;

		return (
			<div className={wrapperClassName}>
				<h4 ref="label" className="dops-card-section-label">
					{this.props.title}
				</h4>
				<div ref="content" className="dops-card-section-content">
					{this.props.children}
				</div>
			</div>
		);
	}
} );

let CardFooter = React.createClass( {

	render: function() {
		return (
			<div className="dops-card-footer">
				{this.props.children}
			</div>
		);
	}
} );

let Card = React.createClass( {

	propTypes: {
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		tagName: React.PropTypes.string,
		target: React.PropTypes.string,
		compact: React.PropTypes.bool,
		children: React.PropTypes.node
	},

	getDefaultProps() {
		return {
			tagName: 'div'
		};
	},

	render: function() {
		const className = classnames( 'dops-card', this.props.className, {
			'is-card-link': !! this.props.href,
			'is-compact': this.props.compact
		} );

		const omitProps = [ 'compact', 'tagName' ];

		let linkIndicator;
		if ( this.props.href ) {
			linkIndicator = <Gridicon
				className="dops-card__link-indicator"
				icon={ this.props.target ? 'external' : 'chevron-right' } />;
		} else {
			omitProps.push( 'href', 'target' );
		}

		return React.createElement(
			this.props.href ? 'a' : this.props.tagName,
			assign( omit( this.props, omitProps ), { className } ),
			linkIndicator,
			this.props.children
		);
	}
} );

Card.Section = CardSection;
Card.Footer = CardFooter;

module.exports = Card;
