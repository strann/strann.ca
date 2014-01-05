module.exports = {
  js: {
    files: [{
      expand: true,
      flatten: true,
      cwd: '<%= dir.external %>',
      src: 'modernizr/modernizr.js',
      dest: '<%= dir.jsSrc %>'
    }],
  },
};
