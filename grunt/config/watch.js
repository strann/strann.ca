module.exports = function(grunt){
  grunt.config('watch', {
    sass: {
      files: [
        '<%= dir.srcScss %>/**/*.scss',
        '<%= dir.external %>/**/*.css'
      ],
      tasks: [
        'sass',
        'autoprefixer',
        'cssmin',
        'shell:jekyllBuild'
      ],
      options: {
        livereload: true
      },
    },
    js: {
      files: [
        '<%= dir.srcJs %>/**/*.js',
        '<%= dir.external %>/**/*.js'
      ],
      tasks: [
        'jshint:src',
        'uglify',
        'concat',
        'copy:js',
        'shell:jekyllBuild'
      ],
      options: {
        livereload: true
      },
    },
    grunt: {
      files: [
        'gruntfile.js',
        'grunt/**/*.js'
      ],
      tasks: [
        'jshint:grunt'
      ]
    },
    jekyll: {
      files: [
        '<%= dir.src %>/**/*.html',
        '<%= dir.src %>/**/*.md',
        '<%= dir.src %>/**/*.markdown'
      ],
      tasks: [
        'shell:jekyllBuild'
      ],
      options: {
        livereload: true
      }
    },
  });
};
