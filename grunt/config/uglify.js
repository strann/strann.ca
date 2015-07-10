module.exports = function(grunt){
  grunt.config('uglify', {
    options: {
      mangle: true,
      compress: true,
      preserveComments: false
    },
    dist: {
      files: {
        '<%= dir.srcJs %>/<%= pkg.name %>.min.js': [
          '<%= dir.srcJs %>/**/*.js',
          '!<%= dir.srcJs %>/modernizr.js',
          '!<%= dir.srcJs %>/**/*.min.js',
        ],
        '<%= dir.srcJs %>/modernizr.min.js' : [
          '<%= dir.srcJs %>/modernizr.js'
        ]
      },
    },
  });
};
