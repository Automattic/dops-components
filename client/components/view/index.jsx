/* A simple FlexBox implementation */
/* All credit must go to Thomas Coopman for his original es6 implementation at: https://github.com/tcoopman/react-flexbox */

var React = require( 'react' ),
	m = require( '../../utils/m' ),
	Radium = require( 'radium' );

var flexContainerStyle = {
	display: 'flex',
	flexWrap: 'nowrap',
	flex: '1 0 auto',
	justifyContent: 'space-between',
	alignContent: 'space-between',
	alignItems: 'stretch'
};

function calcFlexStyle( props ) {
	var divStyle = {};

	var defaultGrowShrink = props.stretch ? 1 : 0;

	var flexGrow = props.grow ? props.grow : defaultGrowShrink;
	var flexShrink = props.shrink ? props.shrink : defaultGrowShrink;
	var flexDirection = props.column ? 'column' : 'row';
	var flexBasis = 'auto';

	if ( typeof props.width === 'number' ) {
		flexGrow = props.width;
	} else if ( props.width ) {
		divStyle.width = props.width;
	}

	if ( props.height ) {
		divStyle.height = props.height;
	}

	divStyle.flexBasis = flexBasis;
	divStyle.flexGrow = flexGrow;
	divStyle.flexShrink = flexShrink;
	divStyle.flexDirection = flexDirection;
	
	return divStyle;
}

let View = React.createClass( {
	_childrenWithPadding: function() {
		if ( !this.props.padding ) {
			return this.props.children;	
		}

		let total = React.Children.count( this.props.children ),
			count = 0,
			cssProp = this.props.column ? 'marginBottom' : 'marginRight';
		
		return React.Children.map( this.props.children, function( child ) {			
			var style = {};
			count = count + 1;

			style[cssProp] = this.props.padding;

			if ( count < total ) {
				return React.cloneElement( child, { style: m( child.props.style, style ) } );
			} 
			return child;
		}, this );
	},

	render: function() {
		var { row, column, width, height, auto, style, stretch, child, ...other } = this.props;

		var viewProps = {
			row: row,
			column: column,
			width: width,
			height: height,
			auto: auto,
			style: style,
			stretch: stretch,
			child: child
		};

		var viewStyle = calcFlexStyle( viewProps );

		style = style || {};

		// this is so we can say <View child .../> and not get display:flex
		let computedStyle = this.props.child ? m( viewStyle, ...style ) : m( flexContainerStyle, viewStyle, ...style );

		return <div {...other} style={computedStyle}>{this._childrenWithPadding()}</div>;
	}
} );

module.exports = Radium( View );
