const api = require("./api");
const endpoints = require("./endpoints");
const express = require("express");
const app = express();
const port = 8000;

app.use("/api/:topic/", api);
app.use("/", endpoints);
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
