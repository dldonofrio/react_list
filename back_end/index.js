var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 5000

var userController = require('./controllers/userController');

app.use(cors());

app.get('/fetch', userController.fetch);
// app.post('/submit', userController.submit);


app.listen(port, () => {
	console.log('Back-end is listening on localhost:${port}')
})