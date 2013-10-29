var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/assets/scripts/',

    paths: {<% if (angular) { %>
        'angular':'../bower_components/angular/angular',
        'angular-mocks':'../bower_components/angular-mocks/angular-mocks',<% } %>
        'jquery': '../bower_components/jquery/jquery',
        'jasmineJquery':'../../test/spec/javascripts/helpers/jasmine-jquery',
        'underscore': '../bower_components/underscore/underscore'
    },

    shim: {
        <% if (angular) { %>
        'angular' : {'exports' : 'angular'},
        'angularRoute':['angular'],
        'angularMocks': {
                deps:['angular'],
                'exports':'angularMocks'
            },
            <% } %>
         'jquery': {
            exports: '$'
        },
        'underscore': {
            exports: '_'
        },
        'app': {
            deps: [
            'jquery','angular','underscore','angularMocks','angularRoute','jasmineJquery'
            ]
        }

    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});


require(
    [
        'app'
        , 'controllers/main'
        // end:dependencies
    ],
    function ( app ) {
        'use strict';
  <% if (angular) { %>
        var $html = angular.element(document.getElementsByTagName('html')[0]);

        angular.element().ready(function() {
            $html.addClass('ng-app');
            angular.bootstrap($html, [app['name']]);
        });
          <% } %>
    }
);
