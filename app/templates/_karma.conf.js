// Karma configuration
module.exports = function(config) {
  config.set({
// base path, that will be used to resolve files and exclude
    basePath:'',

    frameworks:['jasmine'<% if (includeRequireJS){ %>, 'requirejs'<% } %>],

    // list of files / patterns to load in the browser
    files:[
    //jquery is somehow needed, regardless of what require does
     'assets/bower_components/jquery/jquery.js',

    <% if (includeRequireJS){ %>
     {pattern:'assets/bower_components/**/*.js',included: false},

      //src files
      {pattern:'assets/scripts/*.js', included: false},
      {pattern:'assets/scripts/**/*.js', included: false},

      //spec test files
      {pattern:'test/unit/*.js', included:  false},
      {pattern:'test/unit/**/*.js', included:  false},
        'test/helpers/test_main.js',


      <% } else { %>
      'assets/bower_components/**/*.js',
      //src files
      'assets/scripts/*.js',
      'assets/scripts/**/*.js',
       //spec test files
      'test/unit/*.js',
      'test/unit/**/*.js',
      //remaining bower components needed, like underscore
      <% } %>


    ],

    // list of files to exclude
    exclude:[<% if (includeRequireJS) { %>
      'assets/scripts/require_config.js' <% } %>
    ],

    // //specify any preprocessors you would like to work with
    // preprocessors: {
    //   //'**/*.html': [],
    //   'assets/scripts/**/*.js': 'coverage',
    //   'assets/scripts/*.js': 'coverage',
    //   'test/spec/**/*.js':'coverage'
    // },

    // //provides a summary of what code is covered by tests
    // coverageReporter: {
    //   type : 'text-summary',
    //   dir : 'coverage/'
    // },


    // test results reporter to use
    // possible values: dots || progress || growl
    reporters:['dots'],

    // web server port
    port:8080,

    // cli runner port
    runnerPort:9100,

    // enable / disable colors in the output (reporters and logs)
    colors:true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    // logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch:true,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: ['PhantomJS'],

    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 5000,

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false

  });
};

