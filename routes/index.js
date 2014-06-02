var express = require('express');
// var router = express.Router();

/* GET home page. */

exports.load = function(req, res){
	res.render('index', {'topic': 'CourseGom1', 'title': 'CourseGom', 'anotherGom': '讓修課變得更輕鬆。'});
};

exports.create_load = function(req, res){
	//console.log('testing');
	res.render('data');
}

exports.create_course = function(req, res){
	var msg = {};
	msg.semester = req.body.semester;
	msg.name = req.body.name;
	msg.time = req.body.time;
	msg.teacher = req.body.teacher;
	msg.confirm = "good";
	console.log("server has received the course data (name) : " + msg.name);
	res.send(msg);
}

exports.lala = function(req, res){

	console.log('hahahalagi');
	console.log(req.body.gom);
	var data = {};
	data.gom = "lagi is fun!";
	res.send(data);
};
