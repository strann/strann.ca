module.exports = {
  options: {
    banner: '<%= banner.banner %>'
  },
  dist: {
    files: {
      '<%= dir.jsDist %>/<%= util.slugify(pkg.name) %>.min.js': [
        '<%= dir.external %>/jquery/jquery.js',
        '<%= dir.jsSrc %>/**/*.js'
      ]
    },
  },
};
