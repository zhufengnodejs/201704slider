class Stack{
 constructor(){
   this.arr = [];
 }
 push(data){
   this.arr.push(data);
 }
 look(){//查看栈顶元素
   return this.arr[this.arr.length-1];
 }
 pop(){
   this.arr.pop();
 }
}
//先入后出 push pop look
let stack = new Stack();
stack.push('a');
stack.push('b');
console.log(stack.look());//b
stack.pop();
console.log(stack.look());//a
