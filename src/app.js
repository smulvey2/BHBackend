// import { createRequire } from 'module'
// const require = createRequire(import.meta.url)
const apiRouter = require("./routes.js");

const cors = require("cors");
const express = require("express");
const app = express();

app.use(express.json());
app.use(cors());

const http = require('http');

const hostname = '192.168.0.115';
const port = 3000;

app.get("/", (req, res) => {
  res.send(`req: ${req}`);
});

app.use("/api", apiRouter);

app.listen(port, hostname, () => {
  //console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = app;