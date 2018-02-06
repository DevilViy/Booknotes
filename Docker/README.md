#  <p align = "center">Docker</p>
````
查找镜像
  docker search httpd
拉取docker
  docker pull httpd
  
列出镜像列表
  docker images

进入某个镜像
  docker run -i -t centos/httpd:v1.0 /bin/bash

  docker ps -a
提交修改后的镜像     
  docker commit b2bc3747097d centos/httpd:v1.0
 

 
 用-v挂载主机数据卷到容器内
 
 从主机复制到容器sudo docker cp host_path containerID:container_path
 
 从容器复制到主机sudo docker cp containerID:container_path host_path
 
 容器ID的查询方法:docker ps -a
 
```
