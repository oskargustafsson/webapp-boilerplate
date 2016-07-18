/* global module */
module.exports = function (grunt) {
	'use strict';

	grunt.initConfig({

		jshint: {
			src: 'src/*.js',
			options: {
				jshintrc: true,
			},
		},

		jscs: {
			src: 'src/*.js',
			options: {
				config: true,
			},
		},

		sass: {
			options: {
				sourceMap: true,
			},
			compile: {
				files: {
					'dist/main.css': 'src/main.scss',
				},
			},
		},

		requirejs: {
			compile: {
				options: {
					mainConfigFile: 'src/main.js',
					include: [ 'main.js' ],
					out: 'dist/main.js',
					optimize: 'uglify',
				},
			},
		},

		watch: {
			js: {
				files: 'src/**/*.js',
				tasks: [ 'requirejs' ],
				options: {
					spawn: false,
					livereload: true,
				},
			},
			sass: {
				files: 'src/**/*.scss',
				tasks: [ 'sass' ],
				options: {
					spawn: false,
					livereload: true,
				},
			},
		},

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-jscs');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-requirejs');

	grunt.registerTask('default', [ 'jshint', 'jscs', 'sass', 'requirejs', 'watch' ]);

};
