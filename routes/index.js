var express = require('express');
// var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Express' });
// });

exports.load = function(req, res){
	res.render('index', {'title': 'CourseGom', 'anotherGom': '讓修課變得更輕鬆。'});
};

exports.lala = function(req, res){

	console.log('hahahalagi');
	console.log(req.body.gom);
	var data = {};
	data.gom = "lagi is fun!";
	res.send(data);
};
// module.exports = router;
