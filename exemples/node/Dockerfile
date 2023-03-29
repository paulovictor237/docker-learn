FROM node
WORKDIR /user/src/app
COPY package.json .
# gera cache e roda antes do container iniciar
RUN npm install 
COPY index.js .
# ADD arquivo-host arquivo-host-transferido # faz uma cópia do arquivo/folder
# não gera cache e executa depois de montado a imagem
CMD ["node","--watch","index.js"] 