All Sites Icon
==============

This component is used to display a composite grid of site icons from the user's sites. It takes the sites-list instance object as a prop.

#### How to use:

```js
var AllSitesIcon = require( 'my-sites/all-sites-icon' );

render: function() {
	return (
		<div className="your-stuff">
			<AllSitesIcon sites={ sitesList } />
		</div>
	);
}
```

![sidebar-all-sites-picker-i2](https://cloud.githubusercontent.com/assets/4389/5345518/2febfbd2-7f10-11e4-84d4-894d18250695.png)