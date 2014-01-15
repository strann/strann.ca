module.exports = function(grunt){
  grunt.config('imagemin', {
    options: {
      optimizationLevel: 3
    },
    files: [{
      expand: true,
      cwd: '<%= dir.srcImg %>',
      src: [
        '**/*.{png, jpg, gif}'
      ],
      dest: '<%= dir.srcImg %>'
    }],
  });
};
