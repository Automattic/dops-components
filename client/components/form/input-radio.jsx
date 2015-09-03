/** External Dependencies **/
var React = require( 'react' ),
	Formsy = require( 'formsy-react' );

module.exports = React.createClass( {
	displayName: 'RadioInput',

	mixins: [Formsy.Mixin],

	propTypes: {
		name: React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			<p>Radio button</p>
		);
	}
} );
