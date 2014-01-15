module.exports = function(grunt){
  grunt.config('banner', {
    banner: '/*!\n * <%= pkg.name %> - v<%= pkg.version %>\n' +
            ' * <%= pkg.description %>\n' +
            ' * Date: <%= grunt.template.today("yyyy-mm-dd") %>\n' +
            ' */\n',
  });
};
