# 模块规范简述

规范 JavaScript 的模块定义和加载机制,降低了学习和使用各种框架的门槛，能够以一种统一的方式去定义和使用模块，提高开发效率，降低了应用维护成本。
模块化解决的问题：

- 命名冲突
- 文件依赖

目前流行的 js 模块化规范:

- `commonJS`：`NodeJS`模块系统具体实现的基石。
- `AMD`：异步模块规范，是`RequireJS`在推广过程中对模块定义的规范化产出的，推崇依赖前置；
- `UMD`：兼容`AMD`和`commonJS`规范的同时，还兼容全局引用的方式；
- `CMD`：是`SeaJS` 在推广过程中对模块定义的规范化产出的，推崇依赖就近；
- `ES6`：`ES6`模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量；

## commonjs

1. 所有代码都运行在模块作用域，不会污染全局作用域。
1. 模块可以多次加载，但是只会在第一次加载时运行一次，然后运行结果就被缓存了，以后再加载，就直接读取缓存结果。要想让模块再次运行，必须清除缓存。
1. 模块加载会阻塞接下来代码的执行，需要等到模块加载完成才能继续执行——同步加载。
1. `commonjs` 模块输出的是一个值的拷贝

适用场景：服务器环境，`nodejs` 的模块规范是参照 `commonJS` 实现的。

用法：

1. 导入：`require('路径')`
2. 导出：`module.exports`和`exports`,(不推荐直接用`exports`)

```javascript
// moduleA.js
module.exports = function(value) {
  return value * 2;
};
// moduleB.js
var multiplyBy2 = require("./moduleA");
var result = multiplyBy2(4);
console.log(result); // 打印出输出结果 8
```

```javascript
// moduleA.js
// 相当于这里还有一行：var exports = module.exports
exports.a = "Hello world"; // 相当于：module.exports.a = 'Hello world'

// moduleB.js
var moduleA = require("./moduleA.js");
console.log(moduleA.a); // 打印出hello world
```

> 注意：module.exports 和 exports 的区别是 exports 只是对 module.exports 的一个引用，相当于 Node 为每个模块提供一个 exports 变量，指向 module.exports。这等同在每个模块头部，有一行 var exports = module.exports;这样的命令。

## AMD

背景：

`commonjs`所有的模块都存放在本地硬盘，可以同步加载完成，等待时间就是硬盘的读取时间。但是，对于浏览器，这却是一个大问题，因为模块都放在服务器端，等待时间取决于网速的快慢，可能要等很长时间，浏览器处于"假死"状态。
因此，浏览器端的模块，不能采用"同步加载"（synchronous），只能采用"异步加载"（asynchronous）。这就是 AMD 规范诞生的背景。

1. 异步加载,模块的加载不影响它后面语句的运行
1. 管理模块之间的依赖性，便于代码的编写和维护。

适用场景：浏览器环境，`requireJS`是参照`AMD`规范实现的

用法：

1、导入：`require([module], callback)`-----`require(['模块名称'], function ('模块变量引用'){// 代码})`;
2、导出：`define(function (){return '值')`;

```javascript
// a.js
define(function() {
  return {
    a: "hello world"
  };
});
// b.js
require(["./a.js"], function(moduleA) {
  console.log(moduleA.a); // 打印出：hello world
});
```

## CMD

1. CMD 是在 AMD 基础上改进的一种规范，和 AMD 不同在于对依赖模块的执行时机处理不同，CMD 是就近依赖，而 AMD 是前置依赖。

```javascript
/** AMD写法 **/
define(["moduleA", "moduleB"], function(moduleA, moduleB) {
  // 等于在最前面声明并初始化了要用到的所有模块
  moduleA.doSomething();
  if (false) {
    // 即便没用到某个模块 moduleB，但 moduleB 还是提前执行了
    moduleB.doSomething();
  }
});

/** CMD写法 **/
define(function(require, exports, module) {
  var moduleA = require("./moduleA"); //在需要时申明
  moduleA.doSomething();
  if (false) {
    var moduleB = require("./moduleB");
    moduleB.doSomething();
  }
});
```

适用场景：浏览器环境，`seajs`是参照`CMD`规范实现的，`requireJS`的最新的几个版本也是部分参照了 CMD 规范的实现。

用法：

1、导入：`define(function(require, exports, module) {})`;
2、导出：`define(function (){return '值')`;

```javascript
// a.js
define(function(require, exports, module) {
  exports.a = "hello world";
});
// b.js
define(function(require, exports, module) {
  var moduleA = require("./a.js");
  console.log(moduleA.a); // 打印出：hello world
});
```

> 注：AMD 与 CMD 都是异步加载模块，AMD 在加载模块完成后就会执行该模块，所有模块都加载执行完后会进入 require 的回调函数，执行主逻辑，这样的效果就是依赖模块的执行顺序和书写顺序不一定一致，看网络速度，哪个先下载下来，哪个先执行，但是主逻辑一定在所有依赖加载完成后才执行，
> 但 CMD 加载完某个依赖模块后并不执行，只是下载而已，在所有依赖模块加载完成后进入主逻辑，遇到 require 语句的时候才执行对应的模块，这样模块的执行顺序和书写顺序是完全一致的

## UMD

1. 兼容了 AMD 和 CommonJS，同时还支持老式的“全局”变量规范：

适用场景：浏览器或服务器环境

用法： 只有下面常规写法

1. 判断是否支持 AMD（define 是否存在），存在则使用 AMD 方式加载模块。
1. 再判断是否支持 Node.js 模块格式（exports 是否存在），存在则使用 Node.js 模块格式。
1. 前两个都不存在，则将模块公开到全局（window 或 global）。

```javascript
(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD
    define(["jquery"], factory);
  } else if (typeof exports === "object") {
    // Node, CommonJS之类的
    module.exports = factory(require("jquery"));
  } else {
    // 浏览器全局变量(root 即 window)
    root.returnExports = factory(root.jQuery);
  }
})(this, function($) {
  //    方法
  function myFunc() {}

  //    暴露公共方法
  return myFunc;
});
```

## ES6 Module

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案，
ES6 模块的设计思想是尽量的静态化，使得编译时就能确定模块的依赖关系，以及输入和输出的变量，CommonJS 和 AMD 模块，都只能在运行时确定这些东西。

1. 按需加载（编译时加载）
2. import 和 export 命令只能在模块的顶层，不能在代码块之中（如：if 语句中）,import()语句可以在代码块中实现异步动态按需动态加载

适用场景：浏览器或服务器环境（以后可能支持）

用法：

1. 导入：import {模块名 A，模块名 B…} from '模块路径'
1. 导出：export 和 export default
1. import('模块路径').then()方法

```javascript
/*错误的写法*/
// 写法一
export 1;

// 写法二
var m = 1;
export m;

// 写法三
if (x === 2) {
  import MyModual from './myModual';
}

/*正确的三种写法*/
// 写法一
export var m = 1;

// 写法二
var m = 1;
export {m};

// 写法三
var n = 1;
export {n as m};

// 写法四
var n = 1;
export default n;

// 写法五
if (true) {
    import('./myModule.js')
    .then(({export1, export2}) => {
      // ...·
    });
}

// 写法六
Promise.all([
  import('./module1.js'),
  import('./module2.js'),
  import('./module3.js'),
])
.then(([module1, module2, module3]) => {
   // do something ...
});
```

> 注：export 只支持对象形式导出，不支持值的导出，export default 命令用于指定模块的默认输出，只支持值导出，但是只能指定一个，本质上它就是输出一个叫做 default 的变量或方法。

## ES6 模块与 CommonJS 模块的差异

1. CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

   CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值。
   ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令 import，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。换句话说，ES6 的 import 有点像 Unix 系统的“符号连接”，原始值变了，import 加载的值也会跟着变。因此，ES6 模块是动态引用，并且不会缓存值，模块里面的变量绑定其所在的模块。

2. CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

   运行时加载: CommonJS 模块就是对象；即在输入时是先加载整个模块，生成一个对象，然后再从这个对象上面读取方法，这种加载称为“运行时加载”。
   编译时加载: ES6 模块不是对象，而是通过 export 命令显式指定输出的代码，import 时采用静态命令的形式。即在 import 时可以指定加载某个输出值，而不是加载整个模块，这种加载称为“编译时加载”。
   CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

## 参考链接

- [前端模块化：CommonJS,AMD,CMD,ES6](https://juejin.im/post/5aaa37c8f265da23945f365c)
- [前端模块化一——规范详述](https://zhuanlan.zhihu.com/p/41568986)
- [阮一峰 commonJs](https://javascript.ruanyifeng.com/nodejs/module.html)
- [阮一峰 AMD](https://javascript.ruanyifeng.com/tool/requirejs.html)
- [CMD 模块定义规范](https://github.com/seajs/seajs/issues/242)
- [UMD](https://leohxj.gitbooks.io/front-end-database/javascript-modules/about-umd.html)
- [UMD](https://github.com/umdjs/umd)
- [ES6 入门](http://es6.ruanyifeng.com/)
