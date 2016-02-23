# Technical Test For Algolia

The goal of this project is to build a frontend application displaying
an outstanding auto-completion menu using at least:

* a general build system (Grunt, Gulp, ...),
* a CSS preprocessor (SASS, LESS, PostCSS, ...),
* and the AlgoliaSearch JS API client v3.

## Quickstart guide

```bash
git clone https://github.com/fberton/algolia_technical_test.git
```

## Dependencies

### List of dev dependencies

* [grunt](https://github.com/gruntjs/grunt)
* [grunt-build-control](https://github.com/robwierzbowski/grunt-build-control)
* [grunt-contrib-clean](https://github.com/gruntjs/grunt-contrib-clean)
* [grunt-contrib-concat](https://github.com/gruntjs/grunt-contrib-concat)
* [grunt-contrib-connect](https://github.com/gruntjs/grunt-contrib-connect)
* [grunt-contrib-copy](https://github.com/gruntjs/grunt-contrib-copy)
* [grunt-contrib-jshint](https://github.com/gruntjs/grunt-contrib-jshint)
* [grunt-contrib-less](https://github.com/gruntjs/grunt-contrib-less)
* [grunt-contrib-uglify](https://github.com/gruntjs/grunt-contrib-uglify)
* [grunt-contrib-watch](https://github.com/gruntjs/grunt)
* [grunt-html-build](https://github.com/spatools/grunt-html-build/)

### List of client dependencies

* [algolia-autocomplete.js](https://github.com/algolia/autocomplete.js)
* [algoliasearch](https://github.com/algolia/algoliasearch-client-js)

### Install dependencies

```bash
$ npm install && bower install
``` 

### Install grunt

```bash
$ npm install -g grunt-cli
``` 

## Build

```bash
$ grunt build
``` 

You will find your built project in the "dist" folder.
Here below are the tasks performed during the build:
* Clean dist folder
* Apply jshint on javascript files
* Compile and compress less files into css files
* Copy images to dist/images folder
* Uglify javascript files
* Concat javascript library files
* Modify javascript path files inside html files

## Create server

```bash
$ grunt serve
``` 

This command will create a local web server. This server will help you to test the project.
Once launched, you can visualize it at http://localhost:9001.
A watch module is configured to build the project each time you modify a {js,css,html} file.
A livereload module is also configured to automatically refresh the browser.

## Publish

```bash
$ grunt publish
``` 

This grunt command will build the project and publish the dist folder to gh-pages 
branch on my github.
