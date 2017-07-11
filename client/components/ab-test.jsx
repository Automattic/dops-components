// adapted from https://github.com/olahol/react-ab
var React = require( 'react' );

var random = function() {
	try {
		let arr = new Uint16Array( 1 );
		window.crypto.getRandomValues( arr );
		return arr[0] / 65536;
	} catch ( e ) {
		return Math.random();
	}
};

var cookie = {
	get: function( name ) {
		var eq = name + '=',
			ca = document.cookie.split( ';' ),
			c = null;
		for ( let i = 0; i < ca.length; i += 1 ) {
			c = ca[i];
			while ( c.charAt( 0 ) === ' ' ) {
				c = c.substring( 1, c.length );
			}
			if ( c.indexOf( eq ) === 0 ) {
				return decodeURIComponent( c.substring( eq.length, c.length ) );
			}
		}
		return null;
	},

	set: function( name, value, seconds ) {
		var key = name + '=' + encodeURIComponent( value ),
			expires = '',
			path = 'path=/',
			date = null;

		if ( typeof seconds !== 'undefined' ) {
			date = new Date();
			date.setTime( date.getTime() + ( seconds * 1000 ) );
			expires = 'expires=' + date.toGMTString();
		}

		document.cookie = [key, expires, path].join( ';' );
	},

	del: function( name ) {
		this.set( name, '', -1 );
	}
};

var Variant = React.createClass( {
	propTypes: {
		name: React.PropTypes.string.isRequired,
		children: React.PropTypes.node.isRequired
	},

	render: function() {
		if ( React.Children.count( this.props.children ) === 1 ) {
			return this.props.children;
		}

		return React.createElement( 'span', null, this.props.children );
	}
} );

var Experiment = React.createClass( {
	getDefaultProps: function() {
		return {
			get: cookie.get,
			set: cookie.set,
			del: cookie.del,
			random: random
		};
	},

	getInitialState: function() {
		return {
			index: null
		};
	},

	propTypes: {
		name: React.PropTypes.string.isRequired,
		children: React.PropTypes.array.isRequired,
		onChoice: React.PropTypes.func.isRequired
	},

	componentWillMount: function() {
		var variant = this.props.get( this.cookieName() );

		for ( let i = 0; i < this.props.children.length; i += 1 ) {
			if ( variant === this.props.children[i].props.name ) {
				this.setState( {
					index: i
				} );
				this.props.onChoice( this.props.name, this.props.children[i].props.name, i, true );
				return;
			}
		}

		this.chooseVariant();
	},

	chooseVariant: function() { //fire
		var index = Math.floor( this.props.random() * this.props.children.length ),
			variant = this.props.children[index].props.name;

		this.props.set( this.cookieName(), variant );

		this.setState( {
			index: index
		} );
		this.props.onChoice( this.props.name, variant, index, false );

		return index;
	},

	getVariant: function() {
		var child = this.props.children[this.state.index],
			variant = child.props.name;

		return variant;
	},

	cookieName: function() {
		return 'react_ab_' + this.props.name;
	},

	clearCookie: function() {
		this.props.del( this.cookieName() );
	},

	render: function() {
		var child = this.props.children[this.state.index];

		return child;
	}
} );

module.exports = {
	Variant: Variant,
	Experiment: Experiment
};
