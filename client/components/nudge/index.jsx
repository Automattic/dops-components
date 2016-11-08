/**
 * External dependencies
 */
import React from 'react';
import classNames from 'classnames';
import noop from 'lodash/noop';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import Card from 'components/card';
import Gridicon from 'components/gridicon';

require( './style.scss' );

export default React.createClass( {

	displayName: 'Nudge',

	propTypes: {
		onClick: React.PropTypes.func,
		className: React.PropTypes.string,
		href: React.PropTypes.string,
		headline: React.PropTypes.string,
		message: React.PropTypes.string,
		icon: React.PropTypes.string
	},

	getDefaultProps() {
		return {
			onClick: noop,
			href: '',
			message: 'And get your own domain address.',
			icon: 'star',
		};
	},

	handleClick() {
		this.props.onClick();
	},


	getColor() {
		let color;

		switch ( this.props.color ) {
			case 'red':
				color = 'is-red';
				break;
			case 'green':
				color = 'is-green';
				break;
			case 'blue':
				color = 'is-blue';
				break;
			default:
				color = '';
				break;
		}

		return color;
	},

	render() {
		let href = this.props.href;

		const classes = classNames( this.props.className, ['dops-nudge', this.getColor() ] );

		return (
			<Card compact className={ classes } onClick={ this.handleClick } href={ href }>
				<Gridicon className="dops-nudge__icon" icon={ this.props.icon } size={ 18 }/>
				<div className="dops-nudge__info">
					<span className="dops-nudge__title">
						{ this.props.headline }
					</span>
					<span className="dops-nudge__message" >
						{ this.props.message }
					</span>
				</div>
			</Card>
		);
	}
} );
