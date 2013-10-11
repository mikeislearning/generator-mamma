var express = require('express'),
    path = require('path');

module.exports = function (app) {
    app.configure('development', function () {
        app.use(function staticsPlaceholder(req, res, next) {
            return next();
        });

        app.set('port', process.env.PORT || 3000);
        app.set('views', path.join(app.directory, '/app'));
        app.set('view engine', 'html');
        app.engine('html', hbs.__express);
        app.use(express.favicon());
        app.use(express.logger('dev'));
        app.use(express.bodyParser());
        app.use(express.methodOverride());
        app.use(express.cookieParser('your secret here'));
        app.use(express.session());

        app.use(function middlewarePlaceholder(req, res, next) {
          return next();
        });

        app.use(app.router);
        app.use(express.errorHandler());
    });
};
