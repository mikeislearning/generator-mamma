'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MammaGenerator = module.exports = function MammaGenerator(args, options, config) {
    yeoman.generators.Base.apply(this, arguments);

    //All options for testing that I've chosen to ignore for now
    // this.testFramework = options['test-framework'] || 'mocha';
    // // for hooks to resolve on mocha by default
    // if (!options['test-framework']) {
    // options['test-framework'] = 'mocha';
    // }
    // // resolved to mocha by default (could be switched to jasmine for instance)
    // this.hookFor('test-framework', { as: 'app' });

    //writes what the potential coffee file will become
    this.mainCoffeeFile = 'console.log "\'Allo from CoffeeScript!"';

    //if you type yo mamma --skip-install, it won't do npm and bower install
    this.on('end', function () {
        this.installDependencies({
            skipInstall: options['skip-install']
        });
    });

    //this does something important. Not sure what
    this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MammaGenerator, yeoman.generators.Base);

/**
 * Asking the user a number of questions
 * @return {[type]} [description]
 */
MammaGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // have Yeoman greet the user.
    console.log(this.yeoman);
    console.log("Welcome to Mamma, the mother of all generators!\n")
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
      name: 'Bootstrap for Sass (requires jQuery)',
      value: 'compassBootstrap',
      checked: false
    }, {
      name: 'RequireJS',
      value: 'includeRequireJS',
      checked: true
    }, {
      name: 'Modernizr',
      value: 'includeModernizr',
      checked: true
    }]
    },
    {
        type: 'confirm',
        name: 'coffee',
        message: 'Are you the kind of bad ass mofo that wants to work in CoffeeScript?',
        default: false
    }


    ];

    /**
     * This inserts the answers of the user into the function
     * @param  {[string]} props [the results of the user's answers]
     * @binds the results to the yeoman object
     */
    this.prompt(prompts, function (props) {
        this.herokuIntegration = props.herokuIntegration;
        this.coffee = props.coffee;
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

/**
 * Creates the directory and puts files into them
 *
 */
MammaGenerator.prototype.app = function app() {
    //node environment
    this.mkdir('config');
    this.mkdir('config/environments');
    this.mkdir('routes');
    this.directory('routes');
    this.directory('config');

    //css, js, and images
    this.mkdir('assets/scripts');
    this.mkdir('assets/sass');
    this.mkdir('assets/images');
    this.mkdir('assets/views');
    this.directory('assets');

    // core node app
    this.mkdir('app');

    this.mkdir('app/controllers');
    this.mkdir('app/models');
    this.directory('app');


    //conditionals for requirejs and coffeescript
    if(!this.includeRequireJS){
    this.template('assets/scripts/hello.coffee','assets/scripts/require_config.js');
    }

    if (this.coffee) {
    this.write('assets/scripts/hello.coffee', this.mainCoffeeFile);
    }

    //test suite for karma
    this.mkdir('test');
    this.mkdir('test/spec');
    this.mkdir('test/spec/controllers');
    this.directory('test');
};

/**
 * Technically does the same thing as app(), but these are more technical files
 *
 */
MammaGenerator.prototype.projectfiles = function projectfiles() {
    // Dotfiles
    this.copy('_bowerrc', '.bowerrc');
    this.copy('_editorconfig', '.editorconfig');
    this.copy('_jshintrc', '.jshintrc');
    this.copy('_gitattributes', '.gitattributes');

    // Front
    this.template('_bower.json', 'bower.json');
    this.template('_package.json', 'package.json');
    this.template('_Gruntfile.js', 'Gruntfile.js');
    this.copy('_karma-e2e.conf.js', 'karma-e2e.conf.js');
    this.copy('_karma.conf.js', 'karma.conf.js');

    // Express
    this.copy('_app.js', 'app.js');
    this.copy('_app_grunt.js', 'app_grunt.js');
    this.copy('_web.js', 'web.js');

    if (this.herokuIntegration) {
        this.copy('_Procfile', 'Procfile');
        this.copy('_env', '.env');
    }
};
