module.exports = function(grunt){
  grunt.config('cssmin', {
    combine: {
      options: {
        banner: '<%= banner.banner %>',
        report: 'gzip'
      },
      expand: true,
      files: {
        '<%= dir.srcCss %>/<%= pkg.name %>.min.css': [
          '<%= dir.external %>/normalize-css/normalize.css',
          '<%= dir.srcCss %>/syntax.css',
          '<%= dir.srcCss %>/<%= pkg.name %>.css'
        ]
      }
    }
  });
};
