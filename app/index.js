'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');


var MammaGenerator = module.exports = function MammaGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);

  // setup the test-framework property, Gruntfile template will need this
  this.testFramework = options['test-framework'] || 'mocha';

  // for hooks to resolve on mocha by default
  if (!options['test-framework']) {
    options['test-framework'] = 'mocha';
  }

  // resolved to mocha by default (could be switched to jasmine for instance)
  this.hookFor('test-framework', { as: 'app' });

  this.on('end', function () {
    this.installDependencies({
      skipInstall: options['skip-install'],
      skipMessage: options['skip-install-message']
       });
  });

  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));
};

util.inherits(MammaGenerator, yeoman.generators.Base);

MammaGenerator.prototype.askFor = function askFor() {
  var cb = this.async();

  // have Yeoman greet the user.
  console.log(this.yeoman);
  console.log('This is Yo Mamma, the Mother of All Generators.\n');
  /**
   * Determine the questions you want to ask the user
   * type - confirm, checkbox, list (otherwise it's just plain text)
   * name - what you want to call it, and where the answer variable will be stored
   * message - what the user will see
   * default - true, false
   */
  var prompts = [
  {
    name: "name",
    message: "What is the name of your project?"
  },
  {
    name: "description",
    message: 'What is your app about?',
  },
  {
    name: "keywords",
    message: 'Please list some keywords for your site, separated by commas:',
  },
  {
    name: "authors",
    message: 'Who are they authors of this app?',
  },
  {
    type: 'checkbox',
    name: 'features',
    message: 'What more would you like?',
    choices: [{
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
  /**
   * Makes the prompts values accessible to the larger template
   *
   */
  this.prompt(prompts, function (props) {
    this.name = props.name;
    this.description = props.description;
    this.keywords = props.keywords;
    this.authors = props.authors;

    var features = props.features;

    function hasFeature(feat) { return features.indexOf(feat) !== -1; }

    // manually deal with the response, get back and store the results.
    // we change a bit this way of doing to automatically do this in the self.prompt() method.
    this.includeRequireJS = hasFeature('includeRequireJS');
    this.includeModernizr = hasFeature('includeModernizr');


    cb();
  }.bind(this));
};


/**
 * This function templates out the app
 * this.copy copies the file directly, and are relative to the main file path
 * this.template will programmatically utilize the template data to customize your app, and are relative to the path of the template directory
 *
 */

MammaGenerator.prototype.gruntfile = function gruntfile() {
  this.template('Gruntfile.js');
};

MammaGenerator.prototype.compass = function compass() {
  this.copy('config.rb');
};

MammaGenerator.prototype.packageJSON = function packageJSON() {
  this.template('_package.json', 'package.json');
};

MammaGenerator.prototype.bower = function bower() {
  this.copy('bowerrc', '.bowerrc');
  this.copy('_bower.json', 'bower.json');
};

MammaGenerator.prototype.h5bp = function h5bp() {
  this.copy('404.html', 'app/404.html');
  this.copy('robots.txt', 'app/robots.txt');
  this.copy('htaccess', 'app/.htaccess');
};

MammaGenerator.prototype.filters = function filters(){
  this.copy('../content/profanity/en.json','app/content/profanity/en.json');
}


MammaGenerator.prototype.projectfiles = function projectfiles() {
  this.copy('editorconfig', '.editorconfig');
  this.copy('jshintrc', '.jshintrc');
};

MammaGenerator.prototype.app = function app() {
  this.mkdir('app');
  this.mkdir('app/templates');

  this.template("_index.html", "app/index.html");
  this.template("_main.js", "app/public/scripts/main.js");
  this.template("_main.js", "app/public/styles/main.scss");
  this.mkdir('app/public/images');
  this.copy('_package.json', 'package.json');

};
