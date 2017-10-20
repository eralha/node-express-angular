var express = require('express')
  , router = express.Router();

  
router.get('/', function(req, res, next) {

	/* Unauthorized Access
	res.status(401).send("Tough luck buddy");
	next('invalid user');
	return;
	*/

	GLOBAL.DB.getUsers().then(function(docs){
		res.json({'users':'ALL', numUser: docs.length});
	});
});

router.get('/:id', function(req, res) {
	res.json({'user_id':req.params.id}); 
});

module.exports = router;