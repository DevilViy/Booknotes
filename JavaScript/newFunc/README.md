# new 实例化
new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。


 new 的实例化
 步骤：
1. 创建一个新对象o；
2. 将构造函数的作用域赋给新对象（因此this就指向了这个对象）；
3. 执行构造函数中的代码（为这个新对象添加属性）；
4. 判断返回值类型：
如果是值类型，就丢弃它，还是返回新对象o。
如果是引用类型，就返回这个引用类型的对象result，替换掉新对象o。
（详见newFunc）

## 参考
- [new 运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new#Description)
- [segmentfault](https://segmentfault.com/a/1190000008576048)
- [掘金](https://juejin.im/post/5b397b526fb9a00e5d7999a4)
- [知乎](https://www.zhihu.com/question/36440948/answer/213711157)
