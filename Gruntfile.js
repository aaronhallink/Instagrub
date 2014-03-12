module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'js/*.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    },
	yuidoc: {
            compile: {
                name: '<%= pkg.name %>',
                description: '<%= pkg.description %>',
                version: '<%= pkg.version %>',
                options: {
                    paths: 'js',
                    outdir: 'docs'
                }
            }
       },
    jasmine: {
            compile: {
                src: 'js/*.js',
                options: {
                    specs: 'jasmine/spec/*Spec.js',
                    //template: 'test.tmpl',
                    //helpers: 'test/helpers/*.js',
                    keepRunner: true
                }
            }
    },
	clean: {
            src: ['docs', 'build']
	
	}
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task(s).
  grunt.registerTask('default', ['yuidoc', 'jasmine', 'uglify']);
  grunt.registerTask('test', ['jasmine']);
  grunt.registerTask('docs', ['clean', 'yuidoc']);
  grunt.registerTask('build', ['clean', 'uglify']);

};