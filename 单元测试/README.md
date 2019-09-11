# 单元测试

## 什么是 `Jest`?

`Jest`是 `Facebook` 的一套开源的 `JavaScript` 测试框架，
它自动集成了断言、`JSDom`、覆盖率报告等开发者所需要的所有测试工具，
是一款几乎零配置的测试框架。并且它对同样是 `Facebook` 的开源前端框架 `React`的测试十分友好。

## 编写第一个`Jest`示例

打开如下文件
[sum.js 文件]()
[sum.test.js 文件]()

接着运行

```
npm run test ./tests/sum.test.js
```

打印如下信息即表示运行成功

```
 PASS  tests/sum.test.js
  ✓ only sum (3ms)
  ○ skipped 1 + 2 = 3
  ○ skipped two plus two is four

Test Suites: 1 passed, 1 total
Tests:       2 skipped, 1 passed, 3 total
Snapshots:   0 total
Time:        1.108s
```

## 常用的几个`Jest`断言

Jest 使用匹配器让你通过不同的方式测试值。不同的匹配器实在太多了，所以这里只尝试列出最有用的。

[文件示例]()

### 常用的断言

- `toBe`

    使用 `===` 来测试全等于

- `toEqual`

    `toEqual`递归遍历检查对象或数组里的每一个领域,可以用于检查一个对象`object`中的值

- `.not`

    `.not`修饰符允许你测试结果不等于某个值的情况，这和英语的语法几乎完全一样，很好理解。

### Truthiness

在测试的时候，有时候我们需要在`undefined`，`null`和`false`进行区别，但是我们又不想去了解他们的不同点，`Jest`也会帮助我们得到我们想要的结果。

- `toBeNull` 检查是否为`null`

- `toBeUndefined` 检查是否为`undefined`

- `toBeDefined` 与`toBeUndefined`的相反

- `toBeTruthy` 检查任何通过`if`显示转换是否为`true`

- `toBeFalsy` 检查任何通过`if`显示转换是否为`false`

### Numbers

- `toBeGreaterThan` 大于

- `toBeGreaterThanOrEqual` 大于等于

- `toBeLessThan` 小于

- `toBeLessThanOrEqual` 小于等于

对于浮点数的测试，使用`toBeCloseTo`来替代`toEqual`or`toBe`，不让一个测试依赖于一个微小的舍入型错误。

### Strings

- `toMatch` 对字符串进行正则表达式匹配
- `toHaveLength` 测试字符串和数组类型的长度是否满足预期

### Arrays

- `toContain` 对数组内的特定项进行匹配测试
- `toHaveLength` 测试字符串和数组类型的长度是否满足预期

### Exceptions 异常

- `toThrow`对一个特定函数调用时候抛出的错误进行测试

我们必须使用一个函数将将扔出的异常做一个包装，否则会因为函数抛出导致该断言失败

## 测试异步函数

[文件示例]()

- 支持使用`async`和`await`写法
- `Promise`写法一定要返回`return`一个`promise`

> 注意：一定要确保返回了 Promise，如果省略了这步，你的测试将会在 fetchData 完成之前首先结束掉。

## 在`React`中使用`JEST`

### `react-test-renderer`

[文件示例]()

这个 `package` 提供了一个 `React` 渲染器，用于将 `React` 组件渲染成纯 `JavaScript` 对象，无需依赖 `DOM` 或原生移动环境。

#### TestRenderer

##### TestRenderer.create()

```
TestRenderer.create(element, options);
```

通过传来的 `React` 元素创建一个 `TestRenderer` 实例。它并不使用真实的 `DOM`，但是它依然将组件树完整地渲染到内存，以便于你对它进行断言。此时将返回一个 `TestRenderer` 实例

##### TestRenderer.act()

```
TestRenderer.act(callback);
```

包裹要渲染的代码并在调用 `act()` 时执行更新。这会使得测试更接近 React 在浏览器中的工作方式

#### TestRenderer 实例 TestRenderer instance

##### testRenderer.toJSON()

```
testRenderer.toJSON()
```

返回一个已渲染的的树对象。该树仅包含特定平台的节点，例如 `<div>` 或 `<View>` 和它们的 `props`，但并不包含任何用户编写的组件。这对于快照测试非常方便。

##### testRenderer.update()

```
testRenderer.update(element)
```

使用新的根元素重新渲染内存中的树。它模拟根元素的一次 `React` 更新。如果新的元素和之前的元素有相同的 `type` 和 `key`，该树将会被更新；否则，它将重挂载一个新树。

##### testRenderer.unmount()
```
testRenderer.unmount()
```
卸载内存中的树，会触发相应的生命周期事件。


### 操作`dom`: `react-dom/test-utils` or `@testing-library/react`

[文件示例]()

##### `act`
为断言准备一个组件，包裹要渲染的代码并在调用 `act()` 时执行更新。这会使得测试更接近 `React` 在浏览器中的工作方式。

## 参考
- [jest](https://jestjs.io/docs/zh-Hans/getting-started)
- [react](https://zh-hans.reactjs.org/docs/test-renderer.html)
