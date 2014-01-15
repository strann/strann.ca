module.exports = function(grunt){
  grunt.config('compass', {
    dev: {
      options: {
        httpPath: '.',
        sassDir: 'src/scss',
        cssDir: 'src/css',
        imagesDir: 'src/img',
        fontsDir: 'src/fonts',
      },
    },
  });
};
