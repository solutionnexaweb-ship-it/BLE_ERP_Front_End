// vue.config.js
module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 8081,
    proxy: {
      'ble/api': {
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false
      }
    }
  }
};
