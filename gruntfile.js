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
    'compass',
    'autoprefixer',
    'cssmin',
    'jshint',
    'copy:js',
    'uglify',
    'imagemin'
  ]);

  grunt.registerTask('serve', [
    'build',
    'jekyll:serve',
    'watch'
  ]);

  grunt.registerTask('default', ['build']);
};
