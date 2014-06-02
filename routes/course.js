var express = require('express');


exports.load = function(req, res){
	res.render('course',{
		'topic': '舌頭肌訓練',
		'courseName': '舌頭肌概論',
		'courseDescription': '這堂課會帶你一步一步開發你的舌頭肌，正確的理論，循序漸進的練習基本技巧，相信你也可以成為喇肌高手！'
	});
}