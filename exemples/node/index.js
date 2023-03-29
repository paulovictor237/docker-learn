// npm init -y
// npm i -P express

// docker run -it --rm --name peve -v "$PWD:/usr/src/app" -w "/usr/src/app" -p "3000:3000" node bash -c "npm install && node index"
// docker kill peve

// docker build -t peve-image . # . é onde está o Dockerfile
// docker images
// docker ps
// docker run -d --rm --name peve-node -p "3000:3000" peve-image

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
