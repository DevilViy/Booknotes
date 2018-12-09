// Es5实现继承方法，原型链继承
// https://juejin.im/post/5b188852e51d4506df277095
function foo(name) {
  this.eat = function() {
    return "这是" + name;
  };
}

function boo(other) {
  this.say = function() {
    console.log("this", this);
    return "谁吃了" + other;
  };
}
boo.prototype = new foo();
const run = new boo("巧克力");
console.log(run.say());
console.log(run.eat());
