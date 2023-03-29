# Docker

```
run = pull + create + start + exec
```

Pull

```sh
docker images
docker pull node
docker pull ubuntu
docker pull mysql
docker rmi ubuntu
```

Run

```sh
docker ps
docker ps -a
docker run ubuntu /bin/bash --version
docker run -d ubuntu # modo detach
docker run -it ubuntu # modo interativo
```

Start

```sh
docker run -it ubuntu # modo interativo
docker start paceful_lehmann # inicia o container novamente
docker start -ai paceful_lehmann # inicia em modo interativo atatch
docker logs paceful_lehmann # consegue ver os logs sem entrar no container
docker logs -f paceful_lehmann # f -> follow
docker exec -it paceful_lehmann bash # entra novamente no container
docker stop paceful_lehmann # para o container
```

Ps

```sh
docker ps -a
dosker ps -q #exibe só os ids
docker ps -f status=exited -q # f filter
docker rm $(docker ps -f status=exited -q)
docker ps -a
docker ps --format "table {{.ID}}\t{{.Names}}\t{{.Status}}" -a
```

Name

```sh
docker run -d --name peve ubuntu
```

Rm

```sh
docker run -d --rm --name peve ubuntu # é removido logo após a execussao
```

Mapeamento de volume

```javascript
console.log("RODANDO"); //index.js
```

```sh
# v -> volume
# w -> workdir
# c -> cmd
# bash = /bin/bash
docker run -it --rm --name peve -v "$PWD:/usr/src/app" -w "/usr/src/app" node bash -c "node index"
```

Mapeamento de porta

```javascript
// npm init -y
// npm i -P express
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

```sh
# p -> porta
docker run -it --rm --name peve -v "$PWD:/usr/src/app" -w "/usr/src/app" -p "3000:3000" node bash -c "npm install && node index"
```

volume

```sh
# e -> variavel de ambiante
docker run -d --rm --name peve-mysql -e MYSQL_ROOT_PASSWORD=segredo mysql
docker exec -it peve-mysql bash
> mysql -uroot -p
> segredo
```

```sh
docker volume create volume-mysql
docker volume ls
docker volume inspect volume-mysql
docker run -d --rm --name peve-mysql -v "volume-mysql:/var/lib/mysql" -e MYSQL_ROOT_PASSWORD=segredo mysql
```

NETWORK

```sh
docker network ls
# default = bridge
docker network create peve-network
docker network connect peve-network peve-mysql
docker inspect peve-mysql
docker network disconnect bridge peve-mysql # desconecta da rede bridge

```

```sh
# conectar na mesma rede
docker run -it --rm --name peve-node -v "$PWD:/usr/src/app" -w "/us
r/src/app" -p "3000: 3000" --network=peve-network node bash -c "npm i && node index"
```

# Dockerfile + Build

```dockerfile
FROM node
WORKDIR /user/src/app
COPY package.json .
RUN npm install # gera cache e roda antes do container iniciar
COPY index.js .
# ADD arquivo-host arquivo-host-transferido # faz uma cópia do arquivo/folder
CMD ["node","index"] # não gera cache e executa depois de montado a imagem
```

```sh
docker build -t peve-image . # . é onde está o Dockerfile
docker images
docker ps
docker run -it --rm --name ayrton-node -p "3000:3000" --network=peve-network peve-image
```

```sh
# construir uma imagem
# mysql-image é o nome para a imagem que construi
# FLAG t = Flag ou nome para a imagem
# FLAG f = especifica que a imagem deve ser gerada a partir de um dockerfile
docker build -t mysql-image -f ./test/api/db/Dockerfile .
```
