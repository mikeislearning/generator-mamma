var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/assets/scripts',

    paths: {<% if (angular) { %>
        'angular':'../bower_components/angular/angular',
        'angularMocks':'../bower_components/angular-mocks/angular-mocks',
        'angularRoute':'../bower_components/angular-route/angular-route',
        <% } if (backbone) {%>
         'backbone': '../bower_components/backbone/backbone'
         <% } if(!angular && !backbone) {%>
        'handlebars':'../bower_components/handlebars/handlebars'
        <% } %>
        'jquery': '../bower_components/jquery/jquery',
        'jasmineJquery':'../bower_components/jasmine-jquery/lib/jasmine-jquery',
        'lodash': '../bower_components/json3/vendor/lodash'
    },

    shim: { <% if (angular) { %>
        'angular' : {'exports' : 'angular'},
        'angularRoute':['angular'],
        'angularMocks': {
                deps:['angular'],
                'exports':'angularMocks'
        },<% } if (backbone) { %>
        'backbone':{
            deps:['lodash',
            'jquery'],
            exports: 'Backbone'
        },<% } %>
         'jquery': {
            exports: '$'
        },
        'lodash': {
            exports: '_'
        },
        'app': {
            deps: [
            <% if (angular) { %>'angular','angularMocks','angularRoute',<% } if (backbone) { %>'backbone',<% } if (!angular && !backbone) { %> 'handlebars',<% } %> 'jquery', 'jasmineJquery','lodash'
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
        'app' <% if (angular) { %>
        , 'controllers/main'  <% } %>
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
