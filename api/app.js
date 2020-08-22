var express = require('express');
var app = express()
var cors = require('cors');

app.use(cors());

app.get('/', function(req,res){
	var is = ['falan', 'filan'];
	res.json(is);
});

var server = app.listen(3000, ()=>{
	console.log('server calisiyor');
})