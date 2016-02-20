module.exports = function(grunt){

	var config = {};
	
	config.less = {
		development: {
			options: {
          		compress: true,
          		yuicompress: true,
          		optimization: 2
        	},
        	files: {
          		"css/main.css": "less/main.less"
        	}
		}
	};
	
	grunt.initConfig(config);
	
	grunt.loadNpmTasks('grunt-contrib-less');
	
	grunt.registerTask('build',['less']);
};