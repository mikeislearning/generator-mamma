require.config({
    paths: {
        <% if(jsLibrary==="jQuery") { %>
        jquery: '../bower_components/jquery/jquery',
        handlebars: '../bower_components/handlebars/handlebars'
        <% } else { %>
        angular: '../bower_components/angular/angular'
        <% } %>
        <% if (compassBootstrap) { %>,
        bootstrapAffix: '../bower_components/sass-bootstrap/js/affix',
        bootstrapAlert: '../bower_components/sass-bootstrap/js/alert',
        bootstrapButton: '../bower_components/sass-bootstrap/js/button',
        bootstrapCarousel: '../bower_components/sass-bootstrap/js/carousel',
        bootstrapCollapse: '../bower_components/sass-bootstrap/js/collapse',
        bootstrapDropdown: '../bower_components/sass-bootstrap/js/dropdown',
        bootstrapModal: '../bower_components/sass-bootstrap/js/modal',
        bootstrapPopover: '../bower_components/sass-bootstrap/js/popover',
        bootstrapScrollspy: '../bower_components/sass-bootstrap/js/scrollspy',
        bootstrapTab: '../bower_components/sass-bootstrap/js/tab',
        bootstrapTooltip: '../bower_components/sass-bootstrap/js/tooltip',
        bootstrapTransition: '../bower_components/sass-bootstrap/js/transition'<% } %>
    },

    shim: {
<% if (jsLibrary==="jQuery") { %>

        'handlebars': {
            exports: 'Handlebars'
        }
    <% } %>

    <% if (compassBootstrap) { %>,

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
    }
<% } %>

});

//add bootstrap requirements as you wish!

require(['app', <% if (jsLibrary==="jQuery") {%>
 'jquery','handlebars'],
  function (app, $, handlebars) {
    'use strict';
    // use app here
    console.log(app);
});
 <% } else { %>
    'angular'],
     function (app, angular) {
    'use strict';
        // use app here
        console.log(app);
    });
   <% } %>



