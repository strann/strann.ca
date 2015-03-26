module.exports = function(grunt){
  grunt.config('concat', {
    options: {
      separator: ';'
    },
    dist: {
      src: [
        '<%= dir.srcJs %>/<%= pkg.name %>.min.js'
      ],
      dest: '<%= dir.srcJs %>/<%= pkg.name %>.min.js'
    },
  });
};
