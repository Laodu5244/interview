module.exports = {
  lintOnSave: false,
  transpileDependencies: true,
  devServer: {
    open: true,
    host: 'localhost',
    port: 8888,
    // 配置跨域
    proxy:{
      '/api':{
        // 目标路径
        target:'http://localhost:3030/',
        // 允许跨域
        changOrigin:true,
        // 重写路径
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
