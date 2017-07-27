let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  //打包的入口文件
  entry: path.resolve('src/index.js'),
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
      },
      {
        test:/\.less$/,//处理less文件
        //使用三个加载器编译并加载less文件
        use:["style-loader","css-loader","less-loader"]
      },
      {//如果是图片等资源文件的话用url-loader来加载
        //图片 视频 音频 图标
        test:/\.(gif|png|jpg)$/,
        //限定图片大小的分界是线，如果图片的体积小于给定的值(8*1024字节)的话,此图片会变成base64格式内嵌到网页中，否则的话会经过重命名后保存到目标里去，在网页中会得到一个新的URL路径
        use:'url-loader?limit=8192'
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