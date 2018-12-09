// ES6写法
class foo {
  constructor(name) {
    this.name = name;
  }
  eat() {
    return this.name + "吃了巧克力";
  }
}

class boo extends foo {
  constructor(name, other) {
    super(name);
    this.other = other;
  }
  say() {
    console.log("this.", this);
    return "这是" + this.other + "?";
  }
}
const run = new boo("王忘", "什么名字");
console.log(run.say());
console.log(run.eat());
