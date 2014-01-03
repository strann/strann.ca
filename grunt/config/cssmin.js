module.exports = {
  minify: {
    options: {
      banner: '<%= banner.banner %>',
      report: 'gzip'
    },
    expand: true,
    cwd: '<%= dir.cssSrc %>',
    src: [
      '<%= pkg.name %>.css',
      '*.css',
      '!*.min.css'
    ],
    dest: '<%= dir.cssSrc %>',
    ext: '.min.css'
  }
};
