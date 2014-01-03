'use strict';

module.exports = function(grunt) {

  // Load all configuration files with require-grunt-configs

  var configuration = require('require-grunt-configs')(grunt, 'grunt/config');

  // Add package.json data to the configuration object

  configuration.pkg = grunt.file.readJSON('package.json');

  // Init the /grunt/config files

  grunt.initConfig(configuration);

  // Load installed npm tasks

  require('load-grunt-tasks')(grunt);

  // Default task

  grunt.registerTask('default', ['jshint', 'jekyll:serve']);
};
