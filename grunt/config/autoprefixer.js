module.exports = function(grunt){
  grunt.config('autoprefixer', {
    options: {
      browsers: ['last 2 version', 'ie 9'],
      diff: true
    },
    src: '<%= dir.srcCss %>/<%= pkg.name %>.css'
  });
};
