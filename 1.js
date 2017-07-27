let s = {name:'zfpx'};
let str = JSON.stringify(s);
let s2 = JSON.parse(str);
console.log(s);
console.log(s2);
console.log(s===s2);