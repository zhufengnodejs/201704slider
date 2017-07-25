let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //打包的入口文件
  entry: path.resolve('app/index.js'),
  //配置输出的目录和文件名
  output: {
    //打包后的文件保存的目录
    path: path.resolve('build'),
    //打包后的文件名
    filename: 'bundle.js'
  },
  //配置模块的打包方式
  module:{
    //配置不同类型的文件加载方式
    rules:[
      {
        test:/\.jsx?$/,//如果加载的模块后缀是js或jsx的庆
        use:"babel-loader",//使用babel进行转义
        exclude:/node_modules///为了提高解析速度，需要忽略掉node_modules下的东西
      }
    ]
  },
  //配置插件
  plugins: [
    //可以以index.html作为模板，并向其中插入打包后的bundle.js文件。然后保存到目标路径下
    new HtmlWebpackPlugin({
      //以app下的index.html作为模板
      template:'./app/index.html'
    })
  ]

}