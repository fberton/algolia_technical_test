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

## Build

```bash
$ grunt build
``` 

You will find your project built in the "dist" directory.
Here are the tasks done during the build:
* Clean dist folder
* Apply jshint on js files
* Compile and compress less files into css files
* Copy images to dist/images folder
* Uglify js files
* Concat js library files
* Modify js path files inside html files

## Create server

```bash
$ grunt serve
``` 

This command will create a local web server in order to test the project.
Once launched, you can visualize the project at http://localhost:9001.
A livereload is configured, each modification on {js,css,html} files and the Gruntfile 
will reload the project on the brower.

## Publish

```bash
$ grunt publish
``` 

This grunt configuration will build the project and publish the dist folder to ghpages 
branch on my github.
