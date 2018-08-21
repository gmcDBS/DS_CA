var express = require('express');
var app = express();
var db = require('./mongodb');

var TimeKeepRoute = require('./app/routes/TimeKeepRoute');

app.use('/*',function(req, res, next) {

   res.setHeader('Access-Control-Allow-Origin', '*');

   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT');

   res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

   res.setHeader('Access-Control-Allow-Credentials', true);

   next();

});

app.use('/timekeep', TimeKeepRoute);


app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
});

module.exports = app;
