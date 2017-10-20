var express = require('express')
  , router = express.Router();

  
router.get('/', function(req, res, next) {

	/* Unauthorized Access
	res.status(401).send("Tough luck buddy");
	next('invalid user');
	return;
	*/

	res.json({'users':'ALL'}); 
});

router.get('/:id', function(req, res) {
	res.json({'user_id':req.params.id}); 
});

module.exports = router;