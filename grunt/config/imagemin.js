module.exports = function(grunt){
  grunt.config('imagemin', {
    options: {
      optimizationLevel: 3
    },
    files: [{
      expand: true,
      cwd: '<%= dir.imgSrc %>',
      src: [
        '**/*.{png, jpg, gif}'
      ],
      dest: '<%= dir.imgDist %>'
    }],
  });
};
