module.exports = {
  options: {
    optimizationLevel: 3
  },
  files: [{
    expand: true,
    cwd: '<%= dir.imgSrc %>',
    src: [
      '**/*.{png, jpg, gif}'
    ],
    dest: '<%= dir.imgSrc %>/optimized'
  }],
};
