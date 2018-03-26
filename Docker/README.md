#  <p align = "center">Docker</p>

## 查找镜像
````
  $ docker search httpd
````
## 拉取docker,``centos/httpd ``
````
  $ docker pull centos/httpd
````
## 列出镜像列表
````
  $ docker images
````
##  docker设置镜像标签
````
$  docker tag e72ce22e1508 centos/httpd:v1.0
````
这里`e72ce22e1508`为image_id
## 列出当前所有正在运行的container 
````
$ docker ps 
````
## 列出所有的container
````
$ docker ps -a
````
## 列出最近一次启动的container 
````
$ docker ps -l 
````

## 进入某个镜像
````
  $ docker run -i -t centos/httpd:v1.0 /bin/bash
````
## 提交修改后的镜像  
````   
docker commit ID new_image_name
$ docker commit b2bc3747097d centos/httpd:v1.0
````

## 用-v挂载主机数据卷到容器内
````
$ docker run -it -v host_path:container_path centos/httpd:v1.0
````

## 复制数据
### 从主机复制到容器
````
$ sudo docker cp host_path containerID:container_path
````
###从容器复制到主机
```
$ sudo docker cp containerID:container_path host_path
``` 
## 导入&&导出容器
### 使用save和load命令
#### 导出
````
$  docker save e72ce22e1508>/root/centos.tar  
````
将镜像保存为本地文件，其中`e72ce22e1508`为image id
#### 导入
````
$ docker load<centos.tar
````
### 使用export和import命令
#### 导出
````
$ docker export e72ce22e1508> centos.tar
````
#### 导入
````
$  docker import centos.tar 
````
 !!!!需要注意两种方法不可混用。





