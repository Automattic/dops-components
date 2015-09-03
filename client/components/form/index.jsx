/** External Dependencies **/
var React = require( 'react' ),
	Formsy = require( 'formsy-react' );

/** Internal Dependencies **/
var ActionBar = require( './action-bar' ),
	Section = require( './section' ),
	Row = require( './row' ),
	Label = require( './label' ),
	TextInput = require( './input-text' ),
	RadioInput = require( './input-radio' ),
	CheckboxInput = require( './input-checkbox' ),
	SelectInput = require( './input-select' ),
	CountrySelect = require( './input-select-country' ),
	HiddenInput = require( './input-hidden' ),
	Submit = require( './submit' );

require( './style.scss' );

// very thin wrapper for Formsy.Form
let Form = React.createClass( {

	propTypes: {
		style: React.PropTypes.object,
		onValidSubmit: React.PropTypes.func,
		onInvalidValidSubmit: React.PropTypes.func,
		onValid: React.PropTypes.func,
		onInvalidValid: React.PropTypes.func,
		validationErrors: React.PropTypes.object
	},

	getInitialState: function() {
		return {};
	},

	isValid: function() {
		return this.refs.form.isValid();
	},

	submit: function() {
		this.refs.form.submit();
	},

	render: function() {
		var { style, ...other } = this.props;
		return (
			<div className="dops-form" style={style}>
				<Formsy.Form ref="form" {...other}>
					{this.props.children}
				</Formsy.Form>
			</div>
		);
	}
} );

// from: https://gist.github.com/ShirtlessKirk/2134376
/**
 * Luhn algorithm in JavaScript: validate credit card number supplied as string of numbers
 * @author ShirtlessKirk. Copyright ( c ) 2012.
 * @license WTFPL ( http://www.wtfpl.net/txt/copying )
 */
let luhnChk = ( function( arr ) {
	return function( ccNum ) {
		var len = ccNum.length,
			bit = 1,
			sum = 0,
			val;

		while ( len ) {
			val = parseInt( ccNum.charAt( --len ), 10 );
			sum += ( bit ^= 1 ) ? arr[val] : val;
		}

		return sum && sum % 10 === 0;
	};
}( [0, 2, 4, 6, 8, 1, 3, 5, 7, 9] ) );

// To find out more about validators, see:
// https://github.com/christianalfoni/formsy-react/blob/master/API.md#validators

Formsy.addValidationRule( 'isCC', function( values, value ) {
	if ( value === undefined || value === null ) {
		return false;
	}

	// strip spaces
	value = value.replace( /\s/g, '' );

	return value.length === 16 && luhnChk( value );
} );

Form.ActionBar = ActionBar;
Form.Section = Section;
Form.Row = Row;
Form.Label = Label;
Form.TextInput = TextInput;
Form.RadioInput = RadioInput;
Form.CheckboxInput = CheckboxInput;
Form.SelectInput = SelectInput;
Form.CountrySelect = CountrySelect;
Form.HiddenInput = HiddenInput;
Form.Submit = Submit;

module.exports = Form;
