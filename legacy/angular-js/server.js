var express  = require('express');
var app      = express();

app.get('*', function(req, res) {
	res.sendfile('./app/index.html');
});

app.listen(8000);

console.log("App listening on port 8000");