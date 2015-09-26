WP
======

Offers a shared `WPCOM` API instance to interact with the WordPress.com REST API client-side.

Calls to `wpcom` use the iframe rest-proxy via `postMessage`. Authentication is handled via the user's WPcom authentication cookies and is restricted to only certain origins. This is why we use `calypso.dev` in development.

### Undocumented Endpoints

Those API endpoints that are not yet publicly documented need to be defined as part of the `wpcom-undocumented` module.
