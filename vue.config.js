module.exports = {
  runtimeCompiler: process.env.NODE_ENV === 'development',
  baseUrl: './',
  configureWebpack: {
    resolve: {
      symlinks: false
    },
    devServer: {
      proxy: {
        '/api': {
          target: 'http://61.143.225.69:50000',
          changeOrigin: true,
          ws: true
        }
      },
      clientLogLevel: 'info',
      watchOptions: {
        // 不监听的文件或文件夹，支持正则匹配
        ignored: /node_modules/,
        // 监听到变化后等300ms再去执行动作
        aggregateTimeout: 300,
        // 默认每秒询问1000次
        poll: 1000
      }
    }
  }
}
