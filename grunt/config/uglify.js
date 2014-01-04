module.exports = {
  options: {
    banner: '<%= banner.banner %>'
  },
  dist: {
    files: {
      '<%= dir.jsSrc %>/<%= pkg.name %>.min.js': [
        '<%= dir.external %>/jquery/jquery.js',
        '!<%= dir.jsSrc %>/**/*.min.js',
        '<%= dir.jsSrc %>/**/*.js'
      ]
    },
  },
};
