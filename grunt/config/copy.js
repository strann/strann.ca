module.exports = {
  fonts: {
    files: [{
      expand: true,
      cwd: '<%= dir.fontsSrc %>',
      src: '**',
      dest: '<%= dir.fontsDist %>'
    }]
  },
  images: {
    files: [{
      expand: true,
      cwd: '<%= dir.imgSrc %>',
      src: '**',
      dest: '<%= dir.imgDist %>'
    }]
  },
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
