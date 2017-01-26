/**
 * External dependencies
 */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { noop, flow } from 'lodash';

/**
 * Internal dependencies
 */
import Card from 'components/card';
import Gridicon from 'components/gridicon';

export default class DismissibleCard extends Component {

	static propTypes = {
		className: PropTypes.string,
		dismissCard: PropTypes.func,
		isDismissed: PropTypes.bool,
		temporary: PropTypes.bool,
		onClick: PropTypes.func,
		preferenceName: PropTypes.string.isRequired
	};

	static defaultProps = {
		onClick: noop
	};

	render() {
		const { className, isDismissed, onClick, dismissCard } = this.props;

		if ( isDismissed ) {
			return null;
		}

		return (
			<Card className={ className }>
				<QueryPreferences />
				<Gridicon
					icon="cross"
					className="dismissible-card__close-icon"
					onClick={ this.props.onClick }
				/>
				{ this.props.children }
			</Card>
		);
	}
}
