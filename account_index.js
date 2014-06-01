var server = require("./account_server");
var router = require("./account_router");
var requestHandlers = require("./account_requestHandlers");

var handle = {}
handle["/"] = requestHandlers.start;
handle["/start"] = requestHandlers.start;
handle["/upload"] = requestHandlers.upload;

server.start(router.route, handle);
