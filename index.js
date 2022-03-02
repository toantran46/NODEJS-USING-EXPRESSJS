const express = require('express');
var bodyParser = require('body-parser');

var userRoute = require('./route/user.route');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/',(req, res) => {
	res.render('index');
});

app.use(express.static('public'));

app.use('/users',userRoute);

app.listen(port, function(){
	console.log('Listen on port '+port)
});