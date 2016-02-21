module.exports = function(grunt){

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
        }
	};
	
    config.copy = {
        build_dist: {
            expand: true,
            src: ["images/*.*","index.html"],
            dest: "<%= paths.dist %>/"
        }
    };
    
    config.uglify = {
        build_dist: {
            files: [
                {
                    expand: true,
                    src: ["js/**/*.js"],
                    dest: "<%= paths.dist %>/"
                }
            ]
        },
        options: {

        },
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
            tasks: ["jshint:build_dist","uglify:build_dist"]
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
    	}
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
	
	grunt.initConfig(config);
	
	grunt.loadNpmTasks("grunt-contrib-less");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.loadNpmTasks("grunt-contrib-connect");
	grunt.loadNpmTasks("grunt-build-control");
	
	grunt.registerTask("build",["clean:dist", "jshint:build_dist", "less:build_dist", "copy:build_dist", "uglify:build_dist"]);
	grunt.registerTask("serve",["build", "connect:serv_dist", "watch"]);
	grunt.registerTask("publish",["build", "buildcontrol:publish"]);
};