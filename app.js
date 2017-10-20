var express = require('express'); 
var app = express();
var bodyParser = require('body-parser'); 
var fs = require('fs');
var morgan = require('morgan');
//app config
var config = require('./config');

var db = require('./models/db.js');

//Try connect to DB
if(GLOBAL.DBPool === undefined){
	db.dbConnect().then(function(db){
		GLOBAL.DBPool = db;
		console.log('DB connected');
	});
}

morgan.token('res', function(res) {
	return res.headers['user-agent'];
});

var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'});
// setup the logger
app.use(morgan(':method :url :status :response-time ms - :res[content-length]', {stream: accessLogStream}));
app.use(bodyParser.json());  

//Set middleware for app logic
app.use(require('./controllers'));

//Serve all static files trought this middleware
app.use('/', express.static(__dirname+'/www'));

//Error handling
app.use(function (err, req, res, next) {
  console.log(err);
})

//Serve the index.html on any route that is not matched on middlewares
app.get('*',function(req,res){
	res.sendFile(__dirname + "/www/index.html");
});

app.listen(config.serverPort, function(){
	console.log('Listen on '+config.serverPort);
});