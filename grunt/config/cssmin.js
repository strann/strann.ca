module.exports = function(grunt){
  grunt.config('cssmin', {
    combine: {
      options: {
        banner: '<%= banner.banner %>',
        report: 'gzip'
      },
      expand: true,
      files: {
        '<%= dir.cssSrc %>/<%= pkg.name %>.min.css': [
          '<%= dir.external %>/normalize-css/normalize.css',
          '<%= dir.cssSrc %>/<%= pkg.name %>.css',
          '<%= dir.cssSrc %>/syntax.css'
        ]
      }
    }
  });
};
