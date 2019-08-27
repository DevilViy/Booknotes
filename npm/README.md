# npm

## npm 发包

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

#### 发布一个带 tag 的版本

```
npm publish --tag next
```

增加`--tag`参数和后面的`tag`名字即可

##### 版本号

npm 使用的是一种叫做 [semantic version](https://semver.org) 的规范，它的规则很简单，总结起来就是下面几条：

- 使用 semver 的软件必须定义公开、严谨、易于理解的 API。也就是模块要提供功能给用户。

- 版本号格式为：`X.Y.Z`，并且 `X、Y、Z` 均为正整数并且不断递增。X 表示大版本（major）、Y 表示小版本（minor）、Z 表示补丁版本（patch）。

- 一个版本发布后，此版本内容不能再变更，变更必须再发布一个新版本。也就是不能覆盖发布。

- `0.Y.Z` 表示初始版本，这种版本下的 API 不能保证稳定，随时可能变更。

- 当进行了向后兼容的 bug 修复时，补丁版本 Z 必须增加。

- 当引入了向后兼容的新功能时，小版本 Y 必须增加，同时 Z 必须重置为 0（小版本里面可能会包含 bug 修复）。

- 当引入了不兼容的变更时，大版本 X 必须增加，同时 Y、Z 必须重置为 0（大版本里面可能会包含小版本或者补丁版本的改动）。

- `X.Y.Z` 后面还可以加预发布版本号、构建信息，格式为：`X.Y.Z-pre_lease+build_meta`，比如：`1.0.0-alpha+20151226`、`1.0.0-beta.2+20151230`。

- 进行版本号比较时，遵循下面的规则：
  - 1）依次按数值比较 X、Y、Z 的值，直到第一个不同的位置；
  - 2）如果两个版本的 X、Y、Z 都相等，含有 pre-release 版本号的较小；
  - 3）如果两个版本的 X、Y、Z 都相等并且都含有 pre-release 版本号，要单独比较 pre-release 版本。比如：`1.0.0` < `2.0.0` < `2.1.0` < `2.1.1`，`1.0.0-alpha` < `1.0.0`，`1.0.0-alpha` < `1.0.0-alpha.1` < `1.0.0-alpha.beta` < `1.0.0-beta` < `1.0.0-beta.2`

直接使用 npm version <update_type>命令自动搞定版本号的更改

| npm version | 功能                                                                                                                                                                                                                                                                                                  |
| :---------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    major    | - 如果没有预发布号，则直接升级一位大号，其他位都置为 0 <br/> - 如果有预发布号： <br/> -- 中号和小号都为 0，则不升级大号，而将预发布号删掉。即 2.0.0-1 变成 2.0.0，这就是预发布的作用 <br/> -- 如果中号和小号有任意一个不是 0，那边会升级一位大号，其他位都置为 0，清空预发布号。即 2.0.1-0 变成 3.0.0 |
|    minor    | - 如果没有预发布号，则升级一位中号，大号不动，小号置为空 <br/> - 如果有预发布号: <br/> -- 如果小号为 0，则不升级中号，将预发布号去掉 <br/> -- 如果小号不为 0，同理没有预发布号                                                                                                                        |
|    patch    | - 如果没有预发布号：直接升级小号，去掉预发布号 <br/> - 如果有预发布号：去掉预发布号，其他不动                                                                                                                                                                                                         |
|  premajor   | - 直接升级大号，中号和小号置为 0，增加预发布号为 0                                                                                                                                                                                                                                                    |
|  preminor   | - 直接升级中号，小号置为 0，增加预发布号为 0                                                                                                                                                                                                                                                          |
|  prepatch   | - 直接升级小号，增加预发布号为 0                                                                                                                                                                                                                                                                      |
| prerelease  | - 如果没有预发布号：增加小号，增加预发布号为 0 <br/> - 如果有预发布号，则升级预发布号                                                                                                                                                                                                                 |

版本号的三位分别是 大号.中号.小号-预发布号
如果执行了`prerelease`，版本号会从`1.1.1-0`变成 `1.1.1-1`
或者`1.0.5-alpha.1`-->`1.0.5-alpha.2`
`v1.0.6-alpha`--->`v1.0.6-alpha.0`

```
npm version patch => z+1
npm version minor => y+1 && z=0
npm version major => x+1 && y=0 && z=0
```

如果项目是 GIT

```
npm version patch -m "Upgrade to %s for reasons"
```

## npm 测试包

开发阶段测试

1. 当本地写完 npm 包的代码时，如果是业务依赖或者有服务依赖想简单跑个主流程，很简单我们就在本地项目引入这个本地 npm 包，比如 B 项目 依赖 本地开发的 npm 包 A，那我们开始安装一下：
   ```
   $ npm install --save ../A/packages/modules
   ```
   或者
   ```
   yarn add ../A/packages/modules
   ```
   即可，安装成功后会 发现 B 项目的 package.json 中显示依赖如下 "A": "file:../A/packages/modules" 注意：modules 文件夹下需要包含 package.json 文件并在文件夹中申明 包名和入口文件如下：
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

## npm 命令

### npm view

- 查看包的信息

```
npm view 包名
```

### npm info

- 在当前包下查看包的信息

```
npm info
```

### npm dist-tag

- 显示所有的 tag 信息

  ```
  npm dist-tag ls [<pkg>]
  ```

  即`npm dist-tag`获取到所有的最新的版本，包括`prerelease`与稳定版本

- 切换 tag

  ```
  npm dist-tag add <pkg>@<version> latest
  ```
