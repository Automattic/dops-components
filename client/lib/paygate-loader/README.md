Paygate Loader
==============

`Paygate` is a library we can use to send Credit card data to the Paygate server and recieve back a token which we then submit to MoneyPress. This class, `PaygateLoader`, takes care of the details of loading the remote `paygate.js` script asynchronously. You can access the `Paygate` class from within the callback of `PaygateLoader.ready` like so:

```
var paygateLoader = require( 'lib/paygate-loader' );

function onSuccess( token ) {
	// Do something with the Paygate token
}

function onError( error ) {
	// Uhoh! We couldn't get a token for some reason
}

paygateLoader.ready( function( Paygate ) {
	var card = {
		'name': 'Ben Dwyer',
		'number': '4024007164575861',
		'cvc': '213',
		'exp_month': '02',
		'exp_year': '2015',
	};

	Paygate.create_token( card, onSuccess, onError );
} );
```
