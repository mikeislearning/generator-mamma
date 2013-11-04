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
$ npm install -g generator-mamma
```

HOWEVER - it isn't, so currently you have to:
```
$ git clone git@bitbucket.org:mikeislearning/generator-mamma.git
$ cd generator-mamma
$ npm link
```


Finally, initiate the generator:

```
$ yo mamma
```

You will receive the following plugins automatically

```
jQuery
Underscore
HTML5 Boilerplate
Unit Testing with Karma and Jasmine
E2E Testing with Selenium and Protractor
```

You will be prompted through a number of options


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
Angular Cookies -
Angular Resource -
Angular Sanitize -
```
Once you finish your selections, npm and bower install will run. This should take a few minutes. Aftewards, please run grunt install
```
$grunt install # this will run shell scripts to install selenium
```


### Getting To Know Yeoman

Yeoman has a heart of gold. He's a person with feelings and opinions, but he's very easy to work with. If you think he's too opinionated, he can be easily convinced.

If you'd like to get to know Yeoman better and meet some of his friends, [Grunt](http://gruntjs.com) and [Bower](http://bower.io), check out the complete [Getting Started Guide](https://github.com/yeoman/yeoman/wiki/Getting-Started).


## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
