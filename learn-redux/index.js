require('babel-register');
//引入了babel-register之后，再使用require的时候会先用babel进行转义，再运行
require('./use-redux');