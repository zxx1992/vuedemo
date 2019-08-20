module.exports = {
    // 部署应用包时的基本 URL。用法和 webpack 本身的 output.publicPath 一致
    publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',
    // 构建时的输出目录，这里默认应该是dist
    outputDir: "output",
    // 放置静态资源的目录（js,css,img,fonts)
    assetsDir: "static",
    // html的输出路径
    indexPath: "index3.html",
    // 是否在保存的时候使用 `eslint-loader` 进行检查。 有效的值：`ture` | `false` | `"error"`  当设置为 `"error"` 时，检查出的错误会触发编译失败。
    lintOnSave: true,

    // css配置
    css: {

    },
    // 如果你的前端应用和后端 API 服务器没有运行在同一个主机上，你需要在开发环境下将 API 请求代理到 API 服务器。这个问题可以通过 vue.config.js 中的 devServer.proxy 选项来配置。
    devServer: {
        port: 8080, // 端口号
        host: "localhost",
        https: true, // https:{type:Boolean}
        open: true, //配置自动启动浏览器
        // // 代理
        // proxy: {

        // }
    },
    // pwa是一个插件，这里的配置只是向PWA插件传递选项
    // eg:项目打包上线，根目录下的图片不会打包到img文件夹下，所以这里做一个配置
    // 为图片设置不同的路径
    pwa: {
        favicon32: 'favicon.ico',
        favicon16: 'favicon.ico',
        appleTouchIcon: 'favicon.ico',
        maskIcon: 'favicon.ico',
        msTileImage: 'favicon.ico'
    }
}