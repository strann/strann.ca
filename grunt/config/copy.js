module.exports = function(grunt){
  grunt.config('copy', {
    js: {
      files: [{
        expand: true,
        flatten: true,
        cwd: '<%= dir.external %>',
        src: 'modernizr/modernizr.js',
        dest: '<%= dir.srcJs %>'
      }],
    },
  });
};
