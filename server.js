var express = require('express'); 
var server = express();

var bp = require('body-parser');
server.use(express.static(__dirname+'/client'));
server.use(bp.json());
server.use(bp.urlencoded({extended:true}));
server.post('/data', function(req,res)
{
	var dataReceived = req.body; 
	res.status(200).send(dataReceived);
})

server.listen(5000);
