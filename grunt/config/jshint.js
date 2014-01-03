module.exports = {
  grunt: [
      'gruntfile.js',
      'grunt/config/*.js'
  ],
  src: ['<%= dir.jsSrc %>/**/*.js'],
  jshintrc: true
};
