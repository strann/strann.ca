module.exports = function(grunt){
  grunt.config('concat', {
    options: {
      separator: ';'
    },
    dist: {
      src: [
        '<%= dir.external %>/jquery/jquery.min.js',
        '<%= dir.srcJs %>/<%= pkg.name %>.min.js'
      ],
      dest: '<%= dir.srcJs %>/<%= pkg.name %>.min.js'
    },
  });
};
