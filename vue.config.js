// vue.config.js
module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      'ble/api': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false
      }
    }
  }
};
