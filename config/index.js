
var config = {
	mongoURI : 'mongodb://admin:1234@cluster0-shard-00-00-pdaz1.mongodb.net:27017,cluster0-shard-00-01-pdaz1.mongodb.net:27017,cluster0-shard-00-02-pdaz1.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
	serverPort: process.env.PORT || 3000
};
  
module.exports = config;