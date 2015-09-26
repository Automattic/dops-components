wpcom-undocumented
======

`wpcom-undocumented` adds undocumented endpoints from the [WordPress.com REST-API](https://developer.wordpress.com/docs/api/) to the `wpcom.js` module. REST-API endpoints are left undocumented when they are new and expected to change. When the endpoints are considered stable they will migrate into either the [wpcom-private.js repo](https://github.com/Automattic/wpcom-private.js) (if they will remain unpublished), or the [wpcom.js repo](https://github.com/Automattic/wpcom.js) if the endpoint is documented and made public.

These undocumented endpoints are automatically added to your `wpcom.js` instance when you use the `wp` constructor.

```javascript
var wpcom = require( 'lib/wp' );

wpcom.undocumented().readLists( function( err, data ) {
    debug( 'Posts:', data );
} );
```

The structure of the undocumented methods should be similar to the structure of `wpcom` to make it easier to port over when the endpoint is ready.
