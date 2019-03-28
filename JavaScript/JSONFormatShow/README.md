# JSON 格式化展示

## 平常格式化展示(美化输出)

> `JSON.stringify(json, undefined, 2)`;

> `JSON.stringify(json,null, 2)` // 缩进 2 个空格

> `JSON.stringify(json,null, '\t')` // 按 tab 缩进

> `JSON.stringify(value[, replacer[, space]])`

- `value` : 传入的数据
- `replacer` ：函数，传入的参数是每个成员的 key 和 value
- `space` ：缩进，该值设置了，则会自动格式。数字则表示空格，如 2，表示缩进 2 个空格，还可以设置为 ‘\t’，表示按 tab 缩进

## 核心代码

[js](./JSONFormatShow.js)

```js
function jsonFormatShowHighlight(json) {
  if (typeof json !== "string") {
    json = JSON.stringify(json, null, 2);
  }
  json = json
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">");
  return json.replace(
    /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
    function(match) {
      var cls = "number";
      if (/^"/.test(match)) {
        if (/:$/.test(match)) {
          cls = "key";
        } else {
          cls = "string";
        }
      } else if (/true|false/.test(match)) {
        cls = "boolean";
      } else if (/null/.test(match)) {
        cls = "null";
      }
      return '<span class="' + cls + '">' + match + "</span>";
    }
  );
}
```

## 参考来源

- [MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify)
- [在 html 页面中展示 JSON](https://www.jianshu.com/p/04127d74d88c)
