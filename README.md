# Generator-Mamma

The mother of all generators for [Yeoman](http://yeoman.io).


## Getting Started

### What is Yeoman?

Trick question. It's not a thing. It's this guy:

![](http://i.imgur.com/JHaAlBJ.png)

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```
$ npm install -g yo
```

### Yeoman Generators

Yeoman travels light. He didn't pack any generators when he moved in. You can think of a generator like a plug-in. You get to choose what type of application you wish to create, such as a Backbone application or even a Chrome extension.

When this generator is published, you install generator-mamma from npm, run:

```
$ npm install -g generator-mamma # DONT DO THIS YET!
```

*HOWEVER - it isn't, so currently you have to:*

```
$ git clone git@bitbucket.org:mikeislearning/generator-mamma.git #clones into the folder generator-mamma
$ cd generator-mamma # moves into that folder
$ npm link # links this yeoman generator with your core npm
```

__Once it is has successfully linked, let's start your project.__

```
$ mkdir myNewMammaProject # or whatever you want to call it
$ cd myNewMammaProject
$ yo mamma # initiates the generator
```

You will receive the following plugins automatically

```
- jQuery
- JSON3 and ES5-Shim for legacy browsers (includes lodash)
- HTML5 Boilerplate
- Sass with Compass as a CSS PreProcessor
- Unit Testing with Karma and Jasmine
- E2E Testing with Selenium and Protractor
```

__You will be prompted through a number of options__


```
1. CSS and JavaScript Plugins

Twitter Boostrap - The Sass version of twitter bootstrap, including its css, sprites, and numerous js plugins

RequireJS - Make your site follow amd principles, where your js files are modular

Modernizr - a js library used to assist older browsers in rendering updated contents and tags

2. Heroku Integration

This will create a Procfile and web server to use with heroku

3. CoffeeScript

This will provide grunt plugins to include CoffeeScript files in your workflow

4. AngularJS

You have the option of using AngularJS. Should you select it, you will be prompted to use:
* Angular Cookies -
* Angular Resource -
* Angular Sanitize -
```
__Once you finish your selections, wait a few minutes for npm install & bower install to finish.__

```
$ grunt install # this will run shell scripts to install selenium for testing
```
### Awesome Grunt Tasks for your workflow

```
$ grunt # will create a .tmp directory that contains compiled css (and coffeescript if necessary), and opens up a livereload page for you to work within. Saving a .scss file will paint the css to localhost without refreshing the browser

$ grunt dist # will create a dist directory with minified css, and place all necessary html, css, and js files within one directory on top of an express server

$ grunt html # will run an accessibility and validation linter on your html files

$ grunt js # runs a jshint linter on your javascript files

$ ## FOR TESTING ##

$ grunt test # runs all unit and e2e tests once
$ grunt test:unit # runs all unit tests
$ grunt test:e2e # runs all e2e tests once
$ grunt autotest # runs all unit tests in a livereload environment
$ grunt coverage # provides a code coverage file to see how many of the javascript functions have been tested

```
###Future Considerations and Thoughts
There are a number of things I would like to add as this evolves

```
- Ability to integrate into a phonegap environment
- phantomcss runner to do regression testing
- grunt-uncss to clean up unused css
- grunt-html-snapshot for seo purposes
```


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
