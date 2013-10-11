'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MammaGenerator = module.exports = function MammaGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    // this.testFramework = options['test-framework'] || 'mocha';
    // this.coffee = options.coffee;

    // // for hooks to resolve on mocha by default
    // if (!options['test-framework']) {
    // options['test-framework'] = 'mocha';
    // }

    // // resolved to mocha by default (could be switched to jasmine for instance)
    // this.hookFor('test-framework', { as: 'app' });

    // this.mainCoffeeFile = 'console.log "\'Allo from CoffeeScript!"';

    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });

    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MammaGenerator, yeoman.generators.Base);

MammaGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);

    var prompts = [{
        type: 'confirm',
        name: 'herokuIntegration',
        message: 'Are you planning to deploy this project on Heroku?',
        default: false
    },
    {
    type: 'list',
    name: 'jsLibrary',
    message: 'Would you like to work with jQuery or Angular?',
    default: 'jQuery',
    choices: ['jQuery', 'angular'],
    },
    {
    type: 'checkbox',
    name: 'features',
    message: 'What more would you like?',
    choices: [{
      name: 'Bootstrap for Sass',
      value: 'compassBootstrap',
      checked: true
    }, {
      name: 'RequireJS',
      value: 'includeRequireJS',
      checked: true
    }, {
      name: 'Modernizr',
      value: 'includeModernizr',
      checked: true
    }]
    }
    ];

    this.prompt(prompts, function (props) {
        this.herokuIntegration = props.herokuIntegration;
        this.jsLibrary = props.jsLibrary;
        var features = props.features;

        function hasFeature(feat) { return features.indexOf(feat) !== -1; }

        // manually deal with the response, get back and store the results.
        // we change a bit this way of doing to automatically do this in the self.prompt() method.
        this.compassBootstrap = hasFeature('compassBootstrap');
        this.includeRequireJS = hasFeature('includeRequireJS');
        this.includeModernizr = hasFeature('includeModernizr');

        cb();
    }.bind(this));
};

MammaGenerator.prototype.app = function app() {
    this.mkdir('public');
    this.mkdir('public/images');
    this.mkdir('public/javascripts');
    this.mkdir('public/stylesheets');
    this.mkdir('config');
    this.mkdir('config/environments');
    this.mkdir('routes');
    this.mkdir('views');

    this.directory('public');
    this.directory('routes');
    this.directory('views');
    this.directory('config');

    // Frontend
    this.mkdir('app');
    if(this.jsLibrary === 'angular' ){
    this.mkdir('app/scripts');
    }
    this.mkdir('app/styles');
    this.mkdir('app/views');
    this.directory('app');
    this.template('app/index.html','app/index.html');
    this.mkdir('app/scripts');
    if(this.includeRequireJS){
    this.copy('app/scripts/require_config.js','app/scripts/require_config.js');
    }
    this.mkdir('test');
    this.mkdir('test/spec');
    this.mkdir('test/spec/controllers');
    this.directory('test');
};

MammaGenerator.prototype.projectfiles = function projectfiles() {
    // Dotfiles
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_jshintrc', '.jshintrc');
    this.copy('_gitattributes', '.gitattributes');

    // Front
    this.template('_bower.json', 'bower.json');
    this.template('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_karma-e2e.conf.js', 'karma-e2e.conf.js');
    this.copy('_karma.conf.js', 'karma.conf.js');

    // Package
    this.template('_package.json', 'package.json');

    // Express
    this.copy('_app.js', 'app.js');
    this.copy('_app_grunt.js', 'app_grunt.js');
    this.copy('_server.js', 'server.js');

    if (this.herokuIntegration) {
        this.copy('_Procfile', 'Procfile');
        this.copy('_env', '.env');
    }
};
