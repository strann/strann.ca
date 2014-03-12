'use strict';

module.exports = function(grunt) {
  // Load package.json data

  grunt.initConfig({
    pkg: require('./package.json'),
  });

  // Load all configuration files

  grunt.loadTasks('grunt/config');

  // Load installed npm tasks

  require('load-grunt-tasks')(grunt);

  // Register tasks

  grunt.registerTask('build', [
    'sass',
    'autoprefixer',
    'cssmin',
    'uglify',
    'concat',
    'copy:js'
  ]);

  grunt.registerTask('strict', [
    'sass',
    'csslint',
    'jshint'
  ]);

  grunt.registerTask('serve', [
    'build',
    'jekyll:serve'
  ]);

  grunt.registerTask('default', ['build']);
};
