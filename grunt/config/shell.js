module.exports = function(grunt){
  grunt.config('shell', {
    options: {
      stderr: 'false'
    },
    jekyllBuild: {
      command: 'bundle exec jekyll build'
    },
    jekyllServe: {
      command: 'bundle exec jekyll serve'
    },
  });
};
