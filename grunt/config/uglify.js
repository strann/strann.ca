module.exports = function(grunt){
  grunt.config('uglify', {
    options: {
      banner: '<%= banner.banner %>'
    },
    dist: {
      files: {
        '<%= dir.srcJs %>/<%= pkg.name %>.min.js': [
          '<%= dir.external %>/jquery/jquery.js',
          '!<%= dir.srcJs %>/**/*.min.js',
          '<%= dir.srcJs %>/**/*.js'
        ]
      },
    },
  });
};
