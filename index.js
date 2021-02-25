var express = require('Express');
var app = express();

var routes = require('./routes.js');

var bodyParser = require('body-parser');
// var cors = require('cors');


// app.use(cors());

app.use(bodyParser.json())
//both index.js and things.js should be in same directory
app.use('/api', routes);

app.listen(3000); 