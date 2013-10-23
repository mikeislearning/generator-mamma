var tests = [];
for (var file in window.__karma__.files) {
    if (/Spec\.js$/.test(file)) {
        tests.push(file);
    }
}
requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base/assets/scripts/',

    paths: {<% if (jsLibrary==='angular') { %>
        'angular':'../bower_components/angular/angular',
        'angular-mocks':'../bower_components/angular-mocks/angular-mocks',<% } else { %>
        'jquery': '../bower_components/jquery/jquery',<% } %>
        'underscore': '../bower_components/underscore/underscore'
    },

    shim: {
        'underscore': {
            exports: '_'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
