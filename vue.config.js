// vue.config.js file to be placed in the root of your repository

module.exports = {
  publicPath: {process.env.NODE_ENV === 'production'
    ? '/NAK/'
    : '/'
  },
  pwa: {
    name: "Wedding Invitation",
    themeColor: "#87CEEB",
    msTileColor: "#87CEEB",
    manifestOptions: {
      background_color: "#87CEEB"
    }
  }
}