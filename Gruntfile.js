module.exports = function (grunt) {

    var config = {
        pkg: require("./package.json"),
        paths: {
            dist: "dist",
        }
    };

    config.less = {
        build_dist: {
            files: [
                {
                    expand: true,
                    cwd: "less",
                    src: "**/*.less",
                    dest: "<%= paths.dist %>/css",
                    ext: ".css"
                }
            ],
            options: {
                compress: true
            }
        },
        build_source: {
            files: [
                {
                    expand: true,
                    cwd: "less",
                    src: "**/*.less",
                    dest: "css/",
                    ext: ".css"
                }
            ],
            options: {
                compress: false
            }
        }
    };

    config.copy = {
        build_dist: {
            expand: true,
            src: ["images/*.*"],
            dest: "<%= paths.dist %>/"
        }
    };

    config.uglify = {
        build_dist: {
            files: [
                {
                    expand: true,
                    cwd: "<%= paths.dist %>/js",
                    src: ["main.js"],
                    dest: "<%= paths.dist %>/js/"
                }
            ]
        }
    };

    config.jshint = {
        options: {
            jshintrc: "jshint.json",
        },
        build_dist: { src: ["js/**/*.js"] }
    };

    config.clean = {

        dist: "<%= paths.dist %>/",
    };

    config.watch = {

        less: {
            files: ["less/**/*.less"],
            tasks: "less:build_dist"
        },
        js: {
            files: ["js/**/*.js"],
            tasks: ["jshint:build_dist", "uglify:build_dist"]
        },
        html: {
            files: ["index.html"],
            tasks: ["copy:build_dist"]
        },
        gruntfile: {
            files: ["Gruntfile.js"],
            options: { reload: true }
        },
        livereload: {
            options: {
                livereload: 35729
            },
            files: [
                "<%= paths.dist %>/**/*.{js,css,html}",
            ]
        }
    };

    config.connect = {
        serv_dist: {
            options: {
                port: 9001,
                base: "<%= paths.dist %>",
                livereload: 35729
            }
        },
        serv_source: {
            options: {
                port: 9002,
                base: "./",
            }
        },
    };

    config.buildcontrol = {
        options: {
            dir: "<%= paths.dist %>",
            commit: true,
            push: true,
            message: "Built %sourceName% from commit %sourceCommit% on branch %sourceBranch%"
        },
        publish: {
            options: {
                remote: "<%= pkg.repository.url %>",
                branch: "gh-pages"
            }
        }
    };
    
    /*config.concat = {
    	build_dist: {
      		src: ["bower_components/algoliasearch/dist/algoliasearch.min.js","bower_components/algolia-autocomplete.js/dist/autocomplete.min.js"],
      		dest: '<%= paths.dist %>/js/libs.js',
    	},
  	};*/

    config.htmlbuild = {
        build_dist: {
            src: 'index.html',
            dest: '<%= paths.dist %>/',
            options: {
                scripts: {
                    libs: '<%= paths.dist %>/js/*.js',
                }
            }
        }
    };

    config.requirejs = {
        compile: {
            options: {

                baseUrl: "js/",
                mainConfigFile: "js/main.js",
                name: "../bower_components/almond/almond",
                include: ["main"],
                insertRequire: ['main'],
                optimize: "none",
                out: "<%= paths.dist %>/js/main.js",
                wrap: true
            }
        }
    };

    grunt.initConfig(config);

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-build-control");
    grunt.loadNpmTasks('grunt-html-build');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-exec');
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('prepareOptimizer', 'A task which prepare Algoliasearch for optimization', function () {
        var derequire = require("derequire");
        var file = grunt.file.read("bower_components/algoliasearch/dist/algoliasearch.js");

        if (!file) {
            throw "Reading error";
        }

        var transformedCode = derequire(file, [
            {
                from: 'require',
                to: '_dereq_'
            },
            {
                from: 'define',
                to: '_defi_'
            }
        ]);

        grunt.file.write("bower_components/algoliasearch/dist/algoliasearch.js", transformedCode);
    });

    grunt.registerTask("build_dist", ["clean:dist", "jshint:build_dist", "less:build_dist", "copy:build_dist", "prepareOptimizer", "requirejs", "uglify:build_dist", "htmlbuild:build_dist"]);
    grunt.registerTask("build_source", ["less:build_source"]);
    grunt.registerTask("serve_dist", ["build_dist", "connect:serv_dist", "watch"]);
    grunt.registerTask("serve_source", ["build_source", "connect:serv_source", "watch"]);
    grunt.registerTask("publish", ["build", "buildcontrol:publish"]);
};