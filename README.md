Sunlight Industry Browse
========================

Experimental project to use Sunlight Foundation's [Influence Explorer API](http://tryit.sunlightfoundation.com/influenceexplorer) to browse Industry contributions and issue association.

Express is used to expose some simple urls as proxies to the relevant Sunlight endpoints.  D3.js then loads JSON data directly from the API for charting.

Running
=======
First, install the node modules.

>npm install

Then, use npm to start the node server.

>npm start

The default port is 3000, so browse to http://localhost:3000 to use the app.

