var React = require( 'react' ),
	AbTest = require( './ab-test' );

// Simple AbTest wrapper which sends events to Tracks
var Experiment = React.createClass( {
	propTypes: {
		name: React.PropTypes.string.isRequired,
		namespace: React.PropTypes.string.isRequired
	},

	clearCookie: function() {
		this.refs.experiment.clearCookie();
	},

	handleChoice: function( experiment, variant ) {
		var _tkq = window._tkq || [];
		_tkq.push( ['recordEvent', this.props.namespace+'_abtest_start',{abtest_name:experiment,abtest_variation:variant}] );
	},

	render: function() {
		return (
			<AbTest.Experiment ref="experiment" onChoice={this.handleChoice} name={this.props.name}>
				{this.props.children}
			</AbTest.Experiment>
		);
	}
} );

var Variant = React.createClass( {
	propTypes: {
		name: React.PropTypes.string.isRequired
	},

	render: function() {
		return (
			<AbTest.Variant name={this.props.name}>
				{this.props.children}
			</AbTest.Variant>
		);
	}
} );

module.exports = {
	Experiment: Experiment,
	Variant: Variant
};