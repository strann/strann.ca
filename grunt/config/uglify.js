module.exports = function(grunt){
  grunt.config('uglify', {
    options: {
      banner: '<%= banner.banner %>',
      mangle: true,
      compress: true,
      preserveComments: false,
      screwIE8: true
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
