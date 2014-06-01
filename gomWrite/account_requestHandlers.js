var fs = require('fs');
var url = require("url");
function start(request,response) {
	console.log("Request handler 'start' was called.");
	var filename = "account_index.html";
	var buf = fs.readFileSync(filename, "utf8");
	response.writeHead(200, {"Content-type":"text/html"});
	response.write(buf);
	response.end();

}

function upload(request,response) {
	console.log("Request handler 'upload' was called.");
	// Retrieve
	var MongoClient = require('mongodb').MongoClient;
	var url_parts = url.parse(request.url, true);
	var query = url_parts.query;
	delete query["_"];
	//console.log(query);
	// Connect to the db
	MongoClient.connect("mongodb://localhost:27017/web_final", function(err, db) {
		if(err) { return console.dir(err); }
		var account=db.collection('account');
		if(query.l_r==1){	//register
			delete query["l_r"];
			account.insert(query, {w:1}, function(err, result) {});
		}
		else{	//login
			delete query["l_r"];
			var detector=0;
			var stream = account.find(query).stream();
			stream.on("data", function(item) {
				detector++;
			});
			stream.on("end", function() {
				if(detector==1){
					console.log("correct!");
					var filename = "home.html";
					var buf = fs.readFileSync(filename, "utf8");
					response.writeHead(200, {"Content-type":"text/html"});
					response.write(buf);
					console.log(buf);
				}
				else{
					console.log("wrong!");
					response.write("alert('fuck')");
				}
			});
			
		}
    	response.end();
	});
}

exports.start = start;
exports.upload = upload;
