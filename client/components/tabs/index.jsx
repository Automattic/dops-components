var React = require( 'react' ),
	styles = require( '../../styles' ),
	m = require( '../../utils/m' );

require( './style.scss' );

var Panel = React.createClass( {
	propTypes: {
		title: React.PropTypes.any.isRequired
	},

	render: function() {
		return <div>{this.props.children}</div>;
	}
} );

var Tabs = React.createClass( {

	propTypes: {
		layout: React.PropTypes.oneOf( ['horizontal', 'vertical'] )
	},

	styles: {
		horizontal: {

			link: {
				color: '#aaa',
				display: 'block',
				fontSize: 14,
				margin: '0 15px',
				padding: '10px 0',
				textAlign: 'center',
				textTransform: 'uppercase'
			},
			activeLink: {
				borderBottom: '2px solid #029dd6',
				color: '#444',
				textDecoration: 'none'
			},
			content: {

			}
		},
		vertical: {
			wrapper: {
				width: '30%',
				float: 'left'
			},
			item: {
				listStyle: 'none',
				margin: '0 0'
			},
			link: {
				display: 'block',
				borderLeft: '2px solid transparent',
				color: '#999',
				margin: '0 10px 10px 0',
				padding: '4px 6px'
			},
			activeLink: {
				borderColor: '#029dd6',
				color: '#029dd6',
				background: '#f9f9f9',
				textDecoration: 'none'
			},
			content: {
				float: 'right',
				width: '70%'
			}
		}
	},

	getDefaultProps: function() {
		return {
			layout: 'horizontal'
		};
	},

	getInitialState: function() {
		return {
			activeTab: 0
		};
	},

	handleSelectTab: function( index, e ) {
		e.preventDefault();
		this.setState( { activeTab: index } );
	},

	handleMouseOverTab: function( index ) {
		this.setState( { hoverTab: index } );
	},

	handleMouseOutTab: function( index ) {
		if ( this.state.hoverTab === index ) {
			this.setState( { hoverTab: null } );
		}
	},

	_isHorizontal: function() {
		return this.props.layout === 'horizontal';
	},

	render: function() {
		// var theme = this._isHorizontal() ? this.styles.horizontal : this.styles.vertical;
		var theme = this._isHorizontal() ? "horizontal" : "vertical";
		return (
			<div className={"dops-tabs-"+theme}>
				{this._renderNav()}
				<div style={theme.content}>
					{React.Children.map( this.props.children, function( child, index ) {
						if ( index === this.state.activeTab ) {
							return child;
						} 
						return null;
					}.bind( this ) )}
				</div>
				<div style={styles.clear}></div>
			</div>
		);
	},

	_renderNav: function() {
		return (
			<ul>
				{React.Children.map( this.props.children, function( child, index ) {
					var title = child.props.title,
						ref = 'tab-'+( index + 1 ),
						active = this.state.activeTab === index,
						hover = this.state.hoverTab === index;

					var className = this.state.activeTab === index ? "active" : null;

					return (
						<li key={index} className={className}>
							<a href="#" ref={ref} onClick={this.handleSelectTab.bind( this, index )} onMouseOver={this.handleMouseOverTab.bind( this, index )} onMouseOut={this.handleMouseOutTab.bind( this, index )}>{title}</a>
						</li>		
					);
				}.bind( this ) )}
				<div style={styles.clear}/>
			</ul>
		);
	}
} );

Tabs.Panel = Panel;

module.exports = Tabs;
