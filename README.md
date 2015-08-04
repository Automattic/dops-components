DOPS Components
===============

Shared components for DOPS projects

# Developing

To launch a development server:

```bash
gulp
```

Then open http://localhost:8085/demo.html in your browser. Any changes you make to SCSS or JS/JSX files should be updated as your save.

If you wish to compile a bundle (which shouldn't be something you do in this package, but I'll indulge you), you can run:

```bash
gulp webpack:build-dev
```

You can use that build script from the gulpfile as an example when developing your own JS projects which use dops-components.

# Using DOPS Components in your project

## Installing

```bash
npm install automattic/dops-components --save-dev
```

## Using components

You'll need to require them using a full path from the module name, e.g.:

```javascript
AbTest = require('@automattic/dops-components/client/components/tracks-ab-test');
```

## Developing against a live checkout

It's handy to link the checked-out dops-components code directly into your project. You can do that as follows.

In the dops-components directory:

```bash
npm link
```

In the directory of a project that uses dops-components:

```bash
npm link @automattic/dops-components
```

Assuming you use webpack in your project, you'll want to add the paths for compiling JSX to your JSX loader, like this:

```javascript
{
	test: /\.jsx?$/,
	loaders: jsLoader,

	// include both typical npm-linked locations and default module locations to handle both cases
	include: [
		path.join(__dirname, 'client'), 
		path.join(__dirname, '../dops-components/client'), 
		path.join(__dirname, 'node_modules/@automattic/dops-components/client')
	]
}
```

Note: the above snippet assumes your project is checked out in the same directory as dops-components. Also note that we need 2 entries because of weirdness that webpack currently has following symlinks when hot-loading.

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