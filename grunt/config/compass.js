module.exports = function(grunt){
  grunt.config('compass', {
    dev: {
      options: {
        httpPath: '.',
        sassDir: '<%= dir.srcScss %>',
        cssDir: '<%= dir.srcCss %>',
        imagesDir: '<%= dir.srcImg %>',
        fontsDir: '<%= dir.srcFonts %>',
      },
    },
  });
};
