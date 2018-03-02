# <p align = "center"> Supervisor </p>

###出现unix:///var/run/supervisor/supervisor.sock no such file
````bash
检查supervisord.conf 里
[unix_http_server]
file=/var/run/supervisor/supervisor.sock   ; (the path to the socket file)

这之后 
方案一
$ supervisord
方案二
$ sudo touch /var/run/supervisor/supervisor.sock  
$ sudo chmod 777 /var/run/supervisor/supervisor.sock 
$ supervisord
````