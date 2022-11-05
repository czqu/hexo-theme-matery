hexo.on('generateBefore', function () {

  if (hexo.locals.get) {
    const data = hexo.locals.get('data');

    if (data) {

      // theme config file handle
      if (data._config) {
        hexo.theme.config = data._config;

      } else if (data.matery) {
        hexo.theme.config = data.matery;

      } else if (data._matery) {
        hexo.theme.config = data._matery;
      }

      // friends link file handle
      if (data.links || data.link) {
        hexo.theme.config.links = (data.links || data.link);
      }

    }
  }
});
