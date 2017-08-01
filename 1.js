/*
//纯函数
//1. 固定的输入产生固定的输出
//2. 并且不改变输入参数
let sum = (a,b)=>a+b+Math.random();
//不能改参数的任何属性
let grow = obj =>obj.age+1;

*/
// null un
let a=null;
//Cannot read property 'type' of undefined
console.log(a.type);