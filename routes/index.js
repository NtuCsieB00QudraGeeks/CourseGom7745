var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

exports.load = function(req, res){
	res.render('index', {'title': 'CourseGom!', 'anotherGom': 'gomgom7745'});
}
// module.exports = router;
