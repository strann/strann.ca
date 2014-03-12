module.exports = function(grunt){
  grunt.config('csslint', {
    strict: {
      src: [
        '<%= dir.srcCss %>/*.css',
        '!<%= dir.srcCss %>/*.min.css'
      ]
    },
  });
};
