module.exports = {
  options: {
    separator: ';',
    banner: '<%= banner.banner %>',
    stripBanners: true,
  },
  css: {
    src: [
      '<%= dir.external %>/normalize-css/normalize.css',
      '<%= dir.cssSrc %>/<%= pkg.name %>.css',
      '<%= dir.cssSrc %>/syntax.css'
    ],
    dest: '<%= dir.cssSrc %>/<%= pkg.name %>.concat.css',
  }
};
