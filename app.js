var port = (process.env.VCAP_APP_PORT || 3000);
var host = (process.env.VCAP_APP_HOST || 'localhost');
var http = require('express');
var app = http.createServer();
app.get('/', function (req, res) {
    res.send('Hello from Jeff Tian');
});
app.listen(port, host);