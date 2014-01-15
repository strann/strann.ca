module.exports = function(grunt){
  var _s = require('underscore.string');

  var tree = grunt.file.expand(
    '**',
    '!external/*/*/**',
    '!node_modules/**'
  );

  console.log('tree: ',tree);

  var dirs = [];
  var dirMap = {};

  var createTaskId = function(string) {
    string = string
      // strip out underscores
      .replace(/\_/g, '')
      // uppercase the character after all commas
      .replace(/(\,)(\w)/g, function($2){
        return $2.toUpperCase();
      })
      // uppercase the character after all dashes
      .replace(/(\-)(\w)/g, function($2){
        return $2.toUpperCase();
      })
      // strip out all commas and dashes
      .replace(/[\,\-]/g, '');

    return string
  };

  for (var i = tree.length - 1; i >= 0; i--) {
    var currPath = tree[i];

    if (grunt.file.isDir(currPath)) {
      if (currPath != undefined) {
        var path = currPath;
      }
      dirs = currPath.match(/([^\/]+)/g);
      console.log('dirs: ', dirs);
    }

    // if (dirs[0] != undefined) {
      var taskId = createTaskId(dirs.toString());
    // }

    dirMap[taskId] = path;
    // console.log(dirMap);
  };

  console.log('dirMap: ', dirMap);

  grunt.config('dir', dirMap);
};
    // external: 'external',
    // src: paths.src,
    // cssSrc: paths.src + '/css',
    // jsSrc: paths.src + '/js',
    // imgSrc: paths.src + '/img',
    // fontsSrc: paths.src + '/fonts',
    // dist: paths.dist,
    // cssDist: paths.dist + '/css',
    // jsDist: paths.dist + '/js',
    // imgDist: paths.dist + '/img',
    // fontsDist: paths.dist + '/fonts',
