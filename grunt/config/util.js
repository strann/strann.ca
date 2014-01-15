module.exports = function(grunt){
  grunt.config('util', {
    slugify: function(string) {
      var _s = require('underscore.string');
      return _s.slugify(string);
    },
  });
};
