var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
var port = 5000

var userController = require('./controllers/userController');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.get('/fetch', userController.fetch);
app.post('/add', userController.add);
app.post('/check', userController.check);
app.post('/delete', userController.delete);
// app.post('/submit', userController.submit);


app.listen(port, () => {
	console.log('Back-end is listening on localhost:${port}')
})