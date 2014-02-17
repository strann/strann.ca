module.exports = function(grunt){
  grunt.config('uglify', {
    options: {
      banner: '<%= banner.banner %>'
    },
    dist: {
      files: {
        '<%= dir.srcJs %>/<%= pkg.name %>.min.js': [
          '<%= dir.srcJs %>/**/*.js',
          '!<%= dir.srcJs %>/modernizr.js',
          '!<%= dir.srcJs %>/**/*.min.js',
        ]
      },
    },
  });
};
