/* eslint jsx-a11y/click-events-have-key-events: 0 */

require( './credit-card-selector.scss' );

/**
 * External dependencies
 */
var React = require( 'react' ),
	filter = require( 'lodash/filter' ),
	classNames = require( 'classnames' );

/**
 * Internal dependencies
 */
var StoredCard = require( './stored-card' ),
	NewCardForm = require( './new-card-form' ),
	storeTransactions = require( 'lib/store-transactions' ),
	ScreenReaderText = require( '../screen-reader-text' );
	// upgradesActions = require( 'lib/upgrades/actions' );

var CreditCardSelector = React.createClass( {
	propTypes: {
		onSelectPayment: React.PropTypes.func.isRequired,
		defaultCCInfo: React.PropTypes.object.isRequired,
		cards: React.PropTypes.any
	},

	getInitialState: function() {
		if ( this.props.initialCard ) {
			return {
				section: this.props.initialCard.stored_details_id,
				focus: null,
			};
		}
		return {
			section: 'new-card',
			focus: null,
		};
	},

	// note: this ONLY updates the selected card if the section is currently "new-card"
	setSelectedCard: function( card ) {
		if ( this.state.section === 'new-card' && card && card.stored_details_id ) {
			this.setState( { section: card.stored_details_id } );
		}
	},

	render: function() {
		return (
			<div className="payment-box-sections">
				{ this.storedCards() }
				{ this.newCardForm() }
			</div>
		);
	},

	storedCards: function() {
		return this.props.cards.get().map( function( card ) {
			var storedCard = <StoredCard card={ card } />;
			return this.section( card.stored_details_id, storedCard );
		}, this );
	},

	newCardForm: function() {
		// If there are no other cards, we'll always show the form
		// Otherwise, only show form if the current selection is new card.
		var showForm = ( this.props.cards.get().length === 0 ) || ( this.state.section === 'new-card' );

		var cardForm = (
			<NewCardForm
				ref="newCardForm"
				showForm={ showForm }
				handleToggleClick={ this.handleToggleClick }
				hasStoredCards={ this.props.cards.get().length > 0 }
				defaultCCInfo={ this.props.defaultCCInfo }>
				{this.props.children}
			</NewCardForm>
		);

		return this.section( 'new-card', cardForm );
	},

	section: function( name, content ) {
		var classes = classNames( 'payment-box-section', {
			selected: this.state.section === name,
			focused: this.state.focus === name,
			'no-stored-cards': name === 'new-card' && this.props.cards.get().length === 0
		} );

		return (
			<div className={ classes } onClick={ this.handleClickedSection.bind( this, name ) } key={ name } aria-live='polite'>
				<ScreenReaderText>
					<input type='radio' aria-labelledby={ 'new-card' === name ? 'new-card-label' : 'card-label-' + name } name='card-selection' onChange={ this.handleClickedSection.bind( this, name ) } onFocus={ this.addParentFocus.bind( this, name ) } onBlur={ this.addParentFocus.bind( this, null ) } />
				</ScreenReaderText>
				<div className="payment-box-section-inner">
					{ content }
				</div>
			</div>
		);
	},

	// Public API
	// returns false if no valid card selected
	getCardRef: function() {
		var cardRef;

		if ( 'new-card' === this.state.section ) {
			// get the form field values and check they're valid
			var newCardValues = this.refs.newCardForm.getValidFormFields();
			if ( newCardValues === false ) {
				return false;
			}

			cardRef = storeTransactions.newCardPayment( newCardValues );
		} else {
			cardRef = storeTransactions.storedCardPayment( this.getStoredCardDetails( this.state.section ) );
		}

		return cardRef;
	},

	handleClickedSection: function( section ) {
		if ( section === this.state.section ) {
			return;
		}

		this.props.onSelectPayment( section );

		this.setState( { section: section } );
	},

	addParentFocus: function( name ) {
		this.setState( { focus: name } );
	},

	getStoredCardDetails: function( section ) {
		var cards = this.props.cards.get();
		return filter( cards, { stored_details_id: section } )[ 0 ];
	}

} );

module.exports = CreditCardSelector;
