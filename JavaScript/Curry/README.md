# 柯里化（curry）

## 柯里化的概念

curry 的概念很简单：只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。

例子：

```
function volume(l,w,h) {
    return l * w * h;
}
const aCylinder = volume(100,20,90) // 180000
```

柯里化后

```
function volume(l) {
    return (w) => {
        return (h) => {
            return l * w * h
        }
    }
}
const aCylinder = volume(100)(20)(90) // 180000
```

## 柯里化作用

- 编写轻松重用和配置的小代码块，就像我们使用 npm 一样：
- 避免频繁调用具有相同参数的函数

```
function volume(l, w, h) {
    return l * w * h;
}
volume(200,30,100) // 2003000l
volume(32,45,100); //144000l
volume(2322,232,100) // 53870400l
```

```
function volume(h) {
    return (w) => {
        return (l) => {
            return l * w * h
        }
    }
}
```

```
const hCylinderHeight = volume(100);
hCylinderHeight(200)(30); // 600,000l
hCylinderHeight(2322)(232); // 53,870,400l
```

## 通用的柯里化函数
开发一个函数，它接受任何函数并返回一个柯里化版本的函数
```
function curry(fn, ...args) {
    return (..._arg) => {
        return fn(...args, ..._arg);
    }
}
```

# 参考链接

- [柯里化](https://llh911001.gitbooks.io/mostly-adequate-guide-chinese/content/ch4.html#%E6%80%BB%E7%BB%93)
- [理解 JavaScript 中的柯里化](https://juejin.im/post/5be5b5a65188250fa835897e?utm_source=gold_browser_extension)
