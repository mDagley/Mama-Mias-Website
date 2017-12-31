var nunjucksRender = require('gulp-nunjucks-render');
var express = require('express');
var nunjucks = require('nunjucks');
var app = express();

//app.set('view engine', 'html');
nunjucks.configure('templates', {
    autoescape: true,
    express: app
});

app.get('/home.html', function(req, res){
    return res.render('sample.html');
});

app.listen(3000);