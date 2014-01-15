module.exports = function(grunt){
  grunt.config('jshint', {
    options: {
      jshintrc: true,
      force: true
    },
    grunt: [
      'gruntfile.js',
      'grunt/config/*.js'
    ],
    src: [
      '<%= dir.jsSrc %>/**/*.js'
    ]
  });
};
