module.exports = function(grunt){
  grunt.config('watch', {
    sass: {
      files: [
        '<%= dir.src %>/**/*.scss',
        '<%= dir.external %>/**/*.css'
      ],
      tasks: [
        'compass',
        'autoprefixer',
        'cssmin'
      ],
      options: {
        livereload: true
      },
    },
    js: {
      files: ['<%= dir.src %>/**/*.js'],
      tasks: [
        'jshint:src',
        'uglify'
      ],
      options: {
        livereload: true
      },
    },
    images: {
      files: ['<%= dir.srcImg %>/**/*'],
      tasks: [
        'copy:images'
      ],
      options: {
        livereload: true
      }
    },
    fonts: {
      files: ['<%= dir.srcFonts %>/**/*'],
      tasks: [
        'copy:fonts'
      ],
      options: {
        livereload: true
      }
    },
    grunt: {
      files: [
        'gruntfile.js',
        'grunt/**/*.js'
      ],
      tasks: ['jshint:grunt']
    },
    jekyll: {
      files: [
        '<%= dir.src %>/**/*.html',
        '<%= dir.src %>/**/*.md',
        '<%= dir.src %>/**/*.markdown'
      ],
      tasks: [
        'jekyll:dist'
      ],
      options: {
        livereload: true
      }
    },
  });
};
