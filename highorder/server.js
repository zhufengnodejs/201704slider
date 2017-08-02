let express = require('express');
let app = express();
app.get('/clock',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*')
  setTimeout(()=>{
    res.send({time:'clock1:'+new Date().toLocaleString()});
  },1000);
});
app.get('/clock2',function(req,res){
  res.setHeader('Access-Control-Allow-Origin','*')
  setTimeout(()=>{
    res.send({time:'clock2:'+new Date().toLocaleString()});
  },1000);
});
app.listen(3000);