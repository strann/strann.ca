module.exports = function(grunt){
  var _s = require('underscore.string');

  var tree = grunt.file.expand({
    filter: 'isDirectory'
  },
    '**',
    '!external/*/*/**',
    '!node_modules/**'
  );

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
    var path = currPath;
    dirs = currPath.match(/([^\/]+)/g);
    var taskId = createTaskId(dirs.toString());
    dirMap[taskId] = path;
  };

  grunt.config('dir', dirMap);
};
