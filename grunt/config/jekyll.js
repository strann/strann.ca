module.exports = function(grunt){
  grunt.config('jekyll', {
    dist: {
      options: {
        config: '_config.yml'
      }
    },
    serve: {
      options: {
        config: '_config.yml',
        serve: true,
        watch: true,
        drafts: true
      }
    }
  });
};
