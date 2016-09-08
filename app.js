//EXPRESS REQUIREMENTS
var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app_server/public'));
app.use(express.static(__dirname + '/app_client'));



app.use(function(err,req,res,next){
    res.status(500);
    res.send(err);
})



//BODY PARSER
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));


//MONGOOSE AND MONGO
require('./app_api/models/db');

app.use('/dump', require('./app_api/routes/dump.js'));
app.use('/todos', require('./app_api/routes/todoRoutes.js'));
app.use('/', require('./app_server/routes/main.js'));


var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Hello World app started on http://localhost:' +
                port + '; press ctrl-c to terminate.');
});

module.exports = app;


