var MongoClient = require('mongodb').MongoClient;
var config = require('../config');
var Q = require('q');

//Uri is configured on app config
var uri = config.mongoURI;

/**
 * Defines database operations.
 * @class
 */
var DB = function(){

	this.dbConnectDefer = Q.defer();

};


/**
 * Establishes MongoDB connection and returns the connection object.
 * @function
 * @param {function} callback - Will be called when mongo connects and return the MongoDB db object.
 */
DB.prototype.dbConnect = function(callback){
	var self = this;

	MongoClient.connect(uri, function(err, db) {
	  if(err){
	  	return console.log('Error Connecting to database');
	  }

	  //Assing Mongo db cursor to object proto
	  self.db = db;

	  //Resolve global promisse
	  self.dbConnectDefer.resolve(self.db);

	  //Calling callback
	  if(callback){ callback(self.db); }

	  //Set on disconnect handler
	  self.db.on('close', function () {
	    console.log('Error, db connection closed, retrying in 5 seconds');

	    setTimeout(function(){
	    	self.dbConnectDefer = Q.defer();
	    	self.dbConnect();
	    }, 5000);
	  });

	});

	return this.dbConnectDefer.promise;
}//END DB CONNECT

/**
 * Retrieves Users from database
 * @function
 */
DB.prototype.getUsers = function() {
  var usersDefer = Q.defer();

  if(this.db){
	this.db.collection('testColl').find({}).toArray(function(err, results){
		usersDefer.resolve(results);
	}, function(){ //Close connection after reading
		db.close();
	});
  }else{
  	usersDefer.reject('Error, DB NOT CONNECTED');
  }

  return usersDefer.promise;
}


module.exports = new DB();