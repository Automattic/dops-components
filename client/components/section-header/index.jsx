/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import Card from 'components/card';

require( './style.scss' );

export default React.createClass( {
	getDefaultProps() {
		return {
			label: '',
			href: null
		};
	},

	render() {
		const classes = classNames(
			this.props.className,
			'dops-section-header'
		);

		return (
			<Card compact className={ classes } href={ this.props.href }>
				<div className="dops-section-header__label">
					{ this.props.label }
				</div>
				<div className="dops-section-header__actions">
					{ this.props.children }
				</div>
			</Card>
		);
	}
} );
