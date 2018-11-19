# npm

## npm发包

#### 添加用户
```
$ npm adduser
Username:
Password:
Email:
```
#### 登录
```
$ npm login
Username:
Password:
Emial:
```
##### 发布
在要发布的文件目录下
```
$ npm publish
```
仅仅当 package.json 文件中的 version 变化时才能发布，不然 npm 会认为当前版本没有变动
#### 取消发布
```
$ npm unpublish
```
对于取消发布，仅仅能在发布后的 `24` 小时内取消。



## npm测试包

开发阶段测试
1. 当本地写完 npm 包的代码时，如果是业务依赖或者有服务依赖想简单跑个主流程，很简单我们就在本地项目引入这个本地npm包，比如 B 项目 依赖 本地开发的 npm包 A，那我们开始安装一下：
    ```
    $ npm install --save ../A/packages/modules
    ```
    或者
    ```
    yarn add ../A/packages/modules
    ```
    即可，安装成功后会 发现 B项目的 package.json 中显示依赖如下 "A": "file:../A/packages/modules" 注意：modules 文件夹下需要包含 package.json 文件并在文件夹中申明 包名和入口文件如下：
    ```
    {
        "name": "A",
        "version": "0.0.1",
        "description": "基础库",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "license": "MIT"
    }
    ```
2. 开发的自动化测试

    使用 jest 测试

3. 人工测试
## 其他
### package.json 文件
一般通过`npm init`
### 小图标
可以使用 [shields.io](https://shields.io/) 生成小图标使用，比如：

![ex](https://img.shields.io/badge/matrixChange-1.2.1-blue.svg)
### 关于 ci （持续化部署）
可以在 [travis-ci](https://www.travis-ci.org/) 上注册上自己的 `github` 账号，然后配置一个 `.travis.yml` 文件即可完成自动化打包压缩等等。`Hexo` 博客都是使用这种方式进行更新代码的

## 参考链接
- [yarn](https://yarnpkg.com/lang/zh-hans/docs/dependency-types/)
- [npm 发包小记](https://segmentfault.com/a/1190000015448278)
