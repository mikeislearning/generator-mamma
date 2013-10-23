require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery'<% if (compassBootstrap) { %>,
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
    },
    shim: {
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
    }
});

require(['app', 'jquery'], function (app, $) {
    'use strict';
    // use app here
    console.log(app);
    console.log('Running jQuery %s', $().jquery);
});
