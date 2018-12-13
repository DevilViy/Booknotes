# Webpack
## webpack中的path、publicPath和contentBase
- `output`里面的`path`表示的是`output`目录对应的一个绝对路径。
- `output`里面的`publicPath`表示的是打包生成的`index.html`文件里面引用资源的前缀
- `devServer`里面的`publicPath`表示的是打包生成的静态文件所在的位置（若是`devServer`里面的`publicPath`没有设置，
    则会认为是`output`里面设置的`publicPath`的值）
- `devServer`里面的`contentBase`表示的是告诉服务器从哪里提供内容。（只有想提供静态文件时才需要）

## 参考链接
- [参考掘金](https://juejin.im/post/5bb085dd6fb9a05cd24da5cf)
