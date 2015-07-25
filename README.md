DOPS Components
===============

Shared components for DOPS projects

# Installing

```bash
npm install automattic/dops-components --save-dev
```

# Developing

It's handy to link the checked-out dops-components code directly into your project. You can do that as follows.

In the dops-components directory:

```bash
npm link
```

In the directory of a project that uses dops-components:

```bash
npm link @automattic/dops-components
```

# Usage

Requires a functioning browserify or webpack environment.

## A/B test example

```jsx
var React = require('react'),
	PwywSlider = require('pwyw-slider'),
	AbTest = require('@automattic/dops-components/client/components/tracks-ab-test');

var MyComponent = React.createClass({
	//... other things ...
	render: function() {
		return (
			<div>
				<AbTest.Experiment name="slider">
					<AbTest.Variant name="normal">
						<PwywSlider value={this.state.value} defaultValue={this.props.defaultQty} onChange={this.handlePwywChange} interval={this.props.interval}/>
					</AbTest.Variant>
					<AbTest.Variant name="skip6">
						<PwywSlider value={this.state.value} defaultValue={this.props.defaultQty} skipValues={[6]} onChange={this.handlePwywChange} interval={this.props.interval}/>
					</AbTest.Variant>
				</AbTest.Experiment>
			</div>
		);
	}
});

module.exports = MyComponent;
```