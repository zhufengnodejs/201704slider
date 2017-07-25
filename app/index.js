//在react中使用图片的时候一定不要直接用源文件路径，一定要使用require源文件之后得到的路径
let logo = require('./images/node.jpg');
console.log(logo);
let mobile = require('./images/mobile.jpg');
console.log(mobile);