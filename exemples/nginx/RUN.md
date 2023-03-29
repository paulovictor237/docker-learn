# nginx

```shell
# teste com nginx
docker run -p 8080:80 nginx
curl http://localhost:8080
# mapar uma folder com a flag -v
docker container run -p 8080:80 -v ./html:/usr/share/nginx/html nginx
# rodar em background
docker run -d --name ex-deamon-basic -p 8080:80 -v ./html:/usr/share/nginx/html nginx
docker stop ex-deamon-basic
# log
docker logs ex-deamon-basic
```
