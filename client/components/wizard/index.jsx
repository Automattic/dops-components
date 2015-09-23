var React = require( 'react' ),
	TimeoutTransitionGroup = require( '../timeout-transition-group' );

require( './style.scss' );

var Wizard = React.createClass( {

	getInitialState: function() {
		return {
			step: 0,
			transitionType: 'slideRTL'
		};
	},

	next: function() {
		// transition to next slide
		this.setStep( this.state.step+1 );
	},

	prev: function() {
		// transition to previous slide
		this.setStep( this.state.step-1 );
	},

	setStep: function( stepNum ) {
		if ( stepNum < this.state.step ) {
			this.setState( { transitionType: 'slideLTR', step: stepNum } );	
		} else {
			this.setState( { transitionType: 'slideRTL', step: stepNum } );
		}
	},

	getStep: function() {
		return this.state.step;
	},

	render: function() {
		return (
			<div style={{width: '100%', overflow: 'hidden', position: 'relative'}}>
				<TimeoutTransitionGroup 
							enterTimeout={800}
							leaveTimeout={800} 
							transitionName={this.state.transitionType}>
					{this._renderSlide()}
				</TimeoutTransitionGroup>
			</div>
		);
	},

	_renderSlide: function() {
		var key = 'step-'+this.state.step;
		return (
			<div ref="slide" key={key} style={{width: '100%', float: 'left'}}>
				{this.props.children[this.state.step]}
			</div>
		);
	}
} );

module.exports = Wizard;
