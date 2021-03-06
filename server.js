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

//takes textList array and returns it to client
app.get('/api/textList', function(request, response) {
  response.json(textList);
});

//takes object and pushes it into textList
//in case array is sent (for likes, dislikes, and message concatenation), overwrite using the array values
app.post('/api/textList', function(request, response) {
  if(Array.isArray(request.body)) {
    for(var i = 0; i < textList.length; i++) {
      if(textList[i].index === request.body[0]) {
        textList[i].likes = request.body[1];
        textList[i].text = request.body[2];
      }
    }
  } else {
    textList.push(request.body);
  }
  response.end();
});

app.listen(port, function() {
	console.log('Our app is running on http://localhost: ' + port);
});
