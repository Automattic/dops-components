/**
 * External dependencies
 */
import React, { PropTypes } from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import Card from 'components/card';

require( './style.scss' );

export default React.createClass( {
	displayName: 'SectionHeader',

	propTypes: {
		label: React.PropTypes.string,
		cardBadge: React.PropTypes.oneOfType( [
			React.PropTypes.string,
			React.PropTypes.element,
			React.PropTypes.object
		] )
	},

	getDefaultProps() {
		return {
			label: '',
			cardBadge: ''
		};
	},

	render() {
		const classes = classNames(
			this.props.className,
			'dops-section-header'
		);

		const maybeShowCardBadge = this.props.cardBadge !== ''
			? <span className="dops-section-header__card-badge">{ this.props.cardBadge }</span>
			: '';

		return (
			<Card compact className={ classes }>
				<div className="dops-section-header__label">
					{ this.props.label }
					{ maybeShowCardBadge }
				</div>
				<div className="dops-section-header__actions">
					{ this.props.children }
				</div>
			</Card>
		);
	}
} );
