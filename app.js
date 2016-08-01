//app.js
'use strict';
 
var Koa = require('koa');
var path = require('path');
var Api = require('wechat-api')
var wechat = require('./weChat/g');
var util = require('./libs/util');
var wechat_file = path.join(__dirname,'./config/wechat.txt');
var config = {
  wechat:{
    appID:"wx80daea71b59892bf",
    appSecret:"2bba9182829b2eefee28e7837275a952",
    token:"yangxuanwechat",
    getAccessToken:function(){
      return util.readFileAsync(wechat_file);
    },
    saveAccessToken:function(data){
      data = JSON.stringify(data);
      return util.writeFileAsync(wechat_file,data);
    }
  }
}
 

var app = new Koa()
app.use(wechat(config.wechat));
 
app.listen(1234);
console.log("localhost:1234");