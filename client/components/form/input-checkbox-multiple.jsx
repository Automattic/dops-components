/** External Dependencies **/
var React = require( 'react' ),
	classNames = require( 'classnames' ),
	forEach = require( 'lodash/collection/forEach' ),
	isArray = require( 'lodash/lang/isArray' ),
	Formsy = require( 'formsy-react' );

/** Internal Dependencies **/
var Label = require( './label' ),
	getUniqueId = require( './counter' ),
	FormInputValidation = require( '../form-input-validation' ),
	requiredFieldErrorFormatter = require( './required-error-label' );

module.exports = React.createClass( {
	displayName: 'MultiCheckboxInput',

	mixins: [ Formsy.Mixin ],

	propTypes: {
		name: React.PropTypes.string.isRequired,
		className: React.PropTypes.any,
		choices: React.PropTypes.any,
		defaultValue: React.PropTypes.array,
		validations: React.PropTypes.string,
	},

	getInitialState: function() {
		return {
			uniqueId: getUniqueId()
		};
	},

	changeValue: function( event ) {
		var i,
			currentSelected = this.getValue(),
			value = parseInt( event.target.value );
		if ( ! isArray( currentSelected ) ) {
			currentSelected = [];
		}
		if ( -1 !== ( i = currentSelected.indexOf( value ) ) ) {
			currentSelected.splice( i, 1 );
		} else {
			currentSelected.push( value );
		}
		this.setValue( currentSelected );
	},

	render: function() {
		var uniqueId = this.state.uniqueId;
		var currentSelected = this.getValue();
		var errorMessage;

		var checkboxes = this.props.choices.map( function( choice, i ) {
			var checked = _.contains( currentSelected, choice.value );
			return (
				<div className='dops-form-checkbox' key={ i }>
					<Label inline label={ choice.label } htmlFor={ uniqueId + i }>
						<input type='checkbox' id={ uniqueId + i } ref={ 'check' + i } name={ this.props.name + '[]' } defaultValue={ choice.value } checked={ checked } onChange={ this.changeValue } />
					</Label>
				</div>
			);
		}.bind( this ) );

		if ( ! this.isPristine() ) {
			errorMessage = this.showError() ? this.getErrorMessage() : null;
			if ( ! errorMessage ) {
				errorMessage = this.showRequired() ? requiredFieldErrorFormatter( this.props.label || this.props.placeholder || '' ) : null;
			}
		}

		return (
			<div>
				{ checkboxes }
				{ errorMessage && ( <FormInputValidation text={ errorMessage } isError={ true } /> ) }
			</div>
		);
	}
} );
