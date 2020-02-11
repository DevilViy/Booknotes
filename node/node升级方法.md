# node 升级方法

1. 检查 node 的当前版本，使用命令

   ```bash
   $ node -v
   ```

1. 清除 npm cache

   ```bash
   $  sudo npm cache clean -f
   ```

1. 安装 node 版本管理工具 'n'

   ```bash
   $ sudo npm install -g n
   ```

1. 使用版本管理工具安装指定 `node` 或者升级到最新 `node` 版本；

   ```
   $  sudo n stable  （安装node最新版本）

   $  sudo n 12.15.0 （安装node指定版本12.15.0）
   ```

1. 使用 `node -v` 查看 `node` 版本，如果版本号改变为你想要的则升级成功。若版本号未改变则还需配置 `node` 环境变量

   1. 查看通过 `n` 安装的 `node` 的位置；

      ```
      $ which node (如：/usr/local/n/versions/node/12.15.0）
      ```

   1. `cd` 进入 `/usr/local/n/versions/node/` 你应该能看到你刚通过 `n` 安装的 `node` 版本这里如：`12.15.0`；编辑 `/etc/profile`;

      ```bash
      vi /etc/profile
      ```

   1. 将 `node` 安装的路径（这里为：`/usr/local/n/versions/node/12.15.0`）添加到文件末尾；

      ```
      #set node path

      export NODE_HOME=/usr/local/n/versions/node/12.15.0

      export PATH=$NODE_HOME/bin:$PATH
      ```

   1. `wq!` 退出保存文件，编译 `/etc/profile`;
      ```bash
      $ source /etc/profile
      ```
   1. 再次使用 `node -v` 查看 `node` 版本，不出意外版本号应该变为你想要的。
