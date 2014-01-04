module.exports = {
  sass: {
    files: [
      '<%= dir.src %>/**/*.scss',
      '<%= dir.external %>/**/*.css'
    ],
    tasks: [
      'compass',
      'concat:css',
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
    files: ['<%= dir.imgSrc %>/**/*'],
    tasks: [
      'copy:images'
    ],
    options: {
      livereload: true
    }
  },
  fonts: {
    files: ['<%= dir.fontsSrc %>/**/*'],
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
};
