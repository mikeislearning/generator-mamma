// Generated on 2013-07-11 using generator-angular 0.3.0
'use strict';
var LIVERELOAD_PORT = 35729;
var path = require('path');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  try {
    yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
  } catch (e) {}

grunt.loadNpmTasks('grunt-express');

  grunt.initConfig({
    yeoman: yeomanConfig,
    watch: {
      <% if (coffee) {%>
      coffee: {
        files: ['assets/scripts/{,*/}*.coffee'],
        tasks: ['coffee:dist']
      },
      coffeeTest: {
        files: ['test/spec/{,*/}*.coffee'],
        tasks: ['coffee:test']
      },
      <% } %>
      compass: {
                files: ['assets/sass/{,*/}*.{scss,sass}'],
                tasks: ['compass:dev', 'autoprefixer']
            },
      // styles: {
      //           files: ['.tmp/styles/{,*/}*.css'],
      //           tasks: ['copy:styles', 'autoprefixer']
      //       },
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%%= yeoman.app %>/{,*/}*.html',
          '{.tmp,assets}/styles/{,*/}*.css',
          '{.tmp,assets}/scripts/{,*/}*.js',
          'assets/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      }
    },
    compass: {
            options: {
                sassDir: 'assets/sass',
                cssDir: '.tmp/styles',
                generatedImagesDir: '.tmp/images/generated',
                imagesDir: 'assets/images',
                javascriptsDir: 'assets/scripts',
                fontsDir: 'assets/styles/fonts',
                importPath: 'assets/bower_components',
                httpImagesPath: 'assets/images',
                httpGeneratedImagesPath: 'assets/images/generated',
                httpFontsPath: 'assets/styles/fonts',
                relativeAssets: false,
                assetCacheBuster: false
            },
            dist: {
                options: {
                    generatedImagesDir: '<%%= yeoman.dist %>/images/generated'
                }
            },
            dev: {
                options: {
                    debugInfo: false
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },
    express: {
      options: {
        port: 3000,
        hostname: 'localhost'
      },
      dev: {
        options: {
          livereload: true,
          dev: path.resolve('app.js'),
          bases: [path.resolve('./.tmp'), path.resolve(__dirname, yeomanConfig.app)]
        }
      },
      test: {
        options: {
          dev: path.resolve('app.js'),
          bases: [path.resolve('./.tmp'), path.resolve(__dirname, 'test')]
        }
      },
      dist: {
        options: {
          dev: path.resolve('app.js'),
          bases: path.resolve(__dirname, yeomanConfig.dist)
        }
      }
    },
    open: {
      dev: {
        url: 'http://localhost:3000'
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            '.tmp',
            '<%%= yeoman.dist %>/*',
            '!<%%= yeoman.dist %>/.git*'
          ]
        }]
      },
      dev: '.tmp'
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        'Gruntfile.js',
        'assets/scripts/{,*/}*.js'
      ]
    },
    <% if(coffee) {%>
    coffee: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/scripts',
          src: '{,*/}*.coffee',
          dest: '.tmp/scripts',
          ext: '.js'
        }]
      },
      test: {
        files: [{
          expand: true,
          cwd: 'test/spec',
          src: '{,*/}*.coffee',
          dest: '.tmp/spec',
          ext: '.js'
        }]
      }
    },
    <% } %>
    // not used since Uglify task does concat,
    // but still available if needed
    /*concat: {
      dist: {}
    },*/
    rev: {
      dist: {
        files: {
          src: [
            '<%%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%%= yeoman.dist %>/styles/{,*/}*.css',
            '<%%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            '<%%= yeoman.dist %>/styles/fonts/{,*/}*.*'
          ]
        }
      }
    },
    <% if (includeRequireJS) { %>
    requirejs: {
        dist: {
            // Options: https://github.com/jrburke/r.js/blob/master/build/example.build.js
            options: {
                // `name` and `out` is set by grunt-usemin
                baseUrl: 'assets/scripts',
                optimize: 'none',
                // TODO: Figure out how to make sourcemaps work with grunt-usemin
                // https://github.com/yeoman/grunt-usemin/issues/30
                //generateSourceMaps: true,
                // required to support SourceMaps
                // http://requirejs.org/docs/errors.html#sourcemapcomments
                preserveLicenseComments: false,
                useStrict: true,
                wrap: true
                //uglify2: {} // https://github.com/mishoo/UglifyJS2
            }
        }
    },<% } else { %>
    'bower-install': {
        app: {
            html: '<%%= yeoman.app %>/views/index.html',
            ignorePath: '<%%= yeoman.app %>/'
        }
    },
    <% } %>
    <% if (includeModernizr) { %>
    modernizr: {
        devFile: 'assets/bower_components/modernizr/modernizr.js',
        outputFile: '<%%= yeoman.dist %>/scripts/modernizr/modernizr.js',
        files: [
            '<%%= yeoman.dist %>/scripts/{,*/}*.js',
            '<%%= yeoman.dist %>/styles/{,*/}*.css',
            '!<%%= yeoman.dist %>/scripts/vendor/*'
        ],
        uglify: true
    }<% } %>
    <% if (includeRequireJS) { %>,
    bower: {
        options: {
            exclude: ['modernizr']
        },
        all: {
            rjsConfig: 'assets/scripts/require_config.js'
        }
    },<% } %>
    useminPrepare: {
      html: '<%%= yeoman.app %>/index.html',
      options: {
        dest: '<%%= yeoman.dist %>'
      }
    },
    usemin: {
      html: ['<%%= yeoman.dist %>/{,*/}*.html'],
      css: ['<%%= yeoman.dist %>/styles/{,*/}*.css'],
      options: {
        dirs: ['<%%= yeoman.dist %>']
      }
    },
    imagemin: {
      dist: {
        files: [{
          expand: true,
          cwd: 'assets/images',
          src: '{,*/}*.{png,jpg,jpeg}',
          dest: '<%%= yeoman.dist %>/images'
        }]
      }
    },
    cssmin: {
      // By default, your `index.html` <!-- Usemin Block --> will take care of
      // minification. This option is pre-configured if you do not wish to use
      // Usemin blocks.
      // dist: {
      //   files: {
      //     '<%%= yeoman.dist %>/styles/main.css': [
      //       '.tmp/styles/{,*/}*.css',
      //       'assets/styles/{,*/}*.css'
      //     ]
      //   }
      // }
    },
    htmlmin: {
      dist: {
        options: {
          /*removeCommentsFromCDATA: true,
          // https://github.com/yeoman/grunt-usemin/issues/44
          //collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true*/
        },
        files: [{
          expand: true,
          cwd: '<%%= yeoman.app %>',
          src: ['*.html', 'views/*.html'],
          dest: '<%%= yeoman.dist %>'
        }]
      }
    },
    svgmin: {
          dist: {
              files: [{
                  expand: true,
                  cwd: 'assets/images',
                  src: '{,*/}*.svg',
                  dest: '<%%= yeoman.dist %>/images'
              }]
          }
    },
    // Put files not handled in other tasks here
    copy: {
            dist: {
                files: [{
                    expand: true,
                    dot: true,
                    cwd: '<%%= yeoman.app %>',
                    dest: '<%%= yeoman.dist %>',
                    src: [
                        '*.{ico,png,txt}',
                        '.htaccess',
                        'images/{,*/}*.{webp,gif}',
                        'styles/fonts/{,*/}*.*'<% if (compassBootstrap) { %>,
                        'assets/bower_components/sass-bootstrap/fonts/*.*'<% } %>
                    ]
                }]
            },
            styles: {
                expand: true,
                dot: true,
                cwd: '.tmp/styles',
                dest: '<%%= yeoman.dist %>/styles/',
                src: '{,*/}*.css'
            },
            bower: {
                expand: true,
                dot: true,
                cwd: 'assets/bower_components',
                dest: '.tmp/scripts/',
                src: '{,*/}*.js'
            },
            scripts: {
                expand: true,
                dot: true,
                cwd: 'assets/scripts',
                dest: '.tmp/scripts/',
                src: '{,*/}*.js'
            },
            images: {
                expand: true,
                dot: true,
                cwd: 'assets/images',
                dest: '.tmp/images/',
                src: '{,*/}*.js'
            },
            allScripts: {
                expand: true,
                dot: true,
                cwd: '.tmp/scripts/',
                dest: '<%%= yeoman.dist %>/scripts/',
                src: '{,*/}*.js'
            },
        },
    concurrent: {
      dev: [
          'compass',<% if (coffee) { %>
          'coffee:dist',<% } %>
          'copy:bower',
          'copy:scripts',
          'copy:images'
      ],
      test: [
        <% if (coffee) { %>
          'coffee',<% } %>
          'copy:styles'
],
      dist: [
        <% if (coffee) { %>
          'coffee',<% } %>
          'compass',
          'copy:styles',
          'copy:allScripts',
          'imagemin',
          'svgmin',
          'htmlmin'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
      }
    },
    cdnify: {
      dist: {
        html: ['<%%= yeoman.dist %>/*.html']
      }
    },
    <% if (jsLibrary === 'angular' ) { %>
    ngmin: {
      dist: {
        files: [{
          expand: true,
          cwd: '<%%= yeoman.dist %>/scripts',
          src: '*.js',
          dest: '<%%= yeoman.dist %>/scripts'
        }]
      }
    },
    <% } %>
    uglify: {
      dist: {
        files: {
          '<%%= yeoman.dist %>/scripts/scripts.js': [
            '<%%= yeoman.dist %>/scripts/scripts.js'
          ]
        }
      }
    }
  });

  grunt.registerTask('dev', function () {
    grunt.task.run([
      'clean:dev',
      'concurrent:dev',
      'compass:dev',
      'express:dev',
      'open',
      'watch'
    ]);
  });

  grunt.registerTask('dist', function(){
     grunt.task.run([
      'build',
      'express:dist',
      'open',
      'express-keepalive'
     ]);
  });

  grunt.registerTask('test', [
    'clean:dev',
    'concurrent:test',
    'express:test',
    'karma'
  ]);

  grunt.registerTask('build', [
    'clean:dist',
    'useminPrepare',
    'concurrent:dist',
    'concat',
    'copy',
    'cdnify',
    <% if (includeRequireJS) { %>
    'requirejs',<% } %>
    <% if (includeModernizr) { %>
    'modernizr',<% } %>
    <% if (jsLibrary === 'angular' ) { %>
    'ngmin',
    <% } %>
    'cssmin',
    'uglify',
    'rev',
    'usemin'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test',
    'build'
  ]);
};
