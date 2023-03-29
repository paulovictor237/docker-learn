// yarn init -y
// yarn add express @types/express typescript ts-node-dev
// touch index.ts
// yarn ts-node-dev index.ts
// docker compose up

import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
