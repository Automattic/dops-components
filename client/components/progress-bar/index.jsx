require( './style.scss' );

var React = require('react');

/**
 * Show progress through the steps
 * NOTE: progressPercent MUST be rounded to the nearest 10, i.e. 10, 20, 30, 40...100
 * This is required for the CSS to work (will fix later...)
 **/
var ProgressBar = React.createClass({

	propTypes: {
		style: React.PropTypes.object,
		progressPercent: React.PropTypes.number.isRequired
	},

	render: function() {
		return (
			<div className="dops-progress-bar" style={this.props.style}>
				<div className="dops-progress-bar__bar">
					<span className="dops-progress-bar__progress" style={{ width: this.props.progressPercent+'%' }}></span>
				</div>
				{this.props.progressPercent}% complete
			</div>
		);
	}
});

module.exports = ProgressBar;