// vue.config.js
module.exports = {
  runtimeCompiler: true,
  devServer: {
    port: 8081,
    proxy: {
      'ble/api': {
        // target: "http://13.212.91.58:8080",
        target: "http://localhost:8080",
        changeOrigin: true,
        secure: false
      }
    }
  }
};

