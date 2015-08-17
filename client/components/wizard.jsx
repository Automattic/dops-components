var React = require('react'),
	TimeoutTransitionGroup = require('./timeout-transition-group');

var Wizard = React.createClass({

	propTypes: {
		width: React.PropTypes.any,
		height: React.PropTypes.any.isRequired
	},

	getDefaultProps: function() {
		return {
			width: "100%"
		};
	},

	getInitialState: function() {
		return {
			step: 0,
			transitionType: "slideRTL"
		};
	},

	next: function() {
		// transition to next slide
		this.setStep(this.state.step+1);
	},

	prev: function() {
		// transition to previous slide
		this.setStep(this.state.step-1);
	},

	setStep: function( stepNum ) {
		if ( stepNum < this.state.step ) {
			this.setState({ transitionType: "slideLTR", step: stepNum });	
		} else {
			this.setState({ transitionType: "slideRTL", step: stepNum });
		}
	},

	getStep: function() {
		return this.state.step;
	},

	render: function() {
		return (
			<div style={{width: this.props.width, height: this.props.height, overflow: 'hidden', position: 'relative'}}>
				<TimeoutTransitionGroup 
							enterTimeout={500}
							leaveTimeout={500} 
							transitionName={this.state.transitionType}>
					{this._renderSlide()}
				</TimeoutTransitionGroup>
			</div>
		);
	},

	_renderSlide: function() {
		var key = "step-"+this.state.step;
		return (
			<div key={key} style={{width: this.props.width, height: this.props.height}}>
				{this.props.children[this.state.step]}
			</div>
		);
	}
});

module.exports = Wizard;
