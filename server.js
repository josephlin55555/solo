var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static(__dirname));

app.get('/', function(request, response) {
	response.render('index');
});

var textList = [];

app.get('/api/textList', function(request, response) {
  response.json(textList);
});

app.post('/api/textList', function(request, response) {
  console.log(request.body);
  textList.push(request.body);
  response.end();
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost: ' + port);
});
