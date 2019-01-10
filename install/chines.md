# 语言环境设定中文

## docker下的centos
```
$ yum -y install kde-l10n-Chinese && yum -y reinstall glibc-common
```
```
$ localedef -c -f UTF-8 -i zh_CN zh_CN.utf8
```
```
$ export LC_ALL=zh_CN.utf8
或者  (下次进入docker 配置永久生效)
$ vi  ~/.bashrc
在 ~/.bashrc文件里添加
export LC_ALL=zh_CN.utf8
之后
$ source  ~/.bashrc
```
## 参考链接
- [Docker下CentOS中文乱码问题处理](https://my.oschina.net/colour10/blog/878071)
