const globalSassFiles = ["~@/styles/_variables.scss", "~@/styles/global.scss"];

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: globalSassFiles
          .map(src => '@import "' + src + '";')
          .join("\n")
      }
    }
  }
};
