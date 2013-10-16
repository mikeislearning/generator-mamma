/**
 * Module dependencies.
 */

var express = require('express'),
	app = express();

/**
 * App configuration.
 */

app.configure(function () {
  app.use(express.static(__dirname + '/dist'));
  app.set('views', __dirname);
  app.set('view engine', 'html');
});

/**
 * App routes.
 */

app.get('/', function (req, res) {
  res.render('index', { layout: false });
});

/**
 * App listen.
 */

var port = process.env.PORT || 5000;
app.listen(port, function () {
	 console.log('Express (' + app.get('env') + ') server listening on port ' + app.get('port'));
});
