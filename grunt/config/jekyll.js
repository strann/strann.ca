module.exports = {
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
};
