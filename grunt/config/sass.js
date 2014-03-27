module.exports = function(grunt){
  grunt.config('sass', {
    dist: {
      options: {
        loadPath: [
          '<%= dir.srcScss %>'
        ]
      },
      files: {
        '<%= dir.srcCss %>/<%= pkg.name %>.css': '<%= dir.srcScss %>/main.scss'
      }
    },
  });
};
