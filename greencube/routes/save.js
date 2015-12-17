var express = require('express');
var router = express.Router();
var uuid = require('node-uuid');
var _ = require('lodash');

var tasks = []

/* GET tasks list */
router.get('/', function(req, res, next) {
  res.send(tasks);  
});

/* POST save task */
router.post('/', function(req, res, next) {
	_.assign(req.body, {_id : uuid.v1()});
	tasks.push(req.body);
	req.session.tasks = tasks || [];
  res.send(req.body);
});

module.exports = router;
