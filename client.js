// Kicks off a local web server for the client so you can
// run it with the server.

// If you need this to run the client locally, you may need to:
// npm install express

var express = require('express');
var app = express();

app.use(express.static('app/angular-test'));

var port = 3001;
app.listen(port);