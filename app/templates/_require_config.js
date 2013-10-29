require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        underscore: 'underscore/underscore',
        <% if (angular) { %>
            angular: '../bower_components/angular/angular',
            angularResource: '../bower_components/angular-resource/angular-resource',
            angularCookies: '../bower_components/angular-cookies/angular-cookies',
            angularSanitize: '../bower_components/angular-sanitize/angular-sanitize',
            angularRoute: '../bower_components/angular-route/angular-route',
            angularMocks: '../bower_components/angular-mocks/angular-mocks',

        <% } if (compassBootstrap) { %>,
        bootstrapAffix: 'sass-bootstrap/js/affix',
        bootstrapAlert: 'sass-bootstrap/js/alert',
        bootstrapButton: 'sass-bootstrap/js/button',
        bootstrapCarousel: 'sass-bootstrap/js/carousel',
        bootstrapCollapse: 'sass-bootstrap/js/collapse',
        bootstrapDropdown: 'sass-bootstrap/js/dropdown',
        bootstrapModal: 'sass-bootstrap/js/modal',
        bootstrapPopover: 'sass-bootstrap/js/popover',
        bootstrapScrollspy: 'sass-bootstrap/js/scrollspy',
        bootstrapTab: 'sass-bootstrap/js/tab',
        bootstrapTooltip: 'sass-bootstrap/js/tooltip',
        bootstrapTransition: 'sass-bootstrap/js/transition'
        <% } %>
    },
    shim: {
        <% if (angular) { %>
            'angular' : {'exports' : 'angular'},
            'angularResource': ['angular'],
            'angularCookies':['angular'],
            'angularSanitize':['angular'],
            'angularRoute':['angular'],
            'angularMocks': {
                deps:['angular'],
                'exports':'angular.mock'
            }
        <% } %>
        <% if (compassBootstrap) { %>
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal:{
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    <% } %>
      'app': {
            deps: [<% if(angular) { %>
                'angular',
                'angularResource','angularCookies','angularSanitize','angularRoute',
                <% } %> 'jquery','underscore'
            ]
        },
        'jquery': {
            exports: '$'
        }
    },
    map: {
        '*': {
            // css here
        }
    }
});
<% if (angular) { %>
    require(
    [
        'app'
        , 'controllers/main'
        // end:dependencies
    ],
    function ( app ) {
        'use strict';

        var $html = angular.element(document.getElementsByTagName('html')[0]);

        angular.element().ready(function() {
            $html.addClass('ng-app');
            angular.bootstrap($html, [app['name']]);
        });
    }
);
    <% } else { %>
require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
<% } %>